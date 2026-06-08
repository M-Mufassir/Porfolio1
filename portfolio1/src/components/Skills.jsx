export function Skills({ skillSections, interestAreas }) {
  return (
    <section className="section-block" id="skills">
      <div className="section-heading">
        <span className="eyebrow">Skills</span>
        <h2>Technical strengths across firmware, hardware integration, and software.</h2>
        <p>
          The layout is intentionally simple so the embedded stack, control work, and supporting
          software skills are easy to scan.
        </p>
      </div>

      <div className="skills-grid">
        {skillSections.map((section) => (
          <article key={section.title} className="skill-card">
            <h3>{section.title}</h3>
            <div className="chip-row">
              {section.items.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <article className="interests-panel">
        <span className="card-pill">Interest Areas</span>
        <div className="chip-row">
          {interestAreas.map((area) => (
            <span key={area} className="interest-chip">
              {area}
            </span>
          ))}
        </div>
      </article>
    </section>
  )
}
