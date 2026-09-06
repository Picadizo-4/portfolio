import { useState } from 'react'
import './Trayectoria.css'
import furgonetaImg from '../assets/furgoneta-dhl.png'
import ConfettiWordPress from '../components/ConfettiWordPress'
import { useLanguage } from '../hooks/useLanguage'

function Trayectoria() {
  const { t } = useLanguage()
  const [furgonetaActiva, setFurgonetaActiva] = useState(false)
  const [confettiActivo, setConfettiActivo] = useState(false)

  const lanzarFurgoneta = () => {
    if (furgonetaActiva) return
    setFurgonetaActiva(true)
    setTimeout(() => setFurgonetaActiva(false), 2500)
  }

  const lanzarConfetti = () => {
    if (confettiActivo) return
    setConfettiActivo(true)
    setTimeout(() => setConfettiActivo(false), 4500)
  }

  return (
    <section id="trayectoria" className="section-card">
      <p className="section-eyebrow">{t.trayectoria.eyebrow}</p>
      <h2 className="section-title">{t.trayectoria.titulo}</h2>

      <div className="trayectoria-list">
        {t.trayectoria.items.map(exp => {
          const esDHL = exp.empresa === 'Deutsche Post / DHL'
          const esSweetCode = exp.empresa === 'SweetCode'
          const clicable = esDHL || esSweetCode
          const handler = esDHL ? lanzarFurgoneta : esSweetCode ? lanzarConfetti : undefined

          return (
            <div
              key={exp.empresa}
              className={`trayectoria-item ${clicable ? 'trayectoria-clickable' : ''}`}
              onClick={handler}
            >
              <p className="trayectoria-periodo">{exp.periodo}</p>
              <div className="trayectoria-content">
                <h3 className="trayectoria-empresa">{exp.empresa}</h3>
                <p className="trayectoria-rol">{exp.rol}</p>
                <p className="trayectoria-desc">{exp.descripcion}</p>
                <div className="trayectoria-tags">
                  {exp.tags.map(tag => (
                    <span key={tag} className="trayectoria-tag">{tag}</span>
                  ))}
                </div>
              </div>
              {esDHL && furgonetaActiva && (
                <img src={furgonetaImg} alt="" className="furgoneta-dhl" />
              )}
            </div>
          )
        })}
      </div>

      {confettiActivo && <ConfettiWordPress />}
    </section>
  )
}

export default Trayectoria