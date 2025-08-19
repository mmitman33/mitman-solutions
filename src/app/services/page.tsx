import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { InitialAnimation } from "@/components/InitialAnimation";
import { SectionAccent } from "@/components/SectionAccent";

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-purple-50/20 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <InitialAnimation delay={400}>
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                I&apos;m Here to Help.
                <span className="text-3xl sm:text-4xl lg:text-5xl text-foreground block font-semibold mt-6 mb-4">
                  Whether You&apos;re:
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-primary block font-extrabold mt-4">
                  <span className="inline-block animate-fade-in" style={{"animationDelay": "1.0s"} as React.CSSProperties}>Launching</span>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <span className="inline-block animate-fade-in" style={{"animationDelay": "1.6s"} as React.CSSProperties}>Scaling</span>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <span className="inline-block animate-fade-in" style={{"animationDelay": "2.2s"} as React.CSSProperties}>Streamlining</span>
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Working on a new product? Growing your business? Optimizing operations?
                <strong className="text-foreground font-extrabold"> We&apos;ll deliver software that your customers will love.</strong>
              </p>
              <Button size="lg" className="hover-lift text-base px-8" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </InitialAnimation>
        </div>
      </section>

      <SectionAccent />

      {/* Core Services */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation className="text-center space-y-4 mb-12">
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                Here&apos;s How I <span className="text-primary font-extrabold">Help You Win</span>
              </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you&apos;re starting fresh, growing fast, or optimizing your operations
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <ScrollAnimation className="stagger-animation" style={{"--stagger-delay": "0.3s"} as React.CSSProperties}>
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover-lift text-center">
          <CardHeader>
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mx-auto mb-4 animate-rocket">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-green-600"
              >
                <path
                  d="M20 5L25 15H35L27 21L30 32L20 26L10 32L13 21L5 15H15L20 5Z"
                  fill="currentColor"
                  className="animate-pulse"
                />
                <circle cx="20" cy="35" r="2" fill="currentColor" opacity="0.7" />
                <circle cx="15" cy="37" r="1.5" fill="currentColor" opacity="0.5" />
                <circle cx="25" cy="37" r="1.5" fill="currentColor" opacity="0.5" />
              </svg>
            </div>
            <CardTitle className="text-xl text-foreground font-extrabold">🚀 Launch</CardTitle>
            <CardDescription className="text-lg">
              Got a product idea or starting a new business?
            </CardDescription>
          </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground font-extrabold">I&apos;ll bring your vision to life.</strong> From MVP development to full product launches, 
                  I&apos;ll handle the technical complexity so you can focus on your customers.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground text-left">
                  <li className="font-semibold">• MVP & prototype development</li>
                  <li className="font-semibold">• E-commerce stores & marketplaces</li>
                  <li className="font-semibold">• Mobile app development</li>
                  <li className="font-semibold">• Brand identity & web presence</li>
                </ul>
              </CardContent>
            </Card>
            </ScrollAnimation>

            <ScrollAnimation className="stagger-animation" style={{"--stagger-delay": "0.6s"} as React.CSSProperties}>
              <Card className="border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover-lift text-center">
          <CardHeader>
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4 animate-growth">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-600"
              >
                <rect x="8" y="25" width="4" height="10" fill="currentColor" />
                <rect x="14" y="20" width="4" height="15" fill="currentColor" />
                <rect x="20" y="15" width="4" height="20" fill="currentColor" />
                <rect x="26" y="10" width="4" height="25" fill="currentColor" />
                <rect x="32" y="5" width="4" height="30" fill="currentColor" />
                <path d="M28 12L32 8L36 12" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <CardTitle className="text-xl text-foreground font-extrabold">📈 Scale</CardTitle>
            <CardDescription className="text-lg">
              Growing fast and hitting technical limits?
            </CardDescription>
          </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground font-extrabold">I&apos;ll help you scale without breaking.</strong> Enterprise-grade infrastructure and 
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
            </ScrollAnimation>

            <ScrollAnimation className="stagger-animation" style={{"--stagger-delay": "0.9s"} as React.CSSProperties}>
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover-lift text-center">
          <CardHeader>
            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mx-auto mb-4 overflow-hidden">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-purple-600"
              >
                <path d="M5 15h10v2H5z" fill="currentColor" className="animate-streamline" />
                <path d="M5 20h14v2H5z" fill="currentColor" className="animate-streamline" style={{"animationDelay": "0.5s"} as React.CSSProperties} />
                <path d="M5 25h8v2H5z" fill="currentColor" className="animate-streamline" style={{"animationDelay": "1s"} as React.CSSProperties} />
                <circle cx="30" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M27 20l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <CardTitle className="text-xl text-foreground font-extrabold">⚡ Streamline</CardTitle>
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
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="bg-gradient-to-r from-slate-50 to-blue-50/30 py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Strategic Technical Consulting</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beyond development, I provide strategic guidance so you make the right technical decisions and ship products that your customers love.
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollAnimation className="stagger-animation" style={{"--stagger-delay": "0.2s"} as React.CSSProperties}>
              <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-2xl">🎯</span>
                </div>
                <CardTitle className="text-lg">Technical Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Align your technical investments with business goals and create a roadmap for digital transformation.
                </p>
              </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation className="stagger-animation" style={{"--stagger-delay": "0.4s"} as React.CSSProperties}>
              <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-2xl">🏗️</span>
                </div>
                <CardTitle className="text-lg">Architecture Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Evaluate your existing stack and design scalable systems to support future growth.
                </p>
              </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation className="stagger-animation" style={{"--stagger-delay": "0.6s"} as React.CSSProperties}>
              <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-2xl">👥</span>
                </div>
                <CardTitle className="text-lg">Team Mentoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Level-up your team with best practices, tech talks, system designs, code reviews, and technical leadership.
                </p>
              </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation className="stagger-animation" style={{"--stagger-delay": "0.8s"} as React.CSSProperties}>
              <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold text-2xl">⚡</span>
                </div>
                <CardTitle className="text-lg">System Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Identify bottlenecks and optimize your applications for speed, scalability, and cost.
                </p>
              </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ScrollAnimation className="stagger-animation" style={{"--stagger-delay": "0.2s"} as React.CSSProperties}>
              <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-blue-600 font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold">Discovery & Strategy</h3>
              <p className="text-muted-foreground">
                Deep dive into your business goals, technical requirements, and customer needs to create a comprehensive project plan.
              </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation className="stagger-animation" style={{"--stagger-delay": "0.4s"} as React.CSSProperties}>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-green-600 font-bold text-2xl">2</span>
                </div>
                <h3 className="text-xl font-semibold">Design & Architecture</h3>
                <p className="text-muted-foreground">
                  Create detailed technical specifications, user experience designs, and scalable architecture blueprints.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation className="stagger-animation" style={{"--stagger-delay": "0.6s"} as React.CSSProperties}>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-purple-600 font-bold text-2xl">3</span>
                </div>
                <h3 className="text-xl font-semibold">Development & Testing</h3>
                <p className="text-muted-foreground">
                  Build your solution using modern development practices with continuous integration and comprehensive testing.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation className="stagger-animation" style={{"--stagger-delay": "0.8s"} as React.CSSProperties}>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-red-600 font-bold text-2xl">4</span>
                </div>
                <h3 className="text-xl font-semibold">Launch & Support</h3>
                <p className="text-muted-foreground">
                  Deploy your solution with monitoring and provide ongoing support to ensure continued success and growth.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-blue-50/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let&apos;s discuss how we can leverage technology to accelerate your business goals and create a lasting competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="hover-lift text-base px-8" asChild>
                <a href="tel:414-526-6926">Call (414) 526-6926</a>
              </Button>
              <Button size="lg" className="hover-lift text-base px-8" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
