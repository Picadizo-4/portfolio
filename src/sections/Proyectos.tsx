import { useState } from 'react'
import './Proyectos.css'
import { useLanguage } from '../hooks/useLanguage'
import pangeoVideo from '../assets/pangeo-preview.mp4'
import pantypeoVideo from '../assets/pantypeo-preview.mp4'

const videosPorProyecto: Record<string, string> = {
  'PanGeo — App': pangeoVideo,
  'PanTypeo': pantypeoVideo,
}

function Proyectos() {
  const { t } = useLanguage()
  const [expandido, setExpandido] = useState<string | null>(null)

  const toggleExpandido = (nombre: string) => {
    setExpandido(prev => (prev === nombre ? null : nombre))
  }

  return (
    <section id="proyectos" className="section-card">
      <p className="section-eyebrow">{t.proyectos.eyebrow}</p>
      <h2 className="section-title">{t.proyectos.titulo}</h2>

      <div className="proyectos-grid">
        {t.proyectos.items.map(proyecto => {
          const video = videosPorProyecto[proyecto.nombre]
          const isExpanded = expandido === proyecto.nombre

          return (
            <div key={proyecto.nombre} className="proyecto-card">
              <p className="proyecto-tipo">{proyecto.tipo}</p>
              <h3 className="proyecto-nombre">{proyecto.nombre}</h3>
              <p className="proyecto-desc">{proyecto.descripcion}</p>
              <div className="proyecto-stack">
                {proyecto.stack.map(tech => (
                  <span key={tech} className="proyecto-tag">{tech}</span>
                ))}
              </div>

              {isExpanded && (
                <div className="proyecto-expandido">
                  {video && (
                    <video
                      className="proyecto-video"
                      src={video}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  )}
                  <p className="proyecto-reto">{proyecto.reto}</p>
                </div>
              )}

              <div className="proyecto-footer">
                <button className="proyecto-toggle" onClick={() => toggleExpandido(proyecto.nombre)}>
                  {isExpanded ? t.proyectos.verMenos : t.proyectos.verMas}
                </button>
                <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer" className="proyecto-link">
                  {proyecto.enlaceLabel} →
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Proyectos