"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Suspense, useRef } from "react";

const GlobeCanvas = dynamic(() => import("@/components/three/GlobeCanvas"), { ssr: false });

export default function Foundation() {
  const containerRef = useRef<HTMLElement>(null);
  
  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#030303] py-20">
      
      {/* Parallax/Fixed Cityscape Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-[0.35] pointer-events-none" 
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      ></div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center h-full pt-10 pb-20">
        
        {/* Massive Background Heading */}
        <h2 className="absolute top-[8%] left-1/2 -translate-x-1/2 w-full text-center text-[18vw] md:text-[20vw] font-black uppercase tracking-tighter leading-none bg-gradient-to-b from-[#3B82F6]/60 to-[#8B5CF6]/10 bg-clip-text text-transparent select-none mix-blend-screen px-4 pointer-events-none z-0">
          Global Reach
        </h2>

        {/* Three.js 3D Globe Canvas Container */}
        <div className="relative w-full h-[450px] md:h-[650px] flex items-center justify-center z-20 pointer-events-auto">
          <Suspense fallback={<div className="font-bold text-[#6366F1] animate-pulse">Loading 3D...</div>}>
            <GlobeCanvas />
          </Suspense>
        </div>

        {/* Foreground Content */}
        <div className="relative mt-[-40px] md:mt-[-100px] text-center px-4 max-w-4xl z-30">
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight drop-shadow-2xl leading-tight">
            The Foundation of <br/> Digital Growth
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-white/50 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
            <span>Signal Discovery</span>
            <span className="text-[#3B82F6]">•</span>
            <span>Strategy Architecture</span>
            <span className="text-[#3B82F6]">•</span>
            <span>Execution at Speed</span>
          </div>
        </div>
        
      </div>
    </section>
  );
}
