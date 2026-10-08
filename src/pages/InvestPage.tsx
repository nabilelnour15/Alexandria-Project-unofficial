import PageMeta from "../components/PageMeta";
import FactsNote from "../components/FactsNote";
import CTA from "../sections/CTA";
import InvestSections from "../sections/InvestSections";
import InvestHero from "../sections/invest/InvestHero";
import WhyAlexandria from "../sections/invest/WhyAlexandria";
import SuccessStories from "../sections/invest/SuccessStories";
import WhereToAct from "../sections/invest/WhereToAct";

export default function InvestPage() {
  return (
    <>
      <PageMeta path="/invest" />
      <InvestHero />
      <WhyAlexandria />

      <section
        id="investment-zones"
        aria-labelledby="zones-title"
        className="scroll-mt-28 bg-papyrus py-24 md:py-32"
      >
        <div className="alex-container">
          <h2 id="zones-title" className="text-ink">
            Zones, laws and incentives
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-lg text-ink-soft">
            Free zones, ports, key sectors and the laws that apply.
          </p>
          <div className="mt-12">
            <InvestSections />
          </div>
        </div>
      </section>

      {/* Strategic Opportunities (hidden; if restored, import ConceptBadge for the concept images in investData) */}
      {/* <section className="py-20 md:py-32 bg-ink">
        <div className="alex-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-white mb-6">
                Current Strategic <br /> Opportunities
              </h2>
              <p className="text-white/60 text-lg">
                High-value projects currently open for international and
                domestic partnership.
              </p>
            </div>
            <div className="flex gap-4">
              <PlaceholderImage
                text="Project Map Overview"
                className="w-48 aspect-video"
                src="/images/containers.jpeg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {investData.opportunities.map((opp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-ink-raised rounded-xl overflow-hidden border border-white/10 group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-64">
                  <PlaceholderImage
                    text={`${opp.title} Site Image`}
                    src={opp.image}
                    alt={`${opp.title}: concept illustration`}
                    className="h-full rounded-none border-none"
                  />
                  {opp.image && <ConceptBadge className="absolute bottom-3 left-3" />}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-seaglass text-xs font-bold border border-white/10">
                      {opp.approach}
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-white mb-4 group-hover:text-seaglass transition-colors">
                    {opp.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-8 text-white/40">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{opp.location}</span>
                    </div>
                    {opp.area && (
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span className="text-sm">{opp.area}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 bg-white/5 rounded-lg border border-white/5 mb-8">
                    <p className="text-white/70 leading-relaxed text-sm">
                      {opp.purpose}
                    </p>
                  </div>
                  <button className="flex items-center gap-2 text-seaglass font-bold group/btn">
                    View Project Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <SuccessStories />
      <WhereToAct />
      <FactsNote tone="dark" />
      <CTA />
    </>
  );
}
