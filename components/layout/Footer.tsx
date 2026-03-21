export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-32 pb-10 overflow-hidden border-t border-blue-primary/40">
      {/* Subtle radial glow in the footer */}
      <div className="glow-radial-blue absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] -z-10 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 z-10 relative">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-extrabold mb-4 tracking-tighter">LEAD WORKZ</h2>
          <p className="text-white/60 max-w-sm leading-relaxed">
            Delivering results, not just promises. We engineer scalable digital marketing systems to solve complex challenges.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold uppercase tracking-widest mb-6 text-sm text-white/80">Company</h3>
          <ul className="space-y-3 text-white/50 text-sm font-medium">
            <li><a href="#" className="hover:text-blue-vibrant transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-blue-vibrant transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-blue-vibrant transition-colors">Process</a></li>
          </ul>
        </div>

        <div>
           <h3 className="font-bold uppercase tracking-widest mb-6 text-sm text-white/80">Connect</h3>
          <ul className="space-y-3 text-white/50 text-sm font-medium">
            <li><a href="#" className="hover:text-blue-vibrant transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-blue-vibrant transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-blue-vibrant transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      
      {/* Massive Background Text Mask */}
      <div className="mt-24 w-full overflow-hidden flex justify-center opacity-[0.03] pointer-events-none select-none">
        <h1 className="text-[12rem] md:text-[20rem] font-black tracking-tighter leading-none text-white whitespace-nowrap">
          LEAD WORKZ
        </h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Leadworkz Clone. All Rights Reserved.
      </div>
    </footer>
  );
}
