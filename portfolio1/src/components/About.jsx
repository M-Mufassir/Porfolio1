import { motion as Motion } from 'motion/react'
import { Activity, Compass, Cpu, GraduationCap } from 'lucide-react'
import { NumberTicker, SplitText } from './TextAnimations'

const RAIL_ICONS = [Cpu, Compass, Activity]

export function About({ aboutHighlights, inlineMetrics, education }) {
  return (
    <section className="section-open" id="about">
      <div className="about-open-grid">
        {/* Left Column: Open Vertical Engineering Rail (Ref 2 Jensen Omega style — NO boxes!) */}
        <div className="about-rail-col">
          <div className="about-rail-line" aria-hidden="true" />
          <div className="about-rail-items">
            {aboutHighlights.map((item, index) => {
              const Icon = RAIL_ICONS[index] || Cpu
              return (
                <Motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="about-rail-row"
                >
                  <div className="rail-node-dot" aria-hidden="true">
                    <span />
                  </div>
                  <div className="rail-icon-wrap" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                  <div className="rail-copy">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </Motion.div>
              )
            })}
          </div>
        </div>

        {/* Right Column: Open Editorial Story & Inline Hairline Metrics */}
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="about-story-col"
        >
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-title">
            <SplitText text="Hardware Rigor Meets Modern Systems Design" mode="words" />
          </h2>
          <p className="about-editorial-text">
            I engineer deterministic microcontroller firmware, closed-loop robotic control systems, and scalable full-stack software. From register-level AVR assembly and Raspberry Pi PID tuning to optical fiber infrastructure coordination and TechTitude Labs hardware R&amp;D, my focus stays grounded in measurable real-world reliability.
          </p>

          {/* Clean Inline Education Metadata (No Box!) */}
          <div className="about-edu-inline">
            <GraduationCap size={18} className="edu-inline-icon" aria-hidden="true" />
            <div>
              <strong>{education.degree}</strong>
              <span>
                {education.school} • {education.period}
              </span>
            </div>
          </div>

          {/* 3 Open Inline Metrics (Ref 2 + Ref 3) */}
          <div className="inline-metrics-strip">
            {inlineMetrics.map((metric) => (
              <div key={metric.label} className="inline-metric-item">
                <div className="inline-metric-val">
                  <NumberTicker value={metric.value} />
                  <span className="inline-metric-suffix">{metric.suffix}</span>
                </div>
                <span className="inline-metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  )
}
