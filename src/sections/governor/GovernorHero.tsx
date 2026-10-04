import PortraitPlaceholder from '@/components/PortraitPlaceholder';
import { governorData } from '@/data/governorData';
import { asOfLabel } from './asOfLabel';

const SECTIONS = [
  { href: '#background', label: 'Background' },
  { href: '#record', label: 'Record in office' },
  { href: '#sources', label: 'Sources' },
];

/** Plain, quiet header: who holds the office, since when, and what this page is not. */
export default function GovernorHero() {
  return (
    <header className="bg-limestone-wash pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="alex-container grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <p className="font-display text-2xl text-sea md:text-3xl">{governorData.title}</p>
          <h1 className="mt-3 text-ink">
            {governorData.honorific}&nbsp;{governorData.name}
          </h1>
          <p className="mt-6 max-w-[60ch] text-pretty text-xl leading-relaxed text-ink-soft">
            {governorData.tenure}. {governorData.background}.
          </p>

          <dl className="mt-10 grid max-w-2xl gap-x-10 gap-y-5 border-t border-limestone pt-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-semibold text-ink">Took office</dt>
              <dd className="mt-1 tabular-nums text-ink-soft">{governorData.appointedDate}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-ink">Predecessor</dt>
              <dd className="mt-1 text-pretty text-ink-soft">
                {governorData.previousGovernorNote.replace(/^Previous governor: /, '')}
              </dd>
            </div>
          </dl>

          <aside className="mt-10 max-w-2xl border-l-2 border-gold pl-5">
            <p className="text-pretty leading-[1.75] text-ink">
              This page is compiled by an unofficial fan project from public news reports. It does
              not speak for the governor or the governorate, and nothing on it is a statement from
              them. Information as of {asOfLabel}.
            </p>
          </aside>

          <nav aria-label="On this page" className="mt-10">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {SECTIONS.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="rounded-sm border-b border-gold pb-1 text-sm font-semibold text-ink transition-colors hover:border-sea hover:text-sea"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="lg:col-span-4 lg:justify-self-end">
          <PortraitPlaceholder />
        </div>
      </div>
    </header>
  );
}
