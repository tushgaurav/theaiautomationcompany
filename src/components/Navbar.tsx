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
    <nav className="sticky top-0 z-50 border-b border-[#f0ebe0]/15 bg-[#0e0d0b] px-6 lg:px-10 py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="The AI Automation Company" className="w-28" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs font-mono uppercase tracking-[0.18em] transition-colors ${
                location.pathname === link.to
                  ? 'text-[#f4501e]'
                  : 'text-[#a39b8e] hover:text-[#f0ebe0]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:inline-block text-xs font-mono uppercase tracking-[0.18em] font-medium bg-[#f4501e] text-[#0e0d0b] px-5 py-2.5 btn-primary"
          >
            Book a Call
          </Link>
          <button
            className="md:hidden text-[#f0ebe0] p-1"
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
        <div className="md:hidden mt-4 pt-4 border-t border-[#f0ebe0]/15 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`text-xs font-mono uppercase tracking-[0.18em] py-2 ${
                location.pathname === link.to ? 'text-[#f4501e]' : 'text-[#a39b8e]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="text-xs font-mono uppercase tracking-[0.18em] font-medium bg-[#f4501e] text-[#0e0d0b] px-5 py-2.5 text-center mt-2"
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  )
}
