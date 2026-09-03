import { useState, useRef, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'
import './Navbar.css'

const sections = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'skills', label: 'Skills' },
  { id: 'trayectoria', label: 'Trayectoria' },
  { id: 'formacion', label: 'Formación' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
]

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [cvOpen, setCvOpen] = useState(false)
  const cvRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cvRef.current && !cvRef.current.contains(event.target as Node)) {
        setCvOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    let ticking = false

    function updateProgress() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(progress)
      ticking = false
    }

    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(updateProgress)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-bar">
        <a href="#hero" className="navbar-logo">MOP</a>

        <ul className="navbar-links">
          {sections.map(section => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <div className="navbar-cv-wrapper" ref={cvRef}>
            <button className="navbar-button" onClick={() => setCvOpen(!cvOpen)}>
              CV ↓
            </button>
            {cvOpen && (
              <div className="navbar-cv-dropdown">
                <a href="/cv-MiguelAngelOrdonezPicadizo-es.pdf" download onClick={() => setCvOpen(false)}>
                  Español
                </a>
                <a href="/cv-MiguelAngelOrdonezPicadizo-en.pdf" download onClick={() => setCvOpen(false)}>
                  English
                </a>
              </div>
            )}
          </div>
          <button className="navbar-button">EN</button>
          <button className="navbar-button" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>

      <div className="navbar-progress-track">
        <div className="navbar-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>

      
    </nav>
  )
}

export default Navbar