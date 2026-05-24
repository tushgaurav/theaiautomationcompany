import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="px-6 lg:px-10 py-12 md:py-16 border-t border-neutral-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif font-bold text-lg block mb-3">
              The AI Automation Co.
            </Link>
            <p className="text-sm text-neutral-500 leading-relaxed">
              We automate the boring stuff so your team can focus on what matters.
            </p>
          </div>
          <div>
            <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-4">
              Company
            </span>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">About</Link>
              <Link to="/customers" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Customers</Link>
              <Link to="/contact" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-4">
              Services
            </span>
            <div className="flex flex-col gap-2.5">
              <Link to="/services" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">All Services</Link>
              <Link to="/workshops" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Workshops</Link>
            </div>
          </div>
          <div>
            <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-4">
              Get in Touch
            </span>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:hello@aiautomation.co" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                hello@aiautomation.co
              </a>
              <Link to="/contact" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.65rem] font-mono uppercase tracking-[0.15em] text-neutral-400">
          <span>&copy; 2026 The AI Automation Company</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  )
}
