const SECTIONS = [
  { href: '#when', label: 'When to go' },
  { href: '#transport', label: 'Getting there and around' },
  { href: '#see', label: 'What to see' },
  { href: '#do', label: 'Things to do' },
  { href: '#eat-stay', label: 'Eat and stay' },
];

export default function VisitHero() {
  return (
    <header className="wall-of-scripts relative overflow-hidden bg-ink pb-16 pt-16 text-white md:pb-24 md:pt-20">
      <div className="alex-container grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h1 className="text-[clamp(3rem,1.5rem+6vw,6.5rem)] leading-[0.95] tracking-tight text-white">
            Plan your visit
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-white/80 md:text-xl">
            When to go, how to get around, what to see and where to stay. Almost everything lies along one
            strip of coast, so a trip is mostly a matter of choosing the season and the stretch.
          </p>
          <nav aria-label="On this page" className="mt-10">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {SECTIONS.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="rounded-sm border-b border-gold/60 pb-1 text-sm font-semibold text-white/90 transition-colors hover:border-tram hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <figure className="lg:col-span-5">
          <img
            src="/images/Alexandria-Bibliotheca-interior.jpg"
            alt="The reading hall of the Bibliotheca Alexandrina"
            className="aspect-[4/3] w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-white/10"
          />
          <figcaption className="mt-3 text-sm text-white/60">The reading hall of the Bibliotheca Alexandrina.</figcaption>
        </figure>
      </div>
    </header>
  );
}
