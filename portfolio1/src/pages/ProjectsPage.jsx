import { motion as Motion } from 'motion/react'
import { PageSEO, Projects } from '../components'

export function ProjectsPage({ projectCards, selectedProject, setSelectedProject }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="subpage-shell"
    >
      <PageSEO
        title="Projects — Robotics, AVR Assembly, ESP32-CAM & Software | Mohamed Mufassir"
        description="Explore 11+ engineered systems by Mohamed Mufassir: AVR assembly autonomous parking car, ESP32-CAM live streaming rover, Raspberry Pi PID motor controller, IoT surveillance, Electron POS, and Spring Boot apps."
        path="/projects"
        keywords="AVR assembly robot, ESP32-CAM car, Raspberry Pi PID motor control, IoT surveillance, Electron POS, Mohamed Mufassir projects"
      />
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
