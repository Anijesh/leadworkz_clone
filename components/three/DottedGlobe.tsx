"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function DottedGlobe() {
  const pointsRef = useRef<THREE.Points>(null!);

  const particlesPosition = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const radius = 2.2; 

    for (let i = 0; i < count; i++) {
        const phi = Math.acos( -1 + ( 2 * i ) / count );
        const theta = Math.sqrt( count * Math.PI ) * phi;

        positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
        positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
        positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.15;
      pointsRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position"
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.035}
        color="#2563eb"
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
}
