import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../sections/About';
import CTA from '../sections/CTA';

export default function AboutPage() {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <About />
          <CTA />
        </main>
        <Footer />
      </div>
    );
}
