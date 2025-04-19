
import React, { ReactNode } from 'react';
import Navbar from '../Navbar';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex flex-1">
        <div className="flex-1 p-8 md:p-12 lg:p-16 flex items-center justify-center">
          <div className="w-full max-w-md">
            {children}
          </div>
        </div>
        
        <div className="hidden md:block md:flex-1 bg-interface-1 text-white p-8 relative overflow-hidden">
          <div className="absolute top-10 right-10 w-12 h-12 text-yellow-300">
            {/* Yellow highlight */}
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M0 40 L40 0 L40 40 Z"></path>
            </svg>
          </div>
          
          <div className="absolute top-1/3 right-1/4 text-jadeite">
            {/* Curved line */}
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M196 147.5C184 127.5 124.5 40.5 54 92.5C-16.5 144.5 34.5 203.5 103.5 180C172.5 156.5 208 167.5 196 147.5Z" stroke="currentColor" strokeWidth="3"/>
            </svg>
          </div>

          <div className="relative z-10 h-full flex flex-col">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-8">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-sm text-white/70">Overall sales</p>
                  <h3 className="text-xl font-bold">$56,345.98</h3>
                </div>
                <div className="bg-jadeite text-white text-xs px-2 py-1 rounded flex items-center">
                  +23.5%
                </div>
              </div>
              
              <div className="flex justify-between mb-4">
                <div className="text-xs">Apr 25 - Apr 29</div>
                <button className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              
              <div className="h-40 bg-jadeite/20 rounded-lg relative">
                {/* Placeholder for sales chart */}
                <div className="absolute bottom-0 w-full">
                  <div className="flex items-end h-32">
                    <div className="w-1/5 h-16 bg-jadeite rounded-t-md mx-1"></div>
                    <div className="w-1/5 h-20 bg-jadeite rounded-t-md mx-1"></div>
                    <div className="w-1/5 h-28 bg-jadeite rounded-t-md mx-1"></div>
                    <div className="w-1/5 h-24 bg-jadeite rounded-t-md mx-1"></div>
                    <div className="w-1/5 h-14 bg-jadeite rounded-t-md mx-1"></div>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/90 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-jadeite"></span>
                    <span className="text-xs text-gray-800">Website</span>
                    <span className="text-xs font-semibold">$45,567.0*</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-cacophony"></span>
                    <span className="text-xs text-gray-800">Google</span>
                    <span className="text-xs font-semibold">$4,980.0*</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    <span className="text-xs text-gray-800">Others</span>
                    <span className="text-xs font-semibold">$0.0*</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 mt-auto">
              <div className="flex justify-between mb-6">
                <h3 className="text-interface-1 font-semibold">Sales report</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Month</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-32 h-32 mx-auto">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="20" />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      fill="none" 
                      stroke="#39D0AC" 
                      strokeWidth="20" 
                      strokeDasharray="251.2" 
                      strokeDashoffset="50.24" 
                      transform="rotate(-90 50 50)" 
                    />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      fill="none" 
                      stroke="#BDED2B" 
                      strokeWidth="20" 
                      strokeDasharray="251.2" 
                      strokeDashoffset="200.96" 
                      transform="rotate(-90 50 50)" 
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-jadeite" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex justify-center gap-8 mt-6">
                  <div className="text-center">
                    <div className="font-bold">50%</div>
                    <div className="text-xs text-gray-500">Website</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">20%</div>
                    <div className="text-xs text-gray-500">Google</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">30%</div>
                    <div className="text-xs text-gray-500">Others</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h2 className="text-3xl font-bold mb-4">
                The perfect analytics tool for your business
              </h2>
              <p className="text-white/70 leading-relaxed">
                Create an ecommerce website backed by powerful tools
                that help you find customers, drive sales, and manage your
                day-to-day.
              </p>
              
              <div className="flex items-center justify-center gap-2 mt-8">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span className="w-2 h-2 rounded-full bg-white/50"></span>
                <span className="w-2 h-2 rounded-full bg-white/50"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
