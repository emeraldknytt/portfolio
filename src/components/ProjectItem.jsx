import { useState } from 'react'

export default function ProjectItem({ project }) {
  const [open, setOpen] = useState(false)
  const { id, title, summary, description, tools, image, githubUrl } = project
  const buttonId = `project-${id}-button`
  const panelId = `project-${id}-panel`

  return (
    <li className="project">
      <h3 className="project__heading">
        {/* A real <button>, so Enter and Space toggle it without extra code. */}
        <button
          type="button"
          id={buttonId}
          className="project__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="project__title-row">
            <span className="project__title">{title}</span>
            <span className="project__indicator" aria-hidden="true">
              {open ? '−' : '+'}
            </span>
          </span>
          <span className="project__summary">{summary}</span>
        </button>
      </h3>

      <div
        id={panelId}
        className="project__panel"
        role="region"
        aria-labelledby={buttonId}
        data-open={open}
      >
        <div className="project__panel-inner">
          <div className="project__body">
            <p>{description}</p>

            <p className="project__tools">
              <span className="label">Tools used</span>
              {tools.join(', ')}
            </p>

            {image && (
              <img
                className="project__image"
                src={image}
                alt={`Screenshot of the ${title} workflow`}
                loading="lazy"
              />
            )}

            {/* FUTURE: render project.videoUrl (demo video/GIF) and
                project.caseStudy (problem → solution → result) here. */}

            {githubUrl && (
              <a className="link" href={githubUrl} target="_blank" rel="noreferrer">
                View on GitHub →
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}
