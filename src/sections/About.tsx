import { Link } from "react-router-dom";
import SourceChip from "@/components/SourceChip";
import AboutHero from "./about/AboutHero";
import CityInBrief from "./about/CityInBrief";
import Chronicle from "./about/Chronicle";
import ThemeExplorer from "./about/ThemeExplorer";
import AboutClosing from "./about/AboutClosing";

function AboutTeaser() {
  return (
    <section className="alex-section bg-white">
      <div className="alex-container grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <figure className="lg:col-span-6">
          <img
            loading="lazy"
            decoding="async"
            src="/images/alexandria-castle-egypt.jpg"
            alt="Fishing boats in the Eastern Harbour below the Citadel of Qaitbay"
            className="aspect-[4/3] w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-black/10"
          />
        </figure>
        <div className="lg:col-span-6">
          <h2 className="text-ink">The timeless pearl</h2>
          <p className="mt-4 max-w-[65ch] text-pretty text-lg text-ink-soft">
            Twenty-three centuries of history, culture and coastal life in Egypt's main Mediterranean city.
          </p>
          <div className="mt-8 grid gap-6 border-t-2 border-gold pt-6">
            <div>
              <h3 className="text-2xl text-ink">A gateway to civilizations</h3>
              <p className="mt-2 max-w-[65ch] text-pretty leading-[1.75] text-ink-soft">
                Founded by Alexander the Great in 331 BCE
                <SourceChip factId="foundingYear" className="ml-1 text-ink-soft" />, Alexandria was a centre of
                learning and sea trade for centuries, mixing Greek, Roman and Egyptian traditions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-ink">A Mediterranean city</h3>
              <p className="mt-2 max-w-[65ch] text-pretty leading-[1.75] text-ink-soft">
                Today it is Egypt's second city and main port, home to the Bibliotheca Alexandrina and a long
                seafront Corniche.
              </p>
            </div>
          </div>
          <Link to="/about" className="alex-btn-primary mt-8">
            Discover history
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function About({ isTeaser = false }: { isTeaser?: boolean }) {
  if (isTeaser) return <AboutTeaser />;

  return (
    <>
      <AboutHero />
      <CityInBrief />
      <Chronicle />
      <ThemeExplorer />
      <AboutClosing />
    </>
  );
}
