import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Large outline heading */}
      <section className="px-6 lg:px-10 pt-20 pb-10 md:pt-28 md:pb-14 border-b border-neutral-900/10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#B91C1C] mb-6 block">Contact</span>
            <h1 className="font-serif text-6xl md:text-[8rem] lg:text-[10rem] font-bold tracking-[-0.04em] leading-[0.85] text-transparent [-webkit-text-stroke:2px_#1a1a1a] md:[-webkit-text-stroke:3px_#1a1a1a]">
              Let's Talk
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Process stepper */}
      <section className="px-6 lg:px-10 py-12 md:py-16 border-b border-neutral-900/10 section-alt">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { num: '01', label: 'Fill this out', desc: 'Takes 2 minutes' },
            { num: '02', label: 'We schedule a call', desc: 'Within 24 hours' },
            { num: '03', label: 'We get to work', desc: 'If it\u2019s a fit' },
          ].map((step, i) => (
            <motion.div
              key={step.num}
              className="bg-white rounded-2xl p-6 md:p-8 text-center border border-neutral-200/60"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
            >
              <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-xs font-mono text-[#E53E3E] mx-auto mb-3">
                {step.num}
              </div>
              <p className="font-medium text-sm">{step.label}</p>
              <p className="text-xs text-neutral-400 mt-0.5">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main content: testimonial + form */}
      <section className="px-6 lg:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Left: testimonial + info */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Pull quote */}
            <div className="mb-12">
              <div className="rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#B91C1C]/[0.08] rounded-full blur-[60px] pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-8 h-[2px] bg-[#E53E3E] mb-5" />
                  <p className="font-serif text-xl md:text-2xl font-bold leading-snug tracking-tight text-white">
                    "They found 15 hours of work we could automate in the first call. Paid for itself in two weeks."
                  </p>
                  <p className="text-sm text-neutral-500 mt-4">Sarah K. &middot; Digital Agency Founder</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">What happens next</span>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  We'll get back within 24 hours to schedule a free 30-minute discovery call. On the call, we'll ask about your business and figure out if automation makes sense. No pressure. No 6-month follow-up emails.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200 space-y-3">
                <div>
                  <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-0.5">Email directly</span>
                  <a href="mailto:hello@aiautomation.co" className="text-neutral-900 hover:text-[#B91C1C] transition-colors text-sm">
                    hello@aiautomation.co
                  </a>
                </div>
                <div>
                  <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-0.5">Response time</span>
                  <span className="text-neutral-900 text-sm">Within 24 hours</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {submitted ? (
              <div className="rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 p-12 md:p-16 text-center">
                <p className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-3 text-white">Got it.</p>
                <p className="text-neutral-400">We'll be in touch within 24 hours to set up a call.</p>
              </div>
            ) : (
              <div className="rounded-2xl bg-white border border-neutral-200/60 p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-base focus:outline-none focus:border-neutral-900 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-base focus:outline-none focus:border-neutral-900 transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-base focus:outline-none focus:border-neutral-900 transition-colors"
                      placeholder="Company name (optional)"
                    />
                  </div>

                  <div>
                    <label className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                      What do you need help with?
                    </label>
                    <textarea
                      rows={3}
                      required
                      className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-base focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                      placeholder="What's taking too much time? What tools do you use?"
                    />
                  </div>

                  <div>
                    <label className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                      Budget range
                    </label>
                    <select
                      className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-base focus:outline-none focus:border-neutral-900 transition-colors text-neutral-600"
                    >
                      <option value="">Select a range (optional)</option>
                      <option value="3500">Quick Start (~$3,500)</option>
                      <option value="8500">Growth (~$8,500)</option>
                      <option value="12000">AI Agent Deploy ($5k\u2013$12k)</option>
                      <option value="workshop">Workshop ($2.5k\u2013$6k)</option>
                      <option value="ongoing">Monthly Support ($1,200/mo)</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-12 py-4 bg-[#B91C1C] text-white font-mono uppercase tracking-[0.15em] text-xs rounded-lg btn-primary hover:bg-[#991B1B]"
                  >
                    Send Message
                  </button>

                  <p className="text-[0.7rem] text-neutral-400">
                    We'll get back within 24 hours. No spam, ever.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
