import PageMeta from '../components/PageMeta';
import GovernorHero from '../sections/governor/GovernorHero';
import Background from '../sections/governor/Background';
import TenureRecord from '../sections/governor/TenureRecord';
import Sources from '../sections/governor/Sources';
import GovernorClosing from '../sections/governor/GovernorClosing';
import NewsTeaser from '../sections/NewsTeaser';

export default function GovernorPage() {
  return (
    <div className="bg-white">
      <PageMeta path="/governor" />
      <GovernorHero />
      <Background />
      <TenureRecord />
      <NewsTeaser
        topic="Governorate"
        title="In the news"
        intro="Short stories about the governor and the governorate, written from public reporting with a link to each source."
      />
      <Sources />
      <GovernorClosing />
    </div>
  );
}
