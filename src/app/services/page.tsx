"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Palette, Globe, Scale, MessageCircle, ArrowRight } from "lucide-react";

type ServiceItem = {
    id: string;
    title: string;
    icon: React.ReactNode;
    priceStart?: string;
    description: string;
    benefits: string[];
};

const services: ServiceItem[] = [
    {
        id: "brand",
        title: "Brand Building",
        icon: <Palette className="w-6 h-6" />,
        priceStart: "$99",
        description: "Create a standout identity with custom logos, professional websites, and targeted marketing strategies. We ensure your brand resonates with your target audience.",
        benefits: [
            "Custom Logo Design & Visual Identity",
            "Responsive Website Development",
            "Social Media Kit & Strategy",
            "Professional Copywriting"
        ]
    },
    {
        id: "sourcing",
        title: "Product Sourcing",
        icon: <Globe className="w-6 h-6" />,
        description: "Reliable sourcing services specifically connecting you with vetted suppliers in China and Europe. We handle negotiations and quality checks.",
        benefits: [
            "Access to Verified Supplier Network",
            "Price Negotiation & Contract Handling",
            "Quality Assurance Inspections",
            "Logistics & Shipping Coordination"
        ]
    },
    {
        id: "legal",
        title: "Legal Registration",
        icon: <Scale className="w-6 h-6" />,
        description: "Navigate the complexities of business registration with ease. Our experts guide you through every legal step to ensure full compliance.",
        benefits: [
            "Company Incorporation (LLC, Pvt Ltd)",
            "Trademark Registration & IP Protection",
            "Tax Registration & Compliance",
            "Legal Contract Drafting"
        ]
    }
];

export default function ServicesPage() {
    const [openId, setOpenId] = useState<string | null>("brand");

    const toggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="flex flex-col items-center">
            {/* Header */}
            <section className="w-full bg-primary/5 py-16 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="font-heading font-bold text-4xl text-gray-900 mb-4">Our Services</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive solutions tailored to scale your business from concept to global enterprise.
                    </p>
                </div>
            </section>

            {/* Accordion / List Section */}
            <section className="w-full py-20 px-4 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <div className="space-y-6">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openId === service.id ? 'border-primary shadow-lg bg-blue-50/30' : 'border-gray-200 bg-white hover:border-blue-200'}`}
                            >
                                {/* Header / Clickable Area */}
                                <button
                                    onClick={() => toggle(service.id)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-lg ${openId === service.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>
                                            {service.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-bold text-xl text-gray-900">{service.title}</h3>
                                            {service.priceStart && (
                                                <span className="text-sm font-medium text-secondary">Starts at {service.priceStart}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-gray-400">
                                        {openId === service.id ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                                    </div>
                                </button>

                                {/* Content Area */}
                                <div
                                    className={`px-6 md:px-8 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${openId === service.id ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="pt-2 border-t border-gray-100/50">
                                        <p className="text-gray-700 leading-relaxed mb-6 mt-4">
                                            {service.description}
                                        </p>

                                        <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Key Benefits:</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                                            {service.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                                                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex gap-4">
                                            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg shadow-sm transition-all">
                                                Request Quote
                                            </Link>
                                            <button className="flex items-center gap-2 px-4 py-2.5 text-gray-600 font-medium hover:text-primary transition-colors">
                                                <MessageCircle className="w-4 h-4" /> Ask a Question
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
                        <h3 className="font-bold text-xl text-gray-900 mb-2">Need something custom?</h3>
                        <p className="text-gray-600 mb-6">
                            We offer tailored packages for large enterprises and unique business models.
                        </p>
                        <Link href="/contact" className="text-primary font-bold hover:underline flex items-center justify-center gap-1">
                            Contact our sales team <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
