import React from 'react';

const AdoptionOverviewTab = () => {
  // Microsoft 365 关键产品使用情况数据
  const keyProductsData = [
    { product: 'Entra', users: 107, usageRate: 15, type: 'Assigned Users' },
    { product: 'Exchange', users: 82, usageRate: 64, type: 'Outlook' },
    { product: 'Teams', users: 68, usageRate: 53, type: 'Users' },
    { product: 'SharePoint', users: 59, usageRate: 46, type: 'Users' },
    { product: 'OneDrive', users: 60, usageRate: 47, type: 'Users' },
    { product: 'Apps for Enterprise', users: 84, usageRate: 65, type: 'Users' },
    { product: 'Loop', users: 60, usageRate: 65, type: 'Users' },
    { product: 'Copilot', users: 10, usageRate: 100, type: 'Users' }
  ];

  // 产品消费数据（按业务线）
  const productConsumptionData = [
    { 
      region: 'Americas Region', 
      usersWithLicenses: 66, 
      entraAssigned: 55, 
      totalEntra: 74,
      exchangeActive: 45,
      exchangeRate: '68%',
      teamsActive: 37,
      teamsRate: '56%',
      sharepointActive: 34,
      sharepointRate: '52%',
      onedriveActive: 36,
      onedriveRate: '55%',
      appsCount: 43,
      loopActive: 34,
      loopRate: '71%',
      copilotActive: 5,
      copilotRate: '100%'
    },
    { 
      region: 'Europe Region', 
      usersWithLicenses: 33, 
      entraAssigned: 28, 
      totalEntra: 38,
      exchangeActive: 21,
      exchangeRate: '64%',
      teamsActive: 20,
      teamsRate: '61%',
      sharepointActive: 20,
      sharepointRate: '61%',
      onedriveActive: 19,
      onedriveRate: '58%',
      appsCount: 21,
      loopActive: 21,
      loopRate: '91%',
      copilotActive: 4,
      copilotRate: '100%'
    },
    { 
      region: 'Development', 
      usersWithLicenses: 10, 
      entraAssigned: 9, 
      totalEntra: 10,
      exchangeActive: 7,
      exchangeRate: '70%',
      teamsActive: 5,
      teamsRate: '50%',
      sharepointActive: 1,
      sharepointRate: '10%',
      onedriveActive: 1,
      onedriveRate: '10%',
      appsCount: 10,
      loopActive: 1,
      loopRate: '10%',
      copilotActive: 0,
      copilotRate: '0%'
    },
    { 
      region: 'Not defined', 
      usersWithLicenses: 9, 
      entraAssigned: 6, 
      totalEntra: 565,
      exchangeActive: 2,
      exchangeRate: '22%',
      teamsActive: 2,
      teamsRate: '22%',
      sharepointActive: 2,
      sharepointRate: '22%',
      onedriveActive: 2,
      onedriveRate: '22%',
      appsCount: 3,
      loopActive: 2,
      loopRate: '40%',
      copilotActive: 1,
      copilotRate: '100%'
    },
    { 
      region: 'Asia Region', 
      usersWithLicenses: 8, 
      entraAssigned: 6, 
      totalEntra: 24,
      exchangeActive: 4,
      exchangeRate: '50%',
      teamsActive: 2,
      teamsRate: '25%',
      sharepointActive: 0,
      sharepointRate: '0%',
      onedriveActive: 0,
      onedriveRate: '0%',
      appsCount: 4,
      loopActive: 0,
      loopRate: '0%',
      copilotActive: 0,
      copilotRate: '0%'
    },
    { 
      region: 'Contact Centre Services', 
      usersWithLicenses: 2, 
      entraAssigned: 2, 
      totalEntra: 2,
      exchangeActive: 2,
      exchangeRate: '100%',
      teamsActive: 2,
      teamsRate: '100%',
      sharepointActive: 2,
      sharepointRate: '100%',
      onedriveActive: 2,
      onedriveRate: '100%',
      appsCount: 2,
      loopActive: 2,
      loopRate: '100%',
      copilotActive: 0,
      copilotRate: '0%'
    },
    { 
      region: 'Design and QA', 
      usersWithLicenses: 1, 
      entraAssigned: 1, 
      totalEntra: 1,
      exchangeActive: 1,
      exchangeRate: '100%',
      teamsActive: 0,
      teamsRate: '0%',
      sharepointActive: 0,
      sharepointRate: '0%',
      onedriveActive: 0,
      onedriveRate: '0%',
      appsCount: 1,
      loopActive: 0,
      loopRate: '0%',
      copilotActive: 0,
      copilotRate: '0%'
    },
    { 
      region: 'Manufacturing', 
      usersWithLicenses: 0, 
      entraAssigned: 0, 
      totalEntra: 1,
      exchangeActive: 0,
      exchangeRate: '0%',
      teamsActive: 0,
      teamsRate: '0%',
      sharepointActive: 0,
      sharepointRate: '0%',
      onedriveActive: 0,
      onedriveRate: '0%',
      appsCount: 0,
      loopActive: 0,
      loopRate: '0%',
      copilotActive: 0,
      copilotRate: '0%'
    },
    { 
      region: '总计', 
      usersWithLicenses: 129, 
      entraAssigned: 107, 
      totalEntra: 715,
      exchangeActive: 82,
      exchangeRate: '64%',
      teamsActive: 68,
      teamsRate: '53%',
      sharepointActive: 59,
      sharepointRate: '46%',
      onedriveActive: 60,
      onedriveRate: '47%',
      appsCount: 84,
      loopActive: 60,
      loopRate: '65%',
      copilotActive: 10,
      copilotRate: '100%'
    }
  ];

  // 渲染圆形进度条
  const renderCircularProgress = (percentage) => {
    // 计算圆环路径
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference * (1 - percentage / 100);
    
    return (
      <div className="relative w-24 h-24">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* 背景圆环 */}
          <circle 
            cx="50" 
            cy="50" 
            r={radius} 
            fill="transparent" 
            stroke="#374151" 
            strokeWidth="8"
          />
          {/* 进度圆环 */}
          <circle 
            cx="50" 
            cy="50" 
            r={radius} 
            fill="transparent" 
            stroke={percentage >= 90 ? "#10B981" : percentage >= 50 ? "#3B82F6" : "#EF4444"} 
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
          {/* 百分比文本 */}
          <text 
            x="50" 
            y="55" 
            fontSize="20" 
            textAnchor="middle" 
            fill="white"
            fontWeight="bold"
          >
            {percentage}%
          </text>
        </svg>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Microsoft 365 Key Product Usage</h1>
        <div className="flex items-center">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* 产品卡片网格 */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
        {keyProductsData.map((item, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 mb-2">
              {/* 产品图标 - 使用简单的占位符 */}
              <div className={`w-10 h-10 rounded-md flex items-center justify-center ${
                index % 8 === 0 ? 'bg-blue-500' : 
                index % 8 === 1 ? 'bg-indigo-500' : 
                index % 8 === 2 ? 'bg-purple-500' : 
                index % 8 === 3 ? 'bg-teal-500' : 
                index % 8 === 4 ? 'bg-blue-600' : 
                index % 8 === 5 ? 'bg-indigo-600' : 
                index % 8 === 6 ? 'bg-purple-600' : 
                'bg-teal-600'
              }`}>
                <span className="text-white text-lg font-bold">{item.product.charAt(0)}</span>
              </div>
            </div>
            <h3 className="text-white font-medium text-center">{item.product}</h3>
            <p className="text-2xl font-bold text-white mt-1">{item.users}</p>
            <p className="text-xs text-gray-400">{item.type}</p>
            <div className="mt-4 w-full">
              {renderCircularProgress(item.usageRate)}
            </div>
          </div>
        ))}
      </div>
      
      {/* 产品消费表格 */}
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Product Consumption (LoB) - 30 Day Summary</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Smart Tag - Line of Business</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Users with assigned M365 Licenses (V/N)</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Entra Assigned Users</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total Entra Accounts</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Exchange Users Active in 30 Days</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">% Exchange Consumption</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Teams Users Active in 30 Days</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">% Teams Consumption</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">SharePoint Users Active in 30 Days</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">% SharePoint Consumption</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">OneDrive Users Active in 30 Days</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">% OneDrive Consumption</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Apps for Enterprise User Count</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Loop Users Active in 30 Days</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Loop Usage %</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Copilot Users Active in 30 Days</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Copilot Usage %</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {productConsumptionData.map((item, index) => (
                <tr key={index} className={`hover:bg-gray-750 transition-colors ${item.region === '总计' ? 'font-bold bg-gray-700' : ''}`}>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-white">{item.region}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-300">{item.usersWithLicenses}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-300">{item.entraAssigned}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-300">{item.totalEntra}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-300">{item.exchangeActive}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-300">{item.exchangeRate}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-300">{item.teamsActive}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-300">{item.teamsRate}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-300">{item.sharepointActive}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-300">{item.sharepointRate}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-300">{item.onedriveActive}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-300">{item.onedriveRate}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-300">{item.appsCount}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-300">{item.loopActive}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-300">{item.loopRate}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-300">{item.copilotActive}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-300">{item.copilotRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdoptionOverviewTab;