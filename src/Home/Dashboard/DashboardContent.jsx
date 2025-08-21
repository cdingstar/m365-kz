import React from 'react';

const DashboardContent = () => {
  // 仪表盘数据
  const summaryCards = [
    { title: 'Total Users', value: '86,295', change: '+2.4%', icon: '👥' },
    { title: 'Licensed Accounts', value: '41,725', change: '+1.2%', icon: '🔑' },
    { title: 'Monthly Cost', value: '$1,163,311', change: '-3.5%', icon: '💰' },
    { title: 'Active Devices', value: '49,290', change: '+5.7%', icon: '💻' }
  ];

  const adoptionMetrics = [
    { product: 'Microsoft 365 E3', total: 1200, active: 980, percentage: 82 },
    { product: 'Microsoft 365 E5', total: 450, active: 410, percentage: 91 },
    { product: 'Office 365 E1', total: 300, active: 245, percentage: 82 },
    { product: 'Exchange Online', total: 200, active: 185, percentage: 93 }
  ];

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* 页面标题和版本信息 */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
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
        {summaryCards.map((card, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-750 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">{card.title}</p>
                <p className="text-2xl font-bold text-white mt-1">{card.value}</p>
                <p className={`text-sm mt-2 ${card.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {card.change} from last month
                </p>
              </div>
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-2xl">
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 主要内容区域：左右布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* 左侧区域：许可证使用情况 */}
        <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">License Usage Overview</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Active</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Usage %</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Progress</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {adoptionMetrics.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.product}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.total}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.active}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.percentage}%</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            item.percentage > 85 ? 'bg-green-600' : 
                            item.percentage > 70 ? 'bg-blue-600' : 'bg-yellow-600'
                          }`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 右侧区域：快速访问 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Quick Access</h2>
          <div className="space-y-4">
            <button className="w-full bg-gray-700 hover:bg-gray-650 text-white p-4 rounded-lg flex items-center transition-colors">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xl">📊</span>
              </div>
              <div className="text-left">
                <p className="font-medium">License Assignment</p>
                <p className="text-sm text-gray-400">View and manage licenses</p>
              </div>
            </button>
            
            <button className="w-full bg-gray-700 hover:bg-gray-650 text-white p-4 rounded-lg flex items-center transition-colors">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xl">👥</span>
              </div>
              <div className="text-left">
                <p className="font-medium">Active Accounts</p>
                <p className="text-sm text-gray-400">Manage user accounts</p>
              </div>
            </button>
            
            <button className="w-full bg-gray-700 hover:bg-gray-650 text-white p-4 rounded-lg flex items-center transition-colors">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xl">📱</span>
              </div>
              <div className="text-left">
                <p className="font-medium">Power Platform</p>
                <p className="text-sm text-gray-400">View usage analytics</p>
              </div>
            </button>
            
            <button className="w-full bg-gray-700 hover:bg-gray-650 text-white p-4 rounded-lg flex items-center transition-colors">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xl">💬</span>
              </div>
              <div className="text-left">
                <p className="font-medium">Teams Usage</p>
                <p className="text-sm text-gray-400">Monitor Teams adoption</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 底部区域：最近活动 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Activities</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="flex items-start p-3 hover:bg-gray-750 rounded-lg transition-colors">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-4">
                <span className="text-lg">
                  {index === 0 ? '🔑' : index === 1 ? '👤' : index === 2 ? '📊' : '⚙️'}
                </span>
              </div>
              <div>
                <p className="text-white font-medium">
                  {index === 0 ? 'License allocation updated' : 
                   index === 1 ? 'New user accounts added' : 
                   index === 2 ? 'Monthly report generated' : 
                   'System maintenance completed'}
                </p>
                <p className="text-sm text-gray-400">
                  {index === 0 ? '2 hours ago' : 
                   index === 1 ? 'Yesterday' : 
                   index === 2 ? '3 days ago' : 
                   '1 week ago'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;