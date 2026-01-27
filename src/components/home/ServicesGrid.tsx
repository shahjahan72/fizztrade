'use client';

import { Palette, Package, Users, Store, FileText, Sparkles } from 'lucide-react';

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export default function ServicesGrid() {
  const services: ServiceCard[] = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Brand Building',
      description: 'Create a standout identity with custom logos, professional websites, and targeted marketing strategies.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Product Sourcing',
      description: 'Find high-quality products internationally from trusted suppliers to fuel your business growth.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Buyer Matching',
      description: 'Connect with potential buyers worldwide to expand your market reach effortlessly.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: 'Online Stores',
      description: 'Get your own customizable store on FizzTrade to list and sell products seamlessly.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Legal Registration',
      description: 'Expert guidance to legally register your business, ensuring compliance and peace of mind.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Physical Branding',
      description: 'Enhance your offline presence with banners, office setups, and optimization services.',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm mb-3">OUR SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything your business needs to thrive in the digital age. From branding to sourcing to sales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Arrow indicator */}
              <div className="inline-flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                Learn More →
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} w-0 group-hover:w-full transition-all duration-300 rounded-b-xl`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Ready to explore all services in detail?</p>
          <a href="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View All Services
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
