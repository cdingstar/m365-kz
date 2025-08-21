import React from 'react';
import CompanyProfileTab from './CompanyProfileTab';
import LicenseAssignmentTab from './LicenseAssignmentTab';
import OptimizationSummaryTab from './OptimizationSummaryTab';

const OverviewContent = ({ activeTab }) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Company Profile':
        return <CompanyProfileTab />;
      case 'License Assignment':
        return <LicenseAssignmentTab />;
      case 'Optimization Summary':
        return <OptimizationSummaryTab />;
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