import React, { useState, useEffect, useRef } from 'react';
import { Search, Bell, UserCircle, LogOut, LifeBuoy, MessageCircle, MessageSquare } from 'lucide-react';
import FeedbackDialog from './components/FeedbackDialog';

const Header = ({ currentPath, onLogout, activeTab, tabs, onTabChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // User menu component
  const UserMenu = () => (
    <div
      ref={menuRef}
      className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50 transition-all duration-200 ease-in-out origin-top-right transform scale-100"
    >
      <button
        onClick={() => {
          window.open('https://help.kaizen-iq.com', '_blank');
          setIsMenuOpen(false);
        }}
        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 w-full text-left"
      >
        <LifeBuoy size={16} className="mr-2" /> Help
      </button>
      <button
        onClick={() => {
          setIsFeedbackOpen(true);
          setIsMenuOpen(false);
        }}
        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 w-full text-left"
      >
        <MessageCircle size={16} className="mr-2" /> Feedback
      </button>
      <button
        disabled
        className="flex items-center px-4 py-2 text-sm text-gray-500 w-full text-left cursor-not-allowed opacity-50"
      >
        <MessageSquare size={16} className="mr-2" /> Assistant
      </button>
      <div className="border-t border-gray-700 my-1"></div>
      <button
        onClick={() => {
          onLogout();
          setIsMenuOpen(false);
        }}
        className="flex items-center px-4 py-2 text-sm text-red-400 hover:bg-gray-700 w-full text-left"
      >
        <LogOut size={16} className="mr-2" /> Logout
      </button>
    </div>
  );

  return (
    <div className="bg-gray-800 border-b border-gray-700">
      {/* Top header bar */}
      <header className="flex items-center h-16 shadow-sm px-6 relative w-full">
        <h3 className="text-xl font-bold text-[#2563eb]">{currentPath}</h3>
        <div className="absolute right-0 top-0 h-full flex items-center space-x-4 pr-6">
          <div className="relative w-48">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search...."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors text-sm bg-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <Bell size={24} className="text-gray-400 hover:text-gray-200 cursor-pointer" />
          <div className="relative">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1 rounded-full focus:outline-none">
              <UserCircle size={32} className="text-gray-400 hover:text-gray-200 cursor-pointer" />
            </button>
            {isMenuOpen && <UserMenu />}
          </div>
        </div>
      </header>
      
      {/* Tab navigation bar */}
      {tabs && tabs.length > 0 && (
        <div className="px-8 py-4 border-t border-gray-700">
          <div className="flex justify-between items-center">
            <div className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => onTabChange && onTabChange(tab)}
                  className={`
                    pb-2 font-bold text-xl transition-colors whitespace-nowrap
                    ${activeTab === tab
                      ? 'text-[#2563eb] border-b-2 border-[#2563eb]'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {/* 日期和货币信息 */}
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-300">28-7-2025</div>
                <div className="text-xs text-gray-400">Last Refresh</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-300">USD</div>
                <div className="text-xs text-gray-400">Currency</div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Feedback Dialog */}
      <FeedbackDialog 
        isOpen={isFeedbackOpen} 
        onClose={() => setIsFeedbackOpen(false)} 
      />
    </div>
  );
};

export default Header;