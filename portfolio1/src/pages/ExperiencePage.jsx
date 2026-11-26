import { motion as Motion } from 'motion/react'
import { Experience, PageSEO } from '../components'

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
      <PageSEO
        title="Experience & Technical CV | Mohamed Mufassir — TechTitude Labs"
        description="Career ledger of Mohamed Mufassir: Fiber Project Management Intern, Co-Founder & Tech Lead at TechTitude Labs, Software Engineering Intern at ZILLIT Technologies, and Freelance Developer."
        path="/experience"
        keywords="Mohamed Mufassir experience, TechTitude Labs Co-Founder, ZILLIT Technologies, Fiber Project Management, Technical CV"
      />
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
