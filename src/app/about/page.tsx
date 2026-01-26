import Link from "next/link";
import { Users, Target, Rocket, Award } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center">

            {/* Page Header */}
            <section className="w-full bg-primary/5 py-16 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="font-heading font-bold text-4xl text-gray-900 mb-4">About Us</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Get to know the passionate team and vision behind FizzTrade.
                    </p>
                </div>
            </section>

            {/* Story & Mission */}
            <section className="w-full py-20 px-4">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="font-heading font-bold text-3xl text-primary">Our Story</h2>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Founded in 2025, FizzTrade was born from the vision of simplifying business growth.
                            We saw a gap where entrepreneurs struggled to juggle branding, sourcing, and selling.
                            Based in <span className="font-semibold text-gray-900">Karachi, Pakistan</span>, we set out to build a unified platform that
                            bridges these gaps.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            What started as a small consultancy has now evolved into a global bridge connecting
                            local businesses with international opportunities.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-secondary shadow-sm">
                        <h3 className="font-heading font-bold text-2xl text-gray-900 mb-4 flex items-center gap-3">
                            <Target className="w-8 h-8 text-secondary" /> Our Mission
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            To empower businesses with seamless outsourcing, top-tier product sourcing, and
                            comprehensive digital solutions. We strive to be the catalyst that transforms
                            small local ventures into global success stories.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats / Values */}
            <section className="w-full bg-gray-900 text-white py-16 px-4">
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { label: "Founded", value: "2025", icon: <Rocket className="w-6 h-6 text-primary" /> },
                        { label: "Global Clients", value: "500+", icon: <Users className="w-6 h-6 text-primary" /> },
                        { label: "Projects", value: "1.2k", icon: <Award className="w-6 h-6 text-primary" /> },
                        { label: "Satisfaction", value: "98%", icon: <Target className="w-6 h-6 text-primary" /> },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="mb-3 p-3 bg-white/10 rounded-full">{stat.icon}</div>
                            <div className="text-3xl font-bold mb-1">{stat.value}</div>
                            <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="w-full py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-2 block">The People</span>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900">Meet Our Team</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((member) => (
                            <div key={member} className="group text-center">
                                <div className="w-full aspect-square bg-gray-200 rounded-2xl mb-6 overflow-hidden relative">
                                    {/* Placeholder for real team images */}
                                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                                        <UserPlaceholder />
                                    </div>
                                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-bold">View Profile</span>
                                    </div>
                                </div>
                                <h3 className="font-heading font-bold text-xl text-gray-900">Team Member {member}</h3>
                                <p className="text-primary font-medium mb-1">Position Title</p>
                                <p className="text-sm text-gray-500">Expertise area</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="w-full py-20 px-4 bg-blue-50 text-center">
                <h2 className="font-heading font-bold text-3xl text-gray-900 mb-6">Want to join our journey?</h2>
                <Link href="/contact" className="px-8 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg">
                    Contact Us Today
                </Link>
            </section>
        </div>
    );
}

function UserPlaceholder() {
    return (
        <svg className="w-20 h-20 opacity-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
    );
}
