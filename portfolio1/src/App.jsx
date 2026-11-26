import { useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
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
  freelanceTracks,
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
  BackgroundCanvas,
  CommandMenu,
  Footer,
  Header,
  MagneticCursor,
} from './components'
import {
  AboutPage,
  ContactPage,
  ExperiencePage,
  HomePage,
  ProjectsPage,
} from './pages'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [commandOpen, setCommandOpen] = useState(false)
  const [copiedInfo, setCopiedInfo] = useState(null)
  const location = useLocation()
  const lenisRef = useRef(null)

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

  const handleCopyContact = (value, label = 'Contact') => {
    navigator.clipboard?.writeText(value)
    setCopiedInfo({ value, label })
    window.setTimeout(() => setCopiedInfo(null), 2600)
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

  // Smooth scrolling via Lenis
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    let rafId = 0
    const raf = (time) => {
      lenis.raf(time)
      rafId = window.requestAnimationFrame(raf)
    }
    rafId = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // Pause Lenis while a modal or command dialog is open so native modal scrolling works cleanly
  useEffect(() => {
    if (!lenisRef.current) return
    if (selectedProject || commandOpen) {
      lenisRef.current.stop()
    } else {
      lenisRef.current.start()
    }
  }, [selectedProject, commandOpen])

  // Reset scroll position to top cleanly on every route navigation
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [location.pathname])

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
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <HomePage
                  brandProfile={brandProfile}
                  heroRoles={heroRoles}
                  techRibbonItems={techRibbonItems}
                  resumeLink={resumeLink}
                  projectCards={projectCards}
                  freelanceTracks={freelanceTracks}
                  contactLinks={contactLinks}
                  onOpenProject={setSelectedProject}
                  onCopyContact={handleCopyContact}
                  copiedValue={copiedInfo?.value}
                />
              }
            />
            <Route
              path="/about"
              element={
                <AboutPage
                  aboutHighlights={aboutHighlights}
                  inlineMetrics={inlineMetrics}
                  education={education}
                  skillSections={skillSections}
                  interestAreas={interestAreas}
                  engineeringProcess={engineeringProcess}
                />
              }
            />
            <Route
              path="/projects"
              element={
                <ProjectsPage
                  projectCards={projectCards}
                  selectedProject={selectedProject}
                  setSelectedProject={setSelectedProject}
                />
              }
            />
            <Route
              path="/experience"
              element={
                <ExperiencePage
                  experiences={experiences}
                  experience={experience}
                  freelanceExperience={freelanceExperience}
                  resumeLink={resumeLink}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <ContactPage
                  contactLinks={contactLinks}
                  inquiryTopics={inquiryTopics}
                  freelanceTracks={freelanceTracks}
                  brandProfile={brandProfile}
                  onCopyContact={handleCopyContact}
                  copiedValue={copiedInfo?.value}
                />
              }
            />
            <Route
              path="*"
              element={
                <HomePage
                  brandProfile={brandProfile}
                  heroRoles={heroRoles}
                  techRibbonItems={techRibbonItems}
                  resumeLink={resumeLink}
                  projectCards={projectCards}
                  freelanceTracks={freelanceTracks}
                  contactLinks={contactLinks}
                  onOpenProject={setSelectedProject}
                  onCopyContact={handleCopyContact}
                  copiedValue={copiedInfo?.value}
                />
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer brandProfile={brandProfile} navigationItems={navigationItems} />

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
        onCopyEmail={handleCopyContact}
      />

      {copiedInfo && (
        <div className="toast-notification" role="status" aria-live="polite">
          <Check size={16} aria-hidden="true" />
          <span>{copiedInfo.label} copied to clipboard!</span>
        </div>
      )}
    </div>
  )
}

export default App
