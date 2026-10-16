import Link from 'next/link'
import services from '@/lib/services'

export default function ServiceCatalogue() {
  return (
    <div className="catalogue">
      {services.map((service) => (
        <Link key={service.name} href={`/services/${service.slug}`}>
          <span>{service.name}</span>
        </Link>
      ))}
    </div>
  )
}
