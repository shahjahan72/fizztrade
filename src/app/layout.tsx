import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

// Font declarations with proper subset and weight configuration
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FizzTrade | 360° Business Outsourcing & Product Listing",
  description: "Your 360° Partner in Brand Building and Global Trade. Build, Source, and Sell with FizzTrade.",
  keywords: "outsourcing, product listing, brand building, business solutions, global trade",
  authors: [{ name: "FizzTrade Team" }],
  creator: "FizzTrade",
  openGraph: {
    title: "FizzTrade | 360° Business Outsourcing & Product Listing",
    description: "Your 360° Partner in Brand Building and Global Trade.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased min-h-screen flex flex-col bg-white`}
      >
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}