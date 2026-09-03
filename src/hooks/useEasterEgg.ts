import { useEffect, useRef, useState } from 'react'

const DATOS_GEO = [
  'El río más largo del mundo, el Nilo, recorre más de 6.600 km.',
  'Rusia abarca 11 husos horarios distintos.',
  'Vaticano es el país más pequeño del mundo, con menos de 0,5 km².',
  'Chile tiene más de 6.000 km de costa de norte a sur.',
  'Existen más de 190 países reconocidos por la ONU.',
  'La Antártida es el continente con menos densidad de población del planeta.',
  'Mónaco es más pequeño que Central Park, en Nueva York.',
  'Canadá tiene más lagos que el resto del mundo junto.',
  'El punto más profundo de la Tierra, la Fosa de las Marianas, supera los 10.900 metros.',
  'Kazajistán es el país sin salida al mar más grande del mundo.',
  'Groenlandia pertenece geográficamente a América, pero políticamente a Dinamarca.',
  'El desierto más grande del mundo no es el Sáhara, sino la Antártida.',
  'Indonesia está formada por más de 17.000 islas.',
  'Turquía y Egipto son países transcontinentales, con territorio en dos continentes.',
  'La frontera entre Estados Unidos y Canadá es la más larga del mundo entre dos países.',
  'Bolivia y Paraguay son los dos únicos países sin salida al mar en Sudamérica.',
  'El Aconcagua, en Argentina, es la montaña más alta fuera de Asia.',
  'Singapur es una ciudad, una isla y un país al mismo tiempo.',
  'Islandia no tiene ejército permanente.',
  'La Ciudad del Vaticano tiene su propio código de país: VA.',
  'Australia es a la vez un país y un continente.',
  'El lago Baikal, en Rusia, contiene cerca del 20% del agua dulce no congelada del planeta.',
  'Brasil limita con todos los países de Sudamérica excepto Chile y Ecuador.',
  'España tiene territorio en dos continentes: Europa y África (Ceuta, Melilla, Canarias).',
  'El río Amazonas transporta más agua que los siguientes siete ríos más grandes juntos.',
  'Japón está formado por más de 6.800 islas.',
  'El Sahara puede llegar a nevar en raras ocasiones, incluso en pleno desierto.',
  'La línea de cambio de fecha internacional pasa por el Pacífico, no por ningún meridiano recto.',
  'Nueva Zelanda fue uno de los últimos territorios habitables en ser poblado por humanos.',
  'El Mar Muerto es en realidad un lago, y su salinidad hace flotar a cualquiera sin esfuerzo.',
]

const CONSEJOS_DEV = [
  '"It works on my machine" no es un argumento válido en producción.',
  'Un commit sin mensaje descriptivo es un regalo envenenado para tu yo del futuro.',
  'console.log() es deuda técnica, pero a veces hay que pagarla.',
  'Si el código funciona y no sabes por qué, no lo toques.',
  'La documentación que no escribes hoy, la maldices mañana.',
  'Nombra bien tus variables. "x" nunca es una buena respuesta.',
  'Un código que nadie entiende, ni tú lo entenderás en seis meses.',
  'El 90% de los bugs viven entre la silla y el teclado.',
  'Antes de preguntar, relee el mensaje de error completo. En serio.',
  'Refactorizar no es opcional, es mantenimiento preventivo.',
  'Si tienes que copiar y pegar el mismo bloque tres veces, hazlo función.',
  'Un buen README ahorra cien mensajes de "oye, ¿cómo se ejecuta esto?".',
  'El código limpio se lee como una frase, no como un jeroglífico.',
  'Comentar el "por qué", no el "qué" — el código ya dice el qué.',
  'La primera solución que funciona rara vez es la mejor solución.',
]

const PALABRAS = ['sudo', 'geo', 'cv', 'hire', 'matrix', 'play', 'ayuda', 'theme', 'terminal', 'glitch', 'cursor', 'paises']
const MAX_PALABRA_LEN = Math.max(...PALABRAS.map(p => p.length))

const KONAMI = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a']

export function useEasterEgg() {
  const [toast, setToast] = useState<string | null>(null)
  const [matrixActivo, setMatrixActivo] = useState(false)
  const [juegoActivo, setJuegoActivo] = useState(false)
  const [consejoActivo, setConsejoActivo] = useState<string | null>(null)
  const [terminalActivo, setTerminalActivo] = useState(false)
  const [cursorActivo, setCursorActivo] = useState(false)
  const [geoQuizActivo, setGeoQuizActivo] = useState(false)
  const bufferRef = useRef('')
  const konamiRef = useRef<string[]>([])

  const mostrarToast = (texto: string, duracion = 3000) => {
    setToast(texto)
    setTimeout(() => setToast(null), duracion)
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement
      const escribiendoEnCampo =
        target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable
      if (escribiendoEnCampo) return

      const key = event.key.toLowerCase()

      konamiRef.current.push(key)
      konamiRef.current = konamiRef.current.slice(-KONAMI.length)
      if (konamiRef.current.join(',') === KONAMI.join(',')) {
        mostrarToast('Konami code activado — nivel desarrollador desbloqueado')
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
              mostrarToast('$ sudo access granted — bienvenido, root.')
              break
            case 'geo': {
              const dato = DATOS_GEO[Math.floor(Math.random() * DATOS_GEO.length)]
              mostrarToast(dato)
              break
            }
            case 'cv': {
              const link = document.createElement('a')
              link.href = '/cv-MiguelAngelOrdonezPicadizo-es.pdf'
              link.download = ''
              link.click()
              mostrarToast('Descargando CV...')
              break
            }
            case 'hire': {
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
              mostrarToast('¡Hablamos! Te llevo a contacto')
              break
            }
            case 'matrix': {
              setMatrixActivo(true)
              setTimeout(() => setMatrixActivo(false), 10000)
              break
            }
            case 'play': {
              setJuegoActivo(true)
              break
            }
            case 'ayuda': {
              const consejo = CONSEJOS_DEV[Math.floor(Math.random() * CONSEJOS_DEV.length)]
              setConsejoActivo(consejo)
              setTimeout(() => setConsejoActivo(null), 6000)
              break
            }
            case 'theme': {
              document.body.classList.toggle('terminal-mode')
              mostrarToast('Modo terminal alternado')
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
              mostrarToast('Cursor personalizado alternado')
              break
            }
            case 'paises': {
              setGeoQuizActivo(true)
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
      setTimeout(() => mostrarToast(`Esta es tu visita nº ${visitas}`, 4000), 1200)
    }
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
  }
}