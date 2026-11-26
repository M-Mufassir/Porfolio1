import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { Check } from 'lucide-react'
import './App.css'
import {
  aboutHighlights,
  brandProfile,
  contactLinks,
  education,
  engineeringProcess,
  experience,
  experiences,
  freelanceExperience,
  heroRoles,
  inlineMetrics,
  inquiryTopics,
  interestAreas,
  navigationItems,
  projectCards,
  resumeLink,
  skillSections,
  techRibbonItems,
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
  MagneticCursor,
  ProcessTimeline,
  Projects,
  Skills,
} from './components'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [commandOpen, setCommandOpen] = useState(false)
  const [copied, setCopied] = useState(false)

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

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

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
    <div className="site-shell">
      <BackgroundCanvas theme={theme} />
      <MagneticCursor />
      <div className="ambient-mesh-glow" aria-hidden="true" />
      <div className="ambient-grid-layer" aria-hidden="true" />

      <Header
        brandProfile={brandProfile}
        navigationItems={navigationItems}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenCommand={() => setCommandOpen(true)}
      />

      <main className="page-open-shell" id="top">
        <Hero
          brandProfile={brandProfile}
          heroRoles={heroRoles}
          techRibbonItems={techRibbonItems}
          resumeLink={resumeLink}
        />

        <About
          aboutHighlights={aboutHighlights}
          inlineMetrics={inlineMetrics}
          education={education}
        />

        <Projects
          projectCards={projectCards}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />

        <Skills
          skillSections={skillSections}
          interestAreas={interestAreas}
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
          inquiryTopics={inquiryTopics}
          brandProfile={brandProfile}
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
