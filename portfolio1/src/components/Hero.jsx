import heroImage from '../assets/banner.png'

export function Hero({ brandProfile, heroMetrics, resumeLink }) {
  const profilePhoto = '/images/Mufassir.png'

  return (
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
          <img className="portrait-backdrop" src={heroImage} alt="" aria-hidden="true" />
          <img className="profile-photo" src={profilePhoto} alt={brandProfile.name} />
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
  )
}
