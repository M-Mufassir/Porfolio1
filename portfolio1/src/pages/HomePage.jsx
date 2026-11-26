import { Link, useNavigate } from 'react-router-dom'
import { motion as Motion } from 'motion/react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Hero } from '../components'

export function HomePage({
  brandProfile,
  heroRoles,
  techRibbonItems,
  resumeLink,
  projectCards,
  onOpenProject,
}) {
  const navigate = useNavigate()
  const spotlightSystems = projectCards.slice(0, 3)

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28 }}
      className="page-transition-wrap"
    >
      <Hero
        brandProfile={brandProfile}
        heroRoles={heroRoles}
        techRibbonItems={techRibbonItems}
        resumeLink={resumeLink}
      />

      {/* Home Page Quick Preview Strip: Featured Systems & Multi-Page Portals */}
      <section className="section-open home-preview-section">
        <div className="home-preview-header">
          <div>
            <span className="section-eyebrow">Featured Hardware &amp; Systems</span>
            <h2 className="home-preview-title">Selected Engineering Highlights</h2>
          </div>
          <Link to="/projects" className="btn-outline-clean">
            <span>View All {projectCards.length} Systems</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="home-highlights-ledger">
          {spotlightSystems.map((project, idx) => (
            <button
              key={project.title}
              type="button"
              onClick={() => {
                onOpenProject(project)
                navigate('/projects')
              }}
              className="project-index-row home-highlight-row"
            >
              <span className="index-num">{String(idx + 1).padStart(2, '0')}</span>
              <div className="index-main">
                <div className="index-meta">
                  <span>{project.domainLabel}</span>
                  <span>•</span>
                  <span>{project.type}</span>
                </div>
                <h3 className="index-title">{project.title}</h3>
                <span className="index-stack-inline">{project.stack.slice(0, 4).join('  /  ')}</span>
              </div>
              <span className="index-arrow-circle" aria-hidden="true">
                <ArrowUpRight size={17} />
              </span>
            </button>
          ))}
        </div>

        {/* Clean Multi-Page Route Strip (Zero Cards — Pure Open Hairline Navigation) */}
        <div className="home-route-strip">
          <Link to="/about" className="home-route-link">
            <span className="route-num">01</span>
            <div>
              <strong>Engineering Philosophy &amp; Stack</strong>
              <small>Bare-metal firmware, PID robotics &amp; workflow</small>
            </div>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>

          <Link to="/experience" className="home-route-link">
            <span className="route-num">02</span>
            <div>
              <strong>Career &amp; TechTitude Labs</strong>
              <small>Telecom fiber, hardware R&amp;D &amp; CV</small>
            </div>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>

          <Link to="/contact" className="home-route-link">
            <span className="route-num">03</span>
            <div>
              <strong>Start a Collaboration</strong>
              <small>Direct channels &amp; project brief</small>
            </div>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </Motion.div>
  )
}
