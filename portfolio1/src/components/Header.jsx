import { useEffect, useState } from 'react'
import { AnimatePresence, motion as Motion, useScroll, useSpring } from 'motion/react'
import { Command, Menu, Moon, Sun, X } from 'lucide-react'

export function Header({
  brandProfile,
  navigationItems,
  theme,
  toggleTheme,
  onOpenCommand,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 28, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)

      const sections = navigationItems
        .map((item) => item.href.replace('#', ''))
        .filter(Boolean)

      const scrollPos = window.scrollY + 180

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
      {/* Thin Scroll Progress Hairline */}
      <Motion.div className="scroll-progress-line" style={{ scaleX }} aria-hidden="true" />

      <div className="header-inner">
        <a className="brand-lockup" href="#top" aria-label="Mohamed Mufassir - Return to top">
          <span className="brand-mark">{brandProfile.monogram}</span>
          <span className="brand-copy">
            <strong>{brandProfile.name}</strong>
          </span>
        </a>

        {/* Clean Unboxed Minimal Navigation (Ref 1 + Ref 2 + Ref 3) */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? 'is-active' : ''}`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <Motion.span
                    layoutId="nav-underline"
                    className="nav-underline"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="icon-action-btn cmdk-btn"
            onClick={onOpenCommand}
            aria-label="Open quick navigation menu (Ctrl+K)"
            title="Quick Jump (Ctrl+K)"
          >
            <Command size={14} aria-hidden="true" />
            <span>K</span>
          </button>

          <button
            className="icon-action-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            type="button"
          >
            {theme === 'dark' ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
          </button>

          <div className="header-cta-wrap">
            <a className="header-cta" href="#contact">
              Let&apos;s Work
            </a>
            {/* Subtle Ref 1 Kawsar curved hand-drawn annotation cue */}
            <svg
              className="header-doodle-arrow"
              viewBox="0 0 46 38"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 34 C12 24, 10 18, 22 20 C31 21, 34 12, 34 4 M29 9 L34 3 L40 9"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

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
