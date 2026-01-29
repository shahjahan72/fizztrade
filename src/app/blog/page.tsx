import Link from "next/link";

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="font-heading font-bold text-4xl text-gray-900 mb-4">Our Blog</h1>
            <p className="text-gray-600 mb-8">Latest insights, tips, and news from the FizzTrade team.</p>
            <div className="p-12 bg-gray-50 rounded-2xl border border-gray-200 border-dashed">
                <p className="text-lg text-gray-500">Blog posts coming soon!</p>
            </div>
            <div className="mt-8">
                <Link href="/" className="text-primary hover:underline font-medium">
                    Back to Home
                </Link>
            </div>
        </div>
    )
}
