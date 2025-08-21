import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import LoginPage from './LoginPage';
import Header from './Header';
import LeftSideBar from './LeftSideBar';
import DashboardContent from './Home/Dashboard/DashboardContent';
import OverviewContent from './Home/Overview/OverviewContent';
import AccountsContent from './Optimize/Accounts/AccountsContent';
import PlansContent from './Optimize/Plans/PlansContent';
import SummaryContent from './Adoption/Summary/SummaryContent';
import PowerPlatformContent from './Adoption/PowerPlatform/PowerPlatformContent';
import TeamsContent from './Adoption/Teams/TeamsContent';
import VisioContent from './Adoption/Visio/VisioContent';
import ProjectContent from './Adoption/Project/ProjectContent';
import { getTabs, getDefaultTab } from './TabRegistry';

// Universal page component with consistent tabs for all pages
const PageContent = ({ activeTab, selectedMenuItem }) => {
    const renderContent = () => {
        const [category, pageName] = selectedMenuItem.split('/');
        
        // Home category
        if (category === 'Home') {
            if (pageName === 'Dashboard') {
                return <DashboardContent />;
            } else if (pageName === 'Overview') {
                return <OverviewContent activeTab={activeTab} />;
            }
        }
        
        // Optimize category
        else if (category === 'Optimize') {
            if (pageName === 'Accounts') {
                return <AccountsContent />;
            } else if (pageName === 'Plans') {
                return <PlansContent activeTab={activeTab} />;
            }
        }
        
        // Adoption category
        else if (category === 'Adoption') {
            if (pageName === 'Summary') {
                return <SummaryContent activeTab={activeTab} />;
            } else if (pageName === 'PowerPlatform') {
                return <PowerPlatformContent activeTab={activeTab} />;
            } else if (pageName === 'Teams') {
                return <TeamsContent activeTab={activeTab} />;
            } else if (pageName === 'Visio') {
                return <VisioContent activeTab={activeTab} />;
            } else if (pageName === 'Project') {
                return <ProjectContent activeTab={activeTab} />;
            }
        }
        
        // Fallback
        return <DashboardContent />;
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
  const [selectedMenuItem, setSelectedMenuItem] = useState('Home/Dashboard');
  const [currentPath, setCurrentPath] = useState('HOME / Dashboard');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({
    HOME: true,
    OPTIMIZE: true,
    ADOPTION: true
  });

  const showMessageBox = (msg) => {
    setMessage(msg);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Main content area - all pages now use the same structure
  const MainContent = () => {
    return <PageContent activeTab={activeTab} selectedMenuItem={selectedMenuItem} />;
  };

  // Main application layout
  const MainLayout = () => {
    // 使用TabRegistry获取当前页面的标签页
    const tabs = getTabs(selectedMenuItem);
    
    return (
      <div className="flex min-h-screen w-screen font-sans bg-gray-900 dark:bg-gray-900 dark:text-white overflow-hidden">
        <LeftSideBar 
          isSidebarCollapsed={isSidebarCollapsed}
          setIsSidebarCollapsed={setIsSidebarCollapsed}
          selectedMenuItem={selectedMenuItem}
          setSelectedMenuItem={setSelectedMenuItem}
          setCurrentPath={setCurrentPath}
          setActiveTab={setActiveTab}
          expandedCategories={expandedCategories}
          setExpandedCategories={setExpandedCategories}
        />
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