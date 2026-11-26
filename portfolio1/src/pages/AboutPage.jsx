import { motion as Motion } from 'motion/react'
import { About, ProcessTimeline, Skills } from '../components'

export function AboutPage({
  aboutHighlights,
  inlineMetrics,
  education,
  skillSections,
  interestAreas,
  engineeringProcess,
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
        <span className="section-eyebrow">01 / PROFILE &amp; DISCIPLINES</span>
        <h1 className="subpage-headline">
          Systems Architecture, <span className="hero-headline-dual-1">Firmware</span> &amp;{' '}
          <span className="hero-headline-dual-2">Control</span>
        </h1>
      </div>

      <About
        aboutHighlights={aboutHighlights}
        inlineMetrics={inlineMetrics}
        education={education}
      />

      <Skills skillSections={skillSections} interestAreas={interestAreas} />

      <ProcessTimeline engineeringProcess={engineeringProcess} />
    </Motion.div>
  )
}
