import React from 'react';

const AdoptionOverviewTab = () => {
  // 采用率摘要数据
  const adoptionSummary = [
    { product: 'Microsoft 365 E3', totalUsers: 1200, activeUsers: 1080, adoptionRate: 90 },
    { product: 'Microsoft 365 E5', totalUsers: 450, activeUsers: 405, adoptionRate: 90 },
    { product: 'Office 365 E1', totalUsers: 300, activeUsers: 240, adoptionRate: 80 },
    { product: 'Power BI Pro', totalUsers: 150, activeUsers: 120, adoptionRate: 80 },
    { product: 'Power Apps', totalUsers: 100, activeUsers: 70, adoptionRate: 70 },
    { product: 'Power Automate', totalUsers: 80, activeUsers: 56, adoptionRate: 70 },
    { product: 'Teams', totalUsers: 2000, activeUsers: 1900, adoptionRate: 95 },
    { product: 'Visio', totalUsers: 75, activeUsers: 60, adoptionRate: 80 },
    { product: 'Project', totalUsers: 50, activeUsers: 40, adoptionRate: 80 }
  ];

  // 应用使用趋势数据
  const appUsageTrend = [
    { month: 'Jan', teams: 92, office: 88, powerPlatform: 65 },
    { month: 'Feb', teams: 93, office: 89, powerPlatform: 68 },
    { month: 'Mar', teams: 94, office: 90, powerPlatform: 70 },
    { month: 'Apr', teams: 94, office: 91, powerPlatform: 72 },
    { month: 'May', teams: 95, office: 92, powerPlatform: 75 },
    { month: 'Jun', teams: 95, office: 92, powerPlatform: 78 }
  ];

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* 版本信息 */}
      <div className="flex justify-end items-center mb-8">
        <div className="flex items-center space-x-6">
          <div className="text-right">
            <div className="text-sm font-medium text-gray-300">4.1</div>
            <div className="text-xs text-gray-400">Current Version</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-gray-300">28-7-2025</div>
            <div className="text-xs text-gray-400">Last Refresh</div>
          </div>
        </div>
      </div>

      {/* 摘要卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Overall Adoption Rate</h3>
          <p className="text-2xl font-bold text-white">87.5%</p>
          <p className="text-sm text-green-500 mt-2">+2.3% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Teams Adoption</h3>
          <p className="text-2xl font-bold text-white">95%</p>
          <p className="text-sm text-green-500 mt-2">+1.0% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Office Apps Adoption</h3>
          <p className="text-2xl font-bold text-white">92%</p>
          <p className="text-sm text-green-500 mt-2">+1.5% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Power Platform Adoption</h3>
          <p className="text-2xl font-bold text-white">78%</p>
          <p className="text-sm text-green-500 mt-2">+3.0% from last month</p>
        </div>
      </div>

      {/* 主要内容区域：左右布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* 左侧区域：采用率表格 */}
        <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white">Product Adoption Rates</h2>
            <div className="flex space-x-2">
              <select className="px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Products</option>
                <option>Microsoft 365</option>
                <option>Office 365</option>
                <option>Power Platform</option>
                <option>Teams</option>
                <option>Visio & Project</option>
              </select>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Filter
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total Users</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Active Users</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Adoption Rate</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Progress</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {adoptionSummary.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.product}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.totalUsers}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.activeUsers}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.adoptionRate}%</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            item.adoptionRate >= 90 ? 'bg-green-600' : 
                            item.adoptionRate >= 80 ? 'bg-blue-600' : 
                            item.adoptionRate >= 70 ? 'bg-yellow-600' : 'bg-red-600'
                          }`}
                          style={{ width: `${item.adoptionRate}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 右侧区域：采用率洞察 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Adoption Insights</h2>
          <div className="space-y-6">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-white font-medium">Top Performing Products</h3>
              <div className="mt-3 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Teams</span>
                  <span className="text-sm font-medium text-green-500">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Office Apps</span>
                  <span className="text-sm font-medium text-green-500">92%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Microsoft 365 E3/E5</span>
                  <span className="text-sm font-medium text-green-500">90%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-white font-medium">Areas for Improvement</h3>
              <div className="mt-3 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Power Automate</span>
                  <span className="text-sm font-medium text-yellow-500">70%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Power Apps</span>
                  <span className="text-sm font-medium text-yellow-500">70%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-white font-medium">Recommendations</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Conduct Power Platform training sessions to improve adoption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Identify Power Platform champions in each department</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Create use case examples for Power Apps and Power Automate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 底部区域：采用率趋势 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Adoption Trends (Last 6 Months)</h2>
        <div className="h-64 bg-gray-700 rounded-lg relative overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
            {/* 背景网格线 */}
            <defs>
              <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#4B5563" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Y轴标签 */}
            <text x="15" y="20" fill="#9CA3AF" fontSize="10" textAnchor="middle">100%</text>
            <text x="15" y="60" fill="#9CA3AF" fontSize="10" textAnchor="middle">75%</text>
            <text x="15" y="100" fill="#9CA3AF" fontSize="10" textAnchor="middle">50%</text>
            <text x="15" y="140" fill="#9CA3AF" fontSize="10" textAnchor="middle">25%</text>
            <text x="15" y="180" fill="#9CA3AF" fontSize="10" textAnchor="middle">0%</text>
            
            {/* X轴标签 */}
            <text x="60" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Jan</text>
            <text x="120" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Feb</text>
            <text x="180" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Mar</text>
            <text x="240" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Apr</text>
            <text x="300" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">May</text>
            <text x="360" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Jun</text>
            
            {/* Teams 曲线 */}
            <path 
              d="M 60 16 L 120 14 L 180 12 L 240 12 L 300 10 L 360 10" 
              fill="none" 
              stroke="#10B981" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* Office Apps 曲线 */}
            <path 
              d="M 60 24 L 120 22 L 180 20 L 240 18 L 300 16 L 360 16" 
              fill="none" 
              stroke="#3B82F6" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* Power Platform 曲线 */}
            <path 
              d="M 60 70 L 120 64 L 180 60 L 240 56 L 300 50 L 360 44" 
              fill="none" 
              stroke="#F59E0B" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 图例 */}
            <rect x="60" y="15" width="12" height="4" fill="#10B981" />
            <text x="78" y="19" fill="#9CA3AF" fontSize="10">Teams</text>
            <rect x="130" y="15" width="12" height="4" fill="#3B82F6" />
            <text x="148" y="19" fill="#9CA3AF" fontSize="10">Office Apps</text>
            <rect x="220" y="15" width="12" height="4" fill="#F59E0B" />
            <text x="238" y="19" fill="#9CA3AF" fontSize="10">Power Platform</text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AdoptionOverviewTab;