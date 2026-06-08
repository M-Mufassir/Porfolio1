export function Experience({ experience, freelanceExperience, resumeLink }) {
  return (
    <>
      <section className="section-block" id="experience">
        <div className="section-heading">
          <span className="eyebrow">Experience</span>
          <h2>Practical delivery backed by debugging and iteration.</h2>
          <p>
            This keeps your portfolio grounded in execution, not just coursework or concepts.
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
              The download now uses your latest uploaded CV only, which keeps the portfolio
              cleaner and more professional.
            </p>
          </div>

          <a className="button primary" href={resumeLink.href} download>
            {resumeLink.label}
          </a>
        </div>
      </section>
    </>
  )
}
