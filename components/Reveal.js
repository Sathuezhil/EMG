'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, className = '', delay = 0, from = 'up' }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  const offset = from === 'left' ? { x: -48, y: 0 } : { x: 0, y: 36 }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
