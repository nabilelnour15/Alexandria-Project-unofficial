import VisitHero from './visit/VisitHero';
import WhenToGo from './visit/WhenToGo';
import GettingAround from './visit/GettingAround';
import WhatToSee from './visit/WhatToSee';
import ThingsToDo from './visit/ThingsToDo';
import EatAndStay from './visit/EatAndStay';
import VisitHelp from './visit/VisitHelp';
import VisitTeaser from './visit/VisitTeaser';

export default function Visit({ isTeaser = false }: { isTeaser?: boolean }) {
  if (isTeaser) return <VisitTeaser />;
  return (
    <>
      <VisitHero />
      <WhenToGo />
      <GettingAround />
      <WhatToSee />
      <ThingsToDo />
      <EatAndStay />
      <VisitHelp />
    </>
  );
}
