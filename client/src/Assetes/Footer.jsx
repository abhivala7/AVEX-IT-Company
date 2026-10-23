import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer footer-premium" role="contentinfo">
      <div className="footer-inner footer-premium-inner">
        <div className="brand-col">
          <Link className="brand" to="/" aria-label="AVEX home">AVEX</Link>
          <p className="muted">Thoughtful digital products and technology solutions for growing businesses.</p>
          <div className="footer-capability-line" aria-label="Digital engineering, software, technology">
            <span>Digital Engineering</span><i aria-hidden="true">·</i>
            <span>Software</span><i aria-hidden="true">·</i>
            <span>Technology</span>
          </div>
        </div>

        <nav className="footer-column" aria-label="Company navigation">
          <h4>Company</h4>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/team">Team</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <nav className="footer-column" aria-label="Services and resources">
          <h4>Resources</h4>
          <div className="footer-links">
            <Link to="/services">Web Development</Link>
            <Link to="/services">Software Development</Link>
            <Link to="/services">UI/UX Design</Link>
            <Link to="/services">Cloud Solutions</Link>
            <Link to="/services">Data &amp; Analytics</Link>
            <Link to="/solutions">Digital Transformation</Link>
          </div>
        </nav>

        <div className="footer-column footer-contact">
          <h4>Let's build something meaningful.</h4>
          <p className="muted">Have a project in mind? Let's create something great together.</p>
          <a className="footer-email" href="mailto:thymevala@gmail.com">thymevala@gmail.com</a>
          <Link className="footer-cta" to="/contact">Let's Talk <span aria-hidden="true">→</span></Link>
        </div>
      </div>

      <div className="footer-bottom footer-bar">
        <div className="footer-copyright">© {year} AVEX. All rights reserved.</div>
        <div className="footer-legal" aria-label="Legal information">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
        <div className="built-with muted">Built with thoughtful technology.</div>
      </div>
    </footer>
  )
}
