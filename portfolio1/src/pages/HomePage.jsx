import { Link } from 'react-router-dom'
import { motion as Motion } from 'motion/react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Hero, PageSEO, WorkTogether } from '../components'

export function HomePage({
  brandProfile,
  heroRoles,
  techRibbonItems,
  resumeLink,
  projectCards,
  freelanceTracks,
  contactLinks,
  onCopyContact,
  copiedValue,
}) {
  const spotlightSystems = projectCards.slice(0, 3)

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28 }}
      className="page-transition-wrap"
    >
      <PageSEO
        title="Mohamed Mufassir | Embedded Systems, Robotics & Software Engineer"
        description="Portfolio of Mohamed Mufassir (MUFASSIR.dev) — Embedded Systems & Robotics Enthusiast, Computer Systems Engineering undergraduate at SLIIT & Co-Founder of TechTitude Labs. Available for Software, IoT, Embedded & Robotics projects."
        path="/"
        keywords="Mohamed Mufassir, MUFASSIR.dev, Embedded Systems, Autonomous Robotics, TechTitude Labs, SLIIT, Freelance Software IoT Robotics Sri Lanka"
      />
      <Hero
        brandProfile={brandProfile}
        heroRoles={heroRoles}
        techRibbonItems={techRibbonItems}
        resumeLink={resumeLink}
      />

      {/* Selected Engineering Highlights — Real indexable links into dedicated project pages */}
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
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
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
            </Link>
          ))}
        </div>

        {/* Clean Multi-Page Route Strip */}
        <div className="home-route-strip">
          <Link to="/robotics" className="home-route-link">
            <span className="route-num">01</span>
            <div>
              <strong>Robotics &amp; Embedded Learnings</strong>
              <small>PID motor control, AVR assembly &amp; ESP32 notes</small>
            </div>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>

          <Link to="/freelance" className="home-route-link">
            <span className="route-num">02</span>
            <div>
              <strong>Freelance Engineering Services</strong>
              <small>Software, IoT, Embedded &amp; Robotics builds</small>
            </div>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>

          <Link to="/experience" className="home-route-link">
            <span className="route-num">03</span>
            <div>
              <strong>Career &amp; TechTitude Labs</strong>
              <small>Telecom fiber, hardware R&amp;D &amp; CV</small>
            </div>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Let's Work Together — Freelance Focus & Direct Phones / Gmail */}
      <WorkTogether
        freelanceTracks={freelanceTracks}
        contactLinks={contactLinks}
        onCopyContact={onCopyContact}
        copiedValue={copiedValue}
      />
    </Motion.div>
  )
}
