import { motion as Motion } from 'motion/react'
import { Activity, CircuitBoard, Compass, Rocket, Terminal } from 'lucide-react'
import { SplitText } from './TextAnimations'

const STEP_ICONS = [Compass, CircuitBoard, Terminal, Activity, Rocket]

/**
 * Open architectural 5-column hairline grid inspired by Ref 1 ("From Idea to Interface").
 */
export function ProcessTimeline({ engineeringProcess }) {
  return (
    <section className="section-open" id="process">
      <div className="section-heading">
        <span className="section-eyebrow">Workflow</span>
        <h2 className="section-title">
          <SplitText text="From Architecture to Deployment" mode="words" />
        </h2>
        <p className="section-subtitle">
          A 5-phase engineering methodology bridging hardware schematics, bare-metal code, and real-world telemetry.
        </p>
      </div>

      <div className="process-hairline-grid">
        {engineeringProcess.map((item, idx) => {
          const Icon = STEP_ICONS[idx] || Compass
          return (
            <Motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, delay: idx * 0.07 }}
              className="process-hairline-cell"
            >
              <div className="process-cell-head">
                <span className="process-cell-icon" aria-hidden="true">
                  <Icon size={18} />
                </span>
                <span className="process-cell-num">{item.step}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Motion.div>
          )
        })}
      </div>
    </section>
  )
}
