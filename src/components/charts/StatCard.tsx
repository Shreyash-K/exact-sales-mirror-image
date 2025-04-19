
import React, { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string | number;
  trend: {
    value: string;
    isPositive: boolean;
  };
  chart?: ReactNode;
  avatars?: string[];
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, trend, chart, avatars = [] }) => {
  return (
    <div className="dashboard-card">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-jadeite/10 flex items-center justify-center text-jadeite">
            {icon}
          </div>
          <span className="text-gray-600 font-medium">{title}</span>
        </div>
        
        {avatars.length > 0 && (
          <div className="flex -space-x-2">
            {avatars.map((avatar, i) => (
              <div 
                key={i} 
                className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white overflow-hidden"
              >
                <img src={avatar} alt="User" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}
        
        <button className="text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </button>
      </div>
      
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-2xl font-bold">{value}</h3>
          <div className="flex items-center gap-1 mt-1">
            <span className={`text-sm ${trend.isPositive ? 'text-green-500' : 'text-red-500'} flex items-center`}>
              {trend.isPositive ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                </svg>
              )}
              {trend.value}
            </span>
            <span className="text-xs text-gray-500">from last week</span>
          </div>
        </div>
        
        {chart && (
          <div className="h-14">
            {chart}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
