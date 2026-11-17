import { useEffect, useRef } from 'react'

/**
 * Lightweight ambient telemetry canvas: subtle perspective grid + drifting nodes
 * aligned with active theme and pointer coordinates, auto-pauses when tab is hidden.
 */
export function BackgroundCanvas({ theme }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let rafId = 0
    let pointer = { x: 0.5, y: 0.35 }
    let tick = 0
    let active = !document.hidden

    const nodes = Array.from({ length: 26 }, (_, idx) => ({
      x: ((idx * 173) % 1000) / 1000,
      y: ((idx * 311) % 1000) / 1000,
      vx: ((idx % 5) - 2) * 0.00018 || 0.00014,
      vy: (((idx + 2) % 5) - 2) * 0.00016 || -0.00012,
      r: (idx % 3) + 1.1,
    }))

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const onPointerMove = (e) => {
      pointer = {
        x: e.clientX / Math.max(window.innerWidth, 1),
        y: e.clientY / Math.max(window.innerHeight, 1),
      }
    }

    const onVisibility = () => {
      active = !document.hidden
      if (active && !reducedMotion) {
        rafId = window.requestAnimationFrame(draw)
      }
    }

    const draw = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      const isDark = theme !== 'light'
      const primaryRgb = isDark ? '56, 189, 248' : '2, 132, 199'
      const secondaryRgb = isDark ? '52, 211, 153' : '5, 150, 105'

      // Soft pointer halo
      const gx = pointer.x * w
      const gy = pointer.y * h
      const halo = ctx.createRadialGradient(gx, gy, 0, gx, gy, Math.max(w, h) * 0.38)
      halo.addColorStop(0, `rgba(${primaryRgb}, ${isDark ? 0.09 : 0.05})`)
      halo.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = halo
      ctx.fillRect(0, 0, w, h)

      // Drifting telemetry nodes + sparse connecting traces
      tick += 0.015
      for (let i = 0; i < nodes.length; i += 1) {
        const n = nodes[i]
        if (!reducedMotion) {
          n.x = (n.x + n.vx + 1) % 1
          n.y = (n.y + n.vy + 1) % 1
        }
        const px = n.x * w
        const py = n.y * h

        // Connect close nodes subtly
        for (let j = i + 1; j < nodes.length; j += 1) {
          const m = nodes[j]
          const mx = m.x * w
          const my = m.y * h
          const dist = Math.hypot(px - mx, py - my)
          if (dist < 170) {
            const alpha = (1 - dist / 170) * (isDark ? 0.1 : 0.07)
            ctx.strokeStyle = `rgba(${primaryRgb}, ${alpha.toFixed(3)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(px, py)
            ctx.lineTo(mx, my)
            ctx.stroke()
          }
        }

        const pulse = 0.55 + 0.45 * Math.sin(tick + i)
        ctx.fillStyle =
          i % 3 === 0
            ? `rgba(${secondaryRgb}, ${(0.25 * pulse).toFixed(3)})`
            : `rgba(${primaryRgb}, ${(0.28 * pulse).toFixed(3)})`
        ctx.beginPath()
        ctx.arc(px, py, n.r, 0, Math.PI * 2)
        ctx.fill()
      }

      if (!reducedMotion && active) {
        rafId = window.requestAnimationFrame(draw)
      }
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
