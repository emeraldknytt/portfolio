import { useEffect, useState } from 'react'

// Theme is a data-theme attribute on <html>; the colours themselves are CSS
// variables in styles/index.css. index.html sets the saved theme before paint.
export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'dark',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Storage can be blocked (private mode); the toggle still works for this visit.
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return [theme, toggle]
}
