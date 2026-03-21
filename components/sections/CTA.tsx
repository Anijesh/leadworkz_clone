"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-white py-32 px-6 relative overflow-hidden text-black-true border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side Text */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[5rem] md:text-[8rem] font-black tracking-tighter leading-[0.9] mb-8">
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #0600ab'}}>Sit Back.</span><br/>
            <span className="bg-gradient-to-r from-blue-primary to-blue-400 bg-clip-text text-transparent">Relax.</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-blue-primary mb-6 tracking-tight">
            We'll Bring You the Customers.
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg mb-12 font-medium">
            From lead generation to conversion optimization, we build digital systems that consistently bring qualified customers directly to your business. 
          </p>

          <button className="bg-blue-vibrant hover:bg-[#0600ab] hover:scale-105 hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)] transition-all duration-300 transform text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm shadow-xl w-full sm:w-auto text-center">
            Discuss Your Use Case
          </button>
        </motion.div>

        {/* Right Side Visual (Mockup representation) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] md:h-[600px] rounded-[40px] overflow-hidden bg-[#f8f9fa] border border-gray-200 shadow-2xl flex items-center justify-center p-8 group"
        >
            <div className="absolute inset-0 bg-blue-vibrant opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="w-full h-full bg-white rounded-3xl border border-gray-100 shadow-lg flex flex-col items-center justify-center text-center p-10 transform group-hover:scale-[1.02] transition-transform duration-500">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-vibrant to-blue-primary rounded-full mb-8 shadow-[0_20px_40px_rgba(6,0,171,0.3)] flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
                <h4 className="text-3xl font-black text-black-true tracking-tighter mb-2">System Active</h4>
                <p className="text-gray-500 font-medium">Predictable scaling engaged.</p>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
