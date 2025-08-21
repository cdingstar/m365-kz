import React from 'react';

const PowerAppsUsageTab = () => {
  // Power Apps 使用数据
  const powerAppsUsageData = [
    { department: 'Finance', totalUsers: 25, activeUsers: 18, apps: 12, adoptionRate: 72 },
    { department: 'Sales', totalUsers: 30, activeUsers: 22, apps: 15, adoptionRate: 73 },
    { department: 'Marketing', totalUsers: 20, activeUsers: 15, apps: 10, adoptionRate: 75 },
    { department: 'IT', totalUsers: 15, activeUsers: 14, apps: 20, adoptionRate: 93 },
    { department: 'Operations', totalUsers: 20, activeUsers: 12, apps: 8, adoptionRate: 60 },
    { department: 'HR', totalUsers: 10, activeUsers: 5, apps: 6, adoptionRate: 50 }
  ];

  // 热门应用数据
  const topApps = [
    { name: 'Expense Approval', launches: 320, department: 'Finance', creator: 'John Smith' },
    { name: 'Sales Lead Tracker', launches: 280, department: 'Sales', creator: 'Sarah Johnson' },
    { name: 'Marketing Campaign Manager', launches: 240, department: 'Marketing', creator: 'Michael Brown' },
    { name: 'IT Ticket System', launches: 220, department: 'IT', creator: 'Emily Davis' },
    { name: 'Inventory Checker', launches: 180, department: 'Operations', creator: 'Robert Wilson' }
  ];

  // 应用类型分布
  const appTypeDistribution = [
    { type: 'Canvas Apps', count: 42, percentage: 60 },
    { type: 'Model-driven Apps', count: 18, percentage: 26 },
    { type: 'Portal Apps', count: 10, percentage: 14 }
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
          <h3 className="text-gray-400 text-sm mb-1">Total Power Apps Users</h3>
          <p className="text-2xl font-bold text-white">120</p>
          <p className="text-sm text-green-500 mt-2">+8.0% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Active Users</h3>
          <p className="text-2xl font-bold text-white">86</p>
          <p className="text-sm text-green-500 mt-2">+12.5% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Total Apps</h3>
          <p className="text-2xl font-bold text-white">70</p>
          <p className="text-sm text-green-500 mt-2">+15.0% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Overall Adoption Rate</h3>
          <p className="text-2xl font-bold text-white">72%</p>
          <p className="text-sm text-green-500 mt-2">+4.0% from last month</p>
        </div>
      </div>

      {/* 主要内容区域：左右布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* 左侧区域：部门使用情况表格 */}
        <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Power Apps Usage by Department</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total Users</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Active Users</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Apps</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Adoption Rate</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {powerAppsUsageData.map((dept, index) => (
                  <tr key={index} className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{dept.department}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.totalUsers}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.activeUsers}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.apps}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-2.5 mr-2 max-w-[100px]">
                          <div 
                            className={`h-2.5 rounded-full ${
                              dept.adoptionRate >= 90 ? 'bg-green-600' : 
                              dept.adoptionRate >= 70 ? 'bg-blue-600' : 
                              dept.adoptionRate >= 50 ? 'bg-yellow-600' : 'bg-red-600'
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

        {/* 右侧区域：应用类型分布 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">App Type Distribution</h2>
          <div className="space-y-4">
            {appTypeDistribution.map((type, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-white">{type.type}</span>
                  <span className="text-sm text-gray-400">{type.count} ({type.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      index === 0 ? 'bg-purple-600' : 
                      index === 1 ? 'bg-blue-600' : 'bg-teal-600'
                    }`}
                    style={{ width: `${type.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <h3 className="text-lg font-medium text-white mb-4">App Creation Trend</h3>
            <div className="h-40 bg-gray-700 rounded-lg relative overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
                {/* 背景网格线 */}
                <defs>
                  <pattern id="smallgrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#4B5563" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#smallgrid)" />
                
                {/* 柱状图 */}
                <rect x="20" y="70" width="15" height="20" fill="#9333EA" />
                <rect x="45" y="60" width="15" height="30" fill="#9333EA" />
                <rect x="70" y="50" width="15" height="40" fill="#9333EA" />
                <rect x="95" y="40" width="15" height="50" fill="#9333EA" />
                <rect x="120" y="30" width="15" height="60" fill="#9333EA" />
                <rect x="145" y="20" width="15" height="70" fill="#9333EA" />
                
                {/* X轴标签 */}
                <text x="27" y="95" fill="#9CA3AF" fontSize="8" textAnchor="middle">Jan</text>
                <text x="52" y="95" fill="#9CA3AF" fontSize="8" textAnchor="middle">Feb</text>
                <text x="77" y="95" fill="#9CA3AF" fontSize="8" textAnchor="middle">Mar</text>
                <text x="102" y="95" fill="#9CA3AF" fontSize="8" textAnchor="middle">Apr</text>
                <text x="127" y="95" fill="#9CA3AF" fontSize="8" textAnchor="middle">May</text>
                <text x="152" y="95" fill="#9CA3AF" fontSize="8" textAnchor="middle">Jun</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 热门应用 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Top Apps by Usage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {topApps.map((app, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg hover:bg-gray-650 transition-colors">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                    index === 0 ? 'bg-purple-600' : 
                    index === 1 ? 'bg-blue-600' : 
                    index === 2 ? 'bg-teal-600' : 
                    index === 3 ? 'bg-green-600' : 'bg-yellow-600'
                  }`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">{app.name}</h3>
                    <p className="text-xs text-gray-400">{app.department}</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Created by {app.creator}</span>
                    <span>{app.launches} launches</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部区域：采用建议 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Adoption Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-white font-medium">HR & Operations Focus</h3>
                <p className="text-gray-400 text-sm mt-1">HR and Operations have the lowest adoption rates. Schedule targeted training sessions.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-white font-medium">App Showcase</h3>
                <p className="text-gray-400 text-sm mt-1">Organize monthly app showcases to highlight successful implementations and share best practices.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Model-driven Apps</h3>
                <p className="text-gray-400 text-sm mt-1">Increase awareness and training for model-driven apps to diversify app types across departments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerAppsUsageTab;