
import React from 'react';
import { Bell, Mail, Search } from 'lucide-react';

interface DashboardHeaderProps {
  username: string;
  role: string;
  profileImage?: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ username, role, profileImage }) => {
  return (
    <header className="bg-white p-4 flex items-center justify-between border-b border-gray-100">
      <div>
        <h1 className="text-xl font-bold">Hi, {username}</h1>
        <p className="text-sm text-gray-500">Let's check your store today</p>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative max-w-md w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="search" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-jadeite"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <span className="text-sm font-mono border border-gray-300 rounded px-1">⌘ K</span>
          </button>
        </div>
        
        <button className="relative">
          <Mail className="text-gray-600" size={22} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            1
          </span>
        </button>
        
        <button className="relative">
          <Bell className="text-gray-600" size={22} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            5
          </span>
        </button>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-jadeite overflow-hidden">
            {profileImage ? (
              <img src={profileImage} alt={username} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white font-bold">
                {username.charAt(0)}
              </div>
            )}
          </div>
          <div className="text-left hidden md:block">
            <h3 className="font-medium">{username}</h3>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
