import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'motion/react'
import { ArrowUpRight, ChevronRight, Sparkles, X } from 'lucide-react'
import { ProjectImageSlider } from './ProjectImageSlider'
import { SpotlightCard } from './SpotlightCard'
import { SplitText } from './TextAnimations'

const FILTER_CATEGORIES = [
  { key: 'all', label: 'All Systems' },
  { key: 'robotics', label: 'Robotics & IoT' },
  { key: 'embedded', label: 'Embedded Systems' },
  { key: 'systems', label: 'Digital & Telecom' },
  { key: 'software', label: 'Software Engineering' },
]

export function Projects({
  projectCards,
  featuredProjectTitles = [],
  selectedProject,
  setSelectedProject,
}) {
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  const featuredProjects = useMemo(() => {
    if (!featuredProjectTitles.length) return projectCards.slice(0, 3)
    return featuredProjectTitles
      .map((title) => projectCards.find((p) => p.title === title))
      .filter(Boolean)
  }, [projectCards, featuredProjectTitles])

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

  return (
    <section className="section-block" id="projects">
      <div className="section-heading">
        <span className="section-eyebrow">Selected Works</span>
        <h2 className="section-title">
          <SplitText text="Engineered Systems & Applied Innovation" mode="words" />
        </h2>
        <p className="section-subtitle">
          A curated showcase of autonomous robotics, precision closed-loop control systems, embedded IoT networks, and scalable software solutions.
        </p>
      </div>

      {/* Ref 3 Flagship Featured Row (Top 3 Bento Cards w/ BorderBeam & Corner Arrow) */}
      <div className="featured-block">
        <div className="featured-block-header">
          <span className="card-pill">
            <Sparkles size={12} className="mr-1.5" aria-hidden="true" />
            Featured Hardware &amp; Robotics
          </span>
          <span className="featured-caption">Flagship engineering case studies</span>
        </div>

        <div className="featured-bento-grid">
          {featuredProjects.map((project, index) => (
            <Motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <SpotlightCard
                as="article"
                beam
                className="featured-project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="featured-card-media">
                  <img
                    src={project.images?.[0] || '/images/projects/default.png'}
                    alt={project.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = '/images/projects/default.png'
                    }}
                  />
                  <span className="project-domain-tag">{project.domainLabel}</span>
                </div>

                <div className="featured-card-body">
                  <span className="project-type-label">{project.type}</span>
                  <h3 className="featured-card-title">{project.title}</h3>
                  <div className="featured-card-footer">
                    <span className="featured-stack-hint">
                      {project.stack.slice(0, 2).join(' • ')}
                    </span>
                    <button
                      type="button"
                      className="corner-launch-btn"
                      aria-label={`Open ${project.title}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProject(project)
                      }}
                    >
                      <ArrowUpRight size={17} />
                    </button>
                  </div>
                </div>
              </SpotlightCard>
            </Motion.div>
          ))}
        </div>
      </div>

      {/* Category Filter Pills with Motion Shared Pill Indicator */}
      <div className="archive-header-bar">
        <h3 className="archive-title">Complete Engineering Archive</h3>
        <div
          className="project-filter-bar"
          role="tablist"
          aria-label="Filter projects by engineering domain"
        >
          {FILTER_CATEGORIES.map((cat) => {
            const count = counts[cat.key] || 0
            const isActive = activeFilter === cat.key

            return (
              <button
                key={cat.key}
                role="tab"
                type="button"
                aria-selected={isActive}
                className={`filter-pill ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveFilter(cat.key)}
              >
                {isActive && (
                  <Motion.span
                    layoutId="project-filter-active"
                    className="filter-active-bg"
                    transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
                <span className="filter-count relative z-10">{count}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Project Cards Grid */}
      <Motion.div layout className="project-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <Motion.div
              key={`${project.title}-${project.type}`}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <SpotlightCard
                as="article"
                className={`project-card ${selectedProject?.title === project.title ? 'is-selected' : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-card-media">
                  <ProjectImageSlider images={project.images} title={project.title} />
                  <span className="project-domain-tag">{project.domainLabel}</span>
                </div>

                <div className="project-card-content">
                  <span className="project-type-label">{project.type}</span>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-summary">{project.summary}</p>

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

                  <button
                    className="view-project-btn"
                    type="button"
                    aria-label={`View architecture and details for ${project.title}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(project)
                    }}
                  >
                    <span>Explore Architecture</span>
                    <ChevronRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </SpotlightCard>
            </Motion.div>
          ))}
        </AnimatePresence>
      </Motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="project-modal-layer"
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
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="modal-content-panel"
            >
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

                {(selectedProject.systemHighlight || selectedProject.repoNote) && (
                  <div className="modal-note-box">
                    <Sparkles size={18} className="note-icon" aria-hidden="true" />
                    <div className="modal-note-content">
                      <span className="modal-note-title">Architecture Highlight</span>
                      <p>{selectedProject.systemHighlight || selectedProject.repoNote}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="modal-footer">
                <button
                  className="button primary-btn"
                  type="button"
                  onClick={() => setSelectedProject(null)}
                >
                  Close Details
                </button>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
