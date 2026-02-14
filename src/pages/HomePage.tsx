import Hero from '../sections/Hero';
import ProjectsHero from '../sections/ProjectsHero';
import About from '../sections/About';
import Visit from '../sections/Visit';
import GovernorSection from '../sections/GovernorSection';
import Invest from '../sections/Invest';
import News from '../sections/News';
import CTA from '../sections/CTA';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <About isTeaser />
                <Visit isTeaser />
                <GovernorSection />
                <Invest isTeaser />
                <News isTeaser />
                <ProjectsHero />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
