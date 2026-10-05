import { ExternalLink } from 'lucide-react';
import type { Confidence } from '../../data/facts';
import type { ServiceChannel, ServiceLink } from '../../data/servicesData';
import { formatFactDate } from '../../lib/factFormat';

const CHANNEL_LABEL: Record<ServiceChannel, string> = {
  online: 'Online',
  'in-person': 'In person',
  phone: 'Phone',
};

// Plain words instead of an "Official" badge, so an entry never reads as if
// this site were the official one.
const CONFIDENCE_WORDING: Record<Confidence, string> = {
  Official: "Confirmed on the provider's own page",
  Reported: 'Reported by the press or a secondary guide',
  Estimate: 'Estimate',
};

const phoneNumber = (url: string) => url.replace(/^tel:/, '');
const isPhone = (s: ServiceLink) => s.url.startsWith('tel:');

function Meta({ service }: { service: ServiceLink }) {
  return (
    <p className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-soft">
      <span>Checked {formatFactDate(service.asOf, true)}</span>
      <span>{CONFIDENCE_WORDING[service.confidence]}</span>
      {service.source && (
        <a
          href={service.source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm text-sea underline underline-offset-2 hover:text-ink"
        >
          {service.source.label}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
    </p>
  );
}

function Title({ service, className }: { service: ServiceLink; className: string }) {
  return (
    <>
      <h4 className={className}>{service.title}</h4>
      {service.titleAr && (
        <p lang="ar" dir="rtl" className="mt-1 text-left text-sm text-ink-soft">
          {service.titleAr}
        </p>
      )}
    </>
  );
}

/** The signature: a phone number set large in tabular display numerals. */
function BigNumber({ service, size }: { service: ServiceLink; size: string }) {
  // Short codes (122) stay huge; a full mobile number would overflow a phone screen.
  const long = phoneNumber(service.url).length > 5;
  return (
    <a
      href={service.url}
      className={`inline-flex min-h-12 items-baseline rounded-sm font-display font-semibold tabular-nums text-sea transition-colors hover:text-ink ${long ? 'text-3xl leading-tight sm:text-4xl' : size}`}
    >
      <span className="sr-only">Call </span>
      {phoneNumber(service.url)}
    </a>
  );
}

/** One of the emergency numbers: the loudest thing on the page. */
export function EmergencyEntry({ service }: { service: ServiceLink }) {
  return (
    <li className="border-t-2 border-gold pt-4">
      <BigNumber service={service} size="text-6xl leading-none md:text-7xl" />
      <Title service={service} className="mt-3 text-xl text-ink" />
      <p className="mt-1 text-sm text-ink-soft">{service.provider}</p>
      {service.note && <p className="mt-2 max-w-[40ch] text-pretty text-sm text-ink-soft">{service.note}</p>}
      <div className="mt-3">
        <Meta service={service} />
      </div>
    </li>
  );
}

/** A directory row: details on the left, the way in on the right. */
export function DirectoryEntry({ service }: { service: ServiceLink }) {
  return (
    <li className="grid gap-4 border-t border-limestone py-6 md:grid-cols-[minmax(0,1fr)_15rem] md:gap-10">
      <div>
        <Title service={service} className="text-2xl text-ink" />
        <p className="mt-2 text-sm text-ink-soft">
          Run by <span className="font-semibold text-ink">{service.provider}</span>
          <span className="ml-3 rounded-sm bg-limestone-wash px-2 py-0.5 text-xs font-semibold">
            {CHANNEL_LABEL[service.channel]}
          </span>
        </p>
        {service.howTo && (
          <ul className="mt-3 max-w-[65ch] list-disc space-y-1 pl-5 text-sm leading-relaxed text-ink-soft">
            {service.howTo.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        )}
        {service.note && (
          <p className="mt-3 max-w-[65ch] text-pretty text-sm leading-relaxed text-ink-soft">{service.note}</p>
        )}
        <div className="mt-3">
          <Meta service={service} />
        </div>
      </div>
      <div className="md:text-right">
        {isPhone(service) ? (
          <BigNumber service={service} size="text-5xl" />
        ) : (
          <a
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border-b-2 border-gold py-2 font-semibold text-sea transition-colors hover:text-ink"
          >
            Open the provider's site
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
      </div>
    </li>
  );
}
