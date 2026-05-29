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
      className="border-y border-[#f0ebe0]/15 bg-[#121009] py-3.5 overflow-hidden"
      aria-hidden="true"
    >
      <div className="marquee-track flex gap-10 whitespace-nowrap will-change-transform">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-xs font-mono uppercase tracking-[0.2em] text-[#a39b8e] flex items-center gap-10">
            <span className="text-[#f4501e]">✶</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
