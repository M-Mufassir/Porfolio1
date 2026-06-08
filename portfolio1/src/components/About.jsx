export function About({ aboutHighlights, education }) {
  return (
    <section className="section-block" id="about">
      <div className="section-heading">
        <span className="eyebrow">About</span>
        <h2>A focused engineering portfolio for embedded and robotics roles.</h2>
        <p>
          This version puts the strongest hardware-connected work first so recruiters can quickly
          see your robotics, control, and embedded systems direction.
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
  )
}
