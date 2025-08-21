import React, { useEffect, useState } from 'react';
import PowerBiUsageTab from './PowerBiUsageTab';
import PowerAppsUsageTab from './PowerAppsUsageTab';
import PowerAutomateUsageTab from './PowerAutomateUsageTab';

const PowerPlatformContent = ({ activeTab }) => {
  const [currentTab, setCurrentTab] = useState(activeTab || 'Power Bi Usage');
  
  useEffect(() => {
    if (activeTab) {
      setCurrentTab(activeTab);
    }
  }, [activeTab]);
  
  const renderTabContent = () => {
    switch (currentTab) {
      case 'Power Bi Usage':
        return <PowerBiUsageTab />;
      case 'Power Apps Usage':
        return <PowerAppsUsageTab />;
      case 'Power Automate Usage':
        return <PowerAutomateUsageTab />;
      default:
        return <PowerBiUsageTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* 标签内容 */}
      <div className="w-full">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default PowerPlatformContent;