import { Key, Users, BarChart, TrendingUp } from 'lucide-react';

// Teams Standard 配置
export const teamsStandardConfig = {
  summaryCards: [
    {
      title: 'Assigned Teams Standard Capable Licenses',
      value: '80',
      icon: Key,
      iconColor: 'text-blue-500'
    },
    {
      title: 'Teams Standard Capable Users',
      value: '64',
      icon: Users,
      iconColor: 'text-green-500'
    },
    {
      title: 'Teams Standard App Users',
      value: '102',
      icon: BarChart,
      iconColor: 'text-yellow-500'
    },
    {
      title: 'Teams Standard User Utilisation',
      value: '159.4%',
      icon: TrendingUp,
      iconColor: 'text-purple-500'
    }
  ],

  appUsageTitle: 'Teams Standard App Usage',
  licenseTitle: 'Assigned Teams Standard Capable Licenses to App Users',

  appUsageData: [
    { app: 'Microsoft Teams Standard', count: 70 },
    { app: 'Teams Standard Service', count: 60 },
    { app: 'Teams Standard Data Refresh', count: 25 },
    { app: 'Teams Standard Desktop', count: 18 },
    { app: 'SLIM Teams Standard', count: 16 },
    { app: 'Teams Standard Community - Prod', count: 3 },
    { app: 'Teams Standard PowerShell', count: 2 }
  ],

  licenseData: [
    { license: 'Teams Standard Pro', count: 41 },
    { license: 'Teams Standard (Free)', count: 35 }
  ],

  userSummaryTitle: 'Teams Standard App Summary Usage by User',
  appDetailTitle: 'Teams Standard App Summary Detail',

  userFilterPlaceholder: 'ALL TEAMS STANDARD USER',
  userSearchPlaceholder: '搜索 Teams Standard User',

  userSummaryColumns: {
    user: 'User using Teams Standard Apps (Auth to Teams Standard)',
    userCount: '# User',
    licenseNeeds: 'License Needs',
    appCount: 'App Count',
    lastSignin: 'Last App signin (Days)'
  },

  appDetailColumns: {
    user: 'User using Teams Standard Apps (Auth to Teams Standard)',
    userCount: '# User',
    lastSigninDays: 'Last App sign in Days Ago',
    app: 'App',
    licenseCount: 'Teams Standard User Assigned License count',
    licenseCountKey: 'teamsStandardUserAssigned'
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
    { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', userCount: 1, lastSigninDays: 1, app: 'Microsoft Teams Standard', teamsStandardUserAssigned: 2 },
    { userId: '193a88f139039254246c6b2472aff5c059c693b4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Teams Standard', teamsStandardUserAssigned: 1 },
    { userId: '1a1ac37c6620f4961559b46f427092428796437', userCount: 1, lastSigninDays: 1, app: 'Microsoft Teams Standard', teamsStandardUserAssigned: 2 },
    { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', userCount: 1, lastSigninDays: 1, app: 'Microsoft Teams Standard', teamsStandardUserAssigned: 2 },
    { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', userCount: 1, lastSigninDays: 1, app: 'Microsoft Teams Standard', teamsStandardUserAssigned: 1 },
    { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Teams Standard', teamsStandardUserAssigned: 1 }
  ],

  appOptions: [
    { value: 'Microsoft Teams Standard', label: 'Microsoft Teams Standard' }
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

// Teams Premium 配置
export const teamsPremiumConfig = {
  summaryCards: [
    {
      title: 'Assigned Teams Premium Capable Licenses',
      value: '80',
      icon: Key,
      iconColor: 'text-blue-500'
    },
    {
      title: 'Teams Premium Capable Users',
      value: '64',
      icon: Users,
      iconColor: 'text-green-500'
    },
    {
      title: 'Teams Premium App Users',
      value: '102',
      icon: BarChart,
      iconColor: 'text-yellow-500'
    },
    {
      title: 'Teams Premium User Utilisation',
      value: '159.4%',
      icon: TrendingUp,
      iconColor: 'text-purple-500'
    }
  ],

  appUsageTitle: 'Teams Premium App Usage',
  licenseTitle: 'Assigned Teams Premium Capable Licenses to App Users',

  appUsageData: [
    { app: 'Microsoft Teams Premium', count: 70 },
    { app: 'Teams Premium Service', count: 60 },
    { app: 'Teams Premium Data Refresh', count: 25 },
    { app: 'Teams Premium Desktop', count: 18 },
    { app: 'SLIM Teams Premium', count: 16 },
    { app: 'Teams Premium Community - Prod', count: 3 },
    { app: 'Teams Premium PowerShell', count: 2 }
  ],

  licenseData: [
    { license: 'Teams Premium Pro', count: 41 },
    { license: 'Teams Premium (Free)', count: 35 }
  ],

  userSummaryTitle: 'Teams Premium App Summary Usage by User',
  appDetailTitle: 'Teams Premium App Summary Detail',

  userFilterPlaceholder: 'ALL TEAMS PREMIUM USER',
  userSearchPlaceholder: '搜索 Teams Premium User',

  userSummaryColumns: {
    user: 'User using Teams Premium Apps (Auth to Teams Premium)',
    userCount: '# User',
    licenseNeeds: 'License Needs',
    appCount: 'App Count',
    lastSignin: 'Last App signin (Days)'
  },

  appDetailColumns: {
    user: 'User using Teams Premium Apps (Auth to Teams Premium)',
    userCount: '# User',
    lastSigninDays: 'Last App sign in Days Ago',
    app: 'App',
    licenseCount: 'Teams Premium User Assigned License count',
    licenseCountKey: 'teamsPremiumUserAssigned'
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
    { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', userCount: 1, lastSigninDays: 1, app: 'Microsoft Teams Premium', teamsPremiumUserAssigned: 2 },
    { userId: '193a88f139039254246c6b2472aff5c059c693b4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Teams Premium', teamsPremiumUserAssigned: 1 },
    { userId: '1a1ac37c6620f4961559b46f427092428796437', userCount: 1, lastSigninDays: 1, app: 'Microsoft Teams Premium', teamsPremiumUserAssigned: 2 },
    { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', userCount: 1, lastSigninDays: 1, app: 'Microsoft Teams Premium', teamsPremiumUserAssigned: 2 },
    { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', userCount: 1, lastSigninDays: 1, app: 'Microsoft Teams Premium', teamsPremiumUserAssigned: 1 },
    { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Teams Premium', teamsPremiumUserAssigned: 1 }
  ],

  appOptions: [
    { value: 'Microsoft Teams Premium', label: 'Microsoft Teams Premium' }
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