"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { motion } from "framer-motion";

const GlobeCanvas = dynamic(() => import("@/components/three/GlobeCanvas"), { ssr: false });

export default function Foundation() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] w-full flex flex-col items-center justify-start overflow-hidden bg-gradient-to-b from-white via-white/95 to-white pt-10">

      {/* Cityscape Background with fade */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-[center_top] bg-no-repeat opacity-40 pointer-events-none"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white z-0"></div>

      <div className="relative z-10 w-full flex flex-col items-center justify-start h-full pt-6 md:pt-10 pb-10 md:pb-20">

        {/* Title Case Background Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.9, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full text-center text-[18vw] sm:text-[20vw] md:text-[18vw] font-black tracking-tighter leading-none bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent select-none z-10 pb-0 drop-shadow-sm mb-[-15vh] sm:mb-[-20vh] md:mb-[-35vh]"
        >
          Global Reach
        </motion.h2>

        {/* Three.js 3D Globe Canvas Container floating over text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full h-[350px] sm:h-[450px] md:h-[700px] flex items-center justify-center z-20 pointer-events-auto"
        >
          <Suspense fallback={
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-4 border-[#6366F1]/30 border-t-[#6366F1] rounded-full animate-spin"></div>
              <span className="font-bold text-[#6366F1]">Loading 3D Globe...</span>
            </div>
          }>
            <GlobeCanvas />
          </Suspense>
        </motion.div>

      </div>
    </section>
  );
}
