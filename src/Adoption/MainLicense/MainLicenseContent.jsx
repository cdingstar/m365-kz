import React, { useEffect, useState } from 'react';
import MainLicenseF1Tab from './MainLicenseF1Tab';
import MainLicenseF3Tab from './MainLicenseF3Tab';
import MainLicenseE1Tab from './MainLicenseE1Tab';
import MainLicenseE3Tab from './MainLicenseE3Tab';
import MainLicenseE5Tab from './MainLicenseE5Tab';

const MainLicenseContent = ({ activeTab, onTabChange }) => {
  const [currentTab, setCurrentTab] = useState(activeTab || 'Main License F1');
  
  useEffect(() => {
    if (activeTab) {
      setCurrentTab(activeTab);
    }
  }, [activeTab]);
  
  const renderTabContent = () => {
    switch (currentTab) {
      case 'Main License F1':
        return <MainLicenseF1Tab />;
      case 'Main License F3':
        return <MainLicenseF3Tab />;
      case 'Main License E1':
        return <MainLicenseE1Tab />;
      case 'Main License E3':
        return <MainLicenseE3Tab />;
      case 'Main License E5':
        return <MainLicenseE5Tab />;
      default:
        return <MainLicenseF1Tab />;
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* 标签页内容 */}
      <div className="container mx-auto">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default MainLicenseContent;