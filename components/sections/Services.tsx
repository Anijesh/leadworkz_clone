"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  {
    num: "01",
    title: "Brand & Creative Strategy",
    subtitle: "BRANDING",
    desc: "Defining Clear Brand Direction & Creative Foundations That Drive Consistency",
    img: "url('https://www.leadworkz.com/Images/brand%20&%20creative%20strategy.jpg')"
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
  },
  {
    num: "04",
    title: "Website Design & Development",
    subtitle: "DEVELOPMENT",
    desc: "Designing digital experiences built for performance and scale.",
    img: "url('https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=640&auto=format&fit=crop')"
  },
  {
    num: "05",
    title: "Search Engine Optimization (SEO)",
    subtitle: "SEARCH",
    desc: "Building sustainable visibility where intent begins.",
    img: "url('https://www.leadworkz.com/Images/seo.png')"
  },
  {
    num: "06",
    title: "Conversion Rate Optimization",
    subtitle: "CRO",
    desc: "Maximizing the revenue potential of every visitor through data-driven testing.",
    img: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=640&auto=format&fit=crop')"
  }
];

export default function Services() {
  const [radius, setRadius] = useState(800);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 400 : 800);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="services" className="bg-[#fafafa] text-black relative overflow-hidden py-32 border-t border-gray-200">
      
      {/* Top Heading */}
      <div className="w-full text-center flex flex-col items-center z-50 mb-[15vh] md:mb-[25vh]">
        <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black tracking-tighter text-gray-900 leading-[1] drop-shadow-sm">
          Full-Spectrum <br className="md:hidden"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#2563EB]">Digital Services</span>
        </h2>
      </div>

      {/* Actual 360-Degree Continuous 3D Movement */}
      <div className="relative w-full h-[600px] flex items-center justify-center" style={{ perspective: '2000px' }}>
        <motion.div
          animate={{ rotateY: [0, -360] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          style={{ transformStyle: "preserve-3d", z: -radius }}
          className="relative w-[340px] md:w-[640px] h-[540px]"
        >
          {services.map((service, idx) => {
            const angle = (360 / services.length) * idx;

            return (
              <div
                key={idx}
                className="absolute inset-0 group"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* --- FRONT FACE --- */}
                <div
                  className="absolute inset-0 bg-[#2563EB] rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] flex flex-col border border-white/10"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(0deg)", // Explicitly mark front side
                  }}
                >
                  {/* Clean Image Section */}
                  <div className="h-[55%] w-full relative overflow-hidden bg-[#0a0a0a]">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-[2s]"
                      style={{ backgroundImage: service.img }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2563EB]/40 to-transparent pointer-events-none"></div>
                    <div className="absolute top-6 left-6 text-white text-xs font-black bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg">
                      {service.num}
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="h-[45%] w-full bg-[#2563EB] p-8 md:p-10 flex flex-col justify-between z-10 border-t border-white/20">
                    <div>
                      <h4 className="text-[10px] font-bold text-white/70 uppercase tracking-[0.2em] mb-3">{service.subtitle}</h4>
                      <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight mb-2">{service.title}</h3>
                      <p className="text-white/80 font-medium text-xs md:text-sm leading-relaxed max-w-sm line-clamp-2 md:line-clamp-none">{service.desc}</p>
                    </div>

                    <button className="bg-white text-[#2563EB] hover:bg-gray-50 transition-colors w-fit px-6 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 shadow-lg tracking-widest uppercase mt-4 pointer-events-auto">
                      Explore Service <span className="text-lg leading-none">&rarr;</span>
                    </button>
                  </div>
                </div>

                {/* --- BACK FACE --- */}
                <div
                  className="absolute inset-0 rounded-[32px] overflow-hidden border border-[#2563EB]/50 flex flex-col items-center justify-center p-8 text-center shadow-[0_30px_60px_rgba(37,99,235,0.2)] bg-[#0f172a]"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  {/* Subtle Grid Pattern for Premium Look */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 mb-8 rounded-full bg-gradient-to-br from-[#2563EB] to-[#A855F7] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                      <span className="text-white font-black text-2xl">{service.num}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide">{service.title}</h3>
                    <p className="text-[#a1a1aa] text-xs font-black uppercase tracking-[0.3em]">Leadworkz Dynamics</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      
    </section>
  );
}
