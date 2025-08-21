import React, { useEffect, useState } from 'react';
import TeamsStandardUsageTab from './TeamsStandardUsageTab';
import TeamsPremiumUsageTab from './TeamsPremiumUsageTab';

const TeamsContent = ({ activeTab }) => {
  const [currentTab, setCurrentTab] = useState(activeTab || 'Teams Standard Usage');
  
  useEffect(() => {
    if (activeTab) {
      setCurrentTab(activeTab);
    }
  }, [activeTab]);
  
  const renderTabContent = () => {
    switch (currentTab) {
      case 'Teams Standard Usage':
        return <TeamsStandardUsageTab />;
      case 'Teams Premium Usage':
        return <TeamsPremiumUsageTab />;
      default:
        return <TeamsStandardUsageTab />;
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

export default TeamsContent;
