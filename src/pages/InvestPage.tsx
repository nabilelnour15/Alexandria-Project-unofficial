import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Invest from '../sections/Invest';
import CTA from '../sections/CTA';

export default function InvestPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar isInternal />
            <main className="pt-20">
                <Invest />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
