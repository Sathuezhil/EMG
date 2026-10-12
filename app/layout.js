import './globals.css'
import { Fraunces, Outfit } from 'next/font/google'
import Chrome from '@/components/Chrome'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap'
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap'
})

export const metadata = {
  title: {
    default: 'EMG Security Services LLC – Integrated Facility Management',
    template: '%s – EMG Security Services LLC'
  },
  description: 'EMG Security Services LLC provides professional security, housekeeping, and gardening services across the UAE.',
  icons: { icon: '/favicon.svg' }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`}>
      <body>
        <Chrome>{children}</Chrome>
      </body>
    </html>
  )
}
