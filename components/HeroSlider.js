'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const slides = [
  {
    image: '/images/hero.jpg',
    alt: 'Dubai skyline',
    kicker: 'Security services',
    title: 'Trusted security across the UAE.',
    text: 'Trained guards for gates, patrols, offices, and events — calm, vetted, and on post.',
    href: '/security',
    cta: 'Security services'
  },
  {
    image: '/images/housekeeping.jpg',
    alt: 'Professional housekeeping',
    kicker: 'Housekeeping',
    title: 'Premises kept clean, every shift.',
    text: 'Daily care and deeper cleans, timed to the building and the people who use it.',
    href: '/housekeeping',
    cta: 'Housekeeping'
  },
  {
    image: '/images/landscape.jpg',
    alt: 'Maintained landscape',
    kicker: 'Gardening',
    title: 'Grounds that stay green in the UAE.',
    text: 'Lawns, irrigation, and planting looked after for the climate, not a generic schedule.',
    href: '/gardening',
    cta: 'Gardening services'
  }
]

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return undefined
    const timer = setInterval(() => {
      setIndex((value) => (value + 1) % slides.length)
    }, 6500)
    return () => clearInterval(timer)
  }, [paused])

  function go(next) {
    setIndex((next + slides.length) % slides.length)
  }

  return (
    <section
      className="hero hero-center hero-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, slideIndex) => (
        <div className={`slide${slideIndex === index ? ' is-active' : ''}`} key={slide.image}>
          <img src={slide.image} alt={slide.alt} />
        </div>
      ))}
      <div className="hero-shade" />
      <div className="wrap hero-copy" key={index}>
        <p className="eyebrow"><span className="dot" /> {slides[index].kicker}</p>
        <h1>{slides[index].title}</h1>
        <p className="lede">{slides[index].text}</p>
        <div className="hero-actions">
          <Link className="btn btn-red" href="/contact">Get quotation <span className="arrow">→</span></Link>
          <Link className="btn btn-ghost" href={slides[index].href}>{slides[index].cta}</Link>
        </div>
      </div>
      <button className="slider-arrow prev" type="button" aria-label="Previous slide" onClick={() => go(index - 1)}>‹</button>
      <button className="slider-arrow next" type="button" aria-label="Next slide" onClick={() => go(index + 1)}>›</button>
      <div className="slider-dots" role="tablist" aria-label="Hero slides">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.kicker}
            type="button"
            className={slideIndex === index ? 'is-active' : undefined}
            aria-label={slide.kicker}
            onClick={() => setIndex(slideIndex)}
          />
        ))}
      </div>
    </section>
  )
}
