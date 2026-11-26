import { motion as Motion } from 'motion/react'
import { Download } from 'lucide-react'
import { SplitText } from './TextAnimations'

/**
 * Clean 2-column open editorial experience ledger + minimal inline CV strip (ZERO boxy cards!).
 */
export function Experience({ experiences, experience, freelanceExperience, resumeLink }) {
  const experienceList = experiences || [experience, freelanceExperience].filter(Boolean)

  return (
    <>
      <section className="section-open" id="experience">
        <div className="section-heading">
          <span className="section-eyebrow">Career &amp; Venture</span>
          <h2 className="section-title">
            <SplitText text="Experience & Leadership" mode="words" />
          </h2>
        </div>

        <div className="exp-ledger">
          {experienceList.map((item, index) => (
            <Motion.article
              key={`${item.role}-${item.period}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.42, delay: index * 0.06 }}
              className="exp-ledger-row"
            >
              <div className="exp-meta-col">
                <span className="exp-period">{item.period}</span>
                <strong className="exp-company">{item.company}</strong>
                <span className="exp-cat">{item.category}</span>
              </div>

              <div className="exp-detail-col">
                <h3 className="exp-role">{item.role}</h3>
                <p className="exp-summary">{item.summary}</p>
                {item.points && item.points.length > 0 && (
                  <ul className="exp-points">
                    {item.points.map((point) => (
                      <li key={point}>
                        <span className="exp-bullet" aria-hidden="true">—</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Motion.article>
          ))}
        </div>

        {/* Inline Hairline Technical CV Strip */}
        <div className="cv-inline-strip" id="resume">
          <div className="cv-inline-copy">
            <span>CURRICULUM VITAE</span>
            <strong>Full engineering specifications, SLIIT coursework &amp; project history.</strong>
          </div>
          <a className="btn-outline-clean" href={resumeLink.href} download>
            <Download size={16} aria-hidden="true" />
            <span>{resumeLink.label}</span>
          </a>
        </div>
      </section>
    </>
  )
}
