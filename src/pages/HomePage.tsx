import Hero from '../sections/Hero';
import ProjectsHero from '../sections/ProjectsHero';
import About from '../sections/About';
import Visit from '../sections/Visit';
import GovernorSection from '../sections/GovernorSection';
import Invest from '../sections/Invest';
import Services from '../sections/Services';
import CTA from '../sections/CTA';
import PageMeta from '../components/PageMeta';

export default function HomePage() {
    return (
        <div className="bg-white">
            <PageMeta description="An unofficial fan guide to Alexandria, Egypt: 2,300 years of history, places to visit, city projects and investment opportunities on the Mediterranean." />
            <Hero />
            <About isTeaser />
            <Visit isTeaser />
            <Services isTeaser />
            <GovernorSection />
            <Invest />
            <ProjectsHero />
            <CTA />
        </div>
    );
}
