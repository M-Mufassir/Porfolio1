import { Activity, CircuitBoard, Compass, Rocket, Terminal } from 'lucide-react'
import { motion as Motion } from 'motion/react'
import { SpotlightCard } from './SpotlightCard'
import { SplitText } from './TextAnimations'

const PROCESS_ICONS = {
  compass: Compass,
  circuit: CircuitBoard,
  terminal: Terminal,
  activity: Activity,
  rocket: Rocket,
}

export function ProcessTimeline({ engineeringProcess }) {
  return (
    <section className="section-block" id="process">
      <div className="section-heading">
        <span className="section-eyebrow">Engineering Workflow</span>
        <h2 className="section-title">
          <SplitText text="My Systems Engineering Process" mode="words" />
        </h2>
        <p className="section-subtitle">
          A deterministic 5-stage methodology taking hardware prototypes and software platforms from architecture spec to field-tested reliability.
        </p>
      </div>

      <div className="process-pipeline-wrap">
        {/* Horizontal Connecting Line (Desktop) */}
        <Motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="process-connector-line"
          aria-hidden="true"
        />

        <div className="process-steps-grid">
          {engineeringProcess.map((item, idx) => {
            const Icon = PROCESS_ICONS[item.icon] || Compass
            return (
              <Motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <SpotlightCard className="process-step-card">
                  <div className="process-step-top">
                    <span className="process-step-num">{item.step}</span>
                    <span className="process-step-icon" aria-hidden="true">
                      <Icon size={17} />
                    </span>
                  </div>
                  <h3 className="process-step-title">{item.title}</h3>
                  <p className="process-step-desc">{item.description}</p>
                </SpotlightCard>
              </Motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
