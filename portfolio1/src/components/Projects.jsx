import { ProjectImageSlider } from './ProjectImageSlider'

export function Projects({ projectCards, selectedProject, setSelectedProject }) {
  return (
    <section className="section-block" id="projects">
      <div className="section-heading">
        <span className="eyebrow">Projects</span>
        <h2>Robotics and embedded projects first, with details on click.</h2>
        <p>
          Each project starts as a simple title and image preview. Select one to view the stack,
          engineering notes, and resume-aligned details above the grid.
        </p>
      </div>

      {selectedProject && (
        <article className="project-detail-layer" aria-live="polite">
          <div className="project-detail-backdrop" onClick={() => setSelectedProject(null)} />
          <div className="project-detail-modal">
            <div className="project-detail-media">
              <ProjectImageSlider images={selectedProject.images} title={selectedProject.title} />
            </div>

            <div className="project-detail-copy">
              <div className="project-head">
                <div>
                  <span className="card-pill">{selectedProject.domainLabel}</span>
                  <h3>{selectedProject.title}</h3>
                </div>
                <button
                  className="icon-button close-button"
                  type="button"
                  aria-label="Close project details"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </button>
              </div>

              <p>{selectedProject.summary}</p>

              <div className="chip-row compact">
                {selectedProject.stack.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>

              <ul>
                {selectedProject.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <p className="project-note">{selectedProject.repoNote}</p>
            </div>
          </div>
        </article>
      )}

      <div className="project-grid">
        {projectCards.map((project) => (
          <article
            key={`${project.title}-${project.type}`}
            className={`project-card ${selectedProject?.title === project.title ? 'is-active' : ''}`}
          >
            <button
              className="project-preview"
              type="button"
              aria-expanded={selectedProject?.title === project.title}
              onClick={() => setSelectedProject(project)}
            >
              <ProjectImageSlider images={project.images} title={project.title} />
              <span className="project-preview-copy">
                <span className="card-pill">{project.domainLabel}</span>
                <strong>{project.title}</strong>
                <span className="project-type">{project.type}</span>
              </span>
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
