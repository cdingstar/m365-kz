import React, { useState } from 'react';
import DateRangePicker from '../../DateRangePicker';

const PowerAppsUsageTab = () => {
  // 模拟数据
  const stats = [
    { label: 'Assigned Power Apps Capable Licenses', value: '44,226' },
    { label: 'Power Apps Capable Users', value: '37,474' },
    { label: 'Power Apps Active Users', value: '2,603' },
    { label: 'Power Apps User Utilisation', value: '5.9%' }
  ];

  const summaryUsageData = [
    { userPrincipalName: 'user1@example.com', assignedLicenses: 2, capableUsers: 1, usersCount: 1, minSigninDays: 27, appCount: 1 },
    { userPrincipalName: 'user2@example.com', assignedLicenses: 2, capableUsers: 1, usersCount: 1, minSigninDays: 27, appCount: 1 },
    { userPrincipalName: 'user3@example.com', assignedLicenses: 2, capableUsers: 1, usersCount: 1, minSigninDays: 27, appCount: 1 },
    { userPrincipalName: 'user4@example.com', assignedLicenses: 3, capableUsers: 1, usersCount: 1, minSigninDays: 27, appCount: 1 },
    { userPrincipalName: 'user5@example.com', assignedLicenses: 2, capableUsers: 1, usersCount: 1, minSigninDays: 27, appCount: 1 },
    { userPrincipalName: 'user6@example.com', assignedLicenses: 3, capableUsers: 1, usersCount: 1, minSigninDays: 27, appCount: 1 },
    { userPrincipalName: 'user7@example.com', assignedLicenses: 3, capableUsers: 1, usersCount: 1, minSigninDays: 27, appCount: 1 },
    { userPrincipalName: 'user8@example.com', assignedLicenses: 4, capableUsers: 1, usersCount: 1, minSigninDays: 27, appCount: 1 }
  ];

  const summaryDetailData = [
    { user: 'user1@example.com', userCount: 1, lastSignin: 27, app: 'PowerApps - apps.powerapps.com', assigned: 2 },
    { user: 'user2@example.com', userCount: 1, lastSignin: 27, app: 'PowerApps - apps.powerapps.com', assigned: 2 },
    { user: 'user3@example.com', userCount: 1, lastSignin: 27, app: 'PowerApps - apps.powerapps.com', assigned: 1 },
    { user: 'user4@example.com', userCount: 1, lastSignin: 27, app: 'PowerApps - apps.powerapps.com', assigned: 2 },
    { user: 'user5@example.com', userCount: 1, lastSignin: 27, app: 'PowerApps - apps.powerapps.com', assigned: 3 },
    { user: 'user6@example.com', userCount: 1, lastSignin: 27, app: 'PowerApps - apps.powerapps.com', assigned: 2 }
  ];

  const activityData = [
    { month: 'jul 2025', value: 2567 }
  ];

  const appUsageData = [
    { name: 'PowerApps - apps.powerapps.com', value: 2567 },
    { name: 'make.powerapps.com', value: 80 },
    { name: 'PowerApps', value: 9 }
  ];

  const licenseData = [
    { name: 'Microsoft 365 E3', value: 32615 },
    { name: 'Microsoft 365 F3', value: 4848 },
    { name: 'Dynamics 365 Team Members', value: 2146 },
    { name: 'Dynamics 365 for Sales Enterprise Edition', value: 1469 },
    { name: 'Power Apps for Developer', value: 164 },
    { name: 'Power Apps P2 (Trial)', value: 130 },
    { name: 'Power Apps and Logic Flows', value: 37 },
    { name: 'Microsoft 365 E5', value: 10 }
  ];

  // 为每个卡片分配不同的渐变色 - 使用更协调的蓝紫色调
  const cardGradients = [
    'from-indigo-600 to-blue-700',
    'from-blue-600 to-indigo-700',
    'from-violet-600 to-indigo-700',
    'from-indigo-500 to-blue-600'
  ];

  // 为图表分配更协调的颜色
  const chartColors = {
    powerAppsWeb: '#6366f1',
    powerAppsMake: '#818cf8',
    powerAppsApp: '#4f46e5'
  };

  return (
    <div className="w-full h-full bg-[#1e293b] p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* 页面标题 */}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Power Apps Usage</h1>
            <div className="flex items-center gap-4">
              <DateRangePicker 
                initialDateRange="2024/7/30 - 2025/7/29"
                onDateRangeChange={(newDateRange) => console.log("Date range changed:", newDateRange)}
              />
            </div>
          </div>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${cardGradients[index]} p-4 rounded-lg border border-[#475569] shadow-lg`}
            >
              <div className="text-blue-100 text-sm mb-1">{stat.label}</div>
              <div className="text-white text-2xl font-bold">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* 数据表格区域 */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Power Apps Summary Usage by User */}
          <div className="bg-gradient-to-br from-[#334155] to-[#283447] rounded-lg border border-[#475569] p-4 shadow-md">
            <h3 className="text-white font-semibold mb-4">Power Apps Summary Usage by User</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#475569]">
                    <th className="text-left text-[#94a3b8] py-2">userPrincipalName</th>
                    <th className="text-left text-[#94a3b8] py-2">Assigned Power Apps Capable Licenses</th>
                    <th className="text-left text-[#94a3b8] py-2">Power Apps Capable Users</th>
                    <th className="text-left text-[#94a3b8] py-2">PowerApps Users Count Recent App Usage</th>
                    <th className="text-left text-[#94a3b8] py-2">Power Apps Min Signin Days ago</th>
                    <th className="text-left text-[#94a3b8] py-2">Powerapps App Count</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryUsageData.map((row, index) => (
                    <tr key={index} className="border-b border-[#475569]/30">
                      <td className="text-white py-2 truncate max-w-[150px]" title={row.userPrincipalName}>{row.userPrincipalName}</td>
                      <td className="text-white py-2">{row.assignedLicenses}</td>
                      <td className="text-white py-2">{row.capableUsers}</td>
                      <td className="text-white py-2">{row.usersCount}</td>
                      <td className="text-white py-2">
                        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 h-4 w-8 rounded"></div>
                        {row.minSigninDays}
                      </td>
                      <td className="text-white py-2">{row.appCount}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-[#475569] font-semibold">
                    <td className="text-white py-2">Totaal</td>
                    <td className="text-white py-2">41,426</td>
                    <td className="text-white py-2">37,474</td>
                    <td className="text-white py-2">2,603</td>
                    <td className="text-white py-2">1</td>
                    <td className="text-white py-2">2,656</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Power Apps Summary Detail */}
          <div className="bg-gradient-to-br from-[#334155] to-[#283447] rounded-lg border border-[#475569] p-4 shadow-md">
            <h3 className="text-white font-semibold mb-4">Power Apps Summary Detail</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#475569]">
                    <th className="text-left text-[#94a3b8] py-2">User using Power Apps</th>
                    <th className="text-left text-[#94a3b8] py-2"># User</th>
                    <th className="text-left text-[#94a3b8] py-2">Last App sign in Days Ago</th>
                    <th className="text-left text-[#94a3b8] py-2">App</th>
                    <th className="text-left text-[#94a3b8] py-2">Power Apps User Assigned License count</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryDetailData.map((row, index) => (
                    <tr key={index} className="border-b border-[#475569]/30">
                      <td className="text-white py-2 truncate max-w-[150px]" title={row.user}>{row.user}</td>
                      <td className="text-white py-2">{row.userCount}</td>
                      <td className="text-white py-2">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-500 h-4 w-8 rounded"></div>
                        {row.lastSignin}
                      </td>
                      <td className="text-white py-2">{row.app}</td>
                      <td className="text-white py-2">{row.assigned}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-[#475569] font-semibold">
                    <td className="text-white py-2">Totaal</td>
                    <td className="text-white py-2">2,603</td>
                    <td className="text-white py-2"></td>
                    <td className="text-white py-2"></td>
                    <td className="text-white py-2">5,410</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 图表区域 */}
        <div className="grid grid-cols-3 gap-6">
          {/* Power Apps Activity */}
          <div className="bg-gradient-to-br from-[#334155] to-[#1e293b] rounded-lg border border-[#475569] p-4 shadow-md">
            <h3 className="text-white font-semibold mb-4">Power Apps Activity</h3>
            <div className="flex h-64">
              {/* 左侧Y轴数字 */}
              <div className="flex flex-col justify-between pr-2 text-xs text-[#94a3b8]">
                <span>3K</span>
                <span>2K</span>
                <span>1K</span>
                <span>0K</span>
              </div>
              
              {/* 中间柱状图 */}
              <div className="flex-1 flex items-end justify-between">
                {[
                  { 
                    month: 'jul 2025', 
                    total: 2567,
                    segments: [
                      { name: 'PowerApps - apps.powerapps.com', value: 2300, color: chartColors.powerAppsWeb },
                      { name: 'make.powerapps.com', value: 250, color: chartColors.powerAppsMake },
                      { name: 'PowerApps', value: 17, color: chartColors.powerAppsApp }
                    ] 
                  }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative">
                      <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-[#94a3b8]">
                        {item.total}
                      </span>
                    </div>
                    <div className="w-16 flex flex-col-reverse">
                      {item.segments.map((segment, i) => (
                        <div 
                          key={i}
                          className="w-full"
                          style={{ 
                            backgroundColor: segment.color, 
                            height: `${(segment.value / 3000) * 200}px`
                          }}
                        ></div>
                      ))}
                    </div>
                    <span className="text-xs text-[#94a3b8] mt-2">
                      {item.month}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* 右侧图例 */}
              <div className="ml-4 flex flex-col justify-center">
                <div className="text-xs text-[#94a3b8] mb-2">App Name</div>
                {[
                  { name: 'make.powerapps.com', color: chartColors.powerAppsMake },
                  { name: 'PowerApps', color: chartColors.powerAppsApp },
                  { name: 'PowerApps - apps.powerapps.com', color: chartColors.powerAppsWeb }
                ].map((app, index) => (
                  <div key={index} className="flex items-center gap-1 mb-1">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: app.color }}></div>
                    <span className="text-[#94a3b8] text-xs">{app.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Power Apps App Usage */}
          <div className="bg-gradient-to-br from-[#334155] to-[#1e293b] rounded-lg border border-[#475569] p-4 shadow-md">
            <h3 className="text-white font-semibold mb-4">Power Apps App Usage</h3>
            <div className="space-y-3">
              {appUsageData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-[#94a3b8] text-sm w-40 truncate">{item.name}</span>
                  <div className="flex-1 bg-[#475569] rounded-full h-6 relative">
                    <div 
                      className="bg-gradient-to-r from-indigo-600 to-blue-500 h-full rounded-full flex items-center justify-end pr-2"
                      style={{ width: `${(item.value / 2600) * 100}%` }}
                    >
                      <span className="text-white text-xs font-medium">{item.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <div className="flex justify-between text-xs text-[#94a3b8]">
                <span>0K</span>
                <span>1K</span>
                <span>2K</span>
              </div>
            </div>
          </div>

          {/* Assigned Power Apps Capable Licenses to App Users */}
          <div className="bg-gradient-to-br from-[#334155] to-[#1e293b] rounded-lg border border-[#475569] p-4 shadow-md">
            <h3 className="text-white font-semibold mb-4">Assigned Power Apps Capable Licenses to App Users</h3>
            <div className="space-y-2">
              {licenseData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-[#94a3b8] text-sm w-40 truncate">{item.name}</span>
                  <div className="flex-1 bg-[#475569] rounded-full h-6 relative">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full rounded-full flex items-center justify-end pr-3"
                      style={{ width: `${(item.value / 33000) * 100}%` }}
                    >
                      <span className="text-white text-xs font-medium">{item.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <div className="flex justify-between text-xs text-[#94a3b8]">
                <span>0K</span>
                <span>20K</span>
                <span>40K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerAppsUsageTab;