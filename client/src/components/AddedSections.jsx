import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import LineReveal from './LineReveal'

const recognition = [
  { number: '01', title: 'Digital products', detail: 'Websites, applications, and software.' },
  { number: '02', title: 'Thoughtful engineering', detail: 'Clear design with reliable foundations.' },
  { number: '03', title: 'Practical technology', detail: 'Solutions shaped around real workflows.' },
]

const clients = ['Northstar', 'Meridian', 'Forma', 'Aperture', 'Fieldnote']

const technologyGroups = [
  { name: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'Next.js'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'PHP', 'Python'] },
  { name: 'Database', items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
  { name: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Docker', 'GitHub'] },
  { name: 'Mobile', items: ['React Native', 'Flutter'] },
  { name: 'AI & Data', items: ['Python', 'AI', 'Machine Learning'] },
  { name: 'Tools', items: ['Figma', 'VS Code', 'Postman', 'Jira'] },
]

const testimonials = [
  {
    name: 'Jordan Lee',
    role: 'Operations Director, Northstar',
    review: 'The team brought clarity to a complicated process and delivered a product our people could use from day one.',
  },
  {
    name: 'Morgan Patel',
    role: 'Founder, Meridian',
    review: 'AVEX understood our goals quickly and built a dependable platform that gives us room to grow.',
  },
  {
    name: 'Taylor Brooks',
    role: 'Product Lead, Forma',
    review: 'Thoughtful communication, practical decisions, and a smooth launch. The whole experience felt well managed.',
  },
]

const reasons = [
  { title: 'Smart Solutions', detail: 'Practical solutions based on real business needs.' },
  { title: 'Fast Execution', detail: 'Efficient development without compromising quality.' },
  { title: 'Secure & Scalable', detail: 'Reliable technology ready for future growth.' },
  { title: 'Dedicated Support', detail: 'Continuous support even after launch.' },
]

const statistics = [
  { value: 6, label: 'Services offered' },
  { value: 6, label: 'Solution areas' },
  { value: 2, label: 'Illustrative project concepts' },
  { value: 7, label: 'Technology groups' },
]

const team = [
  { image: 'digital-engineering-workspace.png', role: 'Digital Engineering', focus: 'Product architecture', alt: 'Software development workspace with code on multiple screens' },
  { image: 'product-design-workspace.png', role: 'Product Design', focus: 'Experience & interface', alt: 'UI and UX design workspace with interface mockups and wireframes' },
  { image: 'cloud-engineering-datacenter.png', role: 'Cloud Engineering', focus: 'Infrastructure & delivery', alt: 'Rows of server racks in a modern data center' },
]

const process = [
  { number: '01', title: 'Discover', detail: 'Understand the business, users and requirements.' },
  { number: '02', title: 'Design', detail: 'Create a clear and thoughtful digital experience.' },
  { number: '03', title: 'Build', detail: 'Develop, test and refine the solution.' },
  { number: '04', title: 'Launch & Grow', detail: 'Deploy, support and continuously improve.' },
]

export function Recognition() {
  return (
    <section className="section avex-addition recognition" aria-labelledby="recognition-heading">
      <div className="section-inner">
        <h2 className="section-title" id="recognition-heading"><LineReveal text="A clear, practical approach to technology." /></h2>
        <div className="recognition-grid">
          {recognition.map((item) => (
            <div className="recognition-item" key={item.title}>
              <span className="recognition-index">{item.number}</span>
              <h3><LineReveal text={item.title} /></h3>
              <p><LineReveal text={item.detail} /></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Clients() {
  return (
    <section className="section avex-addition clients" aria-labelledby="clients-heading">
      <div className="section-inner">
        <div className="addition-heading">
          <div className="eyebrow">ILLUSTRATIVE DEMO CONTENT</div>
          <h2 className="section-title" id="clients-heading"><LineReveal text="Example Client Names." /></h2>
        </div>
        <div className="client-list" aria-label="Illustrative client name placeholders">
          {clients.map((client) => <span key={client}>{client}</span>)}
        </div>
      </div>
    </section>
  )
}

export function Technology() {
  return (
    <section className="section avex-addition technology" aria-labelledby="technology-heading">
      <div className="section-inner">
        <div className="addition-heading">
          <div className="eyebrow">CORE CAPABILITIES</div>
          <h2 className="section-title" id="technology-heading"><LineReveal text="Technology for practical digital products." /></h2>
        </div>
        <div className="technology-grid">
          {technologyGroups.map((group) => (
            <section className="technology-group" key={group.name} aria-label={group.name}>
              <h3><LineReveal text={group.name} /></h3>
              <div className="technology-tags">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="section avex-addition testimonials" aria-labelledby="testimonials-heading">
      <div className="section-inner">
        <div className="addition-heading">
          <div className="eyebrow">ILLUSTRATIVE DEMO CONTENT</div>
          <h2 className="section-title" id="testimonials-heading"><LineReveal text="Sample Client Perspectives." /></h2>
        <p className="section-sub demo-disclaimer"><LineReveal text="Fictional examples for layout demonstration; these are not real client endorsements." /></p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <figure className="testimonial" key={item.name}>
              <blockquote><LineReveal text={item.review} /></blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyChooseUs() {
  return (
    <section className="section avex-addition why-us" aria-labelledby="why-us-heading">
      <div className="section-inner">
        <div className="addition-heading">
          <div className="eyebrow">THE AVEX APPROACH</div>
          <h2 className="section-title" id="why-us-heading"><LineReveal text="Why Businesses Choose Us." /></h2>
        </div>
        <div className="reason-grid">
          {reasons.map((item, index) => (
            <article className="reason-item" key={item.title}>
              <span className="reason-number">0{index + 1}</span>
              <h3><LineReveal text={item.title} /></h3>
              <p><LineReveal text={item.detail} /></p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CompanyStatistics() {
  const sectionRef = useRef(null)
  const valueRefs = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const showFinalValues = () => valueRefs.current.forEach((node, index) => {
      if (node) node.textContent = String(statistics[index].value)
    })

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      showFinalValues()
      return undefined
    }

    let frameId
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const startedAt = performance.now()
      const duration = 900

      const animate = (now) => {
        let complete = true
        valueRefs.current.forEach((node, index) => {
          if (!node) return
          const progress = Math.max(0, Math.min(1, (now - startedAt - index * 110) / duration))
          const eased = 1 - (1 - progress) ** 3
          node.textContent = String(Math.round(statistics[index].value * eased))
          if (progress < 1) complete = false
        })
        if (!complete) frameId = requestAnimationFrame(animate)
        else showFinalValues()
      }

      frameId = requestAnimationFrame(animate)
    }, { threshold: 0.2 })

    observer.observe(section)
    return () => {
      observer.disconnect()
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <section ref={sectionRef} className="section avex-addition company-statistics" aria-label="AVEX website content snapshot">
      <div className="section-inner">
        <div className="addition-heading">
          <div className="eyebrow">SITE CONTENT SNAPSHOT</div>
          <h2 className="section-title"><LineReveal text="A clear view of what AVEX offers." /></h2>
          <p className="section-sub"><LineReveal text="Counts reflect the sections and examples currently shown on this website, not company performance." /></p>
        </div>
        <div className="statistics-grid">
        {statistics.map((item, index) => (
          <div className="company-stat" key={item.label}>
            <strong ref={(node) => { valueRefs.current[index] = node }}>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export function DevelopmentProcess() {
  return (
    <section className="section avex-addition development-process" aria-labelledby="process-heading">
      <div className="section-inner">
        <div className="addition-heading">
          <div className="eyebrow">A CLEAR PATH FORWARD</div>
          <h2 className="section-title" id="process-heading"><LineReveal text="How We Turn Ideas Into Reality." /></h2>
        </div>
        <div className="process-grid">
          {process.map((step) => (
            <article className="process-step" key={step.number}>
              <span>{step.number}</span>
              <h3><LineReveal text={step.title} /></h3>
              <p><LineReveal text={step.detail} /></p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProjectCta({ home = false }) {
  return (
    <section className={`section avex-addition project-cta${home ? ' home-cta' : ''}`} aria-labelledby="project-cta-heading">
      <div className="section-inner project-cta-inner">
        <div>
          <div className="eyebrow">LET'S MAKE IT REAL</div>
          <h2 id="project-cta-heading"><LineReveal text="Have An Idea? Let's Build Something Great Together." /></h2>
          <p><LineReveal text="Tell us about your project and let AVEX help turn your idea into a scalable digital solution." /></p>
          {home && <span className="home-cta-signoff">AVEX / DIGITAL ENGINEERING</span>}
        </div>
        <div className="project-cta-actions">
          <Link className="btn primary" to="/contact">Start Your Project</Link>
          <Link className="btn outline" to="/contact">Talk To Our Team</Link>
        </div>
      </div>
    </section>
  )
}

export function CloudInfrastructure() {
  return (
    <section className="section avex-addition cloud-infrastructure" aria-labelledby="cloud-heading">
      <div className="section-inner cloud-layout">
        <div className="cloud-copy">
          <div className="eyebrow">CLOUD &amp; INFRASTRUCTURE</div>
          <h2 className="section-title" id="cloud-heading"><LineReveal text="A dependable foundation for every digital product." /></h2>
          <p className="section-sub"><LineReveal text="Plan, deploy, and operate secure cloud environments with a focus on reliability, maintainability, and room to grow." /></p>
          <Link className="text-link" to="/services">Explore cloud capabilities <span aria-hidden="true">→</span></Link>
        </div>
        <div className="cloud-diagram" aria-label="Illustrative cloud delivery diagram">
          <span className="cloud-diagram-label">DELIVERY / PIPELINE</span>
          <div className="cloud-flow"><span>CODE</span><i aria-hidden="true">→</i><span>BUILD</span><i aria-hidden="true">→</i><span>DEPLOY</span></div>
          <div className="cloud-status"><i aria-hidden="true" /> Infrastructure concept <code>READY TO SCALE</code></div>
        </div>
      </div>
    </section>
  )
}

export function TeamMembers() {
  return (
    <section className="section avex-addition team-members" aria-labelledby="team-heading">
      <div className="section-inner">
        <div className="addition-heading">
          <div className="eyebrow">ILLUSTRATIVE TEAM CONCEPT</div>
          <h2 className="section-title" id="team-heading"><LineReveal text="A multidisciplinary team, built around the work." /></h2>
          <p className="section-sub demo-disclaimer"><LineReveal text="Demo roles and CSS-made profile illustrations; these do not represent named AVEX employees." /></p>
        </div>
        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.role}>
              <div className="team-visual"><img src={`/images/team/${member.image}`} alt={member.alt} loading="eager" decoding="async" /></div>
              <h3><LineReveal text={member.role} /></h3>
              <p><LineReveal text={member.focus} /></p>
              <span className="team-demo-label">ILLUSTRATIVE PROFILE</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
