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
            // Handle stagger animations with delays
            if (entry.target.classList.contains("stagger-animation")) {
              const delay = getComputedStyle(entry.target).getPropertyValue("--stagger-delay") || "0s"
              const delayMs = parseFloat(delay) * 1000
              
              setTimeout(() => {
                entry.target.classList.add("animate-in")
              }, delayMs)
            } else {
              entry.target.classList.add("animate-in")
            }
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
