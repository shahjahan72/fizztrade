'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const services = [
    'Brand Building',
    'Product Sourcing',
    'Buyer Matching',
    'Online Stores',
    'Legal Registration',
    'Physical Branding',
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-dark text-white mt-20">
      <div className="container-custom py-12 md:py-16">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Section 1: Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading text-primary">FizzTrade</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              FizzTrade is a comprehensive platform helping businesses thrive through outsourcing, product listing, and full-spectrum branding services.
            </p>
            <p className="text-xs text-gray-400">
              © 2026 FizzTrade. All rights reserved.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h4 className="font-semibold font-heading mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Services */}
          <div>
            <h4 className="font-semibold font-heading mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-sm text-gray-300 hover:text-primary transition-colors duration-200 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Contact */}
          <div>
            <h4 className="font-semibold font-heading mb-4 text-white">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:support@fizztrade.com" className="hover:text-primary transition-colors">
                  support@fizztrade.com
                </a>
              </li>
              <li>
                <a href="tel:+11234567890" className="hover:text-primary transition-colors">
                  +1-123-456-7890
                </a>
              </li>
              <li>Karachi, Pakistan</li>
            </ul>
          </div>

          {/* Section 5: Newsletter */}
          <div>
            <h4 className="font-semibold font-heading mb-4 text-white">Newsletter</h4>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to get updates on new services and features.
            </p>
            <form onSubmit={handleNewsletterSignup} className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-9 rounded-md border border-gray-600 bg-gray-900/50 px-3 py-1 text-sm text-white placeholder-gray-400 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <Button 
                type="submit"
                variant="secondary" 
                size="sm" 
                className="w-full text-white"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a 
              href="#" 
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-gray-400">
            Designed & Built with <span className="text-secondary">❤</span> by FizzTrade Team
          </p>
        </div>
      </div>
    </footer>
  );
}