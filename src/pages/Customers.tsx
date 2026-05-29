import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const caseStudies = [
  {
    industry: 'Marketing Agency',
    size: '8 people',
    metric: '6h/week',
    metricLabel: 'saved',
    problem: 'Spending 6+ hours every week manually copying data between HubSpot, ClickUp, and QuickBooks.',
    solution: 'n8n workflow syncing all three tools. Deal closes in HubSpot \u2192 project in ClickUp \u2192 invoice in QuickBooks. Weekly report auto-sent.',
    result: '6 hours per week back. Zero missed invoices. Owner knows what\u2019s happening without asking.',
    tools: ['n8n', 'HubSpot', 'ClickUp', 'QuickBooks'],
  },
  {
    industry: 'Law Firm',
    size: '12 people',
    metric: '40%',
    metricLabel: 'faster turnaround',
    problem: 'Paralegals drafting the same emails and documents over and over. 15\u201320 minutes each time.',
    solution: 'AI agent that drafts documents from case info in the firm\u2019s writing style. Paralegal reviews and sends in 3 minutes.',
    result: '40% faster document turnaround. Paralegals doing actual legal work instead of copy-paste.',
    tools: ['Custom AI Agent', 'Claude API', 'Case Management'],
  },
  {
    industry: 'E-commerce Store',
    size: 'Health supplements',
    metric: '85%',
    metricLabel: 'fewer manual emails',
    problem: '50\u201370 customer emails per day. Mostly identical questions. Owner spending 3 hours daily on email.',
    solution: 'AI support agent connected to orders and knowledge base. Auto-responds to common questions, escalates complex ones.',
    result: 'Owner answers 10\u201315 emails instead of 50\u201370. Response time from 4 hours to 10 minutes.',
    tools: ['AI Agent', 'Shopify API', 'Gmail', 'Knowledge Base'],
  },
  {
    industry: 'Recruiting Agency',
    size: '5 people',
    metric: '30m \u2192 2m',
    metricLabel: 'per prospect',
    problem: 'Manually researching candidates. LinkedIn, GitHub, Twitter \u2014 30\u201345 minutes per prospect, 20\u201330 times a week.',
    solution: 'Research agent that finds profiles, activity, and tech stack, then outputs a brief in 2 minutes.',
    result: '3x more candidates reached per week. Better personalization with more info, less time.',
    tools: ['AI Agent', 'Web Scraping', 'n8n', 'Airtable'],
  },
  {
    industry: 'Consulting Firm',
    size: '15 people',
    metric: '25h/week',
    metricLabel: 'saved across team',
    problem: 'No one knew what automation was possible. "We should automate that" but no time to learn.',
    solution: 'Full-day workshop. Taught Zapier and ChatGPT. Built 5 automations together. 30-day follow-up.',
    result: 'Team built 12 more automations on their own in 2 months. Now self-sufficient.',
    tools: ['Workshop', 'Zapier', 'ChatGPT'],
  },
  {
    industry: 'Real Estate Team',
    size: '6 agents',
    metric: '2x',
    metricLabel: 'lead-to-appointment rate',
    problem: 'Lead follow-up was a mess. Leads from Zillow, website, referrals \u2014 all different places. No visibility.',
    solution: 'All leads into one CRM. Auto-assignment, follow-up sequences, Slack alerts for hot leads.',
    result: 'Response time from 6 hours to 15 minutes. Lead-to-appointment rate doubled.',
    tools: ['n8n', 'Follow Up Boss', 'Slack', 'Zillow API'],
  },
  {
    industry: 'SaaS Startup',
    size: '10 people',
    metric: '7.5h/week',
    metricLabel: 'saved on onboarding',
    problem: 'Manual customer onboarding: 5 emails, 3 tool accounts, a call, Slack invite. 30 minutes each.',
    solution: 'Automated workflow: signup triggers everything. Welcome email, accounts, calendar, Slack, reminders. 2 minutes.',
    result: '30 minutes saved per customer. 15+ new customers/week. Support team focuses on real support.',
    tools: ['n8n', 'Stripe', 'Intercom', 'Calendar', 'Slack'],
  },
  {
    industry: 'Accounting Firm',
    size: '20 people',
    metric: '10h/week',
    metricLabel: 'saved on invoices',
    problem: 'Invoice processing via email, Slack, portal uploads. Download, rename, categorize, upload. 10+ hours weekly.',
    solution: 'AI agent reads invoices (OCR + AI), extracts data, renames, uploads to correct folder, flags issues.',
    result: '10 hours per week back. Fewer misfiled invoices. Clients get books updated faster.',
    tools: ['GPT-4 Vision', 'n8n', 'SharePoint', 'Email'],
  },
]

export default function Customers() {
  const featured = caseStudies[0]
  const rest = caseStudies.slice(1)

  return (
    <>
      {/* Header with aggregate stats */}
      <section className="px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-20 border-b border-[#f0ebe0]/15">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#f4501e] mb-4 block">// case studies</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.98] mb-12 text-[#f0ebe0]">
              What We've Actually Built
            </h1>
          </motion.div>
          <div className="grid grid-cols-3 border-t border-l border-[#f0ebe0]/15">
            {[
              { value: '8', label: 'companies' },
              { value: '75+', label: 'hours saved weekly' },
              { value: '$0', label: 'missed invoices' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="p-6 md:p-8 border-b border-r border-[#f0ebe0]/15"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <p className="font-mono text-3xl md:text-5xl font-medium tracking-tight text-[#f0ebe0]">{stat.value}</p>
                <p className="text-xs text-[#a39b8e] mt-1 font-mono uppercase tracking-[0.1em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured case study */}
      <section className="px-6 lg:px-10 py-20 md:py-28">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 border border-[#f0ebe0]/15"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="md:col-span-4 p-8 md:p-14 bg-[#f4501e] text-[#0e0d0b] flex flex-col justify-center">
            <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-[#0e0d0b]/70 block mb-3">{featured.industry} &middot; {featured.size}</span>
            <p className="font-mono text-5xl md:text-7xl font-medium tracking-tight">{featured.metric}</p>
            <p className="text-sm text-[#0e0d0b]/80 mt-2">{featured.metricLabel}</p>
          </div>
          <div className="md:col-span-8 p-8 md:p-14 md:border-l border-[#f0ebe0]/15">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e] block mb-2">Problem</span>
                <p className="text-sm text-[#a39b8e] leading-relaxed">{featured.problem}</p>
              </div>
              <div>
                <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e] block mb-2">Solution</span>
                <p className="text-sm text-[#a39b8e] leading-relaxed">{featured.solution}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {featured.tools.map((tool) => (
                <span key={tool} className="text-[0.6rem] font-mono uppercase tracking-[0.15em] text-[#a39b8e] border border-[#f0ebe0]/15 px-3 py-1">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Remaining case studies */}
      <section className="px-6 lg:px-10 py-16 md:py-24 section-alt border-y border-[#f0ebe0]/15">
        <div className="max-w-6xl mx-auto">
          {rest.map((study) => (
            <motion.article
              key={study.industry}
              className="border-b border-[#f0ebe0]/15 py-12 md:py-16 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-3">
                  <p className="font-mono text-4xl md:text-5xl font-medium tracking-tight text-[#f4501e]">{study.metric}</p>
                  <p className="text-xs text-[#a39b8e] mt-1 font-mono uppercase tracking-[0.1em]">{study.metricLabel}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {study.tools.map((tool) => (
                      <span key={tool} className="text-[0.55rem] font-mono uppercase tracking-[0.1em] text-[#a39b8e] border border-[#f0ebe0]/15 px-2 py-0.5">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-9">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold tracking-tight text-[#f0ebe0]">{study.industry}</h3>
                    <span className="text-[0.55rem] font-mono uppercase tracking-[0.15em] text-[#a39b8e]">{study.size}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e] block mb-1.5">Problem</span>
                      <p className="text-sm text-[#a39b8e] leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-[#a39b8e] block mb-1.5">Solution</span>
                      <p className="text-sm text-[#a39b8e] leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-[#f4501e] block mb-1.5">Result</span>
                      <p className="text-sm text-[#f0ebe0] leading-relaxed font-medium">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 py-16 md:py-24 border-t border-[#f0ebe0]/15">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#f0ebe0]">Want to be on this page?</h2>
            <p className="text-[#a39b8e] mt-3 max-w-md">Let's build something worth talking about.</p>
          </div>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-[#f4501e] text-[#0e0d0b] font-mono uppercase tracking-[0.15em] text-xs font-medium btn-primary shrink-0"
          >
            Let's Build Something
          </Link>
        </div>
      </section>
    </>
  )
}
