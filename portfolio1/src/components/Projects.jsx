import { useState, useMemo, useEffect } from 'react'
import { ProjectImageSlider } from './ProjectImageSlider'

const FILTER_CATEGORIES = [
  { key: 'all', label: 'All Projects' },
  { key: 'robotics', label: 'Robotics & IoT' },
  { key: 'embedded', label: 'Embedded Systems' },
  { key: 'systems', label: 'Digital Systems & Control' },
  { key: 'software', label: 'Software Engineering' },
]

export function Projects({ projectCards, selectedProject, setSelectedProject }) {
  const [activeFilter, setActiveFilter] = useState('all')

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectCards
    return projectCards.filter((project) => project.domain === activeFilter)
  }, [projectCards, activeFilter])

  // Count per category
  const counts = useMemo(() => {
    const map = { all: projectCards.length }
    projectCards.forEach((p) => {
      map[p.domain] = (map[p.domain] || 0) + 1
    })
    return map
  }, [projectCards])

  return (
    <section className="section-block" id="projects">
      <div className="section-heading">
        <span className="section-eyebrow">Projects</span>
        <h2 className="section-title">Hardware, Firmware & Software Engineering</h2>
        <p className="section-subtitle">
          Featured engineering builds spanning AVR assembly robotics, closed-loop PID control systems, IoT surveillance, and cross-platform desktop products.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="project-filter-bar" role="tablist" aria-label="Filter projects by engineering domain">
        {FILTER_CATEGORIES.map((cat) => {
          const count = counts[cat.key] || 0
          const isActive = activeFilter === cat.key

          return (
            <button
              key={cat.key}
              role="tab"
              aria-selected={isActive}
              className={`filter-pill ${isActive ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(cat.key)}
            >
              <span>{cat.label}</span>
              <span className="filter-count">{count}</span>
            </button>
          )
        })}
      </div>

      {/* Project Cards Grid */}
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <article
            key={`${project.title}-${project.type}`}
            className={`project-card ${selectedProject?.title === project.title ? 'is-selected' : ''}`}
            onClick={() => setSelectedProject(project)}
          >
            {/* Image Preview Container */}
            <div className="project-card-media">
              <ProjectImageSlider images={project.images} title={project.title} />
              <span className="project-domain-tag">{project.domainLabel}</span>
            </div>

            {/* Card Content */}
            <div className="project-card-content">
              <span className="project-type-label">{project.type}</span>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-summary">{project.summary}</p>

              {/* Stack Chips */}
              <div className="project-stack-row">
                {project.stack.slice(0, 4).map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span className="tech-chip more-chip">+{project.stack.length - 4}</span>
                )}
              </div>

              {/* View Details Button */}
              <button
                className="view-project-btn"
                type="button"
                aria-label={`View architecture and details for ${project.title}`}
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedProject(project)
                }}
              >
                <span>View Engineering Details</span>
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal-layer" role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
          <div
            className="modal-backdrop"
            onClick={() => setSelectedProject(null)}
            aria-hidden="true"
          />

          <div className="modal-content-panel">
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-tags">
                <span className="project-domain-tag">{selectedProject.domainLabel}</span>
                <span className="project-type-label">{selectedProject.type}</span>
              </div>
              <button
                className="modal-close-btn"
                type="button"
                aria-label="Close project modal"
                onClick={() => setSelectedProject(null)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <h3 id="modal-project-title" className="modal-title">{selectedProject.title}</h3>

            {/* Modal Media Slider */}
            <div className="modal-media-wrapper">
              <ProjectImageSlider images={selectedProject.images} title={selectedProject.title} />
            </div>

            {/* Modal Body */}
            <div className="modal-body-content">
              <div className="modal-section">
                <h4 className="modal-subheading">Overview</h4>
                <p className="modal-summary">{selectedProject.summary}</p>
              </div>

              <div className="modal-section">
                <h4 className="modal-subheading">Technologies & Hardware</h4>
                <div className="chip-row">
                  {selectedProject.stack.map((tech) => (
                    <span key={tech} className="tech-chip highlight">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4 className="modal-subheading">Key Engineering Deliverables</h4>
                <ul className="modal-points-list">
                  {selectedProject.points.map((point) => (
                    <li key={point} className="modal-point-item">
                      <span className="point-bullet" aria-hidden="true">✦</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProject.repoNote && (
                <div className="modal-note-box">
                  <span className="note-icon" aria-hidden="true">ℹ</span>
                  <p>{selectedProject.repoNote}</p>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button
                className="button primary-btn"
                type="button"
                onClick={() => setSelectedProject(null)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
