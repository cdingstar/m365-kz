import React, { useState } from 'react';
import SKUAdoptionTab from './SKUAdoptionTab';
import CapabilityModellingTab from './CapabilityModellingTab';
import EnterpriseSKUUsageTab from './EnterpriseSKUUsageTab';
import UsageGroupingTab from './UsageGroupingTab';
import PlanDetailsTab from './PlanDetailsTab';

// License Plans Tab component
export const LicensePlansContent = () => {
  const [activeTab, setActiveTab] = useState('SKU Adoption');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'SKU Adoption':
        return <SKUAdoptionTab />;
      case 'Capability Modelling':
        return <CapabilityModellingTab />;
      case 'Enterprise SKU Usage':
        return <EnterpriseSKUUsageTab />;
      case 'Usage Grouping (by SKU)':
        return <UsageGroupingTab />;
      case 'Plan Details':
        return <PlanDetailsTab />;
      default:
        return <SKUAdoptionTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* 顶部导航标签 */}
      <div className="mb-6 border-b border-gray-700 px-6 pt-4">
        <div className="flex space-x-8">
          {['SKU Adoption', 'Capability Modelling', 'Enterprise SKU Usage', 'Usage Grouping (by SKU)', 'Plan Details'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? 'font-bold text-[#2563eb] border-b-2 border-[#2563eb]'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      {/* 标签内容 */}
      <div className="w-full">
        {renderTabContent()}
      </div>
    </div>
  );
};

// Cost Analysis Tab component
export const CostAnalysisContent = () => (
  <div className="w-full h-full bg-[#1e293b] p-8">
    <div className="w-full h-full bg-[#334155] p-8 rounded-lg border border-[#475569] flex items-center justify-center" style={{backgroundColor: '#334155'}}>
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4 text-white">
          Plans - Cost Analysis
        </h1>
        <p className="text-[#94a3b8] text-lg">
          Placeholder
        </p>
      </div>
    </div>
  </div>
);
