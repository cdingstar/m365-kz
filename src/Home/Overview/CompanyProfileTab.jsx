import React from 'react';

const CompanyProfileTab = () => {
  // 租户摘要数据
  const tenantData = {
    tenantName: 'Total',
    entraAccounts: '86,295',
    licensedAccount: '41,725',
    licensePurchaseCost: '1,163,311',
    licensesUnassignedCost: '570,702',
    licenseConsumedCost: '592,609',
    licensePercentConsumed: '51%'
  };

  // 账户摘要数据
  const accountSummary = [
    { category: 'External User', totalUsers: '28,389', totalLicensed: '4' },
    { category: 'Internal User', totalUsers: '57,906', totalLicensed: '41,721' },
    { category: 'Total', totalUsers: '86,295', totalLicensed: '41,725' }
  ];

  // 端点摘要数据
  const endpointSummary = {
    entraEndpoints: '72,071',
    activeEntraEndpoints: '49,290'
  };

  // 内部域名数据
  const internalDomains = [
    { domain: 'contoso.com', count: '51,653' },
    { domain: 'fabrikam.com', count: '27,771' },
    { domain: 'northwind.com', count: '15,432' },
    { domain: 'adventure.co.id', count: '2,156' },
    { domain: 'tailspin.com', count: '1,089' }
  ];

  // 外部域名数据
  const externalDomains = [
    { domain: 'gmail.com', count: '1,234' },
    { domain: 'yahoo.com', count: '856' },
    { domain: 'hotmail.com', count: '623' },
    { domain: 'outlook.com', count: '445' },
    { domain: 'icloud.com', count: '287' }
  ];

  // 统计卡片数据
  const statsCards = [
    { title: 'Cost Per Licensed Account', value: '$27.88', icon: '💰' },
    { title: 'Defined Countries by Smart Tag', value: '122', icon: '🏷️' },
    { title: 'Lines of Business', value: '761', icon: '🔢' },
    { title: 'Number of Domains', value: '6', icon: '📧' },
    { title: 'Number of Unique External Domains', value: '11,373', icon: '🔗' }
  ];

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* 主要内容区域：左右布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
        {/* 左侧区域：包含3个摘要表格 */}
        <div className="lg:col-span-3 space-y-8">
          {/* Tenant Summary */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Tenant Summary</h2>
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">TenantName</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Entra Accounts</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">LICENSED ACCOUNTS</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">AVERAGE COST PER LICENSE ACCOUNT</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Licenses Unassigned Cost (Month)</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">License Consumed Cost (Month)</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">License % Consumed</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-600">
                  <tr className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4">
                      <div className="w-16 h-6 bg-teal-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-medium">LOGO</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-200">{tenantData.entraAccounts}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-200">{tenantData.licensedAccount}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-200">{tenantData.licensePurchaseCost}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-200">{tenantData.licensesUnassignedCost}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-200">{tenantData.licenseConsumedCost}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-200">{tenantData.licensePercentConsumed}</td>
                  </tr>
                  <tr className="bg-gray-700 hover:bg-gray-650 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-white">{tenantData.tenantName}</td>
                    <td className="px-6 py-4 text-sm font-bold text-white">{tenantData.entraAccounts}</td>
                    <td className="px-6 py-4 text-sm font-bold text-white">{tenantData.licensedAccount}</td>
                    <td className="px-6 py-4 text-sm font-bold text-white">{tenantData.licensePurchaseCost}</td>
                    <td className="px-6 py-4 text-sm font-bold text-white">{tenantData.licensesUnassignedCost}</td>
                    <td className="px-6 py-4 text-sm font-bold text-white">{tenantData.licenseConsumedCost}</td>
                    <td className="px-6 py-4 text-sm font-bold text-white">{tenantData.licensePercentConsumed}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Account Summary 和 Endpoint Summary 横向并列 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Account Summary */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Account Summary</h2>
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <table className="min-w-full h-48">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Account Category</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total Users</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total Licensed</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-600">
                    {accountSummary.map((item, index) => (
                      <tr key={index} className={`${index === accountSummary.length - 1 ? 'bg-gray-700 font-bold' : 'hover:bg-gray-750'} transition-colors`}>
                        <td className="px-4 py-3 text-sm text-gray-200">{item.category}</td>
                        <td className="px-4 py-3 text-sm text-gray-200">{item.totalUsers}</td>
                        <td className="px-4 py-3 text-sm text-gray-200">{item.totalLicensed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Endpoint Summary */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Endpoint Summary</h2>
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <table className="min-w-full h-48">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Entra Endpoints</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Active Entra (&lt;30 Days)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800">
                    <tr className="hover:bg-gray-750 transition-colors">
                      <td className="px-3 py-3 text-sm font-medium text-gray-200">{endpointSummary.entraEndpoints}</td>
                      <td className="px-3 py-3 text-sm font-medium text-gray-200">{endpointSummary.activeEntraEndpoints}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Regional Account Distribution - 移动到这里 */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Regional Account Distribution</h2>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {statsCards.map((card, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg shadow p-4 text-center hover:bg-gray-650 transition-colors">
                    <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-gray-500 transition-colors">
                      <span className="text-2xl">{card.icon}</span>
                    </div>
                    <h3 className="text-sm font-medium text-gray-400 mb-2 leading-tight">{card.title}</h3>
                    <p className="text-2xl font-bold text-white">{card.value}</p>
                  </div>
                ))}
              </div>

              {/* 底部说明文字 */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 leading-relaxed">
                  ** Total Licensed Accounts = Internal and External, Enabled or Disabled users with MSFT licenses assigned
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧区域：域名图表 */}
        <div className="lg:col-span-1 space-y-8">
          {/* Top Internal Domains */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Top Internal Domains by Enabled User Account</h2>
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <table className="min-w-full">
                <tbody className="bg-gray-800 divide-y divide-gray-600">
                  {internalDomains.map((domain, index) => (
                    <tr key={index} className="hover:bg-gray-750 transition-colors">
                      <td className="px-4 py-3 border-r border-gray-600">
                        <div 
                          className="bg-teal-600 h-4 flex items-center justify-start pl-2 text-xs text-white font-medium rounded-sm transition-all hover:bg-teal-500" 
                          style={{width: `${Math.max(60, (parseInt(domain.count.replace(',', '')) || 0) / 800)}px`}}
                        >
                          {domain.domain}
                        </div>
                      </td>
                      <td className="px-4 py-3 w-20 text-right">
                        <span className="text-sm font-medium text-white">{domain.count}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top External Domains */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Top External Domains by Enabled User Account</h2>
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <table className="min-w-full">
                <tbody className="bg-gray-800 divide-y divide-gray-600">
                  {externalDomains.map((domain, index) => (
                    <tr key={index} className="hover:bg-gray-750 transition-colors">
                      <td className="px-4 py-3 border-r border-gray-600">
                        <div 
                          className="bg-teal-600 h-4 flex items-center justify-start pl-2 text-xs text-white font-medium rounded-sm transition-all hover:bg-teal-500" 
                          style={{width: `${Math.max(60, (parseInt(domain.count.replace(',', '')) || 0) / 20)}px`}}
                        >
                          {domain.domain}
                        </div>
                      </td>
                      <td className="px-4 py-3 w-20 text-right">
                        <span className="text-sm font-medium text-white">{domain.count}</span>
                      </td>
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

export default CompanyProfileTab;