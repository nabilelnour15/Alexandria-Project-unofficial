import PageMeta from '../components/PageMeta';
import BeamHero from '../experience/BeamHero';
import LayeredCity from '../experience/LayeredCity';
import CornicheWalk from '../experience/CornicheWalk';
import FutureLines from '../experience/FutureLines';
import ScriptsWall from '../experience/ScriptsWall';
import TramProgress from '../experience/TramProgress';
import '../experience/experience.css';

/**
 * "The Pharos remembered": the motion and scroll experience from
 * docs/motion-plan.md, built as its own page so the existing pages stay as they are.
 */
export default function ExperiencePage() {
  return (
    <div className="xp bg-white">
      <PageMeta path="/experience" />
      <TramProgress />
      <BeamHero />
      <LayeredCity />
      <CornicheWalk />
      <FutureLines />
      <ScriptsWall />
    </div>
  );
}
