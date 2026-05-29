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
      <section className="px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-20 border-b border-[#f0ebe0]/15">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#f4501e] mb-4 block">// about</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.98] mb-8 text-[#f0ebe0]">
              We started because nobody was serving the 5-to-50 person business
            </h1>
            <p className="text-lg text-[#a39b8e] max-w-xl">The ones too small for enterprise firms. Too big for a freelancer who disappears.</p>
          </motion.div>
        </div>
      </section>

      {/* Story — two-column editorial */}
      <section className="px-6 lg:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-[#cfc7b9] leading-relaxed first-letter:text-5xl first-letter:font-mono first-letter:font-medium first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#f4501e]">
              AI is everywhere right now. Every SaaS company says they're "AI-powered." Every consultant
              has a new framework. Every LinkedIn post promises to 10x your productivity.
            </p>
            <p className="text-lg text-[#a39b8e] leading-relaxed mt-6">
              But most small businesses? They're still copying data between spreadsheets. Still sending
              the same emails manually. Still spending hours on tasks a machine could handle in seconds.
            </p>
            <p className="text-lg text-[#a39b8e] leading-relaxed mt-6">
              The big automation firms charge six figures and take a year. The freelancers disappear after
              the first project. Nobody was building for the businesses in the middle.
            </p>
            <p className="text-lg text-[#f0ebe0] font-medium leading-relaxed mt-6">
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
            <div className="border border-[#f0ebe0]/15 p-8 md:p-10 w-full">
              <div className="w-8 h-px bg-[#f4501e] mb-6" />
              <p className="text-2xl md:text-3xl font-bold leading-snug tracking-tight text-[#f0ebe0]">
                "Our best outcome is when you don't need us anymore."
              </p>
              <p className="text-sm text-[#a39b8e] mt-4 font-mono uppercase tracking-[0.1em]">Our actual philosophy</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="px-6 lg:px-10 py-16 md:py-24 section-alt border-y border-[#f0ebe0]/15">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#f0ebe0]/15">
          {[
            { value: '50+', label: 'Automations built' },
            { value: '8', label: 'Industries served' },
            { value: '75+', label: 'Hours saved weekly' },
            { value: 'Days', label: 'Not months to deploy' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="p-8 md:p-10 border-b border-r border-[#f0ebe0]/15"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <p className="font-mono text-3xl md:text-5xl font-medium tracking-tight text-[#f0ebe0]">{stat.value}</p>
              <p className="text-xs text-[#a39b8e] mt-2 font-mono uppercase tracking-[0.1em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values — card grid */}
      <section className="px-6 lg:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-12 text-[#f0ebe0]">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#f0ebe0]/15">
            {values.map((value, i) => (
              <motion.div
                key={value.num}
                className="p-8 md:p-10 border-b border-r border-[#f0ebe0]/15 group hover:bg-[#15130e] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <span className="font-mono text-4xl md:text-5xl font-medium text-[#2a261d] group-hover:text-[#f4501e] transition-colors duration-200 leading-none block mb-4">
                  {value.num}
                </span>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 text-[#f0ebe0]">{value.title}</h3>
                <p className="text-[#a39b8e] leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Us vs Them comparison */}
      <section className="px-6 lg:px-10 py-20 md:py-28 section-alt border-t border-[#f0ebe0]/15">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-12 text-[#f0ebe0]">What Makes Us Different</h2>
          <div className="border border-[#f0ebe0]/15">
            <div className="grid grid-cols-2 py-4 px-6 md:px-8 text-[0.6rem] font-mono uppercase tracking-[0.2em] border-b border-[#f0ebe0]/15">
              <span className="text-[#f4501e]">Us</span>
              <span className="text-[#a39b8e]">Everyone else</span>
            </div>
            {comparison.map((row) => (
              <div key={row.us} className="grid grid-cols-2 border-b border-[#f0ebe0]/15 last:border-b-0 py-5 px-6 md:px-8 hover:bg-[#15130e] transition-colors">
                <span className="text-[#f0ebe0] font-medium">{row.us}</span>
                <span className="text-[#a39b8e] text-sm">{row.them}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 py-16 md:py-24 border-t border-[#f0ebe0]/15">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#f0ebe0]">Want to work with us?</h2>
            <p className="text-[#a39b8e] mt-3 max-w-md">Book a call. We'll figure out if we're a fit, and go from there.</p>
          </div>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-[#f4501e] text-[#0e0d0b] font-mono uppercase tracking-[0.15em] text-xs font-medium btn-primary shrink-0"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </>
  )
}
