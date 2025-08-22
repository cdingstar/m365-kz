import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { CircleDollarSign, TrendingDown, ListChecks } from 'lucide-react';

// 模拟支出数据 - 过去6个月
const spendData = [
  { month: 'Mar', value: 3700 },
  { month: 'Apr', value: 3850 },
  { month: 'May', value: 4000 },
  { month: 'Jun', value: 4200 },
  { month: 'Jul', value: 4100 },
  { month: 'Aug', value: 4000 },
];

// 模拟账户数据 - 过去6个月
const accountsData = [
  { month: 'Mar', value: 780 },
  { month: 'Apr', value: 790 },
  { month: 'May', value: 800 },
  { month: 'Jun', value: 805 },
  { month: 'Jul', value: 810 },
  { month: 'Aug', value: 815 },
];

const DashboardContent = () => {
  // 添加状态来跟踪选中的项目
  const [selectedSpendItem, setSelectedSpendItem] = useState('licenseConsumed');
  const [selectedOperationItem, setSelectedOperationItem] = useState('accounts');

  return (
    <div className="p-4 bg-gray-900 h-screen flex flex-col overflow-hidden">
      {/* 顶部卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* 支出卡片 */}
        <div className="bg-gray-800 rounded-lg shadow-lg flex">
          <div className="bg-teal-900/30 p-4 flex items-center justify-center rounded-l-lg">
            <CircleDollarSign size={36} className="text-teal-500" />
          </div>
          <div className="p-4 flex-1">
            <h3 className="text-gray-400 font-medium">Spend</h3>
            <div className="flex justify-between items-center mt-1">
              <span className="text-4xl font-bold text-white">£4K</span>
              <span className="text-red-500">-£311.05</span>
            </div>
          </div>
        </div>
        
        {/* 节省卡片 */}
        <div className="bg-gray-800 rounded-lg shadow-lg flex">
          <div className="bg-green-900/30 p-4 flex items-center justify-center rounded-l-lg">
            <TrendingDown size={36} className="text-green-500" />
          </div>
          <div className="p-4 flex-1">
            <h3 className="text-gray-400 font-medium">Savings</h3>
            <div className="flex justify-between items-center mt-1">
              <span className="text-4xl font-bold text-white">£1.67K</span>
              <span className="text-red-500">-£1,529.03</span>
            </div>
          </div>
        </div>
        
        {/* 推荐卡片 */}
        <div className="bg-gray-800 rounded-lg shadow-lg flex">
          <div className="bg-blue-900/30 p-4 flex items-center justify-center rounded-l-lg">
            <ListChecks size={36} className="text-blue-500" />
          </div>
          <div className="p-4 flex-1">
            <h3 className="text-gray-400 font-medium">Recommendations</h3>
            <div className="flex justify-between items-center mt-1">
              <span className="text-4xl font-bold text-white">999</span>
              <span className="text-red-500">-101</span>
            </div>
          </div>
        </div>
      </div>

      {/* 支出概览部分 */}
      <div className="bg-gray-800 rounded-lg p-4 shadow-lg mb-4 h-[calc(42.5%-2.5rem)]">
        <h2 className="text-lg font-semibold text-white mb-3">Spend Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
          {/* 许可证消费 */}
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-colors duration-200 border ${selectedSpendItem === 'licenseConsumed' ? 'bg-teal-900/30 border-teal-600' : 'border-transparent hover:bg-gray-700'}`}
            onClick={() => setSelectedSpendItem('licenseConsumed')}
          >
            <h3 className="text-gray-400 font-medium mb-2">License Consumed</h3>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-white">£4K</span>
              <span className="text-red-500">-7.8%</span>
            </div>
          </div>
          
          {/* 许可证浪费 */}
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-colors duration-200 border ${selectedSpendItem === 'licenseWastage' ? 'bg-teal-900/30 border-teal-600' : 'border-transparent hover:bg-gray-700'}`}
            onClick={() => setSelectedSpendItem('licenseWastage')}
          >
            <h3 className="text-gray-400 font-medium mb-2">License Wastage</h3>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-white">£45</span>
              <span className="text-red-500">-84.8%</span>
            </div>
          </div>
          
          {/* 节省潜力 */}
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-colors duration-200 border ${selectedSpendItem === 'savingsPotential' ? 'bg-teal-900/30 border-teal-600' : 'border-transparent hover:bg-gray-700'}`}
            onClick={() => setSelectedSpendItem('savingsPotential')}
          >
            <h3 className="text-gray-400 font-medium mb-2">Savings Potential</h3>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-white">£1.1K</span>
              <span className="text-red-500">-40.8%</span>
            </div>
          </div>
        </div>
        
        {/* 支出趋势图表 */}
        <div className="h-[calc(100%-100px)]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={spendData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0D9488" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#0D9488" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#4B5563" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#9CA3AF' }} tickLine={false} axisLine={false} />
              <YAxis
                domain={['dataMin - 300', 'dataMax + 300']}
                tick={{ fontSize: 12, fill: '#9CA3AF' }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `£${value / 1000}K`}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F9FAFB' }}
                formatter={(value) => [`£${value}`, 'Spend']}
                labelStyle={{ color: '#F9FAFB' }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#0D9488"
                fillOpacity={1}
                fill="url(#colorSpend)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 运营部分 */}
      <div className="bg-gray-800 rounded-lg p-4 shadow-lg h-[calc(42.5%-2.5rem)]">
        <h2 className="text-lg font-semibold text-white mb-3">Operations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
          {/* 账户 */}
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-colors duration-200 border ${selectedOperationItem === 'accounts' ? 'bg-teal-900/30 border-teal-600' : 'border-transparent hover:bg-gray-700'}`}
            onClick={() => setSelectedOperationItem('accounts')}
          >
            <h3 className="text-gray-400 font-medium mb-2">Accounts</h3>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-white">815</span>
              <span className="text-green-500">1.9%</span>
            </div>
          </div>
          
          {/* 端点 */}
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-colors duration-200 border ${selectedOperationItem === 'endpoints' ? 'bg-teal-900/30 border-teal-600' : 'border-transparent hover:bg-gray-700'}`}
            onClick={() => setSelectedOperationItem('endpoints')}
          >
            <h3 className="text-gray-400 font-medium mb-2">Endpoints</h3>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-white">391</span>
              <span className="text-green-500">4%</span>
            </div>
          </div>
          
          {/* 群组 */}
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-colors duration-200 border ${selectedOperationItem === 'groups' ? 'bg-teal-900/30 border-teal-600' : 'border-transparent hover:bg-gray-700'}`}
            onClick={() => setSelectedOperationItem('groups')}
          >
            <h3 className="text-gray-400 font-medium mb-2">Groups</h3>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-white">455</span>
              <span className="text-green-500">2%</span>
            </div>
          </div>
        </div>
        
        {/* 账户趋势图表 */}
        <div className="h-[calc(100%-100px)]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={accountsData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorAccounts" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0D9488" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#0D9488" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#4B5563" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#9CA3AF' }} tickLine={false} axisLine={false} />
              <YAxis
                domain={['dataMin - 20', 'dataMax + 20']}
                tick={{ fontSize: 12, fill: '#9CA3AF' }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F9FAFB' }}
                formatter={(value) => [`${value}`, 'Accounts']}
                labelStyle={{ color: '#F9FAFB' }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#0D9488"
                fillOpacity={1}
                fill="url(#colorAccounts)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
