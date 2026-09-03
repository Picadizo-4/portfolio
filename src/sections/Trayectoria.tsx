import { useState } from 'react'
import './Trayectoria.css'
import furgonetaImg from '../assets/furgoneta-dhl.png'

const experiencias = [
  {
    periodo: 'Ene 2026 — May 2026',
    empresa: 'SweetCode',
    rol: 'Desarrollador en prácticas',
    descripcion: 'Desarrollo y personalización de funcionalidades mediante código, resolución de incidencias técnicas en entornos de producción y automatización de flujos de trabajo internos.',
    tags: ['Desarrollo', 'Producción', 'Automatización'],
  },
  {
    periodo: '2023 — 2024',
    empresa: 'Deutsche Post / DHL',
    rol: 'Operador logístico internacional · Wertheim am Main, Alemania',
    descripcion: 'Integración en entornos laborales multiculturales, gestión de documentación sensible y diseño de rutas para maximizar eficiencia y reducir tiempos.',
    tags: ['Internacional', 'Procesos', 'Adaptabilidad'],
  },
]

function Trayectoria() {
  const [furgonetaActiva, setFurgonetaActiva] = useState(false)

  const lanzarFurgoneta = () => {
    if (furgonetaActiva) return
    setFurgonetaActiva(true)
    setTimeout(() => setFurgonetaActiva(false), 2500)
  }

  return (
    <section id="trayectoria" className="section-card">
      <p className="section-eyebrow">03 — experience.log</p>
      <h2 className="section-title">Trayectoria</h2>

      <div className="trayectoria-list">
        {experiencias.map(exp => {
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