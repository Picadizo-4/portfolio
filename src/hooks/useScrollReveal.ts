import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const elementos = document.querySelectorAll('.section-card')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    elementos.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}