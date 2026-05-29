import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="relative bg-[#0e0d0b] text-[#f0ebe0] min-h-screen overflow-x-hidden selection:bg-[#f4501e] selection:text-[#0e0d0b] antialiased">
      {/* Faint structural grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(240,235,225,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(240,235,225,0.6) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
