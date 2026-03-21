"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "B2B Lead Generation",
    subtitle: "Acquiring High-Value Clients",
    desc: "We deploy hyper-targeted LinkedIn and Search Engine Marketing to bypass gatekeepers and fill your pipeline.",
  },
  {
    title: "E-Commerce Scaling",
    subtitle: "Multiplying Revenue & ROAS",
    desc: "Data-driven Meta and Google Shopping campaigns engineered to maximize your return on ad spend.",
  },
  {
    title: "Local Market Dominance",
    subtitle: "Owning Your Local Footprint",
    desc: "Capturing high-intent local searches and mapping strategies to drive consistent foot traffic directly to your doors.",
  },
  {
    title: "SaaS User Acquisition",
    subtitle: "Accelerating MRR Growth",
    desc: "Optimizing conversion funnels and leveraging high-intent search to lower Customer Acquisition Costs (CAC).",
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Translates the horizontal slider based on vertical scroll
  const xTransform = useTransform(scrollYProgress, [0, 1], ["10%", "-40%"]);

  return (
    <section ref={containerRef} className="py-40 bg-off-white text-black overflow-hidden relative border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center md:text-left">
        <span className="text-blue-vibrant font-black tracking-widest uppercase text-sm">Growth Use Cases</span>
        <h2 className="text-5xl md:text-7xl font-black mt-4 tracking-tighter text-black-true">
          Engineered for <br className="hidden md:block"/> <span className="text-blue-vibrant">Scalability.</span>
        </h2>
      </div>

      <div className="relative h-[450px] w-full flex items-center overflow-hidden pl-6 md:pl-0">
        <motion.div 
          style={{ x: xTransform }} 
          className="flex gap-8 absolute md:left-[10vw]"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 0.97, rotateY: -3, rotateX: 3 }}
              className="min-w-[320px] md:min-w-[420px] h-[380px] bg-white rounded-3xl p-10 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-gray-100 cursor-pointer transition-colors duration-500 hover:border-blue-vibrant group flex flex-col justify-between"
              style={{ perspective: 1000 }}
            >
              <div>
                <h3 className="text-2xl font-black mb-2 group-hover:text-blue-vibrant transition-colors tracking-tight">{service.title}</h3>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">{service.subtitle}</h4>
                <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base">{service.desc}</p>
              </div>
              
              <button className="bg-gray-50 group-hover:bg-blue-vibrant group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(37,99,235,0.3)] transition-all duration-300 transform text-black-true px-6 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs w-full">
                Explore Use Case
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
