import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const backgrounds = [
  "/images/service-data-analytics.jpeg",
  "/images/service-web-development.jpg",
  "/images/service-software.jpg",
];

export default function Hero() {
  const [activeBackground, setActiveBackground] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const interval = window.setInterval(() => {
      setActiveBackground((current) => (current + 1) % backgrounds.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-backdrops" aria-hidden="true">
        {backgrounds.map((image, index) => (
          <div
            className={`hero-backdrop${activeBackground === index ? " is-active" : ""}`}
            key={image}
            style={{ backgroundImage: `url("${image}")` }}
          />
        ))}
      </div>
      <div className="hero-content">
        <span className="hero-eyebrow">AVEX · DIGITAL ENGINEERING</span>
        <h1 id="hero-title" className="hero-title">
          <span className="hero-title-kicker">Creative</span>
          <span className="hero-title-gradient">Digital</span>
          <span className="hero-title-main"><span className="hero-title-line" aria-hidden="true" />&amp; Technology</span>
        </h1>
        <p>We turn ambitious ideas into thoughtful digital products, intelligent systems, and experiences built for what comes next.</p>
        <div className="hero-actions">
          <Link to="/services" className="hero-primary-link">Explore our services <span aria-hidden="true">↗</span></Link>
          <Link to="/projects" className="hero-secondary-link">See our work</Link>
        </div>
      </div>
      <div className="hero-caption" aria-hidden="true"><span>Ideas into impact</span><span className="hero-caption-line" /></div>
    </section>
  );
}
