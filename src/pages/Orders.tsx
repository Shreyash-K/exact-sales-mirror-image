
import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';

const orderTabs = ['All Orders', 'Drafs', 'Shipping', 'Completed', 'Canceled'];

const orderData = [
  {
    id: '#12415346512',
    date: '2/5/2022 06:24 AM',
    from: 'Marquezz',
    to: 'Samuel',
    amount: -455,
    status: 'CANCELED',
    negative: true,
    icon: 'arrow-up',
    iconColor: 'bg-cacophony'
  },
  {
    id: '#12415346563',
    date: '2/5/2020 06:24 AM',
    from: 'Marquezz',
    to: 'Cindy',
    amount: 5553,
    status: 'COMPLETED',
    negative: false,
    icon: 'arrow-down',
    iconColor: 'bg-jadeite'
  },
  {
    id: '#12415346563',
    date: '2/5/2020 06:24 AM',
    from: 'Marquezz',
    to: 'Cindy',
    amount: 5553,
    status: 'COMPLETED',
    negative: false,
    icon: 'arrow-down',
    iconColor: 'bg-jadeite'
  },
  {
    id: '#12415346125',
    date: '2/5/2020 06:24 AM',
    from: 'Marquezz',
    to: 'David',
    amount: -12768,
    status: 'PENDING',
    negative: true,
    icon: 'arrow-up',
    iconColor: 'bg-cacophony'
  },
  {
    id: '#12415346125',
    date: '2/5/2020 06:24 AM',
    from: 'Marquezz',
    to: 'Samuel',
    amount: -455,
    status: 'CANCELED',
    negative: true,
    icon: 'arrow-up',
    iconColor: 'bg-cacophony'
  },
  {
    id: '#12415346125',
    date: '2/5/2020 06:24 AM',
    from: 'Marquezz',
    to: 'David',
    amount: -12768,
    status: 'PENDING',
    negative: true,
    icon: 'arrow-up',
    iconColor: 'bg-cacophony'
  }
];

const OrderList = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1">
        <DashboardHeader 
          username="Cody Fisher" 
          role="Digital Creator" 
          profileImage="https://randomuser.me/api/portraits/women/44.jpg" 
        />
        
        <main className="p-6">
          <div className="mb-4">
            <h1 className="text-2xl font-bold">Orders - List</h1>
            <p className="text-gray-500">Let's check your store today</p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {orderTabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === index
                        ? 'border-jadeite text-jadeite'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="mt-6">
              <div className="flex gap-4 mb-4">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search by ID, product, or others..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-jadeite focus:border-jadeite"
                  />
                </div>
                
                <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Filters
                </button>
                
                <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  April 11 - April 24
                </button>
                
                <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </button>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="w-12 px-6 py-3 text-left">
                        <input type="checkbox" className="rounded text-jadeite focus:ring-jadeite" />
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                          Transaction ID
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                          </svg>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                          Date
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                          </svg>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                          From
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                          </svg>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                          To
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                          </svg>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                          Amount
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                          </svg>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                          Status
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                          </svg>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orderData.map((order, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <input type="checkbox" className="rounded text-jadeite focus:ring-jadeite" />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className={`w-8 h-8 flex items-center justify-center rounded-md mr-3 text-white ${order.iconColor}`}>
                              {order.icon === 'arrow-up' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                            </div>
                            {order.id}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {order.date}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {order.from}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-2">
                              <img src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${30 + index}.jpg`} alt={order.to} className="w-full h-full object-cover" />
                            </div>
                            {order.to}
                          </div>
                        </td>
                        <td className={`px-6 py-4 font-medium ${order.negative ? 'text-red-500' : 'text-green-600'}`}>
                          {order.negative ? '-' : '+'}${Math.abs(order.amount).toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-md text-sm font-medium ${
                            order.status === 'COMPLETED' 
                              ? 'text-green-600 bg-green-100' 
                              : order.status === 'CANCELED'
                                ? 'text-red-600 bg-red-100'
                                : 'text-yellow-600 bg-yellow-100'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">
                    Show result:
                  </p>
                  <select className="ml-2 block w-16 rounded-md border-gray-300 py-1 pl-3 pr-6 text-sm focus:border-jadeite focus:outline-none focus:ring-jadeite">
                    <option>6</option>
                    <option>12</option>
                    <option>24</option>
                  </select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                    1
                  </a>
                  <a href="#" className="relative inline-flex items-center rounded-md border border-transparent bg-jadeite px-3 py-2 text-sm font-medium text-white">
                    2
                  </a>
                  <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                    3
                  </a>
                  <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                    4
                  </a>
                  <span className="text-gray-500">...</span>
                  <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                    20
                  </a>
                  <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrderList;
