import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="px-6 lg:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto border border-[#f0ebe0]/15">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-8 p-8 md:p-14 lg:p-16 border-b md:border-b-0 md:border-r border-[#f0ebe0]/15">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#f4501e] mb-6 block">
                // what we do
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.0] mb-8 tracking-[-0.03em] text-[#f0ebe0]">
                We automate the boring stuff so you don't have to
              </h2>
              <p className="text-lg leading-relaxed text-[#a39b8e] max-w-2xl">
                You're running a business, not getting a PhD in AI. We come in,
                figure out what's eating your team's time, and build automations
                that actually work.
              </p>
              <div className="mt-10 flex items-center gap-5">
                <div className="w-14 h-px bg-[#f4501e]" />
                <span className="text-sm font-mono uppercase tracking-[0.1em] text-[#a39b8e]">
                  Saves 10–20 hours / week / person
                </span>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-4 flex flex-col">
            {[
              { label: 'Time Saved', value: '10–20h', desc: 'per week, per person' },
              { label: 'Setup', value: 'Days', desc: 'not months' },
              { label: 'Contracts', value: 'Zero', desc: 'no lock-in required' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="p-8 md:p-10 border-b border-[#f0ebe0]/15 last:border-b-0 flex-1"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e]">
                  {stat.label}
                </span>
                <p className="font-mono text-4xl md:text-5xl font-medium mt-2 tracking-[-0.03em] text-[#f0ebe0]">
                  {stat.value}
                </p>
                <p className="text-sm text-[#a39b8e] mt-1">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
