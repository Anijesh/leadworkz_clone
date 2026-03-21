"use client";

import { useEffect, useState } from "react";

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
    <header className={`fixed left-1/2 -translate-x-1/2 w-full max-w-[800px] z-50 transition-all duration-300 ${scrolled ? 'top-4' : 'top-8'}`}>
      
      {/* Floating Left Logo */}
      <div className="absolute -left-20 md:-left-32 top-1 hidden md:flex items-center justify-center p-2 z-50 bg-white shadow-xl rounded-xl">
          <div className="w-10 h-10 flex items-center justify-center bg-[#EAB308] font-black text-black text-sm transform -rotate-3 rounded-md">
            LW
          </div>
      </div>

      <div className="relative bg-[#1d1d1f]/90 backdrop-blur-xl rounded-full px-2 py-2 flex items-center justify-between shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-[#333]">
        <nav className="flex items-center w-full justify-between">
          <div className="flex md:gap-1 text-[10px] md:text-[11px] uppercase font-bold tracking-[0.1em] md:tracking-[0.15em] text-white/50 items-center justify-start w-full">
            <a href="#" className="text-white py-2.5 px-6 bg-[#2563EB] rounded-full shadow-lg ml-1">Home</a>
            <a href="#" className="hover:text-white transition-colors py-2.5 px-4 md:px-6 rounded-full hover:bg-white/10 hidden sm:block">About Us</a>
            <a href="#" className="hover:text-white transition-colors py-2.5 px-4 md:px-6 rounded-full hover:bg-white/10">Services</a>
            <a href="#" className="hover:text-white transition-colors py-2.5 px-4 md:px-6 rounded-full hover:bg-white/10 hidden md:block">Industries</a>
            <a href="#" className="hover:text-white transition-colors py-2.5 px-4 md:px-6 rounded-full hover:bg-white/10">Contact</a>
          </div>
          <div className="pr-5 shrink-0 hidden sm:block">
            <div className="w-[5px] h-[5px] rounded-full bg-[#2563EB] shadow-[0_0_8px_rgba(37,99,235,1)]"></div>
          </div>
        </nav>
      </div>
    </header>
  );
}
