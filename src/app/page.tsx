import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Transform Your Business with 
                <span className="text-primary"> Expert Software Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Professional software consulting and freelancing services to help your business thrive in the digital age. 
                From custom web applications to mobile solutions and technical strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a 
                    href="https://www.linkedin.com/in/matt-mitman-01191688/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/mitman-solutions.jpg"
                alt="Mitman Solutions"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>
                  Modern, responsive web applications built with the latest technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• React & Next.js Applications</li>
                  <li>• Full-stack Development</li>
                  <li>• E-commerce Solutions</li>
                  <li>• Progressive Web Apps</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mobile Development</CardTitle>
                <CardDescription>
                  Native and cross-platform mobile applications for iOS and Android
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• React Native Apps</li>
                  <li>• iOS & Android Development</li>
                  <li>• App Store Deployment</li>
                  <li>• Performance Optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technical Consulting</CardTitle>
                <CardDescription>
                  Strategic guidance and architecture planning for your technology initiatives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Technology Strategy</li>
                  <li>• Architecture Planning</li>
                  <li>• Code Reviews</li>
                  <li>• Team Mentoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let&apos;s discuss how we can help transform your ideas into powerful software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
