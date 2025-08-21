import React from 'react';

const VisioUsagePlan2Tab = () => {
  // Visio Plan 2 使用数据
  const visioPlan2UsageData = [
    { department: 'Finance', totalUsers: 8, activeUsers: 7, diagrams: 35, templates: 6, adoptionRate: 88 },
    { department: 'Sales', totalUsers: 5, activeUsers: 3, diagrams: 18, templates: 2, adoptionRate: 60 },
    { department: 'Marketing', totalUsers: 6, activeUsers: 5, diagrams: 22, templates: 4, adoptionRate: 83 },
    { department: 'IT', totalUsers: 15, activeUsers: 14, diagrams: 65, templates: 10, adoptionRate: 93 },
    { department: 'Operations', totalUsers: 10, activeUsers: 8, diagrams: 42, templates: 7, adoptionRate: 80 },
    { department: 'HR', totalUsers: 3, activeUsers: 2, diagrams: 8, templates: 1, adoptionRate: 67 }
  ];

  // 高级功能使用分布
  const advancedFeatureUsage = [
    { feature: 'Database Integration', percentage: 35 },
    { feature: 'Advanced Connectors', percentage: 25 },
    { feature: 'Process Modeling', percentage: 20 },
    { feature: 'Data Visualization', percentage: 15 },
    { feature: 'Other Advanced Features', percentage: 5 }
  ];

  // 使用趋势数据
  const usageTrendData = [
    { month: 'Jan', diagrams: 170, activeUsers: 35 },
    { month: 'Feb', diagrams: 180, activeUsers: 36 },
    { month: 'Mar', diagrams: 185, activeUsers: 37 },
    { month: 'Apr', diagrams: 190, activeUsers: 38 },
    { month: 'May', diagrams: 195, activeUsers: 39 },
    { month: 'Jun', diagrams: 200, activeUsers: 40 }
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
          <h3 className="text-gray-400 text-sm mb-1">Total Visio Plan 2 Users</h3>
          <p className="text-2xl font-bold text-white">47</p>
          <p className="text-sm text-green-500 mt-2">+4.4% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Active Users</h3>
          <p className="text-2xl font-bold text-white">39</p>
          <p className="text-sm text-green-500 mt-2">+2.6% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Total Diagrams</h3>
          <p className="text-2xl font-bold text-white">190</p>
          <p className="text-sm text-green-500 mt-2">+5.6% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Overall Adoption Rate</h3>
          <p className="text-2xl font-bold text-white">83%</p>
          <p className="text-sm text-green-500 mt-2">+3.0% from last month</p>
        </div>
      </div>

      {/* 主要内容区域：左右布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* 左侧区域：部门使用情况表格 */}
        <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Visio Plan 2 Usage by Department</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total Users</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Active Users</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Diagrams</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Templates</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Adoption Rate</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {visioPlan2UsageData.map((dept, index) => (
                  <tr key={index} className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{dept.department}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.totalUsers}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.activeUsers}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.diagrams}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.templates}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-2.5 mr-2 max-w-[100px]">
                          <div 
                            className={`h-2.5 rounded-full ${
                              dept.adoptionRate >= 85 ? 'bg-green-600' : 
                              dept.adoptionRate >= 70 ? 'bg-blue-600' : 
                              dept.adoptionRate >= 60 ? 'bg-yellow-600' : 'bg-red-600'
                            }`}
                            style={{ width: `${dept.adoptionRate}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-300">{dept.adoptionRate}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 右侧区域：高级功能使用分布 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Advanced Feature Usage</h2>
          <div className="space-y-4">
            {advancedFeatureUsage.map((feature, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-white">{feature.feature}</span>
                  <span className="text-sm text-gray-400">{feature.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      index === 0 ? 'bg-emerald-600' : 
                      index === 1 ? 'bg-blue-600' : 
                      index === 2 ? 'bg-teal-600' :
                      index === 3 ? 'bg-indigo-600' : 'bg-gray-500'
                    }`}
                    style={{ width: `${feature.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <h3 className="text-lg font-medium text-white mb-4">Plan Comparison</h3>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Plan 1 Users</span>
                <span className="text-sm font-medium text-white">81</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Plan 2 Users</span>
                <span className="text-sm font-medium text-white">47</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Plan 2 Monthly Cost</span>
                <span className="text-sm font-medium text-white">$705.00</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-600">
                <span className="text-sm font-medium text-white">Cost per Active User</span>
                <span className="text-sm font-medium text-white">$18.08</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 高级功能使用案例 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Advanced Feature Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-white font-medium">Database Integration</h3>
            </div>
            <p className="text-gray-400 text-sm">IT department created a network infrastructure diagram connected to live asset database, saving 15+ hours per week in manual updates.</p>
            <div className="mt-3 text-xs text-gray-500">Department: IT</div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-white font-medium">Process Automation</h3>
            </div>
            <p className="text-gray-400 text-sm">Finance team automated approval workflows using Visio process diagrams connected to Power Automate, reducing approval time by 65%.</p>
            <div className="mt-3 text-xs text-gray-500">Department: Finance</div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-white font-medium">Data Visualization</h3>
            </div>
            <p className="text-gray-400 text-sm">Operations created interactive supply chain diagrams with real-time data visualization, improving decision-making and reducing bottlenecks.</p>
            <div className="mt-3 text-xs text-gray-500">Department: Operations</div>
          </div>
        </div>
      </div>

      {/* 使用趋势图 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Usage Trends (Last 6 Months)</h2>
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
            <text x="15" y="20" fill="#9CA3AF" fontSize="10" textAnchor="middle">250</text>
            <text x="15" y="60" fill="#9CA3AF" fontSize="10" textAnchor="middle">200</text>
            <text x="15" y="100" fill="#9CA3AF" fontSize="10" textAnchor="middle">150</text>
            <text x="15" y="140" fill="#9CA3AF" fontSize="10" textAnchor="middle">75</text>
            <text x="15" y="180" fill="#9CA3AF" fontSize="10" textAnchor="middle">0</text>
            
            {/* X轴标签 */}
            <text x="60" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Jan</text>
            <text x="120" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Feb</text>
            <text x="180" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Mar</text>
            <text x="240" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Apr</text>
            <text x="300" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">May</text>
            <text x="360" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Jun</text>
            
            {/* 图表曲线 */}
            <path 
              d="M 60 140 L 120 135 L 180 133 L 240 130 L 300 128 L 360 125" 
              fill="none" 
              stroke="#10B981" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 活跃用户曲线 */}
            <path 
              d="M 60 135 L 120 134 L 180 133 L 240 132 L 300 131 L 360 130" 
              fill="none" 
              stroke="#3B82F6" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 图例 */}
            <rect x="60" y="15" width="12" height="4" fill="#10B981" />
            <text x="78" y="19" fill="#9CA3AF" fontSize="10">Diagrams</text>
            <rect x="150" y="15" width="12" height="4" fill="#3B82F6" />
            <text x="168" y="19" fill="#9CA3AF" fontSize="10">Active Users</text>
          </svg>
        </div>
      </div>

      {/* 底部区域：采用建议 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Adoption Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Sales & HR Focus</h3>
                <p className="text-gray-400 text-sm mt-1">Sales and HR departments have the lowest adoption rates. Schedule advanced training on database integration and process modeling.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Cross-Department Sharing</h3>
                <p className="text-gray-400 text-sm mt-1">Implement monthly knowledge sharing sessions where IT can showcase advanced Visio features to other departments.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Plan Optimization</h3>
                <p className="text-gray-400 text-sm mt-1">Review Plan 2 licenses for users who aren't utilizing advanced features and consider downgrading to Plan 1 where appropriate.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisioUsagePlan2Tab;