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
    <section className="py-24 md:py-32 px-6 lg:px-10 section-alt">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pricing.map((tier, i) => (
            <motion.div
              key={tier.name}
              className="bg-white rounded-2xl p-8 card-lift border border-neutral-200/60 group"
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
    <section className="px-6 lg:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { num: 'I', title: 'Business Automation', desc: 'Email, CRM, invoicing \u2014 all that boring stuff that wastes time.' },
            { num: 'II', title: 'AI Agents', desc: 'Smart agents that actually do work for you. Not just chatbots.' },
            { num: 'III', title: 'n8n Setup & Consulting', desc: 'Connect all your tools so they talk to each other automatically.' },
          ].map((service, i) => (
            <motion.article
              key={service.num}
              className="rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 md:p-10 group card-lift relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="relative z-10">
                <span className="text-[0.65rem] font-mono uppercase tracking-[0.25em] text-neutral-500">
                  {service.num}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mt-5 mb-5 leading-tight tracking-[-0.02em] text-white">
                  {service.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-[0.95rem] mb-6">
                  {service.desc}
                </p>
                <div className="text-neutral-500 group-hover:text-[#E53E3E] transition-colors duration-300">
                  <ArrowIcon />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="text-xs uppercase tracking-[0.15em] font-mono text-neutral-500 hover:text-neutral-900 transition-colors"
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
    <section className="py-24 md:py-32 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="rounded-2xl bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950 p-12 md:p-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#B91C1C]/[0.08] rounded-full blur-[100px] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="text-center relative z-10">
            <div className="inline-block bg-[#B91C1C] text-white px-4 py-1.5 rounded-full text-[0.6rem] font-mono uppercase tracking-[0.25em] mb-8">
              Let's Work Together
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-[-0.03em] text-white">
              Ready to Automate?
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Book a free discovery call. We'll identify 10+ hours of repetitive work
              we can automate for your team — no commitment required.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-[#B91C1C] text-white font-mono uppercase tracking-[0.15em] text-xs rounded-lg btn-primary hover:bg-[#991B1B]"
            >
              Book a Free Call
            </Link>
            <p className="mt-8 text-[0.7rem] font-mono text-neutral-500 uppercase tracking-[0.15em]">
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
