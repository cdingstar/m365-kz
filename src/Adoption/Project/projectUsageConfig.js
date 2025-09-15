import { Key, Users, BarChart, TrendingUp, Calendar, Folder, Target } from 'lucide-react';

export const projectUsageConfigs = {
  plan1: {
    productName: 'Project Plan 1',
    icon: Folder,
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
    chartData: {
      appUsage: {
        title: 'Project Plan 1 App Usage',
        data: [
          { app: 'Microsoft Project Plan 1', count: 70 },
          { app: 'Project Plan 1 Service', count: 60 },
          { app: 'Project Plan 1 Data Refresh', count: 25 },
          { app: 'Project Plan 1 Desktop', count: 18 },
          { app: 'SLIM Project Plan 1', count: 16 },
          { app: 'Project Plan 1 Community - Prod', count: 3 },
          { app: 'Project Plan 1 PowerShell', count: 2 }
        ]
      },
      licenseData: {
        title: 'Assigned Project Plan 1 Capable Licenses to App Users',
        data: [
          { license: 'Project Plan 1 Pro', count: 41 },
          { license: 'Project Plan 1 (Free)', count: 35 }
        ]
      }
    },
    tables: {
      userSummary: {
        title: 'Project Plan 1 App Summary Usage by User',
        columns: [
          { 
            key: 'userId', 
            label: 'User using Project Plan 1 Apps (Auth to Project Plan 1)', 
            width: '300px',
            hasFilter: true,
            filterDefault: 'ALL PROJECT PLAN 1 USER'
          },
          { key: 'licenseNeeds', label: 'License Needs', width: '80px' },
          { key: 'userCount', label: '# User', width: '80px', sortable: true },
          { key: 'appCount', label: 'App Count', width: '100px', sortable: true },
          { key: 'lastSignin', label: 'Last App signin (Days)', width: '160px', sortable: true }
        ],
        data: [
          { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', licenseNeeds: 'Plan1', userCount: 1, appCount: 5, lastSignin: 1 },
          { userId: '193a88f139039254246c6b2472aff5c059c693b4', licenseNeeds: 'Plan2', userCount: 1, appCount: 2, lastSignin: 1 },
          { userId: '1a1ac37c6620f4961559b46f427092428796437', licenseNeeds: 'Plan3', userCount: 1, appCount: 4, lastSignin: 1 },
          { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', licenseNeeds: 'Plan1', userCount: 1, appCount: 5, lastSignin: 1 },
          { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', licenseNeeds: 'Plan2', userCount: 1, appCount: 1, lastSignin: 1 },
          { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', licenseNeeds: 'Plan3', userCount: 1, appCount: 2, lastSignin: 1 },
          { userId: 'b0ca73216498c61b1c2c3019458cd3f8cd5c6c4', licenseNeeds: 'Plan1', userCount: 1, appCount: 2, lastSignin: 1 },
          { userId: 'bb9c38772dbcf13977451da3db554d9654140456', licenseNeeds: 'Plan2', userCount: 1, appCount: 4, lastSignin: 1 },
          { userId: 'cb6130545d2a92a46f75c0431af1e4bcc58bc7f', licenseNeeds: 'Plan3', userCount: 1, appCount: 2, lastSignin: 1 },
          { userId: 'cfa5becfc38b34ac57821c2bc78337c6019c28a', licenseNeeds: 'Plan1', userCount: 1, appCount: 4, lastSignin: 1 },
          { userId: 'd0f497cb3f8db082dc66c8638c3f68bb00ba239', licenseNeeds: 'Plan2', userCount: 1, appCount: 4, lastSignin: 1 }
        ],
        totals: { userId: '总计', userCount: 83, appCount: 194, lastSignin: '' }
      },
      appDetail: {
        title: 'Project Plan 1 App Summary Detail',
        columns: [
          { 
            key: 'userId', 
            label: 'User using Project Plan 1 Apps (Auth to Project Plan 1)', 
            width: '300px',
            hasFilter: true,
            filterDefault: 'ALL PROJECT PLAN 1 USER'
          },
          { key: 'licenseNeeds', label: 'License Needs', width: '80px' },
          { key: 'userCount', label: '# User', width: '80px', sortable: true },
          { key: 'lastSigninDays', label: 'Last App sign in Days Ago', width: '180px', sortable: true },
          { 
            key: 'app', 
            label: 'App', 
            width: '160px',
            hasFilter: true,
            filterDefault: 'ALL APP'
          },
          { key: 'pbiUserAssigned', label: 'Project Plan 1 User Assigned License count', width: '200px', sortable: true }
        ],
        data: [
          { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', licenseNeeds: 'Plan1', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 1', pbiUserAssigned: 2 },
          { userId: '193a88f139039254246c6b2472aff5c059c693b4', licenseNeeds: 'Plan2', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 1', pbiUserAssigned: 1 },
          { userId: '1a1ac37c6620f4961559b46f427092428796437', licenseNeeds: 'Plan3', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 1', pbiUserAssigned: 2 },
          { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', licenseNeeds: 'Plan1', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 1', pbiUserAssigned: 2 },
          { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', licenseNeeds: 'Plan2', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 1', pbiUserAssigned: 1 },
          { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', licenseNeeds: 'Plan3', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 1', pbiUserAssigned: 1 }
        ],
        totals: { userId: '总计', userCount: 83, lastSigninDays: '', app: '', pbiUserAssigned: 73 }
      }
    }
  },

  plan3: {
    productName: 'Project Plan 3',
    icon: Folder,
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
    chartData: {
      appUsage: {
        title: 'Project Plan 3 App Usage',
        data: [
          { app: 'Microsoft Project Plan 3', count: 70 },
          { app: 'Project Plan 3 Service', count: 60 },
          { app: 'Project Plan 3 Data Refresh', count: 25 },
          { app: 'Project Plan 3 Desktop', count: 18 },
          { app: 'SLIM Project Plan 3', count: 16 },
          { app: 'Project Plan 3 Community - Prod', count: 3 },
          { app: 'Project Plan 3 PowerShell', count: 2 }
        ]
      },
      licenseData: {
        title: 'Assigned Project Plan 3 Capable Licenses to App Users',
        data: [
          { license: 'Project Plan 3 Pro', count: 41 },
          { license: 'Project Plan 3 (Free)', count: 35 }
        ]
      }
    },
    tables: {
      userSummary: {
        title: 'Project Plan 3 App Summary Usage by User',
        columns: [
          { 
            key: 'userId', 
            label: 'User using Project Plan 3 Apps (Auth to Project Plan 3)', 
            width: '300px',
            hasFilter: true,
            filterDefault: 'ALL PROJECT PLAN 3 USER'
          },
          { key: 'licenseNeeds', label: 'License Needs', width: '80px' },
          { key: 'userCount', label: '# User', width: '80px', sortable: true },
          { key: 'appCount', label: 'App Count', width: '100px', sortable: true },
          { key: 'lastSignin', label: 'Last App signin (Days)', width: '160px', sortable: true }
        ],
        data: [
          { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', licenseNeeds: 'Plan1', userCount: 1, appCount: 5, lastSignin: 1 },
          { userId: '193a88f139039254246c6b2472aff5c059c693b4', licenseNeeds: 'Plan2', userCount: 1, appCount: 2, lastSignin: 1 },
          { userId: '1a1ac37c6620f4961559b46f427092428796437', licenseNeeds: 'Plan3', userCount: 1, appCount: 4, lastSignin: 1 },
          { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', licenseNeeds: 'Plan1', userCount: 1, appCount: 5, lastSignin: 1 },
          { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', licenseNeeds: 'Plan2', userCount: 1, appCount: 1, lastSignin: 1 },
          { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', licenseNeeds: 'Plan3', userCount: 1, appCount: 2, lastSignin: 1 },
          { userId: 'b0ca73216498c61b1c2c3019458cd3f8cd5c6c4', licenseNeeds: 'Plan1', userCount: 1, appCount: 2, lastSignin: 1 },
          { userId: 'bb9c38772dbcf13977451da3db554d9654140456', licenseNeeds: 'Plan2', userCount: 1, appCount: 4, lastSignin: 1 },
          { userId: 'cb6130545d2a92a46f75c0431af1e4bcc58bc7f', licenseNeeds: 'Plan3', userCount: 1, appCount: 2, lastSignin: 1 },
          { userId: 'cfa5becfc38b34ac57821c2bc78337c6019c28a', licenseNeeds: 'Plan1', userCount: 1, appCount: 4, lastSignin: 1 },
          { userId: 'd0f497cb3f8db082dc66c8638c3f68bb00ba239', licenseNeeds: 'Plan2', userCount: 1, appCount: 4, lastSignin: 1 }
        ],
        totals: { userId: '总计', userCount: 83, appCount: 194, lastSignin: '' }
      },
      appDetail: {
        title: 'Project Plan 3 App Summary Detail',
        columns: [
          { 
            key: 'userId', 
            label: 'User using Project Plan 3 Apps (Auth to Project Plan 3)', 
            width: '300px',
            hasFilter: true,
            filterDefault: 'ALL PROJECT PLAN 3 USER'
          },
          { key: 'licenseNeeds', label: 'License Needs', width: '80px' },
          { key: 'userCount', label: '# User', width: '80px', sortable: true },
          { key: 'lastSigninDays', label: 'Last App sign in Days Ago', width: '180px', sortable: true },
          { 
            key: 'app', 
            label: 'App', 
            width: '160px',
            hasFilter: true,
            filterDefault: 'ALL APP'
          },
          { key: 'pbiUserAssigned', label: 'Project Plan 3 User Assigned License count', width: '200px', sortable: true }
        ],
        data: [
          { userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', licenseNeeds: 'Plan1', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 3', pbiUserAssigned: 2 },
          { userId: '193a88f139039254246c6b2472aff5c059c693b4', licenseNeeds: 'Plan2', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 3', pbiUserAssigned: 1 },
          { userId: '1a1ac37c6620f4961559b46f427092428796437', licenseNeeds: 'Plan3', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 3', pbiUserAssigned: 2 },
          { userId: '4fcad4802620c25dd1471dc11d887fb521bc3b1', licenseNeeds: 'Plan1', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 3', pbiUserAssigned: 2 },
          { userId: '571710b20467afcc1a4f4d1acafb6dd6f39ad806', licenseNeeds: 'Plan2', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 3', pbiUserAssigned: 1 },
          { userId: '9de963cc329a626083d34a26c6766cdc7a1d37a4', licenseNeeds: 'Plan3', userCount: 1, lastSigninDays: 1, app: 'Microsoft Project Plan 3', pbiUserAssigned: 1 }
        ],
        totals: { userId: '总计', userCount: 83, lastSigninDays: '', app: '', pbiUserAssigned: 73 }
      }
    }
  },

  plan5: {
    productName: 'Project Plan 5',
    icon: Target,
    summaryCards: [
      {
        title: 'Total Project Plan 5 Users',
        value: '34',
        icon: Users,
        iconColor: 'text-blue-500',
        trend: '+6.3% from last month'
      },
      {
        title: 'Active Users',
        value: '29',
        icon: Users,
        iconColor: 'text-green-500',
        trend: '+3.6% from last month'
      },
      {
        title: 'Total Projects',
        value: '65',
        icon: BarChart,
        iconColor: 'text-yellow-500',
        trend: '+5.0% from last month'
      },
      {
        title: 'Overall Adoption Rate',
        value: '85%',
        icon: TrendingUp,
        iconColor: 'text-purple-500',
        trend: '+3.0% from last month'
      }
    ],
    // Project Plan 5 has a different structure, so we'll use custom content
    customContent: {
      // Department usage table
      departmentUsage: {
        title: 'Project Plan 5 Usage by Department',
        data: [
          { department: 'Finance', totalUsers: 5, activeUsers: 5, projects: 12, tasks: 180, adoptionRate: 100 },
          { department: 'Sales', totalUsers: 3, activeUsers: 2, projects: 5, tasks: 85, adoptionRate: 67 },
          { department: 'Marketing', totalUsers: 6, activeUsers: 5, projects: 10, tasks: 165, adoptionRate: 83 },
          { department: 'IT', totalUsers: 10, activeUsers: 9, projects: 20, tasks: 320, adoptionRate: 90 },
          { department: 'Operations', totalUsers: 8, activeUsers: 7, projects: 15, tasks: 240, adoptionRate: 88 },
          { department: 'HR', totalUsers: 2, activeUsers: 1, projects: 3, tasks: 45, adoptionRate: 50 }
        ]
      },
      // Enterprise feature usage
      enterpriseFeatures: {
        title: 'Enterprise Feature Usage',
        data: [
          { feature: 'Portfolio Management', percentage: 40 },
          { feature: 'Resource Management', percentage: 25 },
          { feature: 'Demand Management', percentage: 15 },
          { feature: 'Enterprise Reporting', percentage: 12 },
          { feature: 'Other Enterprise Features', percentage: 8 }
        ]
      },
      // Top portfolios
      topPortfolios: {
        title: 'Top Project Portfolios',
        data: [
          { name: 'Strategic Initiatives', department: 'Finance', projects: 8, budget: '$1.2M', roi: '185%' },
          { name: 'Digital Transformation', department: 'IT', projects: 12, budget: '$2.5M', roi: '160%' },
          { name: 'Market Expansion', department: 'Marketing', projects: 6, budget: '$950K', roi: '140%' },
          { name: 'Operational Excellence', department: 'Operations', projects: 10, budget: '$1.8M', roi: '125%' }
        ]
      },
      // Usage trends
      usageTrends: {
        title: 'Usage Trends (Last 6 Months)',
        data: [
          { month: 'Jan', projects: 58, activeUsers: 30 },
          { month: 'Feb', projects: 60, activeUsers: 31 },
          { month: 'Mar', projects: 62, activeUsers: 32 },
          { month: 'Apr', projects: 63, activeUsers: 32 },
          { month: 'May', projects: 64, activeUsers: 33 },
          { month: 'Jun', projects: 65, activeUsers: 34 }
        ]
      }
    }
  }
};