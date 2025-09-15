import { Key, Users, BarChart, TrendingUp } from 'lucide-react';

// Visio Plan 1 配置
export const visioPlan1Config = {
  summaryCards: [
    {
      title: 'Assigned Visio Plan 1 Capable Licenses',
      value: '80',
      icon: Key,
      iconColor: 'text-blue-500'
    },
    {
      title: 'Visio Plan 1 Capable Users',
      value: '64',
      icon: Users,
      iconColor: 'text-green-500'
    },
    {
      title: 'Visio Plan 1 App Users',
      value: '102',
      icon: BarChart,
      iconColor: 'text-yellow-500'
    },
    {
      title: 'Visio Plan 1 User Utilisation',
      value: '159.4%',
      icon: TrendingUp,
      iconColor: 'text-purple-500'
    }
  ],

  appUsageTitle: 'Visio Plan 1 App Usage',
  licenseTitle: 'Assigned Visio Plan 1 Capable Licenses to App Users',

  appUsageData: [
    { app: 'Microsoft Visio Plan 1', count: 70 },
    { app: 'Visio Plan 1 Service', count: 60 },
    { app: 'Visio Plan 1 Data Refresh', count: 25 },
    { app: 'Visio Plan 1 Desktop', count: 18 },
    { app: 'SLIM Visio Plan 1', count: 16 },
    { app: 'Visio Plan 1 Community - Prod', count: 3 },
    { app: 'Visio Plan 1 PowerShell', count: 2 }
  ],

  licenseData: [
    { license: 'Visio Plan 1 Pro', count: 41 },
    { license: 'Visio Plan 1 (Free)', count: 35 }
  ],

  userSummaryTitle: 'Visio Plan 1 App Summary Usage by User',
  appDetailTitle: 'Visio Plan 1 App Summary Detail',

  userFilterPlaceholder: 'ALL VISIO PLAN 1 USER',
  userSearchPlaceholder: '搜索 Visio Plan 1 User',

  userSummaryColumns: {
    user: 'User using Visio Plan 1 Apps (Auth to Visio Plan 1)',
    userCount: '# User',
    licenseNeeds: 'License Needs',
    appCount: 'App Count',
    lastSignin: 'Last App signin (Days)'
  },

  appDetailColumns: {
    user: 'User using Visio Plan 1 Apps (Auth to Visio Plan 1)',
    userCount: '# User',
    lastSigninDays: 'Last App sign in Days Ago',
    app: 'App',
    licenseCount: 'Visio Plan 1 User Assigned License count',
    licenseCountKey: 'visioPlan1UserAssigned'
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
    { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', userCount: 1, lastSigninDays: 1, app: 'Microsoft Visio Plan 1', visioPlan1UserAssigned: 2 },
    { userId: '193a88f139039254246c6b2472aff5c059c693b4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Visio Plan 1', visioPlan1UserAssigned: 1 },
    { userId: '1a1ac37c6620f4961559b46f427092428796437', userCount: 1, lastSigninDays: 1, app: 'Microsoft Visio Plan 1', visioPlan1UserAssigned: 2 },
    { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', userCount: 1, lastSigninDays: 1, app: 'Microsoft Visio Plan 1', visioPlan1UserAssigned: 2 },
    { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', userCount: 1, lastSigninDays: 1, app: 'Microsoft Visio Plan 1', visioPlan1UserAssigned: 1 },
    { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Visio Plan 1', visioPlan1UserAssigned: 1 }
  ],

  appOptions: [
    { value: 'Microsoft Visio Plan 1', label: 'Microsoft Visio Plan 1' }
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

// Visio Plan 2 配置
export const visioPlan2Config = {
  summaryCards: [
    {
      title: 'Assigned Visio Plan 2 Capable Licenses',
      value: '80',
      icon: Key,
      iconColor: 'text-blue-500'
    },
    {
      title: 'Visio Plan 2 Capable Users',
      value: '64',
      icon: Users,
      iconColor: 'text-green-500'
    },
    {
      title: 'Visio Plan 2 App Users',
      value: '102',
      icon: BarChart,
      iconColor: 'text-yellow-500'
    },
    {
      title: 'Visio Plan 2 User Utilisation',
      value: '159.4%',
      icon: TrendingUp,
      iconColor: 'text-purple-500'
    }
  ],

  appUsageTitle: 'Visio Plan 2 App Usage',
  licenseTitle: 'Assigned Visio Plan 2 Capable Licenses to App Users',

  appUsageData: [
    { app: 'Microsoft Visio Plan 2', count: 70 },
    { app: 'Visio Plan 2 Service', count: 60 },
    { app: 'Visio Plan 2 Data Refresh', count: 25 },
    { app: 'Visio Plan 2 Desktop', count: 18 },
    { app: 'SLIM Visio Plan 2', count: 16 },
    { app: 'Visio Plan 2 Community - Prod', count: 3 },
    { app: 'Visio Plan 2 PowerShell', count: 2 }
  ],

  licenseData: [
    { license: 'Visio Plan 2 Pro', count: 41 },
    { license: 'Visio Plan 2 (Free)', count: 35 }
  ],

  userSummaryTitle: 'Visio Plan 2 App Summary Usage by User',
  appDetailTitle: 'Visio Plan 2 App Summary Detail',

  userFilterPlaceholder: 'ALL VISIO PLAN 2 USER',
  userSearchPlaceholder: '搜索 Visio Plan 2 User',

  userSummaryColumns: {
    user: 'User using Visio Plan 2 Apps (Auth to Visio Plan 2)',
    userCount: '# User',
    licenseNeeds: 'License Needs',
    appCount: 'App Count',
    lastSignin: 'Last App signin (Days)'
  },

  appDetailColumns: {
    user: 'User using Visio Plan 2 Apps (Auth to Visio Plan 2)',
    userCount: '# User',
    lastSigninDays: 'Last App sign in Days Ago',
    app: 'App',
    licenseCount: 'Visio Plan 2 User Assigned License count',
    licenseCountKey: 'visioPlan2UserAssigned'
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
    { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', userCount: 1, lastSigninDays: 1, app: 'Microsoft Visio Plan 2', visioPlan2UserAssigned: 2 },
    { userId: '193a88f139039254246c6b2472aff5c059c693b4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Visio Plan 2', visioPlan2UserAssigned: 1 },
    { userId: '1a1ac37c6620f4961559b46f427092428796437', userCount: 1, lastSigninDays: 1, app: 'Microsoft Visio Plan 2', visioPlan2UserAssigned: 2 },
    { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', userCount: 1, lastSigninDays: 1, app: 'Microsoft Visio Plan 2', visioPlan2UserAssigned: 2 },
    { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', userCount: 1, lastSigninDays: 1, app: 'Microsoft Visio Plan 2', visioPlan2UserAssigned: 1 },
    { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Visio Plan 2', visioPlan2UserAssigned: 1 }
  ],

  appOptions: [
    { value: 'Microsoft Visio Plan 2', label: 'Microsoft Visio Plan 2' }
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