import { useState } from 'react'

export function Contact({ contactLinks }) {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section className="section-block" id="contact">
      <div className="section-heading">
        <span className="section-eyebrow">Contact</span>
        <h2 className="section-title">Let's Connect & Collaborate</h2>
        <p className="section-subtitle">
          Open to internships, graduate engineering roles, and hardware/software collaborations. Feel free to reach out via email or connect on professional platforms.
        </p>
      </div>

      {/* Copy Toast Alert */}
      {copied && (
        <div className="toast-notification" role="status" aria-live="polite">
          <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>Email copied to clipboard!</span>
        </div>
      )}

      <div className="contact-grid">
        {contactLinks.map((contact) => {
          const isExternal = /^https?:/i.test(contact.href)
          const isEmail = contact.label.toLowerCase() === 'email'

          return (
            <article key={contact.label} className="contact-card">
              <div className="contact-card-header">
                <span className="card-pill">{contact.label}</span>
                {isEmail && (
                  <button
                    className="copy-chip-btn"
                    onClick={() => handleCopyEmail(contact.value)}
                    type="button"
                    title="Copy email address"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                    </svg>
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                )}
              </div>

              <h3 className="contact-value">{contact.value}</h3>
              <p className="contact-note">{contact.note}</p>

              <a
                className="contact-action-link"
                href={contact.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer noopener' : undefined}
              >
                <span>{contact.action}</span>
                <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}
