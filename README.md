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
  - `DropdownSingleFilter`: 单选下拉过滤器
  - `DropdownSearchFilter`: 带搜索功能的单选过滤器
  - `DropdownSearchMultiSelFilter`: 带搜索功能的多选过滤器

### 2. 页面布局优化
- 优化了各个页面的过滤器布局和样式
- 统一了过滤器的交互体验
- 改进了表格和图表的显示效果

### 3. 响应式设计
- 优化了移动端和桌面端的显示效果
- 改进了各种屏幕尺寸下的用户体验

---

## 2025年9月15日 修改记录

### 1. 右上角菜单 Feedback 功能实现

#### 新增文件
- `src/components/FeedbackDialog.jsx` - Feedback 对话框组件

#### 修改文件
- `src/Header.jsx` - 添加 Feedback 功能到用户菜单

#### 功能特性
- **Type 下拉选择框**：包含多种反馈类型（Bug Report、Feature Request、Improvement Suggestion等）
- **Description 文本输入框**：带有默认灰色提示文字 "Your feedback/comment"
- **Contact 文本输入框**：带有默认灰色提示文字 "Your contact info"
- **Submit 按钮**：提交反馈信息
- **深色主题**：与登录页保持一致的样式设计
- **响应式设计**：支持不同屏幕尺寸
- **表单验证**：必填字段验证和用户反馈

### 2. Help 菜单功能实现

#### 修改内容
- 在 `src/Header.jsx` 中为 Help 按钮添加新标签页打开功能
- 点击 Help 时打开 https://help.kaizen-iq.com

### 3. Assistant 菜单状态调整

#### 修改内容
- 将 Assistant 菜单项设置为禁用状态
- 使用灰色字体显示，表示当前版本不实现此功能
- 添加 `cursor-not-allowed` 和透明度效果

### 4. Account Details 页面重构

#### 文件修改
- `src/Optimize/Accounts/ActiveInactiveAccountsTab.jsx`

#### 主要修改

##### 4.1 文字内容更新
- **标题修改**：`Account Details` → `Account Status`
- **分类标题修改**：`Account Aging Classification` → `Account aging categories`

##### 4.2 Account aging categories 更新
更新为七个分类：
- **Active** - 绿色进度条
- **30 Days** - 黄色进度条
- **45 Days** - 橙色进度条  
- **90 Days** - 红色进度条
- **180 Days** - 深红色进度条
- **Over 180 Days** - 最深红色进度条
- **No Activity Dates** - 灰色进度条

##### 4.3 过滤器功能升级
- **User Name 过滤器**：从单选改为多选（`DropdownSearchMultiSelFilter`）
- **Account Status 过滤器**：从单选改为多选（`DropdownSearchMultiSelFilter`）
- 所有过滤器现在支持：单选、多选、全部选择、搜索功能

##### 4.4 布局结构优化
- **标题和操作按钮**：移到表格内部作为第一行
- **过滤器行**：作为表格的第二行
- **表格头部**：作为第三行
- **颜色层次**：
  - 标题行：`bg-gray-600`
  - 过滤器行：`bg-gray-700`
  - 表头行：`bg-gray-700`
  - 表格内容：`bg-gray-800`

##### 4.5 精确对齐实现
使用表格布局确保过滤器与对应列完美垂直对齐：
- **User Name 过滤器** ↔ **User Principal Name 列**
- **SKU Name 过滤器** ↔ **SKU Name 列**  
- **Account Status 过滤器** ↔ **Has Activations? 列**
- **Account Age 过滤器** ↔ **Days Since Account Creation 列**
- **Activity Days 过滤器** ↔ **Last Account Activity (Days) 列**

### 5. Recommendations 内容更新

#### 修改内容
将 Recommendations 表格内容完全替换为四个新分类：

1. **Disabled with license** - 红色进度条，342个账户
2. **Disabled without License** - 橙色进度条，189个账户  
3. **Enabled with License** - 绿色进度条，1,456个账户
4. **Enabled without license** - 黄色进度条，267个账户

#### 颜色设计逻辑
- **绿色**：最理想状态（Enabled with License）
- **黄色**：需要注意（Enabled without license）
- **橙色**：需要处理（Disabled without License）
- **红色**：需要优先处理（Disabled with license）

### 6. 技术实现细节

#### 组件架构
- 使用 React Hooks（useState, useEffect, useRef）
- 组件化设计，提高代码复用性
- 事件处理和状态管理优化

#### 样式系统
- 完全基于 Tailwind CSS
- 深色主题统一设计
- 响应式布局支持

#### 开发环境
- Vite 热更新支持
- 开发服务器：http://localhost:5173/
- 构建命令：`npm run build`

---

## 下一步计划

1. 完善 Feedback 系统的后端集成
2. 优化移动端响应式设计
3. 添加更多数据可视化功能
4. 实现 Assistant 功能（未来版本）
5. 性能优化和代码重构