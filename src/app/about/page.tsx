import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-blue-50/30 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Meet Matt Mitman
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Senior Software Engineer turned entrepreneur, bringing enterprise-scale solutions 
                to businesses ready to accelerate their digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Let&apos;s Work Together</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a 
                    href="https://www.linkedin.com/in/matt-mitman-01191688/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/mitman-solutions-transparent.png"
                alt="Matt Mitman - Mitman Solutions"
                width={350}
                height={350}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Professional Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building scalable software solutions at world-class companies and helping businesses 
              leverage cutting-edge technology for growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-lg">AWS</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl">Amazon Web Services</CardTitle>
                    <CardDescription className="text-lg">Senior Software Engineer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Built and scaled cloud infrastructure solutions serving millions of customers globally. 
                  Specialized in distributed systems, microservices architecture, and high-availability solutions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Designed scalable cloud-native applications</li>
                  <li>• Implemented distributed systems and microservices</li>
                  <li>• Optimized performance for enterprise-scale workloads</li>
                  <li>• Mentored engineering teams on best practices</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">OD</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl">Opendoor</CardTitle>
                    <CardDescription className="text-lg">Software Engineer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Revolutionized real estate technology by building platforms that simplified home buying 
                  and selling through innovative software solutions and data-driven insights.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Developed real estate transaction platforms</li>
                  <li>• Built data analytics and pricing algorithms</li>
                  <li>• Created user-facing applications for seamless experiences</li>
                  <li>• Integrated with external APIs and financial systems</li>
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
                <CardDescription>Mobile Virtual Player Technology</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Inventor and patent holder for innovative mobile virtual player technology, 
                  demonstrating a track record of creating cutting-edge solutions.
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
                  entrepreneurship, and business strategy.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://rest-period.com" target="_blank" rel="noopener noreferrer">
                    Listen Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-r from-primary/5 to-blue-50/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              My Mission: Accelerating Business Through Technology
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Based in Wisconsin, I believe there&apos;s immense opportunity to help businesses 
              leverage the power of e-commerce, Generative AI, and modern software solutions 
              to accelerate their mission and drive unprecedented growth.
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
