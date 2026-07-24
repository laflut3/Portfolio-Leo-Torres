import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

type OrbitArtifactProps = {
  reducedMotion?: boolean
}

function Artifact({ reducedMotion = false }: OrbitArtifactProps) {
  const group = useRef<THREE.Group>(null)
  const core = useRef<THREE.Mesh>(null)
  const { pointer } = useThree()

  const orbitRotations = useMemo(
    () =>
      [
        [0.35, 0.2, 0.8],
        [1.15, -0.5, -0.45],
        [-0.65, 0.55, 0.15],
      ] as const,
    [],
  )

  useFrame((state, delta) => {
    if (!group.current || !core.current || reducedMotion) return

    const elapsed = state.clock.elapsedTime
    group.current.rotation.y += delta * 0.12
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.y * 0.14,
      0.025,
    )
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      pointer.x * -0.1,
      0.025,
    )
    core.current.rotation.y -= delta * 0.22
    core.current.scale.setScalar(1 + Math.sin(elapsed * 1.6) * 0.025)
  })

  return (
    <group ref={group} rotation={[0.1, -0.5, 0]}>
      <Float
        speed={reducedMotion ? 0 : 1.25}
        rotationIntensity={0.08}
        floatIntensity={0.35}
      >
        <mesh ref={core}>
          <icosahedronGeometry args={[1.28, 3]} />
          <meshStandardMaterial
            color="#d9a441"
            emissive="#512b0c"
            emissiveIntensity={0.35}
            metalness={0.72}
            roughness={0.26}
          />
        </mesh>
        <mesh scale={1.045}>
          <icosahedronGeometry args={[1.28, 2]} />
          <meshBasicMaterial
            color="#f8dfa3"
            transparent
            opacity={0.12}
            wireframe
          />
        </mesh>
      </Float>

      {orbitRotations.map((rotation, index) => (
        <mesh key={rotation.join('-')} rotation={rotation}>
          <torusGeometry args={[1.86 + index * 0.26, 0.016, 8, 96]} />
          <meshBasicMaterial
            color={index === 1 ? '#d9a441' : '#8fc1d2'}
            transparent
            opacity={0.72}
          />
        </mesh>
      ))}
      <Sparkles
        count={36}
        scale={5.4}
        size={1.4}
        speed={reducedMotion ? 0 : 0.25}
        color="#f8dfa3"
      />
    </group>
  )
}

export function OrbitArtifact({ reducedMotion = false }: OrbitArtifactProps) {
  return (
    <div className="orbit-artifact" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6.4], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        }}
      >
        <ambientLight intensity={1.4} />
        <directionalLight
          position={[3, 4, 4]}
          intensity={2.4}
          color="#fff4cf"
        />
        <pointLight
          position={[-3, -2, 2]}
          intensity={8}
          distance={8}
          color="#3e8aa4"
        />
        <Artifact reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  )
}
