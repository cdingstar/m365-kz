import React from 'react';
import ActiveInactiveAccountsTab from './ActiveInactiveAccountsTab';
import { registerTabs } from '../../TabRegistry';

// 定义该组件的标签页
const TABS = ['Active Inactive Accounts'];

// 注册标签页
registerTabs('Optimize/Accounts', TABS);

const AccountsContent = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* 标签内容 */}
      <div className="w-full">
        <ActiveInactiveAccountsTab />
      </div>
    </div>
  );
};

export default AccountsContent;