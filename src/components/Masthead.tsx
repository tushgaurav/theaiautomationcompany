import { motion } from 'framer-motion'

function RevealLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Masthead() {
  return (
    <header className="hero-gradient relative overflow-hidden px-6 lg:px-10 py-20 md:py-32">
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#B91C1C]/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="font-serif text-6xl md:text-[8rem] lg:text-[11rem] leading-[0.82] font-bold tracking-[-0.04em] uppercase text-white">
          <RevealLine delay={0.1}>The AI</RevealLine>
          <RevealLine delay={0.25}>
            <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.4)] md:[-webkit-text-stroke:3px_rgba(255,255,255,0.4)]">
              Automation
            </span>
          </RevealLine>
          <RevealLine delay={0.4}>Company</RevealLine>
        </h1>
        <motion.p
          className="mt-8 text-sm md:text-base text-neutral-400 font-sans max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          We automate the boring stuff in your business so you don't have to.
          Usually saves 10–20 hours per week per person.
        </motion.p>
      </div>
    </header>
  )
}
