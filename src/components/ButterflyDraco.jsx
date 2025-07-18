import React, { useEffect, useRef, useMemo } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = useRef()
  const { scene, animations } = useGLTF('./Model/butterflyDraco.gltf')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions, mixer } = useAnimations(animations, group)

  useEffect(() => {
    if (actions['metarig|3']) {
      mixer.timeScale = 1.5
      actions['metarig|3'].play()
    }
  }, [actions, mixer])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="b2d9c633a55843279468644577f814bcfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="metarig" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_66"
                      geometry={nodes.Object_66.geometry}
                      material={materials.BUTTFACE}
                      skeleton={nodes.Object_66.skeleton}
                    />
                    <skinnedMesh
                      name="Object_68"
                      geometry={nodes.Object_68.geometry}
                      material={materials.BUTTWIBA}
                      skeleton={nodes.Object_68.skeleton}
                    />
                    <skinnedMesh
                      name="Object_70"
                      geometry={nodes.Object_70.geometry}
                      material={materials.BUTTWIFR}
                      skeleton={nodes.Object_70.skeleton}
                    />
                    <skinnedMesh
                      name="Object_72"
                      geometry={nodes.Object_72.geometry}
                      material={materials.BUTTBODY}
                      skeleton={nodes.Object_72.skeleton}
                    />
                    <skinnedMesh
                      name="Object_74"
                      geometry={nodes.Object_74.geometry}
                      material={materials.EYES}
                      skeleton={nodes.Object_74.skeleton}
                    />
                    <skinnedMesh
                      name="Object_76"
                      geometry={nodes.Object_76.geometry}
                      material={materials.BUTTPIEZ}
                      skeleton={nodes.Object_76.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./Model/butterflyDraco.gltf')
