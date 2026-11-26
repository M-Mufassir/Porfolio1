import { useEffect, useRef } from 'react'

/**
 * Pure Electronics, Robotics & Embedded Systems backdrop FX behind portrait cutout.
 * Strictly angular PCB traces, logic gates, PWM telemetry waves & robotic reticles — ZERO round circles/rings.
 */
export function ElectronicsStageFX() {
  const waveCanvasRef = useRef(null)

  useEffect(() => {
    const canvas = waveCanvasRef.current
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

      // Channel 1: Digital PWM Square-Wave (Electric Cyan)
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.42)'
      ctx.lineWidth = 1.6
      ctx.beginPath()
      const period = 46
      const duty = 0.38 + 0.14 * Math.sin(phase * 0.4)
      for (let x = 0; x <= w; x += 2) {
        const local = ((x + phase * 18) % period) / period
        const y = local < duty ? h * 0.25 : h * 0.62
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Channel 2: Closed-Loop PID Sine Carrier (Vibrant Coral-Amber)
      ctx.strokeStyle = 'rgba(249, 115, 22, 0.44)'
      ctx.lineWidth = 1.8
      ctx.beginPath()
      for (let x = 0; x <= w; x += 3) {
        const y =
          h * 0.72 +
          Math.sin(x * 0.045 - phase * 1.4) * Math.cos(x * 0.015 + phase * 0.5) * 16
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      if (!reduced) {
        phase += 0.045
        rafId = window.requestAnimationFrame(draw)
      }
    }

    draw()
    return () => window.cancelAnimationFrame(rafId)
  }, [])

  return (
    <div className="electronics-fx-layer" aria-hidden="true">
      {/* Dual-Color Ambient Energy Glow Behind Cutout */}
      <div className="fx-dual-glow fx-glow-cyan" />
      <div className="fx-dual-glow fx-glow-coral" />

      {/* Orthogonal Angular Frame Reticle Ticks (No Circles!) */}
      <span className="fx-corner fx-tl" />
      <span className="fx-corner fx-tr" />
      <span className="fx-corner fx-bl" />
      <span className="fx-corner fx-br" />

      {/* Animated PCB Manhattan Circuit Traces + Signal Pulses */}
      <svg
        className="fx-pcb-svg"
        viewBox="0 0 640 540"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="traceCyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="traceCoral" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
            <stop offset="50%" stopColor="#fb923c" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Central MCU IC Footprint Outline Behind Torso */}
        <rect
          x="230"
          y="165"
          width="180"
          height="180"
          rx="6"
          className="pcb-ic-frame"
        />
        <rect
          x="246"
          y="181"
          width="148"
          height="148"
          rx="3"
          className="pcb-ic-inner"
        />

        {/* Static Base Copper Traces (45-deg Manhattan Routing) */}
        <path d="M230 195 H135 L95 155 H25" className="pcb-base-trace" />
        <path d="M230 225 H115 L75 265 H18" className="pcb-base-trace" />
        <path d="M230 285 H145 L105 325 H30" className="pcb-base-trace" />
        <path d="M230 315 H160 L115 360 H45" className="pcb-base-trace" />

        <path d="M410 195 H505 L545 155 H615" className="pcb-base-trace" />
        <path d="M410 225 H525 L565 265 H622" className="pcb-base-trace" />
        <path d="M410 285 H495 L535 325 H610" className="pcb-base-trace" />
        <path d="M410 315 H480 L525 360 H595" className="pcb-base-trace" />

        {/* Vertical Bus & Sensor Traces */}
        <path d="M275 165 V95 L235 55 V18" className="pcb-base-trace" />
        <path d="M365 165 V85 L405 45 V18" className="pcb-base-trace" />

        {/* Animated Travelling Signal Pulses — Cyan */}
        <path d="M230 195 H135 L95 155 H25" className="pcb-pulse pcb-pulse-cyan" />
        <path d="M410 225 H525 L565 265 H622" className="pcb-pulse pcb-pulse-cyan-slow" />
        <path d="M275 165 V95 L235 55 V18" className="pcb-pulse pcb-pulse-cyan" />

        {/* Animated Travelling Signal Pulses — Coral-Amber */}
        <path d="M230 285 H145 L105 325 H30" className="pcb-pulse pcb-pulse-coral" />
        <path d="M410 195 H505 L545 155 H615" className="pcb-pulse pcb-pulse-coral-slow" />
        <path d="M365 165 V85 L405 45 V18" className="pcb-pulse pcb-pulse-coral" />

        {/* Square Solder Pads & Pinout Nodes (No Circles!) */}
        <rect x="20" y="150" width="9" height="9" className="pcb-pad-cyan" />
        <rect x="13" y="260" width="9" height="9" className="pcb-pad-coral" />
        <rect x="25" y="320" width="9" height="9" className="pcb-pad-coral" />
        <rect x="610" y="150" width="9" height="9" className="pcb-pad-coral" />
        <rect x="617" y="260" width="9" height="9" className="pcb-pad-cyan" />
        <rect x="605" y="320" width="9" height="9" className="pcb-pad-cyan" />

        {/* Schematic Resistor Symbol Top-Left */}
        <path
          d="M52 84 H68 L73 74 L81 94 L89 74 L97 94 L105 74 L111 84 H128"
          className="pcb-schematic-symbol"
        />
        {/* Logic Gate / Robotics Servo Marker Top-Right */}
        <path
          d="M505 72 H534 C554 72 562 84 562 88 C562 92 554 104 534 104 H505 Z"
          className="pcb-schematic-symbol-coral"
        />
      </svg>

      {/* Floating Hardware / Robotics Telemetry Micro-Tags (Unboxed Typographic Callouts) */}
      <span className="fx-chip-tag fx-tag-tl">ATmega // AVR ASM</span>
      <span className="fx-chip-tag fx-tag-tr">PWM 20kHz • PID</span>
      <span className="fx-chip-tag fx-tag-ml">SPI / I2C / UART</span>
      <span className="fx-chip-tag fx-tag-mr">FSM AUTONOMY</span>

      {/* Live PWM + PID Oscilloscope Canvas Strip Behind Lower Portrait */}
      <canvas
        ref={waveCanvasRef}
        width={520}
        height={110}
        className="fx-oscilloscope-canvas"
      />
    </div>
  )
}
