import { useState } from 'react'
import { motion as Motion } from 'motion/react'
import { ArrowUpRight, Check, Copy, MapPin, Send } from 'lucide-react'
import { SplitText } from './TextAnimations'

export function Contact({ contactLinks, inquiryTopics, brandProfile, onCopyEmail, copied }) {
  const emailContact = contactLinks.find((c) => c.label.toLowerCase() === 'email')
  const [name, setName] = useState('')
  const [senderEmail, setSenderEmail] = useState('')
  const [selectedTopic, setSelectedTopic] = useState(inquiryTopics[0] || 'Embedded / Firmware')
  const [message, setMessage] = useState('')

  const handleInquirySubmit = (e) => {
    e.preventDefault()
    if (!emailContact) return
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${selectedTopic} — ${name || 'Collaboration'}`)
    const body = encodeURIComponent(
      `Hi Mufassir,\n\nName: ${name || 'Not provided'}\nEmail: ${senderEmail || 'Not provided'}\nArea: ${selectedTopic}\n\n${message || 'Interested in discussing an engineering collaboration.'}`
    )
    window.location.href = `mailto:${emailContact.value}?subject=${subject}&body=${body}`
  }

  return (
    <section className="section-open" id="contact">
      <div className="contact-split-layout">
        {/* Left Side: Open Editorial Call + Direct Channel Links (Zero Cards!) */}
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.48 }}
          className="contact-left-col"
        >
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="contact-big-title">
            <SplitText text="Let's engineer something extraordinary." mode="words" />
          </h2>
          <p className="contact-lead-copy">
            Open for embedded firmware R&amp;D, autonomous robotics, optical telecom projects, and software engineering collaborations.
          </p>

          <div className="contact-direct-list">
            {contactLinks.map((item) => {
              const isExternal = /^https?:/i.test(item.href)
              const isEmail = item.label.toLowerCase() === 'email'
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
                    {isEmail && (
                      <button
                        type="button"
                        onClick={() => onCopyEmail(item.value)}
                        className="contact-copy-inline"
                        aria-label="Copy email address"
                      >
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                        <span>{copied ? 'Copied' : 'Copy'}</span>
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

        {/* Right Side: Unboxed Underline-Input Inquiry Form (Ref 1 Kawsar style!) */}
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
            <span className="topic-label">Interested in</span>
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
            <span>Project or Role Brief</span>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about the system, hardware stack, or timeline..."
            />
          </label>

          <div className="form-submit-row">
            <button type="submit" className="btn-solid-primary">
              <Send size={15} aria-hidden="true" />
              <span>Send Inquiry</span>
            </button>
          </div>
        </Motion.form>
      </div>
    </section>
  )
}
