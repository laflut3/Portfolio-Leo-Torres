import { Float, Sparkles } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function IntroScene({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null)
  const core = useRef<THREE.Mesh>(null)
  const rings = useMemo(
    () =>
      [
        [0.25, 0.4, 0.9],
        [1.15, -0.35, -0.55],
        [-0.6, 0.7, 0.2],
      ] as const,
    [],
  )

  useFrame((state, delta) => {
    if (reducedMotion || !group.current || !core.current) return

    const elapsed = state.clock.elapsedTime
    group.current.rotation.y += delta * 0.16
    group.current.rotation.x = Math.sin(elapsed * 0.35) * 0.16
    core.current.rotation.y -= delta * 0.34
    core.current.rotation.z += delta * 0.09
    core.current.scale.setScalar(1 + Math.sin(elapsed * 1.5) * 0.045)
  })

  return (
    <group ref={group} rotation={[0.1, -0.5, 0]}>
      <Float
        speed={reducedMotion ? 0 : 1.1}
        rotationIntensity={0.08}
        floatIntensity={0.25}
      >
        <mesh ref={core}>
          <icosahedronGeometry args={[1.18, 3]} />
          <meshStandardMaterial
            color="#739d61"
            emissive="#263e24"
            emissiveIntensity={0.52}
            metalness={0.74}
            roughness={0.24}
            transparent
            opacity={0.62}
          />
        </mesh>
        <mesh scale={1.07}>
          <icosahedronGeometry args={[1.18, 2]} />
          <meshBasicMaterial
            color="#c7e4b6"
            transparent
            opacity={0.27}
            wireframe
          />
        </mesh>
      </Float>

      {rings.map((rotation, index) => (
        <mesh key={rotation.join('-')} rotation={rotation}>
          <torusGeometry args={[1.78 + index * 0.25, 0.014, 8, 96]} />
          <meshBasicMaterial
            color={index === 1 ? '#dbeed0' : '#82aa70'}
            transparent
            opacity={0.7 - index * 0.12}
          />
        </mesh>
      ))}
      <Sparkles
        count={34}
        scale={5.2}
        size={1.35}
        speed={reducedMotion ? 0 : 0.22}
        color="#dcefd2"
      />
    </group>
  )
}

export function IntroArtifact({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        dpr={[1, 1.5]}
        frameloop={reducedMotion ? 'demand' : 'always'}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight
          position={[3, 4, 4]}
          intensity={2.5}
          color="#eff9e9"
        />
        <pointLight
          position={[-3, -2, 2]}
          intensity={6}
          distance={8}
          color="#6c9e5a"
        />
        <IntroScene reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  )
}
