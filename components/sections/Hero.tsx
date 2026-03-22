"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] flex flex-col items-center pt-32 overflow-hidden bg-white">
      {/* Cityscape Background fading into white at bottom */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-[center_top] opacity-90"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/50 to-white z-0"></div>

      <div className="relative z-10 w-full max-w-[85rem] mx-auto flex flex-col items-center text-center mt-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="flex flex-col items-center">
            
            {/* Monumental Gradient Heading exactly matching screenshot 2 */}
            <h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-[0.9] z-10 relative">
                <span className="text-[#2563EB]">Turn </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#6366F1]">Clicks</span><br/>
                <span className="text-[#2563EB]">Into Customers</span>
            </h1>

            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight mt-6 mb-12 text-[#2563EB]">
              With Data-Driven Digital Marketing
            </h2>

            {/* Glowing CTA Button */}
            <button className="bg-gradient-to-r from-[#818cf8] via-[#2563EB] to-[#2563EB] text-white rounded-full flex items-center justify-center px-10 py-4 font-bold text-lg hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(37,99,235,0.4)] group">
              Let's talk
              <div className="bg-white rounded-full p-1.5 ml-4 group-hover:translate-x-1 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </div>
            </button>

        </motion.div>
      </div>

      {/* Full-Spectrum Digital Services Marquee directly from HTML DOM */}
      <div className="absolute bottom-10 w-full z-20">
        <div className="w-full max-w-[90rem] mx-auto px-6 flex justify-between items-end mb-4">
          <div className="text-[#2563EB] font-bold text-sm leading-snug hidden md:block text-left">
            Full-Spectrum Digital Services <br/> Data-Driven Marketing Agency
          </div>
          <div className="text-[#2563EB] font-bold text-sm leading-snug hidden md:block text-right">
            Delivering results, <br/> not just promises
          </div>
        </div>

        <div className="w-full overflow-hidden relative py-4">
          <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          
          <motion.div 
            animate={{ x: [0, -1000] }} 
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-4 w-max px-4"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-4">
                {["SEO / SEM", "Social Media Marketing", "Website Design", "UI / UX Design", "Branding & Strategy", "Performance Marketing", "CRO"].map((text, idx) => (
                  <div key={idx} className="px-6 py-3 rounded-full bg-white/60 backdrop-blur-md border border-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] cursor-default hover:scale-105 transition-transform text-sm font-bold text-gray-700 whitespace-nowrap">
                    {text}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
