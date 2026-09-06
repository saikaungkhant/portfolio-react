'use client'

import { useEffect, useRef, useState } from 'react'

const CHARS = '01▮▯#%&*+=<>[]/\\'

export default function Scramble({ text, className, as: Tag = 'span' }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(text)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true
          animate()
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)

    function animate() {
      const duration = 22
      let frame = 0
      const step = () => {
        frame += 1
        const revealCount = Math.ceil((frame / duration) * text.length)
        setDisplay(
          text
            .split('')
            .map((char, i) =>
              char === ' ' || i < revealCount
                ? char
                : CHARS[Math.floor(Math.random() * CHARS.length)]
            )
            .join('')
        )
        if (frame < duration) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    return () => observer.disconnect()
  }, [text])

  return (
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  )
}
