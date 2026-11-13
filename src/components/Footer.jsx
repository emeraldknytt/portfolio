import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer container">
      <p>
        {site.name} · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
