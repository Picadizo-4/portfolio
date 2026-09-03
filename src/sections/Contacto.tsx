import './Contacto.css'
import { useLanguage } from '../hooks/useLanguage'

function Contacto() {
  const { t } = useLanguage()

  return (
    <section id="contacto" className="section-card">
      <p className="section-eyebrow">{t.contacto.eyebrow}</p>
      <h2 className="section-title">{t.contacto.titulo}</h2>
      <p className="contacto-intro">{t.contacto.intro}</p>

      <div className="contacto-list">
        {t.contacto.items.map(item => (
          <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="contacto-item">
            <span className="contacto-label">{item.label}</span>
            <span className="contacto-valor">{item.valor} →</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contacto