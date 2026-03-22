"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "Figma", icon: "🎨" },
  { name: "WordPress", icon: "📝" },
  { name: "Google Analytics", icon: "📊" },
  { name: "SEMrush", icon: "🔍" },
  { name: "Meta Ads", icon: "📱" },
  { name: "HubSpot", icon: "🧡" },
  { name: "Shopify", icon: "🛒" },
  { name: "Mailchimp", icon: "📧" },
  { name: "Webflow", icon: "🌐" },
  { name: "Google Ads", icon: "📢" },
  { name: "Hotjar", icon: "🔥" },
  { name: "Ahrefs", icon: "🔗" },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "12M+", label: "Leads Generated" },
  { value: "98%", label: "Client Retention" },
  { value: "10x", label: "Average ROI" },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#fafafa] py-24 md:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#A855F7] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
            Our Promise
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-6">
            <span className="text-[#2563EB]">Build For Visibility.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#6366F1]">
              Optimized For Revenue.
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            We don't just drive traffic — we engineer complete digital marketing systems
            designed to convert visitors into loyal customers.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-24"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 text-center group hover:border-[#2563EB]/30 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-black text-[#2563EB] mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Toolbox Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Our Toolbox</h3>
          <p className="text-gray-500 font-medium">Technologies we've mastered to drive your growth</p>
        </motion.div>

        {/* Tools Marquee */}
        <div className="relative w-full overflow-hidden py-6">
          <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#fafafa] to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#fafafa] to-transparent pointer-events-none"></div>

          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-6 w-max"
          >
            {[...tools, ...tools].map((tool, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-[#2563EB]/30 hover:shadow-lg transition-all duration-300 cursor-default group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{tool.icon}</span>
                <span className="font-bold text-gray-700 whitespace-nowrap">{tool.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Secondary Marquee (reverse direction) */}
        <div className="relative w-full overflow-hidden py-6 mt-4">
          <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#fafafa] to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#fafafa] to-transparent pointer-events-none"></div>

          <motion.div
            animate={{ x: [-1200, 0] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-6 w-max"
          >
            {[...tools.slice().reverse(), ...tools.slice().reverse()].map((tool, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-[#A855F7]/30 hover:shadow-lg transition-all duration-300 cursor-default group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{tool.icon}</span>
                <span className="font-bold text-gray-700 whitespace-nowrap">{tool.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
