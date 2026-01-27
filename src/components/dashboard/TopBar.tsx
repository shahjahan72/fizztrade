'use client';

import { Bell, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function TopBar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = () => {
    if (confirm('Are you sure you want to log out?')) {
      // In a real app, this would clear the session
      window.location.href = '/login';
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Left Side - Title */}
        <div className="hidden md:block">
          <h1 className="text-2xl font-heading font-bold text-dark">Dashboard</h1>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Menu className="w-6 h-6 text-dark" />
        </button>

        {/* Right Side - Actions */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors text-dark"
            >
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full"></span>
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-bold text-dark">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {[
                    {
                      title: 'New Order Received',
                      desc: 'You have a new order from a buyer',
                      time: '5 min ago',
                    },
                    {
                      title: 'Product Listed',
                      desc: 'Your product has been listed successfully',
                      time: '1 hour ago',
                    },
                    {
                      title: 'Payment Received',
                      desc: '$250 has been credited to your account',
                      time: '2 hours ago',
                    },
                  ].map((notif, idx) => (
                    <div
                      key={idx}
                      className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <p className="font-semibold text-sm text-dark">{notif.title}</p>
                      <p className="text-xs text-gray-600 mt-1">{notif.desc}</p>
                      <p className="text-xs text-gray-400 mt-2">{notif.time}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-gray-200 text-center">
                  <a href="#" className="text-sm text-primary font-semibold hover:text-blue-700 transition-colors">
                    View all notifications
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* User Menu Divider */}
          <div className="h-6 w-px bg-gray-200"></div>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold text-dark">John Doe</p>
              <p className="text-xs text-gray-500">Vendor</p>
            </div>
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
              JD
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="p-2 hover:bg-red-50 rounded-lg transition-colors text-gray-600 hover:text-red-600"
            title="Logout"
          >
            <LogOut className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
