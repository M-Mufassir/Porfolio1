export function Experience({ experiences, experience, freelanceExperience, resumeLink }) {
  // Support both new `experiences` array and legacy props
  const experienceList = experiences || [
    experience,
    freelanceExperience,
  ].filter(Boolean)

  return (
    <>
      <section className="section-block" id="experience">
        <div className="section-heading">
          <span className="section-eyebrow">Experience & Leadership</span>
          <h2 className="section-title">Industry, Entrepreneurship & Practical Execution</h2>
          <p className="section-subtitle">
            Applying engineering rigor to telecommunications infrastructure, startup venture leadership, production software, and client solutions.
          </p>
        </div>

        <div className="timeline-container">
          {experienceList.map((item, index) => {
            const isLast = index === experienceList.length - 1

            return (
              <article key={`${item.role}-${item.period}`} className="timeline-item">
                <div className="timeline-marker" aria-hidden="true">
                  <div className="timeline-dot" />
                  {!isLast && <div className="timeline-line" />}
                </div>

                <div className="timeline-card">
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
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Resume Section Banner */}
      <section className="section-block resume-section" id="resume">
        <div className="resume-banner-card">
          <div className="resume-banner-content">
            <span className="section-eyebrow">Curriculum Vitae</span>
            <h2 className="resume-banner-title">Engineering Resume & Credentials</h2>
            <p className="resume-banner-desc">
              Looking for a comprehensive technical breakdown of my academic coursework, robotics hardware builds, telecommunications training, and software experience? Download the latest verified CV.
            </p>
          </div>

          <div className="resume-banner-action">
            <a className="button primary-btn resume-download-btn" href={resumeLink.href} download>
              <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>{resumeLink.label}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
