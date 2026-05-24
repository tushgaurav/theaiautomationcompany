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
    <header className="border-b border-neutral-900/10 px-6 lg:px-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="font-serif text-6xl md:text-[8rem] lg:text-[11rem] leading-[0.82] font-bold tracking-[-0.04em] uppercase">
          <RevealLine delay={0.1}>The AI</RevealLine>
          <RevealLine delay={0.25}>
            <span className="text-transparent [-webkit-text-stroke:2px_#1a1a1a] md:[-webkit-text-stroke:3px_#1a1a1a]">
              Automation
            </span>
          </RevealLine>
          <RevealLine delay={0.4}>Company</RevealLine>
        </h1>
        <motion.p
          className="mt-8 text-sm md:text-base text-neutral-500 font-sans max-w-lg mx-auto leading-relaxed"
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
