import { site } from '../data/site.js'

export default function Hero() {
  return (
    <section id="top" className="hero container">
      {/* Each word of the name sits on its own line (first name above surname). */}
      <h1 className="hero__name" aria-label={site.name}>
        {site.name.split(' ').map((word) => (
          <span key={word} className="hero__name-line">
            {word}
          </span>
        ))}
      </h1>
      <p className="hero__title">{site.title}</p>
      <p className="hero__tagline">{site.tagline}</p>
      {/* Plain text, not a link: it just points visitors down the page. */}
      <p className="hero__explore">Explore my projects ↓</p>
    </section>
  )
}
