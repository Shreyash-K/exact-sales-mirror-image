
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add forgot password logic here
    console.log({ email });
    // Navigate to reset password page or show success message
    window.location.href = '/reset-password';
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <Logo />
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Reset your password</h1>
        <p className="text-gray-600 mb-6">
          Enter the email address associated with your account and we'll
          send you a link to reset your password.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="zosale-input"
              required
            />
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <Link to="/login" className="text-jadeite hover:underline text-sm">
              Return to login
            </Link>
          </div>
          
          <button type="submit" className="zosale-button w-full">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
