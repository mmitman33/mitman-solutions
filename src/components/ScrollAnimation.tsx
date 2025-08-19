"use client"

import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function ScrollAnimation({ children, className = "", style }: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use requestAnimationFrame for smooth animation trigger
            requestAnimationFrame(() => {
              entry.target.classList.add("animate-in")
              
              // Clean up will-change after animation completes
              const animationDuration = entry.target.classList.contains("stagger-animation") ? 1400 : 1200
              const delay = entry.target.classList.contains("stagger-animation") 
                ? parseFloat(getComputedStyle(entry.target).getPropertyValue("--stagger-delay") || "0s") * 1000 
                : 0
              
              setTimeout(() => {
                entry.target.classList.add("animate-complete")
              }, animationDuration + delay)
            })
            observer.unobserve(entry.target) // Observe once
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  return (
    <div ref={elementRef} className={`animate-on-scroll ${className}`} style={style}>
      {children}
    </div>
  )
}
