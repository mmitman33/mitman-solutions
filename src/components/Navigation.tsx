"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/icon-only-large.png"
            alt="Mitman Solutions Logo"
            width={55}
            height={55}
            className="object-contain hover:scale-110 transition-transform duration-300"
          />
          <span className="font-extrabold text-xl">Mitman Solutions</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link 
              href="/" 
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
