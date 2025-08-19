import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { InitialAnimation } from "@/components/InitialAnimation";
import { SectionAccent } from "@/components/SectionAccent";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-blue-50/30 py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <InitialAnimation delay={400}>
              <div className="space-y-6 text-center lg:text-left lg:pl-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                  <span className="text-primary font-extrabold">Modernize Your Business</span>
                  <span className="block text-3xl sm:text-4xl lg:text-5xl mt-4 text-foreground font-semibold">
                    with Smart Technology
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Transform your operations with custom software solutions, e-commerce platforms, AI integrations and more.
                </p>
                <p className="text-xl sm:text-2xl text-foreground font-semibold leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Built for growth, designed for results.
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
            </InitialAnimation>
            <InitialAnimation delay={800}>
              <div className="flex justify-center lg:justify-end lg:pr-4">
                <div className="relative animate-fade-in">
        <Image
                    src="/images/icon-only-large.png"
                    alt="Mitman Solutions"
                    width={600}
                    height={600}
                    className="object-contain drop-shadow-2xl animate-float w-80 h-80 sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] xl:w-[480px] xl:h-[480px]"
          priority
        />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent rounded-full blur-2xl -z-10"></div>
                </div>
              </div>
            </InitialAnimation>
          </div>
        </div>
      </section>

      <SectionAccent />

      {/* What We Do Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation className="text-center space-y-4 mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              What We <span className="text-primary font-extrabold">Deliver</span>
            </h2>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <ScrollAnimation className="stagger-animation" style={{"--stagger-delay": "0.3s"} as React.CSSProperties}>
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover-lift group text-center">
              <CardHeader>
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-blue-600 font-bold text-2xl">🛒</span>
            </div>
                <CardTitle className="text-xl text-foreground">E-commerce Platforms</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Online stores that convert visitors into customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Modern e-commerce platforms with payment processing, inventory management, and growth-focused features.
                </p>
                <Button variant="outline" size="lg" className="w-full text-base" asChild>
                  <Link href="/services">View Details</Link>
                </Button>
              </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation className="stagger-animation" style={{"--stagger-delay": "0.6s"} as React.CSSProperties}>
              <Card className="border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover-lift group text-center">
              <CardHeader>
                            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-green-600 font-bold text-2xl">⚡</span>
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
                <Button size="lg" className="w-full text-base" asChild>
                  <Link href="/contact">Start Project</Link>
                </Button>
              </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation className="stagger-animation" style={{"--stagger-delay": "0.9s"} as React.CSSProperties}>
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover-lift group text-center">
              <CardHeader>
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-purple-600 font-bold text-2xl">🤖</span>
            </div>
                <CardTitle className="text-xl text-foreground">AI Integrations</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Smart automation for better business decisions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Integrate AI-powered features like chatbots, data analysis, and process automation into your workflow.
                </p>
                <Button variant="outline" size="lg" className="w-full text-base" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-blue-50/20 py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Ready to <span className="text-primary font-extrabold">Get Started</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let&apos;s discuss your business needs and see how we can modernize your software.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button size="lg" className="hover-lift flex-1 h-8 sm:h-8 py-4 text-base font-semibold" asChild>
                <a href="tel:414-526-6926">Call (414) 526-6926</a>
              </Button>
              <Button size="lg" variant="outline" className="hover-lift flex-1 h-8 sm:h-8 py-4 text-base font-semibold" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
            
            <div className="pt-4">
              <div className="inline-flex items-center space-x-4 sm:space-x-6 bg-background/80 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-3 text-sm text-foreground">
                <span>🏆 7+ years AWS Experience</span>
                <span className="hidden sm:inline font-extrabold">•</span>
                <span>👨🏼‍💻 End-to-end Delivery</span>
                <span className="hidden sm:inline font-extrabold">•</span>
                <span>📍 Wisconsin Based</span>
              </div>
            </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
