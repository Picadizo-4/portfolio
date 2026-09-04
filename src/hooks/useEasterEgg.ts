import { useEffect, useRef, useState } from 'react'
import { useLanguage } from './useLanguage'

const PALABRAS = ['sudo', 'geo', 'cv', 'hire', 'matrix', 'play', 'ayuda', 'theme', 'terminal', 'glitch', 'cursor', 'paises', 'color']
const MAX_PALABRA_LEN = Math.max(...PALABRAS.map(p => p.length))

const KONAMI = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a']

export function useEasterEgg() {
  const { t, lang } = useLanguage()
  const [toast, setToast] = useState<string | null>(null)
  const [matrixActivo, setMatrixActivo] = useState(false)
  const [juegoActivo, setJuegoActivo] = useState(false)
  const [consejoActivo, setConsejoActivo] = useState<string | null>(null)
  const [terminalActivo, setTerminalActivo] = useState(false)
  const [cursorActivo, setCursorActivo] = useState(false)
  const [geoQuizActivo, setGeoQuizActivo] = useState(false)
  const bufferRef = useRef('')
  const konamiRef = useRef<string[]>([])
  const tRef = useRef(t)
  tRef.current = t

  const mostrarToast = (texto: string, duracion = 3000) => {
    setToast(texto)
    setTimeout(() => setToast(null), duracion)
  }

  const activarMatrix = () => {
    setMatrixActivo(true)
    setTimeout(() => setMatrixActivo(false), 10000)
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement
      const escribiendoEnCampo =
        target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable
      if (escribiendoEnCampo) return

      const key = event.key.toLowerCase()
      const ee = tRef.current.easterEggs

      konamiRef.current.push(key)
      konamiRef.current = konamiRef.current.slice(-KONAMI.length)
      if (konamiRef.current.join(',') === KONAMI.join(',')) {
        mostrarToast(ee.konami)
        konamiRef.current = []
      }

      bufferRef.current += key
      bufferRef.current = bufferRef.current.slice(-MAX_PALABRA_LEN)

      for (const palabra of PALABRAS) {
        if (bufferRef.current.endsWith(palabra)) {
          bufferRef.current = ''
          event.preventDefault()

          switch (palabra) {
            case 'sudo':
              mostrarToast(ee.sudo)
              break
            case 'geo': {
              const dato = ee.datosGeo[Math.floor(Math.random() * ee.datosGeo.length)]
              mostrarToast(dato)
              break
            }
            case 'cv': {
              const link = document.createElement('a')
              link.href = lang === 'en'
                ? '/cv-MiguelAngelOrdonezPicadizo-en.pdf'
                : '/cv-MiguelAngelOrdonezPicadizo-es.pdf'
              link.download = ''
              link.click()
              mostrarToast(ee.cv)
              break
            }
            case 'hire': {
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
              mostrarToast(ee.hire)
              break
            }
            case 'matrix': {
              activarMatrix()
              break
            }
            case 'play': {
              setJuegoActivo(true)
              break
            }
            case 'ayuda': {
              const consejo = ee.consejosDev[Math.floor(Math.random() * ee.consejosDev.length)]
              setConsejoActivo(consejo)
              setTimeout(() => setConsejoActivo(null), 6000)
              break
            }
            case 'theme': {
              document.body.classList.toggle('terminal-mode')
              mostrarToast(ee.theme)
              break
            }
            case 'terminal': {
              setTerminalActivo(true)
              break
            }
            case 'glitch': {
              document.body.classList.remove('glitch-active')
              void document.body.offsetWidth
              document.body.classList.add('glitch-active')
              setTimeout(() => document.body.classList.remove('glitch-active'), 700)
              break
            }
            case 'cursor': {
              setCursorActivo(prev => !prev)
              mostrarToast(ee.cursor)
              break
            }
            case 'paises': {
              setGeoQuizActivo(true)
              break
            }
            case 'color': {
              document.body.classList.toggle('chaos-mode')
              mostrarToast(ee.color)
              break
            }
          }
          break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    const visitas = Number(localStorage.getItem('visitCount') || '0') + 1
    localStorage.setItem('visitCount', String(visitas))
    if (visitas > 1) {
      setTimeout(() => mostrarToast(tRef.current.easterEggs.visita(visitas), 4000), 1200)
    }
  }, [])

  useEffect(() => {
    function handleActivarMatrix() {
      activarMatrix()
    }
    window.addEventListener('activar-matrix', handleActivarMatrix)
    return () => window.removeEventListener('activar-matrix', handleActivarMatrix)
  }, [])

  return {
    toast,
    matrixActivo,
    juegoActivo,
    setJuegoActivo,
    consejoActivo,
    terminalActivo,
    setTerminalActivo,
    cursorActivo,
    geoQuizActivo,
    setGeoQuizActivo,
    activarMatrix,
  }
}