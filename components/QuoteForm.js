'use client'

import { useState } from 'react'
import services from '@/lib/services'

const options = [
  ...services.map((service) => service.name),
  'Gardening Services',
  'MEP Services',
  'Skilled & Semi-Skilled Staffing'
]

export default function QuoteForm({ initialService = '', light = false }) {
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)
  const selected = options.includes(initialService) ? initialService : ''

  async function onSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    if (data.get('_honey')) return
    setSending(true)
    setStatus('')
    try {
      const response = await fetch('https://formsubmit.co/ajax/ho@emguae.ae', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data
      })
      if (!response.ok) throw new Error('Request failed')
      form.reset()
      setStatus('sent')
    } catch {
      const body = [
        `Name: ${data.get('name') || ''}`,
        `Email: ${data.get('email') || ''}`,
        `Phone: ${data.get('phone') || ''}`,
        `Service: ${data.get('service') || ''}`,
        '',
        data.get('message') || ''
      ].join('\n')
      window.location.href = `mailto:ho@emguae.ae?subject=${encodeURIComponent('Quotation request from EMG website')}&body=${encodeURIComponent(body)}`
      setStatus('mail')
    } finally {
      setSending(false)
    }
  }

  return (
    <form className={light ? 'light-form' : undefined} onSubmit={onSubmit}>
      <input className="honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="_subject" value="Quotation request from the EMG website" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <label>Full name<input name="name" required placeholder="Your name" /></label>
      <label>Email address<input type="email" name="email" required placeholder="name@company.com" /></label>
      <label>Phone number<input name="phone" required placeholder="05x xxx xxxx" /></label>
      <label>Choose service
        <select name="service" defaultValue={selected} required key={selected}>
          <option value="">Select services</option>
          {options.map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>
      <label>Your message<textarea name="message" placeholder="Property type, location, and what you need" /></label>
      <button className="btn btn-red" type="submit" disabled={sending}>
        {sending ? 'Sending…' : 'Send message'} <span className="arrow">→</span>
      </button>
      <p className={`form-note${status === 'sent' ? ' ok' : ''}`} role="status">
        {status === 'sent' && 'Message sent. Our team will contact you shortly.'}
        {status === 'mail' && 'Your email app is opening so the message can be sent directly.'}
      </p>
    </form>
  )
}
