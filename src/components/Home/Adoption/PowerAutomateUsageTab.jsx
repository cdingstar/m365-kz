import React, { useState } from 'react';
import DateRangePicker from '../../DateRangePicker';

const PowerAutomateUsageTab = () => {
  // 模拟数据
  const stats = [
    { label: 'Assigned Power Automate Capable Licenses', value: '52,184' },
    { label: 'Power Automate Capable Users', value: '45,326' },
    { label: 'Power Automate Active Users', value: '1,845' },
    { label: 'Power Automate User Utilisation', value: '4.1%' }
  ];

  const summaryUsageData = [
    { user: 'user1@example.com', userCount: 1, appCount: 3, lastSignin: 2 },
    { user: 'user2@example.com', userCount: 1, appCount: 2, lastSignin: 3 },
    { user: 'user3@example.com', userCount: 1, appCount: 4, lastSignin: 1 },
    { user: 'user4@example.com', userCount: 1, appCount: 1, lastSignin: 5 },
    { user: 'user5@example.com', userCount: 1, appCount: 2, lastSignin: 2 },
    { user: 'user6@example.com', userCount: 1, appCount: 3, lastSignin: 4 },
    { user: 'user7@example.com', userCount: 1, appCount: 1, lastSignin: 3 },
    { user: 'user8@example.com', userCount: 1, appCount: 2, lastSignin: 1 }
  ];

  const summaryDetailData = [
    { user: 'user1@example.com', userCount: 1, lastSignin: 2, app: 'Microsoft Power Automate', assigned: 2 },
    { user: 'user2@example.com', userCount: 1, lastSignin: 3, app: 'Power Automate for desktop', assigned: 1 },
    { user: 'user3@example.com', userCount: 1, lastSignin: 1, app: 'Microsoft Power Automate', assigned: 2 },
    { user: 'user4@example.com', userCount: 1, lastSignin: 5, app: 'Power Automate Service', assigned: 1 },
    { user: 'user5@example.com', userCount: 1, lastSignin: 2, app: 'Power Automate for desktop', assigned: 2 },
    { user: 'user6@example.com', userCount: 1, lastSignin: 4, app: 'Microsoft Power Automate', assigned: 1 }
  ];

  const activityData = [
    { 
      month: '2024年10月', 
      total: 8,
      segments: [
        { name: 'Microsoft Power Automate', value: 5, color: '#4338ca' },
        { name: 'Power Automate Service', value: 3, color: '#6366f1' }
      ] 
    },
    { 
      month: '2024年12月', 
      total: 24,
      segments: [
        { name: 'Microsoft Power Automate', value: 12, color: '#4338ca' },
        { name: 'Power Automate Service', value: 8, color: '#6366f1' },
        { name: 'Power Automate for desktop', value: 4, color: '#818cf8' }
      ] 
    },
    { 
      month: '2025年3月', 
      total: 42,
      segments: [
        { name: 'Microsoft Power Automate', value: 20, color: '#4338ca' },
        { name: 'Power Automate Service', value: 15, color: '#6366f1' },
        { name: 'Power Automate for desktop', value: 7, color: '#818cf8' }
      ] 
    },
    { 
      month: '2025年6月', 
      total: 18,
      segments: [
        { name: 'Microsoft Power Automate', value: 10, color: '#4338ca' },
        { name: 'Power Automate Service', value: 5, color: '#6366f1' },
        { name: 'Power Automate for desktop', value: 3, color: '#818cf8' }
      ] 
    },
    { 
      month: '2025年9月', 
      total: 36,
      segments: [
        { name: 'Microsoft Power Automate', value: 18, color: '#4338ca' },
        { name: 'Power Automate Service', value: 12, color: '#6366f1' },
        { name: 'Power Automate for desktop', value: 6, color: '#818cf8' }
      ] 
    }
  ];

  const appUsageData = [
    { name: 'Microsoft Power Automate', value: 1245 },
    { name: 'Power Automate Service', value: 876 },
    { name: 'Power Automate for desktop', value: 324 },
    { name: 'Power Automate mobile', value: 156 },
    { name: 'Power Automate Community', value: 42 }
  ];

  const licenseData = [
    { name: 'Microsoft 365 E3', value: 32615 },
    { name: 'Microsoft 365 F3', value: 4848 },
    { name: 'Dynamics 365 Team Members', value: 2146 },
    { name: 'Power Automate per user plan', value: 1250 },
    { name: 'Power Automate per flow plan', value: 325 }
  ];

  // 为每个卡片分配不同的渐变色
  const cardGradients = [
    'from-teal-600 to-blue-700',
    'from-blue-600 to-teal-700',
    'from-cyan-600 to-blue-700',
    'from-blue-500 to-cyan-600'
  ];

  // 为图表分配更丰富的颜色
  const chartColors = {
    microsoftPowerAutomate: '#4338ca',
    powerAutomateService: '#6366f1',
    powerAutomateDesktop: '#818cf8',
    powerAutomateMobile: '#60a5fa',
    powerAutomateCommunity: '#93c5fd'
  };

  return (
    <div className="w-full h-full bg-[#1e293b] p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* 页面标题 */}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Power Automate Usage</h1>
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
          {/* Power Automate App Summary Usage by User */}
          <div className="bg-gradient-to-br from-[#334155] to-[#283447] rounded-lg border border-[#475569] p-4 shadow-md">
            <h3 className="text-white font-semibold mb-4">Power Automate App Summary Usage by User</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#475569]">
                    <th className="text-left text-[#94a3b8] py-2">User using Power Automate Apps</th>
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
                    <td className="text-white py-2">1,845</td>
                    <td className="text-white py-2">156</td>
                    <td className="text-white py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Power Automate App Summary Detail */}
          <div className="bg-gradient-to-br from-[#334155] to-[#283447] rounded-lg border border-[#475569] p-4 shadow-md">
            <h3 className="text-white font-semibold mb-4">Power Automate App Summary Detail</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#475569]">
                    <th className="text-left text-[#94a3b8] py-2">User using Power Automate Apps</th>
                    <th className="text-left text-[#94a3b8] py-2"># User</th>
                    <th className="text-left text-[#94a3b8] py-2">Last App sign in Days Ago</th>
                    <th className="text-left text-[#94a3b8] py-2">App</th>
                    <th className="text-left text-[#94a3b8] py-2">User Assigned License count</th>
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
                    <td className="text-white py-2">1,845</td>
                    <td className="text-white py-2"></td>
                    <td className="text-white py-2"></td>
                    <td className="text-white py-2">4,125</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 图表区域 */}
        <div className="grid grid-cols-3 gap-6">
          {/* Power Automate Activity */}
          <div className="bg-gradient-to-br from-[#334155] to-[#1e293b] rounded-lg border border-[#475569] p-4 shadow-md">
            <h3 className="text-white font-semibold mb-4">Power Automate Activity</h3>
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
                {activityData.map((item, index) => (
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
                  { name: 'Microsoft Power Automate', color: chartColors.microsoftPowerAutomate },
                  { name: 'Power Automate Service', color: chartColors.powerAutomateService },
                  { name: 'Power Automate for desktop', color: chartColors.powerAutomateDesktop },
                  { name: 'Power Automate mobile', color: chartColors.powerAutomateMobile },
                  { name: 'Power Automate Community', color: chartColors.powerAutomateCommunity }
                ].map((app, index) => (
                  <div key={index} className="flex items-center gap-1 mb-1">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: app.color }}></div>
                    <span className="text-[#94a3b8] text-xs">{app.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Power Automate App Usage */}
          <div className="bg-gradient-to-br from-[#334155] to-[#1e293b] rounded-lg border border-[#475569] p-4 shadow-md">
            <h3 className="text-white font-semibold mb-4">Power Automate App Usage</h3>
            <div className="space-y-3">
              {appUsageData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-[#94a3b8] text-sm w-40 truncate">{item.name}</span>
                  <div className="flex-1 bg-[#475569] rounded-full h-6 relative">
                    <div 
                      className="bg-gradient-to-r from-cyan-600 to-blue-500 h-full rounded-full flex items-center justify-end pr-2"
                      style={{ width: `${(item.value / 1300) * 100}%` }}
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
                <span>400</span>
                <span>800</span>
                <span>1200</span>
                <span>1600</span>
              </div>
            </div>
          </div>

          {/* Assigned Power Automate Capable Licenses to App Users */}
          <div className="bg-gradient-to-br from-[#334155] to-[#1e293b] rounded-lg border border-[#475569] p-4 shadow-md">
            <h3 className="text-white font-semibold mb-4">Assigned Power Automate Capable Licenses to App Users</h3>
            <div className="space-y-4">
              {licenseData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-[#94a3b8] text-sm w-32">{item.name}</span>
                  <div className="flex-1 bg-[#475569] rounded-full h-8 relative">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 h-full rounded-full flex items-center justify-end pr-3"
                      style={{ width: `${(item.value / 33000) * 100}%` }}
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
                <span>10K</span>
                <span>20K</span>
                <span>30K</span>
                <span>40K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerAutomateUsageTab;