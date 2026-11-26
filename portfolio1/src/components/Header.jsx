import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
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
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 28, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <Motion.div className="scroll-progress-line" style={{ scaleX }} aria-hidden="true" />

      <div className="header-inner">
        <Link className="brand-lockup" to="/" aria-label={`${brandProfile.name} - Home`}>
          <picture className="brand-logo-picture">
            <source srcSet="/images/mufassir-logo.webp" type="image/webp" />
            <img
              src="/images/mufassir-logo.png"
              alt="MUFASSIR.dev"
              className="brand-logo-img"
            />
          </picture>
        </Link>

        {/* Multi-Page Navigation Links with Animated Active Underline */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => {
            const isActive =
              item.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.to)

            return (
              <NavLink
                key={item.to}
                to={item.to}
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
              </NavLink>
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
            <Link className="header-cta" to="/contact">
              Let&apos;s Work
            </Link>
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
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'is-active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </Motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
