import { useMemo, useState } from 'react'
import { site } from '../data/site.js'
import { useTheme } from '../hooks/useTheme.js'
import { useActiveSection } from '../hooks/useActiveSection.js'

export default function Nav({ sections }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, toggleTheme] = useTheme()
  const ids = useMemo(() => sections.map((s) => s.id), [sections])
  const active = useActiveSection(ids)

  return (
    <header className="nav">
      <div className="container nav__bar">
        <a className="link nav__brand" href="#top" onClick={() => setMenuOpen(false)}>
          {site.name}
        </a>

        <button
          type="button"
          className="link nav__menu-button"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <nav id="nav-links" className="nav__links" data-open={menuOpen} aria-label="Sections">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`link${active === s.id ? ' is-active' : ''}`}
              aria-current={active === s.id ? 'location' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {s.label}
            </a>
          ))}
          <button
            type="button"
            className="link nav__theme"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {/* The icon shows the mode the page is in: moon = dark, sun = light.
                It is drawn in the current text colour, so it is white on black
                in dark mode and near-black on white in light mode. */}
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {theme === 'dark' ? (
                <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />
              ) : (
                <>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}
