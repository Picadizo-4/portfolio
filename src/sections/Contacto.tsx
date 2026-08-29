import './Contacto.css'

const contactos = [
  { label: 'Email', valor: 'miguepicadizo@gmail.com', href: 'mailto:miguepicadizo@gmail.com' },
  { label: 'LinkedIn', valor: 'Miguel Ángel Ordóñez Picadizo', href: 'https://www.linkedin.com/in/miguel-angel-ordonez-picadizo/' },
  { label: 'GitHub', valor: 'Picadizo-4', href: 'https://github.com/Picadizo-4' },
]

function Contacto() {
  return (
    <section id="contacto" className="section-card">
      <p className="section-eyebrow">06 — contact.send()</p>
      <h2 className="section-title">Contacto</h2>
      <p className="contacto-intro">
        Disponible para incorporarme a proyectos y equipos. Escríbeme por cualquiera de estos canales.
      </p>

      <div className="contacto-list">
        {contactos.map(item => (
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