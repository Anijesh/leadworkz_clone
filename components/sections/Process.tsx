"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discover", desc: "We begin by eliminating assumptions. This phase is dedicated to understanding your business at a structural level." },
  { num: "02", title: "Strategize", desc: "Insight is converted into direction. Using discovery findings, we define your brand positioning and growth objectives." },
  { num: "03", title: "Execute", desc: "Strategy meets disciplined execution. Campaigns, content, and creatives are deployed with precision." },
  { num: "04", title: "Optimize", desc: "Performance is constantly challenged. We track behavior to identify friction points and opportunities for compounding gains." },
  { num: "05", title: "Scale", desc: "Growth is expanded, not forced. Once profitability is established, we scale channels, budgets, and geographies." },
];

export default function Process() {
  return (
    <section className="bg-[#020202] py-40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-32 relative">
          <div className="glow-radial-blue absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 blur-[80px] z-0 opacity-40"></div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-blue-vibrant font-black tracking-[0.2em] uppercase text-xs z-10 relative">Methodology</span>
            <h2 className="text-5xl md:text-7xl font-black mt-4 tracking-tighter leading-[1.1] z-10 relative">Our Results-Driven <br/> <span className="text-outline">Process</span></h2>
          </motion.div>
        </div>

        <div className="space-y-40">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative flex flex-col md:flex-row gap-8 items-start md:items-center"
            >
              {/* Giant Background Number */}
              <div className="absolute -left-10 md:-left-40 -top-20 text-[12rem] md:text-[20rem] font-black text-white/[0.03] select-none pointer-events-none z-0 leading-none">
                {step.num}
              </div>
              
              <div className="text-4xl md:text-5xl font-black text-blue-vibrant z-10 w-24 shrink-0 mt-8 md:mt-0">
                {step.num}.
              </div>
              <div className="z-10 bg-[#0a0a0a] border border-white/5 p-8 md:p-14 rounded-[40px] w-full shadow-2xl relative overflow-hidden flex-1 group hover:border-blue-vibrant/30 transition-colors duration-500">
                <div className="glow-radial-cyan absolute -bottom-20 -right-20 w-64 h-64 opacity-10 group-hover:opacity-30 transition-opacity duration-500 blur-[80px]"></div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight group-hover:text-blue-vibrant transition-colors duration-300">{step.title}</h3>
                <p className="text-white/60 text-lg md:text-xl leading-relaxed font-medium">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
