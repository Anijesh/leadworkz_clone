export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50">
      <div className="glass-nav rounded-full px-6 py-4 flex items-center justify-between shadow-2xl">
        <div className="font-extrabold text-xl tracking-tighter cursor-pointer text-white">
          LEAD WORKZ
        </div>
        
        <nav className="hidden md:flex gap-2 text-xs uppercase font-semibold tracking-widest text-white/50 items-center">
          <a href="#" className="hover:text-white transition-colors py-2 px-5 bg-blue-vibrant text-white rounded-full">Home</a>
          <a href="#" className="hover:text-white transition-colors py-2 px-4 rounded-full hover:bg-white/10">Services</a>
          <a href="#" className="hover:text-white transition-colors py-2 px-4 rounded-full hover:bg-white/10">Process</a>
          <a href="#" className="hover:text-white transition-colors py-2 px-4 rounded-full hover:bg-white/10">FAQ</a>
        </nav>
        
        <button className="bg-blue-vibrant hover:bg-blue-500 hover:scale-105 hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)] transition-all duration-300 transform text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider">
          Let's Talk
        </button>
      </div>
    </header>
  );
}
