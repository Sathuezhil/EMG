'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import catalogue from '@/lib/services'

const services = [
  { href: '/services', label: 'All services' },
  ...catalogue.map((service) => ({
    href: `/services/${service.slug}`,
    label: service.name
  })),
  { href: '/gardening', label: 'Gardening Services' }
]

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 3h3l1.5 4-2 1.5a12 12 0 0 0 6 6L17 12.5 21 14v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3zm5.2 12.7c-.2.6-1.2 1.1-1.7 1.2-.4 0-.9.2-3.1-.6-2.6-1-4.3-3.6-4.4-3.8-.2-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.6.8 2 .8 2.1.1.2 0 .3-.1.5l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.4.1.6-.1l.7-.8c.2-.2.3-.2.6-.1.2.1 1.6.8 1.9.9.3.2.4.2.5.3.1.3 0 .8-.2 1.4z" />
    </svg>
  )
}

export default function Chrome({ children }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [drop, setDrop] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [progress, setProgress] = useState(0)
  const lastY = useRef(0)
  const serviceActive = services.some((item) => item.href === pathname)

  useEffect(() => {
    setOpen(false)
    setDrop(false)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  useEffect(() => {
    document.body.classList.toggle('on-hero', pathname === '/' && !scrolled)
    return () => document.body.classList.remove('on-hero')
  }, [pathname, scrolled])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 8)
      setHidden(y > lastY.current && y > 90)
      lastY.current = y
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? y / height : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="boot" aria-hidden="true"><img src="/images/logo-on-dark.png" alt="" /></div>
      <a className="skip" href="#main">Skip to content</a>

      <div className="topbar">
        <div className="wrap">
          <div className="top-links">
            <a href="mailto:ho@emguae.ae">ho@emguae.ae</a>
            <a href="tel:+971505632381">+971 50 563 2381</a>
          </div>
          <span className="tagline">Excellence Always</span>
        </div>
      </div>

      <header className={`header${scrolled ? ' scrolled' : ''}${hidden && !open ? ' is-hidden' : ''}`}>
        <div className="wrap">
          <Link className="logo" href="/">
            <img className="for-light" src="/images/logo.png" alt="EMG Security Services LLC" />
            <img className="for-dark" src="/images/logo-on-dark.png" alt="" />
          </Link>
          <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            <span /><span /><span />
          </button>
          <nav className={`nav${open ? ' open' : ''}`} aria-label="Primary">
            <Link href="/" className={pathname === '/' ? 'is-active' : undefined} aria-current={pathname === '/' ? 'page' : undefined}>Home</Link>
            <Link href="/about" className={pathname === '/about' ? 'is-active' : undefined} aria-current={pathname === '/about' ? 'page' : undefined}>About Us</Link>
            <div className={`drop${drop ? ' open' : ''}`}>
              <button type="button" aria-haspopup="true" className={serviceActive ? 'is-active' : undefined} onClick={() => { if (window.innerWidth <= 1020) setDrop((value) => !value) }}>
                Our Services <i className="caret" />
              </button>
              <div className="drop-panel">
                {services.map((item) => (
                  <Link key={item.href} href={item.href} className={pathname === item.href ? 'is-active' : undefined}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/contact" className={pathname === '/contact' ? 'is-active' : undefined} aria-current={pathname === '/contact' ? 'page' : undefined}>Contact Us</Link>
            <Link className="btn btn-red" href="/contact">Get quotation <span className="arrow">→</span></Link>
          </nav>
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className="footer">
        <div className="wrap foot-grid">
          <div>
            <Link className="logo" href="/"><img src="/images/logo-on-dark.png" alt="EMG Security Services LLC" /></Link>
            <p>EMG is a facility management, security, consulting, and staffing provider established in the United Arab Emirates.</p>
          </div>
          <div>
            <h3>Services</h3>
            {catalogue.slice(0, 5).map((service) => (
              <Link key={service.name} href={`/services/${service.slug}`}>{service.name}</Link>
            ))}
            <Link className="view-services" href="/services">View services <span className="arrow">→</span></Link>
          </div>
          <div>
            <h3>Pages</h3>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Our Services</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div>
            <h3>Contact</h3>
            <a href="tel:+97148924995">04 892 4995</a>
            <a href="tel:+971505632381">050 563 2381</a>
            <a href="mailto:ho@emguae.ae">ho@emguae.ae</a>
            <p>315, Building Al Mulla -1, Al Muteena Street, Dubai, UAE</p>
          </div>
        </div>
        <div className="wrap legal">
          <span>Copyright © {new Date().getFullYear()} EMG Security Services LLC. All rights reserved.</span>
          <span>Excellence Always</span>
        </div>
      </footer>

      <div className="fabs">
        <a className="call" href="tel:+971505632381" aria-label="Call EMG"><PhoneIcon /></a>
        <a className="wa" href="https://wa.me/971505632381" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp EMG"><WhatsAppIcon /></a>
      </div>
    </>
  )
}
