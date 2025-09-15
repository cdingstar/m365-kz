import React, { useState } from 'react';
import DateRangePicker from './DateRangePicker';
import DropdownSearchMultiSelFilter from './Filters/DropdownSearchMultiSelFilter';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ProductUsageTemplate = ({ config }) => {
  const [dateRange, setDateRange] = useState('2024/8/24 - 2025/8/23');
  
  const handleDateRangeChange = (newRange) => {
    setDateRange(newRange);
  };

  // 过滤器状态
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedDetailUsers, setSelectedDetailUsers] = useState([]);
  const [selectedApps, setSelectedApps] = useState([]);

  // 排序状态
  const [userSummarySort, setUserSummarySort] = useState({ column: null, direction: null });
  const [appDetailSort, setAppDetailSort] = useState({ column: null, direction: null });

  // 用户选项
  const userOptions = config.userSummaryData.map(item => ({
    value: item.userId,
    label: item.userId
  }));

  // 详情用户选项
  const detailUserOptions = config.appDetailData.map(item => ({
    value: item.userId,
    label: item.userId
  }));

  // App 选项
  const appOptions = config.appOptions || [];

  // 排序函数
  const handleUserSummarySort = (column) => {
    const direction = userSummarySort.column === column && userSummarySort.direction === 'asc' ? 'desc' : 'asc';
    setUserSummarySort({ column, direction });
  };

  const handleAppDetailSort = (column) => {
    const direction = appDetailSort.column === column && appDetailSort.direction === 'asc' ? 'desc' : 'asc';
    setAppDetailSort({ column, direction });
  };

  // 排序后的数据
  const sortedUserSummaryData = React.useMemo(() => {
    if (!userSummarySort.column) return config.userSummaryData;
    
    return [...config.userSummaryData].sort((a, b) => {
      const aVal = a[userSummarySort.column];
      const bVal = b[userSummarySort.column];
      
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return userSummarySort.direction === 'asc' ? aVal - bVal : bVal - aVal;
      }
      
      return userSummarySort.direction === 'asc' 
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
  }, [config.userSummaryData, userSummarySort]);

  const sortedAppDetailData = React.useMemo(() => {
    if (!appDetailSort.column) return config.appDetailData;
    
    return [...config.appDetailData].sort((a, b) => {
      const aVal = a[appDetailSort.column];
      const bVal = b[appDetailSort.column];
      
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return appDetailSort.direction === 'asc' ? aVal - bVal : bVal - aVal;
      }
      
      return appDetailSort.direction === 'asc' 
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
  }, [config.appDetailData, appDetailSort]);

  // 渲染排序图标
  const renderSortIcon = (column, currentSort) => {
    if (currentSort.column !== column) {
      return <ChevronDown className="w-4 h-4 opacity-30 group-hover:opacity-60" />;
    }
    return currentSort.direction === 'asc' 
      ? <ChevronUp className="w-4 h-4" />
      : <ChevronDown className="w-4 h-4" />;
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
        {config.summaryCards.map((card, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-start">
              <div className="mr-4">
                <card.icon size={36} className={card.iconColor} />
              </div>
              <div>
                <h3 className="text-gray-400 text-sm mb-1">{card.title}</h3>
                <p className="text-2xl font-bold text-white">{card.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 应用使用情况和许可证信息 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* App Usage */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">{config.appUsageTitle}</h2>
          <div className="min-h-fit bg-gray-700 rounded-lg p-4 relative">
            {config.appUsageData.map((item, index) => (
              <div key={index} className="flex items-center mb-3">
                <div className="w-32 text-sm text-gray-300">{item.app}</div>
                <div className="flex-1 mx-2">
                  <div className="bg-gray-600 h-6 rounded-md relative">
                    <div 
                      className="bg-blue-500 h-6 rounded-md"
                      style={{ width: `${(item.count / Math.max(...config.appUsageData.map(d => d.count))) * 100}%` }}
                    ></div>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-xs">
                      {item.count}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4 border-t border-gray-600 pt-2 flex justify-between px-4">
              <div className="text-xs text-gray-400">0</div>
              <div className="text-xs text-gray-400">50</div>
            </div>
          </div>
        </div>

        {/* License Data */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">{config.licenseTitle}</h2>
          <div className="h-64 bg-gray-700 rounded-lg p-4 relative">
            {config.licenseData.map((item, index) => (
              <div key={index} className="flex items-center mb-3">
                <div className="w-32 text-sm text-gray-300">{item.license}</div>
                <div className="flex-1 mx-2">
                  <div className="bg-gray-600 h-6 rounded-md relative">
                    <div 
                      className="bg-blue-500 h-6 rounded-md"
                      style={{ width: `${(item.count / Math.max(...config.licenseData.map(d => d.count))) * 100}%` }}
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

      {/* 用户摘要和应用详情部分 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* 左侧：User Summary */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">{config.userSummaryTitle}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              {/* Filter 行 */}
              <thead>
                <tr className="bg-gray-700">
                  <td style={{ width: '300px' }} className="px-4 py-2">
                    <DropdownSearchMultiSelFilter
                      options={userOptions}
                      selectedValues={selectedUsers}
                      onSelectionChange={setSelectedUsers}
                      placeholder={config.userFilterPlaceholder}
                      searchPlaceholder={config.userSearchPlaceholder}
                      dropdownWidth="280px"
                    />
                  </td>
                  <td style={{ width: '80px' }} className="px-4 py-2"></td>
                  <td style={{ width: '120px' }} className="px-4 py-2"></td>
                  <td style={{ width: '120px' }} className="px-4 py-2"></td>
                  <td className="px-4 py-2"></td>
                </tr>
              </thead>
              <thead className="bg-gray-700">
                <tr>
                  <th style={{ width: '300px' }} className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">{config.userSummaryColumns.user}</th>
                  <th 
                    style={{ width: '80px' }} 
                    className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-600 group"
                    onClick={() => handleUserSummarySort('userCount')}
                  >
                    <div className="flex items-center justify-between">
                      {config.userSummaryColumns.userCount}
                      {renderSortIcon('userCount', userSummarySort)}
                    </div>
                  </th>
                  <th style={{ width: '120px' }} className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">{config.userSummaryColumns.licenseNeeds}</th>
                  <th 
                    style={{ width: '120px' }} 
                    className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-600 group"
                    onClick={() => handleUserSummarySort('appCount')}
                  >
                    <div className="flex items-center justify-between">
                      {config.userSummaryColumns.appCount}
                      {renderSortIcon('appCount', userSummarySort)}
                    </div>
                  </th>
                  <th 
                    className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-600 group"
                    onClick={() => handleUserSummarySort('lastSignin')}
                  >
                    <div className="flex items-center justify-between">
                      {config.userSummaryColumns.lastSignin}
                      {renderSortIcon('lastSignin', userSummarySort)}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {sortedUserSummaryData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-750 transition-colors">
                    <td style={{ width: '300px' }} className="px-4 py-2 whitespace-nowrap text-sm text-white">{item.userId}</td>
                    <td style={{ width: '80px' }} className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.userCount}</td>
                    <td style={{ width: '120px' }} className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.licenseNeeds}</td>
                    <td style={{ width: '120px' }} className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.appCount}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.lastSignin}</td>
                  </tr>
                ))}
                <tr className="bg-gray-700 font-medium">
                  <td style={{ width: '300px' }} className="px-4 py-2 whitespace-nowrap text-sm text-white">总计</td>
                  <td style={{ width: '80px' }} className="px-4 py-2 whitespace-nowrap text-sm text-white">{config.userSummaryTotals.userCount}</td>
                  <td style={{ width: '120px' }} className="px-4 py-2 whitespace-nowrap text-sm text-white"></td>
                  <td style={{ width: '120px' }} className="px-4 py-2 whitespace-nowrap text-sm text-white">{config.userSummaryTotals.appCount}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 右侧：App Detail */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">{config.appDetailTitle}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              {/* Filter 行 */}
              <thead>
                <tr className="bg-gray-700">
                  <td style={{ width: '300px' }} className="px-4 py-2">
                    <DropdownSearchMultiSelFilter
                      options={detailUserOptions}
                      selectedValues={selectedDetailUsers}
                      onSelectionChange={setSelectedDetailUsers}
                      placeholder={config.userFilterPlaceholder}
                      searchPlaceholder={config.userSearchPlaceholder}
                      dropdownWidth="280px"
                    />
                  </td>
                  <td style={{ width: '80px' }} className="px-4 py-2"></td>
                  <td style={{ width: '180px' }} className="px-4 py-2"></td>
                  <td style={{ width: '160px' }} className="px-4 py-2">
                    <DropdownSearchMultiSelFilter
                      options={appOptions}
                      selectedValues={selectedApps}
                      onSelectionChange={setSelectedApps}
                      placeholder="ALL APP"
                      searchPlaceholder="搜索 App"
                      dropdownWidth="140px"
                    />
                  </td>
                  <td className="px-4 py-2"></td>
                </tr>
              </thead>
              <thead className="bg-gray-700">
                <tr>
                  <th style={{ width: '300px' }} className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">{config.appDetailColumns.user}</th>
                  <th 
                    style={{ width: '80px' }} 
                    className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-600 group"
                    onClick={() => handleAppDetailSort('userCount')}
                  >
                    <div className="flex items-center justify-between">
                      {config.appDetailColumns.userCount}
                      {renderSortIcon('userCount', appDetailSort)}
                    </div>
                  </th>
                  <th 
                    style={{ width: '180px' }} 
                    className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-600 group"
                    onClick={() => handleAppDetailSort('lastSigninDays')}
                  >
                    <div className="flex items-center justify-between">
                      {config.appDetailColumns.lastSigninDays}
                      {renderSortIcon('lastSigninDays', appDetailSort)}
                    </div>
                  </th>
                  <th style={{ width: '160px' }} className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">{config.appDetailColumns.app}</th>
                  <th 
                    className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-600 group"
                    onClick={() => handleAppDetailSort(config.appDetailColumns.licenseCountKey)}
                  >
                    <div className="flex items-center justify-between">
                      {config.appDetailColumns.licenseCount}
                      {renderSortIcon(config.appDetailColumns.licenseCountKey, appDetailSort)}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {sortedAppDetailData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-750 transition-colors">
                    <td style={{ width: '300px' }} className="px-4 py-2 whitespace-nowrap text-sm text-white">{item.userId}</td>
                    <td style={{ width: '80px' }} className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.userCount}</td>
                    <td style={{ width: '180px' }} className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.lastSigninDays}</td>
                    <td style={{ width: '160px' }} className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.app}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item[config.appDetailColumns.licenseCountKey]}</td>
                  </tr>
                ))}
                <tr className="bg-gray-700 font-medium">
                  <td style={{ width: '300px' }} className="px-4 py-2 whitespace-nowrap text-sm text-white">总计</td>
                  <td style={{ width: '80px' }} className="px-4 py-2 whitespace-nowrap text-sm text-white">{config.appDetailTotals.userCount}</td>
                  <td style={{ width: '180px' }} className="px-4 py-2 whitespace-nowrap text-sm text-white"></td>
                  <td style={{ width: '160px' }} className="px-4 py-2 whitespace-nowrap text-sm text-white"></td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-white">{config.appDetailTotals.licenseCount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductUsageTemplate;