import { useState } from 'react'
import './Trayectoria.css'
import furgonetaImg from '../assets/furgoneta-dhl.png'
import { useLanguage } from '../hooks/useLanguage'

function Trayectoria() {
  const { t } = useLanguage()
  const [furgonetaActiva, setFurgonetaActiva] = useState(false)

  const lanzarFurgoneta = () => {
    if (furgonetaActiva) return
    setFurgonetaActiva(true)
    setTimeout(() => setFurgonetaActiva(false), 2500)
  }

  return (
    <section id="trayectoria" className="section-card">
      <p className="section-eyebrow">{t.trayectoria.eyebrow}</p>
      <h2 className="section-title">{t.trayectoria.titulo}</h2>

      <div className="trayectoria-list">
        {t.trayectoria.items.map(exp => {
          const esDHL = exp.empresa === 'Deutsche Post / DHL'
          return (
            <div
              key={exp.empresa}
              className={`trayectoria-item ${esDHL ? 'trayectoria-clickable' : ''}`}
              onClick={esDHL ? lanzarFurgoneta : undefined}
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
    </section>
  )
}

export default Trayectoria