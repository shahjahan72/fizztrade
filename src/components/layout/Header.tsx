'use client';

import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container-custom flex h-16 items-center justify-between">
          {/* Logo & Tagline */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div>
              <h1 className="font-heading text-2xl font-bold text-primary">FizzTrade</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Your 360° Partner</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="hidden lg:flex items-center relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="h-9 w-64 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <Search className="absolute right-3 h-4 w-4 text-gray-400" />
            </div>
            <div className="hidden md:flex gap-2">
              <Link href="/login">
                <button className="px-4 py-2 text-dark hover:bg-gray-100 rounded-lg font-medium transition-colors">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 font-medium transition-colors">
                  Get Started
                </button>
              </Link>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="container-custom py-4 space-y-4">
              <div className="flex items-center relative mb-4">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <Search className="absolute right-3 h-4 w-4 text-gray-400" />
              </div>
              <nav className="space-y-3">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className="block text-gray-700 hover:text-primary transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="border-t pt-4 space-y-2">
                <Link href="/login" className="block w-full">
                  <button className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors">
                    Login
                  </button>
                </Link>
                <Link href="/register" className="block w-full">
                  <button className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 font-medium transition-colors">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}