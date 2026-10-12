import Link from 'next/link'
import { Fragment } from 'react'
import CountUp from '@/components/CountUp'
import Meters from '@/components/Meters'
import QuoteForm from '@/components/QuoteForm'
import Reveal from '@/components/Reveal'
import SvcCard from '@/components/SvcCard'

const ticker = ['Security guards', 'Housekeeping', 'Gardening', 'MEP services', 'Skilled staffing', 'ISO 9001', 'ISO 27001']

export default function HomePage() {
  return (
    <>
      <section className="hero hero-center">
        <div className="hero-bg"><img src="/images/hero.jpg" alt="Dubai skyline" /></div>
        <div className="hero-shade" />
        <div className="wrap hero-copy">
          <p className="eyebrow"><span className="dot" /> EMG operations · Dubai</p>
          <h1>
            <span className="line"><span>Welcome to</span></span>
            <span className="line"><span>EMG Security <em>Services</em></span></span>
          </h1>
          <p className="lede">A single system for guarding, housekeeping, and grounds — trained people, live supervision, and a clear standard on every site across the UAE.</p>
          <div className="hero-actions">
            <Link className="btn btn-red" href="/contact">Get quotation <span className="arrow">→</span></Link>
            <a className="btn btn-ghost" href="#services">View services</a>
          </div>
        </div>
        <div className="hero-dock">
          <div className="wrap dock-row">
            <span><i className="live" /> Coverage live</span>
            <span>24/7 response</span>
            <span>4 ISO standards</span>
            <span>Security · Housekeeping · Gardening</span>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...ticker, ...ticker].map((item, index) => (
            <Fragment key={`${item}-${index}`}>
              <span>{item}</span>
              <i />
            </Fragment>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow dark">The EMG system</p>
            <h2>One desk for the whole property.</h2>
            <p>Guarding, cleaning, and landscaping run as one operation — the same way a control room watches a building, only the work happens on the ground.</p>
          </Reveal>
          <div className="system-grid">
            {[
              ['01', 'Guard', 'Static posts, patrols, gates, and a supervisor who checks the shift.'],
              ['02', 'Watch', 'Access, incidents, and handover notes stay visible to the site lead.'],
              ['03', 'Care', 'Housekeeping timed to the building, not to a generic checklist.'],
              ['04', 'Grounds', 'Lawns, irrigation, and planting kept for the UAE climate.']
            ].map(([num, title, text], index) => (
              <Reveal className="system-card" delay={index * 0.08} key={num}>
                <b>{num}</b>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap about-grid">
          <Reveal className="frame">
            <img src="/images/lobby.jpg" alt="A maintained commercial lobby" />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="eyebrow dark">EMG Security Services LLC</p>
            <h2>People, places, and the work that keeps them running.</h2>
            <p className="muted">EMG is a young and dynamic facility management, security, consulting, and staffing provider with a global perspective, established in the United Arab Emirates. The company is SA 8000:2014, ISO 27001:2013, ISO 26000:2010, and ISO 9001:2015 certified.</p>
            <p className="muted">Our Integrated Facility Management Solution combines people, services, and technology so facilities stay maintained, safe, and productive — and your team can stay on the work that matters.</p>
            <div className="chips">
              <span>Security</span><span>Housekeeping</span><span>Gardening</span><span>MEP</span><span>Staffing</span>
            </div>
            <p><Link className="btn btn-line" href="/about">About EMG <span className="arrow">→</span></Link></p>
          </Reveal>
        </div>
      </section>

      <section className="section band" id="services">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow dark">Services we provide</p>
            <h2>Three crews. One standard of care.</h2>
            <p>From the gate to the garden, EMG looks after the parts of a property people notice every day.</p>
          </Reveal>
          <div className="svc-layout">
            <SvcCard href="/security" className="svc svc-feature">
              <img src="/images/security.jpg" alt="Security monitoring" />
              <div className="svc-body">
                <small>01 — Protection</small>
                <h3>Security services</h3>
                <p>Reliable guard services that protect people, property, and assets with integrity and discipline.</p>
                <span className="more">Explore security</span>
              </div>
            </SvcCard>
            <div className="svc-stack">
              <SvcCard href="/housekeeping" className="svc" delay={0.1}>
                <img src="/images/housekeeping.jpg" alt="Professional housekeeping" />
                <div className="svc-body">
                  <small>02 — Care</small>
                  <h3>Housekeeping</h3>
                  <p>Spotless, hygienic premises for offices, homes, and hospitality.</p>
                </div>
              </SvcCard>
              <SvcCard href="/gardening" className="svc" delay={0.18}>
                <img src="/images/garden.jpg" alt="Garden maintenance" />
                <div className="svc-body">
                  <small>03 — Landscape</small>
                  <h3>Gardening</h3>
                  <p>Healthy outdoor spaces that hold up in the UAE climate.</p>
                </div>
              </SvcCard>
            </div>
          </div>
          <div className="more-row">
            <Reveal className="cap">
              <Link href="/contact?service=MEP%20Services">
                <strong>MEP services</strong>
                <span>Maintenance support that keeps building systems dependable.</span>
              </Link>
            </Reveal>
            <Reveal className="cap" delay={0.1}>
              <Link href="/contact?service=Skilled%20%26%20Semi-Skilled%20Staffing">
                <strong>Skilled &amp; semi-skilled staffing</strong>
                <span>People placed to match the site, the shift, and the standard.</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow dark">How we work</p>
            <h2>A clear path from first call to daily service.</h2>
          </Reveal>
          <div className="steps">
            {[
              ['01', 'Listen', 'We walk the property and note the risks, hours, and finish you expect.'],
              ['02', 'Plan', 'A crew, schedule, and supervision model matched to the site.'],
              ['03', 'Deploy', 'Trained people on post, with a supervisor who checks the work.'],
              ['04', 'Sustain', 'Regular reviews so the standard on day one is the standard next month.']
            ].map(([num, title, text], index) => (
              <Reveal className="step" delay={index * 0.08} key={num}>
                <b>{num}</b>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <div className="stats">
            <Reveal className="stat"><CountUp to={300} suffix="+" /><span>Satisfied customers</span></Reveal>
            <Reveal className="stat" delay={0.08}><CountUp to={500} suffix="+" /><span>Successful projects</span></Reveal>
            <Reveal className="stat" delay={0.16}><CountUp to={250} /><span>Professional workers</span></Reveal>
          </div>
          <Reveal className="section-head">
            <p className="eyebrow dark">Our specialist focus</p>
            <h2>Where the work concentrates.</h2>
          </Reveal>
          <Meters />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow dark">ISO certification</p>
            <h2>Standards you can ask to see.</h2>
          </Reveal>
          <div className="iso-grid">
            {[
              ['ISO 9001', '2015 · Quality management'],
              ['ISO 27001', '2013 · Information security'],
              ['ISO 26000', '2010 · Social responsibility'],
              ['SA 8000', '2014 · Social accountability']
            ].map(([name, detail], index) => (
              <Reveal className="iso" delay={index * 0.08} key={name}>
                <i className="diamond" />
                <em>{name}</em>
                <span>{detail}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section quote" id="quote">
        <div className="wrap quote-grid">
          <Reveal>
            <p className="eyebrow">Need help</p>
            <h2>Tell us the site. We’ll send a quotation.</h2>
            <p>Share a few details and the EMG team will come back with a service plan for security, housekeeping, or gardening.</p>
            <p>Call <a href="tel:+971505632381">050 563 2381</a> or email <a href="mailto:ho@emguae.ae">ho@emguae.ae</a>.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
