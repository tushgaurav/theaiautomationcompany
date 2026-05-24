import { LazyMotion, domAnimation } from 'framer-motion'
import Navbar from './components/Navbar'
import Masthead from './components/Masthead'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Quote from './components/Quote'
import CTA from './components/CTA'
import CapabilitiesGrid from './components/CapabilitiesGrid'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-[#FDFBF7] text-neutral-900 min-h-screen overflow-x-hidden selection:bg-[#B91C1C] selection:text-white antialiased">
        <Cursor />
        <Navbar />
        <Masthead />
        <Hero />
        <Marquee />
        <Services />
        <Quote />
        <CapabilitiesGrid />
        <CTA />
        <Footer />
      </div>
    </LazyMotion>
  )
}
