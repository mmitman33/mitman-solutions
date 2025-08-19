import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ScrollAnimation";

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
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight animate-fade-in">
                How We <span className="text-primary font-extrabold">Transform</span> Your Business
              </h1>
            
            <ScrollAnimation>
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Enterprise-grade engineering expertise that modernizes your technology stack, 
                streamlines operations, and accelerates growth through smart software solutions.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button size="lg" className="hover-lift animate-slide-up h-14" asChild>
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" className="hover-lift animate-slide-up h-14" style={{"animationDelay": "0.2s"} as React.CSSProperties} asChild>
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </ScrollAnimation>

            {/* Enhanced Transformation Animation */}
            <ScrollAnimation>
              <div className="flex justify-center mt-24 mb-8">
                <div className="relative">
                  <svg 
                    width="500" 
                    height="200" 
                    viewBox="0 0 500 200" 
                    className="animate-fade-in"
                  >
                    {/* Background Tech Grid */}
                    <defs>
                      <pattern id="techGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
                      </pattern>
                    </defs>
                    <rect width="500" height="200" fill="url(#techGrid)" className="animate-pulse" style={{"animationDelay": "0.5s"} as React.CSSProperties} />
                    
                    {/* Initial Stick Figure (fades out) */}
                    <g className="animate-fade-in" style={{"animationDelay": "0.5s"} as React.CSSProperties}>
                      <g opacity="1">
                        <animateTransform
                          attributeName="transform"
                          type="scale"
                          values="1;1;0"
                          dur="4s"
                          begin="2s"
                        />
                        <animate
                          attributeName="opacity"
                          values="1;1;0"
                          dur="4s"
                          begin="2s"
                        />
                        
                        {/* Basic Stick Figure */}
                        <circle cx="250" cy="40" r="12" fill="none" stroke="#1f2937" strokeWidth="3" />
                        <line x1="250" y1="52" x2="250" y2="120" stroke="#1f2937" strokeWidth="3" />
                        <line x1="250" y1="75" x2="220" y2="90" stroke="#1f2937" strokeWidth="3" />
                        <line x1="250" y1="75" x2="280" y2="90" stroke="#1f2937" strokeWidth="3" />
                        <line x1="250" y1="120" x2="225" y2="150" stroke="#1f2937" strokeWidth="3" />
                        <line x1="250" y1="120" x2="275" y2="150" stroke="#1f2937" strokeWidth="3" />
                      </g>
                    </g>
                    
                    {/* Transformation Effect */}
                    <g className="animate-pulse" style={{"animationDelay": "2s"} as React.CSSProperties}>
                      {/* Energy Burst */}
                      <circle cx="250" cy="95" r="30" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0">
                        <animate attributeName="r" values="0;60;0" dur="2s" begin="2s" />
                        <animate attributeName="opacity" values="0;0.8;0" dur="2s" begin="2s" />
                      </circle>
                      <circle cx="250" cy="95" r="20" fill="none" stroke="#10b981" strokeWidth="3" opacity="0">
                        <animate attributeName="r" values="0;40;0" dur="1.5s" begin="2.5s" />
                        <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="2.5s" />
                      </circle>
                    </g>
                    
                    {/* High-Tech Robot (appears after transformation) */}
                    <g opacity="0" className="animate-fade-in">
                      <animate
                        attributeName="opacity"
                        values="0;0;1"
                        dur="2s"
                        begin="4s"
                        fill="freeze"
                      />
                      <animateTransform
                        attributeName="transform"
                        type="scale"
                        values="0;0;1"
                        dur="2s"
                        begin="4s"
                        fill="freeze"
                      />
                      
                      {/* Robot Head with visor */}
                      <rect x="235" y="25" width="30" height="25" fill="#1f2937" rx="5" />
                      <rect x="240" y="30" width="20" height="8" fill="#3b82f6" rx="2" className="animate-pulse" />
                      <circle cx="245" cy="34" r="2" fill="#10b981" className="animate-ping" />
                      <circle cx="255" cy="34" r="2" fill="#10b981" className="animate-ping" style={{"animationDelay": "0.5s"} as React.CSSProperties} />
                      
                      {/* Robot Body - High-tech chest panel */}
                      <rect x="235" y="50" width="30" height="40" fill="#374151" rx="3" />
                      <rect x="240" y="55" width="20" height="15" fill="#1f2937" rx="2" />
                      <rect x="242" y="57" width="16" height="3" fill="#3b82f6" className="animate-pulse" />
                      <rect x="242" y="62" width="12" height="2" fill="#10b981" />
                      <rect x="242" y="66" width="8" height="2" fill="#f59e0b" />
                      
                      {/* Power Core */}
                      <circle cx="250" cy="80" r="6" fill="#3b82f6" className="animate-pulse" />
                      <circle cx="250" cy="80" r="3" fill="#60a5fa" className="animate-ping" />
                      
                      {/* Robot Arms - Mechanical */}
                      <rect x="205" y="65" width="25" height="6" fill="#374151" rx="3" />
                      <rect x="270" y="65" width="25" height="6" fill="#374151" rx="3" />
                      <circle cx="210" cy="68" r="4" fill="#1f2937" />
                      <circle cx="290" cy="68" r="4" fill="#1f2937" />
                      <rect x="200" y="72" width="8" height="15" fill="#374151" rx="2" />
                      <rect x="292" y="72" width="8" height="15" fill="#374151" rx="2" />
                      
                      {/* Robot Legs - Mechanical */}
                      <rect x="240" y="90" width="8" height="35" fill="#374151" rx="2" />
                      <rect x="252" y="90" width="8" height="35" fill="#374151" rx="2" />
                      <rect x="235" y="125" width="18" height="8" fill="#1f2937" rx="2" />
                      <rect x="247" y="125" width="18" height="8" fill="#1f2937" rx="2" />
                      
                      {/* Jet Boosters */}
                      <ellipse cx="244" cy="133" rx="3" ry="6" fill="#ef4444" className="animate-pulse" />
                      <ellipse cx="256" cy="133" rx="3" ry="6" fill="#ef4444" className="animate-pulse" style={{"animationDelay": "0.3s"} as React.CSSProperties} />
                    </g>
                    
                    {/* Floating Tech Elements */}
                    <g className="animate-float" style={{"animationDelay": "5s"} as React.CSSProperties}>
                      <text x="180" y="40" fontSize="14" fill="#3b82f6" className="font-bold">&lt;AI/&gt;</text>
                      <text x="320" y="50" fontSize="12" fill="#10b981" className="font-bold">{'{ CODE }'}</text>
                      <text x="150" y="120" fontSize="10" fill="#8b5cf6" className="font-bold">NEURAL NET</text>
                      <text x="350" y="110" fontSize="10" fill="#f59e0b" className="font-bold">BLOCKCHAIN</text>
                    </g>
                    
                    {/* Power Bar at Bottom */}
                    <g className="animate-fade-in" style={{"animationDelay": "1s"} as React.CSSProperties}>
                      <text x="250" y="170" fontSize="12" fill="#1f2937" textAnchor="middle" className="font-bold">POWER LEVEL</text>
                      
                      {/* Power Bar Background */}
                      <rect x="150" y="175" width="200" height="12" fill="#e5e7eb" rx="6" stroke="#374151" strokeWidth="1" />
                      
                      {/* Power Bar Fill - Animated */}
                      <rect x="152" y="177" width="0" height="8" fill="url(#powerGradient)" rx="4">
                        <animate attributeName="width" values="0;0;196" dur="6s" begin="1s" fill="freeze" />
                      </rect>
                      
                      {/* Power Level Text */}
                      <text x="365" y="183" fontSize="10" fill="#1f2937" className="font-bold">
                        <animate attributeName="opacity" values="0;0;1" dur="1s" begin="6s" fill="freeze" />
                        MAX POWER!
                      </text>
                      
                      {/* Power Gradient Definition */}
                      <defs>
                        <linearGradient id="powerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ef4444" />
                          <stop offset="30%" stopColor="#f59e0b" />
                          <stop offset="60%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </g>
                    
                    {/* Final Sparkle Effect */}
                    <g opacity="0">
                      <animate attributeName="opacity" values="0;0;1;0" dur="2s" begin="6s" />
                      <polygon points="100,30 102,35 107,35 103,38 105,43 100,40 95,43 97,38 93,35 98,35" fill="#fbbf24" className="animate-ping" />
                      <polygon points="400,60 402,65 407,65 403,68 405,73 400,70 395,73 397,68 393,65 398,65" fill="#fbbf24" className="animate-ping" />
                      <polygon points="120,140 122,145 127,145 123,148 125,153 120,150 115,153 117,148 113,145 118,145" fill="#fbbf24" className="animate-ping" />
                      <polygon points="380,140 382,145 387,145 383,148 385,153 380,150 375,153 377,148 373,145 378,145" fill="#fbbf24" className="animate-ping" />
                    </g>
                  </svg>
                </div>
              </div>
            </ScrollAnimation>
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
