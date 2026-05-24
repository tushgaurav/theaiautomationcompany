import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const values = [
  {
    title: 'Results over theory',
    desc: 'We don\u2019t sell decks or roadmaps. We build things that work and save your team time this month, not next year.',
  },
  {
    title: 'No consultant-speak',
    desc: 'We talk like normal people. If we can\u2019t explain it simply, we don\u2019t understand it well enough.',
  },
  {
    title: 'Small teams, big impact',
    desc: 'We work with teams of 5\u201350 people. Small enough to move fast, big enough to have real problems worth solving.',
  },
  {
    title: 'Teach, don\u2019t create dependency',
    desc: 'We want you to understand what we build. Our best outcome is when you don\u2019t need us anymore.',
  },
]

const differentiators = [
  { label: 'We build it for you', vs: 'Most AI consultants just give you a strategy deck' },
  { label: 'Days, not months', vs: 'Enterprise automation takes 6\u201312 months' },
  { label: 'No long-term contracts', vs: 'Agencies lock you into retainers' },
  { label: 'We train your team', vs: 'Others keep you dependent on them' },
  { label: 'We use the latest tools', vs: 'Big firms are stuck on legacy platforms' },
]

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-20 border-b border-neutral-900/10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#B91C1C] mb-4 block">About</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-[-0.03em] mb-6">
              Who We Are
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 lg:px-10 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="space-y-6 text-lg text-neutral-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              AI is everywhere right now. Every SaaS company says they're "AI-powered." Every consultant
              has a new framework. Every LinkedIn post promises to 10x your productivity.
            </p>
            <p>
              But most small businesses? They're still copying data between spreadsheets. Still sending
              the same emails manually. Still spending hours on tasks a machine could handle in seconds.
            </p>
            <p className="text-neutral-900 font-medium">
              We started this company because we saw the gap. The big automation firms charge six figures
              and take a year. The freelancers disappear after the first project. Nobody was serving the
              5-to-50 person business that just wants stuff to work.
            </p>
            <p>
              So that's what we do. We come in, find the boring repetitive work, automate it with AI and
              modern tools, make sure it actually works, and show your team how to use it. Then we get out
              of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 lg:px-10 py-16 md:py-24 border-t border-neutral-900/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight mb-12">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="border-l-2 border-[#B91C1C] pl-6"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-serif text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="px-6 lg:px-10 py-16 md:py-24 bg-neutral-900 text-[#FDFBF7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight mb-10">What Makes Us Different</h2>
          <div className="space-y-6">
            {differentiators.map((d) => (
              <div key={d.label} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <span className="text-neutral-100 font-medium shrink-0">{d.label}</span>
                <span className="hidden sm:block text-neutral-600">&mdash;</span>
                <span className="text-neutral-400 text-sm">{d.vs}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-6">Want to work with us?</h2>
          <p className="text-neutral-500 text-lg mb-8">
            We keep things simple. Book a call, we'll figure out if we're a fit, and go from there.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-[#B91C1C] text-white font-mono uppercase tracking-[0.15em] text-xs hover:bg-[#991B1B] hover:shadow-[0_8px_30px_rgba(185,28,28,0.3)] transition-all duration-300"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </>
  )
}
