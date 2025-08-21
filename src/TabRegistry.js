// TabRegistry.js
// 这个模块用于管理各个页面的标签页信息

// 标签页注册表
const tabRegistry = {
  // Home
  'Home/Dashboard': [],
  'Home/Overview': ['Company Profile', 'License Assignment', 'Optimization Summary'],
  
  // Optimize
  'Optimize/Accounts': ['Accounts'],
  'Optimize/Plans': ['SKU Adoption'],
  
  // Adoption
  'Adoption/Summary': ['Adoption Overview'],
  'Adoption/PowerPlatform': ['Power Bi Usage', 'Power Apps Usage', 'Power Automate Usage'],
  'Adoption/Teams': ['Teams Standard Usage', 'Teams Premium Usage'],
  'Adoption/Visio': ['Visio Usage Plan 1', 'Visio Usage Plan 2'],
  'Adoption/Project': ['Project Usage Plan 1', 'Project Usage Plan 3', 'Project Usage Plan 5']
};

// 获取指定页面的标签页
export const getTabs = (pageId) => {
  return tabRegistry[pageId] || [];
};

// 获取指定页面的默认标签页
export const getDefaultTab = (pageId) => {
  const tabs = getTabs(pageId);
  return tabs.length > 0 ? tabs[0] : '';
};

// 注册页面的标签页
export const registerTabs = (pageId, tabs) => {
  tabRegistry[pageId] = tabs;
};

export default {
  getTabs,
  getDefaultTab,
  registerTabs
};