import React from 'react';

interface TabProps {
  activeTab: 'login' | 'register';
  onTabChange: (tab: 'login' | 'register') => void;
}

function AuthTabs({ activeTab, onTabChange }: TabProps) {
  return (
    <div className="flex border-b border-gray-200 mb-6">
      <button
        className={`flex-1 py-3 text-center font-medium ${
          activeTab === 'login'
            ? 'text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        onClick={() => onTabChange('login')}
      >
        Login
      </button>
      <button
        className={`flex-1 py-3 text-center font-medium ${
          activeTab === 'register'
            ? 'text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        onClick={() => onTabChange('register')}
      >
        Register
      </button>
    </div>
  );
}

export default AuthTabs;