import React, { useEffect, useRef } from 'react'

export default function RevealOnScroll({ as: Element = 'div', className = '', order = 0, children, ...props }) {
  const elementRef = useRef(null)
  useEffect(() => {
    const element = elementRef.current
    if (!element) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      element.classList.add('is-revealed')
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      element.classList.add('is-revealed')
      observer.unobserve(entry.target)
    }, { threshold: 0.12, rootMargin: '0px 0px -16px 0px' })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Element
      {...props}
      ref={elementRef}
      className={`reveal-on-scroll${className ? ` ${className}` : ''}`}
      style={{ ...props.style, '--reveal-order': Math.min(order, 5) }}
    >
      {children}
    </Element>
  )
}
