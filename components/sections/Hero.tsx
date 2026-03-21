"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background layer */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 z-0"></div>
      <div className="glow-radial-blue absolute top-[30%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[100px] z-0 opacity-50"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-8"
        >
          <span className="bg-white/10 text-white border border-white/20 px-6 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase shadow-lg backdrop-blur-md">
            Full-Spectrum Digital Services
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[1.05] mb-8"
        >
          Turn Clicks <br/>
          <span className="bg-gradient-to-b from-white to-white/30 bg-clip-text text-transparent">Into Customers</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/60 max-w-2xl mb-12 font-medium"
        >
          Relax. We'll Bring You the Customers. With Data-Driven Digital Marketing, we deliver results, not just promises.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button className="bg-blue-vibrant hover:scale-105 hover:shadow-[0_10px_40px_rgba(37,99,235,0.5)] transition-all duration-300 transform text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm w-full sm:w-auto">
            Let's build this
          </button>
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm w-full sm:w-auto">
            View Use Cases
          </button>
        </motion.div>
      </div>
    </section>
  );
}
