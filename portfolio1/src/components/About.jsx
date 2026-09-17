export function About({ aboutHighlights, education }) {
  return (
    <section className="section-block" id="about">
      <div className="section-heading">
        <span className="section-eyebrow">About</span>
        <h2 className="section-title">Engineering Mindset & Systems Foundation</h2>
        <p className="section-subtitle">
          Bridging low-level register manipulation, hardware integration, and software architecture to engineer reliable, real-world systems.
        </p>
      </div>

      <div className="about-bento-grid">
        {/* Highlight Cards */}
        {aboutHighlights.map((item, index) => (
          <article key={item.title} className={`about-card highlight-${index + 1}`}>
            <div className="about-card-icon" aria-hidden="true">
              {index === 0 && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="1" x2="9" y2="4"></line>
                  <line x1="15" y1="1" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="23"></line>
                  <line x1="15" y1="20" x2="15" y2="23"></line>
                  <line x1="20" y1="9" x2="23" y2="9"></line>
                  <line x1="20" y1="14" x2="23" y2="14"></line>
                  <line x1="1" y1="9" x2="4" y2="9"></line>
                  <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>
              )}
              {index === 1 && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              )}
              {index === 2 && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              )}
            </div>
            <h3 className="about-card-title">{item.title}</h3>
            <p className="about-card-desc">{item.description}</p>
          </article>
        ))}

        {/* Education Bento Panel */}
        <article className="education-bento-card">
          <div className="education-badge-row">
            <span className="card-pill">Academic Degree</span>
            <span className="edu-period">{education.period}</span>
          </div>
          <h3 className="edu-degree">{education.degree}</h3>
          <p className="edu-school">{education.school}</p>
          <div className="edu-footer-tags">
            <span className="edu-tag">Hardware-Software Systems</span>
            <span className="edu-tag">Digital Signal & Control</span>
            <span className="edu-tag">Embedded Microcontrollers</span>
          </div>
        </article>
      </div>
    </section>
  )
}
