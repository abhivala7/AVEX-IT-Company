import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 8)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`} role="banner">
      <div className="nav-inner">
        <div className="nav-left">
          <Link className="brand" to="/" aria-label="AVEX home">AVEX</Link>
        </div>

        <div className="nav-center">
          <nav className="nav-links" aria-label="Main navigation">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/team">Team</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/solutions">Solutions</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>

        <div className="nav-right">
          <Link className="cta" to="/contact">Let's Talk</Link>
          <button
            className="nav-toggle"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>

        <div className={`mobile-menu ${open ? 'open' : ''}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/team" onClick={() => setOpen(false)}>Team</NavLink>
          <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/solutions" onClick={() => setOpen(false)}>Solutions</NavLink>
          <NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </div>
      </div>
    </header>
  )
}
