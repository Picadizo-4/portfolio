import { useState } from 'react'
import './GeoQuiz.css'
import { PAISES } from '../data/countries'
import { useLanguage } from '../hooks/useLanguage'

interface GeoQuizProps {
  onClose: () => void
}

interface Pregunta {
  nombre: string
  bandera: string
  opciones: string[]
}

function barajar<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

function generarPreguntas(cantidad: number, esIngles: boolean): Pregunta[] {
  const elegidos = barajar(PAISES).slice(0, cantidad)
  return elegidos.map(pais => {
    const nombreCorrecto = esIngles ? pais.nombreEn : pais.nombre
    const distractores = barajar(PAISES.filter(p => p.nombre !== pais.nombre))
      .slice(0, 3)
      .map(p => (esIngles ? p.nombreEn : p.nombre))
    return {
      nombre: nombreCorrecto,
      bandera: pais.bandera,
      opciones: barajar([nombreCorrecto, ...distractores]),
    }
  })
}

function GeoQuiz({ onClose }: GeoQuizProps) {
  const { t, lang } = useLanguage()
  const [preguntas] = useState(() => generarPreguntas(8, lang === 'en'))
  const [indice, setIndice] = useState(0)
  const [score, setScore] = useState(0)
  const [seleccion, setSeleccion] = useState<string | null>(null)
  const [terminado, setTerminado] = useState(false)

  const actual = preguntas[indice]

  const elegir = (opcion: string) => {
    if (seleccion) return
    setSeleccion(opcion)
    if (opcion === actual.nombre) setScore(s => s + 1)

    setTimeout(() => {
      if (indice + 1 >= preguntas.length) {
        setTerminado(true)
      } else {
        setIndice(i => i + 1)
        setSeleccion(null)
      }
    }, 900)
  }

  if (terminado) {
    return (
      <div className="geoquiz-overlay" onClick={onClose}>
        <div className="geoquiz-window" onClick={e => e.stopPropagation()}>
          <p className="geoquiz-final">{t.easterEggs.geoquiz.acertaste(score, preguntas.length)}</p>
          <button className="geoquiz-btn geoquiz-btn-primary" onClick={onClose}>{t.easterEggs.geoquiz.cerrar}</button>
        </div>
      </div>
    )
  }

  return (
    <div className="geoquiz-overlay" onClick={onClose}>
      <div className="geoquiz-window" onClick={e => e.stopPropagation()}>
        <div className="geoquiz-header">
          <span>{t.easterEggs.geoquiz.pais} {indice + 1} / {preguntas.length}</span>
          <button className="geoquiz-close" onClick={onClose} aria-label="Cerrar">×</button>
        </div>

        <img src={actual.bandera} alt="" className="geoquiz-bandera" />

        <div className="geoquiz-opciones">
          {actual.opciones.map(opcion => {
            let clase = 'geoquiz-opcion'
            if (seleccion) {
              if (opcion === actual.nombre) clase += ' geoquiz-correcta'
              else if (opcion === seleccion) clase += ' geoquiz-incorrecta'
            }
            return (
              <button key={opcion} className={clase} onClick={() => elegir(opcion)}>
                {opcion}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default GeoQuiz