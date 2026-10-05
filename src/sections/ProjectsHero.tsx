import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import SourceChip from '../components/SourceChip';

const SECTIONS = [
  { href: '#ledger', label: 'Stage by stage' },
  { href: '#funding', label: 'Who is paying' },
  { href: '#projects', label: 'The projects' },
  { href: '#vision-2030', label: 'Vision 2030' },
];

export default function ProjectsHero({
  headingLevel = 2,
}: {
  /** 1 on the Projects page; 2 when embedded in another page (e.g. Home) */
  headingLevel?: 1 | 2;
}) {
  const { hero } = projectsData;
  const isPage = headingLevel === 1;
  const Heading = isPage ? 'h1' : 'h2';

  return (
    <section
      aria-labelledby="projects-hero-title"
      className={isPage ? 'bg-limestone-wash pb-20 pt-32 md:pb-28 md:pt-40' : 'bg-limestone-wash py-24 md:py-32'}
    >
      <div className="alex-container grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Heading
            id="projects-hero-title"
            className={
              isPage
                ? 'text-[clamp(2.5rem,1.5rem+4vw,5rem)] leading-[1.02] text-ink'
                : 'text-4xl leading-[1.05] text-ink md:text-5xl'
            }
          >
            {hero.title}
          </Heading>
          <p className="mt-6 max-w-xl text-pretty text-xl leading-relaxed text-ink">{hero.subtitle}</p>
          <p className="mt-6 max-w-[60ch] text-pretty leading-[1.75] text-ink-soft">{hero.summary}</p>

          {isPage ? (
            <nav aria-label="On this page" className="mt-10">
              <ul className="flex flex-wrap gap-x-8 gap-y-3">
                {SECTIONS.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      className="rounded-sm border-b border-gold pb-1 text-sm font-semibold text-sea transition-colors hover:border-ink hover:text-ink"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : (
            <Link to="/projects" className="alex-btn-primary mt-10">
              See every project
            </Link>
          )}
        </div>

        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:col-span-5 lg:mt-3">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="border-t-2 border-gold pt-4">
              <dt className="text-sm text-ink-soft">{stat.label}</dt>
              <dd className="mt-2 font-display text-4xl font-semibold tabular-nums leading-none text-ink md:text-5xl">
                {stat.value}
                {stat.factId && <SourceChip factId={stat.factId} className="ml-1 text-ink-soft" />}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
