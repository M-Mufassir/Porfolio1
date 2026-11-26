import { motion as Motion } from 'motion/react'
import { About, PageSEO, ProcessTimeline, Skills } from '../components'

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
      <PageSEO
        title="About & Engineering Stack | Mohamed Mufassir — SLIIT & TechTitude Labs"
        description="Technical philosophy, embedded C & AVR Assembly skills, closed-loop PID robotics, optical telecom infrastructure, and 5-step engineering workflow of Mohamed Mufassir."
        path="/about"
        keywords="Mohamed Mufassir skills, AVR Assembly, Embedded C, PID Control, Optical Fiber, SLIIT Computer Systems Engineering"
      />
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
