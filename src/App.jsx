import { Canvas } from '@react-three/fiber'
import { useControls, button } from 'leva'
import SceneContent from './components/SceneContent'
import Lighting from './components/Lighting'
import CameraControls from './components/CameraControls'
import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'
import Loader from './components/Loader'

function App() {
  const { progress } = useProgress()
  const [showLoader, setShowLoader] = useState(true)

  const { cellSize, color, asciiEnabled, restart } = useControls({
    cellSize: { value: 20, min: 4, max: 64, step: 1 },
    color: { value: '#ffffff' },
    asciiEnabled: { value: true },
    restart: button(() => {
      window.location.reload()
    }),
  })

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setShowLoader(false)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [progress])

  return (
    <>
      <Loader visible={showLoader} />
      <Canvas gl={{ antialias: window.devicePixelRatio < 2 }} style={{ backgroundColor: 'black' }}>
        <CameraControls />
        <Lighting />
        <SceneContent cellSize={cellSize} color={color} asciiEnabled={asciiEnabled} />
      </Canvas>
    </>
  )
}

export default App
