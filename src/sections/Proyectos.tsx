import './Proyectos.css'

const proyectos = [
  {
    nombre: 'PanGeo — App',
    tipo: 'Trabajo de Fin de Grado',
    descripcion: 'Aplicación Android para el aprendizaje gamificado de geografía mediante mapas interactivos, con interacción táctil directa sobre mapas vectoriales (SVG) y sistema de experiencia y rankings.',
    stack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase'],
    enlace: 'https://github.com/Picadizo-4/PanGeo',
    enlaceLabel: 'Ver en GitHub',
  },
  {
    nombre: 'PanGeo — Web',
    tipo: 'Blog y proyecto en curso',
    descripcion: 'Plataforma web sobre geografía política: artículos, curiosidades y, próximamente, una sala de mapas con minijuegos interactivos.',
    stack: ['Odoo'],
    enlace: 'https://pangeo.odoo.com/',
    enlaceLabel: 'Visitar web',
  },
  {
    nombre: 'PanTypeo',
    tipo: 'Proyecto personal',
    descripcion: 'Aplicación de escritorio para entrenar mecanografía, construida con arquitectura MVVM estricta, separando por completo la interfaz de la lógica que calcula pulsaciones y penalizaciones en tiempo real.',
    stack: ['Python', 'PyQt6', 'PyInstaller'],
    enlace: 'https://github.com/Picadizo-4/Pantypeo',
    enlaceLabel: 'Ver en GitHub',
  },
]

function Proyectos() {
  return (
    <section id="proyectos" className="section-card">
      <p className="section-eyebrow">05 — projects.list()</p>
      <h2 className="section-title">Proyectos</h2>

      <div className="proyectos-grid">
        {proyectos.map(proyecto => (
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