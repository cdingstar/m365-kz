import { Key, Users, BarChart, TrendingUp, Folder, Target } from 'lucide-react';

// Project Plan 1 配置
export const projectPlan1Config = {
  summaryCards: [
    {
      title: 'Assigned Project Plan 1 Capable Licenses',
      value: '80',
      icon: Key,
      iconColor: 'text-blue-500'
    },
    {
      title: 'Project Plan 1 Capable Users',
      value: '64',
      icon: Users,
      iconColor: 'text-green-500'
    },
    {
      title: 'Project Plan 1 App Users',
      value: '102',
      icon: BarChart,
      iconColor: 'text-yellow-500'
    },
    {
      title: 'Project Plan 1 User Utilisation',
      value: '159.4%',
      icon: TrendingUp,
      iconColor: 'text-purple-500'
    }
  ],

  appUsageTitle: 'Project Plan 1 App Usage',
  licenseTitle: 'Assigned Project Plan 1 Capable Licenses to App Users',

  appUsageData: [
    { app: 'Microsoft Project Plan 1', count: 70 },
    { app: 'Project Plan 1 Service', count: 60 },
    { app: 'Project Plan 1 Data Refresh', count: 25 },
    { app: 'Project Plan 1 Desktop', count: 18 },
    { app: 'SLIM Project Plan 1', count: 16 },
    { app: 'Project Plan 1 Community - Prod', count: 3 },
    { app: 'Project Plan 1 PowerShell', count: 2 }
  ],

  licenseData: [
    { license: 'Project Plan 1 Pro', count: 41 },
    { license: 'Project Plan 1 (Free)', count: 35 }
  ],

  userSummaryTitle: 'Project Plan 1 App Summary Usage by User',
  appDetailTitle: 'Project Plan 1 App Summary Detail',

  userFilterPlaceholder: 'ALL PROJECT PLAN 1 USER',
  userSearchPlaceholder: '搜索 Project Plan 1 User',

  userSummaryColumns: {
    user: 'User using Project Plan 1 Apps (Auth to Project Plan 1)',
    userCount: '# User',
    licenseNeeds: 'License Needs',
    appCount: 'App Count',
    lastSignin: 'Last App signin (Days)'
  },

  appDetailColumns: {
    user: 'User using Project Plan 1 Apps (Auth to Project Plan 1)',
    userCount: '# User',
    lastSigninDays: 'Last App sign in Days Ago',
    app: 'App',
    licenseCount: 'Project Plan 1 User Assigned License count',
    licenseCountKey: 'pbiUserAssigned'
  },

  userSummaryData: [
    { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', userCount: 1, licenseNeeds: 'Plan1', appCount: 5, lastSignin: 1 },
    { userId: '193a88f139039254246c6b2472aff5c059c693b4', userCount: 1, licenseNeeds: 'Plan2', appCount: 2, lastSignin: 1 },
    { userId: '1a1ac37c6620f4961559b46f427092428796437', userCount: 1, licenseNeeds: 'Plan3', appCount: 4, lastSignin: 1 },
    { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', userCount: 1, licenseNeeds: 'Plan1', appCount: 5, lastSignin: 1 },
    { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', userCount: 1, licenseNeeds: 'Plan2', appCount: 1, lastSignin: 1 },
    { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', userCount: 1, licenseNeeds: 'Plan3', appCount: 2, lastSignin: 1 },
    { userId: 'b0ca73216498c61b1c2c3019458cd3f8cd5c6c4', userCount: 1, licenseNeeds: 'Plan1', appCount: 2, lastSignin: 1 },
    { userId: 'bb9c38772dbcf13977451da3db554d9654140456', userCount: 1, licenseNeeds: 'Plan2', appCount: 4, lastSignin: 1 },
    { userId: 'cb6130545d2a92a46f75c0431af1e4bcc58bc7f', userCount: 1, licenseNeeds: 'Plan3', appCount: 2, lastSignin: 1 },
    { userId: 'cfa5becfc38b34ac57821c2bc78337c6019c28a', userCount: 1, licenseNeeds: 'Plan1', appCount: 4, lastSignin: 1 },
    { userId: 'd0f497cb3f8db082dc66c8638c3f68bb00ba239', userCount: 1, licenseNeeds: 'Plan2', appCount: 4, lastSignin: 1 }
  ],

  appDetailData: [
    { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 1', pbiUserAssigned: 2 },
    { userId: '193a88f139039254246c6b2472aff5c059c693b4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 1', pbiUserAssigned: 1 },
    { userId: '1a1ac37c6620f4961559b46f427092428796437', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 1', pbiUserAssigned: 2 },
    { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 1', pbiUserAssigned: 2 },
    { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 1', pbiUserAssigned: 1 },
    { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 1', pbiUserAssigned: 1 }
  ],

  appOptions: [
    { value: 'Microsoft Project Plan 1', label: 'Microsoft Project Plan 1' }
  ],

  userSummaryTotals: {
    userCount: 83,
    appCount: 194
  },
  appDetailTotals: {
    userCount: 83,
    licenseCount: 73
  }
};

// Project Plan 3 配置
export const projectPlan3Config = {
  summaryCards: [
    {
      title: 'Assigned Project Plan 3 Capable Licenses',
      value: '80',
      icon: Key,
      iconColor: 'text-blue-500'
    },
    {
      title: 'Project Plan 3 Capable Users',
      value: '64',
      icon: Users,
      iconColor: 'text-green-500'
    },
    {
      title: 'Project Plan 3 App Users',
      value: '102',
      icon: BarChart,
      iconColor: 'text-yellow-500'
    },
    {
      title: 'Project Plan 3 User Utilisation',
      value: '159.4%',
      icon: TrendingUp,
      iconColor: 'text-purple-500'
    }
  ],

  appUsageTitle: 'Project Plan 3 App Usage',
  licenseTitle: 'Assigned Project Plan 3 Capable Licenses to App Users',

  appUsageData: [
    { app: 'Microsoft Project Plan 3', count: 70 },
    { app: 'Project Plan 3 Service', count: 60 },
    { app: 'Project Plan 3 Data Refresh', count: 25 },
    { app: 'Project Plan 3 Desktop', count: 18 },
    { app: 'SLIM Project Plan 3', count: 16 },
    { app: 'Project Plan 3 Community - Prod', count: 3 },
    { app: 'Project Plan 3 PowerShell', count: 2 }
  ],

  licenseData: [
    { license: 'Project Plan 3 Pro', count: 41 },
    { license: 'Project Plan 3 (Free)', count: 35 }
  ],

  userSummaryTitle: 'Project Plan 3 App Summary Usage by User',
  appDetailTitle: 'Project Plan 3 App Summary Detail',

  userFilterPlaceholder: 'ALL PROJECT PLAN 3 USER',
  userSearchPlaceholder: '搜索 Project Plan 3 User',

  userSummaryColumns: {
    user: 'User using Project Plan 3 Apps (Auth to Project Plan 3)',
    userCount: '# User',
    licenseNeeds: 'License Needs',
    appCount: 'App Count',
    lastSignin: 'Last App signin (Days)'
  },

  appDetailColumns: {
    user: 'User using Project Plan 3 Apps (Auth to Project Plan 3)',
    userCount: '# User',
    lastSigninDays: 'Last App sign in Days Ago',
    app: 'App',
    licenseCount: 'Project Plan 3 User Assigned License count',
    licenseCountKey: 'pbiUserAssigned'
  },

  userSummaryData: [
    { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', userCount: 1, licenseNeeds: 'Plan1', appCount: 5, lastSignin: 1 },
    { userId: '193a88f139039254246c6b2472aff5c059c693b4', userCount: 1, licenseNeeds: 'Plan2', appCount: 2, lastSignin: 1 },
    { userId: '1a1ac37c6620f4961559b46f427092428796437', userCount: 1, licenseNeeds: 'Plan3', appCount: 4, lastSignin: 1 },
    { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', userCount: 1, licenseNeeds: 'Plan1', appCount: 5, lastSignin: 1 },
    { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', userCount: 1, licenseNeeds: 'Plan2', appCount: 1, lastSignin: 1 },
    { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', userCount: 1, licenseNeeds: 'Plan3', appCount: 2, lastSignin: 1 },
    { userId: 'b0ca73216498c61b1c2c3019458cd3f8cd5c6c4', userCount: 1, licenseNeeds: 'Plan1', appCount: 2, lastSignin: 1 },
    { userId: 'bb9c38772dbcf13977451da3db554d9654140456', userCount: 1, licenseNeeds: 'Plan2', appCount: 4, lastSignin: 1 },
    { userId: 'cb6130545d2a92a46f75c0431af1e4bcc58bc7f', userCount: 1, licenseNeeds: 'Plan3', appCount: 2, lastSignin: 1 },
    { userId: 'cfa5becfc38b34ac57821c2bc78337c6019c28a', userCount: 1, licenseNeeds: 'Plan1', appCount: 4, lastSignin: 1 },
    { userId: 'd0f497cb3f8db082dc66c8638c3f68bb00ba239', userCount: 1, licenseNeeds: 'Plan2', appCount: 4, lastSignin: 1 }
  ],

  appDetailData: [
    { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 3', pbiUserAssigned: 2 },
    { userId: '193a88f139039254246c6b2472aff5c059c693b4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 3', pbiUserAssigned: 1 },
    { userId: '1a1ac37c6620f4961559b46f427092428796437', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 3', pbiUserAssigned: 2 },
    { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 3', pbiUserAssigned: 2 },
    { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 3', pbiUserAssigned: 1 },
    { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 3', pbiUserAssigned: 1 }
  ],

  appOptions: [
    { value: 'Microsoft Project Plan 3', label: 'Microsoft Project Plan 3' }
  ],

  userSummaryTotals: {
    userCount: 83,
    appCount: 194
  },
  appDetailTotals: {
    userCount: 83,
    licenseCount: 73
  }
};

// Project Plan 5 配置
export const projectPlan5Config = {
  summaryCards: [
    {
      title: 'Assigned Project Plan 5 Capable Licenses',
      value: '45',
      icon: Key,
      iconColor: 'text-blue-500'
    },
    {
      title: 'Project Plan 5 Capable Users',
      value: '34',
      icon: Users,
      iconColor: 'text-green-500'
    },
    {
      title: 'Project Plan 5 App Users',
      value: '29',
      icon: BarChart,
      iconColor: 'text-yellow-500'
    },
    {
      title: 'Project Plan 5 User Utilisation',
      value: '85.3%',
      icon: TrendingUp,
      iconColor: 'text-purple-500'
    }
  ],

  appUsageTitle: 'Project Plan 5 App Usage',
  licenseTitle: 'Assigned Project Plan 5 Capable Licenses to App Users',

  appUsageData: [
    { app: 'Microsoft Project Plan 5', count: 29 },
    { app: 'Project Plan 5 Service', count: 25 },
    { app: 'Project Plan 5 Portfolio Management', count: 18 },
    { app: 'Project Plan 5 Desktop', count: 15 },
    { app: 'Project Plan 5 Resource Management', count: 12 },
    { app: 'Project Plan 5 Enterprise Reporting', count: 8 },
    { app: 'Project Plan 5 PowerShell', count: 5 }
  ],

  licenseData: [
    { license: 'Project Plan 5 Pro', count: 29 },
    { license: 'Project Plan 5 (Enterprise)', count: 16 }
  ],

  userSummaryTitle: 'Project Plan 5 App Summary Usage by User',
  appDetailTitle: 'Project Plan 5 App Summary Detail',

  userFilterPlaceholder: 'ALL PROJECT PLAN 5 USER',
  userSearchPlaceholder: '搜索 Project Plan 5 User',

  userSummaryColumns: {
    user: 'User using Project Plan 5 Apps (Auth to Project Plan 5)',
    userCount: '# User',
    licenseNeeds: 'License Needs',
    appCount: 'App Count',
    lastSignin: 'Last App signin (Days)'
  },

  appDetailColumns: {
    user: 'User using Project Plan 5 Apps (Auth to Project Plan 5)',
    userCount: '# User',
    lastSigninDays: 'Last App sign in Days Ago',
    app: 'App',
    licenseCount: 'Project Plan 5 User Assigned License count',
    licenseCountKey: 'pbiUserAssigned'
  },

  userSummaryData: [
    { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', userCount: 1, licenseNeeds: 'Plan5', appCount: 7, lastSignin: 1 },
    { userId: '193a88f139039254246c6b2472aff5c059c693b4', userCount: 1, licenseNeeds: 'Plan5', appCount: 5, lastSignin: 2 },
    { userId: '1a1ac37c6620f4961559b46f427092428796437', userCount: 1, licenseNeeds: 'Plan5', appCount: 6, lastSignin: 1 },
    { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', userCount: 1, licenseNeeds: 'Plan5', appCount: 4, lastSignin: 3 },
    { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', userCount: 1, licenseNeeds: 'Plan5', appCount: 3, lastSignin: 1 },
    { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', userCount: 1, licenseNeeds: 'Plan5', appCount: 5, lastSignin: 2 },
    { userId: 'b0ca73216498c61b1c2c3019458cd3f8cd5c6c4', userCount: 1, licenseNeeds: 'Plan5', appCount: 4, lastSignin: 1 },
    { userId: 'bb9c38772dbcf13977451da3db554d9654140456', userCount: 1, licenseNeeds: 'Plan5', appCount: 6, lastSignin: 2 },
    { userId: 'cb6130545d2a92a46f75c0431af1e4bcc58bc7f', userCount: 1, licenseNeeds: 'Plan5', appCount: 3, lastSignin: 1 },
    { userId: 'cfa5becfc38b34ac57821c2bc78337c6019c28a', userCount: 1, licenseNeeds: 'Plan5', appCount: 5, lastSignin: 3 },
    { userId: 'd0f497cb3f8db082dc66c8638c3f68bb00ba239', userCount: 1, licenseNeeds: 'Plan5', appCount: 4, lastSignin: 2 }
  ],

  appDetailData: [
    { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 5', pbiUserAssigned: 3 },
    { userId: '193a88f139039254246c6b2472aff5c059c693b4', userCount: 1, lastSigninDays: 2, app: 'Microsoft Project Plan 5', pbiUserAssigned: 2 },
    { userId: '1a1ac37c6620f4961559b46f427092428796437', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 5', pbiUserAssigned: 3 },
    { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', userCount: 1, lastSigninDays: 3, app: 'Microsoft Project Plan 5', pbiUserAssigned: 2 },
    { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 5', pbiUserAssigned: 1 },
    { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', userCount: 1, lastSigninDays: 2, app: 'Microsoft Project Plan 5', pbiUserAssigned: 2 }
  ],

  appOptions: [
    { value: 'Microsoft Project Plan 5', label: 'Microsoft Project Plan 5' }
  ],

  userSummaryTotals: {
    userCount: 29,
    appCount: 147
  },
  appDetailTotals: {
    userCount: 29,
    licenseCount: 45
  }
};