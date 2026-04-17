import { Suspense, lazy, useEffect, useState } from 'react'
import './App.css'
import heroImage from './assets/hero.png'
import {
  aboutDomains,
  brandProfile,
  contactLinks,
  domainDetails,
  experience,
  heroMetrics,
  labExperiments,
  projectCards,
  resumeLinks,
  roleRotator,
  skillDomains,
  softwareIcons,
} from './data/portfolio.js'

const HeroScene = lazy(() => import('./components/HeroScene.jsx'))

const domainOrder = Object.keys(domainDetails)

const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

const stackVisuals = [
  {
    label: 'JavaScript',
    note: 'Modern interfaces and product logic',
    image: '/images/clean/js-clean.png',
    domain: 'software',
  },
  {
    label: 'Node.js',
    note: 'API plumbing and backend structure',
    image: '/images/clean/node-clean.png',
    domain: 'software',
  },
  {
    label: 'Python',
    note: 'Automation, utilities, and analysis',
    image: '/images/clean/python-clean.png',
    domain: 'systems',
  },
  {
    label: 'Raspberry Pi',
    note: 'Embedded experimentation and hardware integration',
    image: '/images/raspberry pi.webp',
    domain: 'embedded',
  },
]

const sceneCards = [
  {
    label: 'JavaScript',
    image: '/images/clean/js-clean.png',
    position: [-2.8, 1.45, -0.55],
    rotation: [0.1, 0.55, -0.2],
    scale: [0.92, 0.92, 0.92],
  },
  {
    label: 'Node.js',
    image: '/images/clean/node-clean.png',
    position: [2.7, 1.1, -0.25],
    rotation: [-0.18, -0.65, 0.18],
    scale: [0.92, 0.92, 0.92],
  },
  {
    label: 'Python',
    image: '/images/clean/python-clean.png',
    position: [2.45, -1.35, -0.5],
    rotation: [0.22, -0.32, 0.16],
    scale: [0.88, 0.88, 0.88],
  },
]

function DomainSwitch({ activeDomain, onChange }) {
  return (
    <div className="domain-switch" role="tablist" aria-label="Portfolio focus">
      {domainOrder.map((domainKey) => {
        const domain = domainDetails[domainKey]
        const count = projectCards.filter((project) => project.domain === domain.id).length

        return (
          <button
            key={domain.id}
            type="button"
            role="tab"
            aria-selected={activeDomain === domain.id}
            className={activeDomain === domain.id ? 'is-active' : ''}
            onClick={() => onChange(domain.id)}
          >
            <span>{domain.shortLabel}</span>
            <small>{domain.toggleHint}</small>
            <strong>{count} projects</strong>
          </button>
        )
      })}
    </div>
  )
}

function App() {
  const [activeDomain, setActiveDomain] = useState('software')
  const [roleIndex, setRoleIndex] = useState(0)

  const activeDetail = domainDetails[activeDomain]
  const activeSkillSet = skillDomains[activeDomain]
  const activeProjects = projectCards.filter(
    (project) => project.domain === activeDomain,
  )
  const rotatingRole = roleRotator[roleIndex]

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roleRotator.length)
    }, 2300)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div
      className="site-shell"
      style={{
        '--active-accent': activeDetail.accent,
        '--active-glow': activeDetail.glow,
      }}
    >
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Go to top">
          <span className="brand-mark">MR</span>
          <span className="brand-copy">
            <strong>{brandProfile.name}</strong>
            <small>{brandProfile.tagline}</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Let&apos;s Build
        </a>
      </header>

      <main className="page-shell" id="top">
        <section className="hero-grid">
          <div className="hero-copy-panel">
            <div className="hero-intro">
              <span className="eyebrow">Final launch portfolio</span>
              <span className="status-pill">
                <span className="status-dot" aria-hidden="true"></span>
                Available for software and embedded opportunities
              </span>
            </div>

            <h1>Portfolio engineered like a product, not a template.</h1>
            <p className="hero-lead">
              {brandProfile.heroSummary} This final version pairs your real
              image assets with an interactive Three.js hero so the site feels
              modern, intentional, and ready to publish.
            </p>

            <div className="role-strip" aria-live="polite">
              <span>Current framing</span>
              <strong>{rotatingRole}</strong>
            </div>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a className="button secondary" href="#resume">
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

            <div className="signal-strip">
              {softwareIcons.map((icon) => (
                <span key={icon.label}>{icon.label}</span>
              ))}
            </div>
          </div>

          <div className="hero-visual-panel">
            <div className="scene-topline">
              <span>Interactive 3D hero</span>
              <span>React + Three.js</span>
              <span>Deploy-ready build</span>
            </div>

            <div className="scene-shell">
              <Suspense fallback={<div className="scene-loading">Loading 3D scene...</div>}>
                <HeroScene
                  accent={activeDetail.accent}
                  portrait={heroImage}
                  techCards={sceneCards}
                />
              </Suspense>
            </div>

            <div className="scene-footnotes">
              <article>
                <span>Portrait</span>
                <strong>Transparent hero image integrated into the scene</strong>
              </article>
              <article>
                <span>Attached assets</span>
                <strong>Logo images cleaned for modern floating tech cards</strong>
              </article>
              <article>
                <span>Feel</span>
                <strong>Glassmorphism, motion, depth, and launch-level polish</strong>
              </article>
            </div>
          </div>
        </section>

        <section className="section-block" id="about">
          <div className="section-heading">
            <span className="eyebrow">About</span>
            <h2>One portfolio, three engineering layers, one clear identity.</h2>
            <p>
              This site is now structured to tell a stronger story: you build
              software products, work confidently near hardware, and think at
              the systems level when problems need deeper analysis.
            </p>
          </div>

          <div className="about-story-grid">
            <article className="story-panel">
              <p className="story-kicker">{brandProfile.fullLabel}</p>
              <h3>{brandProfile.heroTitle}</h3>
              <p>
                Your value is the connection between user-facing polish,
                low-level engineering, and technical reasoning. Instead of
                splitting that identity apart, this version turns it into the
                site&apos;s central theme.
              </p>
            </article>

            <article className="story-panel highlight">
              <p className="story-kicker">Built for launch</p>
              <h3>Sharpened for recruiters, collaborators, and live deployment.</h3>
              <p>
                Clear calls to action, cleaner information hierarchy, and a
                focused visual system make the portfolio easier to scan while
                still feeling premium.
              </p>
            </article>
          </div>

          <div className="domain-grid">
            {aboutDomains.map((domain) => (
              <article key={domain.id} className="domain-card">
                <span className="card-pill">{domain.eyebrow}</span>
                <h3>{domain.title}</h3>
                <p>{domain.description}</p>
                <ul>
                  {domain.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="expertise">
          <div className="section-heading">
            <span className="eyebrow">Expertise</span>
            <h2>Shift the focus and the portfolio reframes itself around that domain.</h2>
            <p>
              Recruiters can inspect the track they care about most while the
              rest of the site keeps the broader engineering identity visible.
            </p>
          </div>

          <DomainSwitch activeDomain={activeDomain} onChange={setActiveDomain} />

          <div className="expertise-grid">
            <article className="expertise-panel">
              <div className="panel-head">
                <div>
                  <span className="card-pill">{activeDetail.eyebrow}</span>
                  <h3>{activeSkillSet.title}</h3>
                </div>
                <p>{activeDetail.shortLabel}</p>
              </div>

              <p className="panel-summary">{activeSkillSet.summary}</p>

              <div className="skill-groups">
                {activeSkillSet.groups.map((group) => (
                  <section key={group.title} className="skill-group-card">
                    <div className="skill-group-head">
                      <h4>{group.title}</h4>
                      <span>{group.badge}</span>
                    </div>

                    <div className="skill-list">
                      {group.items.map((item) => (
                        <div key={item.name} className="skill-item">
                          <div className="skill-copy">
                            <strong>{item.name}</strong>
                            <small>{item.context}</small>
                          </div>
                          <div
                            className="skill-bar"
                            role="presentation"
                            aria-hidden="true"
                          >
                            <span style={{ width: `${item.level}%` }}></span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>

            <aside className="insight-panel">
              <div className="panel-head">
                <div>
                  <span className="card-pill">Why this matters</span>
                  <h3>{activeDetail.title}</h3>
                </div>
              </div>

              <p className="panel-summary">{activeDetail.statement}</p>

              <div className="chip-row">
                {activeSkillSet.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="stack-gallery">
                {stackVisuals.map((item) => (
                  <article
                    key={item.label}
                    className={`stack-card ${
                      item.domain === activeDomain ? 'is-highlighted' : ''
                    }`}
                  >
                    <div className="stack-image-wrap">
                      <img src={item.image} alt={item.label} loading="lazy" />
                    </div>
                    <div>
                      <strong>{item.label}</strong>
                      <small>{item.note}</small>
                    </div>
                  </article>
                ))}
              </div>

              <ul className="focus-list">
                {activeSkillSet.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="section-block" id="projects">
          <div className="section-heading">
            <span className="eyebrow">Projects</span>
            <h2>Selected proof that the visual polish is backed by real engineering work.</h2>
            <p>
              The project grid stays outcome-focused so the site reads well in a
              hiring context and still works for client or collaborator review.
            </p>
          </div>

          <DomainSwitch activeDomain={activeDomain} onChange={setActiveDomain} />

          <div className="project-grid">
            {activeProjects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-head">
                  <div>
                    <span className="card-pill">{project.label}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="project-type">{project.type}</span>
                </div>

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

                {project.repo ? (
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    Open repository
                  </a>
                ) : (
                  <p className="project-note">{project.repoNote}</p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section-block experience-block" id="experience">
          <div className="section-heading">
            <span className="eyebrow">Experience</span>
            <h2>Practical work, prototypes, and systems experiments in one view.</h2>
            <p>
              This section keeps the site grounded in real execution, not just
              visuals. It shows how debugging, iteration, and hands-on testing
              shape the work behind the design.
            </p>
          </div>

          <div className="experience-grid">
            <article className="experience-card">
              <div className="panel-head">
                <div>
                  <span className="card-pill">Recent experience</span>
                  <h3>{experience.role}</h3>
                </div>
                <p>{experience.period}</p>
              </div>

              <p className="panel-summary">{experience.summary}</p>

              <ul>
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>

            <div className="lab-grid">
              {labExperiments.map((experiment) => (
                <article key={experiment.title} className="lab-card">
                  <span className="lab-index">{experiment.index}</span>
                  <h3>{experiment.title}</h3>
                  <p>{experiment.description}</p>
                  <ul>
                    {experiment.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block" id="resume">
          <div className="resume-banner">
            <div className="section-heading compact">
              <span className="eyebrow">Resume</span>
              <h2>Two resume tracks, one clean deployment-friendly download flow.</h2>
              <p>
                Both files are already connected locally, so the site can go
                live without needing any extra backend setup or storage work.
              </p>
            </div>

            <div className="resume-actions">
              {resumeLinks.map((resume) => (
                <a
                  key={resume.label}
                  className="button primary"
                  href={resume.href}
                  download
                >
                  {resume.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block" id="contact">
          <div className="section-heading">
            <span className="eyebrow">Contact</span>
            <h2>Ready to send, share, and ship.</h2>
            <p>
              The final layer stays straightforward so hiring teams or clients
              can act quickly after landing on the page.
            </p>
          </div>

          <div className="contact-grid">
            {contactLinks.map((contact) => {
              const isExternal = /^https?:/i.test(contact.href ?? '')

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

          <div className="launch-panel">
            <div>
              <span className="eyebrow">Live-ready version</span>
              <h3>Modern 3D presentation with your real assets already wired in.</h3>
            </div>
            <p>
              If you deploy this Vite build now, the site is already set up to
              present the final design language, interactive hero, resume
              downloads, and contact actions.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          Copyright {new Date().getFullYear()} {brandProfile.name}. Built with
          React, Three.js, and a launch-ready visual system.
        </p>
      </footer>
    </div>
  )
}

export default App
