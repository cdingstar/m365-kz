import React, { useState } from 'react';
import DateRangePicker from '../../components/DateRangePicker';
import { projectUsageConfigs } from './projectUsageConfig';

const ProjectUsagePlan5Tab = () => {
  const [dateRange, setDateRange] = useState('2024/8/24 - 2025/8/23');
  const config = projectUsageConfigs.plan5;
  
  const handleDateRangeChange = (newRange) => {
    setDateRange(newRange);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* 日期范围显示 */}
      <div className="flex justify-end mb-4">
        <DateRangePicker 
          initialDateRange={dateRange}
          onDateRangeChange={handleDateRangeChange}
        />
      </div>

      {/* 摘要卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {config.summaryCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-start">
                <div className="mr-4">
                  <IconComponent size={36} className={card.iconColor} />
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">{card.title}</h3>
                  <p className="text-2xl font-bold text-white">{card.value}</p>
                  {card.trend && (
                    <p className="text-sm text-green-500 mt-2">{card.trend}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 主要内容区域：左右布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* 左侧区域：部门使用情况表格 */}
        <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">{config.customContent.departmentUsage.title}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total Users</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Active Users</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Projects</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Tasks</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Adoption Rate</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {config.customContent.departmentUsage.data.map((dept, index) => (
                  <tr key={index} className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{dept.department}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.totalUsers}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.activeUsers}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.projects}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.tasks}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-2.5 mr-2 max-w-[100px]">
                          <div 
                            className={`h-2.5 rounded-full ${
                              dept.adoptionRate >= 85 ? 'bg-green-600' : 
                              dept.adoptionRate >= 70 ? 'bg-blue-600' : 
                              dept.adoptionRate >= 50 ? 'bg-yellow-600' : 'bg-red-600'
                            }`}
                            style={{ width: `${dept.adoptionRate}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-300">{dept.adoptionRate}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 右侧区域：企业级功能使用分布 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">{config.customContent.enterpriseFeatures.title}</h2>
          <div className="space-y-4">
            {config.customContent.enterpriseFeatures.data.map((feature, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-white">{feature.feature}</span>
                  <span className="text-sm text-gray-400">{feature.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      index === 0 ? 'bg-purple-600' : 
                      index === 1 ? 'bg-blue-600' : 
                      index === 2 ? 'bg-teal-600' :
                      index === 3 ? 'bg-indigo-600' : 'bg-gray-500'
                    }`}
                    style={{ width: `${feature.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <h3 className="text-lg font-medium text-white mb-4">Plan Comparison</h3>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Plan 1 Users</span>
                <span className="text-sm font-medium text-white">79</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Plan 3 Users</span>
                <span className="text-sm font-medium text-white">54</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Plan 5 Users</span>
                <span className="text-sm font-medium text-white">34</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Plan 5 Monthly Cost</span>
                <span className="text-sm font-medium text-white">$1,700.00</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-600">
                <span className="text-sm font-medium text-white">Cost per Active User</span>
                <span className="text-sm font-medium text-white">$58.62</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 项目组合 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">{config.customContent.topPortfolios.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.customContent.topPortfolios.data.map((portfolio, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                  index === 0 ? 'bg-purple-600' : 
                  index === 1 ? 'bg-blue-600' : 
                  index === 2 ? 'bg-teal-600' : 'bg-indigo-600'
                }`}>
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">{portfolio.name}</h3>
                  <p className="text-xs text-gray-400">{portfolio.department}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Projects: {portfolio.projects}</span>
                  <span>Budget: {portfolio.budget}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">ROI:</span>
                  <span className="text-green-400 font-medium">{portfolio.roi}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 企业级功能使用案例 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Enterprise Feature Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <h3 className="text-white font-medium">Portfolio Management</h3>
            </div>
            <p className="text-gray-400 text-sm">Finance department implemented strategic portfolio management, resulting in 25% better resource allocation and 185% ROI on strategic initiatives.</p>
            <div className="mt-3 text-xs text-gray-500">Department: Finance</div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-white font-medium">Demand Management</h3>
            </div>
            <p className="text-gray-400 text-sm">IT implemented enterprise demand management to prioritize projects based on business value, reducing low-value projects by 40% and increasing strategic alignment.</p>
            <div className="mt-3 text-xs text-gray-500">Department: IT</div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-white font-medium">Enterprise Reporting</h3>
            </div>
            <p className="text-gray-400 text-sm">Operations created enterprise-wide project dashboards for executive leadership, improving visibility and enabling data-driven decision making across the organization.</p>
            <div className="mt-3 text-xs text-gray-500">Department: Operations</div>
          </div>
        </div>
      </div>

      {/* 使用趋势图 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">{config.customContent.usageTrends.title}</h2>
        <div className="h-64 bg-gray-700 rounded-lg relative overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
            {/* 背景网格线 */}
            <defs>
              <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#4B5563" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Y轴标签 */}
            <text x="15" y="20" fill="#9CA3AF" fontSize="10" textAnchor="middle">80</text>
            <text x="15" y="60" fill="#9CA3AF" fontSize="10" textAnchor="middle">60</text>
            <text x="15" y="100" fill="#9CA3AF" fontSize="10" textAnchor="middle">40</text>
            <text x="15" y="140" fill="#9CA3AF" fontSize="10" textAnchor="middle">20</text>
            <text x="15" y="180" fill="#9CA3AF" fontSize="10" textAnchor="middle">0</text>
            
            {/* X轴标签 */}
            {config.customContent.usageTrends.data.map((item, index) => (
              <text key={index} x={60 + index * 60} y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">{item.month}</text>
            ))}
            
            {/* 项目曲线 */}
            <path 
              d="M 60 100 L 120 98 L 180 96 L 240 95 L 300 94 L 360 93" 
              fill="none" 
              stroke="#A855F7" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 活跃用户曲线 */}
            <path 
              d="M 60 125 L 120 124 L 180 123 L 240 123 L 300 122 L 360 121" 
              fill="none" 
              stroke="#3B82F6" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 图例 */}
            <rect x="60" y="15" width="12" height="4" fill="#A855F7" />
            <text x="78" y="19" fill="#9CA3AF" fontSize="10">Projects</text>
            <rect x="150" y="15" width="12" height="4" fill="#3B82F6" />
            <text x="168" y="19" fill="#9CA3AF" fontSize="10">Active Users</text>
          </svg>
        </div>
      </div>

      {/* 底部区域：采用建议 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Adoption Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Sales & HR Focus</h3>
                <p className="text-gray-400 text-sm mt-1">Sales and HR departments have the lowest adoption rates. Schedule executive workshops on portfolio management and enterprise features.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Enterprise Reporting</h3>
                <p className="text-gray-400 text-sm mt-1">Increase adoption of enterprise reporting features (currently at 12%) through executive dashboards and success story sharing.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-white font-medium">ROI Tracking</h3>
                <p className="text-gray-400 text-sm mt-1">Implement standardized ROI tracking across all departments to better quantify the business value of Project Plan 5 licenses.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectUsagePlan5Tab;