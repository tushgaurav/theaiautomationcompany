export default function Navbar() {
  return (
    <nav className="border-b border-neutral-900/10 px-6 lg:px-10 py-5 flex items-center justify-between sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-sm">
      <a href="#" className="text-xs uppercase tracking-[0.2em] font-mono font-medium text-neutral-900">
        The AI Automation Co.
      </a>
      <div className="hidden md:flex items-center gap-10">
        <a href="#services" className="text-xs uppercase tracking-[0.15em] font-mono text-neutral-500 hover:text-neutral-900 transition-colors">
          Services
        </a>
        <a href="#process" className="text-xs uppercase tracking-[0.15em] font-mono text-neutral-500 hover:text-neutral-900 transition-colors">
          Process
        </a>
        <a href="#contact" className="text-xs uppercase tracking-[0.15em] font-mono text-neutral-500 hover:text-neutral-900 transition-colors">
          Contact
        </a>
      </div>
      <a
        href="#contact"
        className="text-xs uppercase tracking-[0.15em] font-mono font-medium border border-neutral-900 px-5 py-2.5 hover:bg-neutral-900 hover:text-[#FDFBF7] transition-colors"
      >
        Book a Call
      </a>
    </nav>
  )
}
