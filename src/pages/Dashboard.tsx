
import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import StatCard from '../components/charts/StatCard';
import { BarChart, LineChart, DonutChart, WeeklyBarChart } from '../components/charts';
import { DollarSign, ShoppingCart } from 'lucide-react';

// Sample data
const income = [
  { name: 'Mon', value: 40 },
  { name: 'Tue', value: 30 },
  { name: 'Wed', value: 45 },
  { name: 'Thu', value: 50 },
  { name: 'Fri', value: 35 }
];

const orders = [
  { name: 'Mon', value: 20 },
  { name: 'Tue', value: 30 },
  { name: 'Wed', value: 40 },
  { name: 'Thu', value: 25 },
  { name: 'Fri', value: 35 }
];

const monthlyData = [
  { name: 'Jan', organic: 4000, professional: 2400 },
  { name: 'Feb', organic: 5000, professional: 4000 },
  { name: 'Mar', organic: 4500, professional: 3800 },
  { name: 'Apr', organic: 6000, professional: 3000 },
  { name: 'May', organic: 4200, professional: 5800 },
  { name: 'Jun', organic: 5000, professional: 4000 },
  { name: 'Jul', organic: 5500, professional: 6000 },
];

const weeklyData = [
  { name: '24 Jan', website: 400, google: 240 },
  { name: '25 Jan', website: 300, google: 450 },
  { name: '26 Jan', website: 200, google: 300 },
  { name: '27 Jan', website: 500, google: 400 },
  { name: '28 Jan', website: 350, google: 290 },
  { name: '29 Jan', website: 450, google: 380 },
];

const donutData = [
  { name: 'Google', value: 400, color: '#BDED2B' },
  { name: 'Website', value: 800, color: '#39D0AC' },
  { name: 'Others', value: 300, color: '#F3F4F6' },
];

const recentOrders = [
  {
    id: '01',
    product: 'Shirt Creme',
    productId: '#A4064B',
    date: 'March 24, 2022',
    time: '09:20 AM',
    status: 'Received',
    price: 130,
    customer: {
      name: 'Jenny Wilson',
      company: 'Branding'
    },
    img: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: '02',
    product: 'Shirt Creme',
    productId: '#A4064B',
    date: 'March 24, 2022',
    time: '09:20 AM',
    status: 'Shipping',
    price: 130,
    customer: {
      name: 'Devon Lane',
      company: 'Branding'
    },
    img: 'https://randomuser.me/api/portraits/men/33.jpg'
  },
];

const Dashboard = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <StatCard
              icon={<DollarSign size={20} />}
              title="New Net Income"
              value="$8,245.00"
              trend={{ value: "0.5%", isPositive: false }}
              chart={<BarChart data={income} dataKey="value" />}
              avatars={[
                'https://randomuser.me/api/portraits/men/32.jpg',
                'https://randomuser.me/api/portraits/women/44.jpg',
                'https://randomuser.me/api/portraits/men/33.jpg'
              ]}
            />
            
            <StatCard
              icon={<ShoppingCart size={20} />}
              title="Total Order"
              value="1,256"
              trend={{ value: "1.0%", isPositive: true }}
              chart={<BarChart data={orders} dataKey="value" color="#39D0AC" />}
              avatars={[
                'https://randomuser.me/api/portraits/men/32.jpg',
                'https://randomuser.me/api/portraits/women/44.jpg',
                'https://randomuser.me/api/portraits/men/33.jpg'
              ]}
            />
            
            <StatCard
              icon={<DollarSign size={20} />}
              title="Average Sales"
              value="1,256"
              trend={{ value: "1.0%", isPositive: true }}
              chart={<BarChart data={orders} dataKey="value" color="#39D0AC" />}
              avatars={[
                'https://randomuser.me/api/portraits/men/32.jpg',
                'https://randomuser.me/api/portraits/women/44.jpg',
                'https://randomuser.me/api/portraits/men/33.jpg'
              ]}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 dashboard-card">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-sm text-gray-500">Overall sales</div>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-bold">$56,345.98</div>
                    <div className="bg-jadeite text-white text-xs px-2 py-1 rounded">
                      +23.5%
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <span>Last 7 month</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <div className="flex gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-jadeite"></span>
                  <span className="text-sm">Organic</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-cacophony"></span>
                  <span className="text-sm">Professional</span>
                </div>
              </div>
              
              <LineChart 
                data={monthlyData}
                series={[
                  { dataKey: 'organic', color: '#39D0AC', name: 'Organic' },
                  { dataKey: 'professional', color: '#BDED2B', name: 'Professional' }
                ]}
              />
              
              <div className="mt-4 bg-jadeite/10 p-4 rounded-lg inline-block">
                <div className="text-sm text-gray-500">Net sales</div>
                <div className="text-lg font-bold">$52,657.00</div>
              </div>
            </div>
            
            <div className="dashboard-card">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">Sales Report</h3>
                <button className="flex items-center gap-2 text-sm text-gray-500 px-3 py-1 bg-gray-100 rounded">
                  Month
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-col items-center">
                <DonutChart data={donutData} />
                
                <div className="grid grid-cols-3 gap-6 mt-4 w-full">
                  <div className="text-center">
                    <div className="text-sm">47%</div>
                    <div className="w-4 h-4 bg-yellow-400 mx-auto mb-1 rounded-sm"></div>
                    <div className="text-xs text-gray-500">Google</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm">28%</div>
                    <div className="w-4 h-4 bg-jadeite mx-auto mb-1 rounded-sm"></div>
                    <div className="text-xs text-gray-500">Personal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm">18%</div>
                    <div className="w-4 h-4 bg-gray-200 mx-auto mb-1 rounded-sm"></div>
                    <div className="text-xs text-gray-500">others</div>
                  </div>
                </div>
                
                <button className="zosale-button w-full mt-8">
                  Deposit now
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 dashboard-card">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">Recent Order</h3>
                <button className="text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-left text-gray-500 text-sm">
                      <th className="pb-3 font-medium">No</th>
                      <th className="pb-3 font-medium">User Name</th>
                      <th className="pb-3 font-medium">Order Date</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">Price</th>
                      <th className="pb-3 font-medium">Customers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="py-3">{order.id}</td>
                        <td className="py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-200 rounded-md overflow-hidden">
                              <img src={order.img} alt={order.product} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <div className="font-medium">{order.product}</div>
                              <div className="text-xs text-gray-500">{order.productId}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3">
                          <div>{order.date}</div>
                          <div className="text-xs text-gray-500">{order.time}</div>
                        </td>
                        <td className="py-3">
                          <span className={`px-3 py-1 text-xs rounded-md ${
                            order.status === 'Received' 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-yellow-100 text-yellow-600'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 font-medium">${order.price}</td>
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                              <img src={order.img} alt={order.customer.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <div className="font-medium">{order.customer.name}</div>
                              <div className="text-xs text-gray-500">{order.customer.company}</div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="dashboard-card">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">Weekly Transaction Summary</h3>
                <div className="flex items-center gap-2 text-sm">
                  <span>Last 7 month</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <WeeklyBarChart data={weeklyData} />
              
              <div className="grid grid-cols-6 gap-2 text-center text-xs text-gray-500 mt-4">
                <div>24 Jan</div>
                <div>25 Jan</div>
                <div>26 Jan</div>
                <div>27 Jan</div>
                <div>28 Jan</div>
                <div>29 Jan</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
