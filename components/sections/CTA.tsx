"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const serviceTabs = ["SEO", "SEM", "SMM", "GA4", "GTM", "Web"];

export default function CTA() {
  const [activeTab, setActiveTab] = useState("SEO");

  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen bg-white py-16 md:py-20 overflow-hidden flex items-center justify-center">
      <div className="max-w-[1200px] mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between z-10 relative">

        {/* Left Side: Copy and Service Tabs */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[45%] flex flex-col items-center md:items-start relative z-30 mb-16 md:mb-0"
        >
          {/* Service Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {serviceTabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#2563EB] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#2563EB] tracking-tighter leading-[0.95] mb-6 md:mb-8 drop-shadow-sm text-center md:text-left">
            We'll Bring You <br className="hidden md:block"/> the <br className="hidden md:block"/> Customers.
          </h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-all duration-300 rounded-full px-8 py-3 text-sm font-bold tracking-widest uppercase mb-6 md:mb-8 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            let's talk
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>

          <p className="text-gray-600 font-medium text-sm leading-relaxed max-w-sm text-center md:text-left">
            From lead generation to conversion optimization, we build digital systems that consistently bring qualified customers to your business.
          </p>
        </motion.div>

        {/* Right Side: Massive Typography and Beanbag */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-[55%] relative flex items-center justify-center h-[400px] sm:h-[500px] md:h-[600px]"
        >
          {/* Outlined Sit Back */}
          <h1 className="absolute top-0 right-0 md:-right-10 lg:-right-20 text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[12rem] font-black tracking-tighter leading-none z-0" style={{ color: 'white', WebkitTextStroke: '2px #2563EB' }}>
            Sit Back
          </h1>

          {/* Man in Beanbag */}
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src="/relax-bg.png"
            alt="Relax in beanbag"
            className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] relative z-20 top-5 md:top-10 drop-shadow-[0_30px_50px_rgba(0,0,0,0.3)]"
          />

          {/* Solid Relax */}
          <h1 className="absolute bottom-0 right-0 md:-right-5 lg:-right-10 text-[5rem] sm:text-[7rem] md:text-[11rem] lg:text-[14rem] font-black tracking-tighter leading-none text-[#2563EB] z-30 drop-shadow-[0_10px_30px_rgba(37,99,235,0.4)]">
            Relax.
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
