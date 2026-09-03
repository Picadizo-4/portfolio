import { useEffect, useRef, useState } from 'react'
import './GameOverlay.css'

interface GameOverlayProps {
  onClose: () => void
}

interface Item {
  x: number
  y: number
  symbol: string
}

const SIMBOLOS = ['{ }', '</>', '=>', 'npm', 'git', '01', 'if', 'for', 'null', '<div>']

function GameOverlay({ onClose }: GameOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [estado, setEstado] = useState<'jugando' | 'perdido'>('jugando')
  const [score, setScore] = useState(0)
  const scoreRef = useRef(0)

  const [mejorScore, setMejorScore] = useState(() => Number(localStorage.getItem('bestScore') || '0'))

  useEffect(() => {
    if (estado !== 'jugando') return

    const canvasEl = canvasRef.current
    if (!canvasEl) return
    const canvas = canvasEl
    const context = canvas.getContext('2d')
    if (!context) return
    const ctx = context

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const basketWidth = 90
    const basketHeight = 18
    const basketY = canvas.height - 60
    let basketX = canvas.width / 2 - basketWidth / 2

    const teclas = new Set<string>()
    function handleKeyDown(e: KeyboardEvent) {
      teclas.add(e.key.toLowerCase())
    }
    function handleKeyUp(e: KeyboardEvent) {
      teclas.delete(e.key.toLowerCase())
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    let items: Item[] = []
    let frame = 0
    let velocidad = 2.5
    let animationId: number

    function loop() {
      frame++

      if (teclas.has('arrowleft') || teclas.has('a')) basketX -= 23
      if (teclas.has('arrowright') || teclas.has('d')) basketX += 23
      basketX = Math.max(0, Math.min(canvas.width - basketWidth, basketX))

      if (frame % 55 === 0) {
        items.push({
          x: Math.random() * (canvas.width - 40) + 20,
          y: -20,
          symbol: SIMBOLOS[Math.floor(Math.random() * SIMBOLOS.length)],
        })
        velocidad += 0.01
      }

      ctx.fillStyle = '#14140F'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#5C9973'
      ctx.fillRect(basketX, basketY, basketWidth, basketHeight)

      let perdido = false
      items = items.filter(item => {
        item.y += velocidad

        ctx.beginPath()
        ctx.arc(item.x, item.y, 18, 0, Math.PI * 2)
        ctx.fillStyle = '#35586B'
        ctx.fill()
        ctx.fillStyle = '#F2F0E8'
        ctx.font = '11px monospace'
        ctx.textAlign = 'center'
        ctx.fillText(item.symbol, item.x, item.y + 4)

        const atrapado =
          item.y + 18 >= basketY &&
          item.y - 18 <= basketY + basketHeight &&
          item.x >= basketX - 10 &&
          item.x <= basketX + basketWidth + 10

        if (atrapado) {
          scoreRef.current += 1
          setScore(scoreRef.current)
          return false
        }

        if (item.y - 18 > canvas.height) {
          perdido = true
          return false
        }

        if (scoreRef.current > mejorScore) {
          setMejorScore(scoreRef.current)
          localStorage.setItem('bestScore', String(scoreRef.current))
        }

        return true
      })

      ctx.fillStyle = '#F2F0E8'
      ctx.font = '18px monospace'
      ctx.textAlign = 'left'
      ctx.fillText(`Score: ${scoreRef.current}`, 24, 40)

      if (perdido) {
        setEstado('perdido')
        return
      }

      animationId = requestAnimationFrame(loop)
    }

    animationId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [estado])

  const reintentar = () => {
    scoreRef.current = 0
    setScore(0)
    setEstado('jugando')
  }

  return (
    <div className="game-overlay">
      {estado === 'jugando' && (
        <>
          <canvas ref={canvasRef} className="game-canvas" />
          <button className="game-close" onClick={onClose} aria-label="Cerrar">×</button>
          <p className="game-instrucciones">← → o A / D para moverte</p>
        </>
      )}

      {estado === 'perdido' && (
        <div className="game-over">
          <p className="game-over-titulo">ERROR_FATAL</p>
          <p className="game-over-score">Puntuación: {score}</p>
          <p className="game-over-score">Mejor puntuación: {mejorScore}</p>
          <div className="game-over-actions">
            <button className="game-btn game-btn-primary" onClick={reintentar}>Reintentar</button>
            <button className="game-btn" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default GameOverlay