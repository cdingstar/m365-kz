import React from 'react';

const SKUAdoptionTab = () => {
  // 许可证计划使用数据
  const licenseInvestment = {
    monthly: '$1,105,292',
    consumed: '$534,649'
  };

  // 未分配和未使用的许可证价值
  const unusedLicenses = {
    unassignedValue: '$570,643',
    consumedUnused: '$8,933',
    totalUnused: '$579,576'
  };

  // 账户老化和不活跃数据
  const accountAgingData = [
    { period: '30-45 Days', count: 2172 },
    { period: '46-90 Days', count: 5138 },
    { period: '91-180 Days', count: 18599 },
    { period: 'Over 181 Days', count: 1186 },
    { period: 'No Activity Dates', count: 3265 }
  ];

  // 许可证计划使用明细数据
  const licensePlans = [
    { 
      planName: 'Microsoft Teams', 
      skuName: 'TEAMS1', 
      planCount: 1, 
      userCount: 40269, 
      accountsAssigned: 30297, 
      usagePercent: 73.9,
      active: true 
    },
    { 
      planName: 'Microsoft Entra ID P1', 
      skuName: 'AAD_PREMIUM', 
      planCount: 1, 
      userCount: 40267, 
      accountsAssigned: 0, 
      usagePercent: 0.0,
      active: true 
    },
    { 
      planName: 'Microsoft Intune', 
      skuName: 'INTUNE_A', 
      planCount: 1, 
      userCount: 40266, 
      accountsAssigned: 22514, 
      usagePercent: 55.9,
      active: true 
    },
    { 
      planName: 'Office for the Web', 
      skuName: 'SHAREPOINTWAC', 
      planCount: 1, 
      userCount: 40225, 
      accountsAssigned: 38767, 
      usagePercent: 90.2,
      active: true 
    },
    { 
      planName: 'MICROSOFT AZURE MULTI-FACTOR AUTHENTICATION', 
      skuName: 'MFA_PREMIUM', 
      planCount: 1, 
      userCount: 40210, 
      accountsAssigned: 37725, 
      usagePercent: 93.8,
      active: true 
    },
    { 
      planName: 'Microsoft Bookings', 
      skuName: 'MICROSOFTBOOKINGS', 
      planCount: 1, 
      userCount: 40210, 
      accountsAssigned: 0, 
      usagePercent: 0.0,
      active: true 
    },
    { 
      planName: 'AZURE INFORMATION PROTECTION PREMIUM P1', 
      skuName: 'RMS_S_ENTERPRISE', 
      planCount: 1, 
      userCount: 40209, 
      accountsAssigned: 0, 
      usagePercent: 0.0,
      active: true 
    },
    { 
      planName: 'Microsoft Entra RIGHTS', 
      skuName: 'RMS_S_PREMIUM', 
      planCount: 1, 
      userCount: 40209, 
      accountsAssigned: 0, 
      usagePercent: 0.0,
      active: true 
    },
    { 
      planName: 'Microsoft StaffHub', 
      skuName: 'Deskless', 
      planCount: 1, 
      userCount: 40209, 
      accountsAssigned: 0, 
      usagePercent: 0.0,
      active: true 
    },
    { 
      planName: 'RETIRED - Commercial data protection for Microsoft Copilot', 
      skuName: 'Bing_Chat_Enterprise', 
      planCount: 1, 
      userCount: 40209, 
      accountsAssigned: 0, 
      usagePercent: 0.0,
      active: false 
    },
    { 
      planName: 'Sway', 
      skuName: 'SWAY', 
      planCount: 1, 
      userCount: 40209, 
      accountsAssigned: 125, 
      usagePercent: 0.3,
      active: true 
    },
    { 
      planName: 'Universal Print', 
      skuName: 'UNIVERSAL_PRINT_01', 
      planCount: 1, 
      userCount: 40209, 
      accountsAssigned: 0, 
      usagePercent: 0.0,
      active: false 
    },
    { 
      planName: 'Viva Learning Seeded', 
      skuName: 'VIVA_LEARNING_SEEDED', 
      planCount: 1, 
      userCount: 40209, 
      accountsAssigned: 0, 
      usagePercent: 0.0,
      active: false 
    },
    { 
      planName: 'Windows Update for Business Deployment Service', 
      skuName: 'WINDOWSUPDATEFORBUSINESS_DEPLOYMENTSERVICE', 
      planCount: 1, 
      userCount: 40209, 
      accountsAssigned: 0, 
      usagePercent: 0.0,
      active: false 
    }
  ];

  // 许可证摘要数据
  const licenseSummary = {
    accountsAssigned: '42K',
    plansWithinSku: 236,
    plansAssignedPercent: '89%',
    plansAssignedToAccounts: 211,
    licensesAllocatedPercent: '2,050%'
  };

  // 获取状态指示器颜色
  const getStatusColor = (active, usagePercent) => {
    if (!active) return 'text-yellow-500';
    if (usagePercent > 70) return 'text-green-500';
    if (usagePercent > 30) return 'text-yellow-500';
    return 'text-red-500';
  };

  // 获取使用率进度条颜色
  const getUsageBarColor = (percent) => {
    if (percent > 70) return 'bg-green-500';
    if (percent > 30) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* 顶部导航标签 */}
      <div className="mb-6 border-b border-gray-700">
        <div className="flex space-x-8">
          <button className="pb-2 font-bold text-[#2563eb] border-b-2 border-[#2563eb]">
            SKU Adoption
          </button>
          <button className="pb-2 font-medium text-gray-400 hover:text-gray-300">
            Capability Modelling
          </button>
          <button className="pb-2 font-medium text-gray-400 hover:text-gray-300">
            Enterprise SKU Usage
          </button>
          <button className="pb-2 font-medium text-gray-400 hover:text-gray-300">
            Usage Grouping (by SKU)
          </button>
          <button className="pb-2 font-medium text-gray-400 hover:text-gray-300">
            Plan Details
          </button>
        </div>
      </div>

      {/* 许可证计划使用明细标题 */}
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-3">
          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-white">License Plan Usage Breakdown</h2>
        
        {/* 右侧操作按钮 */}
        <div className="ml-auto flex items-center space-x-2">
          <button className="p-2 bg-gray-800 text-gray-300 rounded hover:bg-gray-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
          <button className="p-2 bg-gray-800 text-gray-300 rounded hover:bg-gray-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
          </button>
          <button className="p-2 bg-gray-800 text-gray-300 rounded hover:bg-gray-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* 许可证筛选器 */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <div className="lg:col-span-1 bg-gray-800 p-4 rounded-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">License</label>
            <div className="relative">
              <select className="block w-full bg-gray-700 border border-gray-600 text-white py-2 px-3 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Alle</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">License Cost</label>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">0.00</span>
              <span className="text-sm text-gray-400">200.00</span>
            </div>
            <input type="range" className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
          </div>
          
          <div className="mt-6">
            <button className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors">
              Select SKU to view Details
            </button>
          </div>
          
          <div className="mt-6">
            <div className="flex justify-between text-sm font-medium text-gray-300 mb-2">
              <span>License</span>
              <span>Assigned</span>
            </div>
            <div className="max-h-64 overflow-y-auto">
              <table className="min-w-full text-sm">
                <tbody className="divide-y divide-gray-700">
                  <tr className="hover:bg-gray-750">
                    <td className="py-2 text-gray-300">Microsoft 365 E3</td>
                    <td className="py-2 text-right text-gray-300">33,970</td>
                  </tr>
                  <tr className="hover:bg-gray-750">
                    <td className="py-2 text-gray-300">Microsoft 365 F3</td>
                    <td className="py-2 text-right text-gray-300">6,232</td>
                  </tr>
                  <tr className="hover:bg-gray-750">
                    <td className="py-2 text-gray-300">Dynamics 365 for Sales Enterprise Edition</td>
                    <td className="py-2 text-right text-gray-300">1,498</td>
                  </tr>
                  <tr className="hover:bg-gray-750">
                    <td className="py-2 text-gray-300">Dynamics 365 Team Members</td>
                    <td className="py-2 text-right text-gray-300">1,081</td>
                  </tr>
                  <tr className="hover:bg-gray-750">
                    <td className="py-2 text-gray-300">Visio P2</td>
                    <td className="py-2 text-right text-gray-300">299</td>
                  </tr>
                  <tr className="hover:bg-gray-750">
                    <td className="py-2 text-gray-300">Project P3</td>
                    <td className="py-2 text-right text-gray-300">177</td>
                  </tr>
                  <tr className="hover:bg-gray-750">
                    <td className="py-2 text-gray-300">Power BI Pro</td>
                    <td className="py-2 text-right text-gray-300">145</td>
                  </tr>
                  <tr className="hover:bg-gray-750">
                    <td className="py-2 text-gray-300">Project P1</td>
                    <td className="py-2 text-right text-gray-300">28</td>
                  </tr>
                  <tr className="hover:bg-gray-750">
                    <td className="py-2 text-gray-300">Power Automate - RPA</td>
                    <td className="py-2 text-right text-gray-300">13</td>
                  </tr>
                  <tr className="hover:bg-gray-750">
                    <td className="py-2 text-gray-300">Total</td>
                    <td className="py-2 text-right font-bold text-white">40,246</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3 space-y-6">
          {/* 许可证投资和消费 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{licenseInvestment.monthly}</div>
                <div className="text-sm text-gray-400">License Investment (Month)</div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{licenseInvestment.consumed}</div>
                <div className="text-sm text-gray-400">License Consumed Cost (Month)</div>
              </div>
            </div>
          </div>
          
          {/* 账户老化和不活跃 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-4">Account Aging and Inactivity</h3>
            <div className="flex items-center mb-4">
              <div className="w-20 text-sm text-gray-400">Active</div>
              <div className="flex-1 bg-gray-700 h-6 rounded-md overflow-hidden">
                <div className="bg-blue-500 h-full" style={{ width: '35%' }}></div>
              </div>
              <div className="w-16 text-right text-sm text-gray-300">35,935</div>
            </div>
            
            {accountAgingData.map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                <div className="w-20 text-sm text-gray-400">{item.period}</div>
                <div className="flex-1 bg-gray-700 h-6 rounded-md overflow-hidden">
                  <div 
                    className="bg-blue-500 h-full" 
                    style={{ width: `${Math.min(100, (item.count / 20000) * 100)}%` }}
                  ></div>
                </div>
                <div className="w-16 text-right text-sm text-gray-300">{item.count.toLocaleString()}</div>
              </div>
            ))}
            
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>0K</span>
              <span>20K</span>
              <span>40K</span>
              <span>60K</span>
            </div>
          </div>
          
          {/* 用户按业务线 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-4">Users by Line of Business</h3>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
                <span className="text-sm text-gray-300">No. Purchased</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                <span className="text-sm text-gray-300">Assigned</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-400 mr-2"></div>
                <span className="text-sm text-gray-300">Active &lt;30D</span>
              </div>
            </div>
            
            <div className="h-64 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg className="w-16 h-16 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="mt-2">Select a SKU to view business line usage</p>
              </div>
            </div>
          </div>
          
          {/* 未分配和未使用的许可证价值 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">{unusedLicenses.unassignedValue}</div>
                <div className="text-xs text-gray-400">Unassigned value (M)</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xl text-gray-300">+</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">{unusedLicenses.consumedUnused}</div>
                <div className="text-xs text-gray-400">Consumed Unused (&lt;30D)</div>
              </div>
            </div>
            <div className="flex items-center justify-center my-4">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xl text-gray-300">=</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">{unusedLicenses.totalUnused}</div>
              <div className="text-xs text-gray-400">All Total Unused</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 许可证计划使用明细表格 */}
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-6">
        <div className="p-4 bg-gray-700 text-center">
          <div className="text-sm text-gray-300">
            PLEASE NOTE: This view requires a specific license to be selected from the list (Left)
          </div>
        </div>
        
        <div className="p-4 bg-blue-900/20 text-center border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-lg font-medium text-gray-300">USD 386.80 Per License</div>
            <div className="text-lg font-medium text-gray-300">App Connect (IW)</div>
          </div>
          <div className="text-xs text-gray-400 mt-1">
            Note (Rule on plan outlines if a rule is in place to identify use of the plan (Green = Yes), right click on plan name to view further details
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Plan Name (Friendly)</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Plans within SKU</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Count of plans within SKU</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Count of Assigned Plans</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Users Assigned Plan</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Accounts using plan in &lt; 90 Days</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Rule? (in a rule to identify usage)</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">% Plan Assigned and Used in &lt; 30 Days</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {licensePlans.map((plan, index) => (
                <tr key={index} className="hover:bg-gray-750 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-gray-200">{plan.planName}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{plan.skuName}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{plan.planCount}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full ${getStatusColor(plan.active, plan.usagePercent)} mr-2`}></div>
                      <span>{plan.planCount}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-300">{plan.userCount.toLocaleString()}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{plan.accountsAssigned.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <div className="flex justify-center">
                      <div className={`w-4 h-4 rounded-full ${plan.active ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="flex-1 mr-2">
                        <div className="bg-gray-700 rounded-full h-2 relative overflow-hidden">
                          <div 
                            className={`${getUsageBarColor(plan.usagePercent)} h-2 rounded-full transition-all duration-500`}
                            style={{width: `${plan.usagePercent}%`}}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-white w-10">{plan.usagePercent.toFixed(1)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-700">
                <td className="px-4 py-3 text-sm font-bold text-white">Total</td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3 text-sm font-bold text-white">236</td>
                <td className="px-4 py-3 text-sm font-bold text-white">211</td>
                <td className="px-4 py-3 text-sm font-bold text-white">41,722</td>
                <td className="px-4 py-3 text-sm font-bold text-white">331,802</td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3 text-sm font-bold text-white">17.0%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* 许可证摘要 */}
        <div className="p-6 bg-blue-900/20 border-t border-gray-700">
          <div className="flex items-center justify-center">
            <div className="text-lg font-medium text-gray-300">
              <span className="text-blue-400">{licenseSummary.accountsAssigned}</span> accounts assigned licenses with 
              <span className="text-blue-400"> {licenseSummary.plansWithinSku}</span> plans within the SKU (license), 
              <span className="text-blue-400"> {licenseSummary.plansAssignedToAccounts}</span> (<span className="text-blue-400">{licenseSummary.plansAssignedPercent}</span>) of the plans assigned to accounts. 
              <span className="text-blue-400"> {licenseSummary.licensesAllocatedPercent}</span> of licenses allocated
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-gray-700 text-center">
          <div className="text-sm text-gray-300">
            Right click on Service Group / Plan for account details
          </div>
        </div>
      </div>
    </div>
  );
};

export default SKUAdoptionTab;