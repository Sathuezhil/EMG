import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Housekeeping Services',
  description: 'Professional housekeeping for offices, residences, and hospitality across the UAE by EMG Facility Management.'
}

export default function HousekeepingPage() {
  return (
    <ServicePage
      crumb="Services / Housekeeping"
      title="Housekeeping services"
      image="/images/housekeeping.jpg"
      kicker="Care"
      heading="Premises that stay spotless, hygienic, and welcoming."
      paragraphs={[
        'At EMG Facility Management, housekeeping is there to keep a place comfortable for everyone who works in it or visits. Clean rooms support health, focus, and the impression a property leaves.',
        'Our teams follow international cleaning standards and use proven techniques, suitable equipment, and products chosen for the surface. Offices, commercial buildings, residential complexes, and hospitality venues each get a schedule built around operational hours.',
        'Supervisors check the work so tasks finish on time and to the same standard every shift. You stay with your business. We keep the environment clean, safe, and pleasant.'
      ]}
      sideImage="/images/office.jpg"
      sideAlt="A clean commercial interior"
      listKicker="Housekeeping solutions"
      listHeading="Daily care, and the deeper cleans when a site needs them."
      items={[
        'Daily office and facility cleaning',
        'Deep cleaning and sanitization',
        'Floor and carpet care',
        'Washroom cleaning and maintenance',
        'Window and glass cleaning',
        'Pantry and common area upkeep',
        'Waste management and disposal',
        'Post-construction and event cleaning'
      ]}
      ctaTitle="A cleaning plan that fits the building’s hours."
      ctaText="Share the property type and we’ll match a crew and a schedule."
      ctaHref="/contact?service=Housekeeping%20Services"
      ctaLabel="Request housekeeping"
    />
  )
}
