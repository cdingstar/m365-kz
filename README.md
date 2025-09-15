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

---

## 2025年9月15日 Power BI 表格功能增强

### 提交信息
- **提交哈希**: b976d29
- **修改文件**: 4个文件
- **新增代码**: 367行
- **删除代码**: 57行

### 1. Power BI App Summary Usage by User 表格增强

#### 1.1 新增 License Needs 列
- **位置**: 在"# User"和"App Count"列之间
- **数据类型**: Plan1、Plan2、Plan3
- **功能**: 显示每个用户的许可证需求分类

#### 1.2 用户数据更新
更新了 `userSummaryData` 数组，为每个用户添加 `licenseNeeds` 字段：
```javascript
{ userId: '0dd552621a9eaf9d45d89bc372292cd8ddd908f', userCount: 1, licenseNeeds: 'Plan2', appCount: 5, lastSignin: 1 }
{ userId: '193a88f139039254246c6b2472aff5c059c693b4', userCount: 1, licenseNeeds: 'Plan1', appCount: 2, lastSignin: 1 }
// ... 其他用户数据
```

#### 1.3 表格结构调整
- **表头**: 添加"License Needs"列头
- **数据行**: 在相应位置显示许可证需求
- **总计行**: 为新列预留空位

### 2. 多选过滤器功能实现

#### 2.1 组件导入
```javascript
import DropdownSearchMultiSelFilter from '../../components/Filters/DropdownSearchMultiSelFilter';
```

#### 2.2 状态管理
新增三个过滤器状态：
```javascript
const [selectedPowerBiUsers, setSelectedPowerBiUsers] = useState([]);
const [selectedPowerBiDetailUsers, setSelectedPowerBiDetailUsers] = useState([]);
const [selectedApps, setSelectedApps] = useState([]);
```

#### 2.3 过滤器选项配置
- **Power BI User 选项**: 包含所有用户ID（11个选项）
- **Power BI Detail User 选项**: 包含详情表格用户ID（6个选项）
- **App 选项**: 包含"Microsoft Power BI"应用

### 3. Power BI App Summary Usage by User 过滤器

#### 3.1 过滤器行布局
```html
<div className="bg-gray-700 border-b border-gray-600">
  <table className="w-full">
    <tbody>
      <tr>
        <td className="px-3 py-3" style={{ width: '300px' }}>
          <DropdownSearchMultiSelFilter ... />
        </td>
        <!-- 其他列为空 -->
      </tr>
    </tbody>
  </table>
</div>
```

#### 3.2 过滤器配置
- **占位符**: "ALL POWER BI USER"
- **搜索占位符**: "搜索 Power BI User"
- **下拉框宽度**: 300px
- **功能**: 支持搜索、多选、全选

### 4. Power BI App Summary Detail 过滤器

#### 4.1 双过滤器布局
在过滤器行中添加两个过滤器：
- **第一列**: Power BI User 过滤器
- **第四列**: APP 过滤器

#### 4.2 APP 过滤器配置
```javascript
<DropdownSearchMultiSelFilter
  selectedValues={selectedApps}
  onChange={setSelectedApps}
  options={appOptions}
  placeholder="ALL APP"
  searchPlaceholder="搜索 App"
  dropdownWidth="200px"
/>
```

### 5. 列宽对齐优化

#### 5.1 统一第一列宽度
- **设置**: `style={{ width: '300px' }}`
- **应用范围**: 
  - 过滤器行第一列
  - 表头第一列
  - 数据行第一列
  - 总计行第一列

#### 5.2 垂直对齐确保
- 过滤器与对应列完美对齐
- 使用表格布局确保一致性
- 响应式设计保持

### 6. 样式设计统一

#### 6.1 颜色方案
- **过滤器行背景**: `bg-gray-700`
- **表头背景**: `bg-gray-700`
- **表格内容背景**: `bg-gray-800`
- **边框**: `border-gray-600`

#### 6.2 交互效果
- **悬停效果**: `hover:bg-gray-750`
- **过渡动画**: `transition-colors`
- **焦点状态**: `focus:ring-teal-500`

### 7. 功能特性

#### 7.1 搜索功能
- 实时搜索用户ID和应用名称
- 大小写不敏感匹配
- 无结果时显示"无结果"提示

#### 7.2 多选功能
- 支持单个选择和取消选择
- 全选/取消全选功能
- 选中项数量显示

#### 7.3 用户体验
- 点击外部自动关闭下拉框
- 应用/关闭按钮操作
- 一致的占位符文本

### 8. 技术实现细节

#### 8.1 组件复用
- 使用统一的 `DropdownSearchMultiSelFilter` 组件
- 通过 props 配置不同的行为
- 保持代码一致性和可维护性

#### 8.2 状态管理
- 使用 React useState 管理过滤器状态
- 独立的状态管理避免冲突
- 支持受控组件模式

#### 8.3 布局技术
- 使用 CSS Grid 和 Flexbox
- 表格布局确保对齐
- 响应式设计支持

### 9. 文件修改清单

#### 主要修改文件
- `src/Adoption/PowerPlatform/PowerBiUsageTab.jsx` - 主要功能实现

#### 依赖组件
- `src/components/Filters/DropdownSearchMultiSelFilter.jsx` - 过滤器组件

### 10. 测试和验证

#### 10.1 功能测试
- ✅ License Needs 列正确显示
- ✅ 过滤器下拉框正常工作
- ✅ 搜索功能正常
- ✅ 多选功能正常
- ✅ 列对齐正确

#### 10.2 样式验证
- ✅ 与现有表格样式一致
- ✅ 响应式布局正常
- ✅ 交互效果流畅

## 下一步计划

1. 完善 Feedback 系统的后端集成
2. 优化移动端响应式设计
3. 添加更多数据可视化功能
4. 实现 Assistant 功能（未来版本）
5. 性能优化和代码重构
6. 为其他表格添加类似的过滤器功能
7. 实现过滤器的数据联动功能