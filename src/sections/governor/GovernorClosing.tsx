import { Link } from 'react-router-dom';

export default function GovernorClosing() {
  return (
    <section aria-labelledby="gov-closing-title" className="bg-sea-deep py-20 text-white md:py-24">
      <div className="alex-container">
        <h2 id="gov-closing-title" className="max-w-3xl text-white">
          Follow the city's reported works
        </h2>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">
          Our project pages list the works reported for Alexandria, each with its source.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/projects" className="alex-btn-on-dark">
            City projects
          </Link>
          <Link to="/visit" className="alex-btn-ghost-dark">
            Plan a visit
          </Link>
        </div>
      </div>
    </section>
  );
}
