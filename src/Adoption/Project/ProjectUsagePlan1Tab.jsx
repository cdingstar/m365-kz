import React from 'react';

const ProjectUsagePlan1Tab = () => {
  // Project Plan 1 使用数据
  const projectPlan1UsageData = [
    { department: 'Finance', totalUsers: 12, activeUsers: 10, projects: 18, tasks: 245, adoptionRate: 83 },
    { department: 'Sales', totalUsers: 8, activeUsers: 5, projects: 12, tasks: 180, adoptionRate: 63 },
    { department: 'Marketing', totalUsers: 15, activeUsers: 12, projects: 22, tasks: 310, adoptionRate: 80 },
    { department: 'IT', totalUsers: 20, activeUsers: 18, projects: 35, tasks: 520, adoptionRate: 90 },
    { department: 'Operations', totalUsers: 18, activeUsers: 14, projects: 25, tasks: 380, adoptionRate: 78 },
    { department: 'HR', totalUsers: 6, activeUsers: 4, projects: 8, tasks: 120, adoptionRate: 67 }
  ];

  // 项目类型分布
  const projectTypeDistribution = [
    { type: 'Team Projects', count: 65, percentage: 54 },
    { type: 'Individual Projects', count: 35, percentage: 29 },
    { type: 'Department Projects', count: 20, percentage: 17 }
  ];

  // 使用趋势数据
  const usageTrendData = [
    { month: 'Jan', projects: 95, activeUsers: 55 },
    { month: 'Feb', projects: 102, activeUsers: 58 },
    { month: 'Mar', projects: 110, activeUsers: 60 },
    { month: 'Apr', projects: 115, activeUsers: 62 },
    { month: 'May', projects: 118, activeUsers: 63 },
    { month: 'Jun', projects: 120, activeUsers: 63 }
  ];

  // 热门项目
  const topProjects = [
    { name: 'Q2 Financial Planning', department: 'Finance', tasks: 45, completion: 75, members: 8 },
    { name: 'Product Launch Campaign', department: 'Marketing', tasks: 38, completion: 60, members: 10 },
    { name: 'Sales Territory Planning', department: 'Sales', tasks: 32, completion: 85, members: 6 },
    { name: 'IT Infrastructure Upgrade', department: 'IT', tasks: 50, completion: 40, members: 12 }
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
          <h3 className="text-gray-400 text-sm mb-1">Total Project Plan 1 Users</h3>
          <p className="text-2xl font-bold text-white">79</p>
          <p className="text-sm text-green-500 mt-2">+6.8% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Active Users</h3>
          <p className="text-2xl font-bold text-white">63</p>
          <p className="text-sm text-green-500 mt-2">+5.0% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Total Projects</h3>
          <p className="text-2xl font-bold text-white">120</p>
          <p className="text-sm text-green-500 mt-2">+8.1% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-gray-400 text-sm mb-1">Overall Adoption Rate</h3>
          <p className="text-2xl font-bold text-white">80%</p>
          <p className="text-sm text-green-500 mt-2">+3.0% from last month</p>
        </div>
      </div>

      {/* 主要内容区域：左右布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* 左侧区域：部门使用情况表格 */}
        <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Project Plan 1 Usage by Department</h2>
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
                {projectPlan1UsageData.map((dept, index) => (
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
                              dept.adoptionRate >= 60 ? 'bg-yellow-600' : 'bg-red-600'
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

        {/* 右侧区域：项目类型分布 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Project Type Distribution</h2>
          <div className="space-y-4">
            {projectTypeDistribution.map((type, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-white">{type.type}</span>
                  <span className="text-sm text-gray-400">{type.count} ({type.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      index === 0 ? 'bg-orange-600' : 
                      index === 1 ? 'bg-blue-600' : 'bg-teal-600'
                    }`}
                    style={{ width: `${type.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <h3 className="text-lg font-medium text-white mb-4">Task Status Overview</h3>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Total Tasks</span>
                <span className="text-sm font-medium text-white">1,755</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Completed</span>
                <span className="text-sm font-medium text-green-400">1,120 (64%)</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">In Progress</span>
                <span className="text-sm font-medium text-blue-400">480 (27%)</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Not Started</span>
                <span className="text-sm font-medium text-red-400">155 (9%)</span>
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
                  index === 0 ? 'bg-orange-600' : 
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

      {/* 使用趋势图 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Usage Trends (Last 6 Months)</h2>
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
            <text x="15" y="20" fill="#9CA3AF" fontSize="10" textAnchor="middle">150</text>
            <text x="15" y="60" fill="#9CA3AF" fontSize="10" textAnchor="middle">120</text>
            <text x="15" y="100" fill="#9CA3AF" fontSize="10" textAnchor="middle">90</text>
            <text x="15" y="140" fill="#9CA3AF" fontSize="10" textAnchor="middle">60</text>
            <text x="15" y="180" fill="#9CA3AF" fontSize="10" textAnchor="middle">30</text>
            
            {/* X轴标签 */}
            <text x="60" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Jan</text>
            <text x="120" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Feb</text>
            <text x="180" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Mar</text>
            <text x="240" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Apr</text>
            <text x="300" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">May</text>
            <text x="360" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Jun</text>
            
            {/* 项目曲线 */}
            <path 
              d="M 60 100 L 120 95 L 180 90 L 240 85 L 300 83 L 360 80" 
              fill="none" 
              stroke="#F97316" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 活跃用户曲线 */}
            <path 
              d="M 60 125 L 120 122 L 180 120 L 240 118 L 300 117 L 360 117" 
              fill="none" 
              stroke="#3B82F6" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* 图例 */}
            <rect x="60" y="15" width="12" height="4" fill="#F97316" />
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
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Sales & HR Focus</h3>
                <p className="text-gray-400 text-sm mt-1">Sales and HR departments have the lowest adoption rates. Schedule targeted training sessions on project management basics.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Task Management</h3>
                <p className="text-gray-400 text-sm mt-1">Promote task management features to increase productivity and improve project tracking across departments.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Project Templates</h3>
                <p className="text-gray-400 text-sm mt-1">Create and share department-specific project templates to standardize project creation and management.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectUsagePlan1Tab; 