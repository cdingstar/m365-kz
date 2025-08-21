import React, { useState } from 'react';

const AccountsTab = () => {
  // 状态管理
  const [activeTab, setActiveTab] = useState('active'); // 'active' 或 'inactive'

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

  // 非活跃账户数据
  const inactiveAccounts = [
    { id: 1, name: 'Thomas Anderson', email: 'thomas.a@contoso.com', department: 'IT', lastActive: '2025-05-12', status: 'Dormant', licenses: 'Microsoft 365 E3' },
    { id: 2, name: 'Jessica Williams', email: 'jessica.w@contoso.com', department: 'Marketing', lastActive: '2025-06-03', status: 'Dormant', licenses: 'Microsoft 365 E5' },
    { id: 3, name: 'Daniel Martinez', email: 'daniel.m@contoso.com', department: 'Sales', lastActive: '2025-04-28', status: 'Inactive', licenses: 'Microsoft 365 E3' },
    { id: 4, name: 'Amanda Garcia', email: 'amanda.g@contoso.com', department: 'HR', lastActive: '2025-05-15', status: 'Dormant', licenses: 'Office 365 E1' },
    { id: 5, name: 'Kevin Rodriguez', email: 'kevin.r@contoso.com', department: 'Finance', lastActive: '2025-03-22', status: 'Inactive', licenses: 'Microsoft 365 E3' },
    { id: 6, name: 'Stephanie Lewis', email: 'stephanie.l@contoso.com', department: 'Operations', lastActive: '2025-02-18', status: 'Inactive', licenses: 'Microsoft 365 E5' },
    { id: 7, name: 'Christopher Lee', email: 'chris.l@contoso.com', department: 'IT', lastActive: '2025-01-30', status: 'Inactive', licenses: 'Microsoft 365 E3' },
    { id: 8, name: 'Nicole Clark', email: 'nicole.c@contoso.com', department: 'Marketing', lastActive: '2025-04-05', status: 'Dormant', licenses: 'Office 365 E1' }
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

  // 非活跃原因分布
  const inactivityReasons = [
    { reason: 'On Leave', count: 3240, percentage: 38 },
    { reason: 'Contractor Ended', count: 2150, percentage: 25 },
    { reason: 'Role Change', count: 1720, percentage: 20 },
    { reason: 'Technical Issue', count: 860, percentage: 10 },
    { reason: 'Other', count: 600, percentage: 7 }
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

      {/* 内部标签切换 */}
      <div className="flex border-b border-gray-700 mb-6">
        <button
          className={`px-6 py-3 font-medium text-sm ${
            activeTab === 'active'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('active')}
        >
          Active Accounts
        </button>
        <button
          className={`px-6 py-3 font-medium text-sm ${
            activeTab === 'inactive'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('inactive')}
        >
          Inactive Accounts
        </button>
      </div>

      {/* 摘要卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {activeTab === 'active' ? (
          <>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-gray-400 text-sm mb-1">Total Active Users</h3>
              <p className="text-2xl font-bold text-white">49,540</p>
              <p className="text-sm text-green-500 mt-2">+2.4% from last month</p>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-gray-400 text-sm mb-1">Active Rate</h3>
              <p className="text-2xl font-bold text-white">85.2%</p>
              <p className="text-sm text-green-500 mt-2">+0.5% from last month</p>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-gray-400 text-sm mb-1">New Users</h3>
              <p className="text-2xl font-bold text-white">1,250</p>
              <p className="text-sm text-gray-400 mt-2">Last 30 days</p>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-gray-400 text-sm mb-1">Average Usage</h3>
              <p className="text-2xl font-bold text-white">4.2h/day</p>
              <p className="text-sm text-gray-400 mt-2">Per active user</p>
            </div>
          </>
        ) : (
          <>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-gray-400 text-sm mb-1">Total Inactive Users</h3>
              <p className="text-2xl font-bold text-white">8,570</p>
              <p className="text-sm text-red-500 mt-2">+1.2% from last month</p>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-gray-400 text-sm mb-1">Inactive Rate</h3>
              <p className="text-2xl font-bold text-white">14.8%</p>
              <p className="text-sm text-red-500 mt-2">+0.5% from last month</p>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-gray-400 text-sm mb-1">Dormant Accounts</h3>
              <p className="text-2xl font-bold text-white">5,320</p>
              <p className="text-sm text-gray-400 mt-2">Inactive 30-90 days</p>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-gray-400 text-sm mb-1">Inactive Accounts</h3>
              <p className="text-2xl font-bold text-white">3,250</p>
              <p className="text-sm text-gray-400 mt-2">Inactive >90 days</p>
            </div>
          </>
        )}
      </div>

      {/* 主要内容区域：左右布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* 左侧区域：账户表格 */}
        <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white">
              {activeTab === 'active' ? 'Active Accounts' : 'Inactive Accounts'}
            </h2>
            <div className="flex space-x-2">
              <select className="px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                {activeTab === 'active' ? (
                  <>
                    <option>All Departments</option>
                    <option>IT</option>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                    <option>HR</option>
                    <option>Operations</option>
                  </>
                ) : (
                  <>
                    <option>All Statuses</option>
                    <option>Dormant</option>
                    <option>Inactive</option>
                  </>
                )}
              </select>
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
                  {activeTab === 'inactive' && (
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                  )}
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Licenses</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {activeTab === 'active' ? (
                  activeAccounts.map((account) => (
                    <tr key={account.id} className="hover:bg-gray-750 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{account.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{account.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{account.department}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{account.lastActive}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{account.licenses}</td>
                    </tr>
                  ))
                ) : (
                  inactiveAccounts.map((account) => (
                    <tr key={account.id} className="hover:bg-gray-750 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{account.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{account.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{account.department}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{account.lastActive}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          account.status === 'Dormant' 
                            ? 'bg-yellow-900 text-yellow-300' 
                            : 'bg-red-900 text-red-300'
                        }`}>
                          {account.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{account.licenses}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-700 flex justify-between items-center">
            <div className="text-sm text-gray-400">
              {activeTab === 'active' ? 'Showing 8 of 49,540 accounts' : 'Showing 8 of 8,570 accounts'}
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

        {/* 右侧区域：统计信息 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          {activeTab === 'active' ? (
            <>
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
                        className={`h-2.5 rounded-full ${
                          index === 0 ? 'bg-blue-600' : 
                          index === 1 ? 'bg-green-600' : 
                          index === 2 ? 'bg-yellow-600' : 
                          index === 3 ? 'bg-purple-600' : 
                          index === 4 ? 'bg-red-600' : 'bg-gray-600'
                        }`}
                        style={{ width: `${dept.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-lg font-medium text-white mb-4">Usage Insights</h3>
                <div className="space-y-4">
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">High Engagement in IT</p>
                        <p className="text-xs text-gray-400 mt-1">IT department shows 95% daily active usage</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Sales Team Growth</p>
                        <p className="text-xs text-gray-400 mt-1">Sales team usage increased by 12% this month</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">HR Adoption Opportunity</p>
                        <p className="text-xs text-gray-400 mt-1">HR team has lowest usage rate at 80%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-white mb-4">Inactivity Reasons</h2>
              <div className="space-y-4">
                {inactivityReasons.map((reason, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-white">{reason.reason}</span>
                      <span className="text-sm text-gray-400">{reason.count} ({reason.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          index === 0 ? 'bg-yellow-600' : 
                          index === 1 ? 'bg-red-600' : 
                          index === 2 ? 'bg-purple-600' : 
                          index === 3 ? 'bg-green-600' : 'bg-gray-600'
                        }`}
                        style={{ width: `${reason.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-lg font-medium text-white mb-4">Recommended Actions</h3>
                <div className="space-y-4">
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Review On Leave Accounts</p>
                        <p className="text-xs text-gray-400 mt-1">Verify expected return dates and adjust license assignments</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Reclaim Contractor Licenses</p>
                        <p className="text-xs text-gray-400 mt-1">Remove licenses from ended contractor accounts</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Update Role Changes</p>
                        <p className="text-xs text-gray-400 mt-1">Reassign appropriate licenses based on new roles</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* 底部区域：潜在节省（仅在非活跃标签页显示） */}
      {activeTab === 'inactive' && (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Potential Cost Savings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-gray-400 text-sm">Monthly Savings Opportunity</h3>
              <p className="text-2xl font-bold text-white mt-2">$42,850</p>
              <p className="text-sm text-gray-400 mt-2">From inactive license reclamation</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-gray-400 text-sm">Licenses to Reclaim</h3>
              <p className="text-2xl font-bold text-white mt-2">1,245</p>
              <p className="text-sm text-gray-400 mt-2">From inactive accounts >90 days</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-gray-400 text-sm">Accounts to Review</h3>
              <p className="text-2xl font-bold text-white mt-2">3,250</p>
              <p className="text-sm text-gray-400 mt-2">Prioritized by license cost</p>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Generate Savings Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountsTab;