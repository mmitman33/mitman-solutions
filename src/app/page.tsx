import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-blue-50/30 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                  ⚡ Former AWS Senior Engineer • Patent Holder • Dartmouth Grad
                </div>
                <h1 className="text-4xl lg:text-7xl font-bold tracking-tight">
                  <span className="gradient-text">Accelerate</span> Your Business
                  <span className="block text-3xl lg:text-5xl mt-2 text-muted-foreground">
                    with Enterprise-Grade Solutions
                  </span>
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Bringing <strong>AWS-scale engineering expertise</strong> to your business. 
                I help companies leverage <strong>e-commerce, AI, and modern software</strong> to drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="hover-lift" asChild>
                  <Link href="/contact">Start Your Transformation</Link>
                </Button>
                <Button size="lg" variant="outline" className="hover-lift" asChild>
                  <a href="tel:414-526-6926">Call (414) 526-6926</a>
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">AWS</div>
                  <div className="text-sm text-muted-foreground">Senior Engineer</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Patent</div>
                  <div className="text-sm text-muted-foreground">Mobile Tech</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Dartmouth</div>
                  <div className="text-sm text-muted-foreground">Computer Science</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/images/mitman-solutions-transparent.png"
                  alt="Mitman Solutions"
                  width={450}
                  height={450}
                  className="object-contain drop-shadow-2xl animate-float"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50/50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              🚀 Powered by Enterprise Experience
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold">
              <span className="gradient-text">Game-Changing</span> Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From AWS-scale infrastructure to cutting-edge AI integration, 
              I bring Fortune 500 expertise to accelerate your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover-lift group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">🚀</span>
                </div>
                <CardTitle className="text-xl">E-commerce & AI Solutions</CardTitle>
                <CardDescription>
                  Next-generation online stores with AI-powered features that convert visitors into customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• AI-powered product recommendations</li>
                  <li>• Advanced analytics & conversion optimization</li>
                  <li>• Shopify, WooCommerce, custom builds</li>
                  <li>• Payment integration & fraud protection</li>
                </ul>
                <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                  <Link href="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover-lift group border-primary/30">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">⚡</span>
                </div>
                <CardTitle className="text-xl">Enterprise Web Applications</CardTitle>
                <CardDescription>
                  AWS-scale architecture with React, Next.js, and cloud-native solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• React, Next.js, TypeScript stack</li>
                  <li>• AWS cloud infrastructure</li>
                  <li>• Microservices & API development</li>
                  <li>• Real-time features & WebSocket integration</li>
                </ul>
                <Button size="sm" className="mt-4 w-full" asChild>
                  <Link href="/contact">Start Project</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover-lift group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">🎯</span>
                </div>
                <CardTitle className="text-xl">Strategic Technology Consulting</CardTitle>
                <CardDescription>
                  CTO-level guidance to align technology with your business objectives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Technology roadmap & strategy</li>
                  <li>• Architecture reviews & optimization</li>
                  <li>• Team mentoring & best practices</li>
                  <li>• Digital transformation planning</li>
                </ul>
                <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                  <Link href="/about">About Matt</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Trusted by Business Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startups to enterprise companies, businesses trust my expertise to deliver results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold text-3xl">AWS</span>
                </div>
                <CardTitle>Amazon Web Services</CardTitle>
                <CardDescription>Senior Software Engineer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  &quot;Built and scaled cloud infrastructure serving millions of customers globally with enterprise-grade reliability.&quot;
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-2xl">🏠</span>
                </div>
                <CardTitle>Opendoor</CardTitle>
                <CardDescription>Software Engineer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  &quot;Revolutionized real estate technology by building platforms that simplified home buying and selling.&quot;
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-2xl">🎓</span>
                </div>
                <CardTitle>Dartmouth College</CardTitle>
                <CardDescription>Computer Science</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  &quot;Ivy League education with strong foundations in algorithms, software engineering, and system design.&quot;
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-8 bg-primary/5 rounded-2xl px-8 py-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🏆</span>
                <span className="font-semibold">Patent Holder</span>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🎙️</span>
                <span className="font-semibold">Podcast Host</span>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📍</span>
                <span className="font-semibold">Wisconsin Based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-purple-50/20 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                💡 Ready to Transform Your Business?
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold">
                Let&apos;s Build Something <span className="gradient-text">Extraordinary</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Whether you&apos;re a startup ready to scale or an enterprise seeking innovation, 
                I bring the technical expertise and strategic vision to accelerate your success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="text-center hover-lift">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary mb-2">📞 Quick Call</div>
                  <p className="text-muted-foreground mb-4">Discuss your project in 15 minutes</p>
                  <Button className="w-full" asChild>
                    <a href="tel:414-526-6926">(414) 526-6926</a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center hover-lift">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary mb-2">📧 Detailed Inquiry</div>
                  <p className="text-muted-foreground mb-4">Send project details via email</p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="mailto:mmitman33@gmail.com">Send Email</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="pt-4">
              <Button size="lg" className="hover-lift" asChild>
                <Link href="/contact">Start Your Project Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
