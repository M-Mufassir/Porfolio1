import { useEffect, useRef, useState } from 'react'
import { motion as Motion, useInView } from 'motion/react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * GSAP staggered character/word split reveal.
 * Renders cleanly with immediate visibility for reduced-motion users.
 */
export function SplitText({
  text,
  className = '',
  mode = 'chars',
  delay = 0,
  stagger = 0.025,
  immediate = false,
}) {
  const containerRef = useRef(null)
  const units = mode === 'words' ? text.split(' ') : Array.from(text)

  useGSAP(
    () => {
      if (prefersReducedMotion() || !containerRef.current) return
      const items = containerRef.current.querySelectorAll('.split-unit')
      if (!items.length) return

      const anim = {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.7,
        stagger,
        delay,
        ease: 'power3.out',
      }

      gsap.set(items, { y: 28, opacity: 0, rotateX: -25 })

      if (immediate) {
        gsap.to(items, anim)
        return
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(items, anim)
              observer.disconnect()
            }
          })
        },
        { threshold: 0.15 }
      )
      observer.observe(containerRef.current)
      return () => observer.disconnect()
    },
    { scope: containerRef, dependencies: [text, mode, delay, immediate] }
  )

  return (
    <span ref={containerRef} className={`inline-block ${className}`} aria-label={text}>
      {units.map((unit, idx) => (
        <span
          key={`${unit}-${idx}`}
          aria-hidden="true"
          className="split-unit inline-block will-change-transform"
        >
          {unit === ' ' ? '\u00A0' : unit}
          {mode === 'words' && idx < units.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  )
}

/**
 * Blur-to-sharp staggered word reveal powered by Motion.
 */

export function BlurText({ text, className = '', delay = 0, immediate = false }) {
  const words = text.split(' ')
  const reduced = prefersReducedMotion()

  if (reduced) {
    return <span className={className}>{text}</span>
  }

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}>
      {words.map((word, idx) => (
        <Motion.span
          key={`${word}-${idx}`}
          initial={{ opacity: 0, filter: 'blur(10px)', y: 12 }}
          {...(immediate
            ? { animate: { opacity: 1, filter: 'blur(0px)', y: 0 } }
            : {
                whileInView: { opacity: 1, filter: 'blur(0px)', y: 0 },
                viewport: { once: true, amount: 0.3 },
              })}
          transition={{
            duration: 0.55,
            delay: delay + idx * 0.045,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
        >
          {word}
        </Motion.span>
      ))}
    </span>
  )
}

const SCRAMBLE_GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/$%'

/**
 * Cycles through phrases with a crisp matrix/decryption character scramble.
 */
export function ScrambleText({ phrases, intervalMs = 3400, className = '' }) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [display, setDisplay] = useState(phrases[0] || '')
  const reduced = prefersReducedMotion()

  useEffect(() => {
    if (!phrases?.length) return undefined

    if (reduced) {
      const timer = window.setInterval(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
      }, intervalMs)
      return () => window.clearInterval(timer)
    }

    const target = phrases[phraseIndex]
    let step = 0
    const scrambleTimer = window.setInterval(() => {
      step += 1
      const next = target
        .split('')
        .map((ch, idx) => {
          if (ch === ' ') return ' '
          if (step > idx * 1.4 + 3) return ch
          return SCRAMBLE_GLYPHS[(step + idx * 5) % SCRAMBLE_GLYPHS.length]
        })
        .join('')
      setDisplay(next)
      if (step > target.length * 1.4 + 5) {
        window.clearInterval(scrambleTimer)
      }
    }, 28)

    const cycleTimer = window.setTimeout(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length)
    }, intervalMs)

    return () => {
      window.clearInterval(scrambleTimer)
      window.clearTimeout(cycleTimer)
    }
  }, [phraseIndex, phrases, intervalMs, reduced])

  const shownText = reduced ? phrases[phraseIndex] || '' : display
  return <span className={className}>{shownText}</span>
}

/**
 * Sweeping luminous metallic highlight text.
 */
export function ShinyText({ children, className = '' }) {
  return <span className={`shiny-sweep-text ${className}`}>{children}</span>
}

/**
 * Scroll-triggered count-up numeric ticker.
 */
export function NumberTicker({ value, prefix = '', suffix = '', className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [current, setCurrent] = useState(0)
  const reduced = prefersReducedMotion()

  useEffect(() => {
    if (!isInView || reduced) return undefined

    const duration = 1100
    const start = performance.now()
    let rafId = 0

    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(value * eased))
      if (progress < 1) {
        rafId = window.requestAnimationFrame(update)
      }
    }

    rafId = window.requestAnimationFrame(update)
    return () => window.cancelAnimationFrame(rafId)
  }, [isInView, value, reduced])

  const shown = reduced && isInView ? value : current

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {shown}
      {suffix}
    </span>
  )
}
