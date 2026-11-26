import { ArrowUp } from 'lucide-react'

export function Footer({ brandProfile }) {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">{brandProfile.monogram}</span>
          <div>
            <strong>{brandProfile.name}</strong>
            <p className="footer-tagline">{brandProfile.tagline}</p>
          </div>
        </div>

        <p className="footer-copy">
          © {currentYear} {brandProfile.name}
        </p>

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
    </footer>
  )
}
