import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
                <h1 className="font-heading font-bold text-3xl text-gray-900">Welcome Back</h1>
                <p className="text-gray-600">Log in to manage your business.</p>

                <form className="space-y-4 text-left">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:outline-none" placeholder="you@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:outline-none" placeholder="••••••••" />
                    </div>
                    <button type="submit" className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-colors">
                        Log In
                    </button>
                </form>

                <p className="text-sm text-gray-500 mt-4">
                    Don't have an account? <Link href="/signup" className="text-primary hover:underline">Sign up</Link>
                </p>

                <div className="pt-4 border-t border-gray-100">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
