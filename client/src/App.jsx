import React from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import ServiceDetails from './components/ServiceDetails'
import Solutions from './components/Solutions'
import SolutionDetails from './components/SolutionDetails'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails'
import About from './Assetes/About'
import Contact from './components/Contact'
import TeamPage from './components/TeamPage'
import AdminInquiries from './components/AdminInquiries'
import Footer from './Assetes/Footer'
import {
  Recognition,
  Technology,
  Testimonials,
  WhyChooseUs,
  CompanyStatistics,
  DevelopmentProcess,
  ProjectCta,
  CloudInfrastructure,
  TeamMembers,
} from './components/AddedSections'

function HomePage() {
  return (
    <main className="site-main home-page">
      <Hero />
      <Recognition />
      <WhyChooseUs />
      <ProjectCta home />
    </main>
  )
}

function SolutionsPage() {
  return <main className="site-main"><Solutions /><ProjectCta /></main>
}

function ProjectsPage() {
  return <main className="site-main"><Projects /><ProjectCta /></main>
}

function AboutPage() {
  return (
    <main className="site-main">
      <About />
      <Technology />
      <CloudInfrastructure />
      <WhyChooseUs />
      <DevelopmentProcess />
      <CompanyStatistics />
      <TeamMembers />
      <Testimonials />
      <ProjectCta />
    </main>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function ScrollReveal() {
  const { pathname } = useLocation()

  React.useEffect(() => {
    const targets = [...document.querySelectorAll(
      '.site-main > section:not(.hero-panel), .project-detail-page .project-detail-wrap > section, .site-footer',
    )]
    targets.forEach((target) => target.classList.add('scroll-reveal'))
    const revealAll = () => targets.forEach((target) => target.classList.add('is-visible'))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      revealAll()
      return () => targets.forEach((target) => target.classList.remove('scroll-reveal', 'is-visible'))
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' })

    targets.forEach((target) => observer.observe(target))
    return () => {
      observer.disconnect()
      targets.forEach((target) => target.classList.remove('scroll-reveal', 'is-visible'))
    }
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <ScrollToTop />
        <ScrollReveal />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<main className="site-main"><Services /></main>} />
          <Route path="/services/:serviceSlug" element={<ServiceDetails />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/:solutionSlug" element={<SolutionDetails />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectSlug" element={<ProjectDetails />} />
          <Route path="/team" element={<main className="site-main"><TeamPage /></main>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<main className="site-main"><Contact /></main>} />
          <Route path="/admin/inquiries" element={<AdminInquiries />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
