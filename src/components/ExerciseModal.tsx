import { useState } from 'react'
import './ExerciseModal.css'
import type { Ejercicio } from '../data/exercises'

interface ExerciseModalProps {
  skillName: string
  ejercicios: Ejercicio[]
  onClose: () => void
}

function normalizar(texto: string) {
  return texto
    .trim()
    .toLowerCase()
    .replace(/'/g, '"')
    .replace(/;\s*$/, '')
    .replace(/\s+/g, ' ')
}

function ExerciseModal({ skillName, ejercicios, onClose }: ExerciseModalProps) {
  const [indice, setIndice] = useState(0)
  const [respuesta, setRespuesta] = useState('')
  const [estado, setEstado] = useState<'respondiendo' | 'correcto' | 'incorrecto' | 'solucion' | 'completado'>('respondiendo')

  const ejercicioActual = ejercicios[indice]
  const esUltimo = indice === ejercicios.length - 1

  const comprobar = () => {
    if (respuesta.trim() === '') return
    const acierto = ejercicioActual.respuestas.some(r => normalizar(r) === normalizar(respuesta))
    setEstado(acierto ? 'correcto' : 'incorrecto')
  }

  const avanzar = () => {
    if (esUltimo) {
      setEstado('completado')
      return
    }
    setIndice(indice + 1)
    setRespuesta('')
    setEstado('respondiendo')
  }

  if (estado === 'completado') {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="exercise-modal" onClick={e => e.stopPropagation()}>
          <p className="exercise-completado">Has completado los ejercicios de {skillName}</p>
          <button className="exercise-btn exercise-btn-primary exercise-completado-btn" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    )
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="exercise-modal" onClick={e => e.stopPropagation()}>
        <div className="exercise-header">
          <span className="exercise-title">Ejercicio · {skillName}</span>
          <button className="exercise-close" onClick={onClose} aria-label="Cerrar">×</button>
        </div>

        <div className="exercise-progress">
          {ejercicios.map((_, i) => (
            <div key={i} className={`exercise-progress-bar ${i === indice ? 'exercise-progress-active' : ''}`} />
          ))}
        </div>

        <p className="exercise-enunciado">{ejercicioActual.enunciado}</p>

        {ejercicioActual.codigo && (
          <pre className="exercise-codigo">{ejercicioActual.codigo}</pre>
        )}

        <div className="exercise-terminal">
          <span className="exercise-prompt">&gt;</span>
          <textarea
            className="exercise-input"
            value={respuesta}
            onChange={e => setRespuesta(e.target.value)}
            placeholder="escribe tu respuesta"
            rows={ejercicioActual.tipo === 'escritura' ? 3 : 1}
          />
        </div>

        {estado === 'correcto' && <p className="exercise-feedback exercise-feedback-ok">Correcto</p>}
        {estado === 'incorrecto' && <p className="exercise-feedback exercise-feedback-error">No es correcto, inténtalo de nuevo</p>}
        {estado === 'solucion' && (
          <p className="exercise-feedback exercise-feedback-solucion">Solución: {ejercicioActual.respuestas[0]}</p>
        )}

        <div className="exercise-actions">
          <button className="exercise-btn" onClick={() => setEstado('solucion')}>Ver solución</button>
          <button className="exercise-btn" onClick={avanzar}>Saltar</button>
          {estado === 'correcto' ? (
            <button className="exercise-btn exercise-btn-primary" onClick={avanzar}>
              {esUltimo ? 'Finalizar' : 'Siguiente →'}
            </button>
          ) : (
            <button className="exercise-btn exercise-btn-primary" onClick={comprobar}>Comprobar</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExerciseModal