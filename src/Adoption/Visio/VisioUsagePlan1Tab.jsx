import React from 'react';

const VisioUsagePlan1Tab = () => {
  // Visio Plan 1 使用数据
  const visioPlan1UsageData = [
    { department: 'Finance', totalUsers: 15, activeUsers: 12, diagrams: 45, templates: 8, adoptionRate: 80 },
    { department: 'Sales', totalUsers: 8, activeUsers: 5, diagrams: 22, templates: 4, adoptionRate: 63 },
    { department: 'Marketing', totalUsers: 10, activeUsers: 8, diagrams: 30, templates: 6, adoptionRate: 80 },
    { department: 'IT', totalUsers: 25, activeUsers: 22, diagrams: 85, templates: 12, adoptionRate: 88 },
    { department: 'Operations', totalUsers: 18, activeUsers: 14, diagrams: 52, templates: 9, adoptionRate: 78 },
    { department: 'HR', totalUsers: 5, activeUsers: 3, diagrams: 12, templates: 3, adoptionRate: 60 }
  ];

  // 图表类型分布
  const diagramTypeDistribution = [
    { type: 'Flowcharts', count: 85, percentage: 35 },
    { type: 'Network Diagrams', count: 65, percentage: 26 },
    { type: 'Floor Plans', count: 42, percentage: 17 },
    { type: 'Org Charts', count: 35, percentage: 14 },
    { type: 'Other', count: 20, percentage: 8 }
  ];

  // 使用趋势数据
  const usageTrendData = [
    { month: 'Jan', diagrams: 210, activeUsers: 55 },
    { month: 'Feb', diagrams: 225, activeUsers: 58 },
    { month: 'Mar', diagrams: 240, activeUsers: 60 },
    { month: 'Apr', diagrams: 255, activeUsers: 62 },
    { month: 'May', diagrams: 265, activeUsers: 64 },
    { month: 'Jun', diagrams: 280, activeUsers: 65 }
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
          <h3 className="text-gray-400 text-sm mb-1">Total Visio Plan 1 Users</h3>
          <p className="text-2xl font-bold text-white">81</p>
          <p className="text-sm text-green-500 mt-2">+5.2% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Active Users</h3>
          <p className="text-2xl font-bold text-white">64</p>
          <p className="text-sm text-green-500 mt-2">+3.2% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Total Diagrams</h3>
          <p className="text-2xl font-bold text-white">246</p>
          <p className="text-sm text-green-500 mt-2">+8.4% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Overall Adoption Rate</h3>
          <p className="text-2xl font-bold text-white">79%</p>
          <p className="text-sm text-green-500 mt-2">+2.0% from last month</p>
        </div>
      </div>

      {/* 主要内容区域：左右布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* 左侧区域：部门使用情况表格 */}
        <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Visio Plan 1 Usage by Department</h2>
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
                {visioPlan1UsageData.map((dept, index) => (
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

        {/* 右侧区域：图表类型分布 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Diagram Type Distribution</h2>
          <div className="space-y-4">
            {diagramTypeDistribution.map((type, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-white">{type.type}</span>
                  <span className="text-sm text-gray-400">{type.count} ({type.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      index === 0 ? 'bg-cyan-600' : 
                      index === 1 ? 'bg-blue-600' : 
                      index === 2 ? 'bg-teal-600' :
                      index === 3 ? 'bg-indigo-600' : 'bg-gray-500'
                    }`}
                    style={{ width: `${type.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <h3 className="text-lg font-medium text-white mb-4">License Utilization</h3>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Assigned Licenses</span>
                <span className="text-sm font-medium text-white">81</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Active Licenses</span>
                <span className="text-sm font-medium text-green-400">64</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Inactive Licenses</span>
                <span className="text-sm font-medium text-red-400">17</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-600">
                <span className="text-sm font-medium text-white">Monthly Cost</span>
                <span className="text-sm font-medium text-white">$405.00</span>
              </div>
            </div>
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
            <text x="15" y="20" fill="#9CA3AF" fontSize="10" textAnchor="middle">300</text>
            <text x="15" y="60" fill="#9CA3AF" fontSize="10" textAnchor="middle">225</text>
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
              d="M 60 140 L 120 135 L 180 130 L 240 125 L 300 120 L 360 115" 
              fill="none" 
              stroke="#06B6D4" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 活跃用户曲线 */}
            <path 
              d="M 60 125 L 120 122 L 180 120 L 240 118 L 300 116 L 360 115" 
              fill="none" 
              stroke="#3B82F6" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 图例 */}
            <rect x="60" y="15" width="12" height="4" fill="#06B6D4" />
            <text x="78" y="19" fill="#9CA3AF" fontSize="10">Diagrams</text>
            <rect x="150" y="15" width="12" height="4" fill="#3B82F6" />
            <text x="168" y="19" fill="#9CA3AF" fontSize="10">Active Users</text>
          </svg>
        </div>
      </div>

      {/* 热门模板 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Top Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-medium">Basic Flowchart</h3>
                <p className="text-xs text-gray-400">42 uses</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-medium">Network Diagram</h3>
                <p className="text-xs text-gray-400">35 uses</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-medium">Office Layout</h3>
                <p className="text-xs text-gray-400">28 uses</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-medium">Org Chart</h3>
                <p className="text-xs text-gray-400">25 uses</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部区域：采用建议 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Adoption Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Sales & HR Focus</h3>
                <p className="text-gray-400 text-sm mt-1">Sales and HR departments have the lowest adoption rates. Schedule targeted training sessions on basic Visio functionality.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Template Library</h3>
                <p className="text-gray-400 text-sm mt-1">Create and share department-specific templates to increase adoption and standardize diagram creation.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-white font-medium">License Optimization</h3>
                <p className="text-gray-400 text-sm mt-1">Review 17 inactive licenses and consider reassigning to users who would benefit from Visio functionality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisioUsagePlan1Tab;