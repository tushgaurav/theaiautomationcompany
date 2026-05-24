export default function Marquee() {
  const items = [
    'No consultant-speak',
    'No 6-month projects',
    'Just less boring work',
    'AI that actually works',
    'Results in days',
  ]

  return (
    <div
      className="bg-neutral-900 text-[#FDFBF7] py-4 overflow-hidden border-b border-neutral-900/10"
      aria-hidden="true"
    >
      <div className="marquee-track flex gap-12 whitespace-nowrap will-change-transform">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-sm font-mono uppercase tracking-[0.15em] flex items-center gap-12">
            <span className="text-[#B91C1C]">—</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
