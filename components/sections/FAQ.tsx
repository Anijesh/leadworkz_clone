"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How do you measure ROI from a data-driven strategy?",
    answer: "We establish clear KPIs from day one and track everything through analytics. Our reporting shows exactly how each channel contributes to your bottom line, from first touch to final conversion.",
  },
  {
    question: "What happens when businesses try to scale without systematic frameworks?",
    answer: "Without proper systems, scaling often leads to inefficient spend, inconsistent results, and missed opportunities. Our frameworks ensure sustainable growth with predictable outcomes.",
  },
  {
    question: "How do you identify which channels are actually driving revenue?",
    answer: "We use multi-touch attribution models combined with conversion tracking to understand the true value of each channel in your marketing mix.",
  },
  {
    question: "Will a website redesign impact our current SEO rankings?",
    answer: "When done correctly, a redesign can actually improve rankings. We follow strict SEO migration protocols to preserve and enhance your search visibility.",
  },
  {
    question: "Why is continuous optimization important for digital marketing?",
    answer: "Markets, algorithms, and user behavior constantly evolve. Continuous optimization ensures you stay ahead of competitors and maximize ROI from every marketing dollar.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2563EB] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-6">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#2563EB]">
              Questions
            </span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-[#2563EB]/30 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="font-bold text-gray-900 pr-4 group-hover:text-[#2563EB] transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-8 h-8 rounded-full bg-[#2563EB]/10 flex items-center justify-center shrink-0"
                >
                  <svg
                    className="w-4 h-4 text-[#2563EB]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
