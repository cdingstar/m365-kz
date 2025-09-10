import React, { useState, useRef, useEffect } from 'react';
import { getDefaultTab } from './TabRegistry';
import {
  LayoutDashboard,
  PieChart,
  BarChart3,
  Users,
  FileSpreadsheet,
  LineChart,
  Layers,
  Video,
  Briefcase,
  ChevronsLeft,
  ChevronsRight,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

// 定义菜单项
const navItems = [
  {
    category: 'HOME',
    items: [
      { name: 'Dashboard', icon: LayoutDashboard, id: 'Home/Dashboard' },
      { name: 'Overview', icon: PieChart, id: 'Home/Overview' }
    ],
  },
  {
    category: 'OPTIMIZE',
    items: [
      { name: 'Accounts', icon: Users, id: 'Optimize/Accounts' },
      { name: 'Plans', icon: FileSpreadsheet, id: 'Optimize/Plans' }
    ],
  },
  {
    category: 'ADOPTION',
    items: [
      { name: 'Summary', icon: BarChart3, id: 'Adoption/Summary' },
      { name: 'Power Platform', icon: LineChart, id: 'Adoption/PowerPlatform' },
      { name: 'Teams', icon: Layers, id: 'Adoption/Teams' },
      { name: 'Visio', icon: Video, id: 'Adoption/Visio' },
      { name: 'Project', icon: Briefcase, id: 'Adoption/Project' }
    ],
  }
];

const LeftSideBar = ({ 
  isSidebarCollapsed, 
  setIsSidebarCollapsed, 
  selectedMenuItem, 
  setSelectedMenuItem, 
  setCurrentPath, 
  setActiveTab,
  expandedCategories,
  setExpandedCategories
}) => {
  
  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // 获取默认标签页 - 这个逻辑将被移除，由各Content组件自行处理
  const getDefaultTabForPage = (pageId) => {
    // 这个函数将被简化，因为标签页的定义将移至各Content组件
    return '';
  };

  return (
    <div
      className={`bg-gray-800 text-white flex flex-col transition-all duration-300 ease-in-out ${
        isSidebarCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex items-center p-4 h-16 border-b border-gray-700">
        {!isSidebarCollapsed && (
          <div className="relative group">
            <div className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300">
              <span className="text-xl font-bold text-[#2563eb] group-hover:text-blue-400 transition-colors duration-300">M365 SaaS</span>
              <ChevronDown 
                size={16} 
                className="ml-2 text-[#2563eb] transform transition-all duration-300 
                           group-hover:rotate-180 group-hover:text-blue-400 group-hover:translate-y-1" 
              />
            </div>
            
            {/* 下拉菜单 */}
            <div className="absolute left-0 mt-2 w-full bg-gray-800 rounded-md shadow-lg py-1 z-50 
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          transition-all duration-300 transform origin-top scale-95 group-hover:scale-100
                          border border-transparent group-hover:border-blue-800">
              <button className="flex items-center px-4 py-2 text-sm text-[#2563eb] font-bold hover:bg-gray-700 w-full text-left
                               transition-all duration-200 hover:pl-6 hover:text-blue-400">
                M365 SaaS
              </button>
              <button className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 w-full text-left
                               transition-all duration-200 hover:pl-6 hover:text-blue-400">
                Azure SaaS
              </button>
              <button className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 w-full text-left
                               transition-all duration-200 hover:pl-6 hover:text-blue-400">
                AWS SaaS
              </button>
            </div>
          </div>
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
          <div key={catIndex} className="mb-2">
            {!isSidebarCollapsed ? (
              <div 
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700"
                onClick={() => toggleCategory(category.category)}
              >
                <h2 className="text-sm font-semibold text-gray-300">
                  {category.category}
                </h2>
                <div className="ml-auto">
                  {expandedCategories[category.category] ? 
                    <ChevronDown size={16} className="text-gray-400" /> : 
                    <ChevronRight size={16} className="text-gray-400" />
                  }
                </div>
              </div>
            ) : (
              <div className="h-6"></div> // 占位符，保持折叠时的间距
            )}
            
            {(expandedCategories[category.category] || isSidebarCollapsed) && (
              <ul>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <button
                      onClick={() => {
                        setSelectedMenuItem(item.id);
                        setCurrentPath(`${category.category} / ${item.name}`);
                        // 使用TabRegistry获取默认标签页
                        setActiveTab(getDefaultTab(item.id));
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
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default LeftSideBar;