import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function CameraControls() {
    return (
        <>
            <PerspectiveCamera
                makeDefault
                fov={60}
                position={[4, 0, 4]}
                onUpdate={(c) => c.lookAt(new THREE.Vector3(0, 2.5, 0))}
            />
            <OrbitControls
                enableDamping
                enableZoom={false}
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
            />
        </>
    )
}

export default CameraControls
