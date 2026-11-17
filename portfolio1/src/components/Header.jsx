import { useEffect, useState } from 'react'
import { motion as Motion, AnimatePresence } from 'motion/react'
import { Command, Download, Menu, Moon, Sun, X } from 'lucide-react'

export function Header({
  brandProfile,
  navigationItems,
  resumeLink,
  theme,
  toggleTheme,
  onOpenCommand,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)

      const sections = navigationItems
        .map((item) => item.href.replace('#', ''))
        .filter(Boolean)

      const scrollPos = window.scrollY + 160

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          return
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [navigationItems])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <a className="brand-lockup" href="#top" aria-label="Mohamed Mufassir - Return to top">
          <span className="brand-mark">{brandProfile.monogram}</span>
          <span className="brand-copy">
            <strong>{brandProfile.name}</strong>
            <small>Systems Engineer • TechTitude Labs</small>
          </span>
        </a>

        {/* Desktop Floating Pill Navigation (Ref 1 + Ref 4 style) */}
        <nav className="site-nav desktop-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? 'is-active' : ''}`}
              >
                {isActive && (
                  <Motion.span
                    layoutId="nav-active-pill"
                    className="nav-active-pill"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            )
          })}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="cmdk-trigger-btn"
            onClick={onOpenCommand}
            aria-label="Open quick navigation menu (Ctrl+K)"
            title="Quick Jump (Ctrl+K)"
          >
            <Command size={14} aria-hidden="true" />
            <span>K</span>
          </button>

          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            type="button"
          >
            {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>

          <a className="header-cta" href={resumeLink.href} download>
            <span>Resume</span>
            <Download size={15} aria-hidden="true" />
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            type="button"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="mobile-nav-drawer"
            aria-label="Mobile navigation"
          >
            {navigationItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`mobile-nav-link ${isActive ? 'is-active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            })}
          </Motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
