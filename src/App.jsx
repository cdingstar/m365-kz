import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import LoginPage from './LoginPage';
import Header from './Header';
import OverviewContent from './components/Home/Overview/OverviewContent';
import { PowerBIUsageContent, PowerAppsUsageContent, PowerAutomateUsageContent } from './components/Home/Adoption/AdoptionContent';
import { TeamAnalyticsContent, CollaborationContent } from './components/Home/Teams/TeamsContent';
import OptimizeAccountsContent from './components/Optimize/Accounts/OptimizeAccountsContent';
import { UsageAnalyticsContent, PerformanceContent } from './components/Optimize/ProductUsage/ProductUsageContent';
import { LicensePlansContent, CostAnalysisContent } from './components/Optimize/Plans/PlansContent';
import { 
  IdentityAccountsContent, 
  PermissionsContent, 
  GroupManagementContent, 
  AccessControlContent, 
  UserProfilesContent, 
  SettingsContent 
} from './components/Identity/Accounts/IdentityContent';
import {
  LayoutDashboard,
  BarChart,
  Users,
  Building,
  ChevronsLeft,
  ChevronsRight,
  UserCircle,
  Folder,
  Layers,
  User,
  LogOut
} from 'lucide-react';

// 定义菜单项
const navItems = [
  {
    category: 'Home',
    items: [
      { name: 'Overview', icon: LayoutDashboard, id: 'Home/Overview' },
      { name: 'Adoption', icon: Users, id: 'Home/Adoption' },
      { name: 'Teams', icon: Building, id: 'Home/Teams' },
    ],
  },
  {
    category: 'Optimize',
    items: [
      { name: 'Accounts', icon: User, id: 'Optimize/Accounts' },
      { name: 'Product Usage', icon: BarChart, id: 'Optimize/Product Usage' },
      { name: 'Plans', icon: Folder, id: 'Optimize/Plans' },
    ],
  },
  {
    category: 'Identity',
    items: [
      { name: 'Accounts', icon: Users, id: 'Identity/Accounts' },
      { name: 'Groups', icon: Layers, id: 'Identity/Groups' },
      { name: 'Profiles', icon: UserCircle, id: 'Identity/Profiles' },
    ],
  },
];

// Universal page component with consistent tabs for all pages
const OverviewPage = ({ activeTab, selectedMenuItem }) => {
    const renderContent = () => {
        const [category, pageName] = selectedMenuItem.split('/');
        
        // Home category
        if (category === 'Home') {
            if (pageName === 'Overview') {
                return <OverviewContent activeTab={activeTab} />;
            } else if (pageName === 'Adoption') {
                switch (activeTab) {
                    case 'Power BI Usage':
                        return <PowerBIUsageContent />;
                    case 'Power Apps Usage':
                        return <PowerAppsUsageContent />;
                    case 'Power Automate Usage':
                        return <PowerAutomateUsageContent />;
                    default:
                        return <PowerBIUsageContent />;
                }
            } else if (pageName === 'Teams') {
                switch (activeTab) {
                    case 'Team Analytics':
                        return <TeamAnalyticsContent />;
                    case 'Collaboration':
                        return <CollaborationContent />;
                    default:
                        return <TeamAnalyticsContent />;
                }
            }
        }
        
        // Optimize category
        else if (category === 'Optimize') {
            if (pageName === 'Accounts') {
                return <OptimizeAccountsContent activeTab={activeTab} />;
            } else if (pageName === 'Product Usage') {
                switch (activeTab) {
                    case 'Usage Analytics':
                        return <UsageAnalyticsContent />;
                    case 'Performance':
                        return <PerformanceContent />;
                    default:
                        return <UsageAnalyticsContent />;
                }
            } else if (pageName === 'Plans') {
                switch (activeTab) {
                    case 'License Plans':
                        return <LicensePlansContent />;
                    case 'Cost Analysis':
                        return <CostAnalysisContent />;
                    default:
                        return <LicensePlansContent />;
                }
            }
        }
        
        // Identity category
        else if (category === 'Identity') {
            if (pageName === 'Accounts') {
                switch (activeTab) {
                    case 'Identity Accounts':
                        return <IdentityAccountsContent />;
                    case 'Permissions':
                        return <PermissionsContent />;
                    default:
                        return <IdentityAccountsContent />;
                }
            } else if (pageName === 'Groups') {
                switch (activeTab) {
                    case 'Group Management':
                        return <GroupManagementContent />;
                    case 'Access Control':
                        return <AccessControlContent />;
                    default:
                        return <GroupManagementContent />;
                }
            } else if (pageName === 'Profiles') {
                switch (activeTab) {
                    case 'User Profiles':
                        return <UserProfilesContent />;
                    case 'Settings':
                        return <SettingsContent />;
                    default:
                        return <UserProfilesContent />;
                }
            }
        }
        
        // Fallback
        return <OverviewContent />;
    };

    return (
        <div className="w-full min-h-full bg-[#1e293b]">
            {renderContent()}
        </div>
    );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('Home/Overview');
  const [currentPath, setCurrentPath] = useState('Home / Overview');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [activeTab, setActiveTab] = useState('Company Profile');

  // Get default tab for each page
  const getDefaultTabForPage = (pageId) => {
    const [category, pageName] = pageId.split('/');
    
    switch (category) {
      case 'Home':
        return 'Company Profile';
      case 'Optimize':
        if (pageName === 'Accounts') {
          return 'Account Details (no SKU)';
        } else if (pageName === 'Product Usage') {
          return 'Usage Analytics';
        } else if (pageName === 'Plans') {
          return 'License Plans';
        }
        break;
      case 'Identity':
        if (pageName === 'Accounts') {
          return 'Identity Accounts';
        } else if (pageName === 'Groups') {
          return 'Group Management';
        } else if (pageName === 'Profiles') {
          return 'User Profiles';
        }
        break;
      default:
        return 'Company Profile';
    }
    return 'Company Profile';
  };

  const showMessageBox = (msg) => {
    setMessage(msg);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  // Sidebar
  const Sidebar = () => (
    <div
      className={`bg-gray-800 text-white flex flex-col transition-all duration-300 ease-in-out ${
        isSidebarCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex items-center p-4 h-16 border-b border-gray-700">
        {!isSidebarCollapsed && (
          <span className="text-xl font-bold text-[#2563eb]">MS365 SaaS</span>
        )}
        <button
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className={`ml-auto p-2 rounded-md hover:bg-gray-700 transition-colors ${
            isSidebarCollapsed ? '' : 'text-[#2563eb]'
          }`}
        >
          {isSidebarCollapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto mt-2">
        {navItems.map((category, catIndex) => (
          <div key={catIndex} className="mb-4">
            {!isSidebarCollapsed && (
              <h2 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                {category.category}
              </h2>
            )}
            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <button
                    onClick={() => {
                        setSelectedMenuItem(item.id);
                        setCurrentPath(`${category.category} / ${item.name}`);
                        // Set default tab based on the selected page
                        const defaultTab = getDefaultTabForPage(item.id);
                        setActiveTab(defaultTab);
                    }}
                    className={`flex items-center w-full px-4 py-3 text-sm font-medium transition-colors ${
                      selectedMenuItem === item.id
                        ? 'bg-[#2563eb] text-white rounded-r-full shadow-lg'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <item.icon size={20} className="mr-3" />
                    {!isSidebarCollapsed && <span>{item.name}</span>}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );

  // Get tabs for current page - different tabs based on selected menu item
  const getCurrentPageTabs = () => {
    const menuCategory = selectedMenuItem.split('/')[0];
    const menuName = selectedMenuItem.split('/')[1];
    
    switch (menuCategory) {
      case 'Home':
        if (menuName === 'Overview') {
          return ['Company Profile', 'License Top 10', 'Cost Optimisation'];
        } else if (menuName === 'Adoption') {
          return ['Power BI Usage', 'Power Apps Usage', 'Power Automate Usage'];
        } else if (menuName === 'Teams') {
          return ['Team Analytics', 'Collaboration'];
        }
        break;
      case 'Optimize':
        if (menuName === 'Accounts') {
          return ['Account Details (no SKU)', 'Account Details (with SKU)'];
        } else if (menuName === 'Product Usage') {
          return ['Usage Analytics', 'Performance'];
        } else if (menuName === 'Plans') {
          return ['SKU Adoption', 'License Plans', 'Cost Analysis'];
        }
        break;
      case 'Identity':
        if (menuName === 'Accounts') {
          return ['Identity Accounts', 'Permissions'];
        } else if (menuName === 'Groups') {
          return ['Group Management', 'Access Control'];
        } else if (menuName === 'Profiles') {
          return ['User Profiles', 'Settings'];
        }
        break;
      default:
        return ['Company Profile', 'License Top 10'];
    }
    return ['Company Profile', 'License Top 10'];
  };

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Main content area - all pages now use the same structure as Overview
  const MainContent = () => {
    // All pages now use the same tab-based structure as Overview
    return <OverviewPage activeTab={activeTab} selectedMenuItem={selectedMenuItem} />;
  };

  // Main application layout
  const MainLayout = () => {
    const tabs = getCurrentPageTabs();
    
    return (
      <div className="flex min-h-screen w-screen font-sans bg-gray-900 dark:bg-gray-900 dark:text-white overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 min-w-0 w-full h-screen">
          <Header 
            currentPath={currentPath} 
            onLogout={() => setIsLoggedIn(false)}
            activeTab={activeTab}
            tabs={tabs}
            onTabChange={handleTabChange}
          />
          <div className="flex-1 overflow-y-auto bg-[#1e293b] w-full">
              <MainContent />
          </div>
        </div>
        {showMessage && <MessageBox message={message} />}
      </div>
    );
  };

  const MessageBox = ({ message }) => {
    return createPortal(
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full relative z-10">
          <p className="text-center text-lg font-semibold text-white">{message}</p>
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setShowMessage(false)}
              className="px-4 py-2 bg-[#2563eb] text-white rounded-md hover:bg-[#1d4ed8]"
            >
              OK
            </button>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return isLoggedIn ? <MainLayout /> : <LoginPage onLogin={() => setIsLoggedIn(true)} />;
};

export default App;