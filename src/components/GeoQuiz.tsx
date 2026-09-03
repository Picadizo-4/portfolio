import { useState } from 'react'
import './GeoQuiz.css'
import { PAISES } from '../data/countries'

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

function generarPreguntas(cantidad: number): Pregunta[] {
  const elegidos = barajar(PAISES).slice(0, cantidad)
  return elegidos.map(pais => {
    const distractores = barajar(PAISES.filter(p => p.nombre !== pais.nombre))
      .slice(0, 3)
      .map(p => p.nombre)
    return {
      nombre: pais.nombre,
      bandera: pais.bandera,
      opciones: barajar([pais.nombre, ...distractores]),
    }
  })
}

function GeoQuiz({ onClose }: GeoQuizProps) {
  const [preguntas] = useState(() => generarPreguntas(8))
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
          <p className="geoquiz-final">Acertaste {score} de {preguntas.length} países</p>
          <button className="geoquiz-btn geoquiz-btn-primary" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    )
  }

  return (
    <div className="geoquiz-overlay" onClick={onClose}>
      <div className="geoquiz-window" onClick={e => e.stopPropagation()}>
        <div className="geoquiz-header">
          <span>País {indice + 1} / {preguntas.length}</span>
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