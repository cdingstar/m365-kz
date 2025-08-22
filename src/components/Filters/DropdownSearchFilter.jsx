import React, { useState, useRef, useEffect } from 'react';

/**
 * 带搜索功能的下拉单选过滤器组件
 * @param {Object} props
 * @param {string} props.value - 当前选中的值
 * @param {function} props.onChange - 值变更时的回调函数
 * @param {Array} props.options - 选项数组
 * @param {string} props.placeholder - 占位文本
 * @param {string} props.className - 额外的CSS类名
 * @param {string} props.dropdownWidth - 下拉框宽度，可以是'auto'或具体的像素值
 * @param {number} props.maxHeight - 下拉框最大高度，默认为200px
 * @param {boolean} props.showSearchIcon - 是否显示搜索图标
 */
const DropdownSearchFilter = ({
  value,
  onChange,
  options = [],
  placeholder = "搜索...",
  className = "",
  dropdownWidth = "auto",
  maxHeight = 200,
  showSearchIcon = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedValue, setSelectedValue] = useState(value || '');
  const dropdownRef = useRef(null);

  // 过滤选项
  const filteredOptions = options.filter(option => 
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 处理选择
  const handleSelect = (option) => {
    setSelectedValue(option);
    onChange(option);
    setIsOpen(false);
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

  // 当外部value变化时更新内部状态
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

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
          placeholder={placeholder}
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
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div 
                  key={index} 
                  className="px-2 py-1 hover:bg-gray-700 cursor-pointer text-gray-300 text-xs"
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </div>
              ))
            ) : (
              <div className="px-2 py-1 text-gray-400 text-xs">无匹配结果</div>
            )}
          </div>
          
          <div className="border-t border-gray-600 p-2 flex justify-between">
            <button 
              className="text-xs text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              关闭
            </button>
            <button 
              className="text-xs text-teal-500 hover:text-teal-400"
              onClick={() => setIsOpen(false)}
            >
              应用
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownSearchFilter;