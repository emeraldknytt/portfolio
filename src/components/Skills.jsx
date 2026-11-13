import { site } from '../data/site.js'

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <h2 className="section__heading">Skills</h2>
      <dl className="skills">
        {site.skills.map((s) => (
          <div key={s.group} className="skills__row">
            <dt className="label">{s.group}</dt>
            <dd>{s.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
