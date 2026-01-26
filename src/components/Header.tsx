"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X, User } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <div className="flex flex-col">
                        <Link href="/" className="font-heading font-bold text-2xl text-primary tracking-tight">
                            FizzTrade
                        </Link>
                        <span className="text-[10px] text-gray-500 font-medium tracking-wide hidden sm:block">
                            Your 360° Partner in Brand Building
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {['Home', 'About Us', 'Services', 'Pricing', 'Blog', 'Contact Us'].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase().replace(' ', '-')}`}
                                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-48 transition-all focus:w-64"
                            />
                            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        </div>

                        <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary px-3 py-2 rounded-lg hover:bg-gray-50 transition-all">
                            <User className="w-4 h-4" />
                            <span>Login</span>
                        </button>

                        <button className="bg-secondary hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5">
                            Contact
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-2">
                    <div className="p-4 space-y-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        </div>

                        <nav className="flex flex-col space-y-2">
                            {['Home', 'About Us', 'Services', 'Pricing', 'Blog', 'Contact Us'].map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                                    className="px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg font-medium transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>

                        <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                            <button className="w-full flex items-center justify-center gap-2 text-gray-700 font-medium py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50">
                                <User className="w-4 h-4" />
                                Login / Register
                            </button>
                            <button className="w-full bg-secondary hover:bg-green-600 text-white font-semibold py-2.5 rounded-lg shadow-sm">
                                Contact Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
