import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Section 1: Company Info */}
                    <div className="lg:col-span-2">
                        <h3 className="font-heading font-bold text-2xl text-primary mb-4">FizzTrade</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            FizzTrade is a comprehensive platform helping businesses thrive through outsourcing,
                            product listing, and full-spectrum branding services.
                        </p>
                        <p className="text-sm text-gray-500">© 2026 FizzTrade.</p>
                    </div>

                    {/* Section 2: Quick Links */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg text-gray-900 mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Services', 'Pricing', 'Blog'].map((item) => (
                                <li key={item}>
                                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Section 3: Services List */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg text-gray-900 mb-6">Services</h4>
                        <ul className="space-y-3">
                            {[
                                'Brand Building',
                                'Product Sourcing',
                                'Buyer Matching',
                                'Online Stores',
                                'Legal Registration',
                                'Physical Branding'
                            ].map((item) => (
                                <li key={item}>
                                    <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Section 4: Contact */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg text-gray-900 mb-6">Contact</h4>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-secondary" />
                                <a href="mailto:support@fizztrade.com" className="hover:text-primary">support@fizztrade.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="font-semibold text-secondary">Ph:</span>
                                <a href="tel:+11234567890" className="hover:text-primary">+1-123-456-7890</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section 5: Social Media & Newsletter */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-primary transition-all">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-primary transition-all">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-primary transition-all">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-primary transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="w-full md:w-auto">
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Subscribe to newsletter"
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 w-full md:w-64"
                            />
                            <button
                                type="button"
                                className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}
