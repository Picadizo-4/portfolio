import { createPortal } from 'react-dom'

interface ConfettiRainProps {
  logo: string
  icono: string
  cantidad?: number
}

function generarPiezas(cantidad: number) {
  return Array.from({ length: cantidad }, (_, i) => ({
    id: i,
    esLogo: Math.random() > 0.5,
    left: Math.random() * 100,
    delay: Math.random() * 1.2,
    duracion: 2.5 + Math.random() * 1.5,
    rotacionInicial: Math.random() * 360,
    rotacionFinal: Math.random() * 720 - 360,
    tamano: 24 + Math.random() * 20,
  }))
}

function ConfettiRain({ logo, icono, cantidad = 30 }: ConfettiRainProps) {
  const piezas = generarPiezas(cantidad)

  return createPortal(
    <div className="confeti-ue-overlay">
      {piezas.map(p => (
        <div
          key={p.id}
          className="confeti-ue-pieza"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duracion}s`,
            width: `${p.tamano}px`,
            height: `${p.tamano}px`,
            // @ts-expect-error custom properties para la animación
            '--rot-inicial': `${p.rotacionInicial}deg`,
            '--rot-final': `${p.rotacionInicial + p.rotacionFinal}deg`,
          }}
        >
          {p.esLogo ? (
            <img src={logo} alt="" className="confeti-ue-logo" />
          ) : (
            <span className="confeti-ue-icono" style={{ fontSize: `${p.tamano * 0.7}px` }}>{icono}</span>
          )}
        </div>
      ))}
    </div>,
    document.body
  )
}

export default ConfettiRain