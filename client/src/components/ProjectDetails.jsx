import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'

const projectDetails = {
  'enterprise-portal': {
    number: '01',
    title: 'Enterprise Portal',
    category: 'Enterprise software',
    lead: 'A connected workspace concept that brings people, information, and essential business tools together in one secure place.',
    image: '/images/projects/enterprise-dashboard.jpg',
    imageAlt: 'Enterprise management dashboard displayed on a desktop monitor',
    overview: 'An enterprise portal gives employees and partners a single, dependable place to find company information and complete everyday work. This concept combines personalized access, shared resources, operational dashboards, and integrations with the systems teams already use.',
    problems: [
      'Information spread across disconnected tools and teams',
      'Time lost searching for current policies, documents, and updates',
      'Inconsistent access to business systems and sensitive data',
      'Manual reporting and workflows that are difficult to track',
    ],
    features: [
      ['Secure sign-in', 'Authentication flows designed to protect organizational accounts and information.'],
      ['Role-based access', 'Permissions tailored to employee, manager, partner, and administrator roles.'],
      ['Central information hub', 'A searchable home for announcements, policies, documents, and team resources.'],
      ['Reporting dashboards', 'At-a-glance views of operational activity, workflow status, and key indicators.'],
      ['System integrations', 'A connected experience across business applications, data sources, and internal services.'],
    ],
    stack: ['React', 'Node.js'],
    gallery: [
      { src: '/images/projects/enterprise-integrations.jpg', alt: 'Enterprise system architecture and application integrations', caption: 'Connected business systems' },
      { src: '/images/projects/enterprise-application.jpg', alt: 'Software application interface being developed on a laptop', caption: 'A focused application experience' },
    ],
  },
  'analytics-suite': {
    number: '03',
    title: 'Analytics Suite',
    category: 'Data & analytics',
    lead: 'A business intelligence dashboard concept that turns fragmented business data into clear, timely signals for better decisions.',
    image: '/images/projects/analytics-suite.jpg',
    imageAlt: 'Dark business intelligence dashboard with line, bar, and regional visualizations',
    overview: 'An analytics suite brings important metrics into one clear workspace. This concept combines interactive visualizations, configurable KPI views, and reporting tools so teams can explore performance, understand change over time, and share useful findings.',
    problems: [
      'Key business data scattered across separate platforms and spreadsheets',
      'Slow, manual reporting that leaves teams working from stale numbers',
      'Important changes and emerging trends hidden in large data sets',
      'Different departments using inconsistent definitions of success',
    ],
    features: [
      ['Interactive charts', 'Explore data through responsive charts, comparisons, and drill-down views.'],
      ['KPI tracking', 'Monitor selected business measures with clear targets and time ranges.'],
      ['Trend analysis', 'Compare periods and spot patterns, shifts, and outliers over time.'],
      ['Data visualization', 'Present complex information in readable charts, summaries, and visual groupings.'],
      ['Flexible reporting', 'Prepare and share focused reports for teams, leaders, and stakeholders.'],
    ],
    stack: ['React', 'Python'],
    gallery: [
      { src: '/images/projects/analytics-reporting.jpg', alt: 'Data analytics dashboard with KPI cards and multiple business charts', caption: 'Metrics and reporting in one view' },
      { src: '/images/projects/analytics-visualization.jpg', alt: 'Business data charts and visualizations displayed on a laptop', caption: 'Clear signals from complex data' },
    ],
  },
}

export default function ProjectDetails() {
  const { projectSlug } = useParams()
  const project = projectDetails[projectSlug]
  if (!project) return <Navigate to="/projects" replace />

  return (
    <main className="site-main project-detail-page">
      <div className="project-detail-wrap">
        <Link className="project-detail-back" to="/projects"><span aria-hidden="true">←</span> Back to Projects</Link>

        <section className="project-detail-hero" aria-labelledby="project-detail-title">
          <div className="project-detail-copy">
            <div className="project-detail-eyebrow">PROJECT / {project.number} <span>{project.category}</span></div>
            <h1 id="project-detail-title">{project.title}</h1>
            <p className="project-detail-lead">{project.lead}</p>
            <div className="project-detail-concept"><span aria-hidden="true">✦</span> Illustrative project concept — not a claim of completed client work.</div>
          </div>
          <figure className="project-detail-hero-image">
            <img src={project.image} alt={project.imageAlt} fetchPriority="high" />
            <figcaption>AVEX / CONCEPT OVERVIEW</figcaption>
          </figure>
        </section>

        <section className="project-detail-overview" aria-labelledby="project-overview-title">
          <div className="project-detail-section-heading">
            <span className="project-detail-kicker">THE OPPORTUNITY</span>
            <h2 id="project-overview-title">A clearer way to work with information.</h2>
          </div>
          <div className="project-detail-overview-content">
            <p>{project.overview}</p>
            <h3>Business problems it can solve</h3>
            <ul className="project-detail-problems">
              {project.problems.map((problem) => <li key={problem}><span aria-hidden="true">↗</span>{problem}</li>)}
            </ul>
          </div>
        </section>

        <section className="project-detail-features" aria-labelledby="project-features-title">
          <div className="project-detail-section-heading project-detail-section-heading-centered">
            <span className="project-detail-kicker">CAPABILITIES</span>
            <h2 id="project-features-title">Designed around the work that matters.</h2>
          </div>
          <div className="project-detail-feature-grid">
            {project.features.map(([title, description], index) => (
              <article className="project-detail-feature" key={title}>
                <span className="project-detail-feature-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="project-detail-gallery" aria-labelledby="project-gallery-title">
          <div className="project-detail-gallery-heading">
            <div><span className="project-detail-kicker">VISUAL DIRECTION</span><h2 id="project-gallery-title">A closer look at the concept.</h2></div>
            <p>Interface and product imagery created to illustrate a possible direction.</p>
          </div>
          <div className="project-detail-gallery-grid">
            {project.gallery.map((item, index) => (
              <figure className="project-detail-gallery-item" key={item.src}>
                <div className="project-detail-gallery-image"><img src={item.src} alt={item.alt} loading={index === 0 ? 'eager' : 'lazy'} /></div>
                <figcaption><span>0{index + 1}</span>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="project-detail-stack" aria-labelledby="project-stack-title">
          <div><span className="project-detail-kicker">TECHNOLOGY</span><h2 id="project-stack-title">Built with a flexible foundation.</h2></div>
          <div className="project-detail-stack-list" aria-label="Technology stack">
            {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </section>

        <section className="project-detail-cta" aria-labelledby="project-cta-title">
          <div><span className="project-detail-kicker">HAVE A SIMILAR CHALLENGE?</span><h2 id="project-cta-title">Let’s shape the right solution for your team.</h2></div>
          <Link className="project-detail-cta-button" to="/contact">Discuss a Similar Project <span aria-hidden="true">→</span></Link>
        </section>
      </div>
    </main>
  )
}
