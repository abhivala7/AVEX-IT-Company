import React from 'react'
import LineReveal from './LineReveal'
import RevealOnScroll from './RevealOnScroll'

const members = [
  { name: 'Aarav Patel', role: 'Principal Software Engineer', bio: 'Shapes dependable application architecture and helps turn complex requirements into maintainable software.', image: 'aarav-patel.jpg', presentation: 'male' },
  { name: 'Ananya Sharma', role: 'Product Manager', bio: 'Aligns customer needs, business priorities, and delivery teams around useful product outcomes.', image: 'ananya-sharma.jpg', presentation: 'female' },
  { name: 'Rohan Desai', role: 'Cloud Architect', bio: 'Designs secure cloud foundations that support reliable products and steady business growth.', image: 'rohan-desai.jpg', presentation: 'male' },
  { name: 'Meera Nair', role: 'UX Researcher', bio: 'Brings user needs into product decisions through careful discovery and practical research.', image: 'meera-nair.jpg', presentation: 'female' },
  { name: 'Vikram Iyer', role: 'Data Engineer', bio: 'Builds thoughtful data systems that make information easier to trust, understand, and use.', image: 'vikram-iyer.jpg', presentation: 'male' },
  { name: 'Kavya Reddy', role: 'Software Engineer', bio: 'Develops accessible, reliable product features with a focus on quality and everyday usability.', image: 'kavya-reddy.jpg', presentation: 'female' },
  { name: 'Aditya Kulkarni', role: 'DevOps Engineer', bio: 'Improves delivery workflows and infrastructure so product teams can ship with confidence.', image: 'aditya-kulkarni.jpg', presentation: 'male' },
  { name: 'Isha Verma', role: 'Data Analyst', bio: 'Turns complex datasets into clear analysis that helps teams make better-informed decisions.', image: 'isha-verma.jpg', presentation: 'female' },
  { name: 'Kunal Rao', role: 'Product Designer', bio: 'Connects research, interaction design, and visual craft to make digital products feel intuitive.', image: 'kunal-rao.jpg', presentation: 'male' },
  { name: 'Priya Menon', role: 'Security Engineer', bio: 'Builds practical security into systems and delivery workflows from the start.', image: 'priya-menon.jpg', presentation: 'female' },
  { name: 'Sameer Chatterjee', role: 'Engineering Manager', bio: 'Guides collaborative engineering teams from early technical decisions through reliable releases.', image: 'sameer-chatterjee.jpg', presentation: 'male' },
  { name: 'Dev Malhotra', role: 'QA Automation Engineer', bio: 'Creates thoughtful test automation that helps teams release dependable software.', image: 'dev-malhotra.jpg', presentation: 'male' },
]

export default function TeamPage() {
  return (
    <section className="section team-page" aria-labelledby="team-page-heading">
      <div className="section-inner">
        <header className="team-page-header">
          <div className="eyebrow">THE PEOPLE BEHIND THE WORK</div>
          <h1 className="section-title" id="team-page-heading"><LineReveal text="Meet Our Team" /></h1>
          <p className="section-sub"><LineReveal text="Designers, engineers, and strategists work side by side to turn business challenges into thoughtful digital solutions." /></p>
          <p className="team-page-note">Illustrative team profiles. Names, roles, and biographies are fictional demo content.</p>
        </header>

        <div className="team-page-grid">
          {members.map((member, index) => (
            <RevealOnScroll key={member.name} order={index} className="team-card-reveal">
              <article className="team-profile-card">
                <div className="team-profile-photo">
                  <img
                    src={`/images/team/${member.image}`}
                    alt={`Illustrative profile portrait of ${member.name}`}
                    loading={index < 4 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
                <div className="team-profile-content">
                  <h2>{member.name}</h2>
                  <p className="team-profile-role">{member.role}</p>
                  <p className="team-profile-bio">{member.bio}</p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export { members as teamMembers }
