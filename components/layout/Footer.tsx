"use client";

import { motion } from "framer-motion";

const menuLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#" },
  { label: "Clients", href: "#" },
  { label: "Contact", href: "#contact" },
  { label: "The Minds", href: "#" },
];

const importantLinks = [
  { label: "FAQs", href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "Use Cases", href: "#" },
  { label: "Growth Insights", href: "#" },
];

const services = [
  "Search Engine Optimization",
  "Conversion Rate Optimization",
  "Performance Marketing",
  "Social Media Marketing",
  "Website Design",
  "UI/UX Design",
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#050505] pt-20 md:pt-32 pb-8 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-t from-[#2563EB]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8 pb-16 border-b border-white/10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-[#EAB308] font-black text-black text-lg transform -rotate-3 rounded-xl">
                  LW
                </div>
                <h2 className="text-2xl font-black tracking-tight">LEAD WORKZ</h2>
              </div>
              <p className="text-white/60 leading-relaxed mb-6 max-w-sm">
                Delivering results, not just promises. We engineer scalable digital marketing systems that turn clicks into customers.
              </p>

              {/* Address */}
              <div className="text-white/40 text-sm space-y-1 mb-6">
                <p>#60 Doddakallasandra</p>
                <p>Kanakapura Main Road,</p>
                <p>Near Doddakallasandra Metro Station,</p>
                <p>Bangalore – 560062</p>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-bold uppercase tracking-widest mb-6 text-sm text-white/80">Menu</h3>
            <ul className="space-y-3">
              {menuLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm font-medium hover:text-[#2563EB] hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-bold uppercase tracking-widest mb-6 text-sm text-white/80">Resources</h3>
            <ul className="space-y-3">
              {importantLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm font-medium hover:text-[#A855F7] hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold uppercase tracking-widest mb-6 text-sm text-white/80">Services</h3>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="text-white/50 text-sm font-medium hover:text-[#6366F1] hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="py-12 border-b border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold mb-2">Ready to grow your business?</h4>
              <p className="text-white/50 text-sm">Let's discuss how we can help you achieve your goals.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-shadow flex items-center gap-3 whitespace-nowrap"
            >
              Schedule a Call
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Lead Workz. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>

      {/* Massive Background Text Mask */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden flex justify-center opacity-[0.02] pointer-events-none select-none">
        <h1 className="text-[15rem] md:text-[25rem] font-black tracking-tighter leading-none text-white whitespace-nowrap translate-y-1/3">
          LEAD WORKZ
        </h1>
      </div>
    </footer>
  );
}
