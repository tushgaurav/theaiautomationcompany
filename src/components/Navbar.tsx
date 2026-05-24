import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { to: '/services', label: 'Services' },
  { to: '/workshops', label: 'Workshops' },
  { to: '/customers', label: 'Customers' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="border-b border-neutral-900/10 px-6 lg:px-10 py-5 sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-xs uppercase tracking-[0.2em] font-mono font-medium text-neutral-900">
          The AI Automation Co.
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs uppercase tracking-[0.15em] font-mono transition-colors ${
                location.pathname === link.to ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="text-xs uppercase tracking-[0.15em] font-mono font-medium border border-neutral-900 px-5 py-2.5 hover:bg-neutral-900 hover:text-[#FDFBF7] transition-colors hidden sm:inline-block"
          >
            Book a Call
          </Link>
          <button
            className="md:hidden text-neutral-900 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M4 4L16 16M16 4L4 16" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-neutral-900/10 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`text-xs uppercase tracking-[0.15em] font-mono py-2 ${
                location.pathname === link.to ? 'text-neutral-900' : 'text-neutral-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="text-xs uppercase tracking-[0.15em] font-mono font-medium border border-neutral-900 px-5 py-2.5 text-center mt-2 hover:bg-neutral-900 hover:text-[#FDFBF7] transition-colors"
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  )
}
