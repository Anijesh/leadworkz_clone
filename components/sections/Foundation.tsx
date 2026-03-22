"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const GlobeCanvas = dynamic(() => import("@/components/three/GlobeCanvas"), { ssr: false });

export default function Foundation() {
  return (
    <section className="relative w-full bg-[#050505] py-32 px-6 overflow-hidden border-t border-white/5">
      <div className="glow-radial-cyan absolute top-1/2 left-[20%] -translate-y-1/2 w-[600px] h-[600px] blur-[150px] rounded-full z-0 opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 relative">

        {/* Left Side: 3D Globe */}
        <div className="w-full h-[400px] md:h-[600px] relative rounded-[40px] overflow-hidden glass-nav flex items-center justify-center border border-white/10 shadow-2xl">
          <Suspense fallback={<div className="text-white/30 text-sm font-bold tracking-widest uppercase animate-pulse">Loading Environment...</div>}>
            <GlobeCanvas />
          </Suspense>
        </div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6">
            <span className="text-blue-vibrant font-black tracking-[0.2em] uppercase text-xs">01. The Foundation</span>
            <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-black mt-4 tracking-tighter leading-[1] mb-6">
              Global Reach.<br /> <span className="text-outline">Local Impact.</span>
            </h2>
          </div>

          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl font-medium">
            We build digital systems that transcend borders while dominating localized search intent. By scaling predictable acquisition channels, your growth is never capped by geography.
          </p>

          <ul className="space-y-6">
            {[
              "Hyper-targeted Search Engine Marketing",
              "Data-driven Social Advertising",
              "Conversion Rate Optimization"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-5 text-white/90 font-medium text-[17px]">
                <div className="w-10 h-10 rounded-full bg-blue-vibrant/20 flex items-center justify-center text-blue-vibrant border border-blue-vibrant/40 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
