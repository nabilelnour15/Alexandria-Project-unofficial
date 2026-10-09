import SourceChip from '@/components/SourceChip';

const SECTIONS = [
  { href: '#in-brief', label: 'The city in brief' },
  { href: '#history', label: 'History' },
  { href: '#explore', label: 'Places, food and culture' },
];

/**
 * The city's names in the scripts of the people who ran it carry the hero,
 * on the same wall-of-scripts texture as the footer.
 */
export default function AboutHero() {
  return (
    <header className="wall-of-scripts relative overflow-hidden bg-ink pb-20 pt-36 text-white md:pb-28 md:pt-44">
      <div className="alex-container grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p lang="grc" className="font-display text-3xl leading-tight text-seaglass md:text-4xl">
            Ἀλεξάνδρεια
          </p>
          <p lang="ar" dir="rtl" className="mt-1 text-left text-3xl leading-tight text-white/70 md:text-4xl">
            الإسكندرية
          </p>
          <h1 className="mt-6 text-[clamp(4rem,1.5rem+10vw,9.5rem)] leading-[0.9] tracking-tight text-white">
            Alexandria
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-white/80 md:text-xl">
            Founded by Alexander the Great in 331 BCE
            <SourceChip factId="foundingYear" className="ml-1 text-white/70" />, and for twenty-three
            centuries a port, a seat of learning and a meeting place on Egypt's Mediterranean coast.
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
            src="/images/citadel.jpg"
            alt="The Citadel of Qaitbay on its headland at the mouth of the Eastern Harbour"
            width={1200}
            height={800}
            fetchPriority="high"
            decoding="async"
            className="aspect-[4/5] w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-white/10 lg:aspect-[4/5]"
          />
          <figcaption className="mt-3 text-pretty text-sm text-white/60">
            The Citadel of Qaitbay, built 1477–1479 on the site of the ancient Lighthouse.
            <SourceChip factId="qaitbayCitadelBuilt" className="ml-1 text-white/60" />
          </figcaption>
        </figure>
      </div>
    </header>
  );
}
