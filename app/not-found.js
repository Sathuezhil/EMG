import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow dark">404</p>
        <h2>This page is not on the site.</h2>
        <p className="muted">The address may have changed. Head back to the homepage or send a quotation request.</p>
        <p><Link className="btn btn-red" href="/">Back home <span className="arrow">→</span></Link></p>
      </div>
    </section>
  )
}
