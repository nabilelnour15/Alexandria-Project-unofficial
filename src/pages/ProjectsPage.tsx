import CTA from '../sections/CTA';
import ProjectsHero from '../sections/ProjectsHero';
import ProjectList from '../sections/ProjectList';
import Vision2030Section from '../sections/Vision2030Section';
import PageMeta from '../components/PageMeta';
import FactsNote from '../components/FactsNote';

export default function ProjectsPage() {
  return (
    <div className="bg-white selection:bg-sea-mist selection:text-sea">
      <PageMeta path="/projects" />
      <ProjectsHero headingLevel={1} />
      <ProjectList />
      <Vision2030Section />
      <FactsNote />
      <CTA />
    </div>
  );
}
