import { useState } from 'react'
import { site } from '../data/site.js'

const ENDPOINT = 'https://api.web3forms.com/submit'

export default function Contact() {
  // status: idle | sending | success | error
  const [status, setStatus] = useState('idle')
  const [errorText, setErrorText] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    // Honeypot: real visitors never see or tick this box. If it is ticked,
    // pretend it worked and send nothing.
    if (data.botcheck) {
      setStatus('success')
      return
    }

    if (!site.web3formsKey || site.web3formsKey.startsWith('YOUR_')) {
      setErrorText('The contact form is not set up yet. Please use LinkedIn instead.')
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject: `Portfolio message from ${data.name}`,
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      })
      const json = await res.json()
      if (!json.success) throw new Error(json.message)
      form.reset()
      setStatus('success')
    } catch {
      setErrorText('Something went wrong and your message was not sent. Please try again, or reach me on LinkedIn.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section container">
      <h2 className="section__heading">Contact</h2>

      <form className="form" onSubmit={handleSubmit}>
        <label className="form__field">
          <span className="label">Name</span>
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label className="form__field">
          <span className="label">Email</span>
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label className="form__field">
          <span className="label">Message</span>
          <textarea name="message" rows="5" required />
        </label>

        {/* Honeypot spam trap: hidden from people and screen readers. */}
        <input
          type="checkbox"
          name="botcheck"
          className="form__honeypot"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <button type="submit" className="link" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message →'}
        </button>

        <p className="form__status" role="status" aria-live="polite">
          {status === 'success' && 'Thanks. Your message was sent and I’ll reply soon.'}
          {status === 'error' && errorText}
        </p>
      </form>

      <div className="contact__links">
        <a className="link" href={site.links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn →
        </a>
        <a className="link" href={site.links.github} target="_blank" rel="noreferrer">
          GitHub →
        </a>
        <a className="link contact__cv" href={site.cvFile} download>
          Download CV ↓
        </a>
      </div>
    </section>
  )
}
