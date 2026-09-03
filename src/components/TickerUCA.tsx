import { useEffect, useState } from 'react'

function TickerUCA() {
  const [precio, setPrecio] = useState(21.2)
  const [fase, setFase] = useState<'fluctuando' | 'asentado' | 'saliendo'>('fluctuando')

  useEffect(() => {
    const inicio = performance.now()
    const duracionFluctuacion = 1400

    function tick(ahora: number) {
      const transcurrido = ahora - inicio
      if (transcurrido < duracionFluctuacion) {
        const ruido = (Math.random() - 0.3) * 4
        setPrecio(21.2 + ruido + transcurrido / 200)
        requestAnimationFrame(tick)
      } else {
        setPrecio(100)
        setFase('asentado')
        setTimeout(() => setFase('saliendo'), 900)
      }
    }

    const raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className={`formacion-ticker ${fase === 'saliendo' ? 'formacion-ticker-salir' : ''}`}>
      <span className="formacion-ticker-nombre">UCA</span>
      <span className="formacion-ticker-precio">{precio.toFixed(2)}</span>
      <span className="formacion-ticker-flecha">
        {fase === 'fluctuando' ? '▲' : '▲ Grado completado'}
      </span>
    </div>
  )
}

export default TickerUCA