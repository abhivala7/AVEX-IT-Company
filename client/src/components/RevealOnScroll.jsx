import React from 'react'

export default function RevealOnScroll({ as: Element = 'div', className = '', order = 0, children, ...props }) {
  return (
    <Element
      {...props}
      className={`reveal-on-scroll${className ? ` ${className}` : ''}`}
      style={{ ...props.style, '--reveal-order': Math.min(order, 8) }}
    >
      {children}
    </Element>
  )
}
