import Hero from '../sections/Hero';
import ProjectsHero from '../sections/ProjectsHero';
import About from '../sections/About';
import Visit from '../sections/Visit';
import GovernorSection from '../sections/GovernorSection';
import Invest from '../sections/Invest';
import Services from '../sections/Services';
import NewsTeaser from '../sections/NewsTeaser';
import CTA from '../sections/CTA';
import PageMeta from '../components/PageMeta';

export default function HomePage() {
    return (
        <div className="bg-white">
            <PageMeta path="/" />
            {/* Sequence follows the hero index. Backgrounds: dark photo, white, wash, white, ink, wash, white, white (ruled), papyrus. */}
            <Hero />
            <About isTeaser />
            <Visit isTeaser />
            <Services isTeaser />
            <Invest />
            <ProjectsHero />
            <GovernorSection />
            <NewsTeaser />
            <CTA />
        </div>
    );
}
