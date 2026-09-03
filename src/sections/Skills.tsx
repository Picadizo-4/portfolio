import { useState } from 'react'
import './Skills.css'
import ExerciseModal from '../components/ExerciseModal'
import { ejerciciosPorSkill } from '../data/exercises'
import { useLanguage } from '../hooks/useLanguage'

function Skills() {
  const { t } = useLanguage()
  const [activeSkill, setActiveSkill] = useState<string | null>(null)
  const [skillEnEjercicio, setSkillEnEjercicio] = useState<string | null>(null)

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
                const key = `${category.title}-${skill.name}`
                const isActive = activeSkill === key
                const tieneEjercicios = !!ejerciciosPorSkill[skill.name]
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
                          <button className="skill-exercise-link" onClick={() => setSkillEnEjercicio(skill.name)}>
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
          skillName={skillEnEjercicio}
          ejercicios={ejerciciosPorSkill[skillEnEjercicio]}
          onClose={() => setSkillEnEjercicio(null)}
        />
      )}
    </section>
  )
}

export default Skills