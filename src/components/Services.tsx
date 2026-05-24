import { motion } from 'framer-motion'

const services = [
  {
    num: 'I',
    title: 'Find the Time-Wasters',
    desc: "We audit your workflows and identify the repetitive, manual tasks eating your team\u2019s time \u2014 emails, data entry, scheduling, research, reporting.",
  },
  {
    num: 'II',
    title: 'Build the Automation',
    desc: 'We design and build custom AI-powered automations tailored to your exact processes. No off-the-shelf templates. No tools you need to learn.',
  },
  {
    num: 'III',
    title: 'Make Sure It Works',
    desc: "We deploy, test, and train your team. Then we stick around to make sure everything runs. Simple. Effective. Done.",
  },
]

export default function Services() {
  return (
    <section id="services" className="border-b border-neutral-900/10">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-900/10">
        {services.map((service, i) => (
          <motion.article
            key={service.num}
            className="p-8 md:p-12 lg:p-16 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <span className="text-[0.65rem] font-mono uppercase tracking-[0.25em] text-neutral-400">
              {service.num}
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mt-5 mb-5 leading-tight tracking-[-0.02em] group-hover:text-[#B91C1C] transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-neutral-500 leading-relaxed text-[0.95rem]">
              {service.desc}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
