import { useEffect, useState } from 'react'
import './App.css'
import {
  aboutDomains,
  brandProfile,
  contactLinks,
  domainDetails,
  experience,
  heroMetrics,
  labExperiments,
  navigationItems,
  projectCards,
  resumeLinks,
  roleRotator,
  skillDomains,
  softwareIcons,
} from './data/portfolio.js'

const domainOrder = Object.keys(domainDetails)

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const savedTheme = window.localStorage.getItem('portfolio-theme')

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function DomainToggle({ activeDomain, onChange }) {
  return (
    <div className="domain-toggle" role="tablist" aria-label="Portfolio domain">
      {domainOrder.map((domainKey) => {
        const domain = domainDetails[domainKey]

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
          </button>
        )
      })}
    </div>
  )
}

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb">
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M21 12.8A9 9 0 1 1 11.2 3a7.2 7.2 0 1 0 9.8 9.8Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4.2" fill="currentColor" />
              <path
                d="M12 1.8v2.6M12 19.6v2.6M4.8 4.8l1.9 1.9M17.3 17.3l1.9 1.9M1.8 12h2.6M19.6 12h2.6M4.8 19.2l1.9-1.9M17.3 6.7l1.9-1.9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          )}
        </span>
      </span>
      <span className="theme-toggle-label">
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
    </button>
  )
}

function SoftwareGlyph({ glyph }) {
  switch (glyph) {
    case 'react':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="5" fill="currentColor" />
          <ellipse
            cx="32"
            cy="32"
            rx="24"
            ry="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
          <ellipse
            cx="32"
            cy="32"
            rx="24"
            ry="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            transform="rotate(60 32 32)"
          />
          <ellipse
            cx="32"
            cy="32"
            rx="24"
            ry="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            transform="rotate(120 32 32)"
          />
        </svg>
      )
    case 'node':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M32 4 55 17v30L32 60 9 47V17z"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M24 24v16m16-16v16M24 24l8-4 8 4M24 40l8 4 8-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'javascript':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <rect x="10" y="10" width="44" height="44" rx="10" fill="currentColor" />
          <path
            d="M27 23v18c0 4-2.4 7-7 7-2.4 0-4.4-.6-6-1.8l2.2-5.4c1 .8 2 1.2 3 1.2 1.6 0 2.6-.8 2.6-3.4V23Zm11 0h7c6 0 9.6 3 9.6 8 0 4.6-2.6 6.8-6.2 8l6.8 9h-7.6l-5.6-7.6H38V48h-6V23Z"
            fill="var(--glyph-contrast)"
          />
        </svg>
      )
    case 'python':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M33 8c8 0 11 3.2 11 10v6H24c-5.2 0-8 3.1-8 8v8c0 6.6 4.6 10 11.6 10H33v6c0 3.8-2.7 6-7 6H18"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M31 56c-8 0-11-3.2-11-10v-6h20c5.2 0 8-3.1 8-8v-8c0-6.6-4.6-10-11.6-10H31V8c0-3.8 2.7-6 7-6h8"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="27" cy="18" r="2.5" fill="currentColor" />
          <circle cx="37" cy="46" r="2.5" fill="currentColor" />
        </svg>
      )
    case 'database':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <ellipse
            cx="32"
            cy="14"
            rx="17"
            ry="7"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            d="M15 14v16c0 4 7.6 7 17 7s17-3 17-7V14m-34 16v16c0 4 7.6 7 17 7s17-3 17-7V30"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
        </svg>
      )
    case 'chip':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <rect
            x="18"
            y="18"
            width="28"
            height="28"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            d="M24 12v6m8-6v6m8-6v6m8-6v6M24 46v6m8-6v6m8-6v6m8-6v6M12 24h6m-6 8h6m-6 8h6m34-16h6m-6 8h6m-6 8h6"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M10 42c6-10 12-15 18-15s12 5 18 15m-30 0h36"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="18" cy="42" r="4" fill="currentColor" />
          <circle cx="32" cy="27" r="4" fill="currentColor" />
          <circle cx="46" cy="42" r="4" fill="currentColor" />
        </svg>
      )
  }
}

function App() {
  const [activeDomain, setActiveDomain] = useState('software')
  const [roleIndex, setRoleIndex] = useState(0)
  const [typedLength, setTypedLength] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  const currentRole = roleRotator[roleIndex]
  const visibleRole = currentRole.slice(0, typedLength)
  const activeDetail = domainDetails[activeDomain]
  const activeSkillSet = skillDomains[activeDomain]
  const activeProjects = projectCards.filter(
    (project) => project.domain === activeDomain,
  )

  useEffect(() => {
    let timerId

    if (!isDeleting && typedLength < currentRole.length) {
      timerId = window.setTimeout(() => {
        setTypedLength((length) => length + 1)
      }, 90)
    } else if (!isDeleting && typedLength === currentRole.length) {
      timerId = window.setTimeout(() => {
        setIsDeleting(true)
      }, 1400)
    } else if (isDeleting && typedLength > 0) {
      timerId = window.setTimeout(() => {
        setTypedLength((length) => length - 1)
      }, 45)
    } else {
      timerId = window.setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex((index) => (index + 1) % roleRotator.length)
      }, 250)
    }

    return () => window.clearTimeout(timerId)
  }, [currentRole, isDeleting, typedLength])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <div
      className="app-shell"
      style={{
        '--active-accent': activeDetail.accent,
        '--active-glow': activeDetail.glow,
      }}
    >
      <header className="topbar">
        <a className="brand" href="#hero">
          <span className="brand-mark">MR</span>
          <span>
            <strong>{brandProfile.name}</strong>
            <small>{brandProfile.tagline}</small>
          </span>
        </a>

        <div className="topbar-actions">
          <nav className="topnav" aria-label="Primary">
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <ThemeToggle
            theme={theme}
            onToggle={() =>
              setTheme((currentTheme) =>
                currentTheme === 'dark' ? 'light' : 'dark',
              )
            }
          />
        </div>
      </header>

      <main>
        <section className="hero-section" id="hero">
          <div className="hero-copy surface-card">
            <div className="hero-label-row">
              <span className="hero-alias">MR</span>
              <p className="section-kicker">{brandProfile.fullLabel}</p>
            </div>
            <h1>
              {brandProfile.name}
              <span>{brandProfile.heroTitle}</span>
            </h1>
            <p className="hero-lead">{brandProfile.heroSummary}</p>

            <div className="hero-typing" aria-live="polite">
              <span className="typing-label">Currently framing myself as</span>
              <strong>{visibleRole}</strong>
              <span className="typing-caret" aria-hidden="true"></span>
            </div>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a className="button ghost" href="#resume">
                Download CVs
              </a>
            </div>

            <dl className="hero-metrics">
              {heroMetrics.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.label}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hero-visual surface-card">
            <div className="visual-caption">
              <span>3D Circuit Language</span>
              <span>Software Icons</span>
              <span>Systems Story</span>
            </div>

            <div className="hero-stage" aria-hidden="true">
              <div className="circuit-plane"></div>
              <div className="circuit-trace trace-a"></div>
              <div className="circuit-trace trace-b"></div>
              <div className="circuit-trace trace-c"></div>
              <div className="circuit-trace trace-d"></div>

              <div className="chip-cube">
                <div className="chip-face chip-front">MR</div>
                <div className="chip-face chip-right">Code</div>
                <div className="chip-face chip-top">Circuits</div>
              </div>

              <div className="orbital-stage">
                <div className="orbital-grid"></div>
                <div className="orbit orbit-a">
                  <span>{domainDetails.software.shortLabel}</span>
                </div>
                <div className="orbit orbit-b">
                  <span>{domainDetails.embedded.shortLabel}</span>
                </div>
                <div className="orbit orbit-c">
                  <span>{domainDetails.systems.shortLabel}</span>
                </div>
                <div className="signal signal-a"></div>
                <div className="signal signal-b"></div>
                <div className="signal signal-c"></div>
              </div>

              <div className="software-cloud">
                {softwareIcons.map((icon) => (
                  <div key={icon.label} className={`software-badge ${icon.className}`}>
                    <div className="software-glyph">
                      <SoftwareGlyph glyph={icon.glyph} />
                    </div>
                    <span>{icon.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="visual-panels">
              <article className="mini-panel">
                <span className="domain-pill">Custom build</span>
                <h3>Not a template layout</h3>
                <p>
                  The hero is built like a digital lab: chip cube, circuit
                  traces, orbit layers, and software glyphs all moving as one
                  system.
                </p>
              </article>

              <article className="mini-panel">
                <span className="domain-pill">{activeDetail.eyebrow}</span>
                <h3>{activeDetail.title}</h3>
                <p>{activeDetail.statement}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-block" id="about">
          <div className="section-heading">
            <p className="section-kicker">About</p>
            <h2>One engineer working across three connected layers.</h2>
            <p>
              The portfolio is built around a simple idea: strong products
              emerge when interface thinking, embedded reliability, and systems
              analysis inform each other.
            </p>
          </div>

          <div className="about-grid">
            {aboutDomains.map((domain) => (
              <article key={domain.id} className="surface-card about-card">
                <div className="about-card-head">
                  <span className="domain-pill">{domain.eyebrow}</span>
                  <h3>{domain.title}</h3>
                </div>
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

        <section className="section-block split-layout" id="skills">
          <div className="section-heading compact">
            <p className="section-kicker">Skills</p>
            <h2>Switch domains to inspect the toolkit behind each layer.</h2>
            <p>
              The same page adapts around the track you want to emphasize, so a
              recruiter can quickly understand where you go deepest.
            </p>
          </div>

          <DomainToggle activeDomain={activeDomain} onChange={setActiveDomain} />

          <div className="skill-layout">
            <article className="surface-card skill-panel">
              <div className="panel-head">
                <span className="domain-pill">{activeDetail.eyebrow}</span>
                <h3>{activeSkillSet.title}</h3>
              </div>
              <p>{activeSkillSet.summary}</p>

              <div className="skill-groups">
                {activeSkillSet.groups.map((group) => (
                  <div key={group.title} className="skill-group">
                    <div className="skill-group-head">
                      <h4>{group.title}</h4>
                      <span>{group.badge}</span>
                    </div>

                    <div className="skill-list">
                      {group.items.map((item) => (
                        <div key={item.name} className="skill-item">
                          <div>
                            <strong>{item.name}</strong>
                            <small>{item.context}</small>
                          </div>
                          <div className="skill-meter" aria-hidden="true">
                            <span style={{ width: `${item.level}%` }}></span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <aside className="surface-card insight-panel">
              <div className="panel-head">
                <span className="domain-pill">Focus</span>
                <h3>{activeDetail.title}</h3>
              </div>
              <p>{activeDetail.summary}</p>

              <div className="focus-chips">
                {activeSkillSet.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="insight-board" aria-hidden="true">
                <div className="insight-circuit"></div>
                <div className="insight-icons">
                  {softwareIcons.slice(0, 4).map((icon) => (
                    <div key={icon.label} className="insight-icon">
                      <SoftwareGlyph glyph={icon.glyph} />
                    </div>
                  ))}
                </div>
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
          <div className="section-heading compact">
            <p className="section-kicker">Projects</p>
            <h2>Proof across software builds, embedded prototypes, and analysis work.</h2>
            <p>
              Each track stays grounded in outcomes: shipped interfaces,
              hardware reliability, or system behavior made visible through
              study and simulation.
            </p>
          </div>

          <DomainToggle activeDomain={activeDomain} onChange={setActiveDomain} />

          <div className="project-grid">
            {activeProjects.map((project) => (
              <article key={project.title} className="surface-card project-card">
                <div className="project-head">
                  <div>
                    <span className="domain-pill">{project.label}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="project-type">{project.type}</span>
                </div>

                <p>{project.summary}</p>
                <div className="tech-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <ul className="project-points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                {project.repo ? (
                  <a
                    className="text-link"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open repository
                  </a>
                ) : (
                  <span className="repo-note">{project.repoNote}</span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section-block split-layout" id="experience">
          <div className="section-heading compact">
            <p className="section-kicker">Experience</p>
            <h2>Applied development work shaped by debugging and iteration.</h2>
            <p>
              You mentioned recent software internship work, so this section
              keeps the framing practical and outcome-focused.
            </p>
          </div>

          <article className="surface-card experience-card">
            <div className="experience-head">
              <div>
                <span className="domain-pill">Recent role</span>
                <h3>{experience.role}</h3>
              </div>
              <span>{experience.period}</span>
            </div>
            <p>{experience.summary}</p>
            <ul>
              {experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="section-block" id="lab">
          <div className="section-heading compact">
            <p className="section-kicker">Engineering Lab</p>
            <h2>Experiments, prototypes, and simulations that show hands-on range.</h2>
            <p>
              This is where the site leans into your advantage: not just coding,
              but testing ideas close to the machine and observing how systems
              behave.
            </p>
          </div>

          <div className="lab-grid">
            {labExperiments.map((experiment) => (
              <article key={experiment.title} className="surface-card lab-card">
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
        </section>

        <section className="section-block" id="resume">
          <div className="resume-card surface-card">
            <div className="section-heading compact">
              <p className="section-kicker">Resume</p>
              <h2>Download the version that matches the conversation.</h2>
              <p>
                Both resume buttons are wired to the files already stored in the
                project, making the portfolio ready to deploy without extra
                backend work.
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

            <p className="resume-note">
              One file clearly reflects your embedded profile; the second is
              treated as the software-facing version based on your request and
              current file names.
            </p>
          </div>
        </section>

        <section className="section-block" id="contact">
          <div className="section-heading compact">
            <p className="section-kicker">Contact</p>
            <h2>Let us build something impactful together.</h2>
            <p>
              The contact layer stays simple and direct so recruiters or
              collaborators can move quickly.
            </p>
          </div>

          <div className="contact-grid">
            {contactLinks.map((contact) => (
              <article key={contact.label} className="surface-card contact-card">
                <span className="domain-pill">{contact.label}</span>
                <h3>{contact.value}</h3>
                <p>{contact.note}</p>
                {contact.href ? (
                  <a
                    className="text-link"
                    href={contact.href}
                    target={contact.external ? '_blank' : undefined}
                    rel={contact.external ? 'noreferrer' : undefined}
                  >
                    {contact.action}
                  </a>
                ) : (
                  <span className="repo-note">{contact.action}</span>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          Copyright {new Date().getFullYear()} {brandProfile.name}. Built with
          React, motion-inspired UI, and a circuit-meets-software visual
          language.
        </p>
      </footer>
    </div>
  )
}

export default App
