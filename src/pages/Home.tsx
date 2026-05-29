import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Masthead from '../components/Masthead'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Quote from '../components/Quote'

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
    <path d="M6 14L14 6M14 6H7M14 6V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const pricing = [
  { name: 'Quick Start', price: '$3,500', desc: '1 automation or simple AI agent. 2–3 weeks.' },
  { name: 'Growth', price: '$8,500', desc: '2–3 automations or 1 complex AI agent. 4–6 weeks.' },
  { name: 'AI Agent Deploy', price: '$5k–$12k', desc: 'Custom agents connected to your tools and data.' },
  { name: 'Workshops', price: '$2.5k–$6k', desc: 'Half-day or full-day training for your team.' },
]

function PricingSection() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 border-t border-[#f0ebe0]/15 section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-14 flex items-end justify-between border-b border-[#f0ebe0]/15 pb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#f4501e] mb-3 block">// pricing</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] text-[#f0ebe0]">What This Costs</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#f0ebe0]/15">
          {pricing.map((tier, i) => (
            <motion.div
              key={tier.name}
              className="p-8 border-[#f0ebe0]/15 border-b sm:border-b lg:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0 group hover:bg-[#15130e] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e]">[{String(i + 1).padStart(2, '0')}] {tier.name}</span>
              <p className="font-mono text-3xl font-medium mt-4 mb-3 tracking-tight text-[#f0ebe0] group-hover:text-[#f4501e] transition-colors">{tier.price}</p>
              <p className="text-sm text-[#a39b8e] leading-relaxed">{tier.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[#a39b8e] text-sm font-mono uppercase tracking-[0.1em]">Monthly support at $1,200/month</p>
          <Link
            to="/contact"
            className="text-xs uppercase tracking-[0.15em] font-mono font-medium text-[#f4501e] hover:text-[#f0ebe0] transition-colors"
          >
            Not sure what you need? Let's figure it out &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}

function ServicesSummary() {
  return (
    <section className="px-6 lg:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#f0ebe0]/15">
          {[
            { num: 'I', title: 'Business Automation', desc: 'Email, CRM, invoicing \u2014 all that boring stuff that wastes time.' },
            { num: 'II', title: 'AI Agents', desc: 'Smart agents that actually do work for you. Not just chatbots.' },
            { num: 'III', title: 'n8n Setup & Consulting', desc: 'Connect all your tools so they talk to each other automatically.' },
          ].map((service, i) => (
            <motion.article
              key={service.num}
              className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#f0ebe0]/15 last:border-r-0 last:border-b-0 group hover:bg-[#15130e] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-[#f4501e]">
                {service.num}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-5 mb-5 leading-tight tracking-[-0.02em] text-[#f0ebe0]">
                {service.title}
              </h3>
              <p className="text-[#a39b8e] leading-relaxed text-[0.95rem] mb-6">
                {service.desc}
              </p>
              <div className="text-[#6b645a] group-hover:text-[#f4501e] transition-colors duration-200">
                <ArrowIcon />
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/services"
            className="text-xs uppercase tracking-[0.15em] font-mono text-[#a39b8e] hover:text-[#f0ebe0] transition-colors"
          >
            See all services &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 border-t border-[#f0ebe0]/15">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-[#f4501e] text-[#0e0d0b] p-12 md:p-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.6) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative z-10">
            <span className="inline-block border border-[#0e0d0b]/40 px-3 py-1 text-[0.6rem] font-mono uppercase tracking-[0.25em] mb-8">
              // let's work together
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-[-0.03em] max-w-2xl leading-[0.98]">
              Ready to Automate?
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed text-[#0e0d0b]/80">
              Book a free discovery call. We'll identify 10+ hours of repetitive work
              we can automate for your team — no commitment required.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-[#0e0d0b] text-[#f0ebe0] font-mono uppercase tracking-[0.15em] text-xs font-medium hover:bg-[#15130e] transition-colors"
            >
              Book a Free Call
            </Link>
            <p className="mt-8 text-[0.7rem] font-mono uppercase tracking-[0.15em] text-[#0e0d0b]/70">
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
