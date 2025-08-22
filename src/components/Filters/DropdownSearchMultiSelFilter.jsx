import React, { useState, useRef, useEffect } from 'react';

/**
 * 带搜索功能的下拉多选过滤器组件
 * @param {Object} props
 * @param {Array} props.selectedValues - 当前选中的值数组
 * @param {function} props.onChange - 值变更时的回调函数
 * @param {Array} props.options - 选项数组，每个选项包含value和label属性
 * @param {string} props.placeholder - 占位文本
 * @param {string} props.searchPlaceholder - 搜索框占位文本
 * @param {string} props.className - 额外的CSS类名
 * @param {string} props.dropdownWidth - 下拉框宽度，可以是'auto'或具体的像素值
 * @param {number} props.maxHeight - 下拉框最大高度，默认为200px
 * @param {boolean} props.showSearchIcon - 是否显示搜索图标
 * @param {string} props.selectAllText - 全选按钮文本
 * @param {string} props.closeText - 关闭按钮文本
 * @param {string} props.applyText - 应用按钮文本
 * @param {string} props.noResultsText - 无结果文本
 */
const DropdownSearchMultiSelFilter = ({
  selectedValues = [],
  onChange,
  options = [],
  placeholder = "选择...",
  searchPlaceholder = "搜索...",
  className = "",
  dropdownWidth = "auto",
  maxHeight = 200,
  showSearchIcon = true,
  selectAllText = "全选",
  closeText = "关闭",
  applyText = "应用",
  noResultsText = "无匹配结果"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [internalSelectedValues, setInternalSelectedValues] = useState(selectedValues || []);
  const dropdownRef = useRef(null);

  // 过滤选项
  const filteredOptions = options.filter(option => 
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 处理选择
  const handleToggle = (optionValue) => {
    let newValues;
    if (internalSelectedValues.includes(optionValue)) {
      newValues = internalSelectedValues.filter(v => v !== optionValue);
    } else {
      newValues = [...internalSelectedValues, optionValue];
    }
    setInternalSelectedValues(newValues);
    onChange(newValues);
  };

  // 全选/取消全选
  const handleSelectAll = () => {
    if (internalSelectedValues.length === filteredOptions.length && filteredOptions.length > 0) {
      setInternalSelectedValues([]);
      onChange([]);
    } else {
      const allValues = filteredOptions.map(option => option.value);
      setInternalSelectedValues(allValues);
      onChange(allValues);
    }
  };

  // 点击外部关闭下拉框
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 当外部selectedValues变化时更新内部状态
  useEffect(() => {
    if (selectedValues !== undefined) {
      setInternalSelectedValues(selectedValues);
    }
  }, [selectedValues]);

  // 显示选中项数量或占位符
  const displayText = internalSelectedValues.length > 0 
    ? `已选择 ${internalSelectedValues.length} 项` 
    : placeholder;

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="relative">
        {showSearchIcon && (
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        )}
        <input
          type="text"
          placeholder={isOpen ? searchPlaceholder : displayText}
          className={`block w-full ${showSearchIcon ? 'pl-7' : 'pl-2'} pr-2 py-1.5 border border-gray-600 rounded text-gray-300 bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-xs ${className}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />
      </div>
      
      {isOpen && (
        <div 
          className="absolute z-10 mt-1 bg-gray-800 border border-gray-600 rounded-md shadow-lg overflow-auto"
          style={{ 
            width: dropdownWidth === 'auto' ? '100%' : dropdownWidth,
            maxHeight: `${maxHeight}px`
          }}
        >
          <div className="p-1">
            <div className="flex items-center px-2 py-1 hover:bg-gray-700 cursor-pointer">
              <input 
                type="checkbox" 
                className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500"
                checked={internalSelectedValues.length === filteredOptions.length && filteredOptions.length > 0}
                onChange={handleSelectAll}
              />
              <span className="text-gray-300 text-xs">{selectAllText}</span>
            </div>
            
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div key={index} className="flex items-center px-2 py-1 hover:bg-gray-700 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="mr-2 w-3 h-3 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500"
                    checked={internalSelectedValues.includes(option.value)}
                    onChange={() => handleToggle(option.value)}
                  />
                  <span className="text-gray-300 text-xs">{option.label}</span>
                </div>
              ))
            ) : (
              <div className="px-2 py-1 text-gray-400 text-xs">{noResultsText}</div>
            )}
          </div>
          
          <div className="border-t border-gray-600 p-2 flex justify-between">
            <button 
              className="text-xs text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {closeText}
            </button>
            <button 
              className="text-xs text-teal-500 hover:text-teal-400"
              onClick={() => setIsOpen(false)}
            >
              {applyText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownSearchMultiSelFilter;