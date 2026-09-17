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

        <div className="footer-center">
          <p className="footer-copy">
            © {currentYear} {brandProfile.name}. Built with React, Vite & Modern Web Standards.
          </p>
        </div>

        <div className="footer-actions">
          <button
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            type="button"
          >
            <span>Back to top</span>
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
