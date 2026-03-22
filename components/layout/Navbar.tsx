"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-1/2 -translate-x-1/2 w-[95%] max-w-[900px] z-50 transition-all duration-300 ${scrolled ? 'top-4' : 'top-6'}`}
    >
      {/* Floating Left Logo */}
      <div className="absolute -left-16 md:-left-28 top-1 hidden lg:flex items-center justify-center p-2 z-50 bg-white shadow-xl rounded-xl">
        <div className="w-10 h-10 flex items-center justify-center bg-[#EAB308] font-black text-black text-sm transform -rotate-3 rounded-md">
          LW
        </div>
      </div>

      <div className="relative bg-[#1d1d1f]/95 backdrop-blur-xl rounded-full px-2 py-2 flex items-center justify-between shadow-[0_20px_40px_rgba(0,0,0,0.25)] border border-[#333]">
        <nav className="flex items-center w-full justify-between gap-1">
          <div className="flex md:gap-0.5 text-[10px] md:text-[11px] uppercase font-bold tracking-[0.1em] md:tracking-[0.12em] text-white/50 items-center">
            <a href="#hero" className="text-white py-2.5 px-4 md:px-5 bg-[#2563EB] rounded-full shadow-lg ml-1 hover:bg-[#1d4ed8] transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors py-2.5 px-3 md:px-4 rounded-full hover:bg-white/10 hidden sm:block">About</a>
            <a href="#services" className="hover:text-white transition-colors py-2.5 px-3 md:px-4 rounded-full hover:bg-white/10">Services</a>
            <a href="#process" className="hover:text-white transition-colors py-2.5 px-3 md:px-4 rounded-full hover:bg-white/10 hidden md:block">Process</a>
            <a href="#contact" className="hover:text-white transition-colors py-2.5 px-3 md:px-4 rounded-full hover:bg-white/10 hidden lg:block">Contact</a>
          </div>

          {/* Start Engine CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-[#A855F7] to-[#6366F1] text-white py-2.5 px-5 md:px-6 rounded-full text-[10px] md:text-[11px] uppercase font-bold tracking-wider shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-shadow mr-1 flex items-center gap-2"
          >
            <span className="hidden sm:inline">Start</span> Engine
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.button>
        </nav>
      </div>
    </motion.header>
  );
}
