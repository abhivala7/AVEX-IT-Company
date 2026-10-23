import React from 'react'
import { Link } from 'react-router-dom'
import LineReveal from './LineReveal'
import RevealOnScroll from './RevealOnScroll'

const projects = [
  { number: '01', title: 'Enterprise Portal', category: 'Enterprise software', tech: 'React · Node.js', desc: 'Illustrative customer portal concept with deep integrations.', key: 'enterprise', slug: 'enterprise-portal' },
  { number: '03', title: 'Analytics Suite', category: 'Data & analytics', tech: 'React · Python', desc: 'Illustrative analytics dashboard concept for product metrics.', key: 'analytics', slug: 'analytics-suite' },
]

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-inner">
          <div className="eyebrow">ILLUSTRATIVE PROJECT CONCEPTS</div>
        <h2 className="section-title"><LineReveal text="Selected Projects" /></h2>
        <p className="section-sub"><LineReveal text="Example product directions shown for demonstration; not a claim of completed client work." /></p>

        <div className="cards projects-grid">
          {projects.map((p, idx) => {
            const imgs = {
              enterprise: '/images/project-enterprise.jpg',
              analytics: '/images/project-analytics.jpg'
            }
            const img = imgs[p.key] || imgs.enterprise
            return (
              <RevealOnScroll as="article" order={idx} key={p.title} className="card project-card premium-project" data-key={p.key}>
                <div className="preview">
                  <div className={`preview-inner preview-${p.key}`}>
                    <img src={img} alt={`${p.title} preview`} loading={idx===0? 'eager' : 'lazy'} />
                  </div>
                </div>

                <div className="project-body">
                  <div className="project-reference">PROJECT / {p.number}</div>
                  <div className="project-meta">
                    <small className="tag">{p.category}</small>
                    <span className="stack">{p.tech}</span>
                  </div>
                  <h3 className="project-title"><LineReveal text={p.title} /></h3>
                  <p className="project-desc"><LineReveal text={p.desc} /></p>
                  <Link className="project-link" to={`/projects/${p.slug}`}>Discuss a similar project <span aria-hidden="true">→</span></Link>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
