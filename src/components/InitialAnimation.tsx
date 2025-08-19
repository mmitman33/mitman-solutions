"use client"

import { useEffect, useRef } from "react"

interface InitialAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function InitialAnimation({ children, className = "", delay = 0 }: InitialAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Start with hidden state
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    
    // Trigger animation after delay
    const timer = setTimeout(() => {
      element.style.transition = "all 1.2s cubic-bezier(0.4, 0, 0.2, 1)"
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
