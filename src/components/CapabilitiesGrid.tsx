import { motion } from 'framer-motion'

const capabilities = [
  { label: 'Email Automation' },
  { label: 'Data Entry' },
  { label: 'Smart Scheduling' },
  { label: 'Research & Reports' },
]

export default function CapabilitiesGrid() {
  return (
    <section id="process" className="border-b border-neutral-900/10">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-900/10">
        {capabilities.map((item, i) => (
          <motion.div
            key={item.label}
            className="p-8 md:p-12 text-center group hover:bg-neutral-900 hover:text-[#FDFBF7] transition-colors duration-300 cursor-default"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <span className="text-[0.6rem] font-mono uppercase tracking-[0.25em] text-neutral-400 group-hover:text-neutral-400 block mb-4">
              0{i + 1}
            </span>
            <span className="font-serif font-bold text-lg md:text-xl leading-tight block tracking-[-0.01em]">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
