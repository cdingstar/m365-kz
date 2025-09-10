# KZ AI M365 v1.5

这是一个基于React的Microsoft 365管理平台，用于展示和管理M365资源。

## 项目架构

项目采用模块化架构，主要包括以下部分：

1. **左侧菜单栏**：通过LeftSideBar组件实现，负责导航和页面切换
2. **标签页管理**：通过TabRegistry模块实现，各组件可以注册自己的标签页
3. **内容区域**：根据选中的菜单项和标签页显示相应的内容

## 主要功能

- **Home**：包括Dashboard和Overview页面
- **Optimize**：包括Accounts和Plans页面
- **Adoption**：包括Summary、PowerPlatform、Teams、Visio和Project页面

## 技术栈

- React
- Vite
- Tailwind CSS
- Recharts (图表库)
- Lucide React (图标库)

## 版本更新 - UI Optimize based on Request

### 1. 过滤器组件优化
- 创建了三个通用过滤器组件：
  - `DropdownSingleFilter` - 简单的下拉单选过滤器
  - `DropdownSearchFilter` - 带搜索功能的下拉单选过滤器
  - `DropdownSearchMultiSelFilter` - 带搜索功能的下拉多选过滤器
  - `PriceRangeFilter` - 双滑块价格范围选择器

### 2. SKUAdoptionTab 优化
- 删除了多余的列（COUNT OF PLANS WITHIN SKU、COUNT OF ASSIGNED PLANS、RULE?）
- 添加了汇总行，显示总计数据
- 优化了过滤器布局，使用表格确保控件不会相互覆盖
- 添加了License多选过滤器和价格范围双滑块选择器

### 3. ActiveInactiveAccountsTab 优化
- 将原始过滤器替换为通用组件
- 优化了Account Status、User Name、SKU Name、Account Age和Activity Days过滤器

### 4. 登录页优化
- 添加了3秒自动登录功能，提升用户体验

### 5. 代码清理
- 删除了未使用的文件，如`AccountDetailsNoSKUTab.jsx`、`AccountDetailsWithSKUTab.jsx`等
- 删除了`Optimize/Plans`目录下的未使用文件

所有这些优化都保持了与原有设计一致的深色主题和配色方案，同时提高了用户体验和界面的一致性。

## 版本更新 - 2025/9/10 UI 调整和数据优化

### 1. 左侧导航栏优化 (LeftSideBar.jsx)
- 将标题从 "MS365 SaaS" 更改为 "M365 SaaS"
- 统一品牌命名规范

### 2. 公司概况页面优化 (CompanyProfileTab.jsx)
- **Endpoint Summary 表格**：
  - 删除了 "INTUNE MANAGED" 列和对应数据 (32,504)
  - 删除了 "ACTIVE INTUNE (<30 DAYS)" 列和对应数据 (29,403)
  - 保留 "ENTRA ENDPOINTS" 和 "ACTIVE ENTRA (<30 DAYS)" 两列
- **Tenant Summary 表格**：
  - "LICENSED ACCOUNT" → "LICENSED ACCOUNTS" (添加复数形式)
  - "LICENSE PURCHASE COST (MONTH)" → "AVERAGE COST PER LICENSE ACCOUNT"
- **统计卡片文字调整**：
  - "Number of Unique Tag Values" → "Lines of Business"
  - "Domains used for Email Communication" → "Number of Domains"

### 3. 许可证分配页面优化 (LicenseAssignmentTab.jsx)
- **License Breakdown 表格列标题重构**：
  1. LICENSE NAME
  2. CURRENCY
  3. QUANTITY PURCHASED
  4. UNIT COST PER MONTH
  5. NUMBER OF LICENSE
  6. COST OF ASSIGNED
  7. COST OF UNASSIGNED
  8. % ASSIGNED
- 所有列标题保持大写格式，确保拼写正确
- 添加了成本计算逻辑，根据分配百分比计算已分配和未分配成本

### 4. 仪表板内容优化 (DashboardContent.jsx)
- **Savings Potential 卡片状态调整**：
  - 数值改为 £0 和 0%，显示为灰色
  - 禁用点击功能，添加 `cursor-not-allowed` 样式
  - 降低透明度表示功能未实现
  - 保留 License Consumed 和 License Wastage 的点击功能

### 5. 优化摘要页面重构 (OptimizationSummaryTab.jsx)
- **Financial 部分调整**：
  - Zombie 行保持原数据和颜色
  - 其他行（Over-Subscribed, Recategorise, Downgrade, Overlap）数据改为0，显示灰色
- **Sub-Categories 部分重构**：
  - 添加了统一的图标系统，与 Financial 部分保持一致 (12x12 尺寸)
  - Zombie 移动到第一行，保持原数据 (2,451)
  - 其他所有项目数值改为0，图标和文字显示灰色
  - 统一进度条宽度：非活跃项目固定为8%小宽度
  - 优化布局防止文字换行，确保图标对齐一致

### 6. 版本控制
- 提交哈希：74591d0
- 修改文件：5个文件
- 代码变更：94行新增，81行删除

所有修改都通过 Vite 热重载实时更新，保持了深色主题的一致性，并明确区分了已实现功能（正常颜色）和未实现功能（灰色显示）。
