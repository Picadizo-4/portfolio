import { useState } from 'react'
import './Formacion.css'
import BurbujasUE from '../components/BurbujasUE'
import NivelUpBar from '../components/NivelUpBar'
import TickerUCA from '../components/TickerUCA'

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
  const [burbujasActivas, setBurbujasActivas] = useState(false)
  const [selloActivo, setSelloActivo] = useState(false)
  const [tickerActivo, setTickerActivo] = useState(false)

  const lanzarBurbujas = () => {
    if (burbujasActivas) return
    setBurbujasActivas(true)
    setTimeout(() => setBurbujasActivas(false), 4500)
  }

  const lanzarSello = () => {
    if (selloActivo) return
    setSelloActivo(true)
    setTimeout(() => setSelloActivo(false), 3200)
  }

  const lanzarTicker = () => {
    if (tickerActivo) return
    setTickerActivo(true)
    setTimeout(() => setTickerActivo(false), 3200)
  }

  return (
    <section id="formacion" className="section-card">
      <p className="section-eyebrow">04 — education.json</p>
      <h2 className="section-title">Formación</h2>

      <div className="formacion-list">
        {formacion.map(item => {
          const esUE = item.centro === 'Universidad Europea, Madrid'
          const esIES = item.centro === 'IES Fernando III El Santo'
          const esUCA = item.centro === 'Universidad de Cádiz'
          const clicable = esUE || esIES || esUCA
          const handler = esUE ? lanzarBurbujas : esIES ? lanzarSello : esUCA ? lanzarTicker : undefined

          return (
            <div
              key={item.titulo}
              className={`formacion-item ${clicable ? 'formacion-clickable' : ''}`}
              onClick={handler}
            >
              <p className="formacion-periodo">{item.periodo}</p>
              <div className="formacion-content">
                <h3 className="formacion-titulo">{item.titulo}</h3>
                <p className="formacion-centro">{item.centro}</p>
              </div>
              {esIES && selloActivo && <NivelUpBar />}
              {esUCA && tickerActivo && <TickerUCA />}
            </div>
          )
        })}
      </div>

      {burbujasActivas && <BurbujasUE />}
    </section>
  )
}

export default Formacion