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
    <div className="border-t border-[#f0ebe0]/15">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-[#f0ebe0]/15">
          <button
            className="w-full text-left py-6 flex items-start justify-between gap-6 group"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="flex items-start gap-5">
              <span className="text-[0.7rem] font-mono text-[#f4501e] mt-1 shrink-0">[{String(i + 1).padStart(2, '0')}]</span>
              <span className="font-medium text-[#f0ebe0] group-hover:text-[#f4501e] transition-colors">{faq.q}</span>
            </div>
            <motion.span
              className="text-[#a39b8e] shrink-0 text-sm mt-0.5"
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
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-6 pl-11 text-[#a39b8e] text-sm leading-relaxed max-w-lg">{faq.a}</p>
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
      <section className="px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-20 border-b border-[#f0ebe0]/15 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[8%] font-mono uppercase font-medium text-[18vw] leading-none text-[#f0ebe0]/[0.035] select-none pointer-events-none hidden lg:block" aria-hidden="true">
          Program
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#f4501e] mb-4 block">// workshops</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.98] mb-6 text-[#f0ebe0]">
              Learn This Stuff<br />Yourself
            </h1>
            <p className="text-lg text-[#a39b8e] leading-relaxed max-w-lg">
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
              className="border border-[#f0ebe0]/15 card-lift bg-[#100e0a]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              {/* Top strip */}
              <div className="flex items-center justify-between px-6 md:px-10 py-3 bg-[#15130e] border-b border-[#f0ebe0]/15 text-[#a39b8e]">
                <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em]">{ws.duration} &middot; {ws.hours}</span>
                <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em]">{ws.audience.split(',')[0]}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left: details */}
                <div className="lg:col-span-8 p-6 md:p-10 lg:border-r border-[#f0ebe0]/15">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-[#f0ebe0]">{ws.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e] block mb-3">What you learn</span>
                      <ul className="space-y-2">
                        {ws.learns.map((item) => (
                          <li key={item} className="text-sm text-[#a39b8e] leading-relaxed flex items-start gap-2">
                            <span className="w-1 h-1 bg-[#6b645a] mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e] block mb-3">What you build</span>
                      <ul className="space-y-2">
                        {ws.builds.map((item) => (
                          <li key={item} className="text-sm text-[#a39b8e] leading-relaxed flex items-start gap-2">
                            <span className="w-1 h-1 bg-[#f4501e] mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right: pricing */}
                <div className="lg:col-span-4 p-6 md:p-10 flex flex-col justify-center">
                  <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e] block mb-2">Starting at</span>
                  <p className="font-mono text-4xl md:text-5xl font-medium tracking-tight text-[#f0ebe0]">{ws.price}</p>
                  <p className="text-xs text-[#a39b8e] mt-2">{ws.priceAlt}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Custom workshop */}
          <motion.div
            className="border border-dashed border-[#f0ebe0]/25 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-bold mb-1 text-[#f0ebe0]">Custom Workshop</h3>
              <p className="text-sm text-[#a39b8e]">Your industry. Your tools. Your use cases. Your skill level.</p>
            </div>
            <div className="text-right shrink-0">
              <p className="font-mono text-2xl font-medium text-[#f0ebe0]">From $3,500</p>
              <p className="text-xs text-[#a39b8e]">depends on scope</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works — horizontal stepper */}
      <section className="px-6 lg:px-10 py-20 md:py-28 section-alt border-y border-[#f0ebe0]/15">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-16 tracking-tight text-[#f0ebe0]">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 relative">
            <div className="absolute top-5 left-0 right-0 h-px bg-[#f0ebe0]/15 hidden sm:block" />
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-10 h-10 border border-[#f4501e] flex items-center justify-center text-xs font-mono text-[#f4501e] mb-4 bg-[#121009] relative z-10">
                  {step.num}
                </div>
                <h3 className="font-medium text-sm mb-1 text-[#f0ebe0]">{step.label}</h3>
                <p className="text-xs text-[#a39b8e] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-[#f0ebe0]/15">
            <h3 className="text-lg font-bold mb-6 text-[#f0ebe0]">What You Get</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Live workshop (remote or in-person)', 'All materials and templates', 'Full recording of the session', '30 days of email support'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-[#a39b8e]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <path d="M3 8L6.5 11.5L13 5" stroke="#f4501e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-12 text-[#f0ebe0]">Frequently Asked</h2>
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 py-16 md:py-24 border-t border-[#f0ebe0]/15">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#f0ebe0]">Interested?</h2>
            <p className="text-[#a39b8e] mt-3 max-w-md">Free 30-minute planning call. We'll figure out the right workshop for your team.</p>
          </div>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-[#f4501e] text-[#0e0d0b] font-mono uppercase tracking-[0.15em] text-xs font-medium btn-primary shrink-0"
          >
            Book a Planning Call
          </Link>
        </div>
      </section>
    </>
  )
}
