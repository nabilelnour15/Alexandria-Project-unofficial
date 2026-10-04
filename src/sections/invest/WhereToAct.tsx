import { ExternalLink } from 'lucide-react';
import { investData } from '@/data/investData';

const portAuthority = investData.ports[0].link;

export default function WhereToAct() {
  return (
    <section id="where-to-act" aria-labelledby="act-title" className="scroll-mt-28 bg-sea-deep py-24 text-white md:py-32">
      <div className="alex-container">
        <h2 id="act-title" className="max-w-3xl text-white">
          Where to look next
        </h2>
        <p className="mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-white/80">
          This is an unofficial guide, not an investment office, and it does not match investors with projects.
          Licences, free zone applications and incentives are handled by the authorities below.
        </p>

        <ul className="mt-16 grid gap-10 sm:grid-cols-3">
          <li className="border-t-2 border-gold pt-5">
            <h3 className="text-2xl text-white">Licences and incentives</h3>
            <p className="mt-2 text-pretty text-white/75">
              Egypt's General Authority for Investment and Free Zones (GAFI) is the place to apply and to
              confirm which incentives apply to you.
            </p>
            <a
              href="https://www.gafi.gov.eg"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-10 items-center rounded-sm border-b border-gold/60 font-semibold text-white transition-colors hover:border-tram"
            >
              GAFI's website
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li className="border-t-2 border-gold pt-5">
            <h3 className="text-2xl text-white">Port and berth questions</h3>
            <p className="mt-2 text-pretty text-white/75">
              Contact the port authority directly for operations, services and capacity.
            </p>
            {portAuthority && (
              <a
                href={portAuthority}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-10 items-center gap-2 font-semibold text-seaglass underline underline-offset-4 transition-colors hover:text-white"
              >
                Port authority website
                <ExternalLink className="size-4" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
          </li>
          <li className="border-t-2 border-gold pt-5">
            <h3 className="text-2xl text-white">Every figure</h3>
            <p className="mt-2 text-pretty text-white/75">
              Check each number against its source before relying on it: select Source beside a figure to see
              where it comes from and when it was last checked.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
