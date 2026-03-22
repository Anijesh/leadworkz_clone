"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "/01.", title: "Discover", desc: "We begin by eliminating assumptions. Market analysis, audience behavior, and competitive positioning are mapped." },
  { num: "/02.", title: "Strategize", desc: "Insight is converted into direction. We define your brand positioning, channel mix, and growth objectives." },
  { num: "/03.", title: "Execute", desc: "Strategy meets disciplined execution. Campaigns, content, and creatives are deployed with precision." },
  { num: "/04.", title: "Optimize", desc: "Performance is constantly challenged. We track behavior and data patterns to identify opportunities." },
  { num: "/05.", title: "Scale", desc: "Growth is expanded, not forced. With proven foundations, we scale channels, budgets, and geographies." },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#020202] py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 md:mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[120px] z-0"></div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[#2563EB] font-black tracking-[0.2em] uppercase text-xs z-10 relative">Methodology</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mt-4 tracking-tighter leading-[1.05] z-10 relative">
              Our Results-Driven <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#A855F7]">Process</span>
            </h2>
          </motion.div>
        </div>

        <div className="space-y-8 md:space-y-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Giant Background Number */}
              <div className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 text-[8rem] md:text-[14rem] font-black text-white/[0.02] select-none pointer-events-none z-0 leading-none">
                {step.num.replace("/", "").replace(".", "")}
              </div>

              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center bg-[#0a0a0a] border border-white/5 p-6 md:p-10 rounded-3xl hover:border-[#2563EB]/20 transition-all duration-500">
                {/* Number */}
                <div className="text-3xl md:text-4xl font-black text-[#2563EB] shrink-0 w-20">
                  {step.num}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight group-hover:text-[#2563EB] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Decorative arrow */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/5 group-hover:bg-[#2563EB]/20 transition-all duration-300">
                  <svg className="w-5 h-5 text-white/30 group-hover:text-[#2563EB] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
