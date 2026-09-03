import { useEffect, useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'

function NivelUpBar() {
  const { t } = useLanguage()
  const [xp, setXp] = useState(0)

  useEffect(() => {
    const inicio = performance.now()
    const duracion = 1400

    function tick(ahora: number) {
      const progreso = Math.min((ahora - inicio) / duracion, 1)
      setXp(Math.floor(progreso * 100))
      if (progreso < 1) requestAnimationFrame(tick)
    }

    const raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <>
      <div className="formacion-fill" style={{ width: `${xp}%` }} />
      <div className="formacion-levelup-text">
        <p className="formacion-levelup-titulo">{t.formacion.levelup.titulo}</p>
        <p className="formacion-levelup-sub">{t.formacion.levelup.sub}</p>
        <p className="formacion-levelup-xp">{xp} / 100 XP</p>
      </div>
    </>
  )
}

export default NivelUpBar