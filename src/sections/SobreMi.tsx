import './SobreMi.css'
import { useLanguage } from '../hooks/useLanguage'

function SobreMi() {
  const { t } = useLanguage()

  return (
    <section id="sobre-mi" className="section-card sobre-mi">
      <p className="section-eyebrow">{t.sobreMi.eyebrow}</p>
      <h2 className="section-title">{t.sobreMi.titulo}</h2>
      <div className="sobre-mi-text">
        <p>{t.sobreMi.p1}</p>
        <p>{t.sobreMi.p2}</p>
      </div>
    </section>
  )
}

export default SobreMi