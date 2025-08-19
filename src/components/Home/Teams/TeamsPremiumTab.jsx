import React from 'react';

const TeamsPremiumTab = () => {
  // 模拟数据
  const premiumFeatures = [
    {
      title: 'Teams Premium Intelligent',
      assignedFeature: 8,
      featureUsed30Days: 0,
      featureUsedAllTime: 8,
      percentUsed30Days: '0.0%'
    },
    {
      title: 'Teams Premium Webinar',
      assignedFeature: 8,
      featureUsed30Days: 1,
      featureUsedAllTime: 3,
      percentUsed30Days: '12.5%'
    },
    {
      title: 'Teams Premium Virtual Appointment',
      assignedFeature: 8,
      featureUsed30Days: 0,
      featureUsedAllTime: 0,
      percentUsed30Days: '0.0%'
    }
  ];

  const supportingLicenses = [
    { type: 'No. Purchased', value: 9 },
    { type: 'Assigned', value: 8 },
    { type: 'Active <30D', value: 8 }
  ];

  const accountsBySmartTag = [
    { tag: 'Contact Centre Services', value: 3 },
    { tag: 'Europe Region', value: 3 },
    { tag: 'Group Finance', value: 3 },
    { tag: '总计', value: 3 }
  ];

  const featureUsageDetails = [
    { 
      tag: 'Contact Centre Services', 
      accounts: 1, 
      lastUsed: '2025/8/15', 
      featureUsed30Days: 1, 
      featureUsedAllTime: 1, 
      accountActivity: 'Active', 
      lastActivityDays: '0.0' 
    },
    { 
      tag: 'Microsoft Teams Premium Webinar', 
      accounts: 1, 
      lastUsed: '2025/8/15', 
      featureUsed30Days: 1, 
      featureUsedAllTime: 1, 
      accountActivity: 'Active', 
      lastActivityDays: '0.0' 
    },
    { 
      tag: 'Microsoft Teams Premium Intelligent', 
      accounts: 1, 
      lastUsed: '2024/12/2', 
      featureUsed30Days: 0, 
      featureUsedAllTime: 1, 
      accountActivity: 'Active', 
      lastActivityDays: '0.0' 
    },
    { 
      tag: 'Microsoft Teams Premium Virtual Appointment', 
      accounts: 1, 
      lastUsed: '', 
      featureUsed30Days: 0, 
      featureUsedAllTime: 0, 
      accountActivity: 'Active', 
      lastActivityDays: '0.0' 
    },
    { 
      tag: 'Europe Region', 
      accounts: 8, 
      lastUsed: '---', 
      featureUsed30Days: 1, 
      featureUsedAllTime: 8, 
      accountActivity: '---', 
      lastActivityDays: '---' 
    },
    { 
      tag: 'Group Finance', 
      accounts: 3, 
      lastUsed: '---', 
      featureUsed30Days: 0, 
      featureUsedAllTime: 3, 
      accountActivity: '---', 
      lastActivityDays: '---' 
    },
    { 
      tag: 'Americas Region', 
      accounts: 0, 
      lastUsed: '---', 
      featureUsed30Days: 0, 
      featureUsedAllTime: 0, 
      accountActivity: '---', 
      lastActivityDays: '---' 
    },
    { 
      tag: 'Asia Region', 
      accounts: 0, 
      lastUsed: '---', 
      featureUsed30Days: 0, 
      featureUsedAllTime: 0, 
      accountActivity: '---', 
      lastActivityDays: '---' 
    },
    { 
      tag: 'Design and QA', 
      accounts: 0, 
      lastUsed: '---', 
      featureUsed30Days: 0, 
      featureUsedAllTime: 0, 
      accountActivity: '---', 
      lastActivityDays: '---' 
    },
    { 
      tag: 'Development', 
      accounts: 0, 
      lastUsed: '---', 
      featureUsed30Days: 0, 
      featureUsedAllTime: 0, 
      accountActivity: '---', 
      lastActivityDays: '---' 
    },
    { 
      tag: 'Head Quarters', 
      accounts: 0, 
      lastUsed: '---', 
      featureUsed30Days: 0, 
      featureUsedAllTime: 0, 
      accountActivity: '---', 
      lastActivityDays: '---' 
    },
    { 
      tag: 'Manufacturing', 
      accounts: 0, 
      lastUsed: '---', 
      featureUsed30Days: 0, 
      featureUsedAllTime: 0, 
      accountActivity: '---', 
      lastActivityDays: '---' 
    }
  ];

  const purchasedLicenses = [
    { license: 'Teams Premium (Intro Pricing)', purchased: 65, assigned: 8 },
    { license: '总计', purchased: 65, assigned: 8 }
  ];

  return (
    <div className="w-full h-full bg-[#1e293b] p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* 页面标题和筛选器 */}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Teams Premium Usage</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="text-sm text-[#94a3b8]">Plan Name</div>
                <div className="bg-[#334155] border border-[#475569] rounded px-3 py-1 text-white">
                  所有 <span className="ml-2">▼</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm text-[#94a3b8]">Row Hierarchy (for matrix visual)</div>
                <div className="bg-[#334155] border border-[#475569] rounded px-3 py-1 text-white">
                  多选 <span className="ml-2">▼</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm text-[#94a3b8]">Smart Tag Name、Smart Tag value</div>
                <div className="bg-[#334155] border border-[#475569] rounded px-3 py-1 text-white">
                  Line of Business <span className="ml-2">▼</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 顶部标签页 */}
        <div className="mb-6 border-b border-[#475569]">
          <div className="flex">
            <div className="px-4 py-2 text-[#94a3b8] hover:text-white">Trends Summary</div>
            <div className="px-4 py-2 text-[#94a3b8] hover:text-white">Metrics by Line of Business</div>
            <div className="px-4 py-2 text-[#94a3b8] hover:text-white">Metrics by Country</div>
            <div className="px-4 py-2 text-white border-b-2 border-blue-500">Teams Premium</div>
            <div className="px-4 py-2 text-[#94a3b8] hover:text-white">Teams by Smart Tag</div>
          </div>
        </div>

        {/* 功能卡片区域 */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {premiumFeatures.map((feature, index) => (
            <div key={index} className="bg-[#334155] rounded-lg border border-[#475569] p-4">
              <h3 className="text-white font-semibold mb-4">{feature.title}</h3>
              <div className="border-l-4 border-blue-500 pl-3 mb-3">
                <div className="text-[#94a3b8] text-sm">Assigned Feature</div>
                <div className="text-white text-xl">{feature.assignedFeature}</div>
              </div>
              <div className="border-l-4 border-blue-500 pl-3 mb-3">
                <div className="text-[#94a3b8] text-sm">Feature Used (30 Days)</div>
                <div className="text-white text-xl">{feature.featureUsed30Days}</div>
              </div>
              <div className="border-l-4 border-blue-500 pl-3 mb-3">
                <div className="text-[#94a3b8] text-sm">Feature Used (All Time)</div>
                <div className="text-white text-xl">{feature.featureUsedAllTime}</div>
              </div>
              <div className="border-l-4 border-blue-500 pl-3">
                <div className="text-[#94a3b8] text-sm">% Used (30 Days)</div>
                <div className="text-white text-xl">{feature.percentUsed30Days}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 中间区域 */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Supporting Licenses */}
          <div className="bg-[#334155] rounded-lg border border-[#475569] p-4">
            <h3 className="text-white font-semibold mb-4">Supporting Licenses</h3>
            <div className="flex items-center gap-2 mb-3 text-xs text-[#94a3b8]">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-[#e5e7eb]"></div>
                <span>No. Purchased</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-[#93c5fd]"></div>
                <span>Assigned</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-[#6366f1]"></div>
                <span>Active &lt;30D</span>
              </div>
            </div>
            <div className="h-40 flex flex-col justify-center">
              <div className="bg-[#475569] h-8 w-full mb-1 relative">
                <div className="absolute inset-0 flex">
                  <div className="bg-[#e5e7eb] h-full" style={{ width: '100%' }}></div>
                </div>
                <div className="absolute inset-0 flex">
                  <div className="bg-[#93c5fd] h-full" style={{ width: '90%' }}></div>
                </div>
                <div className="absolute inset-0 flex">
                  <div className="bg-[#6366f1] h-full" style={{ width: '90%' }}></div>
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-sm">9</div>
              </div>
              <div className="bg-[#475569] h-8 w-full mb-1 relative">
                <div className="absolute inset-0 flex">
                  <div className="bg-[#e5e7eb] h-full" style={{ width: '100%' }}></div>
                </div>
                <div className="absolute inset-0 flex">
                  <div className="bg-[#93c5fd] h-full" style={{ width: '90%' }}></div>
                </div>
                <div className="absolute inset-0 flex">
                  <div className="bg-[#6366f1] h-full" style={{ width: '90%' }}></div>
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-sm">8</div>
              </div>
              <div className="bg-[#475569] h-8 w-full relative">
                <div className="absolute inset-0 flex">
                  <div className="bg-[#e5e7eb] h-full" style={{ width: '100%' }}></div>
                </div>
                <div className="absolute inset-0 flex">
                  <div className="bg-[#93c5fd] h-full" style={{ width: '90%' }}></div>
                </div>
                <div className="absolute inset-0 flex">
                  <div className="bg-[#6366f1] h-full" style={{ width: '90%' }}></div>
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-sm">8</div>
              </div>
            </div>
          </div>

          {/* License Investment and Cost */}
          <div className="bg-[#334155] rounded-lg border border-[#475569] p-4">
            <div className="flex flex-col h-full justify-center items-center">
              <div className="mb-6">
                <div className="text-center text-[#94a3b8] text-sm">License Investment (Month)</div>
                <div className="text-center text-white text-3xl font-bold">£65</div>
              </div>
              <div>
                <div className="text-center text-[#94a3b8] text-sm">License Consumed Cost (Month)</div>
                <div className="text-center text-white text-3xl font-bold">£58</div>
              </div>
            </div>
          </div>

          {/* Accounts by Smart Tag */}
          <div className="bg-[#334155] rounded-lg border border-[#475569] p-4">
            <h3 className="text-white font-semibold mb-4">Accounts by Smart Tag - Line of Business</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#475569]">
                    <th className="text-left text-[#94a3b8] py-2">Smart Tag Value</th>
                    <th className="text-left text-[#94a3b8] py-2">Assigned Features</th>
                  </tr>
                </thead>
                <tbody>
                  {accountsBySmartTag.map((row, index) => (
                    <tr key={index} className="border-b border-[#475569]/30">
                      <td className="text-white py-2">{row.tag}</td>
                      <td className="text-white py-2">
                        <div className="bg-[#6366f1] h-4 w-full rounded"></div>
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 底部表格区域 */}
        <div className="grid grid-cols-2 gap-6">
          {/* Feature Usage Details */}
          <div className="bg-[#334155] rounded-lg border border-[#475569] p-4">
            <h3 className="text-white font-semibold mb-4">Feature Usage Details</h3>
            <div className="overflow-x-auto max-h-80">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-[#334155]">
                  <tr className="border-b border-[#475569]">
                    <th className="text-left text-[#94a3b8] py-2">Smart Tag Value</th>
                    <th className="text-left text-[#94a3b8] py-2">Accounts</th>
                    <th className="text-left text-[#94a3b8] py-2">Last Used</th>
                    <th className="text-left text-[#94a3b8] py-2">Feature Used (30 Days)</th>
                    <th className="text-left text-[#94a3b8] py-2">Feature Used (All Time)</th>
                    <th className="text-left text-[#94a3b8] py-2">Account Activity</th>
                    <th className="text-left text-[#94a3b8] py-2">Last Activity Days</th>
                  </tr>
                </thead>
                <tbody>
                  {featureUsageDetails.map((row, index) => (
                    <tr key={index} className="border-b border-[#475569]/30">
                      <td className="text-white py-2">{row.tag}</td>
                      <td className="text-white py-2">{row.accounts}</td>
                      <td className="text-white py-2">{row.lastUsed}</td>
                      <td className="text-white py-2">{row.featureUsed30Days}</td>
                      <td className="text-white py-2">{row.featureUsedAllTime}</td>
                      <td className="text-white py-2">{row.accountActivity}</td>
                      <td className="text-white py-2">{row.lastActivityDays}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Purchased Licenses */}
          <div className="bg-[#334155] rounded-lg border border-[#475569] p-4">
            <h3 className="text-white font-semibold mb-4">Purchased Licenses</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#475569]">
                    <th className="text-left text-[#94a3b8] py-2">License</th>
                    <th className="text-left text-[#94a3b8] py-2">Purchased</th>
                    <th className="text-left text-[#94a3b8] py-2">Assigned</th>
                  </tr>
                </thead>
                <tbody>
                  {purchasedLicenses.map((row, index) => (
                    <tr key={index} className="border-b border-[#475569]/30">
                      <td className="text-white py-2">{row.license}</td>
                      <td className="text-white py-2">{row.purchased}</td>
                      <td className="text-white py-2">{row.assigned}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsPremiumTab;