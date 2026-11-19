
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './components/Services'
import ServiceDetails from './components/ServiceDetails'
import Solutions from './components/Solutions'
import SolutionDetails from './components/SolutionDetails'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails'
import About from './components/About'
import Contact from './components/Contact'
import TeamPage from './components/TeamPage'
import AdminInquiries from './components/AdminInquiries'
import Footer from './components/Footer'
import {
  Technology,
  Testimonials,
  WhyChooseUs,
  CompanyStatistics,
  DevelopmentProcess,
  ProjectCta,
  CloudInfrastructure,
  TeamMembers,
} from './components/AddedSections'

function SolutionsPage() {
  return <main className="site-main"><Solutions /><ProjectCta /></main>
}

function ProjectsPage() {
  return <main className="site-main"><Projects /><ProjectCta /></main>
}

function AboutPage() {
  return (
    <main className="site-main about-page">
      <About />
      <CloudInfrastructure />
      <Technology />
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
    const sectionTargets = [...document.querySelectorAll(
      '.site-main > section:not(.hero-panel), .project-detail-page .project-detail-wrap > section, .site-footer',
    )]
    const targets = [...new Set([...sectionTargets, ...document.querySelectorAll('.reveal-on-scroll')])]

    targets.forEach((target) => target.classList.add('scroll-reveal'))

    const revealAll = () => targets.forEach((target) => target.classList.add('is-visible'))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      revealAll()
      return undefined
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
    }
  }, [pathname])

  return null
}

function TouchCardEffects() {
  React.useEffect(() => {
    const cardSelector = [
      '.recognition-item', '.reason-item', '.premium-service', '.premium-solution',
      '.premium-project', '.team-profile-card', '.team-card', '.technology-group',
      '.process-step', '.testimonial', '.project-detail-feature',
    ].join(',')
    const timers = new Map()
    const clearCard = (card) => {
      const timer = timers.get(card)
      if (timer) window.clearTimeout(timer)
      timers.delete(card)
      card.classList.remove('is-touch-active')
    }
    const handlePointerDown = (event) => {
      if (event.pointerType !== 'touch') return
      const card = event.target.closest?.(cardSelector)
      if (!card) return
      clearCard(card)
      card.classList.add('is-touch-active')
    }
    const handlePointerEnd = (event) => {
      if (event.pointerType !== 'touch') return
      const card = event.target.closest?.(cardSelector)
      const activeCards = card ? [card] : document.querySelectorAll('.is-touch-active')
      activeCards.forEach((activeCard) => {
        const timer = window.setTimeout(() => clearCard(activeCard), 180)
        timers.set(activeCard, timer)
      })
    }
    const handleCardClick = (event) => {
      const card = event.target.closest?.(cardSelector)
      if (!card) return
      clearCard(card)
      card.classList.add('is-touch-active')
      timers.set(card, window.setTimeout(() => clearCard(card), 420))
    }

    document.addEventListener('pointerdown', handlePointerDown, true)
    document.addEventListener('pointerup', handlePointerEnd, true)
    document.addEventListener('pointercancel', handlePointerEnd, true)
    document.addEventListener('click', handleCardClick, true)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown, true)
      document.removeEventListener('pointerup', handlePointerEnd, true)
      document.removeEventListener('pointercancel', handlePointerEnd, true)
      document.removeEventListener('click', handleCardClick, true)
      timers.forEach((timer) => window.clearTimeout(timer))
      document.querySelectorAll('.is-touch-active').forEach((card) => card.classList.remove('is-touch-active'))
    }
  }, [])

  return null
}

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 520)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <BrowserRouter>
      <div className="app">
        {isLoading && (
          <div className="site-loader" role="status" aria-label="Loading AVEX">
            <span className="site-loader-mark">A</span>
            <span className="site-loader-track"><span /></span>
          </div>
        )}

        <Header />
        <ScrollToTop />
        <ScrollReveal />
        <TouchCardEffects />

        <Routes>
          <Route path="/" element={<Home />} />
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
