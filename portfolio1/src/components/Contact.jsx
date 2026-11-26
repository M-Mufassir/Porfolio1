import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion as Motion } from 'motion/react'
import { ArrowUpRight, Check, Copy, MapPin, MessageCircle, Send } from 'lucide-react'
import { SplitText } from './TextAnimations'

export function Contact({
  contactLinks,
  inquiryTopics,
  freelanceTracks,
  brandProfile,
  onCopyContact,
  copiedValue,
}) {
  const [searchParams] = useSearchParams()
  const initialTopic = searchParams.get('topic')
  const matchedTopic =
    inquiryTopics.find((t) => t.toLowerCase() === (initialTopic || '').toLowerCase()) ||
    inquiryTopics[0] ||
    'Software'

  const emailContact = contactLinks.find((c) => c.label.toLowerCase() === 'email')
  const [name, setName] = useState('')
  const [senderEmail, setSenderEmail] = useState('')
  const [selectedTopic, setSelectedTopic] = useState(matchedTopic)
  const [message, setMessage] = useState('')

  const handleInquirySubmit = (e) => {
    e.preventDefault()
    if (!emailContact) return
    const subject = encodeURIComponent(`[Freelance / Project] ${selectedTopic} — ${name || 'Inquiry'}`)
    const body = encodeURIComponent(
      `Hi Mufassir,\n\nName: ${name || 'Not provided'}\nEmail: ${senderEmail || 'Not provided'}\nFocus Area: ${selectedTopic}\n\n${message || 'Interested in collaborating on a project.'}`
    )
    window.location.href = `mailto:${emailContact.value}?subject=${subject}&body=${body}`
  }

  return (
    <section className="section-open" id="contact">
      <div className="contact-split-layout">
        {/* Left Side: Direct Channels (Gmail, Both Phone/WhatsApp Lines, LinkedIn, GitHub) */}
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.48 }}
          className="contact-left-col"
        >
          <span className="section-eyebrow">Let&apos;s Work Together</span>
          <h2 className="contact-big-title">
            <SplitText text="Let's build your next system." mode="words" />
          </h2>
          <p className="contact-lead-copy">
            Available for freelance builds, technical consulting, and R&amp;D collaborations specializing in{' '}
            <strong>Software</strong>, <strong>IoT</strong>, <strong>Embedded Systems</strong>, and{' '}
            <strong>Robotics</strong>.
          </p>

          <div className="contact-direct-list">
            {contactLinks.map((item) => {
              const isExternal = /^https?:/i.test(item.href)
              const copyTarget = item.rawValue || item.value
              const isCopied = copiedValue === copyTarget
              return (
                <div key={item.label} className="contact-direct-row">
                  <span className="contact-direct-label">{item.label}</span>
                  <div className="contact-direct-actions">
                    <a
                      href={item.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer noopener' : undefined}
                      className="contact-direct-link"
                    >
                      <span>{item.value}</span>
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                    {item.whatsapp && (
                      <a
                        href={item.whatsapp}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="contact-copy-inline wa"
                        aria-label={`Chat on WhatsApp ${item.value}`}
                        title="WhatsApp"
                      >
                        <MessageCircle size={13} />
                        <span>WA</span>
                      </a>
                    )}
                    {item.copyable && (
                      <button
                        type="button"
                        onClick={() =>
                          onCopyContact(
                            copyTarget,
                            item.label.toLowerCase().includes('phone') ? 'Phone number' : 'Email'
                          )
                        }
                        className="contact-copy-inline"
                        aria-label={`Copy ${item.value}`}
                      >
                        {isCopied ? <Check size={14} /> : <Copy size={14} />}
                        <span>{isCopied ? 'Copied' : 'Copy'}</span>
                      </button>
                    )}
                  </div>
                </div>
              )
            })}

            <div className="contact-direct-row">
              <span className="contact-direct-label">Base</span>
              <span className="contact-base-loc">
                <MapPin size={14} aria-hidden="true" />
                {brandProfile.location}
              </span>
            </div>
          </div>
        </Motion.div>

        {/* Right Side: Unboxed Underline-Input Freelance Inquiry Form */}
        <Motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.48, delay: 0.08 }}
          onSubmit={handleInquirySubmit}
          className="contact-underline-form"
        >
          <div className="form-row-two">
            <label className="underline-field">
              <span>Full Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </label>

            <label className="underline-field">
              <span>Your Email</span>
              <input
                type="email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="you@company.com"
              />
            </label>
          </div>

          <div className="topic-selector-block">
            <span className="topic-label">Freelance Focus Area</span>
            <div className="topic-chips-wrap">
              {inquiryTopics.map((topic) => {
                const active = selectedTopic === topic
                return (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSelectedTopic(topic)}
                    className={`topic-chip ${active ? 'is-active' : ''}`}
                  >
                    {topic}
                  </button>
                )
              })}
            </div>
          </div>

          <label className="underline-field">
            <span>Project Brief or Inquiry</span>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe the software app, IoT device, embedded firmware, or robotics build..."
            />
          </label>

          <div className="form-submit-row">
            <button type="submit" className="btn-dual-gradient">
              <Send size={15} aria-hidden="true" />
              <span>Send Inquiry via Email</span>
            </button>
          </div>
        </Motion.form>
      </div>

      {/* Freelance Focus Scope Summary Strip */}
      {freelanceTracks?.length > 0 && (
        <div className="contact-scope-strip">
          {freelanceTracks.map((track) => (
            <button
              key={track.num}
              type="button"
              onClick={() => setSelectedTopic(track.topic)}
              className={`contact-scope-item ${selectedTopic === track.topic ? 'is-selected' : ''}`}
            >
              <span className="scope-num">{track.num}</span>
              <strong>{track.title}</strong>
              <p>{track.description}</p>
            </button>
          ))}
        </div>
      )}
    </section>
  )
}
