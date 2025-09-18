import React from 'react';

const OptimizationSummaryTab = () => {
  // 推荐摘要数据
  const summaryData = {
    totalRecommendations: '44,370',
    savingRange: '64.2% - 64.2%',
    monthlySaves: '$747,288 - $747,288',
    annualSaves: '$8,967,456 - $8,967'
  };

  // 推荐类别数据
  const recommendationCategories = [
    {
      name: 'Zombie',
      icon: '📦',
      description: 'Unused licenses',
      recommendations: '4,720',
      savings: '$170,457',
      color: 'bg-blue-600',
      isActive: true
    },
    {
      name: 'Over-Subscribed',
      icon: '📊',
      description: 'Excess subscriptions',
      recommendations: '0',
      savings: '$0',
      color: 'bg-gray-600',
      isActive: false
    },
    {
      name: 'Recategorise',
      icon: '🔄',
      description: 'License optimization',
      recommendations: '0',
      savings: '$0',
      color: 'bg-gray-600',
      isActive: false
    },
    {
      name: 'Downgrade',
      icon: '⬇️',
      description: 'License downgrade',
      recommendations: '0',
      savings: '$0',
      color: 'bg-gray-600',
      isActive: false
    },
    {
      name: 'Overlap',
      icon: '🔗',
      description: 'Overlapping licenses',
      recommendations: '0',
      savings: '$0',
      color: 'bg-gray-600',
      isActive: false
    }
  ];

  // 子类别数据
  const subCategories = [
    { name: 'Zombie', value: 2451, color: 'bg-teal-600', icon: '📦', isActive: true },
    { name: 'AD Hygiene', value: 0, color: 'bg-gray-600', icon: '🧹', isActive: false },
    { name: 'Copilot', value: 0, color: 'bg-gray-600', icon: '🤖', isActive: false },
    { name: 'Identity', value: 0, color: 'bg-gray-600', icon: '👤', isActive: false },
    { name: 'Recategorise', value: 0, color: 'bg-gray-600', icon: '🔄', isActive: false },
    { name: 'Over-subscribed', value: 0, color: 'bg-gray-600', icon: '📊', isActive: false },
    { name: 'Downgrade', value: 0, color: 'bg-gray-600', icon: '⬇️', isActive: false },
    { name: 'License Hygiene', value: 0, color: 'bg-gray-600', icon: '🧽', isActive: false }
  ];

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* Recommendation Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm text-gray-400">Total Recommendations</h3>
            </div>
          </div>
          <p className="text-2xl font-bold text-white">{summaryData.totalRecommendations}</p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm text-gray-400">Saving Range %</h3>
            </div>
          </div>
          <p className="text-2xl font-bold text-white">{summaryData.savingRange}</p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm text-gray-400">Monthly Saves (Est.)</h3>
            </div>
          </div>
          <p className="text-2xl font-bold text-white">{summaryData.monthlySaves}</p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm text-gray-400">Annual Saves (Est.)</h3>
            </div>
          </div>
          <p className="text-2xl font-bold text-white">{summaryData.annualSaves}</p>
        </div>
      </div>

      {/* 主要内容区域：横向并列 Financial 和 Sub-Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* 左侧区域：Financial 推荐类别 */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Financial</h2>
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Recommendations</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Potential Savings</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Info</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-600">
                {recommendationCategories.map((category, index) => (
                  <tr key={index} className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                          <span className={`text-lg ${category.isActive ? 'text-white' : 'text-gray-400'}`}>{category.icon}</span>
                        </div>
                        <div>
                          <div className={`text-sm font-medium ${category.isActive ? 'text-gray-200' : 'text-gray-500'}`}>{category.name}</div>
                          <div className={`text-xs ${category.isActive ? 'text-gray-400' : 'text-gray-600'}`}>{category.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className={`px-6 py-4 text-sm font-medium ${category.isActive ? 'text-gray-200' : 'text-gray-500'}`}>{category.recommendations}</td>
                    <td className={`px-6 py-4 text-sm font-medium ${category.isActive ? 'text-gray-200' : 'text-gray-500'}`}>{category.savings}</td>
                    <td className="px-6 py-4">
                      <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                        <span className="text-gray-300 text-xs">ℹ</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 右侧区域：Sub-Categories */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Sub-Categories</h2>
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Recommendations</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-600">
                {subCategories.map((category, index) => (
                  <tr key={index} className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                          <span className={`text-lg ${category.isActive ? 'text-white' : 'text-gray-400'}`}>{category.icon}</span>
                        </div>
                        <div>
                          <div className={`text-sm font-medium ${category.isActive ? 'text-gray-200' : 'text-gray-500'}`}>{category.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className={`px-6 py-4 text-sm font-medium ${category.isActive ? 'text-gray-200' : 'text-gray-500'}`}>{category.value.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizationSummaryTab;
