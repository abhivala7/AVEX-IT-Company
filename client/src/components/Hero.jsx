import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-panel" id="home">
      <div className="hero-inner">
        <div className="hero-grid">
          {/* Left Column: Eyebrow, Heading, Description, CTA Buttons */}
          <div className="hero-left">
            <div className="hero-eyebrow">Digital engineering for modern business</div>
            <h1 className="hero-heading-reveal">
              <span className="hero-heading-line">
                <span className="hero-heading-inner">Building digital experiences that</span>
              </span>
              <span className="hero-heading-line">
                <span className="hero-heading-inner hero-heading-accent">move businesses forward.</span>
              </span>
            </h1>

            <p className="hero-description lead">
              AVEX creates thoughtful digital products, modern technology solutions, and experiences designed for growing businesses.
            </p>

            <div className="hero-ctas">
              <Link className="btn primary" to="/solutions">Explore Solutions</Link>
              <Link className="btn outline" to="/contact">Start a Project</Link>
            </div>
          </div>

          {/* Right Column: 3-Second Video-Like Animated Software Dashboard Showcase */}
          <div className="hero-right">
            <div className="hero-stage" aria-label="AVEX Software Platform Demonstration">
              {/* 0–0.7s: Ambient Canvas Glows & Tech Grid */}
              <div className="hero-stage-backdrop" aria-hidden="true">
                <div className="hero-glow-orb hero-glow-teal" />
                <div className="hero-glow-orb hero-glow-cyan" />
                <div className="hero-tech-grid" />
              </div>

              {/* 0–0.7s: Central Product Interface Window */}
              <div className="hero-dashboard-window">
                {/* Window Header */}
                <div className="hero-window-header">
                  <div className="hero-window-controls" aria-hidden="true">
                    <span className="hero-control-dot red" />
                    <span className="hero-control-dot yellow" />
                    <span className="hero-control-dot green" />
                  </div>
                  <div className="hero-window-title">
                    <span className="hero-window-badge">AVEX CORE</span>
                    <span className="hero-window-path">workspace / enterprise-analytics</span>
                  </div>
                  <div className="hero-window-status">
                    <span className="hero-status-pulse" />
                    <span className="hero-status-text">v2.4 ONLINE</span>
                  </div>
                </div>

                {/* Dashboard Body */}
                <div className="hero-dashboard-body">
                  {/* 0.7–1.5s: Top Metric KPIs */}
                  <div className="hero-kpi-row">
                    <div className="hero-kpi-card hero-kpi-1">
                      <div className="hero-kpi-label">API Throughput</div>
                      <div className="hero-kpi-value">99.98%</div>
                      <div className="hero-kpi-delta">+14.2% peak</div>
                    </div>
                    <div className="hero-kpi-card hero-kpi-2">
                      <div className="hero-kpi-label">Avg Latency</div>
                      <div className="hero-kpi-value">24ms</div>
                      <div className="hero-kpi-delta optimal">Optimized</div>
                    </div>
                    <div className="hero-kpi-card hero-kpi-3">
                      <div className="hero-kpi-label">Services Deployed</div>
                      <div className="hero-kpi-value">1,420+</div>
                      <div className="hero-kpi-delta">Active cluster</div>
                    </div>
                  </div>

                  {/* 1.5–2.3s: Central Analytics Chart with Animated Line */}
                  <div className="hero-chart-section">
                    <div className="hero-chart-header">
                      <div className="hero-chart-title">
                        <span>System Performance & Traffic</span>
                        <span className="hero-chart-tag">LIVE STREAM</span>
                      </div>
                      <div className="hero-chart-tabs" aria-hidden="true">
                        <span className="hero-tab active">24H</span>
                        <span className="hero-tab">7D</span>
                        <span className="hero-tab">30D</span>
                      </div>
                    </div>

                    <div className="hero-chart-container">
                      <svg className="hero-svg-chart" viewBox="0 0 520 160" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartAreaGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4e9e9a" stopOpacity="0.28" />
                            <stop offset="60%" stopColor="#216e6b" stopOpacity="0.08" />
                            <stop offset="100%" stopColor="#216e6b" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="chartLineGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#216e6b" />
                            <stop offset="50%" stopColor="#4e9e9a" />
                            <stop offset="100%" stopColor="#67d4cc" />
                          </linearGradient>
                        </defs>

                        {/* Background Grid Lines */}
                        <line x1="0" y1="40" x2="520" y2="40" className="hero-grid-line" />
                        <line x1="0" y1="80" x2="520" y2="80" className="hero-grid-line" />
                        <line x1="0" y1="120" x2="520" y2="120" className="hero-grid-line" />

                        {/* Area Fill */}
                        <path
                          className="hero-chart-area-fill"
                          d="M0 130 C40 120 70 125 110 95 C150 65 180 85 220 50 C260 15 290 45 330 35 C370 25 410 70 450 40 C480 20 500 25 520 15 V160 H0 Z"
                          fill="url(#chartAreaGradient)"
                        />

                        {/* Animated Line */}
                        <path
                          className="hero-chart-stroke"
                          d="M0 130 C40 120 70 125 110 95 C150 65 180 85 220 50 C260 15 290 45 330 35 C370 25 410 70 450 40 C480 20 500 25 520 15"
                          fill="none"
                          stroke="url(#chartLineGradient)"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        {/* Peak Node Point */}
                        <circle cx="330" cy="35" r="5" className="hero-chart-node" />
                        <circle cx="330" cy="35" r="9" className="hero-chart-node-pulse" />
                      </svg>

                      {/* Time Axis */}
                      <div className="hero-chart-time-axis">
                        <span>00:00</span>
                        <span>04:00</span>
                        <span>08:00</span>
                        <span>12:00</span>
                        <span>16:00</span>
                        <span>20:00</span>
                      </div>
                    </div>
                  </div>

                  {/* 1.5–2.3s: Infrastructure Progress Indicators */}
                  <div className="hero-infra-row">
                    <div className="hero-progress-group">
                      <div className="hero-progress-info">
                        <span className="hero-progress-title">Cloud Infrastructure Load</span>
                        <span className="hero-progress-pct">74%</span>
                      </div>
                      <div className="hero-progress-track">
                        <div className="hero-progress-bar hero-bar-cloud" style={{ '--target-fill': '74%' }} />
                      </div>
                    </div>
                    <div className="hero-progress-group">
                      <div className="hero-progress-info">
                        <span className="hero-progress-title">API Gateway Health</span>
                        <span className="hero-progress-pct">98.4%</span>
                      </div>
                      <div className="hero-progress-track">
                        <div className="hero-progress-bar hero-bar-gateway" style={{ '--target-fill': '98.4%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 0.7–1.5s: Three Floating UI Cards (settle at 2.3–3.0s with subtle breathing idle) */}
              {/* Card 1: Build & Release Status (Top Left) */}
              <div className="hero-float-card hero-float-build" aria-hidden="true">
                <div className="hero-card-icon-box cyan">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div className="hero-card-details">
                  <div className="hero-card-sub">CI/CD PIPELINE</div>
                  <div className="hero-card-title">Production Release</div>
                  <div className="hero-card-tag success">
                    <span className="check-dot" /> 2.4s • Deployed
                  </div>
                </div>
              </div>

              {/* Card 2: Performance Metric (Bottom Right) */}
              <div className="hero-float-card hero-float-metrics" aria-hidden="true">
                <div className="hero-card-icon-box teal">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <div className="hero-card-details">
                  <div className="hero-card-sub">EFFICIENCY SCORE</div>
                  <div className="hero-card-big-stat">
                    <span className="stat-number">99.8%</span>
                    <span className="stat-badge">+24%</span>
                  </div>
                  <div className="hero-card-footer-text">Optimized throughput</div>
                </div>
              </div>

              {/* Card 3: Connected Data Pipeline (Bottom Left) */}
              <div className="hero-float-card hero-float-data" aria-hidden="true">
                <div className="hero-card-icon-box slate">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  </svg>
                </div>
                <div className="hero-card-details">
                  <div className="hero-card-sub">DATA PIPELINE</div>
                  <div className="hero-card-title">12.8k events/sec</div>
                  <div className="hero-card-status-row">
                    <span className="live-radar" />
                    <span className="sync-text">Systems Synchronized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Capabilities Trust Bar */}
        <div className="hero-trust" aria-label="AVEX capabilities">
          <small className="hero-trust-label">CORE CAPABILITIES</small>
          <span>Web Development</span>
          <span>Software</span>
          <span>Cloud</span>
          <span>Data</span>
          <span>Digital Transformation</span>
        </div>
      </div>
    </section>
  )
}
