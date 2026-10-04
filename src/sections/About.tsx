import { Sun, Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import AboutHero from "./about/AboutHero";
import CityInBrief from "./about/CityInBrief";
import Chronicle from "./about/Chronicle";
import ThemeExplorer from "./about/ThemeExplorer";
import AboutClosing from "./about/AboutClosing";

function AboutTeaser() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="alex-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-ink mb-4">
              The timeless pearl
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed">
              Twenty-three centuries of history, culture and coastal life in
              Egypt's main Mediterranean city.
            </p>
          </div>
          <Link
            to="/about"
            className="alex-btn-primary group inline-flex items-center"
          >
            Discover history
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-xl overflow-hidden aspect-video shadow-lg">
            <img
              loading="lazy"
              decoding="async"
              src="/images/alexandria-castle-egypt.jpg"
              alt="Fishing boats in the Eastern Harbour below the Citadel of Qaitbay"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          </div>
          <div className="space-y-6">
            <div className="bg-limestone-wash p-8 rounded-xl border border-limestone/70">
              <h3 className="text-ink mb-4 flex items-center gap-3">
                <Anchor className="w-6 h-6 text-sea" /> A gateway to
                civilizations
              </h3>
              <p className="text-ink-soft leading-relaxed">
                Founded by Alexander the Great in 331 BCE, Alexandria was a
                centre of learning and sea trade for centuries, mixing Greek,
                Roman and Egyptian traditions.
              </p>
            </div>
            <div className="bg-sea p-8 rounded-xl text-white shadow-md shadow-sea/20">
              <h3 className="mb-4 flex items-center gap-3 text-white">
                <Sun className="w-6 h-6 text-gold" /> A Mediterranean
                city
              </h3>
              <p className="text-white/80 leading-relaxed">
                Today it is Egypt's second city and main port, home to the
                Bibliotheca Alexandrina and a long seafront Corniche.
              </p>
            </div>
          </div>
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
