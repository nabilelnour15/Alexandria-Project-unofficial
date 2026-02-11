import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../sections/Services';
import CTA from '../sections/CTA';

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar isInternal />
            <main className="pt-20">
                <Services />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
