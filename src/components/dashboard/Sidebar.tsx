
import React from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Rss, 
  Inbox, 
  PiggyBank, 
  BarChart3, 
  Plus 
} from 'lucide-react';
import Logo from '../Logo';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  
  const menuItems = [
    { 
      label: 'Dashboard', 
      icon: <LayoutDashboard className="w-5 h-5" />, 
      path: '/dashboard',
      isActive: path === '/dashboard' 
    },
    { 
      label: 'Order Board', 
      icon: <ShoppingBag className="w-5 h-5" />, 
      path: '/orders',
      isActive: path.includes('/orders'),
      badge: 2
    },
    { 
      label: 'Feed', 
      icon: <Rss className="w-5 h-5" />, 
      path: '/feed',
      isActive: path === '/feed' 
    },
    { 
      label: 'Inbox', 
      icon: <Inbox className="w-5 h-5" />, 
      path: '/inbox',
      isActive: path === '/inbox',
      badge: 5 
    },
    { 
      label: 'Savings', 
      icon: <PiggyBank className="w-5 h-5" />, 
      path: '/savings',
      isActive: path === '/savings' 
    },
    { 
      label: 'Sales', 
      icon: <BarChart3 className="w-5 h-5" />, 
      path: '/sales',
      isActive: path === '/sales',
      status: 'active'
    },
  ];

  return (
    <aside className="min-w-[230px] h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-100 flex items-center">
        <Link to="/dashboard" className="flex items-center">
          <Logo />
        </Link>
        <button className="ml-auto text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm-1 6a1 1 0 011-1h6a1 1 0 110 2H3a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="flex flex-col flex-grow">
        <div className="p-4">
          <p className="text-xs uppercase font-semibold text-gray-500 mb-4">OVERVIEW</p>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`zosale-sidebar-item group ${item.isActive ? 'active' : ''}`}
              >
                <span className={`${item.isActive ? 'text-jadeite' : 'text-gray-600'}`}>
                  {item.icon}
                </span>
                <span className="flex-grow">{item.label}</span>
                
                {item.badge && (
                  <span className="bg-interface-1 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
                
                {item.status === 'active' && (
                  <span className="w-2 h-2 rounded-full bg-jadeite"></span>
                )}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="mt-auto p-4 pt-8">
          <p className="text-xs uppercase font-semibold text-gray-500 mb-4">ONBOARDING 12</p>
          <div className="flex space-x-2 mb-8">
            <button className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-jadeite" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-lg bg-jadeite flex items-center justify-center text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          
          <div className="border border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
            <button className="w-12 h-12 rounded-full bg-jadeite flex items-center justify-center text-white mb-2">
              <Plus className="w-6 h-6" />
            </button>
            <p className="text-sm font-semibold mb-1">Add new product</p>
            <p className="text-xs text-gray-500">Or use invite link</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
