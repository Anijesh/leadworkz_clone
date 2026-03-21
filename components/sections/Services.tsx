"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "01",
    title: "Brand & Creative Strategy",
    subtitle: "BRANDING",
    desc: "Defining Clear Brand Direction & Creative Foundations That Drive Consistency",
    img: "url('https://images.unsplash.com/photo-1627582236528-56f8ae9fe4c2?q=80&w=640&auto=format&fit=crop')"
  },
  {
    num: "02",
    title: "Performance Advertising",
    subtitle: "PAID MEDIA",
    desc: "Scaling Revenue Through Data-Driven Omnichannel Media Buying Analytics",
    img: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=640&auto=format&fit=crop')"
  },
  {
    num: "03",
    title: "Social Media Marketing",
    subtitle: "SOCIAL",
    desc: "Turning attention into engagement across social platforms via targeted campaigns.",
    img: "url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=640&auto=format&fit=crop')"
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ["5%", "-50%"]);

  return (
    <section ref={containerRef} className="py-24 bg-white text-black overflow-hidden relative border-t border-gray-100 min-h-[150vh]">
      <div className="max-w-[90rem] mx-auto px-6 mb-20 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black mt-4 tracking-tighter text-black-true leading-[1]">
          Full-Spectrum <span className="text-[#2563EB]">Digital Services</span>
        </h2>
      </div>

      <div className="sticky top-40 h-[600px] w-full flex items-center overflow-hidden">
        <motion.div style={{ x: xTransform }} className="flex gap-10 absolute left-6 md:left-[10vw]">
          {services.map((service, idx) => (
            <div key={idx} className="w-[340px] md:w-[640px] h-[540px] bg-[#2563EB] rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] flex flex-col relative group transition-transform duration-500 hover:-translate-y-2">
              {/* Top Image Section */}
              <div 
                className="h-[55%] w-full bg-cover bg-center transition-transform duration-700 relative"
                style={{ backgroundImage: service.img, backgroundColor: '#000' }}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-6 left-6 text-white text-xs font-black bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg">
                  {service.num}
                </div>
              </div>
              
              {/* Bottom Content */}
              <div className="h-[45%] w-full bg-[#2563EB] p-8 md:p-10 flex flex-col justify-between z-10 border-t border-white/10">
                <div>
                  <h4 className="text-[10px] font-bold text-white/70 uppercase tracking-[0.2em] mb-3">{service.subtitle}</h4>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight mb-2">{service.title}</h3>
                  <p className="text-white/80 font-medium text-xs md:text-sm leading-relaxed max-w-sm">{service.desc}</p>
                </div>
                
                <button className="bg-white text-[#2563EB] hover:scale-105 transition-transform duration-300 w-fit px-6 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 shadow-lg tracking-widest uppercase">
                  Explore Service <span className="text-lg leading-none">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
