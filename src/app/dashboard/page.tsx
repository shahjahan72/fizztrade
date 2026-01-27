'use client';

import { BarChart3, ShoppingBag, FileText, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    { label: 'Total Orders', value: '24', icon: ShoppingBag, color: 'bg-blue-50 text-primary' },
    { label: 'Pending Requests', value: '5', icon: FileText, color: 'bg-yellow-50 text-yellow-600' },
    { label: 'Revenue', value: '$2,450', icon: TrendingUp, color: 'bg-green-50 text-secondary' },
    { label: 'Products Listed', value: '12', icon: BarChart3, color: 'bg-purple-50 text-purple-600' },
  ];

  return (
    <div className="p-6 md:p-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-heading font-bold text-dark mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your business overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-gray-600 text-sm font-semibold mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-dark">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-dark mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {[
              { id: '#1001', product: 'Wireless Headphones', amount: '$199.99', status: 'Delivered' },
              { id: '#1002', product: 'Leather Wallet', amount: '$45.99', status: 'Processing' },
              { id: '#1003', product: 'Water Bottle', amount: '$34.50', status: 'Pending' },
            ].map((order, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <p className="font-semibold text-dark text-sm">{order.product}</p>
                  <p className="text-xs text-gray-500">{order.id}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary text-sm">{order.amount}</p>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    order.status === 'Delivered' ? 'bg-green-100 text-secondary' :
                    order.status === 'Processing' ? 'bg-blue-100 text-primary' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-dark mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <a href="/dashboard/my-store" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-primary font-semibold transition-colors">
              + Add New Product
            </a>
            <a href="/dashboard/service-requests" className="block p-4 bg-green-50 hover:bg-green-100 rounded-lg text-secondary font-semibold transition-colors">
              View Service Requests
            </a>
            <a href="/dashboard/orders" className="block p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-purple-600 font-semibold transition-colors">
              Manage Orders
            </a>
            <a href="/dashboard/settings" className="block p-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-dark font-semibold transition-colors">
              Update Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
