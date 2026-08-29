import './Formacion.css'

const formacion = [
  {
    titulo: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
    centro: 'Universidad Europea, Madrid',
    periodo: '2024 — 2026',
  },
  {
    titulo: 'Grado en Finanzas y Contabilidad',
    centro: 'Universidad de Cádiz',
    periodo: '2020 — 2022',
  },
  {
    titulo: 'Técnico Superior en Administración y Finanzas',
    centro: 'IES Fernando III El Santo',
    periodo: '2018 — 2020',
  },
]

function Formacion() {
  return (
    <section id="formacion" className="section-card">
      <p className="section-eyebrow">04 — education.json</p>
      <h2 className="section-title">Formación</h2>

      <div className="formacion-list">
        {formacion.map(item => (
          <div key={item.titulo} className="formacion-item">
            <p className="formacion-periodo">{item.periodo}</p>
            <div className="formacion-content">
              <h3 className="formacion-titulo">{item.titulo}</h3>
              <p className="formacion-centro">{item.centro}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Formacion