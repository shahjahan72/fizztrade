import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingPage() {
    return (
        <div className="flex flex-col items-center">
            {/* Header */}
            <section className="w-full bg-primary/5 py-20 px-4 text-center">
                <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-6">Simple, Transparent Pricing</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Choose the plan that fits your business stage. No hidden fees.
                </p>
            </section>

            {/* Pricing Cards */}
            <section className="w-full py-16 px-4 -mt-10 mb-10">
                <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Basic Plan */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col relative z-10">
                        <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">Basic Plan</h3>
                        <p className="text-gray-500 mb-6 text-sm">Essentials for new businesses.</p>
                        <div className="text-4xl font-bold text-primary mb-1">$49<span className="text-lg text-gray-400 font-normal">/mo</span></div>
                        <div className="h-px w-full bg-gray-100 my-8"></div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {[
                                "Online Store Setup",
                                "Basic Product Sourcing",
                                "Custom Logo Design",
                                "Email Support"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-600">
                                    <Check className="w-5 h-5 text-secondary shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/signup?plan=basic"
                            className="w-full block text-center py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-blue-50 transition-colors"
                        >
                            Get Basic
                        </Link>
                    </div>

                    {/* Pro Plan (Highlighted) */}
                    <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 border-2 border-primary flex flex-col relative transform md:-translate-y-4 z-20">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                            Most Popular
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-white mb-2">Pro Plan</h3>
                        <p className="text-gray-400 mb-6 text-sm">Accelerate your growth.</p>
                        <div className="text-4xl font-bold text-white mb-1">$99<span className="text-lg text-gray-500 font-normal">/mo</span></div>
                        <div className="h-px w-full bg-gray-700 my-8"></div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {[
                                "Everything in Basic",
                                "Advanced Product Sourcing",
                                "Targeted Marketing Strategies",
                                "Buyer Matching Service",
                                "Priority Support",
                                "Legal Consultation (1 hr/mo)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <Check className="w-5 h-5 text-secondary shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/signup?plan=pro"
                            className="w-full block text-center py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg transition-all hover:shadow-primary/30"
                        >
                            Get Pro
                        </Link>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col relative z-10">
                        <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">Enterprise</h3>
                        <p className="text-gray-500 mb-6 text-sm">For established organizations.</p>
                        <div className="text-4xl font-bold text-gray-900 mb-1">Custom</div>
                        <div className="h-px w-full bg-gray-100 my-8"></div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {[
                                "Full 360° Services",
                                "Dedicated Account Manager",
                                "Physical Branding & Logistics",
                                "Global Compliance Audit",
                                "Custom Tech Solutions",
                                "24/7 VIP Support"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-600">
                                    <Check className="w-5 h-5 text-secondary shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/contact"
                            className="w-full block text-center py-3 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-gray-900 hover:text-gray-900 transition-colors"
                        >
                            Contact Sales
                        </Link>
                    </div>

                </div>
            </section>

            {/* FAQ Teaser */}
            <section className="w-full py-16 px-4 bg-gray-50 text-center">
                <h3 className="font-bold text-xl mb-4">Questions?</h3>
                <p className="text-gray-600 mb-6">
                    Unsure which plan is right for you? Our team can help analyze your needs.
                </p>
                <Link href="/contact" className="text-primary font-bold hover:underline">
                    Chat with us
                </Link>
            </section>
        </div>
    );
}
