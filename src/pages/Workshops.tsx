import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const workshops = [
  {
    title: 'AI for Real Work',
    duration: 'Half-day (4 hours)',
    price: '$2,500 for up to 10 people | $3,500 for 11\u201320',
    audience: 'Anyone who does writing, research, support, sales, or admin.',
    learns: [
      'What AI can actually do for your business (vs. hype)',
      'How to use ChatGPT, Claude, and similar tools for real tasks',
      'Prompt writing that gets good results',
      'When to use AI vs. just doing it yourself',
    ],
    builds: [
      'Write emails and documents with AI (that sound human)',
      'Research and summarize information fast',
      'Generate ideas and first drafts',
      'Build simple tools with ChatGPT (no coding)',
    ],
  },
  {
    title: 'Business Automation Basics',
    duration: 'Half-day (4 hours)',
    price: '$2,500 for up to 10 people | $3,500 for 11\u201320',
    audience: 'Owners, ops people, anyone drowning in repetitive tasks.',
    learns: [
      'How automation actually works (simple explanation)',
      'Tools that connect your apps (Zapier, Make, n8n)',
      'When to automate vs. when to hire',
      'What\u2019s worth automating first',
    ],
    builds: [
      'Your first automation (form \u2192 CRM \u2192 email \u2192 Slack)',
      'An email automation that saves hours per week',
      'A simple AI agent for your business',
    ],
  },
  {
    title: 'n8n Workshop',
    duration: 'Full-day (6 hours)',
    price: '$4,500 for up to 8 people | $6,000 for 9\u201315',
    audience: 'Technical team members, ops people, anyone comfortable with tools and systems.',
    learns: [
      'What n8n is and why it\u2019s powerful',
      'How to set it up (we do this together)',
      'Building workflows from scratch',
      'Connecting your actual tools',
    ],
    builds: [
      '3\u20135 real automations your business will actually use',
      'Connections between your CRM, email, spreadsheets, Slack',
      'A template library you can reuse',
    ],
  },
  {
    title: 'AI Agents Deep Dive',
    duration: 'Full-day (6 hours)',
    price: '$4,500 for up to 8 people | $6,000 for 9\u201315',
    audience: 'Technical team members, product people, anyone who wants to deploy AI that works.',
    learns: [
      'What AI agents are (vs. regular chatbots)',
      'How to build agents that do real work',
      'Connecting agents to your tools and data',
      'Security and quality control',
    ],
    builds: [
      'A customer support agent',
      'A research agent',
      'A sales/lead qualification agent',
      'Whatever your business needs most',
    ],
  },
]

const faqs = [
  { q: 'Do we need technical people?', a: 'Depends on the workshop. "AI for Real Work" and "Business Automation Basics" are for anyone. n8n and AI Agents are better with someone technical on the team.' },
  { q: 'Can we do a shorter version?', a: 'Yes \u2014 we do 2-hour intro sessions for $1,500.' },
  { q: 'What about ongoing training?', a: 'We can do monthly sessions or quarterly check-ins. Just ask.' },
  { q: 'Do you do one-on-one training?', a: '$200/hour for individual coaching.' },
  { q: 'What if only 3 people want to come?', a: 'Still worth it. Minimum is $2,500 regardless of headcount.' },
  { q: 'Can we record it?', a: 'We record it for you anyway. You get the recording plus all materials.' },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-0 border-t border-neutral-900/10">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-neutral-900/10">
          <button
            className="w-full text-left py-5 flex items-center justify-between gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-medium text-neutral-900">{faq.q}</span>
            <span className="text-neutral-400 shrink-0 text-lg">{open === i ? '\u2212' : '+'}</span>
          </button>
          {open === i && (
            <p className="pb-5 text-neutral-500 text-sm leading-relaxed">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default function Workshops() {
  return (
    <>
      {/* Header */}
      <section className="px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-20 border-b border-neutral-900/10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#B91C1C] mb-4 block">Workshops</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-[-0.03em] mb-6">
              Learn This Stuff Yourself
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
              We can build automations for you all day. But some teams want to understand how it works.
              That's what these workshops are for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="px-6 lg:px-10 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight mb-8">Who This Is For</h2>
          <ul className="space-y-3">
            {[
              'Small teams (5\u201320 people) who want to use AI and automation themselves',
              'Business owners tired of guessing what\u2019s possible',
              'Teams who want to stop relying on outside help for every little thing',
              'Anyone sick of YouTube tutorials that don\u2019t relate to actual business work',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C] mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Workshop cards */}
      <section className="px-6 lg:px-10 py-16 md:py-24 border-t border-neutral-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight mb-12">Workshop Options</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workshops.map((ws, i) => (
              <motion.div
                key={ws.title}
                className="border border-neutral-900/10 p-8 md:p-10 hover:border-neutral-900/25 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1 }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-serif text-xl md:text-2xl font-bold tracking-tight">{ws.title}</h3>
                  <span className="text-[0.6rem] font-mono uppercase tracking-[0.15em] text-neutral-400 shrink-0 mt-1">{ws.duration}</span>
                </div>
                <p className="text-sm text-neutral-500 mb-1">{ws.audience}</p>
                <p className="text-xs font-mono text-[#B91C1C] mb-6">{ws.price}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-3">What you learn</span>
                    <ul className="space-y-1.5">
                      {ws.learns.map((item) => (
                        <li key={item} className="text-sm text-neutral-600 leading-relaxed">&ndash; {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-3">What you build</span>
                    <ul className="space-y-1.5">
                      {ws.builds.map((item) => (
                        <li key={item} className="text-sm text-neutral-600 leading-relaxed">&ndash; {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom */}
          <motion.div
            className="mt-8 border border-neutral-900/10 p-8 md:p-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-xl font-bold mb-2">Custom Workshop</h3>
            <p className="text-neutral-500 text-sm mb-2">Designed around your industry, tools, use cases, and team skill level.</p>
            <p className="text-xs font-mono text-[#B91C1C]">Starting at $3,500 (depends on scope)</p>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 lg:px-10 py-16 md:py-24 bg-neutral-900 text-[#FDFBF7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-10 tracking-tight">How It Works</h2>
          <div className="space-y-6">
            {[
              { step: '01', text: 'Book a planning call (free, 30 min) \u2014 we figure out what your team needs' },
              { step: '02', text: 'We customize the workshop with real examples from your business' },
              { step: '03', text: 'We run the workshop \u2014 in-person or remote, your choice' },
              { step: '04', text: 'You get all materials: slides, recordings, templates, everything' },
              { step: '05', text: '30-day follow-up \u2014 email us questions, we help you implement' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-5">
                <span className="font-mono text-sm text-[#E53E3E] shrink-0">{item.step}</span>
                <span className="text-neutral-300">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-white/10">
            <h3 className="font-serif text-lg font-bold mb-4">What You Get</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-400">
              <li>&ndash; Live workshop (remote or in-person)</li>
              <li>&ndash; All materials and templates</li>
              <li>&ndash; Recording of the session</li>
              <li>&ndash; 30 days of email support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-10 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight mb-10">FAQ</h2>
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 py-16 md:py-24 border-t border-neutral-900/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-6">Interested?</h2>
          <p className="text-neutral-500 text-lg mb-8">Book a free 30-minute planning call. We'll figure out the right workshop for your team.</p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-[#B91C1C] text-white font-mono uppercase tracking-[0.15em] text-xs hover:bg-[#991B1B] hover:shadow-[0_8px_30px_rgba(185,28,28,0.3)] transition-all duration-300"
          >
            Book a Planning Call
          </Link>
        </div>
      </section>
    </>
  )
}
