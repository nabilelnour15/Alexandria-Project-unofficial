import type { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';
import { events, places, placeKinds, type CommunityEvent } from '../data/communityData';
import { formatDate, monthName } from '../lib/dates';
import { SUGGEST_LISTING_URL } from '../lib/factFormat';

const kindLabel = (kind: string) => placeKinds.find((k) => k.id === kind)?.label ?? kind;

/** "2026-11-04" → "4 November 2026"; returns null once that date has passed. */
function upcomingDate(iso: string | undefined, today: string): string | null {
  if (!iso || iso < today) return null;
  return formatDate(iso);
}

function OutLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-10 items-center gap-1.5 rounded-sm border-b-2 border-gold text-sm font-semibold text-sea transition-colors hover:text-ink"
    >
      {children}
      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function EventRow({ event, today }: { event: CommunityEvent; today: string }) {
  const next = upcomingDate(event.nextStart, today);
  return (
    <li className="grid gap-3 border-t border-limestone py-6 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-8">
      <p className="font-display text-4xl font-semibold leading-none text-sea">
        {monthName(event.typicalMonth).slice(0, 3)}
        <span className="sr-only"> (usually in {monthName(event.typicalMonth)})</span>
      </p>
      <div className="min-w-0">
        <h3 className="text-2xl text-ink">{event.name}</h3>
        {event.nameAr && (
          <p lang="ar" dir="rtl" className="text-left text-sm text-ink-soft">
            {event.nameAr}
          </p>
        )}
        <p className="mt-2 max-w-[65ch] text-pretty leading-relaxed text-ink-soft">{event.description}</p>
        <p className="mt-2 max-w-[65ch] text-pretty text-sm text-ink-soft">
          {next ? (
            <>Next edition starts {next}.</>
          ) : (
            <>
              Latest edition: {event.latestEdition.year}
              {event.latestEdition.dates && `, ${event.latestEdition.dates}`} (
              <a
                href={event.latestEdition.source}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm text-sea underline underline-offset-2 hover:text-ink"
              >
                source<span className="sr-only">, opens in a new tab</span>
              </a>
              ). Check the organiser for next year's dates.
            </>
          )}
        </p>
        <div className="mt-2">
          <OutLink href={event.url}>{event.organiser}</OutLink>
        </div>
      </div>
    </li>
  );
}

export default function Community() {
  const today = new Date().toLocaleDateString('en-CA'); // local YYYY-MM-DD
  const byMonth = [...events].sort((a, b) => a.typicalMonth - b.typicalMonth);

  return (
    <div className="space-y-20">
      <section id="places" aria-labelledby="community-places" className="scroll-mt-28">
        <h2 id="community-places" className="text-ink">
          Places and organisations
        </h2>
        <p className="mb-8 mt-3 max-w-[65ch] text-pretty text-ink-soft">
          Cultural centres and groups with recent public activity. The list is short on purpose:
          we only add places we can check on their own pages.
        </p>
        <ul className="border-b border-limestone">
          {places.map((p) => (
            <li
              key={p.id}
              className="grid gap-3 border-t border-limestone py-6 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8"
            >
              <p className="text-sm font-semibold text-terracotta">{kindLabel(p.kind)}</p>
              <div>
                <h3 className="text-2xl text-ink">{p.name}</h3>
                {p.nameAr && (
                  <p lang="ar" dir="rtl" className="text-left text-sm text-ink-soft">
                    {p.nameAr}
                  </p>
                )}
                <p className="mt-2 max-w-[65ch] text-pretty leading-relaxed text-ink-soft">{p.description}</p>
                {p.district && <p className="mt-1 text-sm text-ink-soft">Area: {p.district}</p>}
                <div className="mt-2">
                  <OutLink href={p.url}>Visit their site</OutLink>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="events" aria-labelledby="community-events" className="scroll-mt-28">
        <h2 id="community-events" className="text-ink">
          Through the year
        </h2>
        <p className="mb-8 mt-3 max-w-[65ch] text-pretty text-ink-soft">
          Recurring events and the month they usually happen. We give exact dates only once the
          organiser has published them.
        </p>
        <ol className="border-b border-limestone">
          {byMonth.map((e) => (
            <EventRow key={e.id} event={e} today={today} />
          ))}
        </ol>
      </section>

      <section className="border-l-2 border-gold pl-6">
        <h2 className="text-ink">Know a place we've missed?</h2>
        <p className="mb-5 mt-3 max-w-[60ch] text-pretty leading-relaxed text-ink-soft">
          Suggest it on GitHub (a free account is needed). Suggestions reach this fan site's
          maintainer, not the city. We add a listing once we can check it on the organiser's page.
        </p>
        <a href={SUGGEST_LISTING_URL} target="_blank" rel="noopener noreferrer" className="alex-btn-primary">
          Suggest a place or event
          <span className="sr-only"> (opens GitHub in a new tab)</span>
        </a>
      </section>
    </div>
  );
}
