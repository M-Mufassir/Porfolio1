import { useState } from 'react'

export function Header({ brandProfile, navigationItems, resumeLink }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top" aria-label="Go to top">
        <span className="brand-mark">{brandProfile.monogram}</span>
        <span className="brand-copy">
          <strong>{brandProfile.name}</strong>
          <small>{brandProfile.title}</small>
        </span>
      </a>

      <button
        className={`mobile-menu-button ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation menu"
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`site-nav ${mobileMenuOpen ? 'open' : ''}`} aria-label="Primary">
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href} onClick={handleNavClick}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href={resumeLink.href} download>
        Resume
      </a>
    </header>
  )
}
