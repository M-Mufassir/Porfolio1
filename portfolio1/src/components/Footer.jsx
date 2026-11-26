import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'

export function Footer({ brandProfile, navigationItems }) {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" aria-label="MUFASSIR.dev - Home">
            <picture className="footer-logo-picture">
              <source srcSet="/images/mufassir-logo.webp" type="image/webp" />
              <img
                src="/images/mufassir-logo.png"
                alt="MUFASSIR.dev"
                className="footer-logo-img"
                loading="lazy"
              />
            </picture>
          </Link>
          <p className="footer-tagline">{brandProfile.tagline}</p>
        </div>

        <nav className="footer-routes" aria-label="Footer page links">
          {navigationItems.map((item) => (
            <Link key={item.to} to={item.to} className="footer-route-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer-right">
          <p className="footer-copy">© {currentYear} {brandProfile.name}</p>
          <button
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            type="button"
          >
            <span>Top</span>
            <ArrowUp size={15} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
