import { Link } from 'react-router-dom'
import { motion as Motion } from 'motion/react'
import { ArrowUpRight, Cpu } from 'lucide-react'
import { PageSEO } from '../components'

const BASE_SITE_URL = 'https://www.mohamedmufassir.me'

export function RoboticsPage({ roboticsLearnings, projectCards }) {
  const siteUrl = (import.meta.env.VITE_SITE_URL || BASE_SITE_URL).replace(/\/+$/, '')

  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Robotics, Embedded Systems & Control Engineering Learnings — Mohamed Mufassir',
    description:
      'Hands-on engineering notes and lessons on bare-metal AVR Assembly, closed-loop PID motor control, dual-core ESP32-CAM streaming, and synchronous FSM hardware by Mohamed Mufassir.',
    url: `${siteUrl}/robotics`,
    author: {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Mohamed Mufassir',
      url: `${siteUrl}/`,
    },
    keywords: [
      'Mohamed Mufassir robotics',
      'embedded systems learnings',
      'PID motor control notes',
      'AVR assembly autonomous robot',
      'ESP32-CAM live streaming robot',
      'TechTitude Labs robotics',
    ],
  }

  return (
    <Motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="subpage-shell"
    >
      <PageSEO
        title="Robotics & Embedded Engineering Learnings | Mohamed Mufassir"
        description="Hands-on engineering learnings from Mohamed Mufassir across autonomous robotics, bare-metal AVR Assembly, closed-loop PID motor speed control, ESP32-CAM IoT, and digital FSM hardware."
        path="/robotics"
        keywords="Mohamed Mufassir robotics, embedded systems learnings, PID motor control, AVR assembly robot, ESP32-CAM robotics, TechTitude Labs"
        jsonLd={schemaJsonLd}
      />

      <div className="subpage-banner">
        <span className="section-eyebrow">FIELD NOTES &amp; CONTROL LEARNINGS</span>
        <h1 className="subpage-headline">
          Robotics, <span className="hero-headline-dual-1">Embedded</span> &amp;{' '}
          <span className="hero-headline-dual-2">Control</span>
        </h1>
        <p className="detail-lead-copy">
          Practical engineering lessons earned at the hardware workbench — debugging bare-metal AVR
          registers, tuning closed-loop PID motor dynamics, stabilizing ESP32 power rails, and
          bridging telemetry software with real actuators.
        </p>
      </div>

      <section className="section-open robotics-learnings-section">
        <div className="learnings-ledger">
          {roboticsLearnings.map((item) => {
            const linkedProjects = (item.projectSlugs || [])
              .map((slug) => projectCards.find((p) => p.slug === slug))
              .filter(Boolean)

            return (
              <article key={item.id} className="learning-entry">
                <div className="learning-entry-head">
                  <span className="wt-track-num">{item.id}</span>
                  <div>
                    <span className="learning-focus-tag">{item.focus}</span>
                    <h2>{item.title}</h2>
                  </div>
                </div>

                <p className="learning-summary">{item.summary}</p>

                <ul className="modal-points-list learning-takeaways">
                  {item.takeaways.map((point) => (
                    <li key={point} className="modal-point-item">
                      <span className="point-bullet" aria-hidden="true">✦</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {linkedProjects.length > 0 && (
                  <div className="learning-project-links">
                    <span className="learning-links-label">Applied in Case Studies:</span>
                    <div className="learning-link-row">
                      {linkedProjects.map((proj) => (
                        <Link
                          key={proj.slug}
                          to={`/projects/${proj.slug}`}
                          className="btn-outline-clean detail-chip-link"
                        >
                          <Cpu size={14} aria-hidden="true" />
                          <span>{proj.title}</span>
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        <div className="topic-bottom-cta">
          <Link to="/projects" className="btn-outline-clean">
            <span>Browse All {projectCards.length} Systems</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <Link to="/freelance" className="btn-dual-gradient">
            <span>Hire for Robotics &amp; Embedded Builds</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </Motion.div>
  )
}
