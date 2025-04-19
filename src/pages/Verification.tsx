
import React, { useState } from 'react';
import Logo from '../components/Logo';
import OtpInput from '../components/auth/OtpInput';

const Verification = () => {
  const [otp, setOtp] = useState('');
  const email = "tynisha****@gmail.com";
  
  const handleVerify = () => {
    // Add verification logic here
    console.log({ otp });
    // Navigate to dashboard on success
    window.location.href = '/dashboard';
  };
  
  const handleResendCode = () => {
    // Add resend code logic here
    console.log('Resend code');
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
        
        <h1 className="text-2xl font-bold mb-2">Enter verification code</h1>
        <p className="text-gray-600 mb-6">
          We have just sent a verification code to {email}
        </p>
        
        <OtpInput 
          length={4} 
          value={otp} 
          onChange={setOtp} 
        />
        
        <button 
          className="text-jadeite hover:underline text-sm mt-4 block mx-auto"
          onClick={handleResendCode}
        >
          Send the code again
        </button>
        
        <button 
          className="zosale-button w-full mt-6"
          onClick={handleVerify}
          disabled={otp.length !== 4}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default Verification;
