import React from 'react';

const TeamsPremiumUsageTab = () => {
  // Teams Premium 使用数据
  const teamsPremiumUsageData = [
    { department: 'Finance', totalUsers: 25, activeUsers: 20, webinars: 12, advancedMeetings: 45, adoptionRate: 80 },
    { department: 'Sales', totalUsers: 40, activeUsers: 35, webinars: 28, advancedMeetings: 85, adoptionRate: 88 },
    { department: 'Marketing', totalUsers: 20, activeUsers: 18, webinars: 22, advancedMeetings: 40, adoptionRate: 90 },
    { department: 'IT', totalUsers: 15, activeUsers: 14, webinars: 8, advancedMeetings: 30, adoptionRate: 93 },
    { department: 'Operations', totalUsers: 30, activeUsers: 22, webinars: 10, advancedMeetings: 38, adoptionRate: 73 },
    { department: 'HR', totalUsers: 10, activeUsers: 6, webinars: 5, advancedMeetings: 15, adoptionRate: 60 }
  ];

  // 高级功能使用趋势数据
  const premiumFeatureUsageTrend = [
    { month: 'Jan', webinars: 45, advancedMeetings: 180, translations: 120, recordings: 90 },
    { month: 'Feb', webinars: 52, advancedMeetings: 210, translations: 145, recordings: 105 },
    { month: 'Mar', webinars: 60, advancedMeetings: 240, translations: 160, recordings: 125 },
    { month: 'Apr', webinars: 68, advancedMeetings: 265, translations: 180, recordings: 140 },
    { month: 'May', webinars: 75, advancedMeetings: 290, translations: 195, recordings: 155 },
    { month: 'Jun', webinars: 85, advancedMeetings: 320, translations: 210, recordings: 170 }
  ];

  // 高级功能使用分布
  const premiumFeatureUsage = [
    { feature: 'Webinars', percentage: 25 },
    { feature: 'Advanced Meeting Security', percentage: 20 },
    { feature: 'Live Translations', percentage: 15 },
    { feature: 'Advanced Recording & Transcription', percentage: 18 },
    { feature: 'Custom Backgrounds', percentage: 12 },
    { feature: 'Other Premium Features', percentage: 10 }
  ];

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* 版本信息 */}
      <div className="flex justify-end items-center mb-8">
        <div className="flex items-center space-x-6">
          <div className="text-right">
            <div className="text-sm font-medium text-gray-300">4.1</div>
            <div className="text-xs text-gray-400">Current Version</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-gray-300">28-7-2025</div>
            <div className="text-xs text-gray-400">Last Refresh</div>
          </div>
        </div>
      </div>

      {/* 摘要卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Total Premium Users</h3>
          <p className="text-2xl font-bold text-white">140</p>
          <p className="text-sm text-green-500 mt-2">+12.0% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Active Premium Users</h3>
          <p className="text-2xl font-bold text-white">115</p>
          <p className="text-sm text-green-500 mt-2">+15.0% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Total Webinars</h3>
          <p className="text-2xl font-bold text-white">85</p>
          <p className="text-sm text-green-500 mt-2">+21.4% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Overall Adoption Rate</h3>
          <p className="text-2xl font-bold text-white">82%</p>
          <p className="text-sm text-green-500 mt-2">+5.0% from last month</p>
        </div>
      </div>

      {/* 主要内容区域：左右布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* 左侧区域：部门使用情况表格 */}
        <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Teams Premium Usage by Department</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total Users</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Active Users</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Webinars</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Advanced Meetings</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Adoption Rate</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {teamsPremiumUsageData.map((dept, index) => (
                  <tr key={index} className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{dept.department}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.totalUsers}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.activeUsers}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.webinars}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dept.advancedMeetings}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-2.5 mr-2 max-w-[100px]">
                          <div 
                            className={`h-2.5 rounded-full ${
                              dept.adoptionRate >= 90 ? 'bg-green-600' : 
                              dept.adoptionRate >= 80 ? 'bg-blue-600' : 
                              dept.adoptionRate >= 70 ? 'bg-yellow-600' : 'bg-red-600'
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

        {/* 右侧区域：高级功能使用分布 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Premium Feature Usage</h2>
          <div className="space-y-4">
            {premiumFeatureUsage.map((feature, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-white">{feature.feature}</span>
                  <span className="text-sm text-gray-400">{feature.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      index === 0 ? 'bg-violet-600' : 
                      index === 1 ? 'bg-blue-600' : 
                      index === 2 ? 'bg-teal-600' :
                      index === 3 ? 'bg-amber-600' :
                      index === 4 ? 'bg-rose-600' : 'bg-gray-500'
                    }`}
                    style={{ width: `${feature.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <h3 className="text-lg font-medium text-white mb-4">ROI Analysis</h3>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Cost Savings</span>
                <span className="text-sm font-medium text-green-400">$42,500</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Productivity Gain</span>
                <span className="text-sm font-medium text-green-400">320 hours/month</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">License Cost</span>
                <span className="text-sm font-medium text-red-400">$28,000</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-600">
                <span className="text-sm font-medium text-white">Net Benefit</span>
                <span className="text-sm font-medium text-green-400">$14,500</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 高级功能使用趋势 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Premium Feature Usage Trends (Last 6 Months)</h2>
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
            <text x="15" y="20" fill="#9CA3AF" fontSize="10" textAnchor="middle">350</text>
            <text x="15" y="60" fill="#9CA3AF" fontSize="10" textAnchor="middle">250</text>
            <text x="15" y="100" fill="#9CA3AF" fontSize="10" textAnchor="middle">150</text>
            <text x="15" y="140" fill="#9CA3AF" fontSize="10" textAnchor="middle">75</text>
            <text x="15" y="180" fill="#9CA3AF" fontSize="10" textAnchor="middle">0</text>
            
            {/* X轴标签 */}
            <text x="60" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Jan</text>
            <text x="120" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Feb</text>
            <text x="180" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Mar</text>
            <text x="240" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Apr</text>
            <text x="300" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">May</text>
            <text x="360" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Jun</text>
            
            {/* 高级会议曲线 */}
            <path 
              d="M 60 140 L 120 130 L 180 120 L 240 110 L 300 100 L 360 90" 
              fill="none" 
              stroke="#8B5CF6" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 网络研讨会曲线 */}
            <path 
              d="M 60 170 L 120 165 L 180 160 L 240 155 L 300 150 L 360 145" 
              fill="none" 
              stroke="#3B82F6" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 翻译曲线 */}
            <path 
              d="M 60 155 L 120 150 L 180 145 L 240 140 L 300 135 L 360 130" 
              fill="none" 
              stroke="#10B981" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 录制曲线 */}
            <path 
              d="M 60 160 L 120 155 L 180 150 L 240 145 L 300 140 L 360 135" 
              fill="none" 
              stroke="#F59E0B" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 图例 */}
            <rect x="60" y="15" width="12" height="4" fill="#8B5CF6" />
            <text x="78" y="19" fill="#9CA3AF" fontSize="10">Advanced Meetings</text>
            <rect x="180" y="15" width="12" height="4" fill="#3B82F6" />
            <text x="198" y="19" fill="#9CA3AF" fontSize="10">Webinars</text>
            <rect x="260" y="15" width="12" height="4" fill="#10B981" />
            <text x="278" y="19" fill="#9CA3AF" fontSize="10">Translations</text>
            <rect x="340" y="15" width="12" height="4" fill="#F59E0B" />
            <text x="358" y="19" fill="#9CA3AF" fontSize="10">Recordings</text>
          </svg>
        </div>
      </div>

      {/* 高级功能使用案例 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Premium Feature Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-white font-medium">Sales Webinar Series</h3>
            </div>
            <p className="text-gray-400 text-sm">The Sales team hosted a series of 12 webinars with external clients, reaching 850+ attendees with a 92% satisfaction rate.</p>
            <div className="mt-3 text-xs text-gray-500">Department: Sales</div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-white font-medium">Global Town Hall</h3>
            </div>
            <p className="text-gray-400 text-sm">Marketing used live translations for a global town hall meeting with 200+ employees across 12 countries, saving $15K in translation services.</p>
            <div className="mt-3 text-xs text-gray-500">Department: Marketing</div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-white font-medium">Secure Client Meetings</h3>
            </div>
            <p className="text-gray-400 text-sm">Finance utilized advanced security features for sensitive client meetings, with watermarking and end-to-end encryption for 45+ high-value client sessions.</p>
            <div className="mt-3 text-xs text-gray-500">Department: Finance</div>
          </div>
        </div>
      </div>

      {/* 底部区域：采用建议 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Adoption Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-white font-medium">HR Department Focus</h3>
                <p className="text-gray-400 text-sm mt-1">HR has the lowest adoption rate (60%). Schedule targeted training sessions on webinar hosting and advanced meeting features.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Translation Features</h3>
                <p className="text-gray-400 text-sm mt-1">Promote live translation features for global meetings to increase usage from current 15% to target 25%.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Premium ROI Tracking</h3>
                <p className="text-gray-400 text-sm mt-1">Implement department-specific ROI tracking for Premium features to better quantify business value and justify license costs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsPremiumUsageTab;