'use client';

import { UserPlus, CheckCircle, Zap, Rocket } from 'lucide-react';

interface Step {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function HowItWorks() {
  const steps: Step[] = [
    {
      number: 1,
      icon: <UserPlus className="w-8 h-8" />,
      title: 'Sign Up',
      description: 'Create a free account in minutes and get started with FizzTrade.',
    },
    {
      number: 2,
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Choose Services',
      description: 'Select from branding to sourcing and customize your business needs.',
    },
    {
      number: 3,
      icon: <Zap className="w-8 h-8" />,
      title: 'Collaborate & Build',
      description: 'Work with our experts and build your brand, products, and online presence.',
    },
    {
      number: 4,
      icon: <Rocket className="w-8 h-8" />,
      title: 'Launch & Grow',
      description: 'Go live with your store and start connecting with buyers worldwide.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-primary font-semibold text-sm mb-3">HOW IT WORKS</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">
            Your Path to Success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started with FizzTrade is simple. Follow these four easy steps to launch your business.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300 h-full">
                  {/* Step number circle */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-secondary text-white rounded-full font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:flex items-center justify-center">
                        <div className="w-8 h-1 bg-gradient-to-r from-primary to-transparent"></div>
                      </div>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Vertical connector for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Start your journey today. It takes less than 5 minutes to sign up.
          </p>
          <div className="inline-flex gap-4">
            <a href="/register" className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started Free
            </a>
            <a href="/contact" className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
              Need Help?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
