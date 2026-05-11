import { useEffect, useState } from 'react'
import './App.css'
import heroImage from './assets/banner.png'
import {
  aboutHighlights,
  brandProfile,
  contactLinks,
  education,
  experience,
  freelanceExperience,
  heroMetrics,
  interestAreas,
  navigationItems,
  projectCards,
  resumeLink,
  skillSections,
} from './data/portfolio.js'

function ProjectImageSlider({ images, title }) {
  const slides = images?.length ? images : ['/images/projects/default.png']
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (slides.length < 2) {
      return undefined
    }

    const slideTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length)
    }, 3200)

    return () => window.clearInterval(slideTimer)
  }, [slides.length])

  return (
    <div className="project-image-slider">
      <img src={slides[activeSlide]} alt={`${title} project view ${activeSlide + 1}`} />
      {slides.length > 1 && (
        <span className="project-slide-dots" aria-hidden="true">
          {slides.map((image, index) => (
            <span key={`${image}-${index}`} className={index === activeSlide ? 'active' : ''} />
          ))}
        </span>
      )}
    </div>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Go to top">
          <span className="brand-mark">{brandProfile.monogram}</span>
          <span className="brand-copy">
            <strong>{brandProfile.name}</strong>
            <small>{brandProfile.title}</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href={resumeLink.href} download>
          Resume
        </a>
      </header>

      <main className="page-shell" id="top">
        <section className="hero-section">
          <div className="hero-copy-panel">
            <span className="eyebrow">Portfolio</span>
            <h1>{brandProfile.name}</h1>
            <p className="hero-title">{brandProfile.tagline}</p>
            <p className="hero-lead">{brandProfile.summary}</p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a className="button secondary" href={resumeLink.href} download>
                Download Resume
              </a>
            </div>

            <dl className="metrics-grid">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <dt>{metric.label}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="hero-aside-panel">
            <div className="portrait-card">
              <img src={heroImage} alt={brandProfile.name} />
            </div>

            <div className="summary-card">
              <span className="card-pill">Profile</span>
              <h2>{brandProfile.availability}</h2>
              <ul className="key-facts">
                <li>{brandProfile.location}</li>
                <li>{brandProfile.education}</li>
                <li>Portfolio focused on robotics, embedded systems, and control work</li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="section-block" id="about">
          <div className="section-heading">
            <span className="eyebrow">About</span>
            <h2>A focused engineering portfolio for embedded and robotics roles.</h2>
            <p>
              This version puts the strongest hardware-connected work first so
              recruiters can quickly see your robotics, control, and embedded
              systems direction.
            </p>
          </div>

          <div className="highlight-grid">
            {aboutHighlights.map((item) => (
              <article key={item.title} className="highlight-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="education-panel">
            <div>
              <span className="card-pill">Education</span>
              <h3>{education.degree}</h3>
              <p>{education.school}</p>
            </div>
            <strong>{education.period}</strong>
          </div>
        </section>

        <section className="section-block" id="skills">
          <div className="section-heading">
            <span className="eyebrow">Skills</span>
            <h2>Technical strengths across firmware, hardware integration, and software.</h2>
            <p>
              The layout is intentionally simple so the embedded stack, control
              work, and supporting software skills are easy to scan.
            </p>
          </div>

          <div className="skills-grid">
            {skillSections.map((section) => (
              <article key={section.title} className="skill-card">
                <h3>{section.title}</h3>
                <div className="chip-row">
                  {section.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <article className="interests-panel">
            <span className="card-pill">Interest Areas</span>
            <div className="chip-row">
              {interestAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </article>
        </section>

        <section className="section-block" id="projects">
          <div className="section-heading">
            <span className="eyebrow">Projects</span>
            <h2>Robotics and embedded projects first, with details on click.</h2>
            <p>
              Each project starts as a simple title and image preview. Open one
              to view the stack, engineering notes, and resume-aligned details.
            </p>
          </div>

          <div className="project-grid">
            {projectCards.map((project) => (
              <details key={`${project.title}-${project.type}`} className="project-card">
                <summary className="project-preview">
                  <ProjectImageSlider images={project.images} title={project.title} />
                  <span className="project-preview-copy">
                    <span className="card-pill">{project.domainLabel}</span>
                    <strong>{project.title}</strong>
                    <span className="project-type">{project.type}</span>
                  </span>
                </summary>

                <div className="project-details">
                  <p>{project.summary}</p>

                  <div className="chip-row compact">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <ul>
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <p className="project-note">{project.repoNote}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="section-block" id="experience">
          <div className="section-heading">
            <span className="eyebrow">Experience</span>
            <h2>Practical delivery backed by debugging and iteration.</h2>
            <p>
              This keeps your portfolio grounded in execution, not just
              coursework or concepts.
            </p>
          </div>

          <article className="experience-card">
            <div className="project-head">
              <div>
                <span className="card-pill">Recent role</span>
                <h3>{experience.role}</h3>
              </div>
              <span className="project-type">{experience.period}</span>
            </div>

            <p>{experience.summary}</p>
            <ul>
              {experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          <article className="experience-card">
            <div className="project-head">
              <div>
                <span className="card-pill">Freelance</span>
                <h3>{freelanceExperience.role}</h3>
              </div>
              <span className="project-type">{freelanceExperience.period}</span>
            </div>

            <p>{freelanceExperience.summary}</p>
          </article>
        </section>

        <section className="section-block" id="resume">
          <div className="resume-banner">
            <div className="section-heading compact">
              <span className="eyebrow">Resume</span>
              <h2>One updated resume, directly connected to the live site.</h2>
              <p>
                The download now uses your latest uploaded CV only, which keeps
                the portfolio cleaner and more professional.
              </p>
            </div>

            <a className="button primary" href={resumeLink.href} download>
              {resumeLink.label}
            </a>
          </div>
        </section>

        <section className="section-block" id="contact">
          <div className="section-heading">
            <span className="eyebrow">Contact</span>
            <h2>Ready for internships, graduate roles, and project collaboration.</h2>
            <p>
              Contact details are kept direct so the site works well as a live
              portfolio link in applications and outreach.
            </p>
          </div>

          <div className="contact-grid">
            {contactLinks.map((contact) => {
              const isExternal = /^https?:/i.test(contact.href)

              return (
                <article key={contact.label} className="contact-card">
                  <span className="card-pill">{contact.label}</span>
                  <h3>{contact.value}</h3>
                  <p>{contact.note}</p>
                  <a
                    href={contact.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer' : undefined}
                  >
                    {contact.action}
                  </a>
                </article>
              )
            })}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          Copyright {new Date().getFullYear()} {brandProfile.name}. Built with
          React for a clean and professional portfolio presentation.
        </p>
      </footer>
    </div>
  )
}

export default App
