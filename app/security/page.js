import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Security Guard Services',
  description: 'Manned guarding, access control, event security, and 24/7 response from EMG Security Services LLC across the UAE.'
}

export default function SecurityPage() {
  return (
    <ServicePage
      crumb="Services / Security"
      title="Security guard services"
      image="/images/security.jpg"
      kicker="Protection"
      heading="Vigilance, discipline, and a calm presence on site."
      paragraphs={[
        'At EMG Security Services LLC, we provide reliable and professional security guard services designed to protect people, property, and assets with integrity and excellence. Our trained personnel handle a wide range of security challenges — so clients across the UAE can work with peace of mind.',
        'Guards are carefully selected, fully vetted, and trained to international security standards. Backed by our ISO-certified management system, every guard is prepared for efficient protection, a quick response, and courteous service. Residential complexes, commercial buildings, construction sites, and events are covered with the same discipline.'
      ]}
      sideImage="/images/lobby.jpg"
      sideAlt="A building entrance under watch"
      listKicker="Security solutions"
      listHeading="Coverage shaped around the risk, not a generic post."
      items={[
        'Manned guarding, static and patrol',
        'Access control and gatehouse management',
        'Corporate and office security',
        'Retail and mall security',
        'Event security management',
        'Construction site security',
        'VIP and executive protection',
        '24/7 monitoring and rapid response teams'
      ]}
      ctaTitle="Every site has its own risk profile."
      ctaText="We design a security plan around your operations, then combine human vigilance with modern systems."
      ctaHref="/contact?service=Security%20Guard%20Services"
      ctaLabel="Request security"
    />
  )
}
