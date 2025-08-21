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
      color: 'bg-blue-600'
    },
    {
      name: 'Over-Subscribed',
      icon: '📊',
      description: 'Excess subscriptions',
      recommendations: '15',
      savings: '$570,789',
      color: 'bg-purple-600'
    },
    {
      name: 'Recategorise',
      icon: '🔄',
      description: 'License optimization',
      recommendations: '691',
      savings: '$691',
      color: 'bg-teal-600'
    },
    {
      name: 'Downgrade',
      icon: '⬇️',
      description: 'License downgrade',
      recommendations: '8',
      savings: '$160',
      color: 'bg-orange-600'
    },
    {
      name: 'Overlap',
      icon: '🔗',
      description: 'Overlapping licenses',
      recommendations: '0',
      savings: '$0',
      color: 'bg-red-600'
    }
  ];

  // 子类别数据
  const subCategories = [
    { name: 'AD Hygiene', value: 8714, color: 'bg-blue-600' },
    { name: 'Copilot', value: 4720, color: 'bg-purple-600' },
    { name: 'Zombie', value: 2451, color: 'bg-teal-600' },
    { name: 'Identity', value: 691, color: 'bg-orange-600' },
    { name: 'Recategorise', value: 15, color: 'bg-red-600' },
    { name: 'Over-subscribed', value: 8, color: 'bg-yellow-600' },
    { name: 'Downgrade', value: 1, color: 'bg-green-600' },
    { name: 'License Hygiene', value: 1, color: 'bg-pink-600' }
  ];

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* 页面标题和版本信息 */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Optimization Summary</h1>
        <div className="flex items-center space-x-6">
          <div className="text-right">
            <div className="text-sm font-medium text-gray-300">4.1</div>
            <div className="text-xs text-gray-400">Current Version</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-gray-300">28-7-2025</div>
            <div className="text-xs text-gray-400">Last Refresh</div>
          </div>
          <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">M</span>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-gray-300">USD</div>
            <div className="text-xs text-gray-400">Currency</div>
          </div>
        </div>
      </div>

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

      {/* 主要内容区域：左右布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
        {/* 左侧区域：Financial 推荐类别 */}
        <div className="lg:col-span-3">
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
                          <span className="text-white text-lg">{category.icon}</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-200">{category.name}</div>
                          <div className="text-xs text-gray-400">{category.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-200">{category.recommendations}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-200">{category.savings}</td>
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

        {/* 右侧区域：Categories 饼图 */}
        <div className="lg:col-span-1">
          <h2 className="text-lg font-semibold text-white mb-4">Categories</h2>
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="w-full h-64 flex items-center justify-center mb-4">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* 饼图段 - Operations */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#6B7280"
                    strokeWidth="20"
                    strokeDasharray="157.4 251.2"
                    strokeDashoffset="0"
                  />
                  {/* 饼图段 - Adoption */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="20"
                    strokeDasharray="49.2 251.2"
                    strokeDashoffset="-157.4"
                  />
                  {/* 饼图段 - Financial */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#0D9488"
                    strokeWidth="20"
                    strokeDasharray="30.7 251.2"
                    strokeDashoffset="-206.6"
                  />
                  {/* 饼图段 - Security */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#DC2626"
                    strokeWidth="20"
                    strokeDasharray="13.9 251.2"
                    strokeDashoffset="-237.3"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">44,370</div>
                    <div className="text-xs text-gray-400">Total</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 图例 */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
                <span className="text-gray-300">Operations 27,771 (62.6%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                <span className="text-gray-300">Adoption 8,714 (19.6%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-teal-600 rounded-full mr-2"></div>
                <span className="text-gray-300">Financial 5,434 (12.2%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                <span className="text-gray-300">Security 2,451 (5.5%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部区域：Sub-Categories */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Sub-Categories</h2>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="space-y-4">
            {subCategories.map((category, index) => (
              <div key={index} className="flex items-center">
                <div className="w-24 text-sm text-gray-300">{category.name}</div>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-700 rounded-full h-6 relative overflow-hidden">
                    <div 
                      className={`${category.color} h-6 rounded-full transition-all duration-500 flex items-center justify-start pl-2`}
                      style={{width: `${Math.max(10, (category.value / 200))}%`}}
                    >
                      <span className="text-white text-xs font-medium">{category.value.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <div className="w-16 text-right">
                  <span className="text-sm font-medium text-white">{category.value.toLocaleString()}</span>
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
  );
};

export default OptimizationSummaryTab;
