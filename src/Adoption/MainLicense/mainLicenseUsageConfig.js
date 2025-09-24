import { Key, Users, BarChart, TrendingUp, Folder, Target } from 'lucide-react';

// Main License F1 配置
export const mainLicenseF1Config = {
  summaryCards: [
    {
      title: 'Assigned Main License F1 Capable Licenses',
      value: '80',
      icon: Key,
      iconColor: 'text-blue-500'
    },
    {
      title: 'Main License F1 Capable Users',
      value: '64',
      icon: Users,
      iconColor: 'text-green-500'
    },
    {
      title: 'Main License F1 App Users',
      value: '102',
      icon: BarChart,
      iconColor: 'text-purple-500'
    },
    {
      title: 'Main License F1 User Utilisation',
      value: '159.4%',
      icon: TrendingUp,
      iconColor: 'text-orange-500'
    }
  ],

  appUsageData: [
    { app: 'Microsoft Main License F1', count: 70 },
    { app: 'Main License F1 Service', count: 60 },
    { app: 'Main License F1 Data Refresh', count: 25 },
    { app: 'Main License F1 Desktop', count: 18 },
    { app: 'SLIM Main License F1', count: 16 },
    { app: 'Main License F1 Community - Prod', count: 3 },
    { app: 'Main License F1 PowerShell', count: 2 }
  ],

  appUsageTitle: 'Main License F1 App Usage',
  licenseTitle: 'Assigned Main License F1 Capable Licenses to App Users',

  licenseData: [
    { license: 'Main License F1 Pro', count: 41 },
    { license: 'Main License F1 (Free)', count: 35 }
  ],

  userSummaryTitle: 'Main License F1 App Summary Usage by User',
  appDetailTitle: 'Main License F1 App Summary Detail',

  userFilterPlaceholder: 'ALL MAIN LICENSE F1 USER',
  userSearchPlaceholder: '搜索 Main License F1 User',

  userSummaryColumns: {
    user: 'User using Main License F1 Apps (Auth to Main License F1)',
    userCount: '# User',
    licenseNeeds: 'License Needs',
    appCount: 'App Count',
    lastSignin: 'Last App signin (Days)'
  },

  appDetailColumns: {
    user: 'User using Main License F1 Apps (Auth to Main License F1)',
    userCount: '# User',
    lastSigninDays: 'Last App sign in Days Ago',
    app: 'App',
    licenseCount: 'Main License F1 User Assigned License count',
    licenseCountKey: 'mainLicenseF1UserAssigned'
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
    { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', userCount: 1, lastSigninDays: 1, app: 'Microsoft Main License F1', mainLicenseF1UserAssigned: 2 },
    { userId: '193a88f139039254246c6b2472aff5c059c693b4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Main License F1', mainLicenseF1UserAssigned: 1 },
    { userId: '1a1ac37c6620f4961559b46f427092428796437', userCount: 1, lastSigninDays: 1, app: 'Microsoft Main License F1', mainLicenseF1UserAssigned: 2 },
    { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', userCount: 1, lastSigninDays: 1, app: 'Microsoft Main License F1', mainLicenseF1UserAssigned: 2 },
    { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', userCount: 1, lastSigninDays: 1, app: 'Microsoft Main License F1', mainLicenseF1UserAssigned: 1 },
    { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', userCount: 1, lastSigninDays: 1, app: 'Microsoft Main License F1', mainLicenseF1UserAssigned: 1 }
  ],

  appOptions: [
    { value: 'Microsoft Main License F1', label: 'Microsoft Main License F1' }
  ],

  userSummaryTotals: {
    userCount: 11,
    appCount: 35,
    lastSignin: 1
  },
  appDetailTotals: {
    userCount: 11,
    licenseCount: 10
  }
};

// Main License F3 配置
export const mainLicenseF3Config = {
  ...mainLicenseF1Config,
  summaryCards: [
    {
      title: 'Assigned Main License F3 Capable Licenses',
      value: '80',
      icon: Key,
      iconColor: 'text-blue-500'
    },
    {
      title: 'Main License F3 Capable Users',
      value: '64',
      icon: Users,
      iconColor: 'text-green-500'
    },
    {
      title: 'Main License F3 App Users',
      value: '102',
      icon: BarChart,
      iconColor: 'text-purple-500'
    },
    {
      title: 'Main License F3 User Utilisation',
      value: '159.4%',
      icon: TrendingUp,
      iconColor: 'text-orange-500'
    }
  ],
  appUsageData: [
    { app: 'Microsoft Main License F3', count: 70 },
    { app: 'Main License F3 Service', count: 60 },
    { app: 'Main License F3 Data Refresh', count: 25 },
    { app: 'Main License F3 Desktop', count: 18 },
    { app: 'SLIM Main License F3', count: 16 },
    { app: 'Main License F3 Community - Prod', count: 3 },
    { app: 'Main License F3 PowerShell', count: 2 }
  ],
  licenseData: [
    { license: 'Main License F3 Pro', count: 41 },
    { license: 'Main License F3 (Free)', count: 35 }
  ],
  appUsageTitle: 'Main License F3 App Usage',
  licenseTitle: 'Assigned Main License F3 Capable Licenses to App Users',
  userSummaryTitle: 'Main License F3 App Summary Usage by User',
  appDetailTitle: 'Main License F3 App Summary Detail',
  userFilterPlaceholder: 'ALL MAIN LICENSE F3 USER',
  userSearchPlaceholder: '搜索 Main License F3 User',
  userSummaryColumns: {
    user: 'User using Main License F3 Apps (Auth to Main License F3)',
    userCount: '# User',
    licenseNeeds: 'License Needs',
    appCount: 'App Count',
    lastSignin: 'Last App signin (Days)'
  },
  appDetailColumns: {
    user: 'User using Main License F3 Apps (Auth to Main License F3)',
    userCount: '# User',
    lastSigninDays: 'Last App sign in Days Ago',
    app: 'App',
    licenseCount: 'Main License F3 User Assigned License count',
    licenseCountKey: 'mainLicenseF3UserAssigned'
  }
};

// Main License E1 配置
export const mainLicenseE1Config = {
  ...mainLicenseF1Config,
  summaryCards: [
    {
      title: 'Assigned Main License E1 Capable Licenses',
      value: '80',
      icon: Key,
      iconColor: 'text-blue-500'
    },
    {
      title: 'Main License E1 Capable Users',
      value: '64',
      icon: Users,
      iconColor: 'text-green-500'
    },
    {
      title: 'Main License E1 App Users',
      value: '102',
      icon: BarChart,
      iconColor: 'text-purple-500'
    },
    {
      title: 'Main License E1 User Utilisation',
      value: '159.4%',
      icon: TrendingUp,
      iconColor: 'text-orange-500'
    }
  ],
  appUsageData: [
    { app: 'Microsoft Main License E1', count: 70 },
    { app: 'Main License E1 Service', count: 60 },
    { app: 'Main License E1 Data Refresh', count: 25 },
    { app: 'Main License E1 Desktop', count: 18 },
    { app: 'SLIM Main License E1', count: 16 },
    { app: 'Main License E1 Community - Prod', count: 3 },
    { app: 'Main License E1 PowerShell', count: 2 }
  ],
  licenseData: [
    { license: 'Main License E1 Pro', count: 41 },
    { license: 'Main License E1 (Free)', count: 35 }
  ],
  appUsageTitle: 'Main License E1 App Usage',
  licenseTitle: 'Assigned Main License E1 Capable Licenses to App Users',
  userSummaryTitle: 'Main License E1 App Summary Usage by User',
  appDetailTitle: 'Main License E1 App Summary Detail',
  userFilterPlaceholder: 'ALL MAIN LICENSE E1 USER',
  userSearchPlaceholder: '搜索 Main License E1 User',
  userSummaryColumns: {
    user: 'User using Main License E1 Apps (Auth to Main License E1)',
    userCount: '# User',
    licenseNeeds: 'License Needs',
    appCount: 'App Count',
    lastSignin: 'Last App signin (Days)'
  },
  appDetailColumns: {
    user: 'User using Main License E1 Apps (Auth to Main License E1)',
    userCount: '# User',
    lastSigninDays: 'Last App sign in Days Ago',
    app: 'App',
    licenseCount: 'Main License E1 User Assigned License count',
    licenseCountKey: 'mainLicenseE1UserAssigned'
  }
};

// Main License E3 配置
export const mainLicenseE3Config = {
  ...mainLicenseF1Config,
  summaryCards: [
    {
      title: 'Assigned Main License E3 Capable Licenses',
      value: '80',
      icon: Key,
      iconColor: 'text-blue-500'
    },
    {
      title: 'Main License E3 Capable Users',
      value: '64',
      icon: Users,
      iconColor: 'text-green-500'
    },
    {
      title: 'Main License E3 App Users',
      value: '102',
      icon: BarChart,
      iconColor: 'text-purple-500'
    },
    {
      title: 'Main License E3 User Utilisation',
      value: '159.4%',
      icon: TrendingUp,
      iconColor: 'text-orange-500'
    }
  ],
  appUsageData: [
    { app: 'Microsoft Main License E3', count: 70 },
    { app: 'Main License E3 Service', count: 60 },
    { app: 'Main License E3 Data Refresh', count: 25 },
    { app: 'Main License E3 Desktop', count: 18 },
    { app: 'SLIM Main License E3', count: 16 },
    { app: 'Main License E3 Community - Prod', count: 3 },
    { app: 'Main License E3 PowerShell', count: 2 }
  ],
  licenseData: [
    { license: 'Main License E3 Pro', count: 41 },
    { license: 'Main License E3 (Free)', count: 35 }
  ],
  appUsageTitle: 'Main License E3 App Usage',
  licenseTitle: 'Assigned Main License E3 Capable Licenses to App Users',
  userSummaryTitle: 'Main License E3 App Summary Usage by User',
  appDetailTitle: 'Main License E3 App Summary Detail',
  userFilterPlaceholder: 'ALL MAIN LICENSE E3 USER',
  userSearchPlaceholder: '搜索 Main License E3 User',
  userSummaryColumns: {
    user: 'User using Main License E3 Apps (Auth to Main License E3)',
    userCount: '# User',
    licenseNeeds: 'License Needs',
    appCount: 'App Count',
    lastSignin: 'Last App signin (Days)'
  },
  appDetailColumns: {
    user: 'User using Main License E3 Apps (Auth to Main License E3)',
    userCount: '# User',
    lastSigninDays: 'Last App sign in Days Ago',
    app: 'App',
    licenseCount: 'Main License E3 User Assigned License count',
    licenseCountKey: 'mainLicenseE3UserAssigned'
  }
};

// Main License E5 配置
export const mainLicenseE5Config = {
  ...mainLicenseF1Config,
  summaryCards: [
    {
      title: 'Assigned Main License E5 Capable Licenses',
      value: '80',
      icon: Key,
      iconColor: 'text-blue-500'
    },
    {
      title: 'Main License E5 Capable Users',
      value: '64',
      icon: Users,
      iconColor: 'text-green-500'
    },
    {
      title: 'Main License E5 App Users',
      value: '102',
      icon: BarChart,
      iconColor: 'text-purple-500'
    },
    {
      title: 'Main License E5 User Utilisation',
      value: '159.4%',
      icon: TrendingUp,
      iconColor: 'text-orange-500'
    }
  ],
  appUsageData: [
    { app: 'Microsoft Main License E5', count: 70 },
    { app: 'Main License E5 Service', count: 60 },
    { app: 'Main License E5 Data Refresh', count: 25 },
    { app: 'Main License E5 Desktop', count: 18 },
    { app: 'SLIM Main License E5', count: 16 },
    { app: 'Main License E5 Community - Prod', count: 3 },
    { app: 'Main License E5 PowerShell', count: 2 }
  ],
  licenseData: [
    { license: 'Main License E5 Pro', count: 41 },
    { license: 'Main License E5 (Free)', count: 35 }
  ],
  appUsageTitle: 'Main License E5 App Usage',
  licenseTitle: 'Assigned Main License E5 Capable Licenses to App Users',
  userSummaryTitle: 'Main License E5 App Summary Usage by User',
  appDetailTitle: 'Main License E5 App Summary Detail',
  userFilterPlaceholder: 'ALL MAIN LICENSE E5 USER',
  userSearchPlaceholder: '搜索 Main License E5 User',
  userSummaryColumns: {
    user: 'User using Main License E5 Apps (Auth to Main License E5)',
    userCount: '# User',
    licenseNeeds: 'License Needs',
    appCount: 'App Count',
    lastSignin: 'Last App signin (Days)'
  },
  appDetailColumns: {
    user: 'User using Main License E5 Apps (Auth to Main License E5)',
    userCount: '# User',
    lastSigninDays: 'Last App sign in Days Ago',
    app: 'App',
    licenseCount: 'Main License E5 User Assigned License count',
    licenseCountKey: 'mainLicenseE5UserAssigned'
  }
};