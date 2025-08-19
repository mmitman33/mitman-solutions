import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-purple-50/20 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              We&apos;re Here to Help Whether You&apos;re
              <span className="text-primary block font-extrabold">Launching • Scaling • Streamlining</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              From new product ideas to growing businesses to operational efficiency - 
              <strong className="text-foreground font-extrabold">we deliver the technology solutions you need to succeed.</strong>
            </p>
            <Button size="lg" className="hover-lift" asChild>
              <Link href="/contact">Let&apos;s Talk About Your Needs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Three Ways We <span className="text-primary font-extrabold">Help You Win</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you&apos;re starting fresh, growing fast, or optimizing operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover-lift text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/images/icon-only-large.png"
                    alt="Launch Icon"
                    width={40}
                    height={40}
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <CardTitle className="text-xl text-foreground font-extrabold">🚀 Launching</CardTitle>
                <CardDescription className="text-lg">
                  Got a product idea or starting a new business?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground font-extrabold">We&apos;ll bring your vision to life.</strong> From MVP development to full product launches, 
                  we handle the technical complexity so you can focus on your customers.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground text-left">
                  <li className="font-semibold">• MVP & prototype development</li>
                  <li className="font-semibold">• E-commerce stores & marketplaces</li>
                  <li className="font-semibold">• Mobile app development</li>
                  <li className="font-semibold">• Brand identity & web presence</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover-lift text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/images/icon-only-large.png"
                    alt="Scale Icon"
                    width={40}
                    height={40}
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <CardTitle className="text-xl text-foreground font-extrabold">📈 Scaling</CardTitle>
                <CardDescription className="text-lg">
                  Growing fast and hitting technical limits?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground font-extrabold">We&apos;ll help you scale without breaking.</strong> Enterprise-grade infrastructure and 
                  performance optimization to handle your growth.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground text-left">
                  <li className="font-semibold">• Cloud migration & optimization</li>
                  <li className="font-semibold">• Performance & speed improvements</li>
                  <li className="font-semibold">• Database optimization</li>
                  <li className="font-semibold">• Auto-scaling infrastructure</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover-lift text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/images/icon-only-large.png"
                    alt="Streamline Icon"
                    width={40}
                    height={40}
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <CardTitle className="text-xl text-foreground font-extrabold">⚡ Streamlining</CardTitle>
                <CardDescription className="text-lg">
                  Manual processes slowing you down?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground font-extrabold">We&apos;ll automate what matters.</strong> Custom tools and AI integration to eliminate 
                  repetitive tasks and improve efficiency.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground text-left">
                  <li className="font-semibold">• Process automation & workflows</li>
                  <li className="font-semibold">• AI chatbots & virtual assistants</li>
                  <li className="font-semibold">• Data analysis & reporting tools</li>
                  <li className="font-semibold">• Integration with existing systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="bg-gradient-to-r from-slate-50 to-blue-50/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Strategic Technology Consulting</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beyond development, I provide strategic guidance to help you make the right technology decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-2xl">🎯</span>
                </div>
                <CardTitle className="text-lg">Technology Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Align your technology investments with business goals and create a roadmap for digital transformation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-2xl">🏗️</span>
                </div>
                <CardTitle className="text-lg">Architecture Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Evaluate existing systems and design scalable architectures that support future growth.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-2xl">👥</span>
                </div>
                <CardTitle className="text-lg">Team Mentoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Level up your development team with best practices, code reviews, and technical leadership.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold text-2xl">⚡</span>
                </div>
                <CardTitle className="text-lg">Performance Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Identify bottlenecks and optimize applications for speed, scalability, and cost-effectiveness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">My Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-blue-600 font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold">Discovery & Strategy</h3>
              <p className="text-muted-foreground">
                Deep dive into your business goals, technical requirements, and user needs to create a comprehensive project plan.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-green-600 font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold">Design & Architecture</h3>
              <p className="text-muted-foreground">
                Create detailed technical specifications, user experience designs, and scalable architecture blueprints.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-purple-600 font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold">Development & Testing</h3>
              <p className="text-muted-foreground">
                Build your solution using modern development practices with continuous integration and comprehensive testing.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-red-600 font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-semibold">Launch & Support</h3>
              <p className="text-muted-foreground">
                Deploy your solution with monitoring and provide ongoing support to ensure continued success and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-blue-50/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let&apos;s discuss how we can leverage technology to accelerate your business goals and create lasting competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:414-526-6926">Call (414) 526-6926</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
