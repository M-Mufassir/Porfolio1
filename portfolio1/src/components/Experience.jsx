import { Download } from 'lucide-react'
import { motion as Motion } from 'motion/react'
import { SpotlightCard } from './SpotlightCard'
import { ShinyText, SplitText } from './TextAnimations'

export function Experience({ experiences, experience, freelanceExperience, resumeLink }) {
  const experienceList = experiences || [experience, freelanceExperience].filter(Boolean)

  return (
    <>
      <section className="section-block" id="experience">
        <div className="section-heading">
          <span className="section-eyebrow">Career Milestones</span>
          <h2 className="section-title">
            <SplitText text="Professional Experience & Venture Leadership" mode="words" />
          </h2>
          <p className="section-subtitle">
            Applying engineering rigor across optical telecommunications infrastructure, hardware startup leadership, cross-platform software engineering, and client deliverables.
          </p>
        </div>

        <div className="timeline-container">
          {experienceList.map((item, index) => {
            const isLast = index === experienceList.length - 1

            return (
              <Motion.article
                key={`${item.role}-${item.period}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="timeline-item"
              >
                <div className="timeline-marker" aria-hidden="true">
                  <div className="timeline-dot" />
                  {!isLast && <div className="timeline-line" />}
                </div>

                <SpotlightCard className="timeline-card">
                  <div className="timeline-card-header">
                    <div>
                      <div className="timeline-badge-row">
                        <span className="card-pill">{item.category || 'Role'}</span>
                        {item.company && <span className="timeline-company">{item.company}</span>}
                      </div>
                      <h3 className="timeline-role">{item.role}</h3>
                    </div>
                    <span className="timeline-period">{item.period}</span>
                  </div>

                  <p className="timeline-summary">{item.summary}</p>

                  {item.points && item.points.length > 0 && (
                    <ul className="timeline-points">
                      {item.points.map((point) => (
                        <li key={point} className="timeline-point">
                          <span className="point-bullet" aria-hidden="true">✦</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </SpotlightCard>
              </Motion.article>
            )
          })}
        </div>
      </section>

      {/* Resume Section Banner */}
      <section className="section-block resume-section" id="resume">
        <SpotlightCard beam className="resume-banner-card">
          <div className="resume-banner-grid">
            <div className="resume-banner-content">
              <span className="section-eyebrow">Formal Credentials</span>
              <h2 className="resume-banner-title">Comprehensive Technical Curriculum Vitae</h2>
              <p className="resume-banner-desc">
                Download my detailed technical CV covering academic coursework at SLIIT, embedded hardware prototypes, fiber optic infrastructure coordination, and software development experience.
              </p>
            </div>

            <div className="resume-banner-action">
              <a
                className="button metallic-cta-btn resume-download-btn"
                href={resumeLink.href}
                download
              >
                <Download size={18} aria-hidden="true" />
                <ShinyText>{resumeLink.label}</ShinyText>
              </a>
            </div>
          </div>
        </SpotlightCard>
      </section>
    </>
  )
}
