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
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Recommendation Summary</h2>
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total Recommendations</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Saving Range %</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Monthly Saves (Est.)</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Annual Saves (Est.)</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800">
              <tr className="hover:bg-gray-750 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-200">{summaryData.totalRecommendations}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-200">{summaryData.savingRange}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-200">{summaryData.monthlySaves}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-200">{summaryData.annualSaves}</td>
              </tr>
            </tbody>
          </table>
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
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="space-y-4">
            {subCategories.map((category, index) => (
              <div key={index} className="flex items-center">
                <div className="flex items-center w-48">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                    <span className={`text-lg ${category.isActive ? 'text-white' : 'text-gray-400'}`}>{category.icon}</span>
                  </div>
                  <div className={`text-sm whitespace-nowrap ${category.isActive ? 'text-gray-300' : 'text-gray-500'}`}>{category.name}</div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-700 rounded-full h-6 relative overflow-hidden">
                    <div 
                      className={`${category.color} h-6 rounded-full transition-all duration-500 flex items-center justify-start pl-2`}
                      style={{width: `${category.isActive ? Math.max(10, (category.value / 200)) : 8}%`}}
                    >
                      <span className={`text-xs font-medium ${category.isActive ? 'text-white' : 'text-gray-400'}`}>{category.value.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <div className="w-16 text-right">
                  <span className={`text-sm font-medium ${category.isActive ? 'text-white' : 'text-gray-500'}`}>{category.value.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* X轴标签 */}
          <div className="flex justify-between mt-4 px-24">
            <span className="text-xs text-gray-400">0K</span>
            <span className="text-xs text-gray-400">5K</span>
            <span className="text-xs text-gray-400">10K</span>
            <span className="text-xs text-gray-400">15K</span>
            <span className="text-xs text-gray-400">20K</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizationSummaryTab;
