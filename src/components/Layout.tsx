import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="bg-[#FDFBF7] text-neutral-900 min-h-screen overflow-x-hidden selection:bg-[#B91C1C] selection:text-white antialiased">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
