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

        {/* 第三方登录按钮 */}
        <div className="mt-6 space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#0f1524] text-gray-400">Or continue with</span>
            </div>
          </div>
          
          <div className="flex space-x-3">
            {/* Microsoft 登录按钮 */}
            <button
              type="button"
              onClick={() => {
                // Microsoft 登录逻辑
                console.log('Microsoft login clicked');
                onLogin(); // 临时直接登录
              }}
              className="flex-1 flex items-center justify-center px-4 py-3 bg-[#1a2332] border border-gray-600 rounded-lg text-white hover:bg-[#2a3441] hover:border-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2 focus:ring-offset-[#0f1524]"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
              </svg>
              <span className="text-sm font-medium">Microsoft</span>
            </button>

            {/* Google 登录按钮 */}
            <button
              type="button"
              onClick={() => {
                // Google 登录逻辑
                console.log('Google login clicked');
                onLogin(); // 临时直接登录
              }}
              className="flex-1 flex items-center justify-center px-4 py-3 bg-[#1a2332] border border-gray-600 rounded-lg text-white hover:bg-[#2a3441] hover:border-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2 focus:ring-offset-[#0f1524]"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-medium">Google</span>
            </button>
          </div>
        </div>

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