import { Suspense } from 'react'
import ContactView from '@/components/ContactView'

export const metadata = {
  title: 'Contact Us',
  description: 'Contact EMG Security Services LLC in Dubai for security, housekeeping, and gardening quotations.'
}

export default function ContactPage() {
  return (
    <Suspense fallback={<section className="section"><div className="wrap"><p>Loading the form…</p></div></section>}>
      <ContactView />
    </Suspense>
  )
}
