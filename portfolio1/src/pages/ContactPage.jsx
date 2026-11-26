import { motion as Motion } from 'motion/react'
import { Contact } from '../components'

export function ContactPage({
  contactLinks,
  inquiryTopics,
  freelanceTracks,
  brandProfile,
  onCopyContact,
  copiedValue,
}) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="subpage-shell"
    >
      <div className="subpage-banner">
        <span className="section-eyebrow">04 / COLLABORATION &amp; FREELANCE</span>
        <h1 className="subpage-headline">
          Let&apos;s Work <span className="hero-headline-dual-1">Together</span> &amp;{' '}
          <span className="hero-headline-dual-2">Build</span>
        </h1>
      </div>

      <Contact
        contactLinks={contactLinks}
        inquiryTopics={inquiryTopics}
        freelanceTracks={freelanceTracks}
        brandProfile={brandProfile}
        onCopyContact={onCopyContact}
        copiedValue={copiedValue}
      />
    </Motion.div>
  )
}
