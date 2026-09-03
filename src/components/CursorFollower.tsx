import { useEffect, useState } from 'react'
import './CursorFollower.css'

function CursorFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    document.body.classList.add('custom-cursor-active')
    function handleMove(e: MouseEvent) {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMove)
    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])

  return (
    <div className="cursor-follower" style={{ left: pos.x, top: pos.y }}>
      &gt;_
    </div>
  )
}

export default CursorFollower