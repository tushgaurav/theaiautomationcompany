import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function RevealLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Masthead() {
  return (
    <header className="hero-gradient relative border-b border-[#f0ebe0]/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
        {/* Eyebrow row */}
        <motion.div
          className="flex items-center justify-between border-b border-[#f0ebe0]/15 pb-5 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#f4501e]">
            // ai automation studio
          </span>
          <span className="hidden sm:block text-xs font-mono uppercase tracking-[0.2em] text-[#a39b8e]">
            est. 2026
          </span>
        </motion.div>

        <h1 className="font-mono uppercase text-[3.25rem] leading-[0.92] md:text-[6rem] lg:text-[8rem] font-medium tracking-[-0.03em] text-[#f0ebe0]">
          <RevealLine delay={0.05}>The AI</RevealLine>
          <RevealLine delay={0.15}>
            <span className="text-[#f4501e]">Automation</span>
          </RevealLine>
          <RevealLine delay={0.25}>Company</RevealLine>
        </h1>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#f0ebe0]/15 pt-8">
          <motion.p
            className="md:col-span-7 text-base md:text-lg text-[#a39b8e] leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            We automate the boring stuff in your business so you don't have to.
            Usually saves 10–20 hours per week per person.
          </motion.p>
          <motion.div
            className="md:col-span-5 flex flex-col sm:flex-row md:justify-end items-stretch sm:items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/contact"
              className="text-center px-7 py-3.5 bg-[#f4501e] text-[#0e0d0b] font-mono uppercase tracking-[0.15em] text-xs font-medium btn-primary"
            >
              Book a Free Call
            </Link>
            <Link
              to="/services"
              className="text-center px-7 py-3.5 border border-[#f0ebe0]/25 text-[#f0ebe0] font-mono uppercase tracking-[0.15em] text-xs hover:bg-[#f0ebe0] hover:text-[#0e0d0b] transition-colors"
            >
              See what we do
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
