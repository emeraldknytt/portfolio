import { useState } from 'react'
import { site } from '../data/site.js'

// Entries come from "certifications" in src/data/site.js.
export default function Certifications() {
  return (
    <section id="certifications" className="section container">
      <h2 className="section__heading">Professional certification</h2>
      <ul className="projects">
        {site.certifications.map((cert) => (
          <CertificationItem key={cert.title + cert.issuer} cert={cert} />
        ))}
      </ul>
    </section>
  )
}

function CertificationItem({ cert }) {
  const [open, setOpen] = useState(false)
  const { title, issuer, detail, date, image } = cert
  const slug = `${title}-${issuer}`.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const buttonId = `cert-${slug}-button`
  const panelId = `cert-${slug}-panel`

  return (
    <li className="project">
      <h3 className="project__heading">
        {/* Same expand/collapse behaviour as a project row. */}
        <button
          type="button"
          id={buttonId}
          className="project__toggle cert__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
        >
          <svg
            className="cert__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M2 9l10-5 10 5-10 5-10-5z" />
            <path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5" />
            <path d="M22 9v6" />
          </svg>

          <span className="cert__text">
            <span className="project__title">{title}</span>
            <span className="cert__issuer">
              {issuer}
              {detail ? ` · ${detail}` : ''}
            </span>
            <span className="cert__date">{date}</span>
          </span>

          <span className="project__indicator" aria-hidden="true">
            {open ? '−' : '+'}
          </span>
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
          {image && (
            <img
              className="cert__image"
              src={image}
              alt={`${title} certificate from ${issuer}`}
              loading="lazy"
            />
          )}
        </div>
      </div>
    </li>
  )
}
