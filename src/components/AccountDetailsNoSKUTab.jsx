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
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500" />
                <span className="text-gray-300 text-xs">All</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500" />
                <span className="text-gray-300 text-xs">Accounts</span>
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
            <select className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-300 text-xs focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
              <option>All</option>
            </select>
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

      <div className="mt-8 grid grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Account Aging Classification</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Active accounts (signed in within 30 days)</span>
              <div className="flex items-center">
                <div className="w-40 bg-gray-600 rounded-full h-4 mr-3">
                  <div className="bg-green-500 h-4 rounded-full transition-all duration-300" style={{width: '75%'}}></div>
                </div>
                <span className="text-sm font-medium text-white min-w-[60px] text-right">1,234</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Inactive accounts (31-90 days)</span>
              <div className="flex items-center">
                <div className="w-40 bg-gray-600 rounded-full h-4 mr-3">
                  <div className="bg-yellow-500 h-4 rounded-full transition-all duration-300" style={{width: '45%'}}></div>
                </div>
                <span className="text-sm font-medium text-white min-w-[60px] text-right">567</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Stale accounts (over 90 days)</span>
              <div className="flex items-center">
                <div className="w-40 bg-gray-600 rounded-full h-4 mr-3">
                  <div className="bg-red-500 h-4 rounded-full transition-all duration-300" style={{width: '25%'}}></div>
                </div>
                <span className="text-sm font-medium text-white min-w-[60px] text-right">123</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Recommendations</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Remove unused licenses</span>
              <div className="flex items-center">
                <div className="w-40 bg-gray-600 rounded-full h-4 mr-3">
                  <div className="bg-blue-500 h-4 rounded-full transition-all duration-300" style={{width: '80%'}}></div>
                </div>
                <span className="text-sm font-medium text-white min-w-[60px] text-right">456</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Disable inactive accounts</span>
              <div className="flex items-center">
                <div className="w-40 bg-gray-600 rounded-full h-4 mr-3">
                  <div className="bg-purple-500 h-4 rounded-full transition-all duration-300" style={{width: '60%'}}></div>
                </div>
                <span className="text-sm font-medium text-white min-w-[60px] text-right">234</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Review access permissions</span>
              <div className="flex items-center">
                <div className="w-40 bg-gray-600 rounded-full h-4 mr-3">
                  <div className="bg-orange-500 h-4 rounded-full transition-all duration-300" style={{width: '40%'}}></div>
                </div>
                <span className="text-sm font-medium text-white min-w-[60px] text-right">89</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetailsNoSKUTab;
