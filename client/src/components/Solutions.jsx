import React from 'react'
import { Link } from 'react-router-dom'
import LineReveal from './LineReveal'
import RevealOnScroll from './RevealOnScroll'

const solutions = [
  { id: '01', title: 'Digital Transformation', slug: 'digital-transformation', desc: 'Modernize business processes and create scalable digital experiences.', image: '/images/solution-digital-transformation.jpg' },
  { id: '02', title: 'Business Automation', slug: 'business-automation', desc: 'Automate repetitive workflows and improve operational efficiency.', image: '/images/service-automation.jpg' },
  { id: '03', title: 'Custom Software', slug: 'custom-software', desc: 'Purpose-built software designed around your unique business requirements.', image: '/images/service-software.jpg' },
  { id: '04', title: 'Cloud & Infrastructure', slug: 'cloud-infrastructure', desc: 'Reliable, scalable technology infrastructure built for modern applications.', image: '/images/service-cloud.jpg' },
  { id: '05', title: 'Data & Analytics', slug: 'data-analytics', desc: 'Turn business data into clear insights and better decisions.', image: '/images/solution-data-analytics.jpg' },
  { id: '06', title: 'Enterprise Solutions', slug: 'enterprise-solutions', desc: 'Secure and scalable digital platforms for growing organizations.', image: '/images/solution-enterprise-systems.jpg' },
]

export default function Solutions() {
  return (
    <section className="section solutions" id="solutions">
      <div className="section-inner solutions-centered">
        <div className="solutions-header">
          <div className="eyebrow">HOW WE HELP</div>
          <h2 className="section-title"><LineReveal text="Technology solutions that move your business forward." /></h2>
          <p className="section-sub"><LineReveal text="We combine strategy, design, and engineering to turn complex business challenges into practical digital solutions." /></p>
        </div>

        <div className="solutions-method" aria-label="Strategy, design, and engineering">
          <span className="solutions-method-label">SOLUTION DESIGN / 01-06</span>
          <span className="solutions-method-flow">Strategy <i>→</i> Design <i>→</i> Engineering</span>
        </div>

        <div className="solutions-grid">
          {solutions.map((s, index) => (
            <RevealOnScroll as="article" order={index} key={s.id} className="card solution-card premium-solution" aria-labelledby={`sol-${s.id}`}>
              <div className="sol-visual">
                <img src={s.image} alt={`${s.title} visual`} loading={index < 2 ? 'eager' : 'lazy'} />
              </div>
              <div className="sol-content">
                <div className="sol-top">
                  <span className="sol-index">{s.id}</span>
                </div>
                <h3 id={`sol-${s.id}`} className="sol-title"><LineReveal text={s.title} /></h3>
                <p className="sol-desc"><LineReveal text={s.desc} /></p>
                <div className="sol-foot">
                  <Link className="sol-cta" to={`/solutions/${s.slug}`}>Explore <span aria-hidden="true">→</span></Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
