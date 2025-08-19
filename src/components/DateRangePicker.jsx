import React, { useState, useRef, useEffect } from 'react';

const DateRangePicker = ({ initialDateRange, onDateRangeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dateRange, setDateRange] = useState(initialDateRange);
  const dropdownRef = useRef(null);

  // 预设选项
  const presets = [
    { label: '本月', value: 'current_month' },
    { label: '上个月', value: 'last_month' },
    { label: '过去30天', value: 'last_30_days' },
    { label: '过去90天', value: 'last_90_days' },
    { label: '今年', value: 'current_year' },
    { label: '去年', value: 'last_year' }
  ];

  // 根据预设计算日期范围
  const calculateDateRange = (preset) => {
    const today = new Date();
    let startDate, endDate;

    switch (preset) {
      case 'current_month':
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        break;
      case 'last_month':
        startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        endDate = new Date(today.getFullYear(), today.getMonth(), 0);
        break;
      case 'last_30_days':
        startDate = new Date(today);
        startDate.setDate(today.getDate() - 30);
        endDate = new Date(today);
        break;
      case 'last_90_days':
        startDate = new Date(today);
        startDate.setDate(today.getDate() - 90);
        endDate = new Date(today);
        break;
      case 'current_year':
        startDate = new Date(today.getFullYear(), 0, 1);
        endDate = new Date(today.getFullYear(), 11, 31);
        break;
      case 'last_year':
        startDate = new Date(today.getFullYear() - 1, 0, 1);
        endDate = new Date(today.getFullYear() - 1, 11, 31);
        break;
      default:
        startDate = new Date(today);
        endDate = new Date(today);
    }

    return formatDateRange(startDate, endDate);
  };

  // 格式化日期为 YYYY/MM/DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  // 格式化日期范围
  const formatDateRange = (startDate, endDate) => {
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  // 处理点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 处理预设选择
  const handlePresetSelect = (preset) => {
    const newDateRange = calculateDateRange(preset);
    setDateRange(newDateRange);
    onDateRangeChange(newDateRange);
    setIsOpen(false);
  };

  // 自定义日期范围选择（简化版，实际应用中可能需要更复杂的日期选择器）
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');

  const handleCustomDateApply = () => {
    if (customStartDate && customEndDate) {
      const newDateRange = `${customStartDate} - ${customEndDate}`;
      setDateRange(newDateRange);
      onDateRangeChange(newDateRange);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-sm text-[#94a3b8] hover:text-white"
      >
        <span className="mr-1">📅</span>
        {dateRange}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-[#334155] border border-[#475569] rounded-md shadow-lg z-50">
          <div className="p-3">
            <h3 className="text-white text-sm font-medium mb-2">选择时间范围</h3>
            
            {/* 预设选项 */}
            <div className="space-y-1 mb-3">
              {presets.map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => handlePresetSelect(preset.value)}
                  className="block w-full text-left px-2 py-1 text-sm text-[#94a3b8] hover:bg-[#475569] hover:text-white rounded"
                >
                  {preset.label}
                </button>
              ))}
            </div>
            
            <div className="border-t border-[#475569] my-2 pt-2">
              <h4 className="text-white text-xs font-medium mb-2">自定义范围</h4>
              
              {/* 自定义日期选择 */}
              <div className="space-y-2">
                <div>
                  <label className="block text-xs text-[#94a3b8] mb-1">开始日期</label>
                  <input
                    type="date"
                    value={customStartDate}
                    onChange={(e) => setCustomStartDate(e.target.value)}
                    className="w-full bg-[#1e293b] border border-[#475569] rounded px-2 py-1 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#94a3b8] mb-1">结束日期</label>
                  <input
                    type="date"
                    value={customEndDate}
                    onChange={(e) => setCustomEndDate(e.target.value)}
                    className="w-full bg-[#1e293b] border border-[#475569] rounded px-2 py-1 text-white text-sm"
                  />
                </div>
                <button
                  onClick={handleCustomDateApply}
                  className="w-full bg-[#2563eb] text-white py-1 rounded text-sm hover:bg-[#1d4ed8]"
                >
                  应用
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;