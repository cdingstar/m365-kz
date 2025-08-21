import React from 'react';

const ActiveAccountsTab = () => {
  // 活跃账户数据
  const activeAccounts = [
    { id: 1, name: 'John Smith', email: 'john.smith@contoso.com', department: 'IT', lastActive: '2025-08-21', licenses: 'Microsoft 365 E3' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah.j@contoso.com', department: 'Marketing', lastActive: '2025-08-20', licenses: 'Microsoft 365 E5' },
    { id: 3, name: 'Michael Brown', email: 'michael.b@contoso.com', department: 'Sales', lastActive: '2025-08-21', licenses: 'Microsoft 365 E3' },
    { id: 4, name: 'Emily Davis', email: 'emily.d@contoso.com', department: 'HR', lastActive: '2025-08-19', licenses: 'Office 365 E1' },
    { id: 5, name: 'Robert Wilson', email: 'robert.w@contoso.com', department: 'Finance', lastActive: '2025-08-20', licenses: 'Microsoft 365 E3' },
    { id: 6, name: 'Jennifer Lee', email: 'jennifer.l@contoso.com', department: 'Operations', lastActive: '2025-08-21', licenses: 'Microsoft 365 E5' },
    { id: 7, name: 'David Miller', email: 'david.m@contoso.com', department: 'IT', lastActive: '2025-08-18', licenses: 'Microsoft 365 E3' },
    { id: 8, name: 'Lisa Taylor', email: 'lisa.t@contoso.com', department: 'Marketing', lastActive: '2025-08-19', licenses: 'Office 365 E1' }
  ];

  // 部门分布数据
  const departmentStats = [
    { department: 'IT', count: 12450, percentage: 25 },
    { department: 'Sales', count: 9870, percentage: 20 },
    { department: 'Marketing', count: 7420, percentage: 15 },
    { department: 'Finance', count: 6930, percentage: 14 },
    { department: 'HR', count: 4950, percentage: 10 },
    { department: 'Operations', count: 7920, percentage: 16 }
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
          <h3 className="text-gray-400 text-sm mb-1">Total Active Users</h3>
          <p className="text-2xl font-bold text-white">49,540</p>
          <p className="text-sm text-green-500 mt-2">+2.4% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Active Rate</h3>
          <p className="text-2xl font-bold text-white">85.2%</p>
          <p className="text-sm text-green-500 mt-2">+1.5% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Avg. Daily Active Users</h3>
          <p className="text-2xl font-bold text-white">42,780</p>
          <p className="text-sm text-green-500 mt-2">+3.2% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">New Activations</h3>
          <p className="text-2xl font-bold text-white">1,245</p>
          <p className="text-sm text-green-500 mt-2">+12.5% from last month</p>
        </div>
      </div>

      {/* 主要内容区域：左右布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* 左侧区域：活跃账户表格 */}
        <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white">Recent Active Accounts</h2>
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Search accounts..." 
                className="px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Last Active</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Licenses</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {activeAccounts.map((account) => (
                  <tr key={account.id} className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{account.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{account.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{account.department}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{account.lastActive}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{account.licenses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-700 flex justify-between items-center">
            <div className="text-sm text-gray-400">
              Showing 8 of 49,540 accounts
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors">
                Previous
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>

        {/* 右侧区域：部门分布 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Department Distribution</h2>
          <div className="space-y-4">
            {departmentStats.map((dept, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-white">{dept.department}</span>
                  <span className="text-sm text-gray-400">{dept.count} ({dept.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="h-2.5 rounded-full bg-blue-600"
                    style={{ width: `${dept.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <h3 className="text-lg font-medium text-white mb-4">License Distribution</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-3 rounded-lg text-center">
                <p className="text-sm text-gray-400">Microsoft 365 E3</p>
                <p className="text-xl font-bold text-white mt-1">62%</p>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg text-center">
                <p className="text-sm text-gray-400">Microsoft 365 E5</p>
                <p className="text-xl font-bold text-white mt-1">18%</p>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg text-center">
                <p className="text-sm text-gray-400">Office 365 E1</p>
                <p className="text-xl font-bold text-white mt-1">12%</p>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg text-center">
                <p className="text-sm text-gray-400">Other</p>
                <p className="text-xl font-bold text-white mt-1">8%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部区域：活跃度趋势 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Activity Trend (Last 30 Days)</h2>
        <div className="h-64 bg-gray-700 rounded-lg relative overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
            {/* 背景网格线 */}
            <defs>
              <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#4B5563" strokeWidth="0.5"/>
              </pattern>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Y轴标签 */}
            <text x="15" y="20" fill="#9CA3AF" fontSize="10" textAnchor="middle">50k</text>
            <text x="15" y="60" fill="#9CA3AF" fontSize="10" textAnchor="middle">40k</text>
            <text x="15" y="100" fill="#9CA3AF" fontSize="10" textAnchor="middle">30k</text>
            <text x="15" y="140" fill="#9CA3AF" fontSize="10" textAnchor="middle">20k</text>
            <text x="15" y="180" fill="#9CA3AF" fontSize="10" textAnchor="middle">10k</text>
            
            {/* X轴标签 */}
            <text x="40" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">1</text>
            <text x="80" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">5</text>
            <text x="120" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">10</text>
            <text x="160" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">15</text>
            <text x="200" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">20</text>
            <text x="240" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">25</text>
            <text x="280" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">30</text>
            
            {/* 曲线下方填充 */}
            <path 
              d="M 40 100 L 80 90 L 120 110 L 160 80 L 200 70 L 240 60 L 280 50 L 320 60 L 360 40 L 360 180 L 40 180 Z" 
              fill="url(#gradient)" 
              opacity="0.3"
            />
            
            {/* 活跃度曲线 */}
            <path 
              d="M 40 100 L 80 90 L 120 110 L 160 80 L 200 70 L 240 60 L 280 50 L 320 60 L 360 40" 
              fill="none" 
              stroke="#3B82F6" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 数据点 */}
            <circle cx="40" cy="100" r="4" fill="#3B82F6" stroke="#fff" strokeWidth="2" />
            <circle cx="80" cy="90" r="4" fill="#3B82F6" stroke="#fff" strokeWidth="2" />
            <circle cx="120" cy="110" r="4" fill="#3B82F6" stroke="#fff" strokeWidth="2" />
            <circle cx="160" cy="80" r="4" fill="#3B82F6" stroke="#fff" strokeWidth="2" />
            <circle cx="200" cy="70" r="4" fill="#3B82F6" stroke="#fff" strokeWidth="2" />
            <circle cx="240" cy="60" r="4" fill="#3B82F6" stroke="#fff" strokeWidth="2" />
            <circle cx="280" cy="50" r="4" fill="#3B82F6" stroke="#fff" strokeWidth="2" />
            <circle cx="320" cy="60" r="4" fill="#3B82F6" stroke="#fff" strokeWidth="2" />
            <circle cx="360" cy="40" r="4" fill="#3B82F6" stroke="#fff" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ActiveAccountsTab;