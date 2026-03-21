"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DottedGlobe from "./DottedGlobe";

export default function GlobeCanvas() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <DottedGlobe />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} enablePan={false} />
      </Canvas>
    </div>
  );
}
