import { Link } from 'react-router-dom'
import { motion as Motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { PageSEO, WorkTogether } from '../components'

const BASE_SITE_URL = 'https://www.mohamedmufassir.me'

export function FreelancePage({
  freelanceTracks,
  freelanceFaqs,
  contactLinks,
  projectCards,
  onCopyContact,
  copiedValue,
}) {
  const siteUrl = (import.meta.env.VITE_SITE_URL || BASE_SITE_URL).replace(/\/+$/, '')

  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Mohamed Mufassir — Freelance Software, IoT, Embedded Systems & Robotics Engineering',
        url: `${siteUrl}/freelance`,
        provider: {
          '@type': 'Person',
          '@id': `${siteUrl}/#person`,
          name: 'Mohamed Mufassir',
        },
        areaServed: ['Sri Lanka', 'Remote Worldwide'],
        serviceType: freelanceTracks.map((t) => t.title),
      },
      {
        '@type': 'FAQPage',
        mainEntity: freelanceFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  }

  return (
    <Motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="subpage-shell"
    >
      <PageSEO
        title="Freelance Software, IoT, Embedded & Robotics Developer | Mohamed Mufassir"
        description="Hire Mohamed Mufassir for freelance Software Engineering (React, Electron.js, Spring Boot), IoT (ESP32), Embedded Firmware (C/AVR), and Autonomous Robotics prototypes in Sri Lanka & remote."
        path="/freelance"
        keywords="freelance embedded engineer Sri Lanka, freelance IoT developer, freelance robotics prototyper, React Electron Spring Boot freelancer, hire Mohamed Mufassir"
        jsonLd={schemaJsonLd}
      />

      <div className="subpage-banner">
        <span className="section-eyebrow">FREELANCE SERVICES &amp; R&amp;D PROTOTYPING</span>
        <h1 className="subpage-headline">
          Software, <span className="hero-headline-dual-1">IoT</span>, Embedded &amp;{' '}
          <span className="hero-headline-dual-2">Robotics</span>
        </h1>
        <p className="detail-lead-copy">
          Available for commercial software applications, edge ESP32 IoT devices, custom firmware
          and PCB prototyping, and closed-loop robotics systems for startups and businesses in Sri
          Lanka and remotely worldwide.
        </p>
      </div>

      <section className="section-open freelance-services-section">
        <div className="learnings-ledger">
          {freelanceTracks.map((track) => {
            const proofProjects = (track.relatedSlugs || [])
              .map((slug) => projectCards.find((p) => p.slug === slug))
              .filter(Boolean)

            return (
              <article key={track.num} className="learning-entry">
                <div className="learning-entry-head">
                  <span className="wt-track-num">{track.num}</span>
                  <div>
                    <span className="learning-focus-tag">{track.topic} Track</span>
                    <h2>{track.title}</h2>
                  </div>
                </div>

                <p className="learning-summary">{track.description}</p>

                {track.deliverables && (
                  <ul className="modal-points-list learning-takeaways">
                    {track.deliverables.map((item) => (
                      <li key={item} className="modal-point-item">
                        <span className="point-bullet" aria-hidden="true">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {proofProjects.length > 0 && (
                  <div className="learning-project-links">
                    <span className="learning-links-label">Proof of Work Case Studies:</span>
                    <div className="learning-link-row">
                      {proofProjects.map((proj) => (
                        <Link
                          key={proj.slug}
                          to={`/projects/${proj.slug}`}
                          className="btn-outline-clean detail-chip-link"
                        >
                          <span>{proj.title}</span>
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        <div className="freelance-faq-block">
          <div className="detail-related-head">
            <span className="section-eyebrow">COLLABORATION FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-ledger">
            {freelanceFaqs.map((faq) => (
              <div key={faq.question} className="faq-row">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkTogether
        freelanceTracks={freelanceTracks}
        contactLinks={contactLinks}
        onCopyContact={onCopyContact}
        copiedValue={copiedValue}
      />
    </Motion.div>
  )
}
