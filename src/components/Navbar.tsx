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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cvRef.current && !cvRef.current.contains(event.target as Node)) {
        setCvOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
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
    </nav>
  )
}

export default Navbar