"use client";

import { motion } from "framer-motion";

const tools = ["Google Ads", "Meta", "Hubble", "Photoshop", "Figma", "WordPress", "VS Code", "HubSpot"];

export default function About() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Value Prop (White/Light) */}
      <section id="about" className="relative w-full bg-[#fafafa] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1] mb-6">
              <span className="text-gray-900">Build For Visibility.</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#A855F7]">Optimized For Revenue.</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We build predictable demand with no unnecessary spend. Accelerate growth through performance-driven marketing systems designed to convert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Strategy Transition (Intense Royal Blue Background) per Subagent */}
      <section className="relative w-full bg-[#0d2269] py-32 md:py-48 overflow-hidden flex flex-col items-center justify-center">
        {/* Massive Outline Text Background */}
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden pointer-events-none opacity-20">
          <motion.h2 
            animate={{ x: [0, -500] }} 
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="text-[12rem] md:text-[20rem] font-black tracking-tighter leading-none text-transparent whitespace-nowrap" 
            style={{ WebkitTextStroke: '3px white' }}
          >
            STRATEGY. PRECISION. GROWTH. STRATEGY. PRECISION.
          </motion.h2>
        </div>
        <div className="relative z-10 text-center max-w-5xl px-6">
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-xl">
            Build predictable demand. <br /> Accelerating business growth.
          </h3>
        </div>
      </section>

      {/* 3. Everyday's Toolbox (Solid Black) per Subagent */}
      <section className="relative w-full bg-black py-24 overflow-hidden border-t border-white/10">
        <div className="text-center mb-16 px-6">
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Everyday's Toolbox</h3>
          <p className="text-white/50 font-bold tracking-widest uppercase text-sm">Mastered for every project.</p>
        </div>
        
        <div className="relative w-full overflow-hidden py-4">
          {/* Gradient masks for smooth fading at the edges */}
          <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

          <motion.div
            animate={{ x: [0, -1500] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-8 w-max px-8"
          >
            {[...tools, ...tools, ...tools, ...tools].map((tool, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB] shadow-[0_0_10px_#2563EB]"></div>
                <span className="font-bold text-white tracking-wide">{tool}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
