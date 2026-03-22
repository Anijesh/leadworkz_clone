"use client";

import { motion } from "framer-motion";

const useCases = [
  {
    title: "B2B Lead Generation",
    desc: "LinkedIn & SEM targeting to drive qualified leads for B2B companies.",
    icon: "🎯",
    color: "#2563EB",
  },
  {
    title: "E-Commerce Scaling",
    desc: "Meta & Google Shopping campaigns to scale your online store revenue.",
    icon: "🛒",
    color: "#A855F7",
  },
  {
    title: "Local Market Dominance",
    desc: "Local SEO strategies to dominate your geographic market.",
    icon: "📍",
    color: "#10B981",
  },
  {
    title: "SaaS User Acquisition",
    desc: "Funnel optimization to reduce CAC and scale user acquisition.",
    icon: "🚀",
    color: "#F59E0B",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function UseCases() {
  return (
    <section className="relative w-full bg-[#fafafa] py-24 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[#A855F7] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
            Growth Use Cases
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-6">
            How We Drive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#A855F7]">
              Results
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Proven strategies tailored to your industry and growth stage.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)] transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{
                  background: `linear-gradient(135deg, ${useCase.color}08 0%, transparent 100%)`,
                }}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#2563EB] transition-colors duration-300">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed font-medium mb-6">
                  {useCase.desc}
                </p>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors duration-300"
                  style={{ color: useCase.color }}
                >
                  Let's build this
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-3"
          >
            Discuss Your Use Case
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
