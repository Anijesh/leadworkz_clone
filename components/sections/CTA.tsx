"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen bg-white py-16 md:py-20 overflow-hidden flex items-center justify-center">
      <div className="max-w-[1200px] mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between z-10 relative">

        {/* Left Side: Copy and the specific 3D Rotating Layers Graphic */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[45%] flex flex-col items-center md:items-start relative z-30 mb-16 md:mb-0"
        >
          {/* Animated 3D Stack Graphic */}
          <motion.div
            animate={{ rotateZ: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="w-20 h-20 md:w-24 md:h-24 relative mb-8 md:mb-10 flex flex-col items-center justify-center"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            <div className="absolute w-16 h-16 md:w-20 md:h-20 bg-gradient-to-tr from-[#3b82f6] to-[#8b5cf6] rounded-[16px] md:rounded-[20px] shadow-[0_10px_30px_rgba(37,99,235,0.5)] border-t-[3px] md:border-t-[4px] border-white/40" style={{ transform: 'rotateX(60deg) rotateZ(-45deg) translateZ(30px)' }}>
              <div className="w-6 h-6 md:w-8 md:h-8 rounded bg-white/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md"></div>
            </div>
            <div className="absolute w-16 h-16 md:w-20 md:h-20 bg-white/80 rounded-[16px] md:rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.1)] border-[2px] border-[#2563eb]" style={{ transform: 'rotateX(60deg) rotateZ(-45deg) translateZ(0px)' }}></div>
            <div className="absolute w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-[16px] md:rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-[2px] border-[#2563eb]/40" style={{ transform: 'rotateX(60deg) rotateZ(-45deg) translateZ(-30px)' }}></div>
          </motion.div>

          <span className="text-[#A855F7] font-bold text-[10px] uppercase tracking-widest mb-4">Full-Service Agency</span>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#2563EB] tracking-tighter leading-[0.95] mb-6 md:mb-8 drop-shadow-sm text-center md:text-left">
            We'll Bring You <br className="hidden md:block"/> the <br className="hidden md:block"/> Customers.
          </h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all duration-300 rounded-full px-8 py-3 text-sm font-bold tracking-widest relative bg-transparent uppercase mb-6 md:mb-8 shadow-sm hover:shadow-lg"
          >
            let's talk
          </motion.button>

          <p className="text-[#2563EB]/80 font-semibold text-sm leading-relaxed max-w-sm text-center md:text-left">
            From lead generation to conversion optimization, we build digital systems that consistently bring qualified customers to your business.
          </p>
        </motion.div>

        {/* Right Side: Massive Typography and Beanbag */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-[55%] relative flex items-center justify-center h-[400px] sm:h-[500px] md:h-[600px]"
        >
          {/* Outlined Sit Back */}
          <h1 className="absolute top-0 right-0 md:-right-10 lg:-right-20 text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[13rem] font-black tracking-tighter leading-none z-0" style={{ color: 'white', WebkitTextStroke: '1.5px #2563EB' }}>
            Sit Back
          </h1>

          {/* Man in Beanbag */}
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src="/relax-bg.png"
            alt="Relax in beanbag"
            className="w-[280px] sm:w-[350px] md:w-[500px] lg:w-[600px] relative z-20 top-5 md:top-10 drop-shadow-[0_30px_50px_rgba(0,0,0,0.3)]"
          />

          {/* Solid Relax */}
          <h1 className="absolute bottom-0 right-0 md:-right-5 lg:-right-10 text-[5rem] sm:text-[7rem] md:text-[12rem] lg:text-[15rem] font-black tracking-tighter leading-none text-[#2563EB] z-30 drop-shadow-[0_10px_30px_rgba(37,99,235,0.4)]">
            Relax.
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
