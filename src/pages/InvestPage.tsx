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

      <SuccessStories />
      <WhereToAct />
      <FactsNote tone="dark" />
      <CTA showVisitLink={false} />
    </>
  );
}
