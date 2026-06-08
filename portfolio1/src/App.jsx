import { useEffect, useRef, useState } from 'react'
import './App.css'
import {
  aboutHighlights,
  brandProfile,
  contactLinks,
  education,
  experience,
  freelanceExperience,
  heroMetrics,
  interestAreas,
  navigationItems,
  projectCards,
  resumeLink,
  skillSections,
} from './data/portfolio.js'
import {
  Header,
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
  Footer,
} from './components'


function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const shellRef = useRef(null)

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  // Parallax and animation effects
  useEffect(() => {
    const shell = shellRef.current

    if (!shell || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    let animationFrame = 0

    const updateParallax = (pointerX = 0, pointerY = 0) => {
      window.cancelAnimationFrame(animationFrame)

      animationFrame = window.requestAnimationFrame(() => {
        const scrollDepth = Math.min(window.scrollY / 900, 1)

        shell.style.setProperty('--parallax-x', pointerX.toFixed(3))
        shell.style.setProperty('--parallax-y', pointerY.toFixed(3))
        shell.style.setProperty('--parallax-scroll', scrollDepth.toFixed(3))
      })
    }

    const handlePointerMove = (event) => {
      const pointerX = event.clientX / window.innerWidth - 0.5
      const pointerY = event.clientY / window.innerHeight - 0.5

      updateParallax(pointerX, pointerY)
    }

    const handleScroll = () => {
      const currentX = Number(shell.style.getPropertyValue('--parallax-x')) || 0
      const currentY = Number(shell.style.getPropertyValue('--parallax-y')) || 0

      updateParallax(currentX, currentY)
    }

    updateParallax()
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="site-shell" ref={shellRef}>
      <span className="parallax-layer parallax-grid-layer" aria-hidden="true" />
      <span className="parallax-layer parallax-trace-layer" aria-hidden="true" />
      
      <Header
        brandProfile={brandProfile}
        navigationItems={navigationItems}
        resumeLink={resumeLink}
      />

      <main className="page-shell" id="top">
        <Hero brandProfile={brandProfile} heroMetrics={heroMetrics} resumeLink={resumeLink} />
        <About aboutHighlights={aboutHighlights} education={education} />
        <Skills skillSections={skillSections} interestAreas={interestAreas} />
        <Projects
          projectCards={projectCards}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        <Experience
          experience={experience}
          freelanceExperience={freelanceExperience}
          resumeLink={resumeLink}
        />
        <Contact contactLinks={contactLinks} />
      </main>

      <Footer brandProfile={brandProfile} />
    </div>
  )
}

export default App
