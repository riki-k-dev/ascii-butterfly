import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Lighting() {
    const { scene } = useThree()

    useEffect(() => {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5)
        directionalLight.position.set(-5, 5, 7)

        scene.add(ambientLight, directionalLight)
        return () => {
            scene.remove(ambientLight)
            scene.remove(directionalLight)
        }
    }, [scene])

    return null
}

export default Lighting
