'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Check } from 'lucide-react';

export default function CallToAction() {
  const benefits = [
    'Free forever starter plan',
    'No credit card required',
    'Full access to all services',
    'Dedicated support team',
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-blue-600 to-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Limited time offer
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Ready to Fizz Up Your Business?
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join thousands of entrepreneurs and businesses that have transformed their operations with FizzTrade. Start free, scale faster, succeed bigger.
          </p>

          {/* CTA Button */}
          <Link href="/register">
            <Button 
              variant="primary"
              size="lg"
              className="group flex items-center gap-2 mx-auto mb-12 bg-white text-primary hover:bg-gray-100"
            >
              Sign Up Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          {/* Benefits */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 md:p-12">
            <p className="text-white/80 mb-6 font-semibold">What You Get:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white text-left">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-white/20"></div>

          {/* Secondary CTA */}
          <p className="text-white/80 text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-white font-bold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
