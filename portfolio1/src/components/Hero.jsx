import { useState } from 'react'
import { motion as Motion } from 'motion/react'
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import { ScrambleText, SplitText } from './TextAnimations'

/**
 * Full-bleed unboxed hero combining:
 * - Ref 2 (Jensen Omega): clean open greeting + glowing orbital ring & `< >` hardware brackets + full-width stack ribbon
 * - Ref 3 (Qurifolio): dual-layer solid-behind + hollow-stroke-in-front typography overlapping the single real cutout + rotating scroll stamp
 * - Ref 1 (Kawsar): open cosmic radial atmosphere + effortless whitespace
 */
export function Hero({ brandProfile, heroRoles, techRibbonItems, resumeLink }) {
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 })

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width - 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5
    setPointerOffset({ x: nx * 18, y: ny * 10 })
  }

  const resetPointer = () => setPointerOffset({ x: 0, y: 0 })

  return (
    <section
      className="hero-open-stage"
      id="hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="hero-open-inner">
        {/* Left Column: Open Editorial Typography (ZERO box wrappers) */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="hero-editorial-col"
        >
          <div className="hero-status-line">
            <span className="status-pulse-dot" aria-hidden="true" />
            <span>{brandProfile.availability}</span>
          </div>

          <div className="hero-greeting-row">
            <span className="hero-hello">Hello<span className="accent-dot">.</span></span>
            <div className="hero-name-line">
              <span className="hero-dash" aria-hidden="true" />
              <span>I&apos;m {brandProfile.name}</span>
            </div>
          </div>

          <h1 className="hero-main-headline">
            <SplitText text="Computer Systems" immediate stagger={0.03} />
            <br />
            <span className="hero-headline-italic">Engineer</span>{' '}
            <span className="hero-headline-accent">&amp; Builder</span>
          </h1>

          <div className="hero-role-scramble">
            <span className="role-prefix">FOCUS //</span>
            <ScrambleText phrases={heroRoles} />
          </div>

          <p className="hero-open-summary">{brandProfile.summary}</p>

          <div className="hero-open-actions">
            <a className="btn-solid-primary" href="#projects">
              <span>Explore Work</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="btn-outline-clean" href={resumeLink.href} download>
              <Download size={16} aria-hidden="true" />
              <span>My Resume</span>
            </a>
          </div>
        </Motion.div>

        {/* Right Composition: Single Cutout + Dual-Layer Stroke Typography + Glowing Orbital Ring */}
        <div className="hero-visual-col">
          {/* Glowing Ambient Halo + Rotating Reticle + Code/Hardware Brackets `< >` (Ref 2 + Ref 3) */}
          <div className="hero-halo-backdrop" aria-hidden="true">
            <div className="hero-orbital-circle" />
            <div className="hero-orbital-dashed" />
            <span className="hero-bracket bracket-left">&lt;</span>
            <span className="hero-bracket bracket-right">&gt;</span>
          </div>

          {/* Layer 1 (BEHIND Cutout): Solid Giant Display Typography */}
          <div
            className="dual-type-layer dual-type-back"
            aria-hidden="true"
            style={{
              transform: `translate3d(${(-pointerOffset.x * 0.45).toFixed(1)}px, ${(-pointerOffset.y * 0.4).toFixed(1)}px, 0)`,
            }}
          >
            <span>SYSTEMS</span>
            <span>ENGINEER</span>
          </div>

          {/* Layer 2 (MIDDLE): Mufassir's ONLY Real Portrait Cutout */}
          <div
            className="hero-cutout-stage"
            style={{
              transform: `translate3d(${pointerOffset.x.toFixed(1)}px, ${(pointerOffset.y * 0.5).toFixed(1)}px, 0)`,
            }}
          >
            <picture className="hero-cutout-picture">
              <source srcSet="/images/mufassir-cutout.webp" type="image/webp" />
              <img
                src="/images/mufassir-cutout.png"
                alt="Mohamed Mufassir — Computer Systems Engineer"
                className="hero-cutout-portrait"
              />
            </picture>
          </div>

          {/* Layer 3 (IN FRONT OF Cutout): Hollow Stroke Typography (Ref 3 Qurifolio!) */}
          <div
            className="dual-type-layer dual-type-front"
            aria-hidden="true"
            style={{
              transform: `translate3d(${(-pointerOffset.x * 0.45).toFixed(1)}px, ${(-pointerOffset.y * 0.4).toFixed(1)}px, 0)`,
            }}
          >
            <span>SYSTEMS</span>
            <span>ENGINEER</span>
          </div>
        </div>
      </div>

      {/* Rotating Circular Scroll Down Badge straddling bottom seam (Ref 3) */}
      <a href="#about" className="scroll-stamp-badge" aria-label="Scroll to About section">
        <svg viewBox="0 0 120 120" className="scroll-stamp-svg" aria-hidden="true">
          <defs>
            <path
              id="scrollStampPath"
              d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
            />
          </defs>
          <text className="scroll-stamp-text">
            <textPath href="#scrollStampPath" startOffset="0%">
              SCROLL DOWN • EXPLORE SYSTEMS •
            </textPath>
          </text>
        </svg>
        <span className="scroll-stamp-center" aria-hidden="true">
          <ArrowDown size={15} />
        </span>
      </a>

      {/* Full-Width Open Tech Stack Ribbon bounded by subtle 1px hairlines (Ref 2) */}
      <div className="tech-ribbon-band" aria-label="Core engineering technologies">
        <div className="tech-ribbon-track">
          {[...techRibbonItems, ...techRibbonItems].map((item, idx) => (
            <span key={`${item}-${idx}`} className="tech-ribbon-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
