import { useEffect, useState } from 'react'

// Returns the id of the section currently crossing a thin band just above the
// middle of the screen, so exactly one nav item is highlighted at a time.
export function useActiveSection(ids) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const visible = new Set()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target.id)
          else visible.delete(e.target.id)
        })
        // Last matching section in page order wins when two overlap the band.
        const current = ids.filter((id) => visible.has(id)).pop()
        setActive(current ?? null)
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}
