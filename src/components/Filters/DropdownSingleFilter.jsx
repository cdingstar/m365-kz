import React from 'react';

/**
 * 下拉单选过滤器组件
 * @param {Object} props
 * @param {string} props.value - 当前选中的值
 * @param {function} props.onChange - 值变更时的回调函数
 * @param {Array} props.options - 选项数组，每个选项应包含value和label属性
 * @param {string} props.placeholder - 占位文本
 * @param {string} props.className - 额外的CSS类名
 */
const DropdownSingleFilter = ({ 
  value, 
  onChange, 
  options = [], 
  placeholder = "选择选项",
  className = ""
}) => {
  return (
    <select 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      className={`px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownSingleFilter;