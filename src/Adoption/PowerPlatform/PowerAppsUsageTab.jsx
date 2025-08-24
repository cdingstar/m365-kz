import React, { useState } from 'react';
import DateRangePicker from '../../components/DateRangePicker';
import { Calendar, Key, Users, BarChart, TrendingUp } from 'lucide-react';

const PowerAppsUsageTab = () => {
  const [dateRange, setDateRange] = useState('2024/8/24 - 2025/8/23');
  
  const handleDateRangeChange = (newRange) => {
    setDateRange(newRange);
  };
  // Power Apps App Summary Usage by User 数据
  const userSummaryData = [
    { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', userCount: 1, appCount: 5, lastSignin: 1 },
    { userId: '193a88f139039254246c6b2472aff5c059c693b4', userCount: 1, appCount: 2, lastSignin: 1 },
    { userId: '1a1ac37c6620f4961559b46f427092428796437', userCount: 1, appCount: 4, lastSignin: 1 },
    { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', userCount: 1, appCount: 5, lastSignin: 1 },
    { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', userCount: 1, appCount: 1, lastSignin: 1 },
    { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', userCount: 1, appCount: 2, lastSignin: 1 },
    { userId: 'b0ca73216498c61b1c2c3019458cd3f8cd5c6c4', userCount: 1, appCount: 2, lastSignin: 1 },
    { userId: 'bb9c38772dbcf13977451da3db554d9654140456', userCount: 1, appCount: 4, lastSignin: 1 },
    { userId: 'cb6130545d2a92a46f75c0431af1e4bcc58bc7f', userCount: 1, appCount: 2, lastSignin: 1 },
    { userId: 'cfa5becfc38b34ac57821c2bc78337c6019c28a', userCount: 1, appCount: 4, lastSignin: 1 },
    { userId: 'd0f497cb3f8db082dc66c8638c3f68bb00ba239', userCount: 1, appCount: 4, lastSignin: 1 }
  ];

  // Power Apps App Summary Detail 数据
  const appDetailData = [
    { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power Apps', pbiUserAssigned: 2 },
    { userId: '193a88f139039254246c6b2472aff5c059c693b4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power Apps', pbiUserAssigned: 1 },
    { userId: '1a1ac37c6620f4961559b46f427092428796437', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power Apps', pbiUserAssigned: 2 },
    { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power Apps', pbiUserAssigned: 2 },
    { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power Apps', pbiUserAssigned: 1 },
    { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power Apps', pbiUserAssigned: 1 }
  ];

  // Power Apps App Usage 数据
  const appUsageData = [
    { app: 'Microsoft Power Apps', count: 70 },
    { app: 'Power Apps Service', count: 60 },
    { app: 'Power Apps Data Refresh', count: 25 },
    { app: 'Power Apps Desktop', count: 18 },
    { app: 'SLIM Power Apps', count: 16 },
    { app: 'Power Apps Community - Prod', count: 3 },
    { app: 'Power Apps PowerShell', count: 2 }
  ];

  // Assigned Power Apps Capable Licenses to App Users 数据
  const licenseData = [
    { license: 'Power Apps Pro', count: 41 },
    { license: 'Power Apps (Free)', count: 35 }
  ];

  // Power Apps 使用数据（按部门）
  const powerAppsUsageData = [
    { department: 'Finance', totalUsers: 45, activeUsers: 40, reports: 28, dashboards: 12, adoptionRate: 89 },
    { department: 'Sales', totalUsers: 60, activeUsers: 48, reports: 35, dashboards: 15, adoptionRate: 80 },
    { department: 'Marketing', totalUsers: 35, activeUsers: 30, reports: 22, dashboards: 10, adoptionRate: 86 },
    { department: 'IT', totalUsers: 25, activeUsers: 24, reports: 30, dashboards: 18, adoptionRate: 96 },
    { department: 'Operations', totalUsers: 30, activeUsers: 25, reports: 20, dashboards: 8, adoptionRate: 83 },
    { department: 'HR', totalUsers: 15, activeUsers: 10, reports: 12, dashboards: 5, adoptionRate: 67 }
  ];

  // 报表使用趋势数据
  const reportUsageTrend = [
    { month: 'Jan', views: 1250, interactions: 850, exports: 320 },
    { month: 'Feb', views: 1320, interactions: 920, exports: 350 },
    { month: 'Mar', views: 1450, interactions: 980, exports: 380 },
    { month: 'Apr', views: 1520, interactions: 1050, exports: 410 },
    { month: 'May', views: 1680, interactions: 1150, exports: 450 },
    { month: 'Jun', views: 1750, interactions: 1220, exports: 480 }
  ];

  // 热门报表数据
  const topReports = [
    { name: 'Financial Dashboard', views: 450, department: 'Finance', creator: 'John Smith' },
    { name: 'Sales Performance', views: 420, department: 'Sales', creator: 'Sarah Johnson' },
    { name: 'Marketing Campaign Analysis', views: 380, department: 'Marketing', creator: 'Michael Brown' },
    { name: 'IT Infrastructure Metrics', views: 350, department: 'IT', creator: 'Emily Davis' },
    { name: 'Operations KPIs', views: 320, department: 'Operations', creator: 'Robert Wilson' }
  ];

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* 日期范围显示 */}
      <div className="flex justify-end mb-4">
        <DateRangePicker 
          initialDateRange={dateRange}
          onDateRangeChange={handleDateRangeChange}
        />
      </div>

      {/* 摘要卡片 - 移动到顶部 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-start">
            <div className="mr-4">
              <Key size={36} className="text-blue-500" />
            </div>
            <div>
              <h3 className="text-gray-400 text-sm mb-1">Assigned Power Apps Capable Licenses</h3>
              <p className="text-2xl font-bold text-white">80</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-start">
            <div className="mr-4">
              <Users size={36} className="text-green-500" />
            </div>
            <div>
              <h3 className="text-gray-400 text-sm mb-1">Power Apps Capable Users</h3>
              <p className="text-2xl font-bold text-white">64</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-start">
            <div className="mr-4">
              <BarChart size={36} className="text-yellow-500" />
            </div>
            <div>
              <h3 className="text-gray-400 text-sm mb-1">Power Apps App Users</h3>
              <p className="text-2xl font-bold text-white">102</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-start">
            <div className="mr-4">
              <TrendingUp size={36} className="text-purple-500" />
            </div>
            <div>
              <h3 className="text-gray-400 text-sm mb-1">Power Apps User Utilisation</h3>
              <p className="text-2xl font-bold text-white">159.4%</p>
            </div>
          </div>
        </div>
      </div>

      {/* 应用使用情况和许可证信息 - 移动到顶部 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Power Apps App Usage */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Power Apps App Usage</h2>
          <div className="h-64 bg-gray-700 rounded-lg p-4 relative">
            {appUsageData.map((item, index) => (
              <div key={index} className="flex items-center mb-3">
                <div className="w-32 text-sm text-gray-300">{item.app}</div>
                <div className="flex-1 mx-2">
                  <div className="bg-gray-600 h-6 rounded-md relative">
                    <div 
                      className="bg-blue-500 h-6 rounded-md"
                      style={{ width: `${(item.count / 70) * 100}%` }}
                    ></div>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-xs">
                      {item.count}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
              <div className="text-xs text-gray-400">0</div>
              <div className="text-xs text-gray-400">50</div>
            </div>
          </div>
        </div>

        {/* Assigned Power Apps Capable Licenses to App Users */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Assigned Power Apps Capable Licenses to App Users</h2>
          <div className="h-64 bg-gray-700 rounded-lg p-4 relative">
            {licenseData.map((item, index) => (
              <div key={index} className="flex items-center mb-3">
                <div className="w-32 text-sm text-gray-300">{item.license}</div>
                <div className="flex-1 mx-2">
                  <div className="bg-gray-600 h-6 rounded-md relative">
                    <div 
                      className="bg-blue-500 h-6 rounded-md"
                      style={{ width: `${(item.count / 41) * 100}%` }}
                    ></div>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-xs">
                      {item.count}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
              <div className="text-xs text-gray-400">0</div>
              <div className="text-xs text-gray-400">10</div>
              <div className="text-xs text-gray-400">20</div>
              <div className="text-xs text-gray-400">30</div>
              <div className="text-xs text-gray-400">40</div>
            </div>
          </div>
        </div>
      </div>

      {/* 用户摘要和应用详情部分 - 移动到顶部 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* 左侧：Power Apps App Summary Usage by User */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Power Apps App Summary Usage by User</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">User using Power Apps Apps (Auth to Power Apps)</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"># User</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">App Count</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Last App signin (Days)</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {userSummaryData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-750 transition-colors">
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-white">{item.userId}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.userCount}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.appCount}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.lastSignin}</td>
                  </tr>
                ))}
                <tr className="bg-gray-700 font-medium">
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white">总计</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white">83</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white">194</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 右侧：Power Apps App Summary Detail */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Power Apps App Summary Detail</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">User using Power Apps Apps (Auth to Power Apps)</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"># User</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Last App sign in Days Ago</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">App</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Power Apps User Assigned License count</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {appDetailData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-750 transition-colors">
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-white">{item.userId}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.userCount}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.lastSigninDays}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.app}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.pbiUserAssigned}</td>
                  </tr>
                ))}
                <tr className="bg-gray-700 font-medium">
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white">总计</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white">83</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white"></td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white"></td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white">73</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerAppsUsageTab;