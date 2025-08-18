import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-blue-50/30 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-balance">
                <span className="gradient-text">Modernize</span> Your Business
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-foreground">
                  with Smart Technology
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transform your operations with custom software, e-commerce solutions, and AI integration. 
                <strong className="text-foreground">Built for growth, designed for results.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button size="lg" className="hover-lift text-base px-8" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="hover-lift text-base px-8" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/images/mitman-solutions-transparent.png"
                  alt="Mitman Solutions"
                  width={400}
                  height={400}
                  className="object-contain drop-shadow-2xl animate-float w-80 h-80 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              What We <span className="gradient-text">Deliver</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three core areas where technology transforms your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover-lift group text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">🛒</span>
                </div>
                <CardTitle className="text-xl text-foreground">E-commerce Solutions</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Online stores that convert visitors into customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Modern e-commerce platforms with payment processing, inventory management, and growth-focused features.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/services">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover-lift group text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">⚡</span>
                </div>
                <CardTitle className="text-xl text-foreground">Custom Software</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Web applications built for your specific needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Scalable web applications using React, Next.js, and cloud infrastructure to streamline your operations.
                </p>
                <Button size="sm" className="w-full" asChild>
                  <Link href="/contact">Start Project</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover-lift group text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">🤖</span>
                </div>
                <CardTitle className="text-xl text-foreground">AI Integration</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Smart automation for better business decisions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Integrate AI-powered features like chatbots, data analysis, and process automation into your workflow.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-blue-50/20 py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Ready to <span className="gradient-text">Get Started</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let&apos;s discuss your project and see how we can help modernize your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button size="lg" className="hover-lift flex-1" asChild>
                <a href="tel:414-526-6926">Call (414) 526-6926</a>
              </Button>
              <Button size="lg" variant="outline" className="hover-lift flex-1" asChild>
                <Link href="/contact">Send Message</Link>
              </Button>
            </div>
            
            <div className="pt-4">
              <div className="inline-flex items-center space-x-4 sm:space-x-6 bg-background/80 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-3 text-sm text-muted-foreground">
                <span>🏆 AWS Experience</span>
                <span className="hidden sm:inline">•</span>
                <span>🎓 Dartmouth Grad</span>
                <span className="hidden sm:inline">•</span>
                <span>📍 Wisconsin Based</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
