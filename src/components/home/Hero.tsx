'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 md:py-32 min-h-[600px] flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-8">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              🚀 Launch Your Business Today
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-dark mb-6 leading-tight">
            Build, Source, Sell –{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              All in One Place
            </span>
            <span className="text-primary"> with FizzTrade</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Empower your business with 360° services: From brand logos and websites to global product sourcing, buyer connections, and your own online store.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/register">
              <Button 
                variant="primary" 
                size="lg"
                className="group flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                variant="outline" 
                size="lg"
                className="flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-secondary/20 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-blue-200/40 border-2 border-white"></div>
              </div>
              <span>2,500+ Businesses Trusted</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-300"></div>
            <div>
              <span className="font-semibold text-dark">4.9/5</span> Rating from Users
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-20 relative">
          <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg overflow-hidden">
            {/* Placeholder for hero image */}
            <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Your Business Dashboard Preview</p>
              </div>
            </div>

            {/* Floating cards effect */}
            <div className="absolute top-6 right-6 bg-white rounded-lg shadow-md p-4 border border-gray-100 max-w-xs hidden lg:block">
              <p className="text-sm font-semibold text-dark mb-2">💼 Brand Building</p>
              <p className="text-xs text-gray-600">Professional logos & websites</p>
            </div>
            <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-md p-4 border border-gray-100 max-w-xs hidden lg:block">
              <p className="text-sm font-semibold text-secondary mb-2">🚀 Product Sourcing</p>
              <p className="text-xs text-gray-600">Global supplier connections</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
