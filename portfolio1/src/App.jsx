import { useEffect, useRef, useState } from 'react'
import './App.css'
import {
  aboutHighlights,
  brandProfile,
  contactLinks,
  education,
  experience,
  experiences,
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

  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  // Apply data-theme to root html element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  // Keyboard Escape listener for modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  // Interactive subtle parallax and background motion
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
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="site-shell" ref={shellRef}>
      {/* Dynamic Background Mesh & Grid Layers */}
      <div className="ambient-mesh-glow" aria-hidden="true" />
      <div className="ambient-grid-layer" aria-hidden="true" />

      <Header
        brandProfile={brandProfile}
        navigationItems={navigationItems}
        resumeLink={resumeLink}
        theme={theme}
        toggleTheme={toggleTheme}
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
          experiences={experiences}
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
