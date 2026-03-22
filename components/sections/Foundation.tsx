"use client";

import dynamic from "next/dynamic";
import { Suspense, useRef } from "react";

const GlobeCanvas = dynamic(() => import("@/components/three/GlobeCanvas"), { ssr: false });

export default function Foundation() {
  const containerRef = useRef<HTMLElement>(null);
  
  return (
    <section ref={containerRef} className="relative min-h-[90vh] md:min-h-[100vh] w-full flex flex-col items-center justify-start overflow-hidden bg-white/50 pt-10">
      
      {/* Cityscape Background, bright and un-tinted to perfectly match screenshot */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-[center_top] bg-no-repeat bg-fixed opacity-100 mix-blend-normal pointer-events-none" 
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      ></div>

      <div className="relative z-10 w-full flex flex-col items-center justify-start h-full pt-10 pb-20 mt-10">
        
        {/* Title Case Background Heading in #6B72FF per screenshot */}
        <h2 className="relative w-full text-center text-[22vw] md:text-[20vw] font-black tracking-tighter leading-none bg-gradient-to-r from-[#6366F1] to-[#6366F1] bg-clip-text text-transparent select-none z-10 opacity-90 pb-0 drop-shadow-sm mb-[-25vh] md:mb-[-40vh]">
          Global Reach
        </h2>

        {/* Three.js 3D Globe Canvas Container floating over text */}
        <div className="relative w-full h-[500px] md:h-[800px] flex items-center justify-center z-20 pointer-events-auto">
          <Suspense fallback={<div className="font-bold text-[#6366F1] animate-pulse">Loading 3D...</div>}>
            <GlobeCanvas />
          </Suspense>
        </div>
        
      </div>
    </section>
  );
}
