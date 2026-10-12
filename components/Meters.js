'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const items = [
  ['Personal protection', 90],
  ['Commercial security', 80],
  ['Security consulting', 95]
]

export default function Meters() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const reduce = useReducedMotion()

  return (
    <div ref={ref}>
      {items.map(([label, value]) => (
        <div className="meter" key={label}>
          <div className="meter-top"><span>{label}</span><b>{value}%</b></div>
          <div className="track">
            <motion.span
              className="bar"
              initial={{ width: reduce ? `${value}%` : '0%' }}
              animate={{ width: inView || reduce ? `${value}%` : '0%' }}
              transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
