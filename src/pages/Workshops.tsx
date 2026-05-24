import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const workshops = [
  {
    title: 'AI for Real Work',
    duration: 'Half-day',
    hours: '4 hours',
    price: '$2,500',
    priceAlt: '$3,500 for 11\u201320 people',
    audience: 'Anyone who does writing, research, support, sales, or admin.',
    learns: ['What AI can actually do (vs. hype)', 'ChatGPT, Claude for real tasks', 'Prompt writing that works', 'When to use AI vs. just do it'],
    builds: ['Emails and docs with AI', 'Fast research summaries', 'Ideas and first drafts', 'Simple no-code AI tools'],
  },
  {
    title: 'Automation Basics',
    duration: 'Half-day',
    hours: '4 hours',
    price: '$2,500',
    priceAlt: '$3,500 for 11\u201320 people',
    audience: 'Owners, ops people, anyone drowning in repetitive tasks.',
    learns: ['How automation actually works', 'Zapier, Make, n8n overview', 'When to automate vs. hire', 'What to automate first'],
    builds: ['Your first automation', 'Email automation that saves hours', 'A simple AI agent'],
  },
  {
    title: 'n8n Deep Dive',
    duration: 'Full-day',
    hours: '6 hours',
    price: '$4,500',
    priceAlt: '$6,000 for 9\u201315 people',
    audience: 'Technical team members, ops people comfortable with systems.',
    learns: ['n8n setup and architecture', 'Building workflows from scratch', 'Connecting your actual tools', 'Testing and troubleshooting'],
    builds: ['3\u20135 real automations', 'CRM/email/Slack integrations', 'Reusable template library'],
  },
  {
    title: 'AI Agents Lab',
    duration: 'Full-day',
    hours: '6 hours',
    price: '$4,500',
    priceAlt: '$6,000 for 9\u201315 people',
    audience: 'Technical team members, product people deploying real AI.',
    learns: ['Agents vs. chatbots', 'Building agents that work', 'Tool and data connections', 'Security and QA'],
    builds: ['Customer support agent', 'Research agent', 'Sales qualification agent', 'Custom agent for your needs'],
  },
]

const steps = [
  { num: '01', label: 'Planning call', desc: 'Free, 30 min. We figure out what your team needs.' },
  { num: '02', label: 'We customize', desc: 'Real examples from your business, not generic slides.' },
  { num: '03', label: 'Workshop day', desc: 'In-person or remote. Hands-on, not lectures.' },
  { num: '04', label: 'Materials', desc: 'Slides, recordings, templates. Everything.' },
  { num: '05', label: '30-day support', desc: 'Email us questions. We help you implement.' },
]

const faqs = [
  { q: 'Do we need technical people?', a: '"AI for Real Work" and "Automation Basics" are for anyone. n8n and AI Agents are better with someone technical.' },
  { q: 'Can we do a shorter version?', a: 'Yes \u2014 2-hour intro sessions for $1,500.' },
  { q: 'What about ongoing training?', a: 'Monthly sessions or quarterly check-ins. Just ask.' },
  { q: 'One-on-one training?', a: '$200/hour for individual coaching.' },
  { q: 'What if only 3 people come?', a: 'Still worth it. Minimum is $2,500 regardless of headcount.' },
  { q: 'Can we record it?', a: 'We record it for you. You get the video plus all materials.' },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="border-t border-neutral-900/10">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-neutral-900/10">
          <button
            className="w-full text-left py-6 flex items-start justify-between gap-6 group"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="flex items-start gap-5">
              <span className="text-[0.65rem] font-mono text-neutral-300 mt-1 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-medium text-neutral-900 group-hover:text-[#B91C1C] transition-colors">{faq.q}</span>
            </div>
            <motion.span
              className="text-neutral-400 shrink-0 text-sm mt-0.5"
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              +
            </motion.span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-6 pl-10 text-neutral-500 text-sm leading-relaxed max-w-lg">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default function Workshops() {
  return (
    <>
      {/* Program header */}
      <section className="px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-20 border-b border-neutral-900/10 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[10%] font-serif font-bold text-[20vw] leading-none text-neutral-100 select-none pointer-events-none hidden lg:block" aria-hidden="true">
          Program
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#B91C1C] mb-4 block">Workshops</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.95] mb-6">
              Learn This Stuff<br />Yourself
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-lg">
              We can build automations for you all day. But some teams want to understand
              how it works. That's what these are for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workshop tickets */}
      <section className="px-6 lg:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto space-y-6">
          {workshops.map((ws, i) => (
            <motion.div
              key={ws.title}
              className="rounded-2xl border border-neutral-200/60 overflow-hidden card-lift bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {/* Top strip */}
              <div className="flex items-center justify-between px-6 md:px-10 py-3 bg-neutral-900 text-[#FDFBF7] rounded-t-2xl">
                <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em]">{ws.duration} &middot; {ws.hours}</span>
                <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em]">{ws.audience.split(',')[0]}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left: details */}
                <div className="lg:col-span-8 p-6 md:p-10 lg:border-r border-neutral-200/60">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight mb-6">{ws.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-3">What you learn</span>
                      <ul className="space-y-2">
                        {ws.learns.map((item) => (
                          <li key={item} className="text-sm text-neutral-600 leading-relaxed flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-neutral-300 mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-3">What you build</span>
                      <ul className="space-y-2">
                        {ws.builds.map((item) => (
                          <li key={item} className="text-sm text-neutral-600 leading-relaxed flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#B91C1C] mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right: pricing */}
                <div className="lg:col-span-4 p-6 md:p-10 flex flex-col justify-center">
                  <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">Starting at</span>
                  <p className="font-serif text-4xl md:text-5xl font-bold tracking-tight">{ws.price}</p>
                  <p className="text-xs text-neutral-500 mt-2">{ws.priceAlt}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Custom workshop */}
          <motion.div
            className="rounded-2xl border border-dashed border-neutral-300 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-serif text-xl font-bold mb-1">Custom Workshop</h3>
              <p className="text-sm text-neutral-500">Your industry. Your tools. Your use cases. Your skill level.</p>
            </div>
            <div className="text-right shrink-0">
              <p className="font-serif text-2xl font-bold">From $3,500</p>
              <p className="text-xs text-neutral-500">depends on scope</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works — horizontal stepper */}
      <section className="px-6 lg:px-10 py-20 md:py-28 bg-neutral-900 text-[#FDFBF7]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-16 tracking-tight">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 relative">
            <div className="absolute top-5 left-0 right-0 h-px bg-white/10 hidden sm:block" />
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs font-mono text-[#E53E3E] mb-4 bg-neutral-900 relative z-10">
                  {step.num}
                </div>
                <h3 className="font-medium text-sm mb-1">{step.label}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="font-serif text-lg font-bold mb-6">What You Get</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Live workshop (remote or in-person)', 'All materials and templates', 'Full recording of the session', '30 days of email support'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-neutral-400">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <path d="M3 8L6.5 11.5L13 5" stroke="#E53E3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-10 py-20 md:py-28 section-alt">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight mb-12">Frequently Asked</h2>
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 py-16 md:py-24 border-t border-neutral-900/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">Interested?</h2>
            <p className="text-neutral-500 mt-3 max-w-md">Free 30-minute planning call. We'll figure out the right workshop for your team.</p>
          </div>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-[#B91C1C] text-white font-mono uppercase tracking-[0.15em] text-xs rounded-lg btn-primary hover:bg-[#991B1B] shrink-0"
          >
            Book a Planning Call
          </Link>
        </div>
      </section>
    </>
  )
}
