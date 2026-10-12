'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

export default function CountUp({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) return undefined
    const start = performance.now()
    let frame = 0
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / 1100)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(to * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduce, to])

  return <strong ref={ref}>{value}{suffix}</strong>
}
