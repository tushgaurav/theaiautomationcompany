import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const featured = [
  {
    num: '01',
    title: 'Business Automation',
    desc: 'Email, CRM, invoicing, billing, scheduling, document generation, payment reminders, report generation. If your team is copying and pasting between tools, we fix that.',
  },
  {
    num: '02',
    title: 'AI Agents',
    desc: 'Not chatbots. Agents that resolve support tickets, research prospects, qualify leads, handle scheduling, and pull reports. They actually do the work.',
  },
  {
    num: '03',
    title: 'n8n Automation & Setup',
    desc: 'We set up n8n from scratch, build the workflows, connect your apps, fix messy existing setups, and train your team to build their own.',
  },
]

const remaining = [
  { title: 'Email & Communication', items: ['Auto-draft responses', 'Sorting & prioritization', 'Follow-up sequences', 'Meeting scheduling', 'Slack/Teams automation'] },
  { title: 'Customer Support', items: ['AI agents that solve issues', 'Ticket sorting & routing', 'Auto-responses', 'Knowledge base setup', 'Escalation workflows'] },
  { title: 'Sales & Leads', items: ['Prospect research agents', 'Proposal generation', 'Lead scoring & routing', 'CRM automation', 'Outreach sequences'] },
  { title: 'Data & Spreadsheets', items: ['Cross-tool data sync', 'Form/email to spreadsheet', 'Invoice processing', 'Report generation', 'Database cleanup'] },
  { title: 'Content & Research', items: ['Research compilation', 'Document first drafts', 'Meeting summaries', 'Competitive research', 'Content ideation'] },
  { title: 'Back Office', items: ['Expense tracking', 'Vendor communications', 'Employee onboarding', 'Payment reminders', 'Document organization'] },
]

const workflows = [
  { trigger: 'Form submitted', steps: ['Add to CRM', 'Send welcome email', 'Create task', 'Notify Slack'] },
  { trigger: 'New Shopify sale', steps: ['Update inventory', 'Send to fulfillment', 'Create invoice'] },
  { trigger: 'Support ticket', steps: ['Check knowledge base', 'Draft response', 'Assign to agent'] },
]

export default function Services() {
  return (
    <>
      {/* Editorial split hero */}
      <section className="px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-20 border-b border-neutral-900/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#B91C1C] mb-4 block">Services</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.95]">
                Here's what we can automate for you
              </h1>
            </motion.div>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end gap-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <p className="text-5xl md:text-6xl font-serif font-bold tracking-tight">9</p>
              <p className="text-sm text-neutral-500 mt-1">service categories</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <p className="text-5xl md:text-6xl font-serif font-bold tracking-tight">50+</p>
              <p className="text-sm text-neutral-500 mt-1">automations built</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured services — full-width stacked rows */}
      <section className="px-6 lg:px-10 border-b border-neutral-900/10">
        <div className="max-w-6xl mx-auto">
          {featured.map((service, i) => (
            <motion.div
              key={service.num}
              className={`grid grid-cols-1 md:grid-cols-12 py-12 md:py-16 ${i < featured.length - 1 ? 'border-b border-neutral-900/10' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:col-span-1 mb-4 md:mb-0">
                <span className="text-[0.65rem] font-mono text-neutral-300 tracking-[0.15em]">{service.num}</span>
              </div>
              <div className="md:col-span-4 mb-4 md:mb-0">
                <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">{service.title}</h2>
              </div>
              <div className="md:col-span-7">
                <p className="text-neutral-500 leading-relaxed max-w-xl">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Remaining services — compact 3-col grid */}
      <section className="px-6 lg:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-10">Also</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {remaining.map((service) => (
              <div key={service.title}>
                <h3 className="font-serif text-lg font-bold tracking-tight mb-3">{service.title}</h3>
                <ul className="space-y-1.5">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm text-neutral-500 leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* n8n — terminal style */}
      <section className="bg-[#111] text-[#FDFBF7] px-6 lg:px-10 py-20 md:py-28 font-mono">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-10">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="text-xs text-neutral-500 ml-3">n8n-workflows.sh</span>
          </div>
          <div className="space-y-8">
            {workflows.map((wf) => (
              <div key={wf.trigger}>
                <span className="text-[#E53E3E] text-sm">$</span>
                <span className="text-neutral-400 text-sm ml-2">{wf.trigger}</span>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {wf.steps.map((step, j) => (
                    <span key={step} className="flex items-center gap-2">
                      {j > 0 && <span className="text-neutral-600">&rarr;</span>}
                      <span className="text-sm text-neutral-300 border border-neutral-700 px-3 py-1">{step}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After — AI Agent */}
      <section className="px-6 lg:px-10 py-20 md:py-28 border-b border-neutral-900/10">
        <div className="max-w-6xl mx-auto">
          <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-8">AI Agent Example</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight mb-12">Prospect research, before and after</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <motion.div
              className="p-10 md:p-14 bg-neutral-100 border border-neutral-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-4">Before</span>
              <p className="font-serif text-6xl md:text-7xl font-bold tracking-tight text-neutral-400">2h</p>
              <p className="text-sm text-neutral-500 mt-3 leading-relaxed">
                Per prospect. Manual search across LinkedIn, company sites, social profiles, news. Copy-paste into a doc.
              </p>
            </motion.div>
            <motion.div
              className="p-10 md:p-14 bg-neutral-900 text-[#FDFBF7] border border-neutral-800"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-[#E53E3E] block mb-4">After</span>
              <p className="font-serif text-6xl md:text-7xl font-bold tracking-tight">5m</p>
              <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
                Agent finds website, news, socials, company size, tech stack. Writes a ready-to-use summary automatically.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 py-16 md:py-24 border-t border-neutral-900/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">Not sure what you need?</h2>
            <p className="text-neutral-500 mt-3 max-w-md">Book a free call. We'll map your workflows and tell you what's worth automating.</p>
          </div>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-[#B91C1C] text-white font-mono uppercase tracking-[0.15em] text-xs hover:bg-[#991B1B] hover:shadow-[0_8px_30px_rgba(185,28,28,0.3)] transition-all duration-300 shrink-0"
          >
            Let's Talk
          </Link>
        </div>
      </section>
    </>
  )
}
