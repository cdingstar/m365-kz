import React, { useState } from 'react';
import DateRangePicker from '../../DateRangePicker';

const PowerBIUsageTab = () => {
  // 模拟数据
  const stats = [
    { label: 'Assigned Power BI Capable Licenses', value: '80' },
    { label: 'Power BI Capable Users', value: '64' },
    { label: 'Power BI App Users', value: '101' },
    { label: 'Power BI User Utilisation', value: '157.8%' }
  ];

  const summaryUsageData = [
    { user: '04f552626f1a9ea904f548f96c372292ed8dd0f98f', userCount: 1, appCount: 5, lastSignin: 1 },
    { user: '1a1ae87e6204f9d539fb6602f3924c2b796137', userCount: 1, appCount: 2, lastSignin: 1 },
    { user: '9dc963e329a1534a26e6769c67a1b37a4', userCount: 1, appCount: 2, lastSignin: 1 },
    { user: 'bb9e387724bcf1397f745f4a3df554b9541f0456', userCount: 1, appCount: 4, lastSignin: 1 },
    { user: 'cbd13054526a99a6d75e041aaf1e4bcc58bc7f', userCount: 1, appCount: 2, lastSignin: 1 },
    { user: 'f2a707351b5c3edd3ebd758f6f6bb9fa54cb', userCount: 1, appCount: 4, lastSignin: 1 },
    { user: '193a8891390925242c6fb247201fce059c693b4', userCount: 1, appCount: 2, lastSignin: 3 },
    { user: '347305963d3f12550f1ba7f971aacb7deca02c79', userCount: 1, appCount: 1, lastSignin: 3 }
  ];

  const summaryDetailData = [
    { user: '04f552626f1a9ea904f548f96c372292ed8dd0f98f', userCount: 1, lastSignin: 1, app: 'Microsoft Power BI', assigned: 2 },
    { user: '1a1ae87e6204f9d539fb6602f3924c2b796137', userCount: 1, lastSignin: 1, app: 'Microsoft Power BI', assigned: 2 },
    { user: '9dc963e329a1534a26e6769c67a1b37a4', userCount: 1, lastSignin: 1, app: 'Microsoft Power BI', assigned: 1 },
    { user: 'bb9e387724bcf1397f745f4a3df554b9541f0456', userCount: 1, lastSignin: 1, app: 'Microsoft Power BI', assigned: 1 },
    { user: 'cbd13054526a99a6d75e041aaf1e4bcc58bc7f', userCount: 1, lastSignin: 1, app: 'Microsoft Power BI', assigned: 1 },
    { user: 'f2a707351b5c3edd3ebd758f6f6bb9fa54cb', userCount: 1, lastSignin: 1, app: 'Microsoft Power BI', assigned: 1 }
  ];

  const activityData = [
    { month: '2024年10月', value: 5 },
    { month: '2024年11月', value: 18 },
    { month: '2024年12月', value: 53 },
    { month: '2025年1月', value: 16 },
    { month: '2025年2月', value: 10 },
    { month: '2025年3月', value: 2 },
    { month: '2025年4月', value: 13 },
    { month: '2025年5月', value: 17 },
    { month: '2025年6月', value: 49 }
  ];

  const appUsageData = [
    { name: 'Microsoft Power BI', value: 69 },
    { name: 'Power BI Service', value: 64 },
    { name: 'Power BI Data Refresh', value: 24 },
    { name: 'Power BI Desktop', value: 17 },
    { name: 'SLIM Power BI', value: 16 },
    { name: 'Power BI Community - Prod', value: 4 },
    { name: 'Power BI PowerShell', value: 2 }
  ];

  const licenseData = [
    { name: 'Power BI Pro', value: 41 },
    { name: 'Power BI (Free)', value: 35 }
  ];

  // 为每个卡片分配不同的渐变色
  const cardGradients = [
    'from-blue-600 to-indigo-700',
    'from-indigo-600 to-purple-700',
    'from-purple-600 to-blue-700',
    'from-blue-500 to-indigo-600'
  ];

  // 为图表分配更丰富的颜色
  const chartColors = {
    microsoftPowerBI: '#4f46e5',
    powerBICommunity: '#7c3aed',
    powerBIDataRefresh: '#60a5fa',
    powerBIDesktop: '#818cf8',
    powerBIPowerShell: '#3b82f6',
    powerBIService: '#6366f1',
    slimPowerBI: '#a78bfa'
  };

  return (
    <div className="w-full h-full bg-[#1e293b] p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* 页面标题 */}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Power BI Usage</h1>
            <div className="flex items-center gap-4">
              <DateRangePicker 
                initialDateRange="2024/8/19 - 2025/8/18"
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
          {/* Power BI App Summary Usage by User */}
          <div className="bg-gradient-to-br from-[#334155] to-[#283447] rounded-lg border border-[#475569] p-4 shadow-md">
            <h3 className="text-white font-semibold mb-4">Power BI App Summary Usage by User</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#475569]">
                    <th className="text-left text-[#94a3b8] py-2">User using Power BI Apps (Auth to Power BI)</th>
                    <th className="text-left text-[#94a3b8] py-2"># User</th>
                    <th className="text-left text-[#94a3b8] py-2">App Count</th>
                    <th className="text-left text-[#94a3b8] py-2">Last App signin (Days)</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryUsageData.map((row, index) => (
                    <tr key={index} className="border-b border-[#475569]/30">
                      <td className="text-white py-2 truncate max-w-[200px]" title={row.user}>{row.user}</td>
                      <td className="text-white py-2">{row.userCount}</td>
                      <td className="text-white py-2">{row.appCount}</td>
                      <td className="text-white py-2">{row.lastSignin}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-[#475569] font-semibold">
                    <td className="text-white py-2">总计</td>
                    <td className="text-white py-2">82</td>
                    <td className="text-white py-2">191</td>
                    <td className="text-white py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Power BI App Summary Detail */}
          <div className="bg-gradient-to-br from-[#334155] to-[#283447] rounded-lg border border-[#475569] p-4 shadow-md">
            <h3 className="text-white font-semibold mb-4">Power BI App Summary Detail</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#475569]">
                    <th className="text-left text-[#94a3b8] py-2">User using Power BI Apps (Auth to Power BI)</th>
                    <th className="text-left text-[#94a3b8] py-2"># User</th>
                    <th className="text-left text-[#94a3b8] py-2">Last App sign in Days Ago</th>
                    <th className="text-left text-[#94a3b8] py-2">App</th>
                    <th className="text-left text-[#94a3b8] py-2">PBI User Assigned License count</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryDetailData.map((row, index) => (
                    <tr key={index} className="border-b border-[#475569]/30">
                      <td className="text-white py-2 truncate max-w-[150px]" title={row.user}>{row.user}</td>
                      <td className="text-white py-2">{row.userCount}</td>
                      <td className="text-white py-2">{row.lastSignin}</td>
                      <td className="text-white py-2">{row.app}</td>
                      <td className="text-white py-2">{row.assigned}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-[#475569] font-semibold">
                    <td className="text-white py-2">总计</td>
                    <td className="text-white py-2">82</td>
                    <td className="text-white py-2"></td>
                    <td className="text-white py-2"></td>
                    <td className="text-white py-2">73</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 图表区域 */}
        <div className="grid grid-cols-3 gap-6">
          {/* Power BI Activity */}
          <div className="bg-gradient-to-br from-[#334155] to-[#1e293b] rounded-lg border border-[#475569] p-4 shadow-md">
            <h3 className="text-white font-semibold mb-4">Power BI Activity</h3>
            <div className="flex h-64">
              {/* 左侧Y轴数字 */}
              <div className="flex flex-col justify-between pr-2 text-xs text-[#94a3b8]">
                <span>60</span>
                <span>40</span>
                <span>20</span>
                <span>0</span>
              </div>
              
              {/* 中间柱状图 */}
              <div className="flex-1 flex items-end justify-between">
                {[
                  { 
                    month: '2024年10月', 
                    total: 5,
                    segments: [
                      { name: 'Microsoft Power BI', value: 1, color: chartColors.microsoftPowerBI },
                      { name: 'Power BI Service', value: 3, color: chartColors.powerBIService },
                      { name: 'Power BI Desktop', value: 1, color: chartColors.powerBIDesktop }
                    ] 
                  },
                  { 
                    month: '2024年12月', 
                    total: 18,
                    segments: [
                      { name: 'Microsoft Power BI', value: 10, color: chartColors.microsoftPowerBI },
                      { name: 'Power BI Service', value: 5, color: chartColors.powerBIService },
                      { name: 'Power BI Data Refresh', value: 3, color: chartColors.powerBIDataRefresh }
                    ] 
                  },
                  { 
                    month: '2025年3月', 
                    total: 53,
                    segments: [
                      { name: 'Power BI Service', value: 36, color: chartColors.powerBIService },
                      { name: 'Microsoft Power BI', value: 9, color: chartColors.microsoftPowerBI },
                      { name: 'Power BI Desktop', value: 4, color: chartColors.powerBIDesktop },
                      { name: 'Power BI Data Refresh', value: 4, color: chartColors.powerBIDataRefresh }
                    ] 
                  },
                  { 
                    month: '2025年6月', 
                    total: 13,
                    segments: [
                      { name: 'Microsoft Power BI', value: 4, color: chartColors.microsoftPowerBI },
                      { name: 'Power BI Service', value: 5, color: chartColors.powerBIService },
                      { name: 'Power BI Desktop', value: 4, color: chartColors.powerBIDesktop }
                    ] 
                  },
                  { 
                    month: '2025年9月', 
                    total: 50,
                    segments: [
                      { name: 'Power BI Service', value: 41, color: chartColors.powerBIService },
                      { name: 'Microsoft Power BI', value: 5, color: chartColors.microsoftPowerBI },
                      { name: 'Power BI Desktop', value: 4, color: chartColors.powerBIDesktop }
                    ] 
                  }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative">
                      <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-[#94a3b8]">
                        {item.total}
                      </span>
                    </div>
                    <div className="w-8 flex flex-col-reverse">
                      {item.segments.map((segment, i) => (
                        <div 
                          key={i}
                          className="w-full"
                          style={{ 
                            backgroundColor: segment.color, 
                            height: `${(segment.value / 60) * 200}px`
                          }}
                        ></div>
                      ))}
                    </div>
                    <span className="text-xs text-[#94a3b8] mt-2 transform -rotate-45 origin-left">
                      {item.month}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* 右侧图例 */}
              <div className="ml-4 flex flex-col justify-center">
                <div className="text-xs text-[#94a3b8] mb-2">App Name</div>
                {[
                  { name: 'Microsoft Power BI', color: chartColors.microsoftPowerBI },
                  { name: 'Power BI Community - Prod', color: chartColors.powerBICommunity },
                  { name: 'Power BI Data Refresh', color: chartColors.powerBIDataRefresh },
                  { name: 'Power BI Desktop', color: chartColors.powerBIDesktop },
                  { name: 'Power BI PowerShell', color: chartColors.powerBIPowerShell },
                  { name: 'Power BI Service', color: chartColors.powerBIService },
                  { name: 'SLIM Power BI', color: chartColors.slimPowerBI }
                ].map((app, index) => (
                  <div key={index} className="flex items-center gap-1 mb-1">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: app.color }}></div>
                    <span className="text-[#94a3b8] text-xs">{app.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Power BI App Usage */}
          <div className="bg-gradient-to-br from-[#334155] to-[#1e293b] rounded-lg border border-[#475569] p-4 shadow-md">
            <h3 className="text-white font-semibold mb-4">Power BI App Usage</h3>
            <div className="space-y-3">
              {appUsageData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-[#94a3b8] text-sm w-40 truncate">{item.name}</span>
                  <div className="flex-1 bg-[#475569] rounded-full h-6 relative">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full rounded-full flex items-center justify-end pr-2"
                      style={{ width: `${(item.value / 70) * 100}%` }}
                    >
                      <span className="text-white text-xs font-medium">{item.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-[#94a3b8]">
                <span>0</span>
                <span>20</span>
                <span>40</span>
                <span>60</span>
                <span>80</span>
              </div>
            </div>
          </div>

          {/* Assigned Power BI Capable Licenses to App Users */}
          <div className="bg-gradient-to-br from-[#334155] to-[#1e293b] rounded-lg border border-[#475569] p-4 shadow-md">
            <h3 className="text-white font-semibold mb-4">Assigned Power BI Capable Licenses to App Users</h3>
            <div className="space-y-4">
              {licenseData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-[#94a3b8] text-sm w-32">{item.name}</span>
                  <div className="flex-1 bg-[#475569] rounded-full h-8 relative">
                    <div 
                      className="bg-gradient-to-r from-indigo-600 to-purple-500 h-full rounded-full flex items-center justify-end pr-3"
                      style={{ width: `${(item.value / 45) * 100}%` }}
                    >
                      <span className="text-white text-sm font-medium">{item.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-[#94a3b8]">
                <span>0</span>
                <span>10</span>
                <span>20</span>
                <span>30</span>
                <span>40</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerBIUsageTab;