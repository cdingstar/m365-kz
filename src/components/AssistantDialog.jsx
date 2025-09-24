import React, { useState } from 'react';
import { X, MessageSquare, Bot, Sparkles } from 'lucide-react';

const AssistantDialog = ({ isOpen, onClose }) => {
  const [selectedModel, setSelectedModel] = useState('');
  const [isStarting, setIsStarting] = useState(false);

  const aiModels = [
    {
      id: 'openai-gpt4',
      name: 'OpenAI GPT-4',
      description: '最先进的语言模型，擅长复杂推理和创意任务',
      icon: '🤖',
      provider: 'OpenAI',
      capabilities: ['文本生成', '代码编写', '数据分析', '创意写作']
    },
    {
      id: 'openai-gpt35',
      name: 'OpenAI GPT-3.5 Turbo',
      description: '快速响应的语言模型，适合日常对话和简单任务',
      icon: '⚡',
      provider: 'OpenAI',
      capabilities: ['快速对话', '文本总结', '简单编程', '问答']
    },
    {
      id: 'claude-3-opus',
      name: 'Claude 3 Opus',
      description: 'Anthropic最强大的模型，在分析和推理方面表现出色',
      icon: '🧠',
      provider: 'Anthropic',
      capabilities: ['深度分析', '逻辑推理', '长文本处理', '代码审查']
    },
    {
      id: 'claude-3-sonnet',
      name: 'Claude 3 Sonnet',
      description: '平衡性能和速度的模型，适合大多数任务',
      icon: '🎯',
      provider: 'Anthropic',
      capabilities: ['平衡性能', '多任务处理', '文档分析', '编程助手']
    },
    {
      id: 'gemini-pro',
      name: 'Google Gemini Pro',
      description: 'Google的多模态AI模型，支持文本和图像处理',
      icon: '💎',
      provider: 'Google',
      capabilities: ['多模态', '图像理解', '代码生成', '数学计算']
    },
    {
      id: 'llama-2-70b',
      name: 'Meta Llama 2 70B',
      description: '开源大语言模型，在代码和推理任务上表现优秀',
      icon: '🦙',
      provider: 'Meta',
      capabilities: ['开源模型', '代码生成', '逻辑推理', '多语言支持']
    }
  ];

  const handleStartChat = () => {
    if (!selectedModel) return;
    
    setIsStarting(true);
    
    // 模拟启动过程
    setTimeout(() => {
      setIsStarting(false);
      // 这里可以添加实际的AI助手启动逻辑
      console.log('Starting chat with model:', selectedModel);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">AI Assistant</h2>
              <p className="text-gray-400 text-sm">选择您的AI助手模型</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiModels.map((model) => (
              <div
                key={model.id}
                onClick={() => setSelectedModel(model.id)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  selectedModel === model.id
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-gray-600 hover:border-gray-500 bg-gray-700/50'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">{model.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{model.name}</h3>
                      <span className="text-xs px-2 py-1 bg-gray-600 rounded text-gray-300">
                        {model.provider}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{model.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {model.capabilities.map((capability, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-gray-600 rounded text-gray-300"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {selectedModel === model.id && (
                  <div className="mt-3 flex items-center text-blue-400">
                    <Sparkles size={16} className="mr-1" />
                    <span className="text-sm">已选择</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-700 bg-gray-750">
          <div className="text-sm text-gray-400">
            {selectedModel ? (
              <span>已选择: {aiModels.find(m => m.id === selectedModel)?.name}</span>
            ) : (
              <span>请选择一个AI模型开始对话</span>
            )}
          </div>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
            >
              取消
            </button>
            <button
              onClick={handleStartChat}
              disabled={!selectedModel || isStarting}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                selectedModel && !isStarting
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isStarting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>启动中...</span>
                </>
              ) : (
                <>
                  <MessageSquare size={16} />
                  <span>开始对话</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantDialog;