import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-purple-50/20 py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Enterprise-Grade Solutions
              <span className="text-primary block">for Modern Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              No matter your size, I deliver scalable software solutions 
              that drive growth, improve efficiency, and create competitive advantages.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Start Your Project Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions backed by enterprise experience at AWS and proven startup success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-2xl">🌐</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Web Application Development</CardTitle>
                    <CardDescription className="text-lg">Full-stack solutions built for scale</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Custom web applications using modern frameworks like React, Next.js, and Node.js. 
                  Built with enterprise-grade architecture principles learned at AWS.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• React & Next.js</div>
                  <div>• TypeScript</div>
                  <div>• Node.js & Express</div>
                  <div>• PostgreSQL & MongoDB</div>
                  <div>• AWS Cloud Integration</div>
                  <div>• RESTful APIs</div>
                  <div>• Real-time Features</div>
                  <div>• Performance Optimization</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-green-600 font-bold text-2xl">🛒</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">E-commerce Solutions</CardTitle>
                    <CardDescription className="text-lg">Online stores that convert and scale</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Complete e-commerce platforms with payment processing, inventory management, 
                  and advanced analytics to maximize your online revenue.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• Shopify & WooCommerce</div>
                  <div>• Custom E-commerce</div>
                  <div>• Payment Integration</div>
                  <div>• Inventory Management</div>
                  <div>• SEO Optimization</div>
                  <div>• Analytics & Reporting</div>
                  <div>• Mobile Optimization</div>
                  <div>• Conversion Optimization</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-2xl">🤖</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">AI & Automation</CardTitle>
                    <CardDescription className="text-lg">Generative AI solutions for business</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Integrate cutting-edge AI capabilities into your business processes to automate tasks, 
                  enhance customer experiences, and unlock new opportunities.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• ChatGPT Integration</div>
                  <div>• Custom AI Models</div>
                  <div>• Process Automation</div>
                  <div>• Natural Language Processing</div>
                  <div>• Data Analysis & Insights</div>
                  <div>• Chatbots & Virtual Assistants</div>
                  <div>• Content Generation</div>
                  <div>• Predictive Analytics</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-2xl">☁️</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Cloud & Infrastructure</CardTitle>
                    <CardDescription className="text-lg">AWS expertise for scalable solutions</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Leverage my AWS experience to build cloud-native applications that scale automatically, 
                  reduce costs, and improve reliability.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• AWS Architecture</div>
                  <div>• Serverless Solutions</div>
                  <div>• Container Orchestration</div>
                  <div>• CI/CD Pipelines</div>
                  <div>• Database Migration</div>
                  <div>• Security & Compliance</div>
                  <div>• Cost Optimization</div>
                  <div>• Performance Monitoring</div>
                </div>
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
