import { motion } from 'framer-motion'

export default function Quote() {
  return (
    <section className="py-32 md:py-44 px-6 lg:px-10 relative bg-[#1a1a1a] text-[#FDFBF7]">
      <div className="max-w-5xl mx-auto relative">
        <div
          className="absolute -top-6 -left-3 text-[10rem] md:text-[16rem] font-serif font-bold text-white/[0.04] leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          &ldquo;
        </div>
        <motion.blockquote
          className="relative z-10 font-serif text-3xl md:text-4xl lg:text-[3.5rem] font-bold leading-[1.15] max-w-4xl tracking-[-0.02em]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          AI is everywhere right now. But most small businesses don't have time to figure out{' '}
          <span className="text-[#E53E3E]">what's real</span> and{' '}
          <span className="text-transparent [-webkit-text-stroke:1.5px_#FDFBF7]">what's hype.</span>
        </motion.blockquote>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="w-12 h-[1.5px] bg-[#E53E3E] mb-4" />
          <p className="text-neutral-400 font-mono text-xs uppercase tracking-[0.2em]">
            That's where we come in
          </p>
        </motion.div>
      </div>
    </section>
  )
}
