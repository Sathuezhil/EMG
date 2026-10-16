import Link from 'next/link'
import Reveal from '@/components/Reveal'
import services from '@/lib/services'

const groups = [
  {
    title: 'Security',
    text: 'Guards, monitoring, and door posts.',
    slugs: [
      'private-guarding-services',
      'lifeguard-services',
      'cctv-control-services',
      'events-and-club-bouncer-security-services',
      'parking-control-services',
      'lady-security-guard',
      'personal-security-service'
    ]
  },
  {
    title: 'Facility management',
    text: 'The building looked after as one job.',
    slugs: ['facility-management-services']
  },
  {
    title: 'Cleaning',
    text: 'Homes, offices, turnovers, and deep cleans.',
    slugs: [
      'housekeeping-services',
      'building-cleaning-services',
      'deep-cleaning-services',
      'residential-cleaning',
      'apartment-and-villa-cleaning',
      'commercial-cleaning',
      'corporate-office-cleaning',
      'vacation-rental-and-airbnb',
      'move-in-move-out',
      'post-construction-cleaning',
      'kitchen-and-bath-sanitization',
      'disinfection-and-sanitization'
    ]
  }
]

export const metadata = {
  title: 'Our Services',
  description: 'Private guarding, facility management, housekeeping, CCTV, and cleaning services from EMG Security Services LLC across the UAE.'
}

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <img src="/images/lobby.jpg" alt="" />
        <div className="shade" />
        <div className="wrap">
          <p className="crumb">Home / Services</p>
          <h1>Our services</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head" from="left">
            <p className="eyebrow dark">EMG Security Services LLC</p>
            <h2>Choose the service. Open the page.</h2>
            <p>Each card opens a detail page with the photo and what is included.</p>
          </Reveal>
          {groups.map((group) => (
            <div className="service-group" key={group.title}>
              <Reveal>
                <div className="service-group-head">
                  <h3>{group.title}</h3>
                  <p>{group.text}</p>
                </div>
              </Reveal>
              <div className="service-board">
                {group.slugs.map((slug) => {
                  const service = services.find((item) => item.slug === slug)
                  if (!service) return null
                  return (
                    <Link className="service-tile" href={`/services/${service.slug}`} key={service.slug}>
                      <img src={service.image} alt="" />
                      <span>
                        <strong>{service.name}</strong>
                        <em>View <i>→</i></em>
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
          <p className="service-cta">
            <Link className="btn btn-red" href="/contact">Get quotation <span className="arrow">→</span></Link>
          </p>
        </div>
      </section>
    </>
  )
}
