import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Visit from '../sections/Visit';
import CTA from '../sections/CTA';

export default function VisitPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar isInternal />
            <main className="pt-20">
                <Visit />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
