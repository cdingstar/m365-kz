import React from 'react';

const TeamsStandardUsageTab = () => {
  // Teams 标准版使用数据
  const teamsUsageData = [
    { department: 'Finance', totalUsers: 85, activeUsers: 75, meetings: 320, calls: 480, chats: 1250, adoptionRate: 88 },
    { department: 'Sales', totalUsers: 120, activeUsers: 110, meetings: 450, calls: 680, chats: 2100, adoptionRate: 92 },
    { department: 'Marketing', totalUsers: 65, activeUsers: 55, meetings: 280, calls: 320, chats: 980, adoptionRate: 85 },
    { department: 'IT', totalUsers: 45, activeUsers: 42, meetings: 210, calls: 180, chats: 850, adoptionRate: 93 },
    { department: 'Operations', totalUsers: 90, activeUsers: 75, meetings: 340, calls: 420, chats: 1450, adoptionRate: 83 },
    { department: 'HR', totalUsers: 30, activeUsers: 24, meetings: 150, calls: 90, chats: 520, adoptionRate: 80 }
  ];

  // 功能使用趋势数据
  const featureUsageTrend = [
    { month: 'Jan', meetings: 1450, calls: 1850, chats: 6200 },
    { month: 'Feb', meetings: 1580, calls: 2050, chats: 6800 },
    { month: 'Mar', meetings: 1720, calls: 2250, chats: 7400 },
    { month: 'Apr', meetings: 1850, calls: 2380, chats: 7900 },
    { month: 'May', meetings: 1950, calls: 2450, chats: 8200 },
    { month: 'Jun', meetings: 2100, calls: 2600, chats: 8500 }
  ];

  // 设备使用分布
  const deviceUsage = [
    { device: 'Desktop App', percentage: 45 },
    { device: 'Web App', percentage: 25 },
    { device: 'Mobile App', percentage: 20 },
    { device: 'Teams Phone', percentage: 10 }
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
          <h3 className="text-gray-400 text-sm mb-1">Total Teams Users</h3>
          <p className="text-2xl font-bold text-white">435</p>
          <p className="text-sm text-green-500 mt-2">+3.2% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Active Users</h3>
          <p className="text-2xl font-bold text-white">381</p>
          <p className="text-sm text-green-500 mt-2">+5.0% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Total Teams</h3>
          <p className="text-2xl font-bold text-white">68</p>
          <p className="text-sm text-green-500 mt-2">+8.0% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Overall Adoption Rate</h3>
          <p className="text-2xl font-bold text-white">88%</p>
          <p className="text-sm text-green-500 mt-2">+2.5% from last month</p>
        </div>
      </div>

      {/* 主要内容区域：左右布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* 左侧区域：部门使用情况表格 */}
        <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Teams Usage by Department</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total Users</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Active Users</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Meetings</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Calls</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Chats</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Adoption Rate</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {teamsUsageData.map((dept, index) => (
                  <tr key={index} className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{dept.department}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.totalUsers}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.activeUsers}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.meetings}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.calls}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.chats}</td>
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

        {/* 右侧区域：设备使用分布 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Device Usage Distribution</h2>
          <div className="space-y-4">
            {deviceUsage.map((device, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-white">{device.device}</span>
                  <span className="text-sm text-gray-400">{device.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      index === 0 ? 'bg-blue-600' : 
                      index === 1 ? 'bg-purple-600' : 
                      index === 2 ? 'bg-teal-600' : 'bg-amber-600'
                    }`}
                    style={{ width: `${device.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <h3 className="text-lg font-medium text-white mb-4">Teams Activity Breakdown</h3>
            <div className="h-40 bg-gray-700 rounded-lg relative overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
                {/* 饼图 */}
                <circle cx="100" cy="50" r="40" fill="transparent" stroke="#4B5563" strokeWidth="1" />
                
                {/* 饼图扇区 - 会议 */}
                <path d="M 100 50 L 100 10 A 40 40 0 0 1 135.3 65 Z" fill="#3B82F6" />
                <text x="125" y="40" fill="white" fontSize="8" textAnchor="middle">Meetings</text>
                <text x="125" y="50" fill="white" fontSize="8" textAnchor="middle">35%</text>
                
                {/* 饼图扇区 - 通话 */}
                <path d="M 100 50 L 135.3 65 A 40 40 0 0 1 100 90 Z" fill="#8B5CF6" />
                <text x="125" y="75" fill="white" fontSize="8" textAnchor="middle">Calls</text>
                <text x="125" y="85" fill="white" fontSize="8" textAnchor="middle">20%</text>
                
                {/* 饼图扇区 - 聊天 */}
                <path d="M 100 50 L 100 90 A 40 40 0 0 1 64.7 65 Z" fill="#10B981" />
                <text x="75" y="75" fill="white" fontSize="8" textAnchor="middle">Chats</text>
                <text x="75" y="85" fill="white" fontSize="8" textAnchor="middle">25%</text>
                
                {/* 饼图扇区 - 文件共享 */}
                <path d="M 100 50 L 64.7 65 A 40 40 0 0 1 64.7 35 Z" fill="#F59E0B" />
                <text x="60" y="50" fill="white" fontSize="8" textAnchor="middle">Files</text>
                <text x="60" y="60" fill="white" fontSize="8" textAnchor="middle">10%</text>
                
                {/* 饼图扇区 - 应用 */}
                <path d="M 100 50 L 64.7 35 A 40 40 0 0 1 100 10 Z" fill="#EC4899" />
                <text x="75" y="25" fill="white" fontSize="8" textAnchor="middle">Apps</text>
                <text x="75" y="35" fill="white" fontSize="8" textAnchor="middle">10%</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 功能使用趋势 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Feature Usage Trends (Last 6 Months)</h2>
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
            <text x="15" y="20" fill="#9CA3AF" fontSize="10" textAnchor="middle">9000</text>
            <text x="15" y="60" fill="#9CA3AF" fontSize="10" textAnchor="middle">6000</text>
            <text x="15" y="100" fill="#9CA3AF" fontSize="10" textAnchor="middle">3000</text>
            <text x="15" y="140" fill="#9CA3AF" fontSize="10" textAnchor="middle">1500</text>
            <text x="15" y="180" fill="#9CA3AF" fontSize="10" textAnchor="middle">0</text>
            
            {/* X轴标签 */}
            <text x="60" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Jan</text>
            <text x="120" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Feb</text>
            <text x="180" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Mar</text>
            <text x="240" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Apr</text>
            <text x="300" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">May</text>
            <text x="360" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Jun</text>
            
            {/* 聊天曲线 */}
            <path 
              d="M 60 120 L 120 110 L 180 100 L 240 90 L 300 85 L 360 80" 
              fill="none" 
              stroke="#10B981" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 通话曲线 */}
            <path 
              d="M 60 150 L 120 145 L 180 140 L 240 135 L 300 133 L 360 130" 
              fill="none" 
              stroke="#8B5CF6" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 会议曲线 */}
            <path 
              d="M 60 155 L 120 150 L 180 145 L 240 140 L 300 138 L 360 135" 
              fill="none" 
              stroke="#3B82F6" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 图例 */}
            <rect x="60" y="15" width="12" height="4" fill="#10B981" />
            <text x="78" y="19" fill="#9CA3AF" fontSize="10">Chats</text>
            <rect x="130" y="15" width="12" height="4" fill="#8B5CF6" />
            <text x="148" y="19" fill="#9CA3AF" fontSize="10">Calls</text>
            <rect x="200" y="15" width="12" height="4" fill="#3B82F6" />
            <text x="218" y="19" fill="#9CA3AF" fontSize="10">Meetings</text>
          </svg>
        </div>
      </div>

      {/* 底部区域：采用建议 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Adoption Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-white font-medium">HR Department Focus</h3>
                <p className="text-gray-400 text-sm mt-1">HR has the lowest adoption rate (80%). Schedule targeted training sessions on Teams collaboration features.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Mobile App Adoption</h3>
                <p className="text-gray-400 text-sm mt-1">Increase mobile app usage (currently 20%) by promoting its benefits for remote and hybrid work scenarios.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Teams App Integration</h3>
                <p className="text-gray-400 text-sm mt-1">Promote Teams app integrations to increase productivity and streamline workflows across departments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsStandardUsageTab;