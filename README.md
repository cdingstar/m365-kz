# Microsoft 365 License Management Dashboard

一个基于 React + Vite 构建的 Microsoft 365 许可证管理仪表板应用。

## 功能特性

- 🏢 **公司概况** - 租户摘要、账户详情、终端数据
- 📊 **许可证 Top 10** - 许可证分析和成本分析
- 💰 **成本优化** - 财务建议和节省分析
- 📋 **账户管理** - 带有 SKU 信息的详细账户管理
- 📈 **交互式图表** - 使用 Recharts 的数据可视化
- 🌙 **深色模式** - 完整的主题切换支持
- 📱 **响应式设计** - 适配各种屏幕尺寸

## 技术栈

- **前端框架**: React 18
- **构建工具**: Vite 7
- **样式**: Tailwind CSS 4
- **图表**: Recharts
- **图标**: Lucide React
- **开发语言**: JavaScript + JSX

## 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产构建
```bash
npm run preview
```

## 项目结构

```
src/
├── components/          # 组件目录
│   ├── CompanyProfileTab.jsx
│   ├── LicenseTop10Tab.jsx
│   ├── CostOptimisationTab.jsx
│   ├── AccountDetailsWithSKUTab.jsx
│   ├── AccountDetailsNoSKUTab.jsx
│   └── ...
├── App.jsx             # 主应用组件
├── LoginPage.jsx       # 登录页面
├── Header.jsx          # 头部组件
└── main.jsx           # 应用入口

```

## 主要组件

- **LoginPage** - 用户认证界面
- **CompanyProfileTab** - 公司概况和统计
- **LicenseTop10Tab** - 许可证使用分析
- **CostOptimisationTab** - 成本优化建议
- **AccountDetails** - 账户详情管理

## 开发说明

该项目模拟了一个企业级的 Microsoft 365 许可证管理工具，为 IT 管理员提供：
- 许可证使用情况监控
- 成本节省机会识别
- 用户采用率跟踪
- 许可证分配管理
- 财务报告和建议

## 许可证

MIT License