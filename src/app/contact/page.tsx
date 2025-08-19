"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Business Inquiry from ${formData.name} - ${formData.company || 'Individual'}`);
    const body = encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}

Message:
${formData.message}

---
This message was sent from the Mitman Solutions contact form.`);
    
    const mailtoLink = `mailto:mitman.solutions@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-green-50/20 py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Let&apos;s Build Something
              <span className="text-primary block">Amazing</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to accelerate your impact? 
              Let&apos;s discuss your needs and start shipping products that your customers love.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Send a Message</h2>
                <p className="text-muted-foreground text-lg">
                  Fill out the form below and I&apos;ll get back to you within 24 hours to discuss your project.
                </p>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Project Inquiry</CardTitle>
                  <CardDescription>
                    Tell me about your project and how I can help accelerate your business goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                        placeholder="Tell me about your project, timeline, budget, and specific requirements..."
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                <p className="text-muted-foreground text-lg">
                  Prefer to reach out directly? Use any of the methods below to connect with me.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xl">📧</span>
                      </div>
                      <div>
                        <CardTitle>Email</CardTitle>
                        <CardDescription>Quick response guaranteed</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="mailto:mitman.solutions@gmail.com">
                        mitman.solutions@gmail.com
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 font-bold text-xl">📱</span>
                      </div>
                      <div>
                        <CardTitle>Phone</CardTitle>
                        <CardDescription>Call or text anytime</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="tel:414-526-6926">
                        (414) 526-6926
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-xl">💼</span>
                      </div>
                      <div>
                        <CardTitle>LinkedIn</CardTitle>
                        <CardDescription>Professional networking</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <a 
                        href="https://www.linkedin.com/in/matt-mitman-01191688/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Connect on LinkedIn
                      </a>
                    </Button>
                  </CardContent>
                </Card>


              </div>

              {/* Location */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-xl">📍</span>
                    </div>
                    <div>
                      <CardTitle>Location</CardTitle>
                      <CardDescription>Serving clients nationwide</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <strong>Based in Wisconsin</strong><br/>
                    Working with businesses across the United States<br/>
                    Remote collaboration & on-site consulting available
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-r from-slate-50 to-blue-50/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about working with Mitman Solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What&apos;s your typical project timeline?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Project timelines vary based on scope and complexity. Simple websites typically take 2-4 weeks, 
                  while complex applications can take 2-6 months. I&apos;ll provide detailed timeline estimates during our initial consultation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you work with startups and small businesses?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely! I have experience working with businesses of all sizes. 
                  I&apos;ll gladly level-set my approach to match your budget, growth stage, and business needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What technologies do you specialize in?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I specialize in modern web technologies (React, Next.js, Node.js) and cloud platforms (AWS), 
                  AI integration, and e-commerce solutions. In my 7+ years of industry experience (AWS, Opendoor, MVP Tactical) I&apos;ve delivered enterprise-grade products for businesses of all sizes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you provide ongoing support after launch?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! I offer various support packages including maintenance, feature updates, performance monitoring, 
                  and technical consultation to ensure your products continue to meet your evolving needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Accelerate Your Business?
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
