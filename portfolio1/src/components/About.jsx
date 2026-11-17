import { Activity, Cpu, Compass, GraduationCap } from 'lucide-react'
import { motion as Motion } from 'motion/react'
import { SpotlightCard } from './SpotlightCard'
import { SplitText } from './TextAnimations'

const HIGHLIGHT_ICONS = [Cpu, Compass, Activity]

export function About({ aboutHighlights, education }) {
  return (
    <section className="section-block" id="about">
      <div className="section-heading">
        <span className="section-eyebrow">Engineering Philosophy</span>
        <h2 className="section-title">
          <SplitText text="Bridging Hardware Precision & Software Architecture" mode="words" />
        </h2>
        <p className="section-subtitle">
          From bare-metal microcontroller registers and circuit design to optical fiber infrastructure and full-stack software, I build dependable systems engineered for real-world deployment.
        </p>
      </div>

      {/* Editorial Environmental Showcase (Ref 2 + Ref 3 asymmetric split) */}
      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <SpotlightCard className="about-lab-showcase" beam>
          <div className="about-lab-grid">
            <div className="about-lab-media">
              <picture>
                <source srcSet="/images/mufassir-lab.webp" type="image/webp" />
                <img
                  src="/images/mufassir-lab.jpg"
                  alt="Mohamed Mufassir at hardware R&D workbench with autonomous robotics prototype and oscilloscope"
                  loading="lazy"
                />
              </picture>
              <div className="about-lab-badge">
                <span className="status-pulse-dot" aria-hidden="true" />
                <span>TechTitude Labs • Hardware R&amp;D Bench</span>
              </div>
            </div>

            <div className="about-lab-story">
              <span className="card-pill">Systems Approach</span>
              <h3>From Register-Level Silicon to Cloud &amp; Fiber Networks</h3>
              <p>
                Whether writing sub-millisecond AVR assembly interrupt routines, tuning closed-loop PID motor controllers on Raspberry Pi, or coordinating optical fiber route rollouts, my focus stays grounded in reliability, measurable telemetry, and clean system architecture.
              </p>

              <div className="about-lab-metrics">
                <div>
                  <strong>Bare-Metal</strong>
                  <span>ATmega &amp; ESP32 Firmware</span>
                </div>
                <div>
                  <strong>Closed-Loop</strong>
                  <span>PID &amp; FSM Autonomy</span>
                </div>
                <div>
                  <strong>Full-Stack</strong>
                  <span>React, Electron &amp; Spring</span>
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </Motion.div>

      <div className="about-bento-grid">
        {aboutHighlights.map((item, index) => {
          const Icon = HIGHLIGHT_ICONS[index] || Cpu
          return (
            <Motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <SpotlightCard as="article" className={`about-card highlight-${index + 1}`}>
                <div className="about-card-icon" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h3 className="about-card-title">{item.title}</h3>
                <p className="about-card-desc">{item.description}</p>
              </SpotlightCard>
            </Motion.div>
          )
        })}

        <SpotlightCard as="article" className="education-bento-card">
          <div className="education-badge-row">
            <span className="card-pill">
              <GraduationCap size={13} className="mr-1.5" aria-hidden="true" />
              Academic Degree
            </span>
            <span className="edu-period">{education.period}</span>
          </div>
          <h3 className="edu-degree">{education.degree}</h3>
          <p className="edu-school">{education.school}</p>
          <div className="edu-footer-tags">
            <span className="edu-tag">Hardware-Software Systems</span>
            <span className="edu-tag">Digital Signal &amp; Control</span>
            <span className="edu-tag">Embedded Microcontrollers</span>
            <span className="edu-tag">Optical Telecommunications</span>
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}
