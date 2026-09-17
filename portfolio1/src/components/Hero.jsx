export function Hero({ brandProfile, heroMetrics, resumeLink }) {
  const profilePhoto = '/images/Mufassir.png'

  return (
    <section className="hero-section" id="hero">
      {/* Left Bento Column: Main Presentation */}
      <div className="hero-copy-panel">
        {/* Availability Live Badge */}
        <div className="status-pill-badge" aria-label="Current availability status">
          <span className="status-pulse-dot" aria-hidden="true" />
          <span className="status-text">{brandProfile.availability}</span>
        </div>

        <div className="hero-headings">
          <p className="hero-eyebrow">Hello, I am</p>
          <h1 className="hero-title">{brandProfile.name}</h1>
          <h2 className="hero-subtitle">{brandProfile.tagline}</h2>
        </div>

        <p className="hero-lead">{brandProfile.summary}</p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a className="button primary-btn" href="#projects">
            <span>Explore Projects</span>
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a className="button secondary-btn" href={resumeLink.href} download>
            <span>Download CV</span>
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a className="button ghost-btn" href="#contact">
            <span>Contact</span>
          </a>
        </div>

        {/* Engineering Metrics / Focus Grid */}
        <div className="metrics-grid">
          {heroMetrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <span className="metric-label">{metric.label}</span>
              <span className="metric-val">{metric.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Bento Column: Interactive Profile & Hardware Spec Card */}
      <aside className="hero-showcase-panel">
        <div className="profile-bento-card">
          <div className="profile-image-wrapper">
            <img
              className="profile-avatar"
              src={profilePhoto}
              alt={brandProfile.name}
              onError={(e) => {
                // Graceful fallback if image path is unavailable
                e.target.style.display = 'none'
              }}
            />
            <div className="avatar-glow-ring" aria-hidden="true" />
          </div>

          <div className="profile-bento-info">
            <span className="profile-bento-name">{brandProfile.name}</span>
            <span className="profile-bento-title">{brandProfile.title}</span>
            <div className="profile-location-tag">
              <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>{brandProfile.location}</span>
            </div>
          </div>

          {/* Quick Hardware & Engineering Chips */}
          <div className="profile-tech-tags">
            <span className="tech-badge">AVR & Assembly</span>
            <span className="tech-badge">ESP32-CAM</span>
            <span className="tech-badge">Raspberry Pi</span>
            <span className="tech-badge">PID & Control</span>
            <span className="tech-badge">Embedded C</span>
          </div>
        </div>

        {/* Education Highlight Card */}
        <div className="hero-subcard">
          <div className="subcard-header">
            <span className="subcard-badge">Education</span>
            <span className="subcard-meta">2023 — 2027</span>
          </div>
          <strong className="subcard-title">{brandProfile.education}</strong>
          <p className="subcard-detail">Specializing in real-time hardware-software co-design, digital logic, and embedded firmware.</p>
        </div>
      </aside>
    </section>
  )
}
