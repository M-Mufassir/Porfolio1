import { ArrowUpRight, Check, Copy, Mail, Sparkles } from 'lucide-react'
import { motion as Motion } from 'motion/react'
import { SpotlightCard } from './SpotlightCard'
import { SplitText } from './TextAnimations'

export function Contact({ contactLinks, onCopyEmail, copied }) {
  const emailContact = contactLinks.find((c) => c.label.toLowerCase() === 'email')

  return (
    <section className="section-block" id="contact">
      <div className="section-heading">
        <span className="section-eyebrow">Get In Touch</span>
        <h2 className="section-title">
          <SplitText text="Let's Build Something Exceptional Together" mode="words" />
        </h2>
        <p className="section-subtitle">
          Open to engineering roles, embedded systems R&amp;D, telecom infrastructure, and technical collaborations. Reach out directly or connect through professional networks.
        </p>
      </div>

      {/* Ref 3 Metallic Sheen CTA Banner */}
      <Motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="metallic-cta-banner"
      >
        <div className="metallic-banner-shine" aria-hidden="true" />
        <div className="metallic-banner-left">
          <span className="metallic-kicker">
            <Sparkles size={13} aria-hidden="true" />
            AVAILABLE FOR COLLABORATION
          </span>
          <h3 className="metallic-banner-headline">
            LET&apos;S ENGINEER SOMETHING EXTRAORDINARY
          </h3>
        </div>

        <div className="metallic-banner-right">
          <p>
            From bare-metal prototypes and autonomous vehicles to optical networks and modern web software.
          </p>
          <div className="metallic-banner-actions">
            {emailContact && (
              <a className="button metallic-cta-btn" href={emailContact.href}>
                <Mail size={16} aria-hidden="true" />
                <span>Start a Conversation</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            )}
            {emailContact && (
              <button
                type="button"
                className="button ghost-btn"
                onClick={() => onCopyEmail(emailContact.value)}
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                <span>{copied ? 'Email Copied' : 'Copy Email'}</span>
              </button>
            )}
          </div>
        </div>
      </Motion.div>

      <div className="contact-grid">
        {contactLinks.map((contact, idx) => {
          const isExternal = /^https?:/i.test(contact.href)
          const isEmail = contact.label.toLowerCase() === 'email'

          return (
            <Motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <SpotlightCard as="article" className="contact-card">
                <div className="contact-card-header">
                  <span className="card-pill">{contact.label}</span>
                  {isEmail && (
                    <button
                      className="copy-chip-btn"
                      onClick={() => onCopyEmail(contact.value)}
                      type="button"
                      title="Copy email address"
                    >
                      {copied ? <Check size={13} /> : <Copy size={13} />}
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
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </SpotlightCard>
            </Motion.div>
          )
        })}
      </div>
    </section>
  )
}
