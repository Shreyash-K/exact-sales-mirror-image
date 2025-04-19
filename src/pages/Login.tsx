
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import PasswordInput from '../components/auth/PasswordInput';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    console.log({ email, password, rememberMe });
    // Navigate to dashboard on success
    window.location.href = '/dashboard';
  };
  
  return (
    <AuthLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Login to your account</h1>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="zosale-input"
              required
            />
          </div>
          
          <div>
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="rounded border-gray-300 text-jadeite focus:ring-jadeite mr-2"
              />
              <span>Remember me</span>
            </label>
            
            <Link to="/forgot-password" className="text-jadeite hover:underline">
              Forgot Password?
            </Link>
          </div>
          
          <button type="submit" className="zosale-button w-full">
            Sign in with email
          </button>
        </div>
      </form>
      
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-3 bg-white text-gray-500">
              Or login with
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          <button className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
              <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/>
              <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09c1.97 3.92 6.02 6.62 10.71 6.62z"/>
              <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29v-3.09h-3.98c-.8 1.61-1.26 3.43-1.26 5.38s.46 3.77 1.26 5.38l3.98-3.09z"/>
              <path fill="#EA4335" d="M12.255 5.04c1.77 0 3.35.61 4.6 1.8l3.42-3.42c-2.07-1.94-4.78-3.13-8.02-3.13-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/>
            </svg>
            Google
          </button>
          
          <button className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
              <path fill="#000000" d="M17.05 20.28c-.98.95-2.05.8-3.08.4-1.09-.42-2.09-.42-3.19 0-1.38.53-2.25.37-3.12-.41C3.3 16.22 3.74 10.15 8.14 9.75c1.38-.05 2.36.52 3.27.51.92-.01 1.8-.62 3.05-.53 1.23.09 2.13.46 2.76 1.15-2.21 1.16-1.86 4.22.3 5.05-1.01 2.19-2.48 4.36-4.47 4.35zM12.24 9.5c-.08-2.99 2.55-4.39 2.62-4.43-1.48-2.1-3.69-2.36-4.43-2.36-1.8-.12-3.65 1.08-4.41 1.08-.82 0-1.96-1.06-3.38-1.03-1.67.03-3.27 1.03-4.11 2.53-1.84 3.17-.47 7.84 1.28 10.41.9 1.25 1.92 2.65 3.26 2.59 1.34-.06 1.83-.83 3.45-.83 1.58 0 2.07.83 3.44.8 1.44-.03 2.33-1.26 3.16-2.53.66-.92.89-1.8 1.13-2.33-3.19-1.13-2.99-5.42-.01-5.9z"/>
            </svg>
            Apple
          </button>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <span className="text-gray-600">Don't have an account? </span>
        <Link to="/signup" className="text-jadeite hover:underline font-medium">
          Get Started
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Login;
