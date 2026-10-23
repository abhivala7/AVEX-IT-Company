import React from 'react'
import { Link } from 'react-router-dom'

export default function OfferingDetailsPage({ detail, kind, basePath, backLabel, ctaLabel }) {
  const kindLabel = kind.toUpperCase()
  const titleId = `${kind}-detail-title`

  return (
    <main className={`site-main project-detail-page offering-detail-page ${kind}-detail-page`}>
      <div className="project-detail-wrap">
        <Link className="project-detail-back" to={basePath}><span aria-hidden="true">←</span> Back to {backLabel}</Link>

        <section className="project-detail-hero" aria-labelledby={titleId}>
          <div className="project-detail-copy">
            <div className="project-detail-eyebrow">{kindLabel} / {detail.number} <span>{detail.category}</span></div>
            <h1 id={titleId}>{detail.title}</h1>
            <p className="project-detail-lead">{detail.lead}</p>
          </div>
          <figure className="project-detail-hero-image">
            <img src={detail.image} alt={detail.imageAlt} fetchpriority="high" />
            <figcaption>AVEX / {detail.title.toUpperCase()}</figcaption>
          </figure>
        </section>

        <section className="project-detail-overview" aria-labelledby={`${kind}-overview-title`}>
          <div className="project-detail-section-heading">
            <span className="project-detail-kicker">{kindLabel} OVERVIEW</span>
            <h2 id={`${kind}-overview-title`}>{detail.overviewHeading}</h2>
          </div>
          <div className="project-detail-overview-content">
            <p>{detail.overview}</p>
            <h3>Challenges it can address</h3>
            <ul className="project-detail-problems">
              {detail.problems.map((problem) => <li key={problem}><span aria-hidden="true">↗</span>{problem}</li>)}
            </ul>
          </div>
        </section>

        <section className="project-detail-features" aria-labelledby={`${kind}-features-title`}>
          <div className="project-detail-section-heading project-detail-section-heading-centered">
            <span className="project-detail-kicker">CAPABILITIES</span>
            <h2 id={`${kind}-features-title`}>Capabilities for {detail.title.toLowerCase()}.</h2>
          </div>
          <div className="project-detail-feature-grid">
            {detail.features.map(([title, description], index) => (
              <article className="project-detail-feature" key={title}>
                <span className="project-detail-feature-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-detail-use-cases" aria-labelledby={`${kind}-use-cases-title`}>
          <div><span className="project-detail-kicker">BUSINESS VALUE</span><h2 id={`${kind}-use-cases-title`}>Benefits and use cases</h2></div>
          <ul>{detail.useCases.map((useCase) => <li key={useCase}>{useCase}</li>)}</ul>
        </section>

        <section className="service-detail-process" aria-labelledby={`${kind}-process-title`}>
          <div className="project-detail-section-heading project-detail-section-heading-centered">
            <span className="project-detail-kicker">IMPLEMENTATION PROCESS</span>
            <h2 id={`${kind}-process-title`}>A clear path from planning to improvement.</h2>
          </div>
          <div className="service-detail-process-grid">
            {detail.process.map(([title, description], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </section>

        <section className="project-detail-gallery" aria-labelledby={`${kind}-gallery-title`}>
          <div className="project-detail-gallery-heading">
            <div><span className="project-detail-kicker">RELATED VISUALS</span><h2 id={`${kind}-gallery-title`}>{detail.title} in practice.</h2></div>
            <p>Relevant technology and interface imagery from the AVEX website.</p>
          </div>
          <div className="project-detail-gallery-grid">
            {detail.gallery.map((item, index) => (
              <figure className="project-detail-gallery-item" key={item.src}>
                <div className="project-detail-gallery-image"><img src={item.src} alt={item.alt} loading={index === 0 ? 'eager' : 'lazy'} /></div>
                <figcaption><span>0{index + 1}</span>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="project-detail-stack" aria-labelledby={`${kind}-stack-title`}>
          <div><span className="project-detail-kicker">TECHNOLOGIES &amp; INTEGRATIONS</span><h2 id={`${kind}-stack-title`}>A foundation suited to the work.</h2></div>
          <div className="project-detail-stack-list" aria-label="Relevant technologies and integrations">
            {detail.stack.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </section>

        <section className="project-detail-cta" aria-labelledby={`${kind}-cta-title`}>
          <div><span className="project-detail-kicker">HAVE A SIMILAR NEED?</span><h2 id={`${kind}-cta-title`}>Let’s discuss how {detail.title.toLowerCase()} can help.</h2></div>
          <Link className="project-detail-cta-button" to="/contact">{ctaLabel} <span aria-hidden="true">→</span></Link>
        </section>
      </div>
    </main>
  )
}
