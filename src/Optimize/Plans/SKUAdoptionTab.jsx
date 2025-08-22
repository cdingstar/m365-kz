import React, { useState } from 'react';
import DropdownSingleFilter from '../../components/Filters/DropdownSingleFilter';
import DropdownSearchMultiSelFilter from '../../components/Filters/DropdownSearchMultiSelFilter';
import PriceRangeFilter from '../../components/Filters/PriceRangeFilter';

const SKUAdoptionTab = () => {
  const [selectedSKUType, setSelectedSKUType] = useState('all');
  const [selectedLicenses, setSelectedLicenses] = useState(['all']);
  const [priceRange, setPriceRange] = useState([0, 500]);
  
  // SKU类型选项
  const skuTypeOptions = [
    { value: 'all', label: 'All SKUs' },
    { value: 'microsoft365', label: 'Microsoft 365' },
    { value: 'office365', label: 'Office 365' },
    { value: 'standalone', label: 'Standalone Products' }
  ];
  
  // License选项
  const licenseOptions = [
    { value: 'all', label: '全选' },
    { value: 'entra_id_p2', label: 'Entra ID P2' },
    { value: 'audio_conferencing', label: 'Microsoft 365 Audio Conferencing' },
    { value: 'copilot', label: 'Microsoft 365 Copilot' },
    { value: 'e3', label: 'Microsoft 365 E3' },
    { value: 'power_bi_pro', label: 'Power BI Pro' },
    { value: 'pstn', label: 'PSTN Domestic and International' },
    { value: 'teams_phone', label: 'Teams Phone Standard' },
    { value: 'teams_premium', label: 'Teams Premium (Intro Pricing)' },
    { value: 'teams_rooms', label: 'Teams Rooms Standard w/o Audio' }
  ];

  // 许可证价格
  const licensePrice = "USD 386.80";

  // 许可证数据
  const licenseData = [
    { 
      name: 'Microsoft Teams', 
      sku: 'TEAMS1', 
      plansCount: 1, 
      assignedCount: 1, 
      usersAssigned: 40269, 
      accountsUsing: 30297, 
      hasRule: true, 
      usagePercent: 73.3 
    },
    { 
      name: 'Microsoft Entra ID P1', 
      sku: 'AAD_PREMIUM', 
      plansCount: 1, 
      assignedCount: 1, 
      usersAssigned: 40267, 
      accountsUsing: 0, 
      hasRule: true, 
      usagePercent: 0.0 
    },
    { 
      name: 'Microsoft Intune', 
      sku: 'INTUNE_A', 
      plansCount: 1, 
      assignedCount: 1, 
      usersAssigned: 40266, 
      accountsUsing: 22514, 
      hasRule: true, 
      usagePercent: 55.9 
    },
    { 
      name: 'Office for the Web', 
      sku: 'SHAREPOINTWAC', 
      plansCount: 1, 
      assignedCount: 1, 
      usersAssigned: 40225, 
      accountsUsing: 38767, 
      hasRule: true, 
      usagePercent: 90.2 
    },
    { 
      name: 'MICROSOFT AZURE MULTI-FACTOR AUTHENTICATION', 
      sku: 'MFA_PREMIUM', 
      plansCount: 1, 
      assignedCount: 1, 
      usersAssigned: 40210, 
      accountsUsing: 37725, 
      hasRule: true, 
      usagePercent: 93.8 
    },
    { 
      name: 'Microsoft Bookings', 
      sku: 'MICROSOFTBOOKINGS', 
      plansCount: 1, 
      assignedCount: 1, 
      usersAssigned: 40210, 
      accountsUsing: 0, 
      hasRule: true, 
      usagePercent: 0.0 
    },
    { 
      name: 'AZURE INFORMATION PROTECTION PREMIUM P1', 
      sku: 'RMS_S_ENTERPRISE', 
      plansCount: 1, 
      assignedCount: 1, 
      usersAssigned: 40209, 
      accountsUsing: 0, 
      hasRule: true, 
      usagePercent: 0.0 
    },
    { 
      name: 'Microsoft Entra RIGHTS', 
      sku: 'RMS_S_PREMIUM', 
      plansCount: 1, 
      assignedCount: 1, 
      usersAssigned: 40209, 
      accountsUsing: 0, 
      hasRule: true, 
      usagePercent: 0.0 
    },
    { 
      name: 'Microsoft StaffHub', 
      sku: 'Deskless', 
      plansCount: 1, 
      assignedCount: 1, 
      usersAssigned: 40209, 
      accountsUsing: 0, 
      hasRule: true, 
      usagePercent: 0.0 
    },
    { 
      name: 'RETIRED - Commercial data protection for Microsoft Copilot', 
      sku: 'Bing_Chat_Enterprise', 
      plansCount: 1, 
      assignedCount: 1, 
      usersAssigned: 40209, 
      accountsUsing: 0, 
      hasRule: false, 
      usagePercent: 0.0 
    },
    { 
      name: 'Sway', 
      sku: 'SWAY', 
      plansCount: 1, 
      assignedCount: 1, 
      usersAssigned: 40209, 
      accountsUsing: 125, 
      hasRule: true, 
      usagePercent: 0.3 
    },
    { 
      name: 'Universal Print', 
      sku: 'UNIVERSAL_PRINT_01', 
      plansCount: 1, 
      assignedCount: 1, 
      usersAssigned: 40209, 
      accountsUsing: 0, 
      hasRule: false, 
      usagePercent: 0.0 
    },
    { 
      name: 'Viva Learning Seeded', 
      sku: 'VIVA_LEARNING_SEEDED', 
      plansCount: 1, 
      assignedCount: 1, 
      usersAssigned: 40209, 
      accountsUsing: 0, 
      hasRule: false, 
      usagePercent: 0.0 
    },
    { 
      name: 'Windows Update for Business Deployment Service', 
      sku: 'WINDOWSUPDATEFORBUSINESS_DEPLOYMENTSERVICE', 
      plansCount: 1, 
      assignedCount: 1, 
      usersAssigned: 40209, 
      accountsUsing: 0, 
      hasRule: false, 
      usagePercent: 0.0 
    }
  ];

  // 计算总计
  const totals = {
    plansCount: 236,
    assignedCount: 211,
    usersAssigned: 41722,
    accountsUsing: 331002,
    usagePercent: 17.0
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
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
          <div className="flex items-center">
            <h2 className="text-xl font-semibold text-white">SKU Adoption Details</h2>
            <span className="ml-4 text-gray-400 text-sm">{licensePrice} Per License</span>
          </div>
          <div className="flex justify-end">
            <table className="border-collapse table-fixed" style={{ width: '900px' }}>
              <tbody>
                <tr>
                  <td className="px-2" style={{ width: '60px' }}>
                    <span className="text-sm text-gray-300">License:</span>
                  </td>
                  <td className="px-2" style={{ width: '280px' }}>
                    <DropdownSearchMultiSelFilter
                      selectedValues={selectedLicenses}
                      onChange={setSelectedLicenses}
                      options={licenseOptions}
                      placeholder="选择License"
                      searchPlaceholder="搜索License"
                      noResultsText="无结果"
                      selectAllText="全选"
                      applyText="应用"
                      closeText="关闭"
                      className="w-60"
                      dropdownWidth="w-60"
                    />
                  </td>
                  <td className="px-2" style={{ width: '320px' }}>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <PriceRangeFilter
                        minValue={0}
                        maxValue={999.99}
                        value={priceRange}
                        onChange={setPriceRange}
                        label=""
                        className="w-64"
                        inputClassName="w-16"
                        sliderWidth="w-32"
                      />
                    </div>
                  </td>
                  <td className="px-2" style={{ width: '160px' }}>
                    <DropdownSingleFilter
                      value={selectedSKUType}
                      onChange={setSelectedSKUType}
                      options={skuTypeOptions}
                      placeholder="All SKUs"
                      className="w-32"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="p-3 bg-gray-700 text-xs text-gray-300">
          <p>Note (Rule on plan outlines if a rule is in place to identify use of the plan (Green = Yes), right click on plan name to view further details</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Plan Name (Friendly)</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Plans within SKU</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Users Assigned Plan</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Accounts using plan in &lt; 30 Days</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">% Plan Assigned and Used in &lt; 30 Days</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {licenseData.map((license, index) => (
                <tr key={index} className="hover:bg-gray-750 transition-colors">
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-white">{license.name}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{license.sku}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300 text-center">{license.usersAssigned.toLocaleString()}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300 text-center">{license.accountsUsing.toLocaleString()}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-700 rounded-full h-2.5 mr-2">
                        <div 
                          className={`h-2.5 rounded-full ${
                            license.usagePercent > 90 ? 'bg-green-600' : 
                            license.usagePercent > 50 ? 'bg-blue-600' : 
                            license.usagePercent > 20 ? 'bg-yellow-600' : 'bg-red-600'
                          }`}
                          style={{ width: `${license.usagePercent}%` }}
                        ></div>
                      </div>
                      <span>{license.usagePercent.toFixed(1)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
              {/* 汇总行 */}
              <tr className="bg-gray-700 font-medium">
                <td className="px-4 py-3 whitespace-nowrap text-sm text-white">Summary</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-white">All SKUs</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-white text-center">
                  {licenseData.reduce((sum, license) => sum + license.usersAssigned, 0).toLocaleString()}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-white text-center">
                  {licenseData.reduce((sum, license) => sum + license.accountsUsing, 0).toLocaleString()}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-white">
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-600 rounded-full h-2.5 mr-2">
                      <div 
                        className="h-2.5 rounded-full bg-blue-500"
                        style={{ width: `${(licenseData.reduce((sum, license) => sum + license.accountsUsing, 0) / licenseData.reduce((sum, license) => sum + license.usersAssigned, 0) * 100).toFixed(1)}%` }}
                      ></div>
                    </div>
                    <span>
                      {(licenseData.reduce((sum, license) => sum + license.accountsUsing, 0) / licenseData.reduce((sum, license) => sum + license.usersAssigned, 0) * 100).toFixed(1)}%
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SKUAdoptionTab;