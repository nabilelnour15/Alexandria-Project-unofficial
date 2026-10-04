import PageMeta from '../components/PageMeta';
import GovernorHero from '../sections/governor/GovernorHero';
import Background from '../sections/governor/Background';
import TenureRecord from '../sections/governor/TenureRecord';
import Sources from '../sections/governor/Sources';
import GovernorClosing from '../sections/governor/GovernorClosing';

export default function GovernorPage() {
  return (
    <div className="bg-white">
      <PageMeta
        title="Governor of Alexandria"
        description="Who leads Alexandria Governorate: the governor's background, priorities and record, compiled by an unofficial fan project from public sources."
      />
      <GovernorHero />
      <Background />
      <TenureRecord />
      <Sources />
      <GovernorClosing />
    </div>
  );
}
