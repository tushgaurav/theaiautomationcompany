import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-[#f0ebe0]/15 bg-[#0e0d0b] text-[#f0ebe0] px-6 lg:px-10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-4">
            <Link to="/" className="font-mono uppercase text-xl text-[#f0ebe0] block mb-4 tracking-tight">
              The AI Automation Co.
            </Link>
            <p className="text-sm text-[#a39b8e] leading-relaxed max-w-xs">
              We automate the boring stuff so your team can focus on what matters.
            </p>
          </div>
          <div className="md:col-span-2 md:col-start-6">
            <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-[#f4501e] block mb-5">
              Company
            </span>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="text-sm text-[#a39b8e] hover:text-[#f0ebe0] transition-colors">About</Link>
              <Link to="/customers" className="text-sm text-[#a39b8e] hover:text-[#f0ebe0] transition-colors">Customers</Link>
              <Link to="/contact" className="text-sm text-[#a39b8e] hover:text-[#f0ebe0] transition-colors">Contact</Link>
            </div>
          </div>
          <div className="md:col-span-2">
            <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-[#f4501e] block mb-5">
              Services
            </span>
            <div className="flex flex-col gap-3">
              <Link to="/services" className="text-sm text-[#a39b8e] hover:text-[#f0ebe0] transition-colors">All Services</Link>
              <Link to="/workshops" className="text-sm text-[#a39b8e] hover:text-[#f0ebe0] transition-colors">Workshops</Link>
            </div>
          </div>
          <div className="md:col-span-2">
            <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-[#f4501e] block mb-5">
              Get in Touch
            </span>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@aiautomation.co" className="text-sm text-[#a39b8e] hover:text-[#f0ebe0] transition-colors">
                hello@aiautomation.co
              </a>
              <Link to="/contact" className="text-sm text-[#a39b8e] hover:text-[#f0ebe0] transition-colors">
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-[#f0ebe0]/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.65rem] font-mono uppercase tracking-[0.15em] text-[#6b645a]">
          <span>&copy; 2026 The AI Automation Company</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  )
}
