"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  { num: "01", label: "/01.", title: "Research & Discovery", desc: "We begin by eliminating assumptions. Market analysis, audience behavior, and competitive positioning are heavily mapped before any capital is deployed." },
  { num: "02", label: "/02.", title: "Strategize", desc: "Insight is converted into ruthless mathematical direction. We define your brand positioning, channel mix, funnel architecture and ultimate growth objectives." },
  { num: "03", label: "/03.", title: "Execute", desc: "Strategy meets disciplined execution. Campaigns, high-yield content, and performance creatives are deployed with extreme precision." },
  { num: "04", label: "/04.", title: "Optimization", desc: "Performance is constantly challenged. We track every behavioral metric and data pattern to identify massive scaling opportunities." },
  { num: "05", label: "/05.", title: "Scale", desc: "Growth is expanded, not forced. With proven ROI foundations securely in place, we scale channels, budgets, and geographies seamlessly." },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="bg-[#fafafa] relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row relative">
        
        {/* Left Side: Sticky Timeline Controller */}
        <div className="w-full lg:w-5/12 py-20 lg:py-40 relative">
          <div className="lg:sticky lg:top-40">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05] text-gray-900">
                Our Results-Driven <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#A855F7]">Process</span>
              </h2>
            </motion.div>

            {/* Sticky Changing Number Metric */}
            <div className="mt-16 hidden lg:block relative">
              <span className="text-gray-400 font-bold tracking-[0.3em] uppercase text-sm absolute top-0 left-2">Phase</span>
              <motion.h3 
                key={activeStep}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                className="text-[12rem] font-black text-[#2563EB] leading-none tracking-tighter drop-shadow-md transition-all"
              >
                {steps[activeStep].label}
              </motion.h3>
            </div>
          </div>
        </div>

        {/* Right Side: Flowing Scroll Timeline */}
        <div className="w-full lg:w-7/12 py-10 lg:py-40 flex flex-col gap-24 lg:gap-[40vh] relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              onViewportEnter={() => setActiveStep(idx)}
              viewport={{ margin: "-45% 0px -45% 0px" }}
              className="relative group bg-white border border-gray-200 p-8 md:p-12 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:border-[#2563EB]/40 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] transition-all duration-500"
            >
              {/* Mobile Number Fallback */}
              <div className="lg:hidden text-5xl font-black text-[#2563EB] mb-6">
                {step.label}
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-gray-900 group-hover:text-[#2563EB] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 font-medium text-lg md:text-xl leading-relaxed">
                {step.desc}
              </p>
              
              {/* Timeline Connection Node */}
              <div className="absolute top-1/2 -left-[61px] w-6 h-6 rounded-full border-4 border-[#fafafa] bg-gray-200 hidden lg:block group-hover:bg-[#2563EB] group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300"></div>
            </motion.div>
          ))}
          
          {/* Vertical Timeline Track Line */}
          <div className="absolute top-40 bottom-40 left-[-49px] w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden lg:block z-0"></div>
        </div>
      </div>
    </section>
  );
}
