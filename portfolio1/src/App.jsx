import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { Check } from 'lucide-react'
import './App.css'
import {
  aboutHighlights,
  brandProfile,
  contactLinks,
  coreCapabilities,
  education,
  engineeringProcess,
  experience,
  experiences,
  featuredProjectTitles,
  freelanceExperience,
  heroRoles,
  interestAreas,
  navigationItems,
  projectCards,
  resumeLink,
  skillSections,
  telemetryStats,
} from './data/portfolio.js'
import {
  About,
  BackgroundCanvas,
  CommandMenu,
  Contact,
  Experience,
  Footer,
  Header,
  Hero,
  ProcessTimeline,
  Projects,
  Skills,
  StatsBar,
} from './components'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [commandOpen, setCommandOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const shellRef = useRef(null)

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const handleCopyEmail = (email) => {
    navigator.clipboard?.writeText(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2600)
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

  // Inertial smooth scroll via Lenis (disabled automatically for reduced-motion)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let rafId = 0
    const raf = (time) => {
      lenis.raf(time)
      rafId = window.requestAnimationFrame(raf)
    }
    rafId = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="site-shell" ref={shellRef}>
      {/* Interactive Telemetry Node Canvas + Ambient Mesh & Architectural Grid */}
      <BackgroundCanvas theme={theme} />
      <div className="ambient-mesh-glow" aria-hidden="true" />
      <div className="ambient-grid-layer" aria-hidden="true" />

      <Header
        brandProfile={brandProfile}
        navigationItems={navigationItems}
        resumeLink={resumeLink}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenCommand={() => setCommandOpen(true)}
      />

      <main className="page-shell" id="top">
        <Hero
          brandProfile={brandProfile}
          heroRoles={heroRoles}
          resumeLink={resumeLink}
        />

        <StatsBar telemetryStats={telemetryStats} />

        <About aboutHighlights={aboutHighlights} education={education} />

        <Skills
          coreCapabilities={coreCapabilities}
          skillSections={skillSections}
          interestAreas={interestAreas}
        />

        <Projects
          projectCards={projectCards}
          featuredProjectTitles={featuredProjectTitles}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />

        <ProcessTimeline engineeringProcess={engineeringProcess} />

        <Experience
          experiences={experiences}
          experience={experience}
          freelanceExperience={freelanceExperience}
          resumeLink={resumeLink}
        />

        <Contact
          contactLinks={contactLinks}
          onCopyEmail={handleCopyEmail}
          copied={copied}
        />
      </main>

      <Footer brandProfile={brandProfile} />

      <CommandMenu
        open={commandOpen}
        setOpen={setCommandOpen}
        navigationItems={navigationItems}
        projectCards={projectCards}
        onSelectProject={setSelectedProject}
        resumeLink={resumeLink}
        contactLinks={contactLinks}
        theme={theme}
        toggleTheme={toggleTheme}
        onCopyEmail={handleCopyEmail}
      />

      {copied && (
        <div className="toast-notification" role="status" aria-live="polite">
          <Check size={16} aria-hidden="true" />
          <span>Email copied to clipboard!</span>
        </div>
      )}
    </div>
  )
}

export default App
