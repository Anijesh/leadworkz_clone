"use client";

import { motion } from "framer-motion";

const services = [
  { abbr: "Website", title: "Website Design & Development", desc: "Building high-performance digital platforms that convert.", color: "#2563EB" },
  { abbr: "UI/UX", title: "UI & UX Design", desc: "Crafting intuitive interfaces that elevate experience.", color: "#A855F7" },
  { abbr: "SEO", title: "Search Engine Optimization", desc: "Building long-term visibility across organic search.", color: "#6366F1" },
  { abbr: "SXO", title: "Search Experience Optimization", desc: "Enhancing user experience after the click.", color: "#EC4899" },
  { abbr: "VSO", title: "Video Search Optimization", desc: "Improving video visibility across platforms.", color: "#10B981" },
  { abbr: "LSO", title: "Local Search Optimization", desc: "Winning visibility for location-based intent.", color: "#F59E0B" },
  { abbr: "CRO", title: "Conversion Rate Optimization", desc: "Turning visitors into measurable outcomes.", color: "#8B5CF6" },
  { abbr: "DAO", title: "Data-Driven Optimization", desc: "Optimizing decisions using performance data.", color: "#EF4444" },
  { abbr: "VEO", title: "Video Experience Optimization", desc: "Improving engagement throughout video journey.", color: "#06B6D4" },
  { abbr: "ASO", title: "App Store Optimization", desc: "Increasing app visibility and installs.", color: "#84CC16" },
  { abbr: "SMO", title: "Social Media Optimization", desc: "Amplifying reach across social platforms.", color: "#F472B6" },
  { abbr: "FEO", title: "Funnel Experience Optimization", desc: "Optimizing every stage of the funnel.", color: "#FB923C" },
  { abbr: "LPO", title: "Landing Page Optimization", desc: "Designing pages built to convert intent.", color: "#4ADE80" },
  { abbr: "UXO", title: "User Experience Optimization", desc: "Removing friction across interactions.", color: "#C084FC" },
  { abbr: "LLMO", title: "LLM Optimization", desc: "Positioning content for AI discovery.", color: "#22D3EE" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ServicesGrid() {
  return (
    <section id="services" className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#2563EB]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#A855F7]/5 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Technical Services Footer Acronym Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-transparent hover:shadow-[0_15px_40px_rgba(37,99,235,0.12)] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover gradient background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{
                  background: `linear-gradient(135deg, ${service.color}08 0%, transparent 100%)`,
                }}
              ></div>

              <div className="relative z-10">
                {/* Abbreviation Badge */}
                <div
                  className="inline-flex items-center justify-center px-4 py-2 rounded-xl font-black text-sm mb-4 transition-all duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: `${service.color}15`,
                    color: service.color,
                  }}
                >
                  {service.abbr}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#2563EB] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider shadow-[0_10px_40px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_50px_rgba(37,99,235,0.4)] transition-shadow inline-flex items-center gap-3"
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
