import React, { useEffect, useState } from 'react';
import SKUAdoptionTab from './SKUAdoptionTab';

const PlansContent = ({ activeTab }) => {
  const [currentTab, setCurrentTab] = useState(activeTab || 'SKU Adoption');
  
  useEffect(() => {
    if (activeTab) {
      setCurrentTab(activeTab);
      console.log("Plans tab changed to:", activeTab);
    }
  }, [activeTab]);
  
  const renderTabContent = () => {
    switch (currentTab) {
      case 'SKU Adoption':
        return <SKUAdoptionTab />;
      default:
        return <SKUAdoptionTab />;
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

export default PlansContent;