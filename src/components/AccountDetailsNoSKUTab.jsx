import React from 'react';

const AccountDetailsNoSKUTab = () => {
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

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-white">Account Details (no SKU)</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <button className="p-1 hover:bg-gray-700 rounded text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-700 rounded text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-700 rounded text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2 space-y-4">
          <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
            <h3 className="font-medium text-white mb-2 text-sm">userPrincipalName</h3>
            
            {/* 搜索框 */}
            <div className="mb-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                  <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Zoeken"
                  className="block w-full pl-7 pr-2 py-1.5 border border-gray-600 rounded text-gray-300 bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-xs"
                />
              </div>
            </div>

            {/* 复选框列表 */}
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500" />
                <span className="text-gray-300 text-xs">Alles selecteren</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500" />
                <span className="text-gray-300 text-xs">admin@company.com</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500" />
                <span className="text-gray-300 text-xs">user1@company.com</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500" />
                <span className="text-gray-300 text-xs">user2@company.com</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500" />
                <span className="text-gray-300 text-xs">manager@company.com</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500" />
                <span className="text-gray-300 text-xs">support@company.com</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500" />
                <span className="text-gray-300 text-xs">sales@company.com</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500" />
                <span className="text-gray-300 text-xs">hr@company.com</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500" />
                <span className="text-gray-300 text-xs">finance@company.com</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
            <h3 className="font-medium text-white mb-2 text-sm">Account Status</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500" />
                <span className="text-gray-300 text-xs">Alles selecteren</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500" />
                <span className="text-gray-300 text-xs">(Leeg)</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500" />
                <span className="text-gray-300 text-xs">Disabled</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500" />
                <span className="text-gray-300 text-xs">Enabled</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
            <h3 className="font-medium text-white mb-2 text-sm">Recommendation Name</h3>
            
            {/* 搜索框 */}
            <div className="mb-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                  <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Zoeken"
                  className="block w-full pl-7 pr-2 py-1.5 border border-gray-600 rounded text-gray-300 bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-xs"
                />
              </div>
            </div>

            {/* 复选框列表 */}
            <div className="space-y-2">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="select-all-rec" 
                  className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500"
                />
                <label htmlFor="select-all-rec" className="text-gray-300 text-xs">
                  Alles selecteren
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="active-never-used-rec" 
                  className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500"
                />
                <label htmlFor="active-never-used-rec" className="text-gray-300 text-xs">
                  Active User (member) with a product that was never...
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="active-inactive-product-rec" 
                  className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500"
                />
                <label htmlFor="active-inactive-product-rec" className="text-gray-300 text-xs">
                  Active User (member) with a Product with Inactive...
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="not-in-mfa-rec" 
                  className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500"
                />
                <label htmlFor="not-in-mfa-rec" className="text-gray-300 text-xs">
                  Active users not included in MFA policy (excluded)
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="copilot-candidate-rec" 
                  className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500"
                />
                <label htmlFor="copilot-candidate-rec" className="text-gray-300 text-xs">
                  Copilot Candidate Users
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-10">
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full table-fixed">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase w-32">User Principal Name</th>
                    <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase w-24">Display Name</th>
                    <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase w-16">Recommendation Count</th>
                    <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase w-32">Recommendation List</th>
                    <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase w-24">SKU Name</th>
                    <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase w-16">Count</th>
                    <th className="px-1 py-2 text-left text-xs font-medium text-gray-300 uppercase w-16">Account Name</th>
                    <th className="px-1 py-2 text-left text-xs font-medium text-gray-300 uppercase w-16">Last Cloud App Signin (days ago)</th>
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
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">License, Security, Usage</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E3</td>
                    <td className="px-2 py-2 text-xs text-gray-300">2</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">JDoe</td>
                    <td className="px-1 py-2 text-xs text-green-400">5</td>
                    <td className="px-1 py-2 text-xs text-gray-300">Yes</td>
                    <td className="px-1 py-2 text-xs text-gray-300">120</td>
                    <td className="px-1 py-2 text-xs text-green-400">2</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user2@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Jane Smith</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Inactive Account</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E1</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">JSmith</td>
                    <td className="px-1 py-2 text-xs text-orange-400">45</td>
                    <td className="px-1 py-2 text-xs text-gray-300">No</td>
                    <td className="px-1 py-2 text-xs text-gray-300">90</td>
                    <td className="px-1 py-2 text-xs text-orange-400">45</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user3@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Bob Johnson</td>
                    <td className="px-2 py-2 text-xs text-gray-300">2</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">License, Usage</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E5</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">BJohn</td>
                    <td className="px-1 py-2 text-xs text-green-400">1</td>
                    <td className="px-1 py-2 text-xs text-gray-300">Yes</td>
                    <td className="px-1 py-2 text-xs text-gray-300">180</td>
                    <td className="px-1 py-2 text-xs text-green-400">1</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user4@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Alice Brown</td>
                    <td className="px-2 py-2 text-xs text-gray-300">4</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Security, License, Usage, Access</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E3</td>
                    <td className="px-2 py-2 text-xs text-gray-300">3</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">ABrown</td>
                    <td className="px-1 py-2 text-xs text-yellow-400">15</td>
                    <td className="px-1 py-2 text-xs text-gray-300">Yes</td>
                    <td className="px-1 py-2 text-xs text-gray-300">200</td>
                    <td className="px-1 py-2 text-xs text-yellow-400">12</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user5@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Charlie Wilson</td>
                    <td className="px-2 py-2 text-xs text-gray-300">0</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">-</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E1</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">CWilson</td>
                    <td className="px-1 py-2 text-xs text-green-400">3</td>
                    <td className="px-1 py-2 text-xs text-gray-300">Yes</td>
                    <td className="px-1 py-2 text-xs text-gray-300">150</td>
                    <td className="px-1 py-2 text-xs text-green-400">3</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user6@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Diana Davis</td>
                    <td className="px-2 py-2 text-xs text-gray-300">2</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">License, Security</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E5</td>
                    <td className="px-2 py-2 text-xs text-gray-300">2</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">DDavis</td>
                    <td className="px-1 py-2 text-xs text-red-400">120</td>
                    <td className="px-1 py-2 text-xs text-gray-300">No</td>
                    <td className="px-1 py-2 text-xs text-gray-300">300</td>
                    <td className="px-1 py-2 text-xs text-red-400">120</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user7@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Edward Miller</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Usage</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E3</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">EMiller</td>
                    <td className="px-1 py-2 text-xs text-yellow-400">25</td>
                    <td className="px-1 py-2 text-xs text-gray-300">Yes</td>
                    <td className="px-1 py-2 text-xs text-gray-300">180</td>
                    <td className="px-1 py-2 text-xs text-yellow-400">20</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user8@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Fiona Garcia</td>
                    <td className="px-2 py-2 text-xs text-gray-300">3</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">License, Access, Security</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E1</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">FGarcia</td>
                    <td className="px-1 py-2 text-xs text-green-400">7</td>
                    <td className="px-1 py-2 text-xs text-gray-300">Yes</td>
                    <td className="px-1 py-2 text-xs text-gray-300">90</td>
                    <td className="px-1 py-2 text-xs text-green-400">5</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user9@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">George Martinez</td>
                    <td className="px-2 py-2 text-xs text-gray-300">5</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">All Categories</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E5</td>
                    <td className="px-2 py-2 text-xs text-gray-300">3</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">GMart</td>
                    <td className="px-1 py-2 text-xs text-orange-400">60</td>
                    <td className="px-1 py-2 text-xs text-gray-300">No</td>
                    <td className="px-1 py-2 text-xs text-gray-300">250</td>
                    <td className="px-1 py-2 text-xs text-orange-400">55</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user10@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Helen Rodriguez</td>
                    <td className="px-2 py-2 text-xs text-gray-300">2</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">License, Usage</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E3</td>
                    <td className="px-2 py-2 text-xs text-gray-300">2</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">HRod</td>
                    <td className="px-1 py-2 text-xs text-green-400">4</td>
                    <td className="px-1 py-2 text-xs text-gray-300">Yes</td>
                    <td className="px-1 py-2 text-xs text-gray-300">160</td>
                    <td className="px-1 py-2 text-xs text-green-400">4</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user11@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Ivan Lopez</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Security</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E1</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">ILopez</td>
                    <td className="px-1 py-2 text-xs text-yellow-400">30</td>
                    <td className="px-1 py-2 text-xs text-gray-300">Yes</td>
                    <td className="px-1 py-2 text-xs text-gray-300">210</td>
                    <td className="px-1 py-2 text-xs text-yellow-400">28</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user12@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Julia Anderson</td>
                    <td className="px-2 py-2 text-xs text-gray-300">3</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">License, Access, Usage</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E5</td>
                    <td className="px-2 py-2 text-xs text-gray-300">2</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">JAnd</td>
                    <td className="px-1 py-2 text-xs text-green-400">2</td>
                    <td className="px-1 py-2 text-xs text-gray-300">Yes</td>
                    <td className="px-1 py-2 text-xs text-gray-300">140</td>
                    <td className="px-1 py-2 text-xs text-green-400">2</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user13@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Kevin Taylor</td>
                    <td className="px-2 py-2 text-xs text-gray-300">0</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">-</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E3</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">KTaylor</td>
                    <td className="px-1 py-2 text-xs text-green-400">6</td>
                    <td className="px-1 py-2 text-xs text-gray-300">Yes</td>
                    <td className="px-1 py-2 text-xs text-gray-300">100</td>
                    <td className="px-1 py-2 text-xs text-green-400">6</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user14@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Linda Thomas</td>
                    <td className="px-2 py-2 text-xs text-gray-300">4</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Security, License, Usage, Access</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E1</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">LThomas</td>
                    <td className="px-1 py-2 text-xs text-red-400">95</td>
                    <td className="px-1 py-2 text-xs text-gray-300">No</td>
                    <td className="px-1 py-2 text-xs text-gray-300">280</td>
                    <td className="px-1 py-2 text-xs text-red-400">90</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user15@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Michael Jackson</td>
                    <td className="px-2 py-2 text-xs text-gray-300">2</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">License, Security</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E5</td>
                    <td className="px-2 py-2 text-xs text-gray-300">3</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">MJack</td>
                    <td className="px-1 py-2 text-xs text-yellow-400">18</td>
                    <td className="px-1 py-2 text-xs text-gray-300">Yes</td>
                    <td className="px-1 py-2 text-xs text-gray-300">220</td>
                    <td className="px-1 py-2 text-xs text-yellow-400">15</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user16@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Nancy White</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Usage</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E3</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">NWhite</td>
                    <td className="px-1 py-2 text-xs text-green-400">1</td>
                    <td className="px-1 py-2 text-xs text-gray-300">Yes</td>
                    <td className="px-1 py-2 text-xs text-gray-300">80</td>
                    <td className="px-1 py-2 text-xs text-green-400">1</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user17@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Oliver Harris</td>
                    <td className="px-2 py-2 text-xs text-gray-300">3</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">License, Security, Usage</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E5</td>
                    <td className="px-2 py-2 text-xs text-gray-300">2</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">OHarris</td>
                    <td className="px-1 py-2 text-xs text-orange-400">75</td>
                    <td className="px-1 py-2 text-xs text-gray-300">No</td>
                    <td className="px-1 py-2 text-xs text-gray-300">320</td>
                    <td className="px-1 py-2 text-xs text-orange-400">70</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user18@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Patricia Clark</td>
                    <td className="px-2 py-2 text-xs text-gray-300">2</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">License, Access</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E3</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">PClark</td>
                    <td className="px-1 py-2 text-xs text-yellow-400">22</td>
                    <td className="px-1 py-2 text-xs text-gray-300">Yes</td>
                    <td className="px-1 py-2 text-xs text-gray-300">190</td>
                    <td className="px-1 py-2 text-xs text-yellow-400">20</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user19@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Quinn Lewis</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Security</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E1</td>
                    <td className="px-2 py-2 text-xs text-gray-300">1</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">QLewis</td>
                    <td className="px-1 py-2 text-xs text-green-400">3</td>
                    <td className="px-1 py-2 text-xs text-gray-300">Yes</td>
                    <td className="px-1 py-2 text-xs text-gray-300">110</td>
                    <td className="px-1 py-2 text-xs text-green-400">3</td>
                  </tr>
                  <tr className="hover:bg-gray-700 transition-colors">
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">user20@company.com</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Rachel Walker</td>
                    <td className="px-2 py-2 text-xs text-gray-300">4</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">All Categories</td>
                    <td className="px-2 py-2 text-xs text-gray-300 truncate">Office 365 E5</td>
                    <td className="px-2 py-2 text-xs text-gray-300">3</td>
                    <td className="px-1 py-2 text-xs text-gray-300 truncate">RWalker</td>
                    <td className="px-1 py-2 text-xs text-yellow-400">12</td>
                    <td className="px-1 py-2 text-xs text-gray-300">Yes</td>
                    <td className="px-1 py-2 text-xs text-gray-300">170</td>
                    <td className="px-1 py-2 text-xs text-yellow-400">10</td>
                  </tr>
                </tbody>
                <tfoot className="bg-gray-600">
                  <tr className="font-semibold">
                    <td className="px-2 py-3 text-xs text-white">Total (20 users)</td>
                    <td className="px-2 py-3 text-xs text-white">-</td>
                    <td className="px-2 py-3 text-xs text-white">42</td>
                    <td className="px-2 py-3 text-xs text-white">-</td>
                    <td className="px-2 py-3 text-xs text-white">-</td>
                    <td className="px-2 py-3 text-xs text-white">32</td>
                    <td className="px-1 py-3 text-xs text-white">-</td>
                    <td className="px-1 py-3 text-xs text-white">-</td>
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

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Account Aging Classification</h3>
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
              <span className="text-gray-300 text-xs">31-60 Days</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-600 rounded-full h-3 mr-2">
                  <div className="bg-yellow-500 h-3 rounded-full transition-all duration-300" style={{width: '45%'}}></div>
                </div>
                <span className="text-xs font-medium text-white min-w-[50px] text-right">567</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-xs">60-180 Days</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-600 rounded-full h-3 mr-2">
                  <div className="bg-red-500 h-3 rounded-full transition-all duration-300" style={{width: '25%'}}></div>
                </div>
                <span className="text-xs font-medium text-white min-w-[50px] text-right">123</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-xs">Over 180 Days</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-600 rounded-full h-3 mr-2">
                  <div className="bg-red-500 h-3 rounded-full transition-all duration-300" style={{width: '25%'}}></div>
                </div>
                <span className="text-xs font-medium text-white min-w-[50px] text-right">123</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-xs">No Activity Dates</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-600 rounded-full h-3 mr-2">
                  <div className="bg-red-500 h-3 rounded-full transition-all duration-300" style={{width: '25%'}}></div>
                </div>
                <span className="text-xs font-medium text-white min-w-[50px] text-right">123</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Recommendations</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-xs">Remove unused licenses</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-600 rounded-full h-3 mr-2">
                  <div className="bg-blue-500 h-3 rounded-full transition-all duration-300" style={{width: '80%'}}></div>
                </div>
                <span className="text-xs font-medium text-white min-w-[50px] text-right">456</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-xs">Disable inactive accounts</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-600 rounded-full h-3 mr-2">
                  <div className="bg-purple-500 h-3 rounded-full transition-all duration-300" style={{width: '60%'}}></div>
                </div>
                <span className="text-xs font-medium text-white min-w-[50px] text-right">234</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-xs">Review access permissions</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-600 rounded-full h-3 mr-2">
                  <div className="bg-orange-500 h-3 rounded-full transition-all duration-300" style={{width: '40%'}}></div>
                </div>
                <span className="text-xs font-medium text-white min-w-[50px] text-right">89</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">License Summary</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left py-1 px-2 text-xs font-medium text-gray-300 uppercase">skuName</th>
                  <th className="text-right py-1 px-2 text-xs font-medium text-gray-300 uppercase">Count</th>
                  <th className="text-right py-1 px-2 text-xs font-medium text-gray-300 uppercase">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                <tr className="hover:bg-gray-700 transition-colors">
                  <td className="py-1 px-2 text-xs text-gray-300">App Connect (IW)</td>
                  <td className="py-1 px-2 text-xs text-gray-300 text-right">2</td>
                  <td className="py-1 px-2 text-xs text-gray-300 text-right">0.00</td>
                </tr>
                <tr className="hover:bg-gray-700 transition-colors">
                  <td className="py-1 px-2 text-xs text-gray-300">Business Apps (Free)</td>
                  <td className="py-1 px-2 text-xs text-gray-300 text-right">7</td>
                  <td className="py-1 px-2 text-xs text-gray-300 text-right">0.00</td>
                </tr>
                <tr className="hover:bg-gray-700 transition-colors">
                  <td className="py-1 px-2 text-xs text-gray-300">Dynamics 365 BC (IW)</td>
                  <td className="py-1 px-2 text-xs text-gray-300 text-right">4</td>
                  <td className="py-1 px-2 text-xs text-gray-300 text-right">0.00</td>
                </tr>
                <tr className="hover:bg-gray-700 transition-colors">
                  <td className="py-1 px-2 text-xs text-gray-300">D365 Commerce (Trial)</td>
                  <td className="py-1 px-2 text-xs text-gray-300 text-right">1</td>
                  <td className="py-1 px-2 text-xs text-gray-300 text-right">0.00</td>
                </tr>
                <tr className="hover:bg-gray-700 transition-colors">
                  <td className="py-1 px-2 text-xs text-gray-300">D365 Sales Enterprise</td>
                  <td className="py-1 px-2 text-xs text-gray-300 text-right">1,498</td>
                  <td className="py-1 px-2 text-xs text-gray-300 text-right">157,290</td>
                </tr>
                <tr className="hover:bg-gray-700 transition-colors">
                  <td className="py-1 px-2 text-xs text-gray-300">D365 Talent (Trial)</td>
                  <td className="py-1 px-2 text-xs text-gray-300 text-right">2</td>
                  <td className="py-1 px-2 text-xs text-gray-300 text-right">0.00</td>
                </tr>
              </tbody>
              <tfoot className="border-t border-gray-600">
                <tr className="font-semibold">
                  <td className="py-2 px-2 text-xs text-white">Totaal</td>
                  <td className="py-2 px-2 text-xs text-white text-right">130,416</td>
                  <td className="py-2 px-2 text-xs text-white text-right">534,448</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetailsNoSKUTab;
