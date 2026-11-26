import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'motion/react'
import { ArrowRight, ArrowUpRight, Cpu, Download } from 'lucide-react'
import { ElectronicsStageFX } from './ElectronicsStageFX'
import { ScrambleText, SplitText } from './TextAnimations'

/**
 * Full-bleed unboxed Hero featuring:
 * - Pure Electronics, Robotics & Embedded Systems PCB/Oscilloscope FX (ZERO circular/round shapes behind portrait)
 * - Dual-layer solid+stroke giant overlay text: "EMBEDDED SYSTEMS" & "ROBOTICS ENTHUSIAST"
 * - Two vibrant signature colourings (Electric Cyan + Coral-Amber) with animated glow & pointer parallax
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
        {/* Left Column: Open Editorial Typography */}
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
            <span className="hero-hello">
              Hello<span className="accent-dot">.</span>
            </span>
            <div className="hero-name-line">
              <span className="hero-dash" aria-hidden="true" />
              <span>I&apos;m {brandProfile.name}</span>
            </div>
          </div>

          <h1 className="hero-main-headline">
            <SplitText text="Embedded Systems" immediate stagger={0.025} />
            <br />
            <span className="hero-headline-dual-1">&amp; Robotics</span>{' '}
            <span className="hero-headline-dual-2">Enthusiast</span>
          </h1>

          <div className="hero-role-scramble">
            <Cpu size={14} className="role-cpu-icon" aria-hidden="true" />
            <span className="role-prefix">SYS //</span>
            <ScrambleText phrases={heroRoles} />
          </div>

          <p className="hero-open-summary">{brandProfile.summary}</p>

          <div className="hero-open-actions">
            <Link className="btn-dual-gradient" to="/projects">
              <span>Explore Projects</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <a className="btn-outline-clean" href={resumeLink.href} download>
              <Download size={16} aria-hidden="true" />
              <span>Technical CV</span>
            </a>
            <Link className="btn-text-link" to="/about">
              <span>About &amp; Stack</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </Motion.div>

        {/* Right Composition: Cutout + Electronics/Robotics FX + Dual-Color Overlay Text */}
        <div className="hero-visual-col">
          {/* Pure Electronics/Robotics/Embedded FX Layer (ZERO round circles!) */}
          <ElectronicsStageFX />

          {/* Layer 1 (BEHIND Cutout): Solid Dual-Tone Giant Typography */}
          <div
            className="dual-type-layer dual-type-back"
            aria-hidden="true"
            style={{
              transform: `translate3d(${(-pointerOffset.x * 0.45).toFixed(1)}px, ${(-pointerOffset.y * 0.4).toFixed(1)}px, 0)`,
            }}
          >
            <span className="overlay-word-cyan">EMBEDDED</span>
            <span className="overlay-word-coral">ROBOTICS</span>
            <span className="overlay-word-sub">ENTHUSIAST</span>
          </div>

          {/* Layer 2 (MIDDLE): Mufassir's Real Portrait Cutout */}
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
                alt="Mohamed Mufassir — Embedded Systems and Robotics Enthusiast"
                className="hero-cutout-portrait"
              />
            </picture>
          </div>

          {/* Layer 3 (IN FRONT OF Cutout): Dual-Colour Hollow Outline Stroke Text + Animated Sheen */}
          <div
            className="dual-type-layer dual-type-front"
            aria-hidden="true"
            style={{
              transform: `translate3d(${(-pointerOffset.x * 0.45).toFixed(1)}px, ${(-pointerOffset.y * 0.4).toFixed(1)}px, 0)`,
            }}
          >
            <span className="stroke-word-cyan">EMBEDDED</span>
            <span className="stroke-word-coral">ROBOTICS</span>
            <span className="stroke-word-dual">ENTHUSIAST</span>
          </div>
        </div>
      </div>

      {/* Angular Hardware Seam Divider (Replacing Circular Stamp) */}
      <div className="hero-telemetry-seam" aria-hidden="true">
        <span className="seam-node" />
        <span className="seam-code">EMBEDDED SYSTEMS • ROBOTICS • TELECOM</span>
        <span className="seam-node coral" />
      </div>

      {/* Full-Width Open Tech Stack Ribbon bounded by crisp 1px hairlines */}
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
