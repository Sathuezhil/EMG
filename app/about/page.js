import CountUp from '@/components/CountUp'
import Meters from '@/components/Meters'
import Reveal from '@/components/Reveal'
import Link from 'next/link'

export const metadata = {
  title: 'About Us',
  description: 'About EMG Security Services LLC, a Dubai facility management company providing security, housekeeping, and gardening across the UAE.'
}

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <img src="/images/office.jpg" alt="" />
        <div className="shade" />
        <div className="wrap">
          <p className="crumb">Home / About us</p>
          <h1>About EMG Security Services</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <Reveal className="prose">
            <p className="eyebrow dark">The company</p>
            <h2>Safety, cleanliness, and comfort — looked after as one job.</h2>
            <p>At EMG Security Services, we take pride in providing reliable, professional, and high-quality manpower solutions across the UAE. With years of experience in the field, our mission is to ensure safety, cleanliness, and comfort for clients — residential, commercial, or industrial.</p>
            <p>We deliver security, housekeeping, and gardening services that meet international standards. Our Integrated Facility Management Solution combines people, services, and technology so workplaces stay well maintained, safe, and productive.</p>
            <p>The range includes security, housekeeping, gardening, MEP services, and skilled and semi-skilled staffing. Clients use IFMS to manage people, workplaces, and processes, then stay focused on their own work.</p>
          </Reveal>
          <Reveal className="frame" delay={0.12}>
            <img src="/images/dubai-night.jpg" alt="Dubai at night" />
          </Reveal>
        </div>
      </section>
      <section className="section band">
        <div className="wrap">
          <div className="stats">
            <Reveal className="stat"><CountUp to={300} suffix="+" /><span>Satisfied customers</span></Reveal>
            <Reveal className="stat" delay={0.08}><CountUp to={500} suffix="+" /><span>Successful projects</span></Reveal>
            <Reveal className="stat" delay={0.16}><CountUp to={250} /><span>Professional workers</span></Reveal>
          </div>
          <div className="mission">
            <Reveal>
              <article>
                <p className="eyebrow">Purpose</p>
                <h2>Our mission</h2>
                <p>We are committed to excellence, integrity, and customer satisfaction — providing trained personnel and thoughtful solutions that create secure and welcoming environments for homes, businesses, and communities.</p>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="vision">
                <p className="eyebrow">Direction</p>
                <h2>Our vision</h2>
                <p>To be the UAE’s most trusted service provider in security, cleaning, and landscaping — recognized for professionalism, care, and safer, cleaner, greener spaces.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow dark">Our specialist focus</p>
            <h2>Experience the standard, then see where it is applied.</h2>
          </Reveal>
          <Meters />
          <Reveal className="cta-band">
            <div>
              <h2>Work with a team that stays on the brief.</h2>
              <p>Tell us about the property and the service you need.</p>
            </div>
            <Link className="btn btn-red" href="/contact">Get a quote <span className="arrow">→</span></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
