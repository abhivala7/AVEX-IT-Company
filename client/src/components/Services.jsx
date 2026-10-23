import React from 'react'
import { Link } from 'react-router-dom'
import LineReveal from './LineReveal'
import RevealOnScroll from './RevealOnScroll'

const services = [
  { id: '01', title: 'Web Development', slug: 'web-development', desc: 'Modern, responsive websites and web applications built for performance, scalability, and growth.', image: '/images/service-web-development.jpg' },
  { id: '02', title: 'Software Development', slug: 'software-development', desc: 'Custom business software designed around your workflows, operations, and long-term goals.', image: '/images/service-software-development.png' },
  { id: '03', title: 'UI/UX Design', slug: 'ui-ux-design', desc: 'Clean, intuitive digital experiences that make complex products simple and enjoyable to use.', image: '/images/service-ui-ux.webp' },
  { id: '04', title: 'Business Automation', slug: 'business-automation', desc: 'Automate repetitive workflows and improve operational efficiency.', image: '/images/service-business-automation.jpeg' },
  { id: '05', title: 'Cloud & Infrastructure', slug: 'cloud-infrastructure', desc: 'Secure, scalable cloud infrastructure built to support reliable services and future growth.', image: '/images/service-cloud-infrastructure.webp' },
  { id: '06', title: 'Data & Analytics', slug: 'data-analytics', desc: 'Turn business data into clear insights and better decisions.', image: '/images/service-data-analytics.jpeg' },
]

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-inner services-centered">
        <div className="services-header">
          <div className="eyebrow">SERVICES</div>
          <h2 className="section-title"><LineReveal text="Technology that moves your business forward." /></h2>
          <p className="section-sub"><LineReveal text="Thoughtful digital services to help your business work smarter, grow confidently, and serve customers better." /></p>
        </div>

        <div className="services-grid">
          {services.map((s, index) => (
            <RevealOnScroll as="article" order={index} key={s.id} className="card service-card premium-service" aria-labelledby={`svc-${s.id}`}>
              <div className="svc-visual">
                <img src={s.image} alt={`${s.title} service`} loading="lazy" />
              </div>
              <div className="svc-content">
                <div className="svc-top">
                  <span className="svc-index">{s.id}</span>
                </div>
                <h3 id={`svc-${s.id}`} className="svc-title"><LineReveal text={s.title} /></h3>
                <p className="svc-desc"><LineReveal text={s.desc} /></p>
                <div className="svc-foot">
                  <Link className="svc-cta" to={`/services/${s.slug}`}>Explore <span aria-hidden="true">→</span></Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
