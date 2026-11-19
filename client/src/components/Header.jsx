import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { services } from './Services'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

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
          <Link className="brand" to="/" aria-label="AVEX home">
            <img className="brand-logo" src="/images/avex-logo-on-black.png" alt="" />
          </Link>
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
          <Link className="cta" to="/contact">Let's Talk <span aria-hidden="true">→</span></Link>
          <button
            className="nav-toggle"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span aria-hidden="true">{open ? '✕' : '☰'}</span>
          </button>
        </div>

        <div className={`mobile-menu ${open ? 'open' : ''}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/team" onClick={() => setOpen(false)}>Team</NavLink>
          <div className="mobile-services">
            <div className="mobile-service-heading">
              <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
              <button type="button" aria-label="Toggle services submenu" aria-expanded={servicesOpen} onClick={() => setServicesOpen(!servicesOpen)}><span aria-hidden="true">⌄</span></button>
            </div>
            <div className={`mobile-service-links${servicesOpen ? ' is-open' : ''}`}>
              {services.map((service) => <NavLink key={service.slug} to={`/services/${service.slug}`} onClick={() => setOpen(false)}>{service.title}</NavLink>)}
            </div>
          </div>
          <NavLink to="/solutions" onClick={() => setOpen(false)}>Solutions</NavLink>
          <NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </div>
      </div>
    </header>
  )
}
