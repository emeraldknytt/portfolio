import { site } from '../data/site.js'

export default function About() {
  return (
    <section id="about" className="section container">
      <h2 className="section__heading">About me</h2>
      <div className="prose">
        {site.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
