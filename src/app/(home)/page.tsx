import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import ServicesGrid from '@/components/home/ServicesGrid';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';

export const metadata: Metadata = {
  title: 'FizzTrade | Build, Source, Sell – Your 360° Business Platform',
  description: 'Empower your business with FizzTrade. From brand building and product sourcing to buyer connections and online stores. Start free today.',
  keywords: 'business platform, outsourcing, product sourcing, e-commerce, brand building, online store',
  openGraph: {
    title: 'FizzTrade | Your 360° Business Partner',
    description: 'Build, source, and sell with FizzTrade\'s comprehensive business platform.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <ServicesGrid />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* Call To Action */}
      <CallToAction />
    </>
  );
}
