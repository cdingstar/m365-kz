import React, { useState } from 'react';
import CompanyProfileTab from './CompanyProfileTab';
import LicenseTop10Tab from './LicenseTop10Tab';
import CostOptimisationTab from './CostOptimisationTab';

const OverviewContent = ({ activeTab }) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Company Profile':
        return <CompanyProfileTab />;
      case 'License Top 10':
        return <LicenseTop10Tab />;
      case 'Cost Optimisation':
        return <CostOptimisationTab />;
      default:
        return <CompanyProfileTab />;
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

export default OverviewContent;