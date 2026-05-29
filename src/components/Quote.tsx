import { motion } from 'framer-motion'

export default function Quote() {
  return (
    <section className="py-28 md:py-40 px-6 lg:px-10 border-y border-[#f0ebe0]/15 section-alt">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#f4501e] block mb-10">
            // the problem
          </span>
          <blockquote className="text-3xl md:text-4xl lg:text-[3.25rem] font-bold leading-[1.15] max-w-4xl tracking-[-0.02em] text-[#f0ebe0]">
            AI is everywhere right now. But most small businesses don't have time to figure out{' '}
            <span className="bg-[#f4501e] text-[#0e0d0b] px-2">what's real</span> and{' '}
            <span className="text-[#6b645a]">what's hype.</span>
          </blockquote>
        </motion.div>
        <motion.div
          className="mt-12 flex items-center gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-12 h-px bg-[#f4501e]" />
          <p className="text-[#a39b8e] font-mono text-xs uppercase tracking-[0.2em]">
            That's where we come in
          </p>
        </motion.div>
      </div>
    </section>
  )
}
