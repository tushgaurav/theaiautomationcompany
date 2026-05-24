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
      {/* Header */}
      <section className="px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-20 border-b border-neutral-900/10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#B91C1C] mb-4 block">Contact</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-[-0.03em] mb-6">
              Let's Talk
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
              Not sure what you need? That's fine. Book a free call and we'll figure it out together.
              No sales pitch, just a conversation about what's possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form section */}
      <section className="px-6 lg:px-10 py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl font-bold mb-6">How this usually goes</h2>
            <div className="space-y-5 text-neutral-600 text-[0.95rem] leading-relaxed">
              <p>
                You fill out the form (or just email us). We'll get back to you within 24 hours
                to schedule a free 30-minute discovery call.
              </p>
              <p>
                On the call, we'll ask about your business, your team, and where time is being wasted.
                Then we'll tell you honestly whether automation makes sense and what it would look like.
              </p>
              <p>
                No pressure. No followup emails for 6 months. If we're a fit, great. If not, we'll
                point you in the right direction.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <div>
                <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-1">Email</span>
                <a href="mailto:hello@aiautomation.co" className="text-neutral-900 hover:text-[#B91C1C] transition-colors">
                  hello@aiautomation.co
                </a>
              </div>
              <div>
                <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-1">Response time</span>
                <span className="text-neutral-900">Within 24 hours</span>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {submitted ? (
              <div className="border border-neutral-900/10 p-10 text-center">
                <h3 className="font-serif text-2xl font-bold mb-3">Got it.</h3>
                <p className="text-neutral-500">We'll be in touch within 24 hours to set up a call.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-neutral-900/15 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-neutral-900/40 transition-colors"
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
                    className="w-full border border-neutral-900/15 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-neutral-900/40 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full border border-neutral-900/15 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-neutral-900/40 transition-colors"
                    placeholder="Company name (optional)"
                  />
                </div>

                <div>
                  <label className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                    What do you need help with?
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full border border-neutral-900/15 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-neutral-900/40 transition-colors resize-none"
                    placeholder="Tell us about your situation. What's taking too much time? What tools do you use?"
                  />
                </div>

                <div>
                  <label className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                    Budget range
                  </label>
                  <select
                    className="w-full border border-neutral-900/15 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-neutral-900/40 transition-colors text-neutral-600"
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
                  className="w-full px-8 py-4 bg-[#B91C1C] text-white font-mono uppercase tracking-[0.15em] text-xs hover:bg-[#991B1B] hover:shadow-[0_8px_30px_rgba(185,28,28,0.3)] transition-all duration-300"
                >
                  Send Message
                </button>

                <p className="text-[0.7rem] text-neutral-400 text-center">
                  We'll get back to you within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
