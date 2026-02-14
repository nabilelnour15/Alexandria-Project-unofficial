
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../sections/CTA';
import ProjectsHero from '../sections/ProjectsHero';
import ProjectList from '../sections/ProjectList';
import Vision2030Section from '../sections/Vision2030Section';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar isInternal />
      
      <main>
        <ProjectsHero />
        
        <div id="explore-projects">
          <ProjectList />
        </div>
        
        <Vision2030Section />
        
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}
