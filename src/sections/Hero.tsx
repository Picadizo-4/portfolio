import './Hero.css'
import fotoPerfil from '../assets/foto-hero.jpg'
import { useLanguage } from '../hooks/useLanguage'
import fotoComic from '../assets/foto-comic-chaos.png'

function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="section-card hero">
      <div className="hero-content">
        <p className="hero-eyebrow">{t.hero.eyebrow}</p>
        <h1 className="hero-title">Miguel Ángel Ordóñez Picadizo</h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <p className="hero-description">{t.hero.description}</p>
        <div className="hero-actions">
          <a href="#proyectos" className="hero-button hero-button-primary">{t.hero.verProyectos}</a>
          <a href="#contacto" className="hero-button hero-button-secondary">{t.hero.contactar}</a>
        </div>
      </div>
      <div className="hero-foto-wrapper">
        <img src={fotoPerfil} alt="Miguel Ángel Ordóñez Picadizo" className="hero-foto hero-foto-normal" />
        <img src={fotoComic} alt="Miguel Ángel Ordóñez Picadizo" className="hero-foto hero-foto-comic" />
        <div className="hero-foto-terminal" aria-hidden="true">&gt;_</div>
      </div>
    </section>
  )
}

export default Hero