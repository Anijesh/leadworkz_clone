"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[100vh] flex flex-col items-center pt-28 md:pt-32 overflow-hidden bg-white">
      {/* Cityscape Background fading into white at bottom */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-[center_top] opacity-90"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white z-0"></div>

      <div className="relative z-10 w-full max-w-[85rem] mx-auto flex flex-col items-center text-center mt-8 md:mt-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Monumental Gradient Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[10rem] font-black tracking-tighter leading-[0.85] z-10 relative"
          >
            <span className="text-[#2563EB]">Turn </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#6366F1]">Clicks</span>
            <br/>
            <span className="text-[#2563EB]">Into Customers</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold tracking-tight mt-4 md:mt-6 mb-8 md:mb-12 text-[#2563EB]"
          >
            With Data-Driven Digital Marketing
          </motion.h2>

          {/* Glowing CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-[#818cf8] via-[#2563EB] to-[#2563EB] text-white rounded-full flex items-center justify-center px-8 md:px-10 py-3 md:py-4 font-bold text-base md:text-lg hover:shadow-[0_15px_40px_rgba(37,99,235,0.5)] transition-all duration-300 shadow-[0_10px_30px_rgba(37,99,235,0.4)] group"
          >
            Let's talk
            <div className="bg-white rounded-full p-1 md:p-1.5 ml-3 md:ml-4 group-hover:translate-x-1 transition-transform">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Full-Spectrum Digital Services Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-6 md:bottom-10 w-full z-20"
      >
        <div className="w-full max-w-[90rem] mx-auto px-6 flex justify-between items-end mb-3 md:mb-4">
          <div className="text-[#2563EB] font-bold text-xs md:text-sm leading-snug hidden md:block text-left">
            Full-Spectrum Digital Services <br/> Data-Driven Marketing Agency
          </div>
          <div className="text-[#2563EB] font-bold text-xs md:text-sm leading-snug hidden md:block text-right">
            Delivering results, <br/> not just promises
          </div>
        </div>

        <div className="w-full overflow-hidden relative py-3 md:py-4">
          <div className="absolute inset-y-0 left-0 w-20 md:w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 md:w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-3 md:gap-4 w-max px-4"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-3 md:gap-4">
                {["SEO / SEM", "Social Media Marketing", "Website Design", "UI / UX Design", "Branding & Strategy", "Performance Marketing", "CRO"].map((text, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 md:px-6 py-2.5 md:py-3 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-[0_8px_25px_-5px_rgba(0,0,0,0.08)] cursor-default text-xs md:text-sm font-bold text-gray-700 whitespace-nowrap hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    {text}
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
