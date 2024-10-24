import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import AuthTabs from '../components/AuthTabs';
import InputField from '../components/InputField';

function Auth() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    console.log('Form submitted:', formData);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert(`${activeTab === 'login' ? 'Logged in' : 'Registered'} successfully!`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <AuthTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <form onSubmit={handleSubmit} className="space-y-4">
          {activeTab === 'register' && (
            <InputField
              label="Full Name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              name="name"
            />
          )}

          <InputField
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            name="email"
          />

          <InputField
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            name="password"
          />

          {activeTab === 'register' && (
            <InputField
              label="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              name="confirmPassword"
            />
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            {activeTab === 'login' ? (
              <>
                <Mail className="h-4 w-4" />
                <span>Sign In</span>
              </>
            ) : (
              <>
                <User className="h-4 w-4" />
                <span>Create Account</span>
              </>
            )}
          </button>

          {activeTab === 'login' && (
            <p className="text-center text-sm text-gray-600 mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Forgot your password?
              </a>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Auth;