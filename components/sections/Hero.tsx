"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[140vh] w-full flex flex-col items-center pt-32 pb-32 overflow-hidden bg-white">
      {/* Cityscape Background explicit implementation per user command */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white z-0"></div>

      <div className="relative z-10 w-full max-w-[85rem] mx-auto flex flex-col items-center text-center mt-6 h-full">
        
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="flex flex-col items-center w-full relative h-[1000px]">
            {/* Top Text Cluster */}
            <h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-[0.8] text-[#5B4DFF] z-10 relative mt-10">
                Turn Clicks <br/> Into
            </h1>

            {/* Overlapping Outline and Beanbag Layer */}
            <div className="relative w-full mt-[-1rem] flex justify-center items-center pointer-events-none">
              <h1 className="absolute text-[6rem] md:text-[12rem] lg:text-[15rem] font-black tracking-tighter text-outline z-0 top-[2rem]">
                Sit Back
              </h1>
              
              <div className="relative z-20 mt-32 w-full md:w-[800px] h-[500px]">
                {/* Center Relax Image Mask Layer */}
                <img src="/relax-bg.png" alt="Relaxing in beanbag" className="w-[450px] md:w-[600px] absolute left-1/2 -translate-x-1/2 -top-10 z-20 object-contain drop-shadow-2xl"/>
                <h1 className="absolute text-[8rem] md:text-[14rem] lg:text-[18rem] font-black tracking-tighter text-[#2563EB] z-10 bottom-[-5rem] left-1/2 -translate-x-1/2 whitespace-nowrap">
                  Relax.
                </h1>
              </div>
            </div>
            
        </motion.div>

        {/* Left Aligned Content Structure overlapping */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="absolute left-6 md:left-20 text-left top-[35%] z-30 max-w-sm pointer-events-auto">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#2563EB] tracking-tighter mb-8 leading-[1.1]">
              We'll Bring You <br/> the <br/> Customers.
            </h2>
            <button className="border-2 bg-white/50 backdrop-blur-md border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors duration-300 rounded-full px-8 py-3 text-sm font-bold tracking-widest uppercase mb-6 shadow-xl w-full sm:w-auto text-center">
              let's talk
            </button>
            <p className="text-[#2563EB] text-sm md:text-base font-medium leading-relaxed drop-shadow-md bg-white/20 backdrop-blur p-4 rounded-xl border border-white/40">
              From lead generation to conversion optimization, we build digital systems that consistently bring qualified customers to your business.
            </p>
        </motion.div>
      </div>
    </section>
  );
}
