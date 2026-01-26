import Link from "next/link";
import {
  ArrowRight,
  Palette,
  Globe,
  Users,
  Store,
  Scale,
  MapPin,
  UserPlus,
  MousePointerClick,
  MessageSquare,
  Rocket
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center">

      {/* 1. Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white pt-24 pb-32 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-gray-900 mb-8 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            Build, Source, Sell – <br />
            <span className="text-primary">All in One Place</span> with FizzTrade
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
            Empower your business with 360° services: From brand logos and websites
            to global product sourcing, buyer connections, and your own online store.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <Link
              href="/signup"
              className="px-8 py-4 bg-primary hover:bg-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 transform hover:-translate-y-1"
            >
              Get Started Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-white text-primary border-2 border-primary hover:bg-blue-50 text-lg font-bold rounded-full transition-all transform hover:-translate-y-1"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Services Overview */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-2 block">What We Do</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900">Our Comprehensive Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Brand Building",
                desc: "Create a standout identity with custom logos, professional websites, and targeted marketing strategies.",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Product Sourcing",
                desc: "Find high-quality products internationally from trusted suppliers to fuel your business growth.",
                color: "bg-green-100 text-green-600"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Buyer Matching",
                desc: "Connect with potential buyers worldwide to expand your market reach effortlessly.",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: <Store className="w-8 h-8" />,
                title: "Online Stores",
                desc: "Get your own customizable store on FizzTrade to list and sell products seamlessly.",
                color: "bg-orange-100 text-orange-600"
              },
              {
                icon: <Scale className="w-8 h-8" />,
                title: "Legal Registration",
                desc: "Expert guidance to legally register your business, ensuring compliance and peace of mind.",
                color: "bg-red-100 text-red-600"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Physical Branding",
                desc: "Enhance your offline presence with banners, office setups, and optimization services.",
                color: "bg-teal-100 text-teal-600"
              },
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section className="w-full py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-2 block">Process</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900">How It Works</h2>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-[2.5rem] left-0 w-full h-1 bg-gray-200 -z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {[
                {
                  step: "01",
                  title: "Sign Up",
                  desc: "Create a free account.",
                  icon: <UserPlus className="w-6 h-6" />
                },
                {
                  step: "02",
                  title: "Choose Services",
                  desc: "Select from branding to sourcing.",
                  icon: <MousePointerClick className="w-6 h-6" />
                },
                {
                  step: "03",
                  title: "Collaborate & Build",
                  desc: "Work with experts.",
                  icon: <MessageSquare className="w-6 h-6" />
                },
                {
                  step: "04",
                  title: "Launch & Grow",
                  desc: "Go live with your store.",
                  icon: <Rocket className="w-6 h-6" />
                },
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white border-4 border-white shadow-md rounded-full flex items-center justify-center mb-6 relative">
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white font-bold rounded-full flex items-center justify-center text-sm shadow-sm">
                      {item.step}
                    </span>
                    <div className="text-gray-700">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials */}
      <section className="w-full py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-2 block">Success Stories</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 relative">
              <div className="text-4xl text-primary font-serif absolute top-6 left-6 opacity-20">"</div>
              <p className="text-gray-700 italic text-lg mb-6 leading-relaxed">
                "FizzTrade transformed my startup! Their branding and sourcing services were game-changers. I couldn't have done it without their expert team."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">AK</div>
                <div>
                  <h4 className="font-bold text-gray-900">Ahmed K.</h4>
                  <p className="text-sm text-gray-500">Startup Founder</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10 relative">
              <div className="text-4xl text-primary font-serif absolute top-6 left-6 opacity-20">"</div>
              <p className="text-gray-700 italic text-lg mb-6 leading-relaxed">
                "Easy product listing and buyer connections – highly recommend! The platform is intuitive and the support is fantastic."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-600">SM</div>
                <div>
                  <h4 className="font-bold text-gray-900">Sara M.</h4>
                  <p className="text-sm text-gray-500">E-commerce Seller</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="w-full py-24 px-4 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto text-center relative z-10">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Ready to <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">Fizz Up</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of businesses already growing with FizzTrade.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-10 py-5 bg-primary hover:bg-blue-600 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
}
