import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mitman Solutions: Accelerate Your Impact",
  description: "Transform your business with enterprise-grade software solutions. E-commerce, AI integration, and modern web applications that drive growth.",
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Mitman Solutions: Accelerate Your Impact",
    description: "Transform your business with enterprise-grade software solutions. E-commerce, AI integration, and modern web applications that drive growth.",
    url: "https://mitman-solutions.com",
    siteName: "Mitman Solutions",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Mitman Solutions: Accelerate Your Impact",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitman Solutions: Accelerate Your Impact",
    description: "Transform your business with enterprise-grade software solutions. E-commerce, AI integration, and modern web applications that drive growth.",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon-16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
