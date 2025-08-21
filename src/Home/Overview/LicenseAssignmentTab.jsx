import React from 'react';

const LicenseAssignmentTab = () => {
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
      {/* 页面标题和版本信息 */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">License Assignment</h1>
        <div className="flex items-center space-x-6">
          <div className="text-right">
            <div className="text-sm font-medium text-gray-300">4.1</div>
            <div className="text-xs text-gray-400">Current Version</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-gray-300">28-7-2025</div>
            <div className="text-xs text-gray-400">Last Refresh</div>
          </div>
          <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">M</span>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-gray-300">USD</div>
            <div className="text-xs text-gray-400">Currency</div>
          </div>
        </div>
      </div>

      {/* 投资概览卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
              <span className="text-white text-lg">💰</span>
            </div>
            <div>
              <h3 className="text-sm text-gray-400">Total License Investment</h3>
              <p className="text-xs text-gray-500">Yearly</p>
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
              <h3 className="text-sm text-gray-400">Total License Investment</h3>
              <p className="text-xs text-gray-500">Monthly</p>
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

      {/* License Breakdown - Top 10 表格 */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">License Breakdown - Top 10</h2>
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">License Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Category</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Currency</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Unit Cost Per Month</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Quantity Purchased</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Monthly Investment</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">% Assigned</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-600">
                {licenseData.map((license, index) => (
                  <tr key={index} className="hover:bg-gray-750 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-gray-200">{license.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-300">{license.category}</td>
                    <td className="px-4 py-3 text-sm text-gray-300">{license.currency}</td>
                    <td className="px-4 py-3 text-sm text-gray-300">{license.unitCost}</td>
                    <td className="px-4 py-3 text-sm text-gray-300">{license.quantity}</td>
                    <td className="px-4 py-3 text-sm text-gray-300">{license.monthlyInvestment}</td>
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
                ))}
                {/* 总计行 */}
                <tr className="bg-gray-700 hover:bg-gray-650 transition-colors border-t-2 border-gray-600">
                  <td className="px-4 py-3 text-sm font-bold text-white">Totaal</td>
                  <td className="px-4 py-3 text-sm font-bold text-white">-</td>
                  <td className="px-4 py-3 text-sm font-bold text-white">USD</td>
                  <td className="px-4 py-3 text-sm font-bold text-white">745.20</td>
                  <td className="px-4 py-3 text-sm font-bold text-white">14,352,567</td>
                  <td className="px-4 py-3 text-sm font-bold text-white">1,163,311.00</td>
                  <td className="px-4 py-3 text-sm font-bold text-white">-</td>
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
