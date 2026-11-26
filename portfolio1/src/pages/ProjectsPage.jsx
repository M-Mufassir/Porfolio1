import { motion as Motion } from 'motion/react'
import { Projects } from '../components'

export function ProjectsPage({ projectCards, selectedProject, setSelectedProject }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="subpage-shell"
    >
      <div className="subpage-banner">
        <span className="section-eyebrow">02 / ENGINEERING ARCHIVE</span>
        <h1 className="subpage-headline">
          Robotics, <span className="hero-headline-dual-1">Embedded</span> &amp;{' '}
          <span className="hero-headline-dual-2">Software</span>
        </h1>
      </div>

      <Projects
        projectCards={projectCards}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </Motion.div>
  )
}
