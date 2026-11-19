import React from 'react'
import { Link } from 'react-router-dom'
import LineReveal from '../components/LineReveal'

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-heading">
      <div className="section-inner about-centered">
        <div className="about-hero-grid">
          <div className="about-copy">
            <header className="about-header about-reveal">
              <div className="eyebrow">ABOUT AVEX</div>
              <h2 id="about-heading" className="section-title"><LineReveal text="Building technology with clarity, purpose, and impact." /></h2>
              <p className="section-sub"><LineReveal text="We help ambitious businesses turn ideas into reliable digital products and practical technology solutions." /></p>
            </header>

            <div className="about-method about-reveal" aria-label="AVEX approach: strategy, engineering, delivery">
              <span>OUR APPROACH</span><i aria-hidden="true">/</i>
              <span>ENGINEERING</span><i aria-hidden="true">/</i>
              <span>DELIVERY</span>
            </div>

            <div className="about-body about-reveal">
              <h3 className="about-lead"><LineReveal text="AVEX partners with businesses to design, build, and improve digital products that create measurable value." /></h3>
              <p><LineReveal text="We combine thoughtful design, modern engineering, and practical technology strategy to help businesses move from ideas to reliable solutions." /></p>
              <p><LineReveal text="Our teams prioritize clarity, strong engineering fundamentals, and pragmatic delivery so stakeholders see value early and often." /></p>
              <div className="about-highlight" role="note">
                <LineReveal text="Technology should make business simpler, not more complicated." />
              </div>
            </div>
          </div>

          <figure className="about-visual about-reveal">
            <img src="/images/about-team.jpg" alt="Illustrative software team collaborating around laptops in a workspace" loading="lazy" />
            <figcaption className="about-image-caption">ILLUSTRATIVE ENGINEERING WORKSPACE</figcaption>
            <div className="about-code-panel" aria-label="Illustrative code editor panel">
              <div className="about-code-header"><span>AVEX / product.ts</span><span>● ● ●</span></div>
              <pre><code><span>const</span> product = {'{'}{'\n'}  clarity: <b>true</b>,{'\n'}  quality: <b>true</b>,{'\n'}  builtFor: <em>'people'</em>{'\n'}{'}'}</code></pre>
            </div>
          </figure>
        </div>

        <div className="about-closing about-reveal">
          <p><LineReveal text="Technology should make business simpler, not more complicated." /></p>
          <Link className="about-contact-link" to="/contact">Talk with AVEX <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  )
}
