import './Proyectos.css'
import { useLanguage } from '../hooks/useLanguage'

function Proyectos() {
  const { t } = useLanguage()

  return (
    <section id="proyectos" className="section-card">
      <p className="section-eyebrow">{t.proyectos.eyebrow}</p>
      <h2 className="section-title">{t.proyectos.titulo}</h2>

      <div className="proyectos-grid">
        {t.proyectos.items.map(proyecto => (
          <div key={proyecto.nombre} className="proyecto-card">
            <p className="proyecto-tipo">{proyecto.tipo}</p>
            <h3 className="proyecto-nombre">{proyecto.nombre}</h3>
            <p className="proyecto-desc">{proyecto.descripcion}</p>
            <div className="proyecto-stack">
              {proyecto.stack.map(tech => (
                <span key={tech} className="proyecto-tag">{tech}</span>
              ))}
            </div>
            <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer" className="proyecto-link">
              {proyecto.enlaceLabel} →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Proyectos