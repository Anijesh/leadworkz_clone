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
  "Hotjar",
  "Ahrefs",
  "Mailchimp",
  "Shopify",
  "Webflow",
];

const services = [
  "SEO / SEM",
  "Social Media Marketing",
  "Website Design",
  "UI / UX Design",
  "Branding & Strategy",
  "Performance Marketing",
  "CRO",
  "Data & Analytics",
  "Google Tag Manager",
  "Local SEO",
  "SXO",
  "Consulting",
];

export default function ToolsMarquee() {
  return (
    <section className="relative w-full bg-[#fafafa] py-12 overflow-hidden">
      {/* Tools Marquee */}
      <div className="mb-6">
        <div className="w-full overflow-hidden relative py-4">
          <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#fafafa] to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#fafafa] to-transparent pointer-events-none"></div>

          <motion.div
            animate={{ x: [0, -1500] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-8 w-max"
          >
            {[...tools, ...tools].map((tool, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-gray-500 font-semibold text-sm whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-[#2563EB]/30"></span>
                {tool}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Brand Statement Marquee */}
      <div className="w-full overflow-hidden relative py-4 border-y border-gray-200">
        <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#fafafa] to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#fafafa] to-transparent pointer-events-none"></div>

        <motion.div
          animate={{ x: [-800, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-16 w-max"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-2xl md:text-3xl font-black text-gray-900 whitespace-nowrap">
                Strategy.
              </span>
              <span className="text-2xl md:text-3xl font-black text-[#2563EB] whitespace-nowrap">
                Precision.
              </span>
              <span className="text-2xl md:text-3xl font-black text-[#A855F7] whitespace-nowrap">
                Growth.
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Services Marquee */}
      <div className="mt-6">
        <div className="w-full overflow-hidden relative py-4">
          <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#fafafa] to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#fafafa] to-transparent pointer-events-none"></div>

          <motion.div
            animate={{ x: [-1200, 0] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-6 w-max"
          >
            {[...services, ...services].map((service, idx) => (
              <div
                key={idx}
                className="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-bold text-gray-700 whitespace-nowrap hover:border-[#2563EB]/30 hover:shadow-md transition-all duration-300 cursor-default"
              >
                {service}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
