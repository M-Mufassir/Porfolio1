import { motion as Motion } from 'motion/react'
import { SplitText } from './TextAnimations'

/**
 * Unboxed hairline specification matrix replacing boxy skill card grids.
 */
export function Skills({ skillSections, interestAreas }) {
  return (
    <section className="section-open" id="skills">
      <div className="section-heading">
        <span className="section-eyebrow">Technical Matrix</span>
        <h2 className="section-title">
          <SplitText text="Capabilities & Engineering Stack" mode="words" />
        </h2>
      </div>

      <div className="skills-ledger">
        {skillSections.map((section, idx) => (
          <Motion.div
            key={section.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="skills-ledger-row"
          >
            <div className="ledger-left">
              <span className="ledger-num">0{idx + 1}</span>
              <h3>{section.title}</h3>
            </div>

            <div className="ledger-right">
              {section.items.map((item) => (
                <span key={item} className="ledger-token">
                  {item}
                </span>
              ))}
            </div>
          </Motion.div>
        ))}

        <div className="skills-ledger-row is-focus-row">
          <div className="ledger-left">
            <span className="ledger-num">R&amp;D</span>
            <h3>Focus Domains</h3>
          </div>
          <div className="ledger-right">
            {interestAreas.map((area) => (
              <span key={area} className="ledger-focus-item">
                <span className="focus-dot" aria-hidden="true" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
