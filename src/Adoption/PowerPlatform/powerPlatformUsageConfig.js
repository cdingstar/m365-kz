import { Key, Users, BarChart, TrendingUp } from 'lucide-react';

// Power BI 配置
export const powerBiConfig = {
  summaryCards: [
    {
      title: 'Assigned Power BI Capable Licenses',
      value: '80',
      icon: Key,
      iconColor: 'text-blue-500'
    },
    {
      title: 'Power BI Capable Users',
      value: '64',
      icon: Users,
      iconColor: 'text-green-500'
    },
    {
      title: 'Power BI App Users',
      value: '102',
      icon: BarChart,
      iconColor: 'text-yellow-500'
    },
    {
      title: 'Power BI User Utilisation',
      value: '159.4%',
      icon: TrendingUp,
      iconColor: 'text-purple-500'
    }
  ],

  appUsageTitle: 'Power BI App Usage',
  licenseTitle: 'Assigned Power BI Capable Licenses to App Users',

  appUsageData: [
    { app: 'Microsoft Power BI', count: 70 },
    { app: 'Power BI Service', count: 60 },
    { app: 'Power BI Data Refresh', count: 25 },
    { app: 'Power BI Desktop', count: 18 },
    { app: 'SLIM Power BI', count: 16 },
    { app: 'Power BI Community - Prod', count: 3 },
    { app: 'Power BI PowerShell', count: 2 }
  ],

  licenseData: [
    { license: 'Power BI Pro', count: 41 },
    { license: 'Power BI (Free)', count: 35 }
  ],

  userSummaryTitle: 'Power BI App Summary Usage by User',
  appDetailTitle: 'Power BI App Summary Detail',

  userFilterPlaceholder: 'ALL POWER BI USER',
  userSearchPlaceholder: '搜索 Power BI User',

  userSummaryColumns: {
    user: 'User using Power BI Apps (Auth to Power BI)',
    userCount: '# User',
    licenseNeeds: 'License Needs',
    appCount: 'App Count',
    lastSignin: 'Last App signin (Days)'
  },

  appDetailColumns: {
    user: 'User using Power BI Apps (Auth to Power BI)',
    userCount: '# User',
    lastSigninDays: 'Last App sign in Days Ago',
    app: 'App',
    licenseCount: 'PBI User Assigned License count',
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
    { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power BI', pbiUserAssigned: 2 },
    { userId: '193a88f139039254246c6b2472aff5c059c693b4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power BI', pbiUserAssigned: 1 },
    { userId: '1a1ac37c6620f4961559b46f427092428796437', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power BI', pbiUserAssigned: 2 },
    { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power BI', pbiUserAssigned: 2 },
    { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power BI', pbiUserAssigned: 1 },
    { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power BI', pbiUserAssigned: 1 }
  ],

  appOptions: [
    { value: 'Microsoft Power BI', label: 'Microsoft Power BI' }
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

// Power Apps 配置
export const powerAppsConfig = {
  summaryCards: [
    {
      title: 'Assigned Power Apps Capable Licenses',
      value: '80',
      icon: Key,
      iconColor: 'text-blue-500'
    },
    {
      title: 'Power Apps Capable Users',
      value: '64',
      icon: Users,
      iconColor: 'text-green-500'
    },
    {
      title: 'Power Apps App Users',
      value: '102',
      icon: BarChart,
      iconColor: 'text-yellow-500'
    },
    {
      title: 'Power Apps User Utilisation',
      value: '159.4%',
      icon: TrendingUp,
      iconColor: 'text-purple-500'
    }
  ],

  appUsageTitle: 'Power Apps App Usage',
  licenseTitle: 'Assigned Power Apps Capable Licenses to App Users',

  appUsageData: [
    { app: 'Microsoft Power Apps', count: 70 },
    { app: 'Power Apps Service', count: 60 },
    { app: 'Power Apps Data Refresh', count: 25 },
    { app: 'Power Apps Desktop', count: 18 },
    { app: 'SLIM Power Apps', count: 16 },
    { app: 'Power Apps Community - Prod', count: 3 },
    { app: 'Power Apps PowerShell', count: 2 }
  ],

  licenseData: [
    { license: 'Power Apps Pro', count: 41 },
    { license: 'Power Apps (Free)', count: 35 }
  ],

  userSummaryTitle: 'Power Apps App Summary Usage by User',
  appDetailTitle: 'Power Apps App Summary Detail',

  userFilterPlaceholder: 'ALL POWER APPS USER',
  userSearchPlaceholder: '搜索 Power Apps User',

  userSummaryColumns: {
    user: 'User using Power Apps Apps (Auth to Power Apps)',
    userCount: '# User',
    licenseNeeds: 'License Needs',
    appCount: 'App Count',
    lastSignin: 'Last App signin (Days)'
  },

  appDetailColumns: {
    user: 'User using Power Apps Apps (Auth to Power Apps)',
    userCount: '# User',
    lastSigninDays: 'Last App sign in Days Ago',
    app: 'App',
    licenseCount: 'Power Apps User Assigned License count',
    licenseCountKey: 'powerAppsUserAssigned'
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
    { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power Apps', powerAppsUserAssigned: 2 },
    { userId: '193a88f139039254246c6b2472aff5c059c693b4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power Apps', powerAppsUserAssigned: 1 },
    { userId: '1a1ac37c6620f4961559b46f427092428796437', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power Apps', powerAppsUserAssigned: 2 },
    { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power Apps', powerAppsUserAssigned: 2 },
    { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power Apps', powerAppsUserAssigned: 1 },
    { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power Apps', powerAppsUserAssigned: 1 }
  ],

  appOptions: [
    { value: 'Microsoft Power Apps', label: 'Microsoft Power Apps' }
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

// Power Automate 配置
export const powerAutomateConfig = {
  summaryCards: [
    {
      title: 'Assigned Power Automate Capable Licenses',
      value: '80',
      icon: Key,
      iconColor: 'text-blue-500'
    },
    {
      title: 'Power Automate Capable Users',
      value: '64',
      icon: Users,
      iconColor: 'text-green-500'
    },
    {
      title: 'Power Automate App Users',
      value: '102',
      icon: BarChart,
      iconColor: 'text-yellow-500'
    },
    {
      title: 'Power Automate User Utilisation',
      value: '159.4%',
      icon: TrendingUp,
      iconColor: 'text-purple-500'
    }
  ],

  appUsageTitle: 'Power Automate App Usage',
  licenseTitle: 'Assigned Power Automate Capable Licenses to App Users',

  appUsageData: [
    { app: 'Microsoft Power Automate', count: 70 },
    { app: 'Power Automate Service', count: 60 },
    { app: 'Power Automate Data Refresh', count: 25 },
    { app: 'Power Automate Desktop', count: 18 },
    { app: 'SLIM Power Automate', count: 16 },
    { app: 'Power Automate Community - Prod', count: 3 },
    { app: 'Power Automate PowerShell', count: 2 }
  ],

  licenseData: [
    { license: 'Power Automate Pro', count: 41 },
    { license: 'Power Automate (Free)', count: 35 }
  ],

  userSummaryTitle: 'Power Automate App Summary Usage by User',
  appDetailTitle: 'Power Automate App Summary Detail',

  userFilterPlaceholder: 'ALL POWER AUTOMATE USER',
  userSearchPlaceholder: '搜索 Power Automate User',

  userSummaryColumns: {
    user: 'User using Power Automate Apps (Auth to Power Automate)',
    userCount: '# User',
    licenseNeeds: 'License Needs',
    appCount: 'App Count',
    lastSignin: 'Last App signin (Days)'
  },

  appDetailColumns: {
    user: 'User using Power Automate Apps (Auth to Power Automate)',
    userCount: '# User',
    lastSigninDays: 'Last App sign in Days Ago',
    app: 'App',
    licenseCount: 'Power Automate User Assigned License count',
    licenseCountKey: 'powerAutomateUserAssigned'
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
    { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power Automate', powerAutomateUserAssigned: 2 },
    { userId: '193a88f139039254246c6b2472aff5c059c693b4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power Automate', powerAutomateUserAssigned: 1 },
    { userId: '1a1ac37c6620f4961559b46f427092428796437', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power Automate', powerAutomateUserAssigned: 2 },
    { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power Automate', powerAutomateUserAssigned: 2 },
    { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power Automate', powerAutomateUserAssigned: 1 },
    { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Power Automate', powerAutomateUserAssigned: 1 }
  ],

  appOptions: [
    { value: 'Microsoft Power Automate', label: 'Microsoft Power Automate' }
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