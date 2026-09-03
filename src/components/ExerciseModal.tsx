import { useState } from 'react'
import { createPortal } from 'react-dom'
import './ExerciseModal.css'
import type { Ejercicio } from '../data/exercises'
import { useLanguage } from '../hooks/useLanguage'

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
  const { t } = useLanguage()
  const m = t.skills.modal
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
    return createPortal(
      <div className="modal-overlay" onClick={onClose}>
        <div className="exercise-modal" onClick={e => e.stopPropagation()}>
          <p className="exercise-completado">{m.completado(skillName)}</p>
          <button className="exercise-btn exercise-btn-primary exercise-completado-btn" onClick={onClose}>{m.cerrar}</button>
        </div>
      </div>,
      document.body
    )
  }

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="exercise-modal" onClick={e => e.stopPropagation()}>
        <div className="exercise-header">
          <span className="exercise-title">{m.ejercicio} · {skillName}</span>
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
            placeholder={m.placeholder}
            rows={ejercicioActual.tipo === 'escritura' ? 3 : 1}
          />
        </div>

        {estado === 'correcto' && <p className="exercise-feedback exercise-feedback-ok">{m.correcto}</p>}
        {estado === 'incorrecto' && <p className="exercise-feedback exercise-feedback-error">{m.incorrecto}</p>}
        {estado === 'solucion' && (
          <p className="exercise-feedback exercise-feedback-solucion">{m.solucion}: {ejercicioActual.respuestas[0]}</p>
        )}

        <div className="exercise-actions">
          <button className="exercise-btn" onClick={() => setEstado('solucion')}>{m.verSolucion}</button>
          <button className="exercise-btn" onClick={avanzar}>{m.saltar}</button>
          {estado === 'correcto' ? (
            <button className="exercise-btn exercise-btn-primary" onClick={avanzar}>
              {esUltimo ? m.finalizar : m.siguiente}
            </button>
          ) : (
            <button className="exercise-btn exercise-btn-primary" onClick={comprobar}>{m.comprobar}</button>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default ExerciseModal