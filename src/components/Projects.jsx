import projects from '../data/projects.json'
import ProjectItem from './ProjectItem.jsx'

// FUTURE: filter buttons were removed for a cleaner look. The "tags" field is
// still in projects.json, so filtering by tag can be added back here later.

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <h2 className="section__heading">Projects</h2>

      <ul className="projects">
        {projects.map((p) => (
          <ProjectItem key={p.id} project={p} />
        ))}
      </ul>
    </section>
  )
}
