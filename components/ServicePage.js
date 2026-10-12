import Link from 'next/link'
import Reveal from '@/components/Reveal'

export default function ServicePage({
  crumb,
  title,
  image,
  kicker,
  heading,
  paragraphs,
  sideImage,
  sideAlt,
  listKicker,
  listHeading,
  items,
  ctaTitle,
  ctaText,
  ctaHref,
  ctaLabel
}) {
  return (
    <>
      <section className="page-hero">
        <img src={image} alt="" />
        <div className="shade" />
        <div className="wrap">
          <p className="crumb">{crumb}</p>
          <h1>{title}</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <Reveal className="prose">
            <p className="eyebrow dark">{kicker}</p>
            <h2>{heading}</h2>
            {paragraphs.map((text) => <p key={text}>{text}</p>)}
          </Reveal>
          <Reveal className="frame" delay={0.12}>
            <img src={sideImage} alt={sideAlt} />
          </Reveal>
        </div>
      </section>
      <section className="section band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow dark">{listKicker}</p>
            <h2>{listHeading}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="checklist">
              {items.map((item) => <li key={item}><i /><span>{item}</span></li>)}
            </ul>
          </Reveal>
          <Reveal className="cta-band" delay={0.1}>
            <div>
              <h2>{ctaTitle}</h2>
              <p>{ctaText}</p>
            </div>
            <Link className="btn btn-red" href={ctaHref}>{ctaLabel} <span className="arrow">→</span></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
