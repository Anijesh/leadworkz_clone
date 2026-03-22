"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const useCases = [
  {
    title: "B2B Lead Generation",
    desc: "LinkedIn & SEM targeting to drive qualified leads for B2B companies with complex sales cycles.",
    icon: "🎯",
    color: "#2563EB",
  },
  {
    title: "SaaS Scale-Up",
    desc: "Funnel optimization to reduce CAC and scale user acquisition aggressively month-over-month.",
    icon: "🚀",
    color: "#A855F7",
  },
  {
    title: "E-Commerce Revenue",
    desc: "Meta & Google Shopping campaigns engineered to scale your online store revenue profitably.",
    icon: "🛒",
    color: "#10B981",
  },
  {
    title: "Local Market Dominance",
    desc: "Hyper-localized SEO strategies to absolutely dominate your geographic target market.",
    icon: "📍",
    color: "#F59E0B",
  },
  {
    title: "Enterprise Ecosystems",
    desc: "Full pipeline optimization mapping complex account-based marketing workflows.",
    icon: "🏢",
    color: "#EC4899",
  }
];

export default function UseCases() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full bg-[#fafafa] py-24 md:py-32 overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
            PROVEN APPLICATIONS
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900">
            Growth Use Cases
          </h2>
        </motion.div>
      </div>

      {/* Horizontal Drag-To-Scroll Carousel per Original Site Specs */}
      <div className="w-full relative px-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2))] cursor-grab active:cursor-grabbing">
        <motion.div 
          ref={scrollRef}
          className="overflow-hidden"
        >
          <motion.div 
            drag="x" 
            dragConstraints={scrollRef} 
            className="flex gap-6 w-max pb-12 pr-12"
          >
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="w-[320px] md:w-[420px] shrink-0 bg-white rounded-[2rem] p-10 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 pointer-events-none select-none"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8" style={{ backgroundColor: `${useCase.color}10`, color: useCase.color }}>
                  {useCase.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {useCase.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium text-lg mb-8">
                  {useCase.desc}
                </p>
                <div className="uppercase tracking-widest text-sm font-bold flex items-center gap-2" style={{ color: useCase.color }}>
                  Explore Case <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Drag Hint Indicator */}
        <div className="flex items-center justify-center mt-4 gap-3 text-gray-400 font-bold uppercase tracking-widest text-xs select-none pointer-events-none">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Drag to explore
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>
    </section>
  );
}
