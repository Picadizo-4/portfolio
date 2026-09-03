import { useEffect, useRef, useState } from 'react'
import './MatrixRain.css'

interface MatrixRainProps {
  mensaje?: string
}

function MatrixRain({ mensaje = 'HAS ENCONTRADO UN EASTER EGG\n\nMIGUEL ANGEL ORDOÑEZ PICADIZO\nSOFTWARE DEVELOPER\n\n\n\nsiga buscando...' }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [textoVisible, setTextoVisible] = useState('')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fontSize = 16
    const columnas = Math.floor(canvas.width / fontSize)
    const filas = Math.floor(canvas.height / fontSize)
    const gotas = new Array(columnas).fill(0).map(() => Math.floor(Math.random() * -filas))
    const caracteres = '01アイウエオカキクケコMOP'

    const interval = setInterval(() => {
      ctx.fillStyle = 'rgba(20, 20, 15, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#5C9973'
      ctx.font = `${fontSize}px monospace`

      gotas.forEach((fila, i) => {
        const char = caracteres[Math.floor(Math.random() * caracteres.length)]
        ctx.fillText(char, i * fontSize, fila * fontSize)
        if (fila * fontSize > canvas.height && Math.random() > 0.975) {
          gotas[i] = 0
        }
        gotas[i]++
      })
    }, 40)

    // Espera a que la lluvia llene la pantalla una vez, y entonces empieza a escribir el nombre
    const tiempoLluviaInicial = filas * 40
    let indice = 0
    const timeoutInicio = setTimeout(() => {
      const escritura = setInterval(() => {
        indice++
        setTextoVisible(mensaje.slice(0, indice))
        if (indice >= mensaje.length) clearInterval(escritura)
      }, 60)
    }, tiempoLluviaInicial)

    return () => {
      clearInterval(interval)
      clearTimeout(timeoutInicio)
    }
  }, [mensaje])

  return (
    <div className="matrix-overlay">
      <canvas ref={canvasRef} className="matrix-rain" />
      <div className="matrix-texto">
        {textoVisible}
        <span className="matrix-cursor">_</span>
      </div>
    </div>
  )
}

export default MatrixRain