import './EasterEgg.css'
import { useEasterEgg } from '../hooks/useEasterEgg'
import MatrixRain from './MatrixRain'
import GameOverlay from './GameOverlay'
import DevHelper from './DevHelper'
import TerminalOverlay from './TerminalOverlay'
import CursorFollower from './CursorFollower'
import GeoQuiz from './GeoQuiz'

function EasterEgg() {
  const {
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
  } = useEasterEgg()

  return (
    <>
      {matrixActivo && <MatrixRain />}
      {juegoActivo && <GameOverlay onClose={() => setJuegoActivo(false)} />}
      {consejoActivo && <DevHelper mensaje={consejoActivo} />}
      {terminalActivo && <TerminalOverlay onClose={() => setTerminalActivo(false)} />}
      {geoQuizActivo && <GeoQuiz onClose={() => setGeoQuizActivo(false)} />}
      {cursorActivo && <CursorFollower />}
      {toast && (
        <div className="easter-egg">
          <span className="easter-egg-prompt">$</span> {toast}
        </div>
      )}
    </>
  )
}

export default EasterEgg