import React, { useState } from 'react';
import TeamsTrendsTab from './TeamsTrendsTab';
import TeamsMetricsByLOBTab from './TeamsMetricsByLOBTab';
import TeamsMetricsByCountryTab from './TeamsMetricsByCountryTab';
import TeamsPremiumTab from './TeamsPremiumTab';
import TeamsBySmartTagTab from './TeamsBySmartTagTab';

const TeamsContent = () => {
  const [activeTab, setActiveTab] = useState('premium');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'trends':
        return <TeamsTrendsTab />;
      case 'metricsLOB':
        return <TeamsMetricsByLOBTab />;
      case 'metricsCountry':
        return <TeamsMetricsByCountryTab />;
      case 'premium':
        return <TeamsPremiumTab />;
      case 'smartTag':
        return <TeamsBySmartTagTab />;
      default:
        return <TeamsPremiumTab />;
    }
  };

  return (
    <div className="w-full h-full bg-[#1e293b]">
      <div className="flex border-b border-[#475569]">
        <button
          className={`px-4 py-3 text-sm ${
            activeTab === 'trends' ? 'text-white border-b-2 border-blue-500' : 'text-[#94a3b8]'
          }`}
          onClick={() => setActiveTab('trends')}
        >
          Trends Summary
        </button>
        <button
          className={`px-4 py-3 text-sm ${
            activeTab === 'metricsLOB' ? 'text-white border-b-2 border-blue-500' : 'text-[#94a3b8]'
          }`}
          onClick={() => setActiveTab('metricsLOB')}
        >
          Metrics by Line of Business
        </button>
        <button
          className={`px-4 py-3 text-sm ${
            activeTab === 'metricsCountry' ? 'text-white border-b-2 border-blue-500' : 'text-[#94a3b8]'
          }`}
          onClick={() => setActiveTab('metricsCountry')}
        >
          Metrics by Country
        </button>
        <button
          className={`px-4 py-3 text-sm ${
            activeTab === 'premium' ? 'text-white border-b-2 border-blue-500' : 'text-[#94a3b8]'
          }`}
          onClick={() => setActiveTab('premium')}
        >
          Teams Premium
        </button>
        <button
          className={`px-4 py-3 text-sm ${
            activeTab === 'smartTag' ? 'text-white border-b-2 border-blue-500' : 'text-[#94a3b8]'
          }`}
          onClick={() => setActiveTab('smartTag')}
        >
          Teams by Smart Tag
        </button>
      </div>
      <div className="h-[calc(100%-48px)]">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default TeamsContent;
