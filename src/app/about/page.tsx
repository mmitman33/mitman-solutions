import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ScrollAnimation";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-blue-50/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                How We <span className="text-primary font-extrabold">Transform</span> Your Business
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Mitman Solutions brings enterprise-grade engineering expertise to modernize your technology stack, 
                streamline operations, and accelerate growth through smart software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="hover-lift" asChild>
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" className="hover-lift" asChild>
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/images/icon-only-large.png"
                  alt="Mitman Solutions"
                  width={300}
                  height={300}
                  className="object-contain drop-shadow-2xl animate-float"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
                  <ScrollAnimation className="text-center space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Why Your Business Can <span className="text-primary font-extrabold">Trust</span> Our Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our solutions are backed by experience building enterprise-scale systems that serve millions of users.
            We bring that same level of reliability and performance to your business.
          </p>
        </ScrollAnimation>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover-lift">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-lg">AWS</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">Enterprise-Scale Experience</CardTitle>
                    <CardDescription className="text-lg">Amazon Web Services - Senior Engineer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">What this means for you:</strong> Leverage solutions that power millions of AWS customers. We&apos;ll build systems that grow with your business without breaking.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Designed and operated best-in-class Cloud services for 7+ years</li>
                  <li>• Security best practices from enterprise environments</li>
                  <li>• Performance and cost optimizations for any size business</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover-lift">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">🏠</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">Innovation & User Experience</CardTitle>
                    <CardDescription className="text-lg">Opendoor - Product Engineering</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">What this means for you:</strong> We understand how to build software that people actually want to use. Your customers will love the intuitive experiences we create.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• User-centered design that converts visitors</li>
                  <li>• Data-driven insights for better decisions</li>
                  <li>• Seamless integrations with existing systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Innovation & Education */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-xl">🎓</span>
                </div>
                <CardTitle>Dartmouth College</CardTitle>
                <CardDescription>Computer Science Graduate</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Strong foundation in computer science fundamentals, algorithms, 
                  and software engineering principles from this prestigious Ivy League institution.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-xl">📱</span>
                </div>
                <CardTitle>Patent Holder</CardTitle>
                <CardDescription>Mobile Virtual Player Tactical</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Co-inventor and patent holder for the MVP Tactical HEKTR system, 
                  demonstrating a track record of creativity and cutting-edge problem solving.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold text-xl">🎙️</span>
                </div>
                <CardTitle>Podcast Host</CardTitle>
                <CardDescription>The Rest Period Podcast</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Host of The Rest Period Podcast, sharing insights on technology, 
                  entrepreneurship, and business strategy.  And just having fun.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://rest-period.com" target="_blank" rel="noopener noreferrer">
                    See What We&apos;re Building
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-r from-primary/5 to-blue-50/30 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Our <span className="text-primary font-extrabold">Commitment</span> to Your Success
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              We&apos;re dedicated to modernizing businesses across Wisconsin and beyond through strategic technology implementation. 
              Your success is our primary focus, and we measure our value by the growth we help you achieve.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-blue-600 font-bold text-2xl">🛒</span>
                </div>
                <h3 className="text-xl font-semibold">E-commerce Excellence</h3>
                <p className="text-muted-foreground">
                  Building robust online stores and marketplaces that convert visitors into customers 
                  and scale with your business growth.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-green-600 font-bold text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold">Generative AI Integration</h3>
                <p className="text-muted-foreground">
                  Implementing AI-powered solutions that automate processes, enhance customer 
                  experiences, and unlock new business opportunities.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-purple-600 font-bold text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold">Modern Software Solutions</h3>
                <p className="text-muted-foreground">
                  Creating fast, secure, and scalable applications using the latest technologies 
                  and development best practices.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Digital Transformation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
