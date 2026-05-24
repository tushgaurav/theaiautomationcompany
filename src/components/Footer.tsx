export default function Footer() {
  return (
    <footer className="px-6 lg:px-10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          <div>
            <span className="font-serif font-bold text-lg block mb-3">
              The AI Automation Company
            </span>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
              We automate the boring stuff in your business so your team can focus on what matters.
            </p>
          </div>
          <div>
            <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-4">
              Navigation
            </span>
            <div className="flex flex-col gap-2.5">
              <a href="#services" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Services</a>
              <a href="#process" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Process</a>
              <a href="#contact" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Contact</a>
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
              <a href="#contact" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.65rem] font-mono uppercase tracking-[0.15em] text-neutral-400">
          <span>© 2026 The AI Automation Company</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  )
}
