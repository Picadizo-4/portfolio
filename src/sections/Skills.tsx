import { useState } from 'react'
import './Skills.css'
import ExerciseModal from '../components/ExerciseModal'
import { getEjerciciosPorSkill } from '../data/exercises'
import { useLanguage } from '../hooks/useLanguage'

function Skills() {
  const { t, lang } = useLanguage()
  const ejerciciosPorSkill = getEjerciciosPorSkill(lang)
  const [activeSkill, setActiveSkill] = useState<string | null>(null)
  const [skillEnEjercicio, setSkillEnEjercicio] = useState<{ id: string; name: string } | null>(null)

  const handleClick = (key: string) => {
    setActiveSkill(prev => (prev === key ? null : key))
  }

  return (
    <section id="skills" className="section-card">
      <p className="section-eyebrow">{t.skills.eyebrow}</p>
      <h2 className="section-title">{t.skills.titulo}</h2>

      <div className="skills-grid">
        {t.skills.categorias.map(category => (
          <div key={category.title} className="skills-category">
            <h3 className="skills-category-title">{category.title}</h3>
            <p className="skills-category-desc">{category.description}</p>
            <div className="skills-pills">
              {category.skills.map(skill => {
                const key = `${category.title}-${skill.id}`
                const isActive = activeSkill === key
                const tieneEjercicios = !!ejerciciosPorSkill[skill.id]
                return (
                  <div key={key} className="skill-item">
                    <button
                      className={`skill-pill ${isActive ? 'skill-pill-active' : ''}`}
                      onClick={() => handleClick(key)}
                    >
                      {skill.name}
                    </button>
                    {isActive && (
                      <div className="skill-detail">
                        <p className="skill-desc">{skill.desc}</p>
                        {tieneEjercicios && (
                          <button
                            className="skill-exercise-link"
                            onClick={() => setSkillEnEjercicio({ id: skill.id, name: skill.name })}
                          >
                            {t.skills.probarNivel}
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {skillEnEjercicio && (
        <ExerciseModal
          skillName={skillEnEjercicio.name}
          ejercicios={ejerciciosPorSkill[skillEnEjercicio.id]}
          onClose={() => setSkillEnEjercicio(null)}
        />
      )}
    </section>
  )
}

export default Skills