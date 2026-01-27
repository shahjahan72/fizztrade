import { Metadata } from 'next';
import { Check, X, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing | FizzTrade',
  description: 'Affordable pricing plans for all your business needs. Start from $49/month.',
  keywords: 'pricing, plans, packages, business services, affordable',
};

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '$49',
      period: '/month',
      description: 'Perfect for startups and individual entrepreneurs',
      highlight: false,
      features: [
        { name: 'Online Store Setup', included: true },
        { name: 'Basic Branding Package', included: true },
        { name: 'Logo Design', included: true },
        { name: 'Product Sourcing Access', included: true },
        { name: 'Supplier Connections', included: true },
        { name: 'Email Support', included: true },
        { name: 'Buyer Matching', included: false },
        { name: 'Marketing Strategy', included: false },
        { name: 'Priority Support', included: false },
      ],
      cta: 'Get Started',
      ctaLink: '/register?plan=basic',
    },
    {
      name: 'Pro',
      price: '$99',
      period: '/month',
      description: 'For growing businesses ready to scale',
      highlight: true,
      features: [
        { name: 'Everything in Basic', included: true },
        { name: 'Professional Website', included: true },
        { name: 'Buyer Matching Service', included: true },
        { name: 'Marketing Strategy', included: true },
        { name: 'Social Media Branding', included: true },
        { name: 'Priority Support (24/7)', included: true },
        { name: 'Legal Registration Help', included: true },
        { name: 'Trademark Registration', included: false },
        { name: 'Dedicated Account Manager', included: false },
      ],
      cta: 'Start Growing',
      ctaLink: '/register?plan=pro',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Complete 360° solutions for established businesses',
      highlight: false,
      features: [
        { name: 'Everything in Pro', included: true },
        { name: 'Full Brand Identity Package', included: true },
        { name: 'Physical Branding & Packaging', included: true },
        { name: 'Custom Supplier Network', included: true },
        { name: 'Dedicated Account Manager', included: true },
        { name: 'Priority Legal Support', included: true },
        { name: 'Logistics Coordination', included: true },
        { name: 'Import/Export Documentation', included: true },
        { name: 'Custom Development', included: true },
      ],
      cta: 'Contact Sales',
      ctaLink: '/contact?type=enterprise',
    },
  ];

  const faqItems = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), bank transfers, and digital wallets.',
    },
    {
      question: 'Is there a contract or commitment?',
      answer: 'No long-term contracts required. All plans are month-to-month with the flexibility to cancel anytime.',
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes! Save 20% when you choose annual billing on any plan.',
    },
    {
      question: 'What\'s included in the Basic plan?',
      answer: 'The Basic plan includes online store setup, basic branding, logo design, product sourcing access, and email support.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! We offer a 14-day free trial for all plans. No credit card required to start.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-dark mb-6">
              Simple, Transparent <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the perfect plan for your business. Scale as you grow.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 bg-white rounded-full p-1 shadow-md">
              <button className="px-6 py-2 rounded-full font-semibold text-primary bg-primary/10 transition-all">
                Monthly
              </button>
              <button className="px-6 py-2 rounded-full font-semibold text-gray-600 hover:text-dark transition-all">
                Annual
              </button>
              <span className="px-4 py-1 bg-secondary text-white text-sm font-bold rounded-full">
                Save 20%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-xl transition-all duration-300 ${
                  plan.highlight
                    ? 'md:scale-105 md:shadow-2xl border-2 border-primary'
                    : 'border-2 border-gray-200 hover:border-primary'
                } ${plan.highlight ? 'bg-white' : 'bg-white'}`}
              >
                {/* Ribbon */}
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <h3 className="text-2xl font-heading font-bold text-dark mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-dark">{plan.price}</span>
                      <span className="text-gray-600 text-sm">{plan.period}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={plan.ctaLink}
                    className={`w-full inline-block text-center px-6 py-3 rounded-lg font-bold transition-all mb-8 ${
                      plan.highlight
                        ? 'bg-primary text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-dark hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </a>

                  {/* Features List */}
                  <div className="space-y-4 border-t pt-8">
                    <h4 className="font-bold text-dark text-sm uppercase tracking-wide">What's Included</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                          )}
                          <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold text-dark mb-12 text-center">Feature Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-dark">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-dark">Basic</th>
                  <th className="text-center py-4 px-4 font-bold text-dark">Pro</th>
                  <th className="text-center py-4 px-4 font-bold text-dark">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Online Store', basic: true, pro: true, enterprise: true },
                  { feature: 'Branding Services', basic: true, pro: true, enterprise: true },
                  { feature: 'Product Sourcing', basic: true, pro: true, enterprise: true },
                  { feature: 'Professional Website', basic: false, pro: true, enterprise: true },
                  { feature: 'Marketing Strategy', basic: false, pro: true, enterprise: true },
                  { feature: 'Buyer Matching', basic: false, pro: true, enterprise: true },
                  { feature: 'Legal Registration', basic: false, pro: true, enterprise: true },
                  { feature: 'Physical Branding', basic: false, pro: false, enterprise: true },
                  { feature: 'Dedicated Account Manager', basic: false, pro: false, enterprise: true },
                  { feature: 'Custom Development', basic: false, pro: false, enterprise: true },
                  { feature: 'Priority 24/7 Support', basic: false, pro: true, enterprise: true },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-white transition-colors">
                    <td className="py-4 px-4 text-dark font-semibold">{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {row.basic ? (
                        <Check className="w-5 h-5 text-secondary mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.pro ? (
                        <Check className="w-5 h-5 text-secondary mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.enterprise ? (
                        <Check className="w-5 h-5 text-secondary mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-heading font-bold text-dark mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details key={index} className="bg-white border-2 border-gray-200 rounded-lg hover:border-primary transition-colors cursor-pointer group">
                <summary className="flex items-center justify-between p-6 font-semibold text-dark">
                  {item.question}
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16 md:py-20">
        <div className="container-custom text-center">
          <div className="text-5xl mb-4">💰</div>
          <h3 className="text-2xl font-heading font-bold text-dark mb-3">30-Day Money Back Guarantee</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Not satisfied with our service? We'll refund your full payment within 30 days, no questions asked. Your success is our priority.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 md:py-20 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Try any plan free for 14 days. No credit card required.
          </p>
          <a href="/register" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Start Your Free Trial
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
