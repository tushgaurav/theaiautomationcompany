import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#B91C1C] hidden md:block" />

      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-8 p-8 md:p-14 lg:p-20 border-b md:border-b-0 md:border-r border-neutral-900/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#B91C1C] mb-6 block">
              What We Do
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-[0.95] mb-8 tracking-[-0.03em]">
              We Automate The Boring Stuff So You Don't Have To
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-neutral-600 max-w-2xl">
              You're running a business, not getting a PhD in AI. We come in,
              figure out what's eating your team's time, and build automations
              that actually work.
            </p>
            <div className="mt-10 flex items-center gap-5">
              <div className="w-14 h-[1.5px] bg-[#B91C1C]" />
              <span className="text-sm font-mono uppercase tracking-[0.1em] text-neutral-400">
                Saves 10–20 hours / week / person
              </span>
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-4 p-8 md:p-10 flex flex-col justify-between gap-8">
          {[
            { label: 'Time Saved', value: '10–20h', desc: 'per week, per person' },
            { label: 'Setup', value: 'Days', desc: 'not months' },
            { label: 'Contracts', value: 'Zero', desc: 'no lock-in required' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="border-b border-neutral-200 pb-6 last:border-b-0 last:pb-0"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400">
                {stat.label}
              </span>
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif mt-2 tracking-[-0.03em]">
                {stat.value}
              </p>
              <p className="text-sm text-neutral-500 mt-1">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
