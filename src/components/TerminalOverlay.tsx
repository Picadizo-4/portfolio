import { useEffect, useRef, useState } from 'react'
import './TerminalOverlay.css'

interface TerminalOverlayProps {
  onClose: () => void
}

interface Linea {
  tipo: 'input' | 'output'
  texto: string
}

function TerminalOverlay({ onClose }: TerminalOverlayProps) {
  const [lineas, setLineas] = useState<Linea[]>([
    { tipo: 'output', texto: 'Terminal de miguelpicadizo.com — escribe "help" para ver comandos.' },
  ])
  const [valor, setValor] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const finRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    finRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lineas])

  const ejecutar = (comando: string) => {
    const cmd = comando.trim().toLowerCase()
    let salida = ''

    switch (cmd) {
      case 'help':
        salida = 'Comandos: whoami, ls, cv, help, clear, exit'
        break
      case 'whoami':
        salida = 'Miguel Ángel Ordóñez Picadizo — desarrollador de software junior, apasionado por la geografía.'
        break
      case 'ls':
        salida = 'sobre-mi  skills  trayectoria  formacion  proyectos  contacto'
        break
      case 'cv': {
        const link = document.createElement('a')
        link.href = '/cv-MiguelAngelOrdonezPicadizo-es.pdf'
        link.download = ''
        link.click()
        salida = 'Descargando CV...'
        break
      }
      case 'clear':
        setLineas([])
        return
      case 'exit':
        onClose()
        return
      case '':
        return
      default:
        salida = `command not found: ${cmd}`
    }

    setLineas(prev => [...prev, { tipo: 'input', texto: comando }, { tipo: 'output', texto: salida }])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    ejecutar(valor)
    setValor('')
  }

  return (
    <div className="terminal-overlay" onClick={onClose}>
      <div className="terminal-window" onClick={e => e.stopPropagation()}>
        <div className="terminal-header">
          <span>miguel@portfolio: ~</span>
          <button className="terminal-close" onClick={onClose} aria-label="Cerrar">×</button>
        </div>
        <div className="terminal-body">
          {lineas.map((linea, i) => (
            <div key={i} className={linea.tipo === 'input' ? 'terminal-line-input' : 'terminal-line-output'}>
              {linea.tipo === 'input' ? `> ${linea.texto}` : linea.texto}
            </div>
          ))}
          <form onSubmit={handleSubmit} className="terminal-form">
            <span className="terminal-prompt">&gt;</span>
            <input
              ref={inputRef}
              className="terminal-input"
              value={valor}
              onChange={e => setValor(e.target.value)}
              autoComplete="off"
              spellCheck={false}
            />
          </form>
          <div ref={finRef} />
        </div>
      </div>
    </div>
  )
}

export default TerminalOverlay