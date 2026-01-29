import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SignupPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                </div>
                <h1 className="font-heading font-bold text-3xl text-gray-900">Join FizzTrade</h1>
                <p className="text-gray-600">Start your journey to global business success today.</p>

                <div className="flex flex-col gap-4">
                    <button className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-colors">
                        Create Account
                    </button>
                    <button className="w-full py-3 bg-white border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors">
                        Sign up with Google
                    </button>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                    Already have an account? <Link href="/login" className="text-primary hover:underline">Log in</Link>
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
