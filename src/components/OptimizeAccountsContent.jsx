import React from 'react';
import AccountDetailsNoSKUTab from './AccountDetailsNoSKUTab';
import AccountDetailsWithSKUTab from './AccountDetailsWithSKUTab';

const OptimizeAccountsContent = ({ activeTab }) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Account Details (no SKU)':
        return <AccountDetailsNoSKUTab />;
      case 'Account Details (with SKU)':
        return <AccountDetailsWithSKUTab />;
      default:
        return <AccountDetailsNoSKUTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* 标签内容 */}
      <div className="w-full">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default OptimizeAccountsContent;