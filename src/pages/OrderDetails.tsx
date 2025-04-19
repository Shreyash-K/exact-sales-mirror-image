
import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';

const OrderDetails = () => {
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
            <h1 className="text-2xl font-bold">Order Details</h1>
            <p className="text-gray-500">Let's check your store today</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Order Details
              </button>
              
              <div className="ml-auto flex gap-3">
                <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
                  </svg>
                  Print order
                </button>
                
                <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                    <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  Refund items
                </button>
                
                <div className="relative">
                  <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50">
                    More actions
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="border border-gray-100 rounded-lg p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium text-green-600">Unfulfilled</span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden">
                      <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">Pattern top with knot</h3>
                      <p className="text-sm text-gray-500">ID: 08813ANT</p>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-medium">$210.98</p>
                      <p className="text-sm text-gray-500">Qty: 1</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="flex-1 py-2 border border-jadeite text-jadeite rounded-lg hover:bg-jadeite hover:bg-opacity-5">
                      Mark as fulfilled
                    </button>
                    
                    <button className="flex-1 py-2 bg-jadeite text-white rounded-lg hover:bg-opacity-90">
                      Create shipping label
                    </button>
                  </div>
                </div>
                
                <div className="border border-gray-100 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-jadeite/20 rounded-full flex items-center justify-center text-jadeite">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium text-jadeite">Paid</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">$210.98</span>
                        <span className="text-sm text-gray-500">1 item</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">$10.15</span>
                        <span className="text-sm text-gray-500">AU Standar Delivery (1.00 kg)</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">$2.75</span>
                        <span className="text-sm text-gray-500">GST (AU) 10%</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between border-t border-gray-200 pt-4">
                      <span className="text-gray-600">Total</span>
                      <div>
                        <span className="font-medium">$2.75</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between border-t border-gray-200 pt-4">
                      <span className="text-gray-600">Paid by customer</span>
                      <div>
                        <span className="font-bold text-lg">$223.88</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="border border-gray-100 rounded-lg p-6 mb-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-medium">Customer</h3>
                    <button className="text-jadeite">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      D
                    </div>
                    
                    <div>
                      <h3 className="font-medium">Darcel Ballentine</h3>
                      <p className="text-sm text-gray-500">10 orders</p>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-100 rounded-lg p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Contact Information</h3>
                    <button className="text-jadeite text-sm">Edit</button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <span className="text-sm">darcelballentine@mail.com</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <span className="text-sm">(671) 555-0110</span>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-100 rounded-lg p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Shipping Address</h3>
                    <button className="text-jadeite text-sm">Edit</button>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">
                      2715 Ash Dr. San Jose, South Dakota<br />
                      83475
                    </span>
                  </div>
                </div>
                
                <div className="border border-gray-100 rounded-lg p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Billing Address</h3>
                    <button className="text-jadeite text-sm">Edit</button>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Same as shipping address</span>
                  </div>
                </div>
                
                <div className="border border-gray-100 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Note</h3>
                    <button className="text-jadeite text-sm">Edit</button>
                  </div>
                  
                  <p className="text-sm text-gray-500">No notes from customer</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrderDetails;
