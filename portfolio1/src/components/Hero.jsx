import { useEffect, useRef, useState } from 'react'
import { motion as Motion } from 'motion/react'
import { ArrowUpRight, Cpu, Download, MapPin, Radio, Sparkles } from 'lucide-react'
import { BlurText, ScrambleText, ShinyText, SplitText } from './TextAnimations'

const HERO_MODES = [
  { id: 'hud', label: 'HUD Cockpit' },
  { id: 'studio', label: 'Electric Studio' },
  { id: 'noir', label: 'Noir Editorial' },
]

/**
 * Real-time animated PID closed-loop step-response & telemetry waveform canvas.
 */
function PidOscilloscope() {
  const waveRef = useRef(null)

  useEffect(() => {
    const canvas = waveRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let rafId = 0
    let phase = 0

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      // Subtle reference grid
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.12)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(0, h * 0.5)
      ctx.lineTo(w, h * 0.5)
      ctx.stroke()

      // Channel 1: Target Setpoint / Damped Harmonic (Emerald)
      ctx.strokeStyle = '#34d399'
      ctx.lineWidth = 1.8
      ctx.beginPath()
      for (let x = 0; x <= w; x += 3) {
        const y = h * 0.5 + Math.sin(x * 0.055 - phase) * 11
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Channel 2: Closed-loop Encoder Feedback (Cyan)
      ctx.strokeStyle = '#38bdf8'
      ctx.lineWidth = 2
      ctx.beginPath()
      for (let x = 0; x <= w; x += 3) {
        const y =
          h * 0.5 +
          Math.sin(x * 0.045 - phase + 0.9) * Math.cos(x * 0.015 + phase * 0.4) * 14
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      if (!reduced) {
        phase += 0.055
        rafId = window.requestAnimationFrame(draw)
      }
    }

    draw()
    return () => window.cancelAnimationFrame(rafId)
  }, [])

  return (
    <canvas
      ref={waveRef}
      width={220}
      height={46}
      className="w-full h-[46px]"
      aria-label="Live PID loop telemetry oscilloscope waveform"
    />
  )
}

export function Hero({ brandProfile, heroRoles, resumeLink }) {
  const [stageMode, setStageMode] = useState('hud')
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0, mx: 50, my: 50 })

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width
    const ny = (e.clientY - rect.top) / rect.height
    setPointerOffset({
      x: (nx - 0.5) * 18,
      y: (ny - 0.5) * 10,
      mx: nx * 100,
      my: ny * 100,
    })
  }

  const resetPointer = () => {
    setPointerOffset((prev) => ({ ...prev, x: 0, y: 0 }))
  }

  return (
    <section
      className={`hero-stage-shell mode-${stageMode}`}
      id="hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      style={{
        '--hero-mx': `${pointerOffset.mx.toFixed(1)}%`,
        '--hero-my': `${pointerOffset.my.toFixed(1)}%`,
      }}
    >
      {/* Interactive Backdrop Layers */}
      <div className="hero-stage-bg" aria-hidden="true">
        {stageMode !== 'studio' && (
          <picture className="hero-backdrop-plate">
            <source srcSet="/images/hero-backdrop-plate.webp" type="image/webp" />
            <img src="/images/hero-backdrop-plate.jpg" alt="" />
          </picture>
        )}
        <div className="hero-spotlight-overlay" />
        <div className="hero-volumetric-aura" />

        {/* Rotating SVG Telemetry Orbital Rings (HUD & Noir modes) */}
        {stageMode !== 'studio' && (
          <div className="hero-orbital-rings">
            <div className="orbital-ring ring-outer" />
            <div className="orbital-ring ring-inner" />
          </div>
        )}
      </div>

      {/* Top Hero Header Strip: Live Status + Stage Style Switcher */}
      <div className="hero-top-toolbar">
        <div className="status-pill-badge" aria-label="Current availability status">
          <span className="status-pulse-dot" aria-hidden="true" />
          <span className="status-text">{brandProfile.availability}</span>
        </div>

        <div className="hero-mode-switcher" role="tablist" aria-label="Switch hero visual style">
          <Sparkles size={13} className="mode-switcher-icon" aria-hidden="true" />
          {HERO_MODES.map((mode) => {
            const active = stageMode === mode.id
            return (
              <button
                key={mode.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setStageMode(mode.id)}
                className={`hero-mode-btn ${active ? 'is-active' : ''}`}
              >
                {active && (
                  <Motion.span
                    layoutId="hero-mode-pill"
                    className="hero-mode-pill"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{mode.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* =====================================================================
          MODE 1 & 2: LAYERED CUTOUT STAGE (HUD COCKPIT + ELECTRIC STUDIO)
          ===================================================================== */}
      {stageMode !== 'noir' && (
        <div className="hero-layered-canvas">
          {/* Layer 1: Giant Kinetic Display Typography BEHIND Cutout */}
          <div className="hero-giant-typography" aria-hidden="true">
            <div className="giant-word giant-word-top">
              <SplitText text="MOHAMED" immediate stagger={0.04} />
            </div>
            <div className="giant-word giant-word-bottom">
              <SplitText text="MUFASSIR" immediate delay={0.14} stagger={0.04} />
            </div>
          </div>

          {/* Left Cockpit Column */}
          <Motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="hero-hud-left"
          >
            {stageMode === 'studio' ? (
              <>
                <div className="studio-editorial-tag">
                  <span className="studio-script-role">Systems Engineer</span>
                  <span className="studio-brush-line" aria-hidden="true" />
                </div>
                <h1 className="hero-sr-title">
                  {brandProfile.name} — {brandProfile.tagline}
                </h1>
                <p className="studio-lead-copy">{brandProfile.summary}</p>
                <div className="studio-stat-tiles">
                  <div className="studio-tile tile-lime">
                    <strong>11+</strong>
                    <span>Engineered Systems</span>
                  </div>
                  <div className="studio-tile tile-white">
                    <strong>4+</strong>
                    <span>Hardware &amp; Web Stacks</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="hud-glass-card">
                  <div className="hud-card-kicker">
                    <Cpu size={13} aria-hidden="true" />
                    <span>TECHTITUDE LABS • CO-FOUNDER</span>
                  </div>
                  <h1 className="hud-card-name">{brandProfile.name}</h1>
                  <div className="hud-scramble-line">
                    <ScrambleText phrases={heroRoles} />
                  </div>
                  <p className="hud-card-summary">{brandProfile.summary}</p>
                </div>

                <div className="hud-glass-card hud-telemetry-card">
                  <div className="hud-telemetry-header">
                    <span>PID LOOP TELEMETRY</span>
                    <span className="telemetry-hz">1.0 kHz CLOSED-LOOP</span>
                  </div>
                  <PidOscilloscope />
                  <div className="hud-telemetry-footer">
                    <span>AVR • ESP32-CAM • RPi • Fiber</span>
                    <span className="hud-loc">
                      <MapPin size={12} aria-hidden="true" />
                      {brandProfile.location}
                    </span>
                  </div>
                </div>
              </>
            )}
          </Motion.div>

          {/* Center Cutout Portrait Layer (Front of Giant Typography) */}
          <div
            className="hero-cutout-center"
            style={{
              transform: `translate3d(${pointerOffset.x.toFixed(1)}px, ${(pointerOffset.y * 0.5).toFixed(1)}px, 0)`,
            }}
          >
            <picture className="hero-cutout-picture">
              <source srcSet="/images/mufassir-cutout.webp" type="image/webp" />
              <img
                src="/images/mufassir-cutout.png"
                alt="Mohamed Mufassir — Computer Systems Engineer"
                className="hero-cutout-img"
              />
            </picture>
          </div>

          {/* Right Cockpit Column */}
          <Motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-hud-right"
          >
            {stageMode === 'studio' ? (
              <>
                <div className="studio-disciplines">
                  <span>Embedded Firmware</span>
                  <span>Autonomous Robotics</span>
                  <span>Optical Telecom</span>
                  <div className="studio-right-bar" aria-hidden="true" />
                </div>
                <div className="hud-glass-card studio-venture-pill">
                  <span className="hud-card-kicker">ACADEMIC &amp; VENTURE</span>
                  <strong>SLIIT BSc (Hons) CSE</strong>
                  <small>2023 — 2027 • Thihariya, LK</small>
                </div>
                <div className="hero-cta-stack">
                  <a className="button studio-cta-btn" href="#projects">
                    <span>Explore Systems</span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  <a className="button studio-cv-btn" href={resumeLink.href} download>
                    <Download size={15} aria-hidden="true" />
                    <span>Technical CV</span>
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="hud-glass-card hud-specs-card">
                  <div className="hud-card-kicker">
                    <Radio size={13} aria-hidden="true" />
                    <span>CORE ARCHITECTURE</span>
                  </div>
                  <div className="hud-spec-row">
                    <strong>11+</strong>
                    <span>Production &amp; R&amp;D Systems</span>
                  </div>
                  <div className="hud-spec-row">
                    <strong>AVR / ESP32</strong>
                    <span>Bare-Metal &amp; Live Video</span>
                  </div>
                  <div className="hud-spec-row">
                    <strong>Optical Fiber</strong>
                    <span>Telecom Infrastructure Ops</span>
                  </div>
                  <div className="hud-spec-row">
                    <strong>SLIIT &apos;27</strong>
                    <span>BSc (Hons) Computer Systems</span>
                  </div>
                </div>

                <div className="hero-cta-stack">
                  <a className="button metallic-cta-btn" href="#projects">
                    <ShinyText>Explore Systems</ShinyText>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  <div className="hero-secondary-row">
                    <a className="button secondary-btn" href={resumeLink.href} download>
                      <Download size={15} aria-hidden="true" />
                      <span>CV</span>
                    </a>
                    <a className="button ghost-btn" href="#contact">
                      <span>Get In Touch</span>
                    </a>
                  </div>
                </div>
              </>
            )}
          </Motion.div>

          {/* Bottom Stage Notch / Ticker */}
          {stageMode === 'studio' ? (
            <div className="studio-bottom-notch">
              <a href="#contact" className="studio-notch-cta">
                <span>GET IN TOUCH</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          ) : (
            <div className="hero-bottom-ticker" aria-hidden="true">
              <span>AVR ASSEMBLY</span>
              <span>•</span>
              <span>PID CLOSED-LOOP</span>
              <span>•</span>
              <span>ESP32-CAM</span>
              <span>•</span>
              <span>OPTICAL FIBER</span>
              <span>•</span>
              <span>REACT &amp; ELECTRON</span>
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          MODE 3: NOIR EDITORIAL (REF 3 "DIGITAL DESIGNER" PORTRAIT BENTO)
          ===================================================================== */}
      {stageMode === 'noir' && (
        <div className="hero-noir-grid">
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-noir-copy"
          >
            <span className="noir-eyebrow">
              HARDWARE PRECISION • SOFTWARE ARCHITECTURE
            </span>
            <h1 className="noir-headline">
              <SplitText text="SYSTEMS" immediate />
              <br />
              <SplitText text="ENGINEER" immediate delay={0.14} className="noir-headline-dim" />
            </h1>
            <p className="noir-lead">
              <BlurText text={brandProfile.summary} immediate delay={0.2} />
            </p>
            <div className="hero-actions">
              <a className="button metallic-cta-btn" href="#projects">
                <span>VIEW MY WORK</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a className="button ghost-btn" href={resumeLink.href} download>
                <span>DOWNLOAD RESUME</span>
                <Download size={15} aria-hidden="true" />
              </a>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="hero-noir-portrait-wrap"
            style={{
              transform: `translate3d(${(pointerOffset.x * 0.5).toFixed(1)}px, ${(pointerOffset.y * 0.4).toFixed(1)}px, 0)`,
            }}
          >
            <picture className="hero-noir-picture">
              <source srcSet="/images/mufassir-obsidian.webp" type="image/webp" />
              <img
                src="/images/mufassir-obsidian.jpg"
                alt="Mohamed Mufassir — Editorial Studio Portrait"
                className="hero-noir-img"
              />
            </picture>
            <div className="noir-corner-status">
              <small>AVAILABLE FOR</small>
              <strong>R&amp;D &amp; TELECOM</strong>
              <span>{brandProfile.location} ↗</span>
            </div>
          </Motion.div>
        </div>
      )}
    </section>
  )
}
