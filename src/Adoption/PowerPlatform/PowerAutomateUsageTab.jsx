import React from 'react';

const PowerAutomateUsageTab = () => {
  // Power Automate 使用数据
  const powerAutomateUsageData = [
    { department: 'Finance', totalUsers: 20, activeUsers: 14, flows: 18, adoptionRate: 70 },
    { department: 'Sales', totalUsers: 25, activeUsers: 15, flows: 22, adoptionRate: 60 },
    { department: 'Marketing', totalUsers: 15, activeUsers: 10, flows: 14, adoptionRate: 67 },
    { department: 'IT', totalUsers: 12, activeUsers: 10, flows: 30, adoptionRate: 83 },
    { department: 'Operations', totalUsers: 18, activeUsers: 10, flows: 12, adoptionRate: 56 },
    { department: 'HR', totalUsers: 8, activeUsers: 4, flows: 8, adoptionRate: 50 }
  ];

  // 热门流程数据
  const topFlows = [
    { name: 'Invoice Approval', runs: 450, department: 'Finance', creator: 'John Smith' },
    { name: 'Lead Notification', runs: 380, department: 'Sales', creator: 'Sarah Johnson' },
    { name: 'Social Media Alerts', runs: 320, department: 'Marketing', creator: 'Michael Brown' },
    { name: 'Server Monitoring', runs: 280, department: 'IT', creator: 'Emily Davis' },
    { name: 'Inventory Updates', runs: 240, department: 'Operations', creator: 'Robert Wilson' }
  ];

  // 流程类型分布
  const flowTypeDistribution = [
    { type: 'Automated', count: 48, percentage: 52 },
    { type: 'Instant', count: 26, percentage: 28 },
    { type: 'Scheduled', count: 18, percentage: 20 }
  ];

  // 流程运行状态
  const flowRunStatus = [
    { status: 'Succeeded', count: 1850, percentage: 85 },
    { status: 'Failed', count: 220, percentage: 10 },
    { status: 'Cancelled', count: 110, percentage: 5 }
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
          <h3 className="text-gray-400 text-sm mb-1">Total Power Automate Users</h3>
          <p className="text-2xl font-bold text-white">98</p>
          <p className="text-sm text-green-500 mt-2">+6.5% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Active Users</h3>
          <p className="text-2xl font-bold text-white">63</p>
          <p className="text-sm text-green-500 mt-2">+10.5% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Total Flows</h3>
          <p className="text-2xl font-bold text-white">92</p>
          <p className="text-sm text-green-500 mt-2">+18.0% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Overall Adoption Rate</h3>
          <p className="text-2xl font-bold text-white">64%</p>
          <p className="text-sm text-green-500 mt-2">+3.5% from last month</p>
        </div>
      </div>

      {/* 主要内容区域：左右布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* 左侧区域：部门使用情况表格 */}
        <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Power Automate Usage by Department</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total Users</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Active Users</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Flows</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Adoption Rate</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {powerAutomateUsageData.map((dept, index) => (
                  <tr key={index} className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{dept.department}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.totalUsers}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.activeUsers}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.flows}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-2.5 mr-2 max-w-[100px]">
                          <div 
                            className={`h-2.5 rounded-full ${
                              dept.adoptionRate >= 80 ? 'bg-green-600' : 
                              dept.adoptionRate >= 60 ? 'bg-blue-600' : 
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

        {/* 右侧区域：流程类型和运行状态 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Flow Type Distribution</h2>
          <div className="space-y-4">
            {flowTypeDistribution.map((type, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-white">{type.type}</span>
                  <span className="text-sm text-gray-400">{type.count} ({type.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      index === 0 ? 'bg-indigo-600' : 
                      index === 1 ? 'bg-blue-600' : 'bg-teal-600'
                    }`}
                    style={{ width: `${type.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <h3 className="text-lg font-medium text-white mb-4">Flow Run Status</h3>
            <div className="space-y-4">
              {flowRunStatus.map((status, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white">{status.status}</span>
                    <span className="text-sm text-gray-400">{status.count} ({status.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        index === 0 ? 'bg-green-600' : 
                        index === 1 ? 'bg-red-600' : 'bg-yellow-600'
                      }`}
                      style={{ width: `${status.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 热门流程 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Top Flows by Usage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {topFlows.map((flow, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg hover:bg-gray-650 transition-colors">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                    index === 0 ? 'bg-indigo-600' : 
                    index === 1 ? 'bg-blue-600' : 
                    index === 2 ? 'bg-teal-600' : 
                    index === 3 ? 'bg-green-600' : 'bg-yellow-600'
                  }`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">{flow.name}</h3>
                    <p className="text-xs text-gray-400">{flow.department}</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Created by {flow.creator}</span>
                    <span>{flow.runs} runs</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部区域：流程运行趋势 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Flow Run Trends (Last 6 Months)</h2>
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
            <text x="15" y="20" fill="#9CA3AF" fontSize="10" textAnchor="middle">2000</text>
            <text x="15" y="60" fill="#9CA3AF" fontSize="10" textAnchor="middle">1500</text>
            <text x="15" y="100" fill="#9CA3AF" fontSize="10" textAnchor="middle">1000</text>
            <text x="15" y="140" fill="#9CA3AF" fontSize="10" textAnchor="middle">500</text>
            <text x="15" y="180" fill="#9CA3AF" fontSize="10" textAnchor="middle">0</text>
            
            {/* X轴标签 */}
            <text x="60" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Jan</text>
            <text x="120" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Feb</text>
            <text x="180" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Mar</text>
            <text x="240" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Apr</text>
            <text x="300" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">May</text>
            <text x="360" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Jun</text>
            
            {/* 成功运行曲线 */}
            <path 
              d="M 60 140 L 120 130 L 180 120 L 240 100 L 300 80 L 360 60" 
              fill="none" 
              stroke="#10B981" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 失败运行曲线 */}
            <path 
              d="M 60 170 L 120 165 L 180 160 L 240 155 L 300 160 L 360 150" 
              fill="none" 
              stroke="#EF4444" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 图例 */}
            <rect x="60" y="15" width="12" height="4" fill="#10B981" />
            <text x="78" y="19" fill="#9CA3AF" fontSize="10">Successful Runs</text>
            <rect x="180" y="15" width="12" height="4" fill="#EF4444" />
            <text x="198" y="19" fill="#9CA3AF" fontSize="10">Failed Runs</text>
          </svg>
        </div>
      </div>

      {/* 底部区域：采用建议 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mt-8">
        <h2 className="text-xl font-semibold text-white mb-4">Adoption Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-white font-medium">HR & Operations Focus</h3>
                <p className="text-gray-400 text-sm mt-1">HR and Operations departments have the lowest adoption rates. Schedule targeted training sessions.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Reduce Flow Failures</h3>
                <p className="text-gray-400 text-sm mt-1">Investigate and address the 10% flow failure rate to improve reliability and user confidence.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Flow Templates</h3>
                <p className="text-gray-400 text-sm mt-1">Create and share department-specific flow templates to accelerate adoption and standardize processes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerAutomateUsageTab;