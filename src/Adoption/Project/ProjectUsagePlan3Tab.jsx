import React from 'react';

const ProjectUsagePlan3Tab = () => {
  // Project Plan 3 使用数据
  const projectPlan3UsageData = [
    { department: 'Finance', totalUsers: 8, activeUsers: 7, projects: 15, tasks: 220, adoptionRate: 88 },
    { department: 'Sales', totalUsers: 5, activeUsers: 3, projects: 8, tasks: 120, adoptionRate: 60 },
    { department: 'Marketing', totalUsers: 10, activeUsers: 8, projects: 18, tasks: 250, adoptionRate: 80 },
    { department: 'IT', totalUsers: 15, activeUsers: 14, projects: 28, tasks: 420, adoptionRate: 93 },
    { department: 'Operations', totalUsers: 12, activeUsers: 10, projects: 20, tasks: 310, adoptionRate: 83 },
    { department: 'HR', totalUsers: 4, activeUsers: 2, projects: 5, tasks: 85, adoptionRate: 50 }
  ];

  // 高级功能使用分布
  const advancedFeatureUsage = [
    { feature: 'Resource Management', percentage: 35 },
    { feature: 'Timeline Views', percentage: 25 },
    { feature: 'Portfolio Management', percentage: 20 },
    { feature: 'Reporting', percentage: 15 },
    { feature: 'Other Advanced Features', percentage: 5 }
  ];

  // 使用趋势数据
  const usageTrendData = [
    { month: 'Jan', projects: 80, activeUsers: 40 },
    { month: 'Feb', projects: 85, activeUsers: 42 },
    { month: 'Mar', projects: 88, activeUsers: 43 },
    { month: 'Apr', projects: 90, activeUsers: 44 },
    { month: 'May', projects: 92, activeUsers: 44 },
    { month: 'Jun', projects: 94, activeUsers: 44 }
  ];

  // 热门项目
  const topProjects = [
    { name: 'Annual Budget Planning', department: 'Finance', tasks: 42, completion: 80, members: 7 },
    { name: 'Digital Marketing Campaign', department: 'Marketing', tasks: 35, completion: 65, members: 8 },
    { name: 'CRM Implementation', department: 'IT', tasks: 48, completion: 45, members: 10 },
    { name: 'Supply Chain Optimization', department: 'Operations', tasks: 38, completion: 70, members: 9 }
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
          <h3 className="text-gray-400 text-sm mb-1">Total Project Plan 3 Users</h3>
          <p className="text-2xl font-bold text-white">54</p>
          <p className="text-sm text-green-500 mt-2">+8.0% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Active Users</h3>
          <p className="text-2xl font-bold text-white">44</p>
          <p className="text-sm text-green-500 mt-2">+4.8% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Total Projects</h3>
          <p className="text-2xl font-bold text-white">94</p>
          <p className="text-sm text-green-500 mt-2">+7.0% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Overall Adoption Rate</h3>
          <p className="text-2xl font-bold text-white">81%</p>
          <p className="text-sm text-green-500 mt-2">+3.5% from last month</p>
        </div>
      </div>

      {/* 主要内容区域：左右布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* 左侧区域：部门使用情况表格 */}
        <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Project Plan 3 Usage by Department</h2>
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
                {projectPlan3UsageData.map((dept, index) => (
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

        {/* 右侧区域：高级功能使用分布 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Advanced Feature Usage</h2>
          <div className="space-y-4">
            {advancedFeatureUsage.map((feature, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-white">{feature.feature}</span>
                  <span className="text-sm text-gray-400">{feature.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      index === 0 ? 'bg-pink-600' : 
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
                <span className="text-sm font-medium text-white">Plan 3 Monthly Cost</span>
                <span className="text-sm font-medium text-white">$1,620.00</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-600">
                <span className="text-sm font-medium text-white">Cost per Active User</span>
                <span className="text-sm font-medium text-white">$36.82</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 热门项目 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Top Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topProjects.map((project, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                  index === 0 ? 'bg-pink-600' : 
                  index === 1 ? 'bg-blue-600' : 
                  index === 2 ? 'bg-teal-600' : 'bg-purple-600'
                }`}>
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">{project.name}</h3>
                  <p className="text-xs text-gray-400">{project.department}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Completion</span>
                    <span>{project.completion}%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-1.5">
                    <div 
                      className={`h-1.5 rounded-full ${
                        project.completion >= 75 ? 'bg-green-600' : 
                        project.completion >= 50 ? 'bg-blue-600' : 
                        project.completion >= 25 ? 'bg-yellow-600' : 'bg-red-600'
                      }`}
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Tasks: {project.tasks}</span>
                  <span>Team: {project.members}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 高级功能使用案例 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Advanced Feature Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-white font-medium">Resource Management</h3>
            </div>
            <p className="text-gray-400 text-sm">IT department optimized resource allocation across multiple projects, reducing resource conflicts by 65% and improving project delivery times by 30%.</p>
            <div className="mt-3 text-xs text-gray-500">Department: IT</div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-white font-medium">Portfolio Management</h3>
            </div>
            <p className="text-gray-400 text-sm">Finance team implemented portfolio management to track and prioritize projects based on ROI, resulting in 25% higher returns on project investments.</p>
            <div className="mt-3 text-xs text-gray-500">Department: Finance</div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-white font-medium">Timeline Views</h3>
            </div>
            <p className="text-gray-400 text-sm">Operations created comprehensive timeline views for supply chain projects, improving cross-team coordination and reducing delivery delays by 40%.</p>
            <div className="mt-3 text-xs text-gray-500">Department: Operations</div>
          </div>
        </div>
      </div>

      {/* 底部区域：采用建议 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Adoption Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Sales & HR Focus</h3>
                <p className="text-gray-400 text-sm mt-1">Sales and HR departments have the lowest adoption rates. Schedule targeted training sessions on resource management and portfolio features.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Reporting Features</h3>
                <p className="text-gray-400 text-sm mt-1">Increase adoption of reporting features (currently at 15%) through targeted workshops and success story sharing.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-white font-medium">License Optimization</h3>
                <p className="text-gray-400 text-sm mt-1">Review Plan 3 licenses for users who aren't utilizing advanced features and consider downgrading to Plan 1 where appropriate.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectUsagePlan3Tab;