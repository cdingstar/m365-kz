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
