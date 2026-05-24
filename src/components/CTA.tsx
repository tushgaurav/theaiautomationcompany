import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="border-t border-b border-neutral-900/10 py-24 md:py-32 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="border border-neutral-900/15 p-10 md:p-16 relative bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-3.5 left-8 bg-[#B91C1C] text-white px-4 py-1 text-[0.6rem] font-mono uppercase tracking-[0.25em]">
            Let's Work Together
          </div>
          <div className="text-center">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-[-0.03em]">
              Ready to Automate?
            </h2>
            <div className="w-full max-w-xs mx-auto h-[1px] bg-neutral-200 mb-8" />
            <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-xl mx-auto leading-relaxed">
              Book a free discovery call. We'll identify 10+ hours of repetitive work
              we can automate for your team — no commitment required.
            </p>
            <a
              href="#"
              className="inline-block px-10 py-4 bg-[#B91C1C] text-white font-mono uppercase tracking-[0.15em] text-xs hover:bg-[#991B1B] hover:shadow-[0_8px_30px_rgba(185,28,28,0.3)] transition-all duration-300"
            >
              Book a Free Call
            </a>
            <p className="mt-8 text-[0.7rem] font-mono text-neutral-400 uppercase tracking-[0.15em]">
              Free discovery call · No contracts · Results in days
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
