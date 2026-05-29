import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="shrink-0">
    <path d="M6 14L14 6M14 6H7M14 6V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

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
      <section className="px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-20 border-b border-[#f0ebe0]/15">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#f4501e] mb-4 block">// services</span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.98] text-[#f0ebe0]">
                Here's what we can automate for you
              </h1>
            </motion.div>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end gap-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <p className="font-mono text-5xl md:text-6xl font-medium tracking-tight text-[#f0ebe0]">9</p>
              <p className="text-sm text-[#a39b8e] mt-1 font-mono uppercase tracking-[0.1em]">service categories</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <p className="font-mono text-5xl md:text-6xl font-medium tracking-tight text-[#f0ebe0]">50+</p>
              <p className="text-sm text-[#a39b8e] mt-1 font-mono uppercase tracking-[0.1em]">automations built</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured services — full-width stacked rows */}
      <section className="px-6 lg:px-10 border-b border-[#f0ebe0]/15">
        <div className="max-w-6xl mx-auto">
          {featured.map((service, i) => (
            <motion.div
              key={service.num}
              className={`grid grid-cols-1 md:grid-cols-12 py-12 md:py-16 ${i < featured.length - 1 ? 'border-b border-[#f0ebe0]/15' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="md:col-span-1 mb-4 md:mb-0">
                <span className="text-[0.7rem] font-mono text-[#f4501e] tracking-[0.15em]">[{service.num}]</span>
              </div>
              <div className="md:col-span-4 mb-4 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#f0ebe0]">{service.title}</h2>
              </div>
              <div className="md:col-span-7">
                <p className="text-[#a39b8e] leading-relaxed max-w-xl">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Remaining services — compact 3-col grid with cards */}
      <section className="px-6 lg:px-10 py-20 md:py-28 section-alt">
        <div className="max-w-6xl mx-auto">
          <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e] block mb-10">// also</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#f0ebe0]/15">
            {remaining.map((service) => (
              <div key={service.title} className="p-7 border-b border-r border-[#f0ebe0]/15 group hover:bg-[#15130e] transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold tracking-tight text-[#f0ebe0]">{service.title}</h3>
                  <span className="text-[#6b645a] group-hover:text-[#f4501e] transition-colors duration-200 mt-0.5">
                    <ArrowIcon />
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm text-[#a39b8e] leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* n8n — terminal style */}
      <section className="px-6 lg:px-10 py-20 md:py-28 font-mono">
        <div className="max-w-6xl mx-auto">
          <div className="border border-[#f0ebe0]/15 bg-[#100e0a] p-8 md:p-12">
            <div className="flex items-center gap-2 mb-10 border-b border-[#f0ebe0]/15 pb-5">
              <span className="w-2.5 h-2.5 bg-[#f4501e]" />
              <span className="w-2.5 h-2.5 bg-[#a39b8e]" />
              <span className="w-2.5 h-2.5 bg-[#6b645a]" />
              <span className="text-xs text-[#a39b8e] ml-3">n8n-workflows.sh</span>
            </div>
            <div className="space-y-8">
              {workflows.map((wf) => (
                <div key={wf.trigger}>
                  <span className="text-[#f4501e] text-sm">$</span>
                  <span className="text-[#a39b8e] text-sm ml-2">{wf.trigger}</span>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    {wf.steps.map((step, j) => (
                      <span key={step} className="flex items-center gap-2">
                        {j > 0 && <span className="text-[#6b645a]">&rarr;</span>}
                        <span className="text-sm text-[#f0ebe0] border border-[#f0ebe0]/20 px-3 py-1">{step}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before / After — AI Agent */}
      <section className="px-6 lg:px-10 py-20 md:py-28 border-t border-[#f0ebe0]/15">
        <div className="max-w-6xl mx-auto">
          <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e] block mb-8">// ai agent example</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-12 text-[#f0ebe0]">Prospect research, before and after</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#f0ebe0]/15">
            <motion.div
              className="p-10 md:p-14 border-b border-r border-[#f0ebe0]/15"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e] block mb-4">Before</span>
              <p className="font-mono text-6xl md:text-7xl font-medium tracking-tight text-[#6b645a]">2h</p>
              <p className="text-sm text-[#a39b8e] mt-3 leading-relaxed">
                Per prospect. Manual search across LinkedIn, company sites, social profiles, news. Copy-paste into a doc.
              </p>
            </motion.div>
            <motion.div
              className="p-10 md:p-14 border-b border-r border-[#f0ebe0]/15 bg-[#f4501e] text-[#0e0d0b]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-[#0e0d0b]/70 block mb-4">After</span>
              <p className="font-mono text-6xl md:text-7xl font-medium tracking-tight">5m</p>
              <p className="text-sm text-[#0e0d0b]/80 mt-3 leading-relaxed">
                Agent finds website, news, socials, company size, tech stack. Writes a ready-to-use summary automatically.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 py-16 md:py-24 border-t border-[#f0ebe0]/15">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#f0ebe0]">Not sure what you need?</h2>
            <p className="text-[#a39b8e] mt-3 max-w-md">Book a free call. We'll map your workflows and tell you what's worth automating.</p>
          </div>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-[#f4501e] text-[#0e0d0b] font-mono uppercase tracking-[0.15em] text-xs font-medium btn-primary shrink-0"
          >
            Let's Talk
          </Link>
        </div>
      </section>
    </>
  )
}
