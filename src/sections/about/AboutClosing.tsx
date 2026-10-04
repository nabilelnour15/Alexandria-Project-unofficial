import { Link } from 'react-router-dom';
import { summaryData } from '@/data/aboutData';

export default function AboutClosing() {
  return (
    <section aria-labelledby="closing-title" className="bg-sea-deep py-24 text-white md:py-32">
      <div className="alex-container">
        <h2 id="closing-title" className="max-w-3xl text-white">
          {summaryData.title}
        </h2>
        <p className="mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-white/80">
          {summaryData.description}
        </p>

        <ul className="mt-16 grid gap-10 sm:grid-cols-3">
          {summaryData.pillars.map((p) => (
            <li key={p.title} className="border-t-2 border-gold pt-5">
              <h3 className="text-2xl text-white">{p.title}</h3>
              <p className="mt-2 text-pretty text-white/75">{p.desc}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-wrap gap-4">
          <Link to="/visit" className="alex-btn-on-dark">
            Plan a visit
          </Link>
          <Link to="/projects" className="alex-btn-ghost-dark">
            See the city's projects
          </Link>
        </div>
      </div>
    </section>
  );
}
