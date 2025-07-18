import { useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import {
    EffectComposer,
    RenderPass,
    EffectPass,
    ASCIIEffect,
    ASCIITexture,
} from 'postprocessing'

import { Model } from './ButterflyDraco'

function SceneContent({ cellSize, color, asciiEnabled }) {
    const { scene, camera, gl } = useThree()
    const composerRef = useRef()

    useEffect(() => {
        gl.autoClear = true

        const composer = new EffectComposer(gl)
        composerRef.current = composer

        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        let asciiPass
        if (asciiEnabled) {
            const asciiTexture = new ASCIITexture({ characters: '.:-+*=%@# ' })
            asciiPass = new EffectPass(
                camera,
                new ASCIIEffect({
                    asciiTexture,
                    cellSize,
                    color,
                    inverted: true,
                })
            )
            composer.addPass(asciiPass)
        }

        const handleResize = () => {
            const { innerWidth, innerHeight, devicePixelRatio } = window
            camera.aspect = innerWidth / innerHeight
            camera.updateProjectionMatrix()
            gl.setSize(innerWidth, innerHeight)
            gl.setPixelRatio(Math.min(devicePixelRatio, 2))
            composer.setSize(innerWidth, innerHeight)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        const render = () => {
            gl.clear()
            composer.render()
            requestAnimationFrame(render)
        }

        render()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [camera, gl, scene, cellSize, color, asciiEnabled])

    return <Model scale={0.043} position={[0, -2.2, 0]} />
}

export default SceneContent
