import React, { useState, useEffect, useRef } from 'react';

/**
 * 价格范围选择器组件 - 双滑块实现
 * @param {Object} props
 * @param {number} props.minValue - 最小值
 * @param {number} props.maxValue - 最大值
 * @param {Array} props.value - 当前选中的范围 [min, max]
 * @param {function} props.onChange - 值变更时的回调函数
 * @param {string} props.label - 标签文本
 * @param {string} props.className - 额外的CSS类名
 * @param {string} props.inputClassName - 输入框的CSS类名
 * @param {string} props.sliderWidth - 滑块的宽度类名
 */
const PriceRangeFilter = ({
  minValue = 0,
  maxValue = 1000,
  value = [0, 1000],
  onChange,
  label = "Price Range",
  className = "",
  inputClassName = "w-20",
  sliderWidth = "flex-grow"
}) => {
  const [range, setRange] = useState(value);
  const sliderRef = useRef(null);
  
  // 格式化金额，保留两位小数
  const formatCurrency = (value) => {
    return parseFloat(value).toFixed(2);
  };
  
  // 将值转换为百分比位置
  const valueToPercent = (val) => {
    return ((val - minValue) / (maxValue - minValue)) * 100;
  };
  
  // 将百分比位置转换为值
  const percentToValue = (percent) => {
    return minValue + ((maxValue - minValue) * percent) / 100;
  };
  
  // 当外部value变化时更新内部状态
  useEffect(() => {
    if (value) {
      setRange(value);
    }
  }, [value]);
  
  // 处理最小值输入变化
  const handleMinInputChange = (e) => {
    let newMin = parseFloat(e.target.value) || 0;
    
    // 限制在有效范围内
    newMin = Math.max(minValue, Math.min(newMin, range[1] - 1));
    
    const newRange = [newMin, range[1]];
    setRange(newRange);
    onChange && onChange(newRange);
  };
  
  // 处理最大值输入变化
  const handleMaxInputChange = (e) => {
    let newMax = parseFloat(e.target.value) || 0;
    
    // 限制在有效范围内
    newMax = Math.max(range[0] + 1, Math.min(newMax, maxValue));
    
    const newRange = [range[0], newMax];
    setRange(newRange);
    onChange && onChange(newRange);
  };
  
  // 处理最小值滑块变化
  const handleMinSliderChange = (e) => {
    const minPercent = parseInt(e.target.value);
    const newMin = percentToValue(minPercent);
    
    // 确保最小值不超过最大值
    if (newMin < range[1]) {
      const newRange = [newMin, range[1]];
      setRange(newRange);
      onChange && onChange(newRange);
    }
  };
  
  // 处理最大值滑块变化
  const handleMaxSliderChange = (e) => {
    const maxPercent = parseInt(e.target.value);
    const newMax = percentToValue(maxPercent);
    
    // 确保最大值不小于最小值
    if (newMax > range[0]) {
      const newRange = [range[0], newMax];
      setRange(newRange);
      onChange && onChange(newRange);
    }
  };
  
  // 计算滑块轨道的样式
  const trackStyle = {
    left: `${valueToPercent(range[0])}%`,
    width: `${valueToPercent(range[1]) - valueToPercent(range[0])}%`
  };
  
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-1">
          <label className="text-sm font-medium text-gray-300">{label}</label>
        </div>
      )}
      
      <div className="flex items-center space-x-1">
        <input
          type="text"
          value={formatCurrency(range[0])}
          onChange={handleMinInputChange}
          className={`${inputClassName} px-1 py-1 text-xs border border-gray-600 rounded text-gray-300 bg-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500`}
        />
        
        <div className={`relative ${sliderWidth} h-6 flex items-center`} ref={sliderRef}>
          {/* 滑块轨道背景 */}
          <div className="absolute w-full h-1 bg-gray-600 rounded-lg"></div>
          
          {/* 选中区域 */}
          <div 
            className="absolute h-1 bg-blue-500 rounded-lg" 
            style={trackStyle}
          ></div>
          
          {/* 最小值滑块 */}
          <input
            type="range"
            min="0"
            max="100"
            value={valueToPercent(range[0])}
            onChange={handleMinSliderChange}
            className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto cursor-pointer z-10"
            style={{
              // 使滑块只显示圆点
              WebkitAppearance: 'none',
              appearance: 'none'
            }}
          />
          
          {/* 最大值滑块 */}
          <input
            type="range"
            min="0"
            max="100"
            value={valueToPercent(range[1])}
            onChange={handleMaxSliderChange}
            className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto cursor-pointer z-10"
            style={{
              // 使滑块只显示圆点
              WebkitAppearance: 'none',
              appearance: 'none'
            }}
          />
          
          {/* 最小值滑块圆点 */}
          <div 
            className="absolute w-3 h-3 bg-blue-500 rounded-full z-20 -ml-1.5"
            style={{ left: `${valueToPercent(range[0])}%` }}
          ></div>
          
          {/* 最大值滑块圆点 */}
          <div 
            className="absolute w-3 h-3 bg-blue-500 rounded-full z-20 -ml-1.5"
            style={{ left: `${valueToPercent(range[1])}%` }}
          ></div>
        </div>
        
        <input
          type="text"
          value={formatCurrency(range[1])}
          onChange={handleMaxInputChange}
          className={`${inputClassName} px-1 py-1 text-xs border border-gray-600 rounded text-gray-300 bg-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500`}
        />
      </div>
    </div>
  );
};

export default PriceRangeFilter;
