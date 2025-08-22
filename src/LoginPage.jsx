import React, { useState, useEffect } from 'react';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [countdown, setCountdown] = useState(3);

  // 添加自动跳过登录的计时器
  useEffect(() => {
    const timer = setTimeout(() => {
      onLogin();
    }, 3000);

    // 倒计时显示
    const countdownInterval = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    // 如果用户点击了页面上的任何元素，清除计时器
    const handleUserInteraction = () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [onLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 直接登录，无需验证
    onLogin();
  };

  return (
    <div className="h-screen w-screen bg-[#0f1524] flex items-center justify-center">
      {/* 登录区域 */}
      <div className="w-full max-w-sm">
        {/* Logo 区域 */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2563eb] rounded-lg mr-3">
              <span className="text-white text-2xl font-bold">M</span>
            </div>
            <h2 className="text-3xl font-bold text-[#2563eb]">KZ.AI FOR M365</h2>
          </div>
          <p className="text-gray-400">Sign in to your account</p>
        </div>

        {/* 登录表单 */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#1a2332] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#1a2332] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#2563eb] focus:ring-[#2563eb] border-gray-600 rounded bg-[#1a2332]"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-[#2563eb] hover:text-[#1d4ed8]">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#4f46e5] hover:bg-[#4338ca] hover:shadow-lg hover:scale-105 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-[#4f46e5] focus:ring-offset-2 focus:ring-offset-[#0f1524] active:scale-95"
          >
            Sign In
          </button>
        </form>

        {/* 底部链接 */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-[#2563eb] hover:text-[#1d4ed8] font-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;