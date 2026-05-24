import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Business Automation',
    desc: 'The bread-and-butter stuff that eats your day.',
    items: [
      'Email management and auto-responses',
      'CRM updates and data sync',
      'Invoicing and billing automation',
      'Appointment scheduling',
      'Document generation',
      'Payment processing and reminders',
      'Report generation',
    ],
  },
  {
    title: 'n8n Automation & Setup',
    desc: 'n8n connects all your business tools. We make them work together.',
    items: [
      'Set up n8n from scratch (cloud or self-hosted)',
      'Build workflows that connect your apps',
      'Consulting on what\u2019s possible with your stack',
      'Fix and improve existing n8n setups',
      'Train your team to build simple workflows',
    ],
  },
  {
    title: 'AI Agents',
    desc: 'These aren\u2019t chatbots. AI agents actually do stuff.',
    items: [
      'Customer support agents that resolve issues',
      'Research agents that gather and summarize info',
      'Sales agents that qualify leads and book meetings',
      'Admin agents for scheduling and follow-ups',
      'Data agents that pull reports and find insights',
    ],
  },
  {
    title: 'Email & Communication',
    desc: 'Stop spending hours in your inbox every day.',
    items: [
      'Auto-drafting responses to common questions',
      'Email sorting and prioritization',
      'Follow-up reminders and sequences',
      'Meeting scheduling back-and-forth',
      'Slack/Teams automation',
    ],
  },
  {
    title: 'Customer Support',
    desc: 'Faster responses, happier customers, less manual work.',
    items: [
      'AI agents that solve problems (not just FAQs)',
      'Ticket sorting and routing',
      'Auto-responses with real answers',
      'Knowledge base setup',
      'Escalation workflows',
    ],
  },
  {
    title: 'Sales & Leads',
    desc: 'Research, qualify, and follow up — automatically.',
    items: [
      'Research agents for prospect info',
      'Proposal and quote generation',
      'Lead scoring and routing',
      'CRM automation (data entry, updates, reminders)',
      'Outreach sequence setup',
    ],
  },
  {
    title: 'Data Entry & Spreadsheets',
    desc: 'If you\u2019re copying and pasting between tools, we can fix that.',
    items: [
      'Moving info between tools automatically',
      'Updating spreadsheets from emails and forms',
      'Invoice and receipt processing',
      'Report generation and delivery',
      'Database cleanup',
    ],
  },
  {
    title: 'Content & Research',
    desc: 'First drafts, summaries, and research on autopilot.',
    items: [
      'Research agents that compile and summarize',
      'First drafts of repetitive documents',
      'Meeting notes and summaries',
      'Competitive research',
      'Content idea generation',
    ],
  },
  {
    title: 'Back Office',
    desc: 'The unsexy stuff that keeps your business running.',
    items: [
      'Expense tracking and categorization',
      'Vendor communications',
      'Employee onboarding automation',
      'Appointment and payment reminders',
      'Document organization',
    ],
  },
]

function PageHeader() {
  return (
    <section className="px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-20 border-b border-neutral-900/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#B91C1C] mb-4 block">Services</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-[-0.03em] mb-6">
            Here's what we can automate for you
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
            AI is everywhere right now. Most small businesses don't have time to figure out what's real.
            We do the figuring out and the building — you get the results.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <PageHeader />

      <section className="px-6 lg:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="border border-neutral-900/10 p-8 md:p-10 hover:border-neutral-900/25 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
            >
              <h3 className="font-serif text-xl md:text-2xl font-bold tracking-tight mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-500 text-sm mb-5">{service.desc}</p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="text-sm text-neutral-600 flex items-start gap-2.5">
                    <span className="text-[#B91C1C] mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[#B91C1C]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* n8n examples */}
      <section className="px-6 lg:px-10 py-16 md:py-24 bg-neutral-900 text-[#FDFBF7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-10 tracking-tight">Common n8n workflows we build</h2>
          <div className="space-y-6">
            {[
              'Form submitted \u2192 Add to CRM \u2192 Send welcome email \u2192 Create task \u2192 Notify Slack',
              'New sale in Shopify \u2192 Update inventory \u2192 Send to fulfillment \u2192 Create invoice',
              'Support ticket \u2192 Check knowledge base \u2192 Draft response \u2192 Assign to right person',
            ].map((flow) => (
              <div key={flow} className="flex items-start gap-3 text-neutral-300 font-mono text-sm">
                <span className="text-[#E53E3E] shrink-0">&rarr;</span>
                <span>{flow}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-6">Not sure what you need?</h2>
          <p className="text-neutral-500 text-lg mb-8">Book a free call and we'll figure it out together.</p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-[#B91C1C] text-white font-mono uppercase tracking-[0.15em] text-xs hover:bg-[#991B1B] hover:shadow-[0_8px_30px_rgba(185,28,28,0.3)] transition-all duration-300"
          >
            Let's Talk
          </Link>
        </div>
      </section>
    </>
  )
}
