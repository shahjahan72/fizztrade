import { Metadata } from 'next';
import { Users, Target, Award, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About FizzTrade | Our Story & Mission',
  description: 'Learn about FizzTrade\'s mission to empower businesses with seamless outsourcing and global trade solutions.',
  keywords: 'about fizztrade, company story, mission, team, outsourcing platform',
};

export default function About() {
  const teamMembers = [
    {
      name: 'Fatima Khan',
      role: 'Founder & CEO',
      bio: 'Serial entrepreneur with 10+ years in global trade and outsourcing.',
      avatar: '👩‍💼',
    },
    {
      name: 'Ahmed Hassan',
      role: 'CTO',
      bio: 'Tech innovator building scalable platforms for 8+ years.',
      avatar: '👨‍💻',
    },
    {
      name: 'Sara Al-Mansouri',
      role: 'Head of Services',
      bio: 'Expert in brand building and marketing strategy.',
      avatar: '👩‍🎨',
    },
    {
      name: 'Muhammad Ali',
      role: 'Head of Sourcing',
      bio: 'Established supplier networks across Asia and Europe.',
      avatar: '👨‍🔬',
    },
    {
      name: 'Zainab Sheikh',
      role: 'Customer Success Lead',
      bio: 'Dedicated to customer satisfaction and growth.',
      avatar: '👩‍💬',
    },
    {
      name: 'Hassan Malik',
      role: 'Operations Manager',
      bio: 'Streamlines processes and ensures timely delivery.',
      avatar: '👨‍⚙️',
    },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mission-Driven',
      description: 'Empowering businesses to scale globally with seamless solutions.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Customer-Centric',
      description: 'Your success is our success. We prioritize your growth.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'High-quality services and professional standards always.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'Building a network of successful entrepreneurs.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-dark mb-6">
              About <span className="text-primary">FizzTrade</span>
            </h1>
            <p className="text-xl text-gray-600">
              Empowering businesses worldwide to build, source, and succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-dark mb-8">Our Story</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2025, FizzTrade was born from the vision of simplifying business growth. We recognized that entrepreneurs and small businesses face tremendous challenges when trying to scale—from finding reliable suppliers to building professional brands to connecting with global buyers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our founders, a diverse team of seasoned professionals in trade, technology, and business development, came together with a singular goal: to create an all-in-one platform that removes barriers to success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Based in Karachi, Pakistan—a bustling hub of entrepreneurship and innovation—FizzTrade serves businesses across Asia, Europe, and beyond. We believe that great ideas should have no geographical boundaries, and with the right tools and connections, any business can achieve extraordinary growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, FizzTrade supports 2,500+ active businesses, facilitating over $50 million in annual sales. But we're just getting started. Our mission is to become the global platform of choice for entrepreneurs who dream big and work hard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            {/* Mission */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-dark mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower businesses with seamless outsourcing, product sourcing, and global trade solutions. We believe every entrepreneur deserves access to world-class services, professional branding, and international markets—regardless of their size or location.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-dark mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become the world's leading 360° business platform, where entrepreneurs confidently scale their dreams. We envision a world where geographical and financial barriers don't limit ambition.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="border-t pt-16">
            <h3 className="text-3xl font-heading font-bold text-dark mb-12 text-center">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-heading font-bold text-dark mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A diverse group of passionate professionals dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-heading font-bold text-dark mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 md:py-20 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Join the FizzTrade Community</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of a growing network of successful entrepreneurs and businesses.
          </p>
          <a href="/register" className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Get Started Free
          </a>
        </div>
      </section>
    </>
  );
}
