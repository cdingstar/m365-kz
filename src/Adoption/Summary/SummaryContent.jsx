import React, { useEffect, useState } from 'react';
import AdoptionOverviewTab from './AdoptionOverviewTab';

const SummaryContent = ({ activeTab }) => {
  const [currentTab, setCurrentTab] = useState(activeTab || 'Adoption Overview');
  
  useEffect(() => {
    if (activeTab) {
      setCurrentTab(activeTab);
      console.log("Summary tab changed to:", activeTab);
    }
  }, [activeTab]);
  
  const renderTabContent = () => {
    switch (currentTab) {
      case 'Adoption Overview':
        return <AdoptionOverviewTab />;
      default:
        return <AdoptionOverviewTab />;
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

export default SummaryContent;