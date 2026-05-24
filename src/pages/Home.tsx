import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Masthead from '../components/Masthead'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Quote from '../components/Quote'

const pricing = [
  { name: 'Quick Start', price: '$3,500', desc: '1 automation or simple AI agent. 2–3 weeks.' },
  { name: 'Growth', price: '$8,500', desc: '2–3 automations or 1 complex AI agent. 4–6 weeks.' },
  { name: 'AI Agent Deploy', price: '$5k–$12k', desc: 'Custom agents connected to your tools and data.' },
  { name: 'Workshops', price: '$2.5k–$6k', desc: 'Half-day or full-day training for your team.' },
]

function PricingSection() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 border-b border-neutral-900/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#B91C1C] mb-4 block">Pricing</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-[-0.03em]">What This Costs</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricing.map((tier, i) => (
            <motion.div
              key={tier.name}
              className="border border-neutral-900/10 p-8 hover:border-neutral-900/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400">{tier.name}</span>
              <p className="font-serif text-3xl font-bold mt-3 mb-3 tracking-tight">{tier.price}</p>
              <p className="text-sm text-neutral-500 leading-relaxed">{tier.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-500 text-sm mb-4">Monthly support available at $1,200/month</p>
          <Link
            to="/contact"
            className="text-xs uppercase tracking-[0.15em] font-mono font-medium text-[#B91C1C] hover:text-[#991B1B] transition-colors"
          >
            Not sure what you need? Let's figure it out together &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}

function ServicesSummary() {
  return (
    <section className="border-b border-neutral-900/10">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-900/10">
        {[
          { num: 'I', title: 'Business Automation', desc: 'Email, CRM, invoicing — all that boring stuff that wastes time.' },
          { num: 'II', title: 'AI Agents', desc: 'Smart agents that actually do work for you. Not just chatbots.' },
          { num: 'III', title: 'n8n Setup & Consulting', desc: 'Connect all your tools so they talk to each other automatically.' },
        ].map((service, i) => (
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
      <div className="text-center py-8 border-t border-neutral-900/10">
        <Link
          to="/services"
          className="text-xs uppercase tracking-[0.15em] font-mono text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          See all services &rarr;
        </Link>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-10">
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
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-[#B91C1C] text-white font-mono uppercase tracking-[0.15em] text-xs hover:bg-[#991B1B] hover:shadow-[0_8px_30px_rgba(185,28,28,0.3)] transition-all duration-300"
            >
              Book a Free Call
            </Link>
            <p className="mt-8 text-[0.7rem] font-mono text-neutral-400 uppercase tracking-[0.15em]">
              Free discovery call &middot; No contracts &middot; Results in days
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Masthead />
      <Hero />
      <Marquee />
      <ServicesSummary />
      <Quote />
      <PricingSection />
      <CTASection />
    </>
  )
}
