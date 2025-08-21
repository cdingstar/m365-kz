import React from 'react';

const SKUAdoptionTab = () => {
  // SKU采用数据
  const skuAdoptionData = [
    { id: 1, name: 'Microsoft 365 E3', total: 1200, assigned: 1150, unassigned: 50, adoptionRate: 96 },
    { id: 2, name: 'Microsoft 365 E5', total: 450, assigned: 410, unassigned: 40, adoptionRate: 91 },
    { id: 3, name: 'Office 365 E1', total: 300, assigned: 285, unassigned: 15, adoptionRate: 95 },
    { id: 4, name: 'Exchange Online Plan 1', total: 200, assigned: 180, unassigned: 20, adoptionRate: 90 },
    { id: 5, name: 'Power BI Pro', total: 150, assigned: 120, unassigned: 30, adoptionRate: 80 },
    { id: 6, name: 'Project Plan 3', total: 100, assigned: 85, unassigned: 15, adoptionRate: 85 },
    { id: 7, name: 'Visio Plan 2', total: 75, assigned: 60, unassigned: 15, adoptionRate: 80 },
    { id: 8, name: 'Teams Phone Standard', total: 50, assigned: 45, unassigned: 5, adoptionRate: 90 }
  ];

  // 部门采用率数据
  const departmentAdoption = [
    { department: 'IT', e3: 98, e5: 95, e1: 90 },
    { department: 'Sales', e3: 95, e5: 90, e1: 85 },
    { department: 'Marketing', e3: 92, e5: 88, e1: 80 },
    { department: 'Finance', e3: 90, e5: 85, e1: 75 },
    { department: 'HR', e3: 88, e5: 80, e1: 70 },
    { department: 'Operations', e3: 85, e5: 75, e1: 65 }
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
          <h3 className="text-gray-400 text-sm mb-1">Total SKUs</h3>
          <p className="text-2xl font-bold text-white">2,525</p>
          <p className="text-sm text-green-500 mt-2">+1.2% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Assigned SKUs</h3>
          <p className="text-2xl font-bold text-white">2,335</p>
          <p className="text-sm text-green-500 mt-2">+2.5% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Unassigned SKUs</h3>
          <p className="text-2xl font-bold text-white">190</p>
          <p className="text-sm text-red-500 mt-2">-8.2% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Overall Adoption Rate</h3>
          <p className="text-2xl font-bold text-white">92.5%</p>
          <p className="text-sm text-green-500 mt-2">+1.3% from last month</p>
        </div>
      </div>

      {/* SKU采用表格 */}
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">SKU Adoption Details</h2>
          <div className="flex space-x-2">
            <select className="px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All SKUs</option>
              <option>Microsoft 365</option>
              <option>Office 365</option>
              <option>Standalone Products</option>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">SKU Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Assigned</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Unassigned</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Adoption Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Progress</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {skuAdoptionData.map((sku) => (
                <tr key={sku.id} className="hover:bg-gray-750 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{sku.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{sku.total}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{sku.assigned}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{sku.unassigned}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{sku.adoptionRate}%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          sku.adoptionRate > 90 ? 'bg-green-600' : 
                          sku.adoptionRate > 80 ? 'bg-blue-600' : 
                          sku.adoptionRate > 70 ? 'bg-yellow-600' : 'bg-red-600'
                        }`}
                        style={{ width: `${sku.adoptionRate}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-700 flex justify-between items-center">
          <div className="text-sm text-gray-400">
            Showing 8 of 15 SKUs
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

      {/* 部门采用率和优化建议 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* 部门采用率 */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Department Adoption Rates</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">M365 E3</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">M365 E5</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">O365 E1</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {departmentAdoption.map((dept, index) => (
                  <tr key={index} className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{dept.department}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-2.5 mr-2">
                          <div 
                            className="h-2.5 rounded-full bg-green-600"
                            style={{ width: `${dept.e3}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-300">{dept.e3}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-2.5 mr-2">
                          <div 
                            className="h-2.5 rounded-full bg-blue-600"
                            style={{ width: `${dept.e5}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-300">{dept.e5}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-2.5 mr-2">
                          <div 
                            className="h-2.5 rounded-full bg-yellow-600"
                            style={{ width: `${dept.e1}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-300">{dept.e1}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 优化建议 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Optimization Recommendations</h2>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Reassign Unassigned Licenses</h3>
                  <p className="text-gray-400 text-sm mt-1">190 unassigned licenses could be reassigned or removed to save costs.</p>
                  <button className="mt-2 text-blue-400 text-sm hover:text-blue-300 transition-colors">View Details</button>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Low Adoption in HR Department</h3>
                  <p className="text-gray-400 text-sm mt-1">HR department shows lower adoption rates across all license types.</p>
                  <button className="mt-2 text-blue-400 text-sm hover:text-blue-300 transition-colors">View Details</button>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Power BI Pro Underutilization</h3>
                  <p className="text-gray-400 text-sm mt-1">20% of Power BI Pro licenses are unassigned. Consider reducing license count.</p>
                  <button className="mt-2 text-blue-400 text-sm hover:text-blue-300 transition-colors">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部区域：月度趋势 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Monthly Adoption Trend</h2>
        <div className="h-64 bg-gray-700 rounded-lg relative overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
            {/* 背景网格线 */}
            <defs>
              <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#4B5563" strokeWidth="0.5"/>
              </pattern>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.1"/>
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Y轴标签 */}
            <text x="15" y="20" fill="#9CA3AF" fontSize="10" textAnchor="middle">100%</text>
            <text x="15" y="60" fill="#9CA3AF" fontSize="10" textAnchor="middle">75%</text>
            <text x="15" y="100" fill="#9CA3AF" fontSize="10" textAnchor="middle">50%</text>
            <text x="15" y="140" fill="#9CA3AF" fontSize="10" textAnchor="middle">25%</text>
            <text x="15" y="180" fill="#9CA3AF" fontSize="10" textAnchor="middle">0%</text>
            
            {/* X轴标签 */}
            <text x="40" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Jan</text>
            <text x="80" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Feb</text>
            <text x="120" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Mar</text>
            <text x="160" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Apr</text>
            <text x="200" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">May</text>
            <text x="240" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Jun</text>
            <text x="280" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Jul</text>
            <text x="320" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Aug</text>
            
            {/* 曲线1：总体采用率 */}
            <path 
              d="M 40 60 L 80 65 L 120 55 L 160 50 L 200 45 L 240 40 L 280 35 L 320 30" 
              fill="none" 
              stroke="#10B981" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 曲线2：分配率 */}
            <path 
              d="M 40 80 L 80 75 L 120 70 L 160 65 L 200 60 L 240 55 L 280 50 L 320 45" 
              fill="none" 
              stroke="#3B82F6" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 图例 */}
            <rect x="40" y="15" width="12" height="4" fill="#10B981" />
            <text x="58" y="19" fill="#9CA3AF" fontSize="10">Overall Adoption</text>
            <rect x="140" y="15" width="12" height="4" fill="#3B82F6" />
            <text x="158" y="19" fill="#9CA3AF" fontSize="10">Assignment Rate</text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SKUAdoptionTab;