import { motion as Motion } from 'motion/react'
import { Experience } from '../components'

export function ExperiencePage({
  experiences,
  experience,
  freelanceExperience,
  resumeLink,
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
        <span className="section-eyebrow">03 / CAREER LEDGER</span>
        <h1 className="subpage-headline">
          Venture Leadership &amp; <span className="hero-headline-dual-1">Field Ops</span>
        </h1>
      </div>

      <Experience
        experiences={experiences}
        experience={experience}
        freelanceExperience={freelanceExperience}
        resumeLink={resumeLink}
      />
    </Motion.div>
  )
}
