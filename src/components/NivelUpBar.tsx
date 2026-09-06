import { useEffect, useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'

function NivelUpBar() {
  const { t } = useLanguage()
  const [xp, setXp] = useState(0)
  const [visible, setVisible] = useState(true)
  const [rellenado, setRellenado] = useState(false)

  useEffect(() => {
    const duracion = 2200
    const inicio = performance.now()

    // Dispara el relleno CSS en el siguiente frame, para que la transición se aplique
    const startFill = requestAnimationFrame(() => setRellenado(true))

    function tick(ahora: number) {
      const progreso = Math.min((ahora - inicio) / duracion, 1)
      setXp(Math.floor(progreso * 100))
      if (progreso < 1) requestAnimationFrame(tick)
    }
  
    const raf = requestAnimationFrame(tick)

    const fadeTimeout = setTimeout(() => setVisible(false), 2600)

    return () => {
      cancelAnimationFrame(raf)
      cancelAnimationFrame(startFill)
      clearTimeout(fadeTimeout)
    }
  }, [])

  return (
    <div className={`formacion-levelup-overlay ${visible ? '' : 'formacion-levelup-hide'}`}>
      <div className={`formacion-levelup-fill ${rellenado ? 'formacion-levelup-fill-activo' : ''}`} />
      <div className="formacion-levelup-content">
        <p className="formacion-levelup-titulo">{t.formacion.levelup.titulo}</p>
        <p className="formacion-levelup-sub">{t.formacion.levelup.sub}</p>
        <p className="formacion-levelup-xp">{xp} / 100 XP</p>
      </div>
    </div>
  )
}

export default NivelUpBar