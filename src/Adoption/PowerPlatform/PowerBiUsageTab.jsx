import React from 'react';

const PowerBiUsageTab = () => {
  // Power BI 使用数据
  const powerBiUsageData = [
    { department: 'Finance', totalUsers: 45, activeUsers: 40, reports: 28, dashboards: 12, adoptionRate: 89 },
    { department: 'Sales', totalUsers: 60, activeUsers: 48, reports: 35, dashboards: 15, adoptionRate: 80 },
    { department: 'Marketing', totalUsers: 35, activeUsers: 30, reports: 22, dashboards: 10, adoptionRate: 86 },
    { department: 'IT', totalUsers: 25, activeUsers: 24, reports: 30, dashboards: 18, adoptionRate: 96 },
    { department: 'Operations', totalUsers: 30, activeUsers: 25, reports: 20, dashboards: 8, adoptionRate: 83 },
    { department: 'HR', totalUsers: 15, activeUsers: 10, reports: 12, dashboards: 5, adoptionRate: 67 }
  ];

  // 报表使用趋势数据
  const reportUsageTrend = [
    { month: 'Jan', views: 1250, interactions: 850, exports: 320 },
    { month: 'Feb', views: 1320, interactions: 920, exports: 350 },
    { month: 'Mar', views: 1450, interactions: 980, exports: 380 },
    { month: 'Apr', views: 1520, interactions: 1050, exports: 410 },
    { month: 'May', views: 1680, interactions: 1150, exports: 450 },
    { month: 'Jun', views: 1750, interactions: 1220, exports: 480 }
  ];

  // 热门报表数据
  const topReports = [
    { name: 'Financial Dashboard', views: 450, department: 'Finance', creator: 'John Smith' },
    { name: 'Sales Performance', views: 420, department: 'Sales', creator: 'Sarah Johnson' },
    { name: 'Marketing Campaign Analysis', views: 380, department: 'Marketing', creator: 'Michael Brown' },
    { name: 'IT Infrastructure Metrics', views: 350, department: 'IT', creator: 'Emily Davis' },
    { name: 'Operations KPIs', views: 320, department: 'Operations', creator: 'Robert Wilson' }
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
          <h3 className="text-gray-400 text-sm mb-1">Total Power BI Users</h3>
          <p className="text-2xl font-bold text-white">210</p>
          <p className="text-sm text-green-500 mt-2">+5.0% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Active Users</h3>
          <p className="text-2xl font-bold text-white">177</p>
          <p className="text-sm text-green-500 mt-2">+7.3% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Total Reports</h3>
          <p className="text-2xl font-bold text-white">147</p>
          <p className="text-sm text-green-500 mt-2">+12.2% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Total Dashboards</h3>
          <p className="text-2xl font-bold text-white">68</p>
          <p className="text-sm text-green-500 mt-2">+8.0% from last month</p>
        </div>
      </div>

      {/* 主要内容区域：左右布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* 左侧区域：部门使用情况表格 */}
        <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Power BI Usage by Department</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total Users</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Active Users</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Reports</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Dashboards</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Adoption Rate</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {powerBiUsageData.map((dept, index) => (
                  <tr key={index} className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{dept.department}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.totalUsers}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.activeUsers}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.reports}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.dashboards}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-2.5 mr-2 max-w-[100px]">
                          <div 
                            className={`h-2.5 rounded-full ${
                              dept.adoptionRate >= 90 ? 'bg-green-600' : 
                              dept.adoptionRate >= 80 ? 'bg-blue-600' : 
                              dept.adoptionRate >= 70 ? 'bg-yellow-600' : 'bg-red-600'
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

        {/* 右侧区域：热门报表 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Top Reports</h2>
          <div className="space-y-4">
            {topReports.map((report, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg hover:bg-gray-650 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-white font-medium">{report.name}</h3>
                    <p className="text-sm text-gray-400 mt-1">{report.department} • Created by {report.creator}</p>
                  </div>
                  <div className="bg-gray-600 px-2 py-1 rounded text-xs font-medium text-white">
                    {report.views} views
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
              View All Reports
            </button>
          </div>
        </div>
      </div>

      {/* 底部区域：报表使用趋势 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Report Usage Trends (Last 6 Months)</h2>
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
            
            {/* 视图曲线 */}
            <path 
              d="M 60 100 L 120 96 L 180 88 L 240 84 L 300 76 L 360 72" 
              fill="none" 
              stroke="#3B82F6" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 交互曲线 */}
            <path 
              d="M 60 120 L 120 116 L 180 112 L 240 108 L 300 100 L 360 96" 
              fill="none" 
              stroke="#10B981" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 导出曲线 */}
            <path 
              d="M 60 152 L 120 148 L 180 144 L 240 140 L 300 136 L 360 132" 
              fill="none" 
              stroke="#F59E0B" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 图例 */}
            <rect x="60" y="15" width="12" height="4" fill="#3B82F6" />
            <text x="78" y="19" fill="#9CA3AF" fontSize="10">Views</text>
            <rect x="130" y="15" width="12" height="4" fill="#10B981" />
            <text x="148" y="19" fill="#9CA3AF" fontSize="10">Interactions</text>
            <rect x="220" y="15" width="12" height="4" fill="#F59E0B" />
            <text x="238" y="19" fill="#9CA3AF" fontSize="10">Exports</text>
          </svg>
        </div>
      </div>

      {/* 底部区域：采用建议 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mt-8">
        <h2 className="text-xl font-semibold text-white mb-4">Adoption Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-white font-medium">HR Department Focus</h3>
                <p className="text-gray-400 text-sm mt-1">HR has the lowest adoption rate (67%). Schedule targeted training sessions.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Dashboard Creation</h3>
                <p className="text-gray-400 text-sm mt-1">Encourage more dashboard creation to improve data visualization and insights.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Power BI Champions</h3>
                <p className="text-gray-400 text-sm mt-1">Identify and support Power BI champions in each department to drive adoption.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerBiUsageTab;