import './Hero.css'
import fotoPerfil from '../assets/foto-hero.jpg'

function Hero() {
  return (
    <section id="hero" className="section-card hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Portfolio en proceso...</p>
        <h1 className="hero-title">Miguel Ángel Ordóñez Picadizo</h1>
        <p className="hero-subtitle">
          Construyo software, aprendizaje constante y ganas de crecer.
        </p>
        <p className="hero-description">
          Desarrollador junior con experiencia en proyectos personales.
        </p>
        <div className="hero-actions">
          <a href="#proyectos" className="hero-button hero-button-primary">Ver proyectos →</a>
          <a href="#contacto" className="hero-button hero-button-secondary">Contactar</a>
        </div>
      </div>
      <div className="hero-foto-wrapper">
        <img src={fotoPerfil} alt="Miguel Ángel Ordóñez Picadizo" className="hero-foto" />
      </div>
    </section>
  )
}

export default Hero