'use client';

import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Ahmed K.',
      role: 'E-commerce Entrepreneur',
      content: 'FizzTrade transformed my startup! Their branding and sourcing services were game-changers. Within 3 months, I had a professional brand, a fully stocked online store, and my first international buyers.',
      avatar: '👨‍💼',
      rating: 5,
    },
    {
      name: 'Sara M.',
      role: 'Brand Manager',
      content: 'Easy product listing and buyer connections – highly recommend! The platform made it so simple to connect with suppliers and list products. Our sales have increased by 150% since we joined.',
      avatar: '👩‍💼',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Small Business Owner',
      content: 'The legal registration support and physical branding services gave us the professional edge we needed. FizzTrade is not just a platform, it\'s a complete business partner.',
      avatar: '👨‍💻',
      rating: 5,
    },
    {
      name: 'Fatima Hassan',
      role: 'Retail Business',
      content: 'I was overwhelmed with starting my business, but FizzTrade guided me through every step. From logos to finding buyers, everything was seamless and professional.',
      avatar: '👩‍🦰',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-dark text-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-secondary font-semibold text-sm mb-3">TESTIMONIALS</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real stories from real entrepreneurs who transformed their businesses with FizzTrade.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:border-secondary/50"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust metrics */}
        <div className="mt-20 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-heading font-bold text-secondary mb-2">2.5K+</div>
            <p className="text-gray-300">Active Businesses</p>
          </div>
          <div>
            <div className="text-4xl font-heading font-bold text-secondary mb-2">$50M+</div>
            <p className="text-gray-300">Total Sales</p>
          </div>
          <div>
            <div className="text-4xl font-heading font-bold text-secondary mb-2">4.9/5</div>
            <p className="text-gray-300">Average Rating</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">Join thousands of successful businesses on FizzTrade</p>
          <a href="/register" className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-dark rounded-lg font-bold hover:bg-green-600 transition-colors">
            Start Your Success Story
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
