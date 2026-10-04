import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="alex-section border-t-2 border-gold bg-papyrus">
      <div className="alex-container grid items-end gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <h2 className="text-ink">Come and see Alexandria for yourself</h2>
          <p className="mt-4 max-w-[65ch] text-pretty text-lg leading-[1.75] text-ink-soft">
            The visitor guide covers the best time to go, getting around, the main sights and where to eat and
            stay.
          </p>
        </div>
        <div className="lg:col-span-4 lg:justify-self-end">
          <Link to="/visit" className="alex-btn-primary">
            Plan your visit
          </Link>
        </div>
      </div>
    </section>
  );
}
