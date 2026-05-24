import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const values = [
  { num: '01', title: 'Results over theory', desc: 'We don\u2019t sell decks or roadmaps. We build things that work and save your team time this month, not next year.' },
  { num: '02', title: 'No consultant-speak', desc: 'We talk like normal people. If we can\u2019t explain it simply, we don\u2019t understand it well enough.' },
  { num: '03', title: 'Small teams, big impact', desc: 'We work with teams of 5\u201350. Small enough to move fast, big enough to have real problems worth solving.' },
  { num: '04', title: 'Teach, don\u2019t create dependency', desc: 'We want you to understand what we build. Our best outcome is when you don\u2019t need us anymore.' },
]

const comparison = [
  { us: 'We build it for you', them: 'You get a strategy deck' },
  { us: 'Ready in days', them: '6\u201312 month timelines' },
  { us: 'No contracts', them: 'Annual retainer lock-in' },
  { us: 'We train your team', them: 'Kept dependent on vendor' },
  { us: 'Latest tools and models', them: 'Legacy enterprise platforms' },
]

export default function About() {
  return (
    <>
      {/* Manifesto header */}
      <section className="px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-20 border-b border-neutral-900/10">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#B91C1C] mb-4 block">About</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.95] mb-8">
              We started because nobody was serving the 5-to-50 person business
            </h1>
            <p className="text-lg text-neutral-500 max-w-xl">The ones too small for enterprise firms. Too big for a freelancer who disappears.</p>
          </motion.div>
        </div>
      </section>

      {/* Story — two-column editorial */}
      <section className="px-6 lg:px-10 py-20 md:py-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-neutral-900">
              AI is everywhere right now. Every SaaS company says they're "AI-powered." Every consultant
              has a new framework. Every LinkedIn post promises to 10x your productivity.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mt-6">
              But most small businesses? They're still copying data between spreadsheets. Still sending
              the same emails manually. Still spending hours on tasks a machine could handle in seconds.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mt-6">
              The big automation firms charge six figures and take a year. The freelancers disappear after
              the first project. Nobody was building for the businesses in the middle.
            </p>
            <p className="text-lg text-neutral-900 font-medium leading-relaxed mt-6">
              So we did. We come in, find the boring repetitive work, automate it with AI and modern
              tools, make sure it works, show your team how to use it, and get out of the way.
            </p>
          </motion.div>

          {/* Pull quote column */}
          <motion.div
            className="md:col-span-5 flex items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="border-l-2 border-[#B91C1C] pl-8">
              <p className="font-serif text-2xl md:text-3xl font-bold leading-snug tracking-tight">
                "Our best outcome is when you don't need us anymore."
              </p>
              <p className="text-sm text-neutral-500 mt-4">Our actual philosophy</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="border-t border-b border-neutral-900/10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-900/10">
          {[
            { value: '50+', label: 'Automations built' },
            { value: '8', label: 'Industries served' },
            { value: '75+', label: 'Hours saved weekly' },
            { value: 'Days', label: 'Not months to deploy' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="p-8 md:p-12 text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <p className="font-serif text-3xl md:text-5xl font-bold tracking-tight">{stat.value}</p>
              <p className="text-xs text-neutral-500 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values — numbered list */}
      <section className="px-6 lg:px-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight mb-16">What We Believe</h2>
          <div className="space-y-12">
            {values.map((value, i) => (
              <motion.div
                key={value.num}
                className="flex gap-6 md:gap-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="font-serif text-4xl md:text-6xl font-bold text-neutral-200 leading-none shrink-0 w-16 md:w-24">
                  {value.num}
                </span>
                <div className="pt-1 md:pt-3">
                  <h3 className="font-serif text-xl md:text-2xl font-bold tracking-tight mb-2">{value.title}</h3>
                  <p className="text-neutral-500 leading-relaxed max-w-lg">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Us vs Them comparison */}
      <section className="px-6 lg:px-10 py-20 md:py-28 bg-neutral-900 text-[#FDFBF7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight mb-12">What Makes Us Different</h2>
          <div className="border-t border-white/10">
            <div className="grid grid-cols-2 py-4 text-[0.6rem] font-mono uppercase tracking-[0.2em]">
              <span className="text-[#E53E3E]">Us</span>
              <span className="text-neutral-500">Everyone else</span>
            </div>
            {comparison.map((row) => (
              <div key={row.us} className="grid grid-cols-2 border-t border-white/10 py-5">
                <span className="text-neutral-100 font-medium">{row.us}</span>
                <span className="text-neutral-500 text-sm">{row.them}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">Want to work with us?</h2>
            <p className="text-neutral-500 mt-3 max-w-md">Book a call. We'll figure out if we're a fit, and go from there.</p>
          </div>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-[#B91C1C] text-white font-mono uppercase tracking-[0.15em] text-xs hover:bg-[#991B1B] hover:shadow-[0_8px_30px_rgba(185,28,28,0.3)] transition-all duration-300 shrink-0"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </>
  )
}
