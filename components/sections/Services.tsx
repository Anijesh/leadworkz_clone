"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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
    img: "url('https://images.unsplash.com/photo-1571721795152-16e6f119e0dd?q=80&w=640&auto=format&fit=crop')"
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
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Stretch the scroll height dynamically for the 360-degree rotation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate 360 degree rotation exactly mapped to the vertical scroll
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -360]);

  // Handle radius dynamically to avoid completely breaking the layout on small devices
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
    <section ref={containerRef} className="bg-white text-black relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center overflow-hidden" style={{ perspective: '2000px' }}>
        
        {/* Top Heading */}
        <div className="absolute top-[10vh] md:top-[12vh] w-full text-center flex flex-col items-center z-50">
          <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black tracking-tighter text-black-true leading-[1] drop-shadow-sm">
            Full-Spectrum <span className="text-[#2563EB]">Digital Services</span>
          </h2>
        </div>

        {/* 3D Rotating Cylinder Axis */}
        <div className="absolute inset-0 flex items-center justify-center top-[10vh]">
          <motion.div 
            style={{ 
              rotateY,
              transformStyle: "preserve-3d",
              z: -radius // Push the whole cylinder backwards natively so front card aligns flush Z=0
            }} 
            className="relative w-[340px] md:w-[640px] h-[540px]"
          >
            {services.map((service, idx) => {
              const angle = (360 / services.length) * idx;

              return (
                <div 
                  key={idx} 
                  className="absolute inset-0 bg-[#2563EB] rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex flex-col border border-white/10"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: "hidden", // Crucial for clean 360 overlap
                    WebkitBackfaceVisibility: "hidden"
                  }}
                >
                  {/* Top Image Section */}
                  <div 
                    className="h-[55%] w-full bg-cover bg-center"
                    style={{ backgroundImage: service.img, backgroundColor: '#0a0a0a' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2563EB]/40 to-transparent"></div>
                    <div className="absolute top-6 left-6 text-white text-xs font-black bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg">
                      {service.num}
                    </div>
                  </div>
                  
                  {/* Bottom Content */}
                  <div className="h-[45%] w-full bg-[#2563EB] p-8 md:p-10 flex flex-col justify-between z-10 border-t border-white/20">
                    <div>
                      <h4 className="text-[10px] font-bold text-white/70 uppercase tracking-[0.2em] mb-3">{service.subtitle}</h4>
                      <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight mb-2">{service.title}</h3>
                      <p className="text-white/80 font-medium text-xs md:text-sm leading-relaxed max-w-sm">{service.desc}</p>
                    </div>
                    
                    <button className="bg-white text-[#2563EB] hover:scale-105 transition-transform w-fit px-6 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 shadow-lg tracking-widest uppercase">
                      Explore Service <span className="text-lg leading-none">&rarr;</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
