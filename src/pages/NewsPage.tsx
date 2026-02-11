import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import News from '../sections/News';
import CTA from '../sections/CTA';

export default function NewsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar isInternal />
            <main className="pt-20">
                <News />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
