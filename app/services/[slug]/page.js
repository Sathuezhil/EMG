import { notFound } from 'next/navigation'
import ServicePage from '@/components/ServicePage'
import services, { getService } from '@/lib/services'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return { title: 'Service' }
  return {
    title: service.name,
    description: `${service.name} from EMG Security Services LLC across the UAE.`
  }
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  return (
    <ServicePage
      crumb={`Services / ${service.name}`}
      title={service.name}
      image={service.image}
      kicker={service.kicker}
      heading={service.heading}
      paragraphs={service.paragraphs}
      sideImage={service.sideImage}
      sideAlt={service.sideAlt}
      listKicker="What is included"
      listHeading="The work on this service."
      items={service.items}
      ctaTitle="Tell us the site."
      ctaText="Share the property and the hours. We will come back with a quotation for this service."
      ctaHref={`/contact?service=${encodeURIComponent(service.name)}`}
      ctaLabel="Request this service"
    />
  )
}
