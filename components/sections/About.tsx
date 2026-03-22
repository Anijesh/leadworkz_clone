"use client";

import { motion } from "framer-motion";

const tools = [
  "Adobe Photoshop",
  "Figma",
  "WordPress",
  "VS Code",
  "Google Analytics",
  "Search Console",
  "SEMrush",
  "Google Ads",
  "Meta Ads",
  "HubSpot",
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#fafafa] py-20 md:py-28 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1] mb-6">
            <span className="text-gray-900">Build For Visibility.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#A855F7]">
              Optimized For Revenue.
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We build predictable demand with no unnecessary spend. Accelerate growth through
            performance-driven marketing systems designed to convert.
          </p>
        </motion.div>

        {/* Strategy Tagline Marquee */}
        <div className="relative w-full overflow-hidden py-8 mb-16 border-y border-gray-200">
          <motion.div
            animate={{ x: [-500, 0] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="flex gap-16 w-max"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-16">
                <span className="text-3xl md:text-4xl font-black text-gray-900 whitespace-nowrap">
                  Strategy.
                </span>
                <span className="text-3xl md:text-4xl font-black text-[#2563EB] whitespace-nowrap">
                  Precision.
                </span>
                <span className="text-3xl md:text-4xl font-black text-[#A855F7] whitespace-nowrap">
                  Growth.
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Toolbox Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Everyday's Toolbox</h3>
          <p className="text-gray-500 font-medium">Mastered for every project.</p>
        </motion.div>

        {/* Tools Marquee */}
        <div className="relative w-full overflow-hidden py-6">
          <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#fafafa] to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#fafafa] to-transparent pointer-events-none"></div>

          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-8 w-max"
          >
            {[...tools, ...tools].map((tool, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-[#2563EB]/30 hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-[#2563EB]"></div>
                <span className="font-bold text-gray-700 whitespace-nowrap">{tool}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
