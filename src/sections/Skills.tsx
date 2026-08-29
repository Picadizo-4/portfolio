import { useState } from 'react'
import './Skills.css'

const skillCategories = [
  {
    title: 'Lenguajes',
    description: 'Los lenguajes con los que construyo lógica y aplicaciones.',
    skills: [
      { name: 'Java', desc: 'Lenguaje orientado a objetos, base de Android y de muchos sistemas empresariales.' },
      { name: 'C#', desc: 'Lenguaje de Microsoft, usado en .NET para aplicaciones de escritorio y web.' },
      { name: 'Python', desc: 'Lenguaje versátil, usado aquí en PanTypeo con arquitectura MVVM y PyQt6.' },
      { name: 'Kotlin', desc: 'Lenguaje moderno para Android, usado en PanGeo junto a Jetpack Compose.' },
    ],
  },
  {
    title: 'Arquitectura y lógica',
    description: 'Cómo organizo y estructuro el código para que escale bien.',
    skills: [
      { name: 'MVVM', desc: 'Patrón que separa interfaz, lógica y datos para un código más mantenible.' },
      { name: 'Lógica asíncrona', desc: 'Manejo de tareas que se ejecutan sin bloquear el resto de la aplicación.' },
    ],
  },
  {
    title: 'Datos',
    description: 'Cómo almaceno, muevo y estructuro la información.',
    skills: [
      { name: 'Firebase', desc: 'Backend as a service de Google, usado en PanGeo para datos y autenticación.' },
      { name: 'NoSQL', desc: 'Bases de datos no relacionales, flexibles para datos poco estructurados.' },
      { name: 'JSON', desc: 'Formato estándar para intercambiar datos entre sistemas.' },
      { name: 'GeoJSON', desc: 'Formato estándar para bases de datos geoespaciales.' },
    ],
  },
  {
    title: 'Herramientas',
    description: 'Ecosistema de software con el que trabajo cada día.',
    skills: [
      { name: 'Git', desc: 'Control de versiones — el historial y la columna vertebral de este mismo proyecto.' },
      { name: 'Docker', desc: 'Empaqueta aplicaciones en contenedores para que funcionen igual en cualquier entorno.' },
      { name: 'Figma', desc: 'Herramienta de diseño de interfaces usada para prototipar antes de programar.' },
    ],
  },
]

function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  const handleClick = (key: string) => {
    setActiveSkill(prev => (prev === key ? null : key))
  }

  return (
    <section id="skills" className="section-card">
      <p className="section-eyebrow">02 — skills.map()</p>
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skillCategories.map(category => (
          <div key={category.title} className="skills-category">
            <h3 className="skills-category-title">{category.title}</h3>
            <p className="skills-category-desc">{category.description}</p>
            <div className="skills-pills">
              {category.skills.map(skill => {
                const key = `${category.title}-${skill.name}`
                const isActive = activeSkill === key
                return (
                  <div key={key} className="skill-item">
                    <button
                      className={`skill-pill ${isActive ? 'skill-pill-active' : ''}`}
                      onClick={() => handleClick(key)}
                    >
                      {skill.name}
                    </button>
                    {isActive && <p className="skill-desc">{skill.desc}</p>}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills