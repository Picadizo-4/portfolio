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
    function handleScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
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
            <button
              className="navbar-button"
              onClick={() => setCvOpen(!cvOpen)}
            >
              CV ↓
            </button>
            {cvOpen && (
              <div className="navbar-cv-dropdown">
                <a href="/cv-es.pdf" download onClick={() => setCvOpen(false)}>
                  Español
                </a>
                <a href="/cv-en.pdf" download onClick={() => setCvOpen(false)}>
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
      <div className="navbar-progress" style={{ width: `${scrollProgress}%` }} />
    </nav>
  )
}

export default Navbar