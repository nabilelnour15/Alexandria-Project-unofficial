import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Features from '../sections/Features';
import Explore from '../sections/Explore';
import Statistics from '../sections/Statistics';
import CTA from '../sections/CTA';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar isInternal />
            <main className="pt-20">
                <Features />
                <Statistics />
                <Explore />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
