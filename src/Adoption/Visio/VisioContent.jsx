import React, { useEffect, useState } from 'react';
import VisioUsagePlan1Tab from './VisioUsagePlan1Tab';
import VisioUsagePlan2Tab from './VisioUsagePlan2Tab';

const VisioContent = ({ activeTab }) => {
  const [currentTab, setCurrentTab] = useState(activeTab || 'Visio Usage Plan 1');
  
  useEffect(() => {
    if (activeTab) {
      setCurrentTab(activeTab);
    }
  }, [activeTab]);
  
  const renderTabContent = () => {
    switch (currentTab) {
      case 'Visio Usage Plan 1':
        return <VisioUsagePlan1Tab />;
      case 'Visio Usage Plan 2':
        return <VisioUsagePlan2Tab />;
      default:
        return <VisioUsagePlan1Tab />;
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

export default VisioContent;
