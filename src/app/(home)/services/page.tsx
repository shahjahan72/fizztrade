import { Metadata } from 'next';
import { ChevronDown, ArrowRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | FizzTrade',
  description: 'Explore our comprehensive business services: brand building, product sourcing, legal registration, buyer matching, and more.',
  keywords: 'business services, brand building, product sourcing, legal registration, outsourcing',
};

export default function Services() {
  const mainServices = [
    {
      title: 'Brand Building',
      price: 'Starting at $99',
      description: 'Create a professional identity for your business',
      details: [
        'Custom logo design and brand identity',
        'Professional website development',
        'Social media branding guidelines',
        'Marketing strategy consultation',
        'Brand positioning and messaging',
      ],
      link: '/contact?service=brand',
    },
    {
      title: 'Product Sourcing',
      price: 'Custom Pricing',
      description: 'Connect with verified suppliers worldwide',
      details: [
        'Access to verified supplier networks in China, Europe, and Asia',
        'Quality assurance and sample testing',
        'Bulk pricing negotiation',
        'Logistics and shipping coordination',
        'Import/export documentation support',
      ],
      link: '/contact?service=sourcing',
    },
    {
      title: 'Legal Registration',
      price: 'Starting at $149',
      description: 'Professional business setup and compliance',
      details: [
        'Company registration and business licensing',
        'Trademark and intellectual property protection',
        'Tax registration and compliance setup',
        'Legal document preparation',
        'Ongoing compliance support',
      ],
      link: '/contact?service=legal',
    },
  ];

  const additionalServices = [
    {
      title: 'Buyer Matching',
      description: 'We connect you with qualified international buyers.',
    },
    {
      title: 'Online Stores',
      description: 'Launch your e-commerce store in minutes.',
    },
    {
      title: 'Physical Branding',
      description: 'Premium packaging and branding materials.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-dark mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive solutions designed to help your business grow and succeed globally.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="space-y-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-primary transition-colors group">
                {/* Header */}
                <div className="p-8 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-dark mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{service.price}</p>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="px-8 pb-8">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">What's Included</h4>
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={service.link}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Request Quote
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold text-dark mb-12 text-center">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg hover:border-primary transition-all">
                <h3 className="text-xl font-heading font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a href="/contact" className="text-primary font-semibold hover:text-blue-700 transition-colors inline-flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold text-dark mb-12 text-center">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
            {[
              { step: '1', title: 'Consultation', desc: 'Discuss your needs with our experts' },
              { step: '2', title: 'Proposal', desc: 'Receive customized service plan' },
              { step: '3', title: 'Implementation', desc: 'We execute and manage the project' },
              { step: '4', title: 'Success', desc: 'Enjoy results and ongoing support' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h4 className="font-bold text-dark mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-16 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold text-dark mb-4 text-center">Why Choose FizzTrade?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We combine affordability with quality to ensure your business gets the best value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-green-200 bg-gradient-to-br from-green-50 to-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">✓</div>
                <h3 className="font-bold text-dark">Affordable & Transparent</h3>
              </div>
              <p className="text-gray-600">No hidden fees. Clear pricing from the start.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">✓</div>
                <h3 className="font-bold text-dark">Expert Team</h3>
              </div>
              <p className="text-gray-600">Experienced professionals in every field.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-green-200 bg-gradient-to-br from-green-50 to-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">✓</div>
                <h3 className="font-bold text-dark">24/7 Support</h3>
              </div>
              <p className="text-gray-600">Always here when you need us.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">✓</div>
                <h3 className="font-bold text-dark">Proven Results</h3>
              </div>
              <p className="text-gray-600">Trusted by 2,500+ active businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 md:py-20 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss which services are right for you.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Schedule Consultation
          </a>
        </div>
      </section>
    </>
  );
}
