import { Link, Navigate, useParams } from 'react-router-dom'
import { motion as Motion } from 'motion/react'
import { ArrowLeft, ArrowUpRight, Cpu, Sparkles } from 'lucide-react'
import { PageSEO, ProjectImageSlider } from '../components'

const BASE_SITE_URL = 'https://www.mohamedmufassir.me'

export function ProjectDetailPage({ projectCards }) {
  const { slug } = useParams()
  const project = projectCards.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const relatedProjects = (project.relatedSlugs || [])
    .map((relSlug) => projectCards.find((item) => item.slug === relSlug))
    .filter(Boolean)

  const siteUrl = (import.meta.env.VITE_SITE_URL || BASE_SITE_URL).replace(/\/+$/, '')
  const canonicalUrl = `${siteUrl}/projects/${project.slug}`
  const primaryImage = project.images?.[0] || '/images/og-cover.jpg'
  const ogImage = primaryImage.startsWith('http') ? primaryImage : `${siteUrl}${primaryImage}`

  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${siteUrl}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Projects',
            item: `${siteUrl}/projects`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: canonicalUrl,
          },
        ],
      },
      {
        '@type': 'CreativeWork',
        '@id': `${canonicalUrl}#project`,
        name: project.title,
        headline: project.title,
        description: project.seoDescription || project.summary,
        url: canonicalUrl,
        image: ogImage,
        author: {
          '@type': 'Person',
          '@id': `${siteUrl}/#person`,
          name: 'Mohamed Mufassir',
          url: `${siteUrl}/`,
        },
        about: project.domainLabel,
        keywords: (project.keywords || project.stack).join(', '),
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
        title={project.seoTitle || `${project.title} — Mohamed Mufassir`}
        description={project.seoDescription || project.summary}
        path={`/projects/${project.slug}`}
        keywords={(project.keywords || project.stack).join(', ')}
        ogType="article"
        ogImage={ogImage}
        jsonLd={schemaJsonLd}
      />

      <article className="project-detail-article">
        <div className="subpage-banner project-detail-banner">
          <Link to="/projects" className="detail-breadcrumb-link">
            <ArrowLeft size={15} aria-hidden="true" />
            <span>Back to All {projectCards.length} Engineered Systems</span>
          </Link>

          <span className="section-eyebrow">
            {project.domainLabel} • {project.type}
          </span>
          <h1 className="subpage-headline detail-page-title">{project.title}</h1>
          <p className="detail-lead-copy">{project.summary}</p>
        </div>

        <section className="section-open project-detail-body">
          <div className="detail-media-stage">
            <ProjectImageSlider
              key={project.slug}
              images={project.images}
              title={project.title}
            />
          </div>

          <div className="detail-content-grid">
            <div className="detail-prose-col">
              <div className="detail-prose-block">
                <h2>System Architecture &amp; Implementation</h2>
                <p>{project.architectureOverview}</p>
              </div>

              <div className="detail-prose-block">
                <h2>Engineering Learnings &amp; Challenges Solved</h2>
                <p>{project.challengesAndLearnings}</p>
              </div>

              <div className="detail-prose-block">
                <h2>Key Engineering Deliverables</h2>
                <ul className="modal-points-list">
                  {project.points.map((point) => (
                    <li key={point} className="modal-point-item">
                      <span className="point-bullet" aria-hidden="true">✦</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="detail-sidebar-col" aria-label="Technical specifications and links">
              <div className="detail-spec-group">
                <h3>Hardware, Firmware &amp; Tech Stack</h3>
                <div className="modal-stack-line">
                  {project.stack.map((tech) => (
                    <span key={tech} className="modal-stack-token">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.systemHighlight && (
                <div className="modal-note-box">
                  <Sparkles size={17} className="note-icon" aria-hidden="true" />
                  <div>
                    <span className="modal-note-title">Architecture Highlight</span>
                    <p>{project.systemHighlight}</p>
                  </div>
                </div>
              )}

              <div className="detail-cta-stack">
                <Link to="/freelance" className="btn-dual-gradient">
                  <span>Need a Similar System Built?</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
                <Link to="/robotics" className="btn-outline-clean">
                  <Cpu size={15} aria-hidden="true" />
                  <span>Robotics &amp; Embedded Learnings</span>
                </Link>
              </div>
            </aside>
          </div>

          {relatedProjects.length > 0 && (
            <div className="detail-related-section">
              <div className="detail-related-head">
                <span className="section-eyebrow">Connected Case Studies</span>
                <h2>Related Engineering Projects</h2>
              </div>

              <div className="detail-related-list">
                {relatedProjects.map((rel, idx) => (
                  <Link
                    key={rel.slug}
                    to={`/projects/${rel.slug}`}
                    className="project-index-row"
                  >
                    <span className="index-num">{String(idx + 1).padStart(2, '0')}</span>
                    <div className="index-main">
                      <div className="index-meta">
                        <span>{rel.domainLabel}</span>
                        <span>•</span>
                        <span>{rel.type}</span>
                      </div>
                      <h3 className="index-title">{rel.title}</h3>
                      <span className="index-stack-inline">{rel.stack.slice(0, 4).join('  /  ')}</span>
                    </div>
                    <span className="index-arrow-circle" aria-hidden="true">
                      <ArrowUpRight size={17} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </article>
    </Motion.div>
  )
}
