import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  MeshTransmissionMaterial,
  RoundedBox,
  Sparkles,
  useTexture,
} from '@react-three/drei'
import * as THREE from 'three'
import { useRef } from 'react'

function FloatingCard({ image, position, rotation, scale }) {
  const texture = useTexture(image)

  return (
    <Float speed={1.5} rotationIntensity={0.28} floatIntensity={0.95}>
      <group position={position} rotation={rotation} scale={scale}>
        <RoundedBox args={[1.7, 1.7, 0.12]} radius={0.18} smoothness={4}>
          <meshStandardMaterial
            color="#0d1627"
            metalness={0.3}
            roughness={0.34}
          />
        </RoundedBox>

        <mesh position={[0, 0, 0.08]}>
          <planeGeometry args={[1.08, 1.08]} />
          <meshBasicMaterial map={texture} transparent toneMapped={false} />
        </mesh>
      </group>
    </Float>
  )
}

function SceneContents({ accent, portrait, techCards }) {
  const rigRef = useRef(null)
  const orbitRef = useRef(null)
  const portraitTexture = useTexture(portrait)

  useFrame((state, delta) => {
    if (rigRef.current) {
      rigRef.current.rotation.y = THREE.MathUtils.lerp(
        rigRef.current.rotation.y,
        state.pointer.x * 0.28,
        0.04,
      )
      rigRef.current.rotation.x = THREE.MathUtils.lerp(
        rigRef.current.rotation.x,
        state.pointer.y * -0.14,
        0.04,
      )
      rigRef.current.position.y = THREE.MathUtils.lerp(
        rigRef.current.position.y,
        Math.sin(state.clock.elapsedTime * 0.85) * 0.14,
        0.04,
      )
    }

    if (orbitRef.current) {
      orbitRef.current.rotation.z += delta * 0.17
      orbitRef.current.rotation.x += delta * 0.02
    }
  })

  return (
    <>
      <fog attach="fog" args={['#050816', 8, 16]} />
      <ambientLight intensity={1.2} color="#d9f4ff" />
      <directionalLight position={[3.5, 4, 4]} intensity={2.4} color="#9fe3ff" />
      <pointLight position={[-4, -2, 2]} intensity={1.8} color={accent} />
      <pointLight position={[0, 0, 6]} intensity={2.2} color="#ffffff" />

      <group ref={rigRef}>
        <Sparkles
          count={90}
          scale={[8, 6, 4]}
          size={2.2}
          speed={0.28}
          opacity={0.65}
          color={accent}
        />

        <mesh position={[0, -2.28, -0.4]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[4, 72]} />
          <meshBasicMaterial color={accent} transparent opacity={0.12} />
        </mesh>

        <group ref={orbitRef}>
          <mesh rotation={[Math.PI / 2, 0.24, 0]}>
            <torusGeometry args={[2.75, 0.025, 32, 180]} />
            <meshBasicMaterial color={accent} transparent opacity={0.42} />
          </mesh>

          <mesh rotation={[0.48, 0.6, Math.PI / 2]}>
            <torusGeometry args={[2.1, 0.02, 32, 180]} />
            <meshBasicMaterial color="#93c5fd" transparent opacity={0.24} />
          </mesh>

          <mesh position={[0, 0.15, -0.72]} rotation={[0.34, 0.1, 0]}>
            <ringGeometry args={[1.75, 2.1, 72]} />
            <meshBasicMaterial
              color={accent}
              transparent
              opacity={0.16}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>

        <Float speed={1.8} rotationIntensity={0.14} floatIntensity={0.75}>
          <group position={[0, 0.1, 0]}>
            <RoundedBox
              args={[3.3, 4.2, 0.28]}
              radius={0.28}
              smoothness={5}
              position={[0, 0, -0.16]}
            >
              <MeshTransmissionMaterial
                backside
                backsideThickness={0.36}
                thickness={0.5}
                chromaticAberration={0.03}
                anisotropy={0.18}
                roughness={0.08}
                distortion={0.12}
                distortionScale={0.2}
                temporalDistortion={0.14}
                clearcoat={1}
                transmission={1}
                color="#91d7ff"
              />
            </RoundedBox>

            <mesh position={[0, 0.12, 0.12]}>
              <planeGeometry args={[2.45, 2.72]} />
              <meshStandardMaterial
                map={portraitTexture}
                transparent
                alphaTest={0.08}
                roughness={0.7}
                metalness={0.06}
              />
            </mesh>
          </group>
        </Float>

        {techCards.map((card) => (
          <FloatingCard
            key={card.label}
            image={card.image}
            position={card.position}
            rotation={card.rotation}
            scale={card.scale}
          />
        ))}

        <mesh position={[0, -2.02, 0.22]}>
          <cylinderGeometry args={[1.35, 1.75, 0.34, 48]} />
          <meshStandardMaterial
            color="#09111f"
            metalness={0.68}
            roughness={0.24}
          />
        </mesh>

        <mesh position={[0, -1.92, 0.42]}>
          <cylinderGeometry args={[1.15, 1.45, 0.08, 48]} />
          <meshBasicMaterial color={accent} transparent opacity={0.26} />
        </mesh>
      </group>
    </>
  )
}

function HeroScene({ accent, portrait, techCards }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.15, 7.6], fov: 34 }}
      gl={{ antialias: true, alpha: true }}
    >
      <SceneContents accent={accent} portrait={portrait} techCards={techCards} />
    </Canvas>
  )
}

export default HeroScene
