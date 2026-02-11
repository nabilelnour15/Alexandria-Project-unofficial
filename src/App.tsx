import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Statistics from './sections/Statistics';
import Features from './sections/Features';
import Visit from './sections/Visit';
import Invest from './sections/Invest';
import Explore from './sections/Explore';
import News from './sections/News';
import CTA from './sections/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Statistics Section */}
        <Statistics />

        {/* Features/About Section */}
        <Features />

        {/* Visit/Tourism Section */}
        <Visit />

        {/* Invest Section */}
        <Invest />

        {/* Explore/History Section */}
        <Explore />

        {/* News Section */}
        <News />

        {/* Call to Action Section */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
