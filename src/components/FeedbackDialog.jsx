import React, { useState } from 'react';

const FeedbackDialog = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    contact: ''
  });

  const feedbackTypes = [
    { value: '', label: 'Select feedback type' },
    { value: 'bug', label: 'Bug Report' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'improvement', label: 'Improvement Suggestion' },
    { value: 'general', label: 'General Feedback' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 验证必填字段
    if (!formData.type || !formData.description.trim()) {
      alert('Please fill in the feedback type and description.');
      return;
    }

    // 这里可以添加提交逻辑，比如发送到API
    console.log('Feedback submitted:', formData);
    
    // 重置表单
    setFormData({
      type: '',
      description: '',
      contact: ''
    });
    
    // 关闭对话框
    onClose();
    
    // 显示成功消息
    alert('Thank you for your feedback!');
  };

  const handleClose = () => {
    // 重置表单
    setFormData({
      type: '',
      description: '',
      contact: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-600">
          <h2 className="text-xl font-semibold text-white">Feedback</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Type <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.type}
              onChange={(e) => handleInputChange('type', e.target.value)}
              className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-700 text-white"
              required
            >
              {feedbackTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Your feedback/comment"
              rows={4}
              className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400 resize-none bg-gray-700 text-white"
              required
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Contact
            </label>
            <input
              type="text"
              value={formData.contact}
              onChange={(e) => handleInputChange('contact', e.target.value)}
              placeholder="Your contact info"
              className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400 bg-gray-700 text-white"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackDialog;