export function Skills({ skillSections, interestAreas }) {
  return (
    <section className="section-block" id="skills">
      <div className="section-heading">
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-title">Technical Capabilities & Tooling</h2>
        <p className="section-subtitle">
          Hands-on proficiency across bare-metal microcontrollers, real-time control algorithms, hardware interfaces, and full-stack software development.
        </p>
      </div>

      <div className="skills-grid">
        {skillSections.map((section, idx) => (
          <article key={section.title} className="skill-card">
            <div className="skill-card-header">
              <span className="skill-category-num">0{idx + 1}</span>
              <h3 className="skill-card-title">{section.title}</h3>
            </div>
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

      {/* Engineering Focus & Interest Areas */}
      <article className="interests-panel">
        <div className="interests-header">
          <span className="card-pill">Primary Engineering Focus</span>
          <span className="interests-caption">Core domains targeted for career impact</span>
        </div>
        <div className="chip-row">
          {interestAreas.map((area) => (
            <span key={area} className="interest-chip">
              <span className="interest-pulse" aria-hidden="true" />
              <span>{area}</span>
            </span>
          ))}
        </div>
      </article>
    </section>
  )
}
