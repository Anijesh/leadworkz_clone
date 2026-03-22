"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative w-full min-h-screen bg-white py-20 overflow-hidden flex items-center justify-center">
      <div className="max-w-[1200px] mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between z-10 relative">
        
        {/* Left Side: Copy and the specific 3D Rotating Layers Graphic */}
        <div className="w-full md:w-[45%] flex flex-col items-start relative z-30 mb-20 md:mb-0">
          
          {/* Animated 3D Stack Graphic exactly referencing Screenshot 1 */}
          <motion.div 
            animate={{ rotateZ: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="w-24 h-24 relative mb-10 ml-4 flex flex-col items-center justify-center"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            {/* The 3 Stacked Isometric Layers built via CSS absolute positioning */}
            <div className="absolute w-20 h-20 bg-gradient-to-tr from-[#3b82f6] to-[#8b5cf6] rounded-[20px] shadow-[0_10px_30px_rgba(37,99,235,0.5)] border-t-[4px] border-white/40" style={{ transform: 'rotateX(60deg) rotateZ(-45deg) translateZ(30px)' }}>
              <div className="w-8 h-8 rounded bg-white/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md"></div>
            </div>
            <div className="absolute w-20 h-20 bg-white/80 rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.1)] border-[2px] border-[#2563eb]" style={{ transform: 'rotateX(60deg) rotateZ(-45deg) translateZ(0px)' }}></div>
            <div className="absolute w-20 h-20 bg-white/90 rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-[2px] border-[#2563eb]/40" style={{ transform: 'rotateX(60deg) rotateZ(-45deg) translateZ(-30px)' }}></div>
          </motion.div>

          <span className="text-[#A855F7] font-bold text-[10px] uppercase tracking-widest mb-4">SEO</span>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-black text-[#2563EB] tracking-tighter leading-[0.95] mb-8 drop-shadow-sm">
            We'll Bring You <br/> the <br/> Customers.
          </h2>

          <button className="border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors duration-300 rounded-full px-8 py-3 text-sm font-bold tracking-widest relative bg-transparent uppercase mb-8 shadow-sm">
            let's talk
          </button>

          <p className="text-[#2563EB]/80 font-semibold text-sm leading-relaxed max-w-sm">
            From lead generation to conversion optimization, we build digital systems that consistently bring qualified customers to your business.
          </p>
        </div>

        {/* Right Side: Massive Typography and Beanbag */}
        <div className="w-full md:w-[55%] relative flex items-center justify-center h-[600px]">
          
          {/* Outlined Sit Back */}
          <h1 className="absolute top-0 right-0 md:-right-20 text-[7rem] md:text-[12rem] lg:text-[13rem] font-black tracking-tighter leading-none z-0" style={{ color: 'white', WebkitTextStroke: '2px #2563EB' }}>
            Sit Back
          </h1>

          {/* Man in Beanbag */}
          <img 
            src="/relax-bg.png" 
            alt="Relax in beanbag" 
            className="w-[400px] md:w-[650px] relative z-20 top-10 md:top-20 drop-shadow-[0_40px_60px_rgba(0,0,0,0.4)]" 
          />

          {/* Solid Relax */ }
          <h1 className="absolute bottom-0 right-0 md:-right-10 text-[9rem] md:text-[14rem] lg:text-[16rem] font-black tracking-x-tighter leading-none text-[#2563EB] z-30 drop-shadow-[0_10px_30px_rgba(37,99,235,0.4)]">
            Relax.
          </h1>

        </div>
      </div>
    </section>
  );
}
