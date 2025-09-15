import React, { useState, useRef, useEffect } from 'react';
import DropdownSingleFilter from '../../components/Filters/DropdownSingleFilter';
import DropdownSearchFilter from '../../components/Filters/DropdownSearchFilter';
import DropdownSearchMultiSelFilter from '../../components/Filters/DropdownSearchMultiSelFilter';

const ActiveInactiveAccountsTab = () => {
  // Account Status 过滤器选项 - 改为多选
  const [selectedAccountStatus, setSelectedAccountStatus] = useState([]);
  const accountStatusOptions = [
    { value: 'enabled', label: 'Enabled' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'empty', label: '(Leeg)' }
  ];
  
  // Activity Days 过滤器选项
  const [activityDays, setActivityDays] = useState('all');
  const activityDaysOptions = [
    { value: 'all', label: 'All' },
    { value: 'in30days', label: 'in 30 days' },
    { value: '31to45days', label: '31~45 days' },
    { value: '46to90days', label: '46~90 days' },
    { value: '91to180days', label: '91~180 days' },
    { value: 'zombie', label: 'Zombie' }
  ];
  
  // Account Age 过滤器选项
  const [accountAge, setAccountAge] = useState('all');
  const accountAgeOptions = [
    { value: 'all', label: 'All' },
    { value: 'in30days', label: 'in 30 days' },
    { value: '31to45days', label: '31~45 days' },
    { value: '46to90days', label: '46~90 days' },
    { value: '91to180days', label: '91~180 days' },
    { value: 'over180days', label: '>180 days' }
  ];
  
  // 根据数值返回颜色类名的函数
  const getColorClass = (value, type) => {
    if (type === 'days') {
      if (value <= 7) return 'text-green-400';
      if (value <= 30) return 'text-yellow-400';
      if (value <= 90) return 'text-orange-400';
      return 'text-red-400';
    }
    return 'text-gray-300';
  };

  // 用户列表数据
  const userList = [
    'admin@company.com',
    'user1@company.com',
    'user2@company.com',
    'manager@company.com',
    'support@company.com',
    'sales@company.com',
    'hr@company.com',
    'finance@company.com'
  ];
  
  // SKU列表数据
  const skuList = [
    { value: 'office365_e1', label: 'Office 365 E1' },
    { value: 'office365_e3', label: 'Office 365 E3' },
    { value: 'office365_e5', label: 'Office 365 E5' },
    { value: 'microsoft365_basic', label: 'Microsoft 365 Business Basic' },
    { value: 'microsoft365_standard', label: 'Microsoft 365 Business Standard' },
    { value: 'microsoft365_premium', label: 'Microsoft 365 Business Premium' }
  ];

  // 搜索状态 - 改为多选
  const [selectedUsers, setSelectedUsers] = useState([]);
  
  const [selectedSkus, setSelectedSkus] = useState([]);
  

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            {/* 标题和操作按钮行 - 与SKU Adoption Details保持一致的样式 */}
            <div className="px-4 py-3 bg-gray-600 border-b border-gray-500 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h2 className="text-xl font-semibold text-white">Account Status</h2>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <button className="p-1 hover:bg-gray-500 rounded text-gray-300 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-gray-500 rounded text-gray-300 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-gray-500 rounded text-gray-300 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* 过滤器行 - 作为表格的第二行，颜色区分 */}
            <div className="bg-gray-700 border-b border-gray-600">
              <table className="w-full table-fixed">
                <tbody>
                  <tr>
                    {/* User Principal Name 过滤器 - 与 User Principal Name 列对齐 */}
                    <td className="px-2 py-3 w-32">
                      <DropdownSearchMultiSelFilter
                        values={selectedUsers}
                        onChange={setSelectedUsers}
                        options={userList.map(user => ({ value: user, label: user }))}
                        placeholder="User Name"
                        className="text-xs"
                        maxHeight={200}
                        selectAllText="Alles selecteren"
                        closeText="关闭"
                        applyText="应用"
                        noResultsText="无匹配结果"
                      />
                    </td>
                    {/* Display Name 列 - 空白 */}
                    <td className="px-2 py-3 w-24"></td>
                    {/* Recommendation Count 列 - 空白 */}
                    <td className="px-2 py-3 w-16"></td>
                    {/* SKU Name 过滤器 - 与 SKU Name 列对齐 */}
                    <td className="px-2 py-3 w-24">
                      <DropdownSearchMultiSelFilter
                        values={selectedSkus}
                        onChange={setSelectedSkus}
                        options={skuList}
                        placeholder="SKU Name"
                        className="text-xs"
                        maxHeight={200}
                        selectAllText="Alles selecteren"
                        closeText="关闭"
                        applyText="应用"
                        noResultsText="无匹配结果"
                      />
                    </td>
                    {/* Count 列 - 空白 */}
                    <td className="px-2 py-3 w-16"></td>
                    {/* Has Activations 过滤器 - 与 Has Activations? 列对齐 */}
                    <td className="px-1 py-3 w-16">
                      <DropdownSearchMultiSelFilter
                        values={selectedAccountStatus}
                        onChange={setSelectedAccountStatus}
                        options={accountStatusOptions}
                        placeholder="Status"
                        className="text-xs"
                        maxHeight={200}
                        selectAllText="Alles selecteren"
                        closeText="关闭"
                        applyText="应用"
                        noResultsText="无匹配结果"
                      />
                    </td>
                    {/* Account Age 过滤器 - 与 Days Since Account Creation 列对齐 */}
                    <td className="px-1 py-3 w-16">
                      <DropdownSingleFilter
                        value={accountAge}
                        onChange={setAccountAge}
                        options={accountAgeOptions}
                        placeholder="Age"
                        className="py-1.5 px-2 text-xs"
                      />
                    </td>
                    {/* Activity Days 过滤器 - 与 Last Account Activity (Days) 列对齐 */}
                    <td className="px-1 py-3 w-16">
                      <DropdownSingleFilter
                        value={activityDays}
                        onChange={setActivityDays}
                        options={activityDaysOptions}
                        placeholder="Activity"
                        className="py-1.5 px-2 text-xs"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full table-fixed">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase w-32">User Principal Name</th>
                    <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase w-24">Display Name</th>
                    <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase w-16">Recommendation Count</th>
                    <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase w-24">SKU Name</th>
                    <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase w-16">Count</th>
                    <th className="px-1 py-2 text-left text-xs font-medium text-gray-300 uppercase w-16">Has Activations?</th>
                    <th className="px-1 py-2 text-left text-xs font-medium text-gray-300 uppercase w-16">Days Since Account Creation</th>
                    <th className="px-1 py-2 text-left text-xs font-medium text-gray-300 uppercase w-16">Last Account Activity (Days)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600">
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user1@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">John Doe</td>
                    <td className="px-2 py-2 text-xs text-gray-300">3</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E3</td>
                    <td className="px-2 py-2 text-xs text-gray-300">2</td>
                    <td className="px-1 py-2 text-xs text-gray-300">Yes</td>
                    <td className="px-1 py-2 text-xs text-gray-300">120</td>
                    <td className="px-1 py-2 text-xs text-green-400">2</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user2@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Jane Smith</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E1</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-1 py-2 text-xs text-gray-300">No</td>
                    <td className="px-1 py-2 text-xs text-gray-300">90</td>
                    <td className="px-1 py-2 text-xs text-orange-400">45</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user3@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Bob Johnson</td>
                    <td className="px-2 py-2 text-xs text-gray-300">2</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E5</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-1 py-2 text-xs text-gray-300">Yes</td>
                    <td className="px-1 py-2 text-xs text-gray-300">180</td>
                    <td className="px-1 py-2 text-xs text-green-400">1</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user4@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Alice Brown</td>
                    <td className="px-2 py-2 text-xs text-gray-300">4</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E3</td>
                    <td className="px-2 py-2 text-xs text-gray-300">3</td>
                    <td className="px-1 py-2 text-xs text-gray-300">Yes</td>
                    <td className="px-1 py-2 text-xs text-gray-300">200</td>
                    <td className="px-1 py-2 text-xs text-yellow-400">12</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user5@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Charlie Wilson</td>
                    <td className="px-2 py-2 text-xs text-gray-300">0</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E1</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-1 py-2 text-xs text-gray-300">Yes</td>
                    <td className="px-1 py-2 text-xs text-gray-300">150</td>
                    <td className="px-1 py-2 text-xs text-green-400">3</td>
                  </tr>
                </tbody>
                <tfoot className="bg-gray-600">
                  <tr className="font-semibold">
                    <td className="px-2 py-3 text-xs text-white">Total (20 users)</td>
                    <td className="px-2 py-3 text-xs text-white">-</td>
                    <td className="px-2 py-3 text-xs text-white">42</td>
                    <td className="px-2 py-3 text-xs text-white">-</td>
                    <td className="px-2 py-3 text-xs text-white">32</td>
                    <td className="px-1 py-3 text-xs text-white">-</td>
                    <td className="px-1 py-3 text-xs text-white">3,340</td>
                    <td className="px-1 py-3 text-xs text-white">512</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Account aging categories</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-xs">Active</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-600 rounded-full h-3 mr-2">
                  <div className="bg-green-500 h-3 rounded-full transition-all duration-300" style={{width: '75%'}}></div>
                </div>
                <span className="text-xs font-medium text-white min-w-[50px] text-right">1,234</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-xs">30 Days</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-600 rounded-full h-3 mr-2">
                  <div className="bg-yellow-500 h-3 rounded-full transition-all duration-300" style={{width: '60%'}}></div>
                </div>
                <span className="text-xs font-medium text-white min-w-[50px] text-right">789</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-xs">45 Days</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-600 rounded-full h-3 mr-2">
                  <div className="bg-orange-500 h-3 rounded-full transition-all duration-300" style={{width: '45%'}}></div>
                </div>
                <span className="text-xs font-medium text-white min-w-[50px] text-right">567</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-xs">90 Days</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-600 rounded-full h-3 mr-2">
                  <div className="bg-red-400 h-3 rounded-full transition-all duration-300" style={{width: '30%'}}></div>
                </div>
                <span className="text-xs font-medium text-white min-w-[50px] text-right">345</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-xs">180 Days</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-600 rounded-full h-3 mr-2">
                  <div className="bg-red-500 h-3 rounded-full transition-all duration-300" style={{width: '25%'}}></div>
                </div>
                <span className="text-xs font-medium text-white min-w-[50px] text-right">234</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-xs">Over 180 Days</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-600 rounded-full h-3 mr-2">
                  <div className="bg-red-600 h-3 rounded-full transition-all duration-300" style={{width: '20%'}}></div>
                </div>
                <span className="text-xs font-medium text-white min-w-[50px] text-right">123</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-xs">No Activity Dates</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-600 rounded-full h-3 mr-2">
                  <div className="bg-gray-500 h-3 rounded-full transition-all duration-300" style={{width: '15%'}}></div>
                </div>
                <span className="text-xs font-medium text-white min-w-[50px] text-right">89</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Recommendations</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-xs">Disabled with license</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-600 rounded-full h-3 mr-2">
                  <div className="bg-red-500 h-3 rounded-full transition-all duration-300" style={{width: '75%'}}></div>
                </div>
                <span className="text-xs font-medium text-white min-w-[50px] text-right">342</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-xs">Disabled without License</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-600 rounded-full h-3 mr-2">
                  <div className="bg-orange-500 h-3 rounded-full transition-all duration-300" style={{width: '60%'}}></div>
                </div>
                <span className="text-xs font-medium text-white min-w-[50px] text-right">189</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-xs">Enabled with License</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-600 rounded-full h-3 mr-2">
                  <div className="bg-green-500 h-3 rounded-full transition-all duration-300" style={{width: '85%'}}></div>
                </div>
                <span className="text-xs font-medium text-white min-w-[50px] text-right">1,456</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-xs">Enabled without license</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-600 rounded-full h-3 mr-2">
                  <div className="bg-yellow-500 h-3 rounded-full transition-all duration-300" style={{width: '45%'}}></div>
                </div>
                <span className="text-xs font-medium text-white min-w-[50px] text-right">267</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveInactiveAccountsTab;