import { Link } from 'react-router-dom'
import { motion as Motion } from 'motion/react'
import { ArrowUpRight, Check, Copy, Mail, Phone } from 'lucide-react'
import { SplitText } from './TextAnimations'

export function WorkTogether({ freelanceTracks, contactLinks, onCopyContact, copiedValue }) {
  const emailItem = contactLinks.find((c) => c.label.toLowerCase() === 'email')
  const phoneItems = contactLinks.filter((c) => c.label.toLowerCase().includes('phone'))

  return (
    <section className="section-open work-together-section" id="work-together">
      <div className="work-together-grid">
        {/* Left Column: Open Freelance Invitation & Direct Contact Info */}
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="work-together-left"
        >
          <span className="section-eyebrow">
            Freelance &amp; Engineering Services
          </span>
          <h2 className="work-together-title">
            <SplitText text="Let's Work Together." mode="words" />
          </h2>
          <p className="work-together-lead">
            Available for freelance builds, custom hardware prototypes, and engineering collaborations across{' '}
            <strong>Software</strong>, <strong>IoT</strong>, <strong>Embedded Systems</strong>, and{' '}
            <strong>Robotics</strong>.
          </p>

          {/* Direct Freelance Contact Lines (Phones + Gmail) */}
          <div className="wt-direct-contacts">
            {phoneItems.map((phone) => {
              const isCopied = copiedValue === (phone.rawValue || phone.value)
              return (
                <div key={phone.label} className="wt-contact-line">
                  <a href={phone.href} className="wt-contact-anchor">
                    <Phone size={15} className="wt-icon" aria-hidden="true" />
                    <span>{phone.value}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => onCopyContact(phone.rawValue || phone.value, 'Phone number')}
                    className="wt-copy-btn"
                    aria-label={`Copy ${phone.value}`}
                  >
                    {isCopied ? <Check size={13} /> : <Copy size={13} />}
                    <span>{isCopied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              )
            })}

            {emailItem && (
              <div className="wt-contact-line">
                <a href={emailItem.href} className="wt-contact-anchor">
                  <Mail size={15} className="wt-icon coral" aria-hidden="true" />
                  <span>{emailItem.value}</span>
                </a>
                <button
                  type="button"
                  onClick={() => onCopyContact(emailItem.value, 'Email')}
                  className="wt-copy-btn"
                  aria-label={`Copy ${emailItem.value}`}
                >
                  {copiedValue === emailItem.value ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copiedValue === emailItem.value ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            )}
          </div>

          <div className="wt-actions-row">
            <Link to="/contact" className="btn-dual-gradient">
              <span>Start a Project Inquiry</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link to="/freelance" className="btn-outline-clean">
              <span>Freelance Scope &amp; FAQ</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Motion.div>

        {/* Right Column: Hairline-Divided 4 Freelance Focus Pillars */}
        <div className="wt-tracks-list">
          {freelanceTracks.map((track, idx) => (
            <Motion.div
              key={track.num}
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              <Link
                to={`/contact?topic=${encodeURIComponent(track.topic)}`}
                className="wt-track-row"
              >
                <span className="wt-track-num">{track.num}</span>
                <div className="wt-track-copy">
                  <h3>{track.title}</h3>
                  <p>{track.description}</p>
                </div>
                <span className="index-arrow-circle" aria-hidden="true">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
