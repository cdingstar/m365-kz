import React, { useEffect, useState } from 'react';
import ProjectUsagePlan1Tab from './ProjectUsagePlan1Tab';
import ProjectUsagePlan3Tab from './ProjectUsagePlan3Tab';
import ProjectUsagePlan5Tab from './ProjectUsagePlan5Tab';

const ProjectContent = ({ activeTab }) => {
  const [currentTab, setCurrentTab] = useState(activeTab || 'Project Usage Plan 1');
  
  useEffect(() => {
    if (activeTab) {
      setCurrentTab(activeTab);
    }
  }, [activeTab]);
  
  const renderTabContent = () => {
    switch (currentTab) {
      case 'Project Usage Plan 1':
        return <ProjectUsagePlan1Tab />;
      case 'Project Usage Plan 3':
        return <ProjectUsagePlan3Tab />;
      case 'Project Usage Plan 5':
        return <ProjectUsagePlan5Tab />;
      default:
        return <ProjectUsagePlan1Tab />;
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

export default ProjectContent;
