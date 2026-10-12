'use client'

import { useSearchParams } from 'next/navigation'
import QuoteForm from '@/components/QuoteForm'
import Reveal from '@/components/Reveal'

const cards = [
  { label: 'Phone', lines: ['04 892 4995', '050 563 2381'], href: 'tel:+971505632381' },
  { label: 'Email', lines: ['ho@emguae.ae'], href: 'mailto:ho@emguae.ae' },
  { label: 'Office', lines: ['315, Building Al Mulla -1', 'Al Muteena Street, Dubai UAE'], href: 'https://maps.google.com/?q=315+Building+Al+Mulla+Al+Muteena+Street+Dubai' }
]

export default function ContactView() {
  const service = useSearchParams().get('service') || ''

  return (
    <>
      <section className="page-hero">
        <img src="/images/dubai-night.jpg" alt="" />
        <div className="shade" />
        <div className="wrap">
          <p className="crumb">Home / Contact</p>
          <h1>Get in touch</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="info-cards">
            {cards.map((card, index) => (
              <Reveal className="info" delay={index * 0.08} key={card.label}>
                <span>{card.label}</span>
                <a href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <strong>{card.lines[0]}{card.lines[1] ? <><br />{card.lines[1]}</> : null}</strong>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="contact-grid">
            <Reveal>
              <p className="eyebrow dark">Quotation</p>
              <h2>Tell us what the property needs.</h2>
              <p className="muted">Send the service, a phone number, and a short note. The EMG team will reply with the next step.</p>
              <QuoteForm initialService={service} light />
            </Reveal>
            <Reveal className="map-frame" delay={0.1}>
              <iframe
                title="EMG office on Google Maps"
                src="https://maps.google.com/maps?q=315%20Building%20Al%20Mulla%20Al%20Muteena%20Street%20Dubai&z=15&output=embed"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
