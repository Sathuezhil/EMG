'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

const MotionLink = typeof motion.create === 'function' ? motion.create(Link) : motion(Link)

export default function SvcCard({ href, className, delay = 0, children }) {
  const reduce = useReducedMotion()
  if (reduce) return <Link href={href} className={className}>{children}</Link>

  return (
    <MotionLink
      href={href}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionLink>
  )
}
