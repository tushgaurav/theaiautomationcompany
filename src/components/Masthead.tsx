export default function Masthead() {
  return (
    <header className="border-b border-neutral-900/10 px-6 lg:px-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="font-serif text-6xl md:text-[8rem] lg:text-[11rem] leading-[0.82] font-bold tracking-[-0.04em] uppercase">
          The AI
          <br />
          <span className="text-transparent [-webkit-text-stroke:2px_#1a1a1a] md:[-webkit-text-stroke:3px_#1a1a1a]">
            Automation
          </span>
          <br />
          Company
        </h1>
        <p className="mt-8 text-sm md:text-base text-neutral-500 font-sans max-w-lg mx-auto leading-relaxed">
          We automate the boring stuff in your business so you don't have to.
          Usually saves 10–20 hours per week per person.
        </p>
      </div>
    </header>
  )
}
