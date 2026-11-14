import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Certifications from './components/Certifications.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

// The sections shown in the nav bar, in page order.
// To add a section later (e.g. "Designs"), add it here and render it below.
const SECTIONS = [
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About me' },
  { id: 'contact', label: 'Contact' },
]

export default function App() {
  return (
    <>
      <a className="skip-link link" href="#projects">
        Skip to projects
      </a>
      <Nav sections={SECTIONS} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
