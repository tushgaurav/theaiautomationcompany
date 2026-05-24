import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const caseStudies = [
  {
    industry: 'Marketing Agency',
    size: '8 people',
    problem: 'Spending 6+ hours every week manually copying data between HubSpot, ClickUp, and QuickBooks. Someone had to update all three every time anything changed.',
    solution: 'n8n workflow that syncs all three tools automatically. When a deal closes in HubSpot, a project gets created in ClickUp and an invoice gets generated in QuickBooks. Weekly report auto-sent to the owner.',
    result: '6 hours per week back (now billable client work). Zero missed invoices. Owner knows what\u2019s happening without asking.',
    tools: 'n8n, HubSpot, ClickUp, QuickBooks',
  },
  {
    industry: 'Law Firm',
    size: '12 people',
    problem: 'Paralegals drafting the same emails and documents over and over. Client intakes, status updates, document requests \u2014 same patterns, different details. 15\u201320 minutes each time.',
    solution: 'AI agent that drafts documents based on case info. Pulls data from their case management system, generates first drafts in the firm\u2019s writing style. Paralegal reviews and sends in 3 minutes.',
    result: '40% faster document turnaround. Happier clients. Paralegals doing actual legal work instead of copy-paste.',
    tools: 'Custom AI agent, Claude API, case management system',
  },
  {
    industry: 'E-commerce Store',
    size: 'Health supplements',
    problem: 'Answering 50\u201370 customer emails per day. Mostly the same questions: shipping, ingredients, returns, order status. Owner spending 3 hours daily on email.',
    solution: 'AI support agent handling common questions. Connected to order system and knowledge base. Auto-responds to simple stuff, escalates complex issues. Daily summary for the owner.',
    result: 'Owner answers 10\u201315 emails instead of 50\u201370. Response time from 4 hours to 10 minutes. Customer satisfaction went up.',
    tools: 'AI agent, Shopify API, Gmail, custom knowledge base',
  },
  {
    industry: 'Recruiting Agency',
    size: '5 people',
    problem: 'Manually researching candidates before outreach. LinkedIn, company websites, GitHub, Twitter \u2014 30\u201345 minutes per prospect, 20\u201330 times per week.',
    solution: 'Research agent that takes a name and company, finds profiles, recent activity, and tech stack, then outputs a ready-to-use brief in 2 minutes.',
    result: 'Research time from 30 min to 2 min. 3x more candidates reached per week. Better personalization.',
    tools: 'AI agent, web scraping tools, n8n, Airtable',
  },
  {
    industry: 'Consulting Firm',
    size: '15 people',
    problem: 'No one knew what automation was possible. Lots of "we should automate that" but no one had time to learn the tools. Wanted the team to be self-sufficient.',
    solution: 'Full-day Business Automation Basics workshop. Taught Zapier and ChatGPT for common tasks. Built 5 automations together during the session. 30-day follow-up support.',
    result: 'Team built 12 more automations on their own in 2 months. Saved ~25 hours per week across the company. Now self-sufficient.',
    tools: 'Workshop: Business Automation + AI for Real Work',
  },
  {
    industry: 'Real Estate Team',
    size: '6 agents',
    problem: 'Lead follow-up was a mess. Leads from Zillow, website, referrals \u2014 all going to different places. Agents forgetting to follow up. No visibility.',
    solution: 'All leads funneled into one CRM. Auto-assignment based on source and availability. Follow-up sequences for each lead type. Slack notifications for hot leads.',
    result: 'Response time from 6 hours to 15 minutes. Lead-to-appointment rate doubled. Broker sees everything in one dashboard.',
    tools: 'n8n, Follow Up Boss, Slack, Zillow API',
  },
  {
    industry: 'SaaS Startup',
    size: '10 people',
    problem: 'Customer onboarding was all manual. After signup: 5 emails, accounts in 3 tools, schedule a call, add to Slack. 30 minutes per new customer.',
    solution: 'Automated onboarding workflow. Signup triggers welcome email, account creation, calendar invite, Slack addition, support rep assignment, and reminder sequence. All in 2 minutes.',
    result: '30 minutes saved per customer (15+ new/week = 7.5 hours saved). Instant onboarding. Support team focuses on actual support.',
    tools: 'n8n, Stripe, Intercom, Google Calendar, Slack',
  },
  {
    industry: 'Accounting Firm',
    size: '20 people',
    problem: 'Invoice processing was manual hell. Invoices via email, Slack, portal uploads. Someone had to download, rename, categorize, and upload to the right client folder. 10+ hours per week.',
    solution: 'AI agent that processes incoming invoices. Reads with OCR + AI, extracts vendor/amount/date/category, renames properly, uploads to correct folder, flags anything wrong.',
    result: '10 hours per week back. Fewer missed or misfiled invoices. Clients get books updated faster.',
    tools: 'AI agent (GPT-4 Vision), n8n, SharePoint, email',
  },
]

export default function Customers() {
  return (
    <>
      {/* Header */}
      <section className="px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-20 border-b border-neutral-900/10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#B91C1C] mb-4 block">Case Studies</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-[-0.03em] mb-6">
              What We've Actually Built
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
              Real work for real businesses. Names changed for NDAs, but the results are real.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case studies */}
      <section className="px-6 lg:px-10 py-16 md:py-24">
        <div className="max-w-5xl mx-auto space-y-12">
          {caseStudies.map((study) => (
            <motion.article
              key={study.industry}
              className="border border-neutral-900/10 p-8 md:p-12 hover:border-neutral-900/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h3 className="font-serif text-xl md:text-2xl font-bold tracking-tight">{study.industry}</h3>
                <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-neutral-400 border border-neutral-200 px-2 py-0.5">
                  {study.size}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">The Problem</span>
                  <p className="text-sm text-neutral-600 leading-relaxed">{study.problem}</p>
                </div>
                <div>
                  <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">What We Built</span>
                  <p className="text-sm text-neutral-600 leading-relaxed">{study.solution}</p>
                </div>
                <div>
                  <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-[#B91C1C] block mb-2">The Result</span>
                  <p className="text-sm text-neutral-900 leading-relaxed font-medium">{study.result}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100">
                <span className="text-[0.6rem] font-mono uppercase tracking-[0.15em] text-neutral-400">Tools: </span>
                <span className="text-xs text-neutral-500">{study.tools}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 py-16 md:py-24 border-t border-neutral-900/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-6">Want to be on this page?</h2>
          <p className="text-neutral-500 text-lg mb-8">Let's build something together.</p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-[#B91C1C] text-white font-mono uppercase tracking-[0.15em] text-xs hover:bg-[#991B1B] hover:shadow-[0_8px_30px_rgba(185,28,28,0.3)] transition-all duration-300"
          >
            Let's Build Something
          </Link>
        </div>
      </section>
    </>
  )
}
