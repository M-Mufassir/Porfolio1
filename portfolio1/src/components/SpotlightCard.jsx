import { useRef, useState } from 'react'

/**
 * Interactive pointer-tracking spotlight bento card with optional animated border beam.
 */
export function SpotlightCard({
  children,
  className = '',
  beam = false,
  onClick,
  as = 'div',
  ...rest
}) {
  const cardRef = useRef(null)
  const [coords, setCoords] = useState({ x: 50, y: 50, active: false })

  const handlePointerMove = (event) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    setCoords({ x, y, active: true })
  }

  const handlePointerLeave = () => {
    setCoords((prev) => ({ ...prev, active: false }))
  }

  const sharedProps = {
    ref: cardRef,
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
    onClick,
    className: `spotlight-card relative overflow-hidden ${beam ? 'has-border-beam' : ''} ${className}`,
    style: {
      '--spot-x': `${coords.x}%`,
      '--spot-y': `${coords.y}%`,
      '--spot-opacity': coords.active ? 1 : 0,
    },
    ...rest,
  }

  const content = (
    <>
      {beam && <span className="border-beam-ring" aria-hidden="true" />}
      <span className="spotlight-glow" aria-hidden="true" />
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </>
  )

  if (as === 'article') {
    return <article {...sharedProps}>{content}</article>
  }
  return <div {...sharedProps}>{content}</div>
}
