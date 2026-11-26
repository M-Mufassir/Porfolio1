import { useEffect, useRef, useState } from 'react'

/**
 * Subtle desktop-only trailing magnetic ring cursor.
 * Expands softly when hovering links, buttons, or interactive project rows.
 */
export function MagneticCursor() {
  const ringRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hoveringInteractive, setHoveringInteractive] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduced) return undefined

    let targetX = -100
    let targetY = -100
    let curX = -100
    let curY = -100
    let rafId = 0

    const onMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
      setVisible(true)

      const interactive = e.target?.closest?.('a, button, [role="button"], input, textarea')
      setHoveringInteractive(Boolean(interactive))
    }

    const onLeave = () => setVisible(false)

    const tick = () => {
      curX += (targetX - curX) * 0.18
      curY += (targetY - curY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`
      }
      rafId = window.requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    rafId = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      className={`magnetic-cursor-ring ${visible ? 'is-visible' : ''} ${
        hoveringInteractive ? 'is-active' : ''
      }`}
    />
  )
}
