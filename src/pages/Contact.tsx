import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full border border-[#f0ebe0]/20 bg-[#100e0a] px-4 py-3 text-base text-[#f0ebe0] placeholder:text-[#6b645a] focus:outline-none focus:border-[#f4501e] transition-colors'

  return (
    <>
      {/* Large mono heading */}
      <section className="px-6 lg:px-10 pt-20 pb-10 md:pt-28 md:pb-14 border-b border-[#f0ebe0]/15 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#f4501e] mb-6 block">// contact</span>
            <h1 className="font-mono uppercase text-6xl md:text-[8rem] lg:text-[10rem] font-medium tracking-[-0.04em] leading-[0.85] text-[#f0ebe0]">
              Let's<br /><span className="text-[#f4501e]">Talk</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Process stepper */}
      <section className="px-6 lg:px-10 py-12 md:py-16 border-b border-[#f0ebe0]/15 section-alt">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 border-t border-l border-[#f0ebe0]/15">
          {[
            { num: '01', label: 'Fill this out', desc: 'Takes 2 minutes' },
            { num: '02', label: 'We schedule a call', desc: 'Within 24 hours' },
            { num: '03', label: 'We get to work', desc: 'If it\u2019s a fit' },
          ].map((step, i) => (
            <motion.div
              key={step.num}
              className="p-6 md:p-8 border-b border-r border-[#f0ebe0]/15"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
            >
              <div className="w-10 h-10 border border-[#f4501e] flex items-center justify-center text-xs font-mono text-[#f4501e] mb-3">
                {step.num}
              </div>
              <p className="font-medium text-sm text-[#f0ebe0]">{step.label}</p>
              <p className="text-xs text-[#a39b8e] mt-0.5">{step.desc}</p>
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
              <div className="border border-[#f0ebe0]/15 p-8">
                <div className="w-8 h-px bg-[#f4501e] mb-5" />
                <p className="text-xl md:text-2xl font-bold leading-snug tracking-tight text-[#f0ebe0]">
                  "They found 15 hours of work we could automate in the first call. Paid for itself in two weeks."
                </p>
                <p className="text-sm text-[#a39b8e] mt-4 font-mono uppercase tracking-[0.1em]">Sarah K. &middot; Digital Agency Founder</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e] block mb-2">What happens next</span>
                <p className="text-sm text-[#a39b8e] leading-relaxed">
                  We'll get back within 24 hours to schedule a free 30-minute discovery call. On the call, we'll ask about your business and figure out if automation makes sense. No pressure. No 6-month follow-up emails.
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0ebe0]/15 space-y-3">
                <div>
                  <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e] block mb-0.5">Email directly</span>
                  <a href="mailto:hello@aiautomation.co" className="text-[#f0ebe0] hover:text-[#f4501e] transition-colors text-sm">
                    hello@aiautomation.co
                  </a>
                </div>
                <div>
                  <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e] block mb-0.5">Response time</span>
                  <span className="text-[#f0ebe0] text-sm">Within 24 hours</span>
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
              <div className="border border-[#f0ebe0]/15 p-12 md:p-16 text-center">
                <p className="font-mono uppercase text-3xl md:text-4xl font-medium tracking-tight mb-3 text-[#f4501e]">Got it.</p>
                <p className="text-[#a39b8e]">We'll be in touch within 24 hours to set up a call.</p>
              </div>
            ) : (
              <div className="border border-[#f0ebe0]/15 p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e] block mb-2">
                        Name
                      </label>
                      <input type="text" required className={inputClass} placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e] block mb-2">
                        Email
                      </label>
                      <input type="email" required className={inputClass} placeholder="you@company.com" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e] block mb-2">
                      Company
                    </label>
                    <input type="text" className={inputClass} placeholder="Company name (optional)" />
                  </div>

                  <div>
                    <label className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e] block mb-2">
                      What do you need help with?
                    </label>
                    <textarea
                      rows={3}
                      required
                      className={`${inputClass} resize-none`}
                      placeholder="What's taking too much time? What tools do you use?"
                    />
                  </div>

                  <div>
                    <label className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e] block mb-2">
                      Budget range
                    </label>
                    <select className={`${inputClass} text-[#a39b8e]`}>
                      <option className="bg-[#100e0a]" value="">Select a range (optional)</option>
                      <option className="bg-[#100e0a]" value="3500">Quick Start (~$3,500)</option>
                      <option className="bg-[#100e0a]" value="8500">Growth (~$8,500)</option>
                      <option className="bg-[#100e0a]" value="12000">AI Agent Deploy ($5k\u2013$12k)</option>
                      <option className="bg-[#100e0a]" value="workshop">Workshop ($2.5k\u2013$6k)</option>
                      <option className="bg-[#100e0a]" value="ongoing">Monthly Support ($1,200/mo)</option>
                      <option className="bg-[#100e0a]" value="unsure">Not sure yet</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-12 py-4 bg-[#f4501e] text-[#0e0d0b] font-mono uppercase tracking-[0.15em] text-xs font-medium btn-primary"
                  >
                    Send Message
                  </button>

                  <p className="text-[0.7rem] text-[#6b645a]">
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
