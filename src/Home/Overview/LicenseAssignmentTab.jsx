import React, { useState } from 'react';
import DropdownSearchMultiSelFilter from '../../components/Filters/DropdownSearchMultiSelFilter';

const LicenseAssignmentTab = () => {
  // LICENSE NAME 多选过滤器状态
  const [selectedLicenseNames, setSelectedLicenseNames] = useState([]);
  // 许可证投资数据
  const investmentData = {
    yearlyInvestment: '$13,959,732',
    monthlyInvestment: '$1,163,311',
    assignedLicenseCost: '51%',
    unassignedLicenseCost: '49%'
  };

  // 许可证详细数据
  const licenseData = [
    {
      name: 'Entra ID P2',
      category: 'Other - Entra ID Service',
      currency: 'USD',
      unitCost: '9.00',
      quantity: '38,691',
      monthlyInvestment: '348,219.00',
      assigned: '0%'
    },
    {
      name: 'Microsoft 365 E3',
      category: 'Microsoft 365 - Suites',
      currency: 'USD',
      unitCost: '9.00',
      quantity: '34,117',
      monthlyInvestment: '307,053.00',
      assigned: '100%'
    },
    {
      name: 'Windows 10/11 Enterprise E3',
      category: 'Other - W365',
      currency: 'USD',
      unitCost: '7.00',
      quantity: '31,419',
      monthlyInvestment: '219,933.00',
      assigned: '0%'
    },
    {
      name: 'Dynamics 365 for Sales Enterprise Edition',
      category: 'Dynamics 365 - CE',
      currency: 'USD',
      unitCost: '105.00',
      quantity: '1,500',
      monthlyInvestment: '157,500.00',
      assigned: '100%'
    },
    {
      name: 'Power Pages Capacity T3',
      category: 'Power Platform - Power Platform',
      currency: 'USD',
      unitCost: '50.00',
      quantity: '1,050',
      monthlyInvestment: '52,500.00',
      assigned: '100%'
    },
    {
      name: 'Microsoft 365 F3',
      category: 'Microsoft 365 - Suites',
      currency: 'USD',
      unitCost: '8.00',
      quantity: '6,251',
      monthlyInvestment: '50,008.00',
      assigned: '100%'
    },
    {
      name: 'Dynamics 365 Team Members',
      category: 'Dynamics 365 - BC',
      currency: 'USD',
      unitCost: '8.00',
      quantity: '1,160',
      monthlyInvestment: '9,280.00',
      assigned: '93%'
    },
    {
      name: 'Project P3',
      category: 'Office 365 - Project',
      currency: 'USD',
      unitCost: '30.00',
      quantity: '182',
      monthlyInvestment: '5,460.00',
      assigned: '97%'
    },
    {
      name: 'Visio P2',
      category: 'Office 365 - Visio',
      currency: 'USD',
      unitCost: '15.00',
      quantity: '298',
      monthlyInvestment: '4,470.00',
      assigned: '100%'
    },
    {
      name: 'Dataverse Log Capacity',
      category: 'Power Platform - Power Platform',
      currency: 'USD',
      unitCost: '10.00',
      quantity: '336',
      monthlyInvestment: '3,360.00',
      assigned: '100%'
    },
    {
      name: 'Power BI Pro',
      category: 'Power Platform - PowerBI',
      currency: 'USD',
      unitCost: '14.00',
      quantity: '150',
      monthlyInvestment: '2,100.00',
      assigned: '97%'
    },
    {
      name: 'Power Virtual Agents',
      category: 'Power Platform - Power Platform',
      currency: 'USD',
      unitCost: '200.00',
      quantity: '10',
      monthlyInvestment: '2,000.00',
      assigned: '100%'
    },
    {
      name: 'Microsoft 365 E5',
      category: 'Microsoft 365 - Suites',
      currency: 'USD',
      unitCost: '22.80',
      quantity: '20',
      monthlyInvestment: '456.00',
      assigned: '60%'
    },
    {
      name: 'Project P1',
      category: 'Office 365 - Project',
      currency: 'USD',
      unitCost: '10.00',
      quantity: '29',
      monthlyInvestment: '290.00',
      assigned: '97%'
    },
    {
      name: 'Power Automate - RPA',
      category: 'Power Platform - Power Platform',
      currency: 'USD',
      unitCost: '15.00',
      quantity: '13',
      monthlyInvestment: '195.00',
      assigned: '100%'
    },
    {
      name: 'Teams Rooms Pro',
      category: 'Office 365 - Audio Services',
      currency: 'USD',
      unitCost: '40.00',
      quantity: '4',
      monthlyInvestment: '160.00',
      assigned: '100%'
    },
    {
      name: 'Power Apps per app plan (1 app or portal)',
      category: 'Power Platform - Power Platform',
      currency: 'USD',
      unitCost: '5.00',
      quantity: '20',
      monthlyInvestment: '100.00',
      assigned: '100%'
    },
    {
      name: 'Power Apps per user plan',
      category: 'Power Platform - Power Platform',
      currency: 'USD',
      unitCost: '20.00',
      quantity: '4',
      monthlyInvestment: '80.00',
      assigned: '75%'
    }
  ];

  // LICENSE NAME 选项
  const licenseNameOptions = [
    { value: 'all', label: 'ALL LICENSE NAME' },
    { value: 'entra_id_p2', label: 'Entra ID P2' },
    { value: 'microsoft_365_e3', label: 'Microsoft 365 E3' },
    { value: 'windows_10_11_enterprise_e3', label: 'Windows 10/11 Enterprise E3' },
    { value: 'dynamics_365_sales', label: 'Dynamics 365 for Sales Enterprise Edition' },
    { value: 'power_pages_capacity_t3', label: 'Power Pages Capacity T3' },
    { value: 'microsoft_365_f3', label: 'Microsoft 365 F3' },
    { value: 'dynamics_365_team_members', label: 'Dynamics 365 Team Members' },
    { value: 'project_p3', label: 'Project P3' },
    { value: 'visio_p2', label: 'Visio P2' },
    { value: 'dataverse_log_capacity', label: 'Dataverse Log Capacity' },
    { value: 'power_bi_pro', label: 'Power BI Pro' },
    { value: 'power_virtual_agents', label: 'Power Virtual Agents' },
    { value: 'microsoft_365_e5', label: 'Microsoft 365 E5' },
    { value: 'project_p1', label: 'Project P1' },
    { value: 'power_automate_rpa', label: 'Power Automate - RPA' },
    { value: 'teams_rooms_pro', label: 'Teams Rooms Pro' },
    { value: 'power_apps_per_app', label: 'Power Apps per app plan (1 app or portal)' },
    { value: 'power_apps_per_user', label: 'Power Apps per user plan' }
  ];

  // 获取分配百分比的颜色
  const getAssignedColor = (percentage) => {
    const percent = parseInt(percentage);
    if (percent === 100) return 'bg-green-500';
    if (percent >= 90) return 'bg-green-400';
    if (percent >= 70) return 'bg-yellow-500';
    if (percent >= 50) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* 投资概览卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
              <span className="text-white text-lg">💰</span>
            </div>
            <div>
              <h3 className="text-sm text-gray-400">Total License Investment</h3>
              <p className="text-xs text-gray-500">Annually</p>
            </div>
          </div>
          <p className="text-2xl font-bold text-white">{investmentData.yearlyInvestment}</p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
              <span className="text-white text-lg">💰</span>
            </div>
            <div>
              <h3 className="text-sm text-gray-400">Total Unassigned Cost</h3>
              <p className="text-xs text-gray-500">Annually</p>
            </div>
          </div>
          <p className="text-2xl font-bold text-white">{investmentData.monthlyInvestment}</p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mr-4">
              <span className="text-white text-lg">📊</span>
            </div>
            <div>
              <h3 className="text-sm text-gray-400">Assigned License Cost</h3>
            </div>
          </div>
          <p className="text-2xl font-bold text-white">{investmentData.assignedLicenseCost}</p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mr-4">
              <span className="text-white text-lg">⭕</span>
            </div>
            <div>
              <h3 className="text-sm text-gray-400">Unassigned License Cost</h3>
            </div>
          </div>
          <p className="text-2xl font-bold text-white">{investmentData.unassignedLicenseCost}</p>
        </div>
      </div>

      {/* License Breakdown 表格 */}
      <div>
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* 标题行 */}
          <div className="px-4 py-3 bg-gray-600 border-b border-gray-500 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold text-white">License Breakdown</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <button className="p-1 hover:bg-gray-500 rounded text-gray-300 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </button>
                <button className="p-1 hover:bg-gray-500 rounded text-gray-300 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
                <button className="p-1 hover:bg-gray-500 rounded text-gray-300 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* 过滤器行 */}
          <div className="px-4 py-3 bg-gray-700 border-b border-gray-600">
            <div className="flex items-center">
              <div style={{ width: '200px' }}>
                <DropdownSearchMultiSelFilter
                  selectedValues={selectedLicenseNames}
                  onChange={setSelectedLicenseNames}
                  options={licenseNameOptions}
                  placeholder="ALL LICENSE NAME"
                  searchPlaceholder="搜索License Name"
                  noResultsText="无结果"
                  selectAllText="ALL LICENSE NAME"
                  applyText="应用"
                  closeText="关闭"
                  className="w-full"
                  dropdownWidth="w-80"
                />
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">LICENSE NAME</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">CURRENCY</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">QUANTITY PURCHASED</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">UNIT COST PER MONTH</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">NUMBER OF LICENSE</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">COST OF ASSIGNED</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">COST OF UNASSIGNED</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">% ASSIGNED</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-600">
                {licenseData.map((license, index) => {
                  const assignedPercent = parseInt(license.assigned) / 100;
                  const totalCost = parseFloat(license.monthlyInvestment.replace(',', ''));
                  const assignedCost = (totalCost * assignedPercent).toFixed(2);
                  const unassignedCost = (totalCost * (1 - assignedPercent)).toFixed(2);
                  
                  return (
                    <tr key={index} className="hover:bg-gray-750 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-gray-200">{license.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{license.currency}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{license.quantity}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{license.unitCost}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{license.quantity}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{assignedCost}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{unassignedCost}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <div className="flex-1 mr-2">
                            <div className="bg-gray-700 rounded-full h-4 relative overflow-hidden">
                              <div 
                                className={`${getAssignedColor(license.assigned)} h-4 rounded-full transition-all duration-500`}
                                style={{width: license.assigned}}
                              ></div>
                            </div>
                          </div>
                          <span className="text-sm font-medium text-white w-10">{license.assigned}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {/* 总计行 */}
                <tr className="bg-gray-700 hover:bg-gray-650 transition-colors border-t-2 border-gray-600">
                  <td className="px-4 py-3 text-sm font-bold text-white">TOTAL</td>
                  <td className="px-4 py-3 text-sm font-bold text-white">USD</td>
                  <td className="px-4 py-3 text-sm font-bold text-white">114,352</td>
                  <td className="px-4 py-3 text-sm font-bold text-white">-</td>
                  <td className="px-4 py-3 text-sm font-bold text-white">114,352</td>
                  <td className="px-4 py-3 text-sm font-bold text-white">592,609.00</td>
                  <td className="px-4 py-3 text-sm font-bold text-white">570,702.00</td>
                  <td className="px-4 py-3 text-sm font-bold text-white">51%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicenseAssignmentTab;
