import { Link } from 'react-router-dom';
import { governorData } from '../data/governorData';
import PortraitPlaceholder from '../components/PortraitPlaceholder';

/** Home-page teaser for the /governor page. */
export default function GovernorSection() {
  return (
    <section aria-labelledby="governor-teaser-title" className="bg-white alex-section">
      <div className="alex-container grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div>
          <p className="font-display text-xl text-sea">{governorData.title}</p>
          <h2 id="governor-teaser-title" className="mt-2 text-ink">
            {governorData.honorific}&nbsp;{governorData.name}
          </h2>
          <p className="mt-6 max-w-[60ch] text-pretty text-lg leading-[1.75] text-ink-soft">
            {governorData.biography.summary}
          </p>
          <dl className="mt-8 grid max-w-xl gap-x-10 gap-y-4 border-t border-limestone pt-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-semibold text-ink">In office</dt>
              <dd className="mt-1 text-ink-soft">{governorData.tenure}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-ink">Background</dt>
              <dd className="mt-1 text-ink-soft">{governorData.background}</dd>
            </div>
          </dl>
          <p className="mt-6 max-w-xl text-pretty text-sm text-ink-soft">{governorData.previousGovernorNote}</p>
          <Link to="/governor" className="alex-btn-primary mt-8 inline-flex">
            Read the full biography
          </Link>
        </div>
        <PortraitPlaceholder className="lg:mt-12" />
      </div>
    </section>
  );
}
