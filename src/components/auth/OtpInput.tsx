
import React, { useRef, useState, useEffect, KeyboardEvent } from 'react';

interface OtpInputProps {
  length: number;
  value: string;
  onChange: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length, value, onChange }) => {
  const [otp, setOtp] = useState<string[]>(value.split('').slice(0, length).concat(Array(length - value.length).fill('')));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value;
    if (val.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = val;
      setOtp(newOtp);
      onChange(newOtp.join(''));
      
      // Move to next input if current input is filled
      if (val !== '' && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };
  
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      // Move to previous input on backspace if current input is empty
      inputRefs.current[index - 1]?.focus();
    }
  };
  
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').slice(0, length);
    
    const newOtp = [...otp];
    pastedData.split('').forEach((char, index) => {
      if (index < length) {
        newOtp[index] = char;
      }
    });
    
    setOtp(newOtp);
    onChange(newOtp.join(''));
    
    // Focus on the last filled input or the first empty one
    const lastFilledIndex = pastedData.length - 1;
    if (lastFilledIndex < length - 1) {
      inputRefs.current[lastFilledIndex + 1]?.focus();
    }
  };
  
  return (
    <div className="flex gap-3 justify-center">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          pattern="[0-9]"
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={index === 0 ? handlePaste : undefined}
          className="w-14 h-14 text-center text-xl font-bold bg-gray-100 border border-gray-200 rounded-md focus:border-jadeite focus:ring-1 focus:ring-jadeite focus:outline-none"
        />
      ))}
    </div>
  );
};

export default OtpInput;
