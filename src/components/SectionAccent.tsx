"use client"

import Image from "next/image";
import { ScrollAnimation } from "./ScrollAnimation";

interface SectionAccentProps {
  className?: string;
}

export function SectionAccent({ className = "" }: SectionAccentProps) {
  return (
    <div className={`py-8 lg:py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="flex items-center justify-center space-x-4 lg:space-x-8">
            {/* Left line */}
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/60"></div>
            
            {/* Center accent */}
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center w-16 h-12">
                <Image
                  src="/images/lightning-bolt.jpg"
                  alt="Lightning Bolt"
                  width={64}
                  height={48}
                  className="animate-lightning-pulse"
                  priority
                />
              </div>
            </div>
            
            {/* Right line */}
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/30 to-primary/60"></div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
