import { Bot, CircuitBoard, Code2, Cpu, Radio, Wifi } from 'lucide-react'
import { motion as Motion } from 'motion/react'
import { SpotlightCard } from './SpotlightCard'
import { SplitText } from './TextAnimations'

const CAPABILITY_ICONS = {
  cpu: Cpu,
  bot: Bot,
  radio: Radio,
  wifi: Wifi,
  circuit: CircuitBoard,
  code: Code2,
}

export function Skills({ coreCapabilities, skillSections, interestAreas }) {
  return (
    <section className="section-block" id="skills">
      <div className="section-heading">
        <span className="section-eyebrow">Capabilities &amp; Toolchain</span>
        <h2 className="section-title">
          <SplitText text="Specialized Disciplines & Engineering Toolkit" mode="words" />
        </h2>
        <p className="section-subtitle">
          A multidisciplinary technical foundation spanning bare-metal microcontrollers, closed-loop control dynamics, optical telecommunications, and full-stack software.
        </p>
      </div>

      {/* Ref 3 2-Column Split: Core Capabilities (Left) vs Tools & Stack Matrix (Right) */}
      <div className="capabilities-split-grid">
        <div className="capabilities-column">
          <div className="column-subhead">
            <span className="card-pill">Core Capabilities</span>
          </div>
          <div className="capabilities-list-grid">
            {coreCapabilities.map((cap, idx) => {
              const Icon = CAPABILITY_ICONS[cap.icon] || Cpu
              return (
                <Motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <SpotlightCard className="capability-item-card">
                    <div className="capability-icon" aria-hidden="true">
                      <Icon size={18} />
                    </div>
                    <h3 className="capability-title">{cap.title}</h3>
                    <p className="capability-desc">{cap.description}</p>
                  </SpotlightCard>
                </Motion.div>
              )
            })}
          </div>
        </div>

        <div className="toolchain-column">
          <div className="column-subhead">
            <span className="card-pill">Tools &amp; Technologies</span>
          </div>
          <div className="skills-grid-compact">
            {skillSections.map((section, idx) => (
              <Motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <SpotlightCard as="article" className="skill-card">
                  <div className="skill-card-header">
                    <span className="skill-category-num">0{idx + 1}</span>
                    <h3 className="skill-card-title">{section.title}</h3>
                  </div>
                  <div className="chip-row">
                    {section.items.map((item) => (
                      <span key={item} className="skill-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Engineering Focus & Interest Areas */}
      <SpotlightCard as="article" className="interests-panel">
        <div className="interests-header">
          <span className="card-pill">Primary Engineering Focus</span>
          <span className="interests-caption">Core R&amp;D and industry specialization domains</span>
        </div>
        <div className="chip-row">
          {interestAreas.map((area) => (
            <span key={area} className="interest-chip">
              <span className="interest-pulse" aria-hidden="true" />
              <span>{area}</span>
            </span>
          ))}
        </div>
      </SpotlightCard>
    </section>
  )
}
