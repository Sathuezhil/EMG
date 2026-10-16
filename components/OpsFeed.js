'use client'

import { useEffect, useState } from 'react'

const lines = ['Gates monitored', 'Patrols active', 'Housekeeping on shift', 'Grounds scheduled']

export default function OpsFeed() {
  const [index, setIndex] = useState(0)
  const [time, setTime] = useState('--:--:--')

  useEffect(() => {
    const tick = () => {
      setTime(new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Dubai'
      }).format(new Date()))
    }
    tick()
    const clock = setInterval(tick, 1000)
    const feed = setInterval(() => setIndex((value) => (value + 1) % lines.length), 2800)
    return () => {
      clearInterval(clock)
      clearInterval(feed)
    }
  }, [])

  return (
    <span className="ops-feed">
      <b>{time} GST</b>
      <em key={index}>{lines[index]}</em>
    </span>
  )
}
