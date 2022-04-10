import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const { x, y } = pos

  useEffect(() => {
    const getPos = (e) => {
      const pos = {x: e.x, y: e.y}
      setPos(pos)
    }

    window.addEventListener('mousemove', getPos)

    return () => {
      window.removeEventListener('mousemove', getPos)
    }
  }, [pos])

  return (
    <div className='App'>
      <p>x: {x}</p>
      <p>x: {y}</p>
    </div>
  )
}

export default App
