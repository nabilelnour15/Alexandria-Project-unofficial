import CTA from '../sections/CTA';
import ProjectsHero from '../sections/ProjectsHero';
import ProjectList from '../sections/ProjectList';
import Vision2030Section from '../sections/Vision2030Section';
import PageMeta from '../components/PageMeta';
import FactsNote from '../components/FactsNote';

export default function ProjectsPage() {
  return (
    <div className="bg-white selection:bg-sea-mist selection:text-sea">
      <PageMeta
        title="City projects"
        description="Major infrastructure and development projects in Alexandria, with status, budgets, timelines and how they align with Egypt Vision 2030."
      />
      <ProjectsHero headingLevel={1} />

      <div id="explore-projects">
        <ProjectList />
      </div>

      <Vision2030Section />

      <FactsNote />

      <CTA />
    </div>
  );
}
