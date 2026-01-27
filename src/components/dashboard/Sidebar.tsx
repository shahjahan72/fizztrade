'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Store, User, FileText, ShoppingBag, BarChart3 } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      href: '/dashboard',
      icon: BarChart3,
      label: 'Overview',
    },
    {
      href: '/dashboard/my-store',
      icon: Store,
      label: 'My Store',
    },
    {
      href: '/dashboard/service-requests',
      icon: FileText,
      label: 'Service Requests',
    },
    {
      href: '/dashboard/orders',
      icon: ShoppingBag,
      label: 'Orders',
    },
    {
      href: '/dashboard/settings',
      icon: User,
      label: 'Profile Settings',
    },
  ];

  return (
    <aside className="w-64 bg-dark text-white h-screen sticky top-0 flex flex-col shadow-lg">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-2xl font-heading font-bold text-primary">FizzTrade</h2>
        <p className="text-xs text-gray-400 mt-1">Business Dashboard</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${
                isActive
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-semibold">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer - User Info Preview */}
      <div className="p-6 border-t border-gray-700">
        <div className="bg-gray-800 rounded-lg p-4">
          <p className="text-xs text-gray-400 mb-2">Logged in as</p>
          <p className="text-sm font-semibold text-white truncate">John Doe</p>
          <p className="text-xs text-gray-400 truncate">john@example.com</p>
        </div>
      </div>
    </aside>
  );
}
