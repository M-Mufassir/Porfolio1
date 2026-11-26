import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion as Motion } from 'motion/react'
import { ArrowUpRight, Sparkles, X } from 'lucide-react'
import { ProjectImageSlider } from './ProjectImageSlider'
import { SplitText } from './TextAnimations'

const FILTER_CATEGORIES = [
  { key: 'all', label: 'All Systems' },
  { key: 'robotics', label: 'Robotics & IoT' },
  { key: 'embedded', label: 'Embedded' },
  { key: 'systems', label: 'Digital & Telecom' },
  { key: 'software', label: 'Software' },
]

export function Projects({ projectCards, selectedProject, setSelectedProject }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [previewProject, setPreviewProject] = useState(projectCards[0] || null)

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectCards
    return projectCards.filter((project) => project.domain === activeFilter)
  }, [projectCards, activeFilter])

  const counts = useMemo(() => {
    const map = { all: projectCards.length }
    projectCards.forEach((p) => {
      map[p.domain] = (map[p.domain] || 0) + 1
    })
    return map
  }, [projectCards])

  // Split projects across two opposing visual marquee rows (Ref 1 Kawsar style!)
  const marqueeRowA = useMemo(() => projectCards.slice(0, 6), [projectCards])
  const marqueeRowB = useMemo(() => projectCards.slice(5), [projectCards])

  const activePreview = useMemo(() => {
    if (previewProject && filteredProjects.some((p) => p.title === previewProject.title)) {
      return previewProject
    }
    return filteredProjects[0] || projectCards[0]
  }, [filteredProjects, previewProject, projectCards])

  return (
    <section className="section-open" id="projects">
      <div className="section-heading">
        <span className="section-eyebrow">Selected Works</span>
        <h2 className="section-title">
          <SplitText text="Engineered Systems & Applied Innovation" mode="words" />
        </h2>
        <p className="section-subtitle">
          Hover any strip preview or explore the interactive architecture index below to inspect schematics, deliverables, and control stacks.
        </p>
      </div>

      {/* Full-Bleed Dual-Row Opposing Visual Marquee (Ref 1 Kawsar Ahmed style — Zero Heavy Cards) */}
      <div className="project-marquee-shell" aria-label="Visual project showcase strip">
        <div className="marquee-track marquee-left">
          {[...marqueeRowA, ...marqueeRowA].map((project, idx) => (
            <button
              key={`rowA-${project.title}-${idx}`}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="marquee-visual-item"
              aria-label={`Inspect ${project.title}`}
            >
              <img
                src={project.images?.[0] || '/images/projects/default.png'}
                alt={project.title}
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/images/projects/default.png'
                }}
              />
              <span className="marquee-item-caption">
                <span>{project.domainLabel}</span>
                <strong>{project.type}</strong>
              </span>
            </button>
          ))}
        </div>

        <div className="marquee-track marquee-right">
          {[...marqueeRowB, ...marqueeRowB].map((project, idx) => (
            <button
              key={`rowB-${project.title}-${idx}`}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="marquee-visual-item"
              aria-label={`Inspect ${project.title}`}
            >
              <img
                src={project.images?.[0] || '/images/projects/default.png'}
                alt={project.title}
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/images/projects/default.png'
                }}
              />
              <span className="marquee-item-caption">
                <span>{project.domainLabel}</span>
                <strong>{project.type}</strong>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Underline Filter Tabs (Zero Boxy Pills!) */}
      <div className="underline-filter-bar" role="tablist" aria-label="Filter projects by domain">
        {FILTER_CATEGORIES.map((cat) => {
          const count = counts[cat.key] || 0
          const isActive = activeFilter === cat.key
          return (
            <button
              key={cat.key}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActiveFilter(cat.key)}
              className={`underline-tab-btn ${isActive ? 'is-active' : ''}`}
            >
              <span>{cat.label}</span>
              <span className="tab-count">{count}</span>
              {isActive && (
                <Motion.span
                  layoutId="project-tab-line"
                  className="tab-active-underline"
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Unboxed Split Interactive Index + Borderless Live Preview Panel */}
      <div className="project-split-stage">
        <div className="project-index-list">
          {filteredProjects.map((project, idx) => {
            const isHighlighted = activePreview?.title === project.title
            return (
              <div
                key={project.title}
                role="button"
                tabIndex={0}
                onMouseEnter={() => setPreviewProject(project)}
                onFocus={() => setPreviewProject(project)}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedProject(project)
                  }
                }}
                className={`project-index-row ${isHighlighted ? 'is-active' : ''}`}
              >
                <span className="index-num">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <div className="index-main">
                  <div className="index-meta">
                    <span>{project.domainLabel}</span>
                    <span>•</span>
                    <span>{project.type}</span>
                  </div>
                  <h3 className="index-title">{project.title}</h3>
                  <div className="index-stack-inline">
                    {project.stack.slice(0, 4).join('  /  ')}
                  </div>
                  <Link
                    to={`/projects/${project.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="row-case-study-link"
                  >
                    <span>View Dedicated Case Study</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </Link>
                </div>

                <span className="index-arrow-circle" aria-hidden="true">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            )
          })}
        </div>

        {/* Sticky Borderless Preview Column (Desktop) */}
        {activePreview && (
          <aside className="project-preview-stage" aria-label="Active project preview">
            <div className="preview-media-frame">
              <ProjectImageSlider
                key={activePreview.title}
                images={activePreview.images}
                title={activePreview.title}
              />
            </div>

            <div className="preview-copy">
              <span className="preview-kicker">
                {activePreview.domainLabel} — {activePreview.type}
              </span>
              <h4>{activePreview.title}</h4>
              <p>{activePreview.summary}</p>

              <div className="preview-highlights">
                {activePreview.systemHighlight}
              </div>

              <div className="preview-actions-row">
                <Link
                  to={`/projects/${activePreview.slug}`}
                  className="btn-dual-gradient"
                >
                  <span>Full Case Study</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedProject(activePreview)}
                  className="preview-open-link"
                >
                  <span>Quick Preview</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </button>
              </div>
            </div>
          </aside>
        )}
      </div>

      {/* Project Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="project-modal-layer"
            data-lenis-prevent
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <div
              className="modal-backdrop"
              onClick={() => setSelectedProject(null)}
              aria-hidden="true"
            />

            <Motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="modal-content-panel"
              data-lenis-prevent
              tabIndex={-1}
            >
              <div className="modal-header">
                <div className="modal-tags">
                  <span className="modal-domain-label">{selectedProject.domainLabel}</span>
                  <span className="modal-type-label">{selectedProject.type}</span>
                </div>
                <button
                  className="modal-close-btn"
                  type="button"
                  aria-label="Close project modal"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={19} aria-hidden="true" />
                </button>
              </div>

              <h3 id="modal-project-title" className="modal-title">
                {selectedProject.title}
              </h3>

              <div className="modal-media-wrapper">
                <ProjectImageSlider
                  images={selectedProject.images}
                  title={selectedProject.title}
                />
              </div>

              <div className="modal-body-content">
                <div className="modal-section">
                  <h4 className="modal-subheading">Overview</h4>
                  <p className="modal-summary">{selectedProject.summary}</p>
                </div>

                <div className="modal-section">
                  <h4 className="modal-subheading">Technologies &amp; Hardware</h4>
                  <div className="modal-stack-line">
                    {selectedProject.stack.map((tech) => (
                      <span key={tech} className="modal-stack-token">
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

                {(selectedProject.systemHighlight || selectedProject.repoNote) && (
                  <div className="modal-note-box">
                    <Sparkles size={17} className="note-icon" aria-hidden="true" />
                    <div>
                      <span className="modal-note-title">Architecture Highlight</span>
                      <p>{selectedProject.systemHighlight || selectedProject.repoNote}</p>
                    </div>
                  </div>
                )}

                {selectedProject.slug && (
                  <div className="modal-footer-cta">
                    <Link
                      to={`/projects/${selectedProject.slug}`}
                      onClick={() => setSelectedProject(null)}
                      className="btn-dual-gradient"
                    >
                      <span>Open Full Case Study Page</span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                )}
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
