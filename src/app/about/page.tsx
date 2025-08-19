import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { SectionAccent } from "@/components/SectionAccent";

export default function About() {
  return (
    <div className="flex flex-col">
            {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-blue-50/30 py-20 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-green-400/10 rounded-full blur-2xl animate-pulse" style={{"animationDelay": "1s"} as React.CSSProperties}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
                How We <span className="text-primary font-extrabold">Transform</span> Your Business
              </h1>
            
            <ScrollAnimation>
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We offer enterprise-grade engineering expertise to modernize your technology stack, 
                streamline operations, and accelerate growth through smart software solutions.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <SectionAccent />

      {/* Experience Section */}
      <section className="py-20 lg:py-24">
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
            <ScrollAnimation>
              <Card className="border-2 hover:border-primary/50 transition-all duration-500 hover-lift group overflow-hidden relative">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-orange-600 font-bold text-xl">☁️</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-orange-700 transition-colors">Enterprise-Scale Experience</CardTitle>
                      <CardDescription className="text-lg">Amazon Web Services - Senior Engineer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              <CardContent className="relative z-10">
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
            </ScrollAnimation>

            <ScrollAnimation>
              <Card className="border-2 hover:border-primary/50 transition-all duration-500 hover-lift group overflow-hidden relative">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-blue-600 font-bold text-xl">🚀</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-blue-700 transition-colors">Innovation & User Experience</CardTitle>
                      <CardDescription className="text-lg">Opendoor - Product Engineering</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              <CardContent className="relative z-10">
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
            </ScrollAnimation>
          </div>

          {/* Innovation & Education */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation>
              <Card className="text-center group hover:shadow-xl transition-all duration-500 hover-lift border-2 hover:border-green-200 relative overflow-hidden h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <CardHeader className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-green-600 font-bold text-2xl">🎓</span>
                  </div>
                  <CardTitle className="group-hover:text-green-700 transition-colors">Dartmouth College</CardTitle>
                  <CardDescription>Computer Science Graduate</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground mb-4">
                    Strong foundation in computer science fundamentals, algorithms, 
                    and software engineering principles from Dartmouth College.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation>
              <Card className="text-center group hover:shadow-xl transition-all duration-500 hover-lift border-2 hover:border-purple-200 relative overflow-hidden h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <CardHeader className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-purple-600 font-bold text-2xl">🦾</span>
                  </div>
                  <CardTitle className="group-hover:text-purple-700 transition-colors">Patent Holder</CardTitle>
                  <CardDescription>Mobile Virtual Player Tactical</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground mb-4">
                    Co-inventor and patent holder for the MVP Tactical HEKTR system, 
                    demonstrating a track record of creativity and cutting-edge problem solving.
                  </p>
                  <Button variant="outline" size="sm" className="group-hover:border-purple-400 transition-colors" asChild>
                    <a 
                      href="https://www.mvprobotics.com/tactical"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View HEKTR System
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation>
              <Card className="text-center group hover:shadow-xl transition-all duration-500 hover-lift border-2 hover:border-red-200 relative overflow-hidden h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <CardHeader className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-red-600 font-bold text-2xl">🎙️</span>
                  </div>
                  <CardTitle className="group-hover:text-red-700 transition-colors">Podcast Host</CardTitle>
                  <CardDescription>The Rest Period Podcast</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground mb-4">
                    Host of The Rest Period Podcast, sharing insights on technology, 
                    entrepreneurship, and business strategy.  And just having fun.
                  </p>
                  <Button variant="outline" size="sm" className="group-hover:border-red-400 transition-colors" asChild>
                    <a href="https://rest-period.com" target="_blank" rel="noopener noreferrer">
                      See What We&apos;re Building
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
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
              <Button size="lg" className="hover-lift" asChild>
                <Link href="/contact">Start Your Digital Transformation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
