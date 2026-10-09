import About from '../sections/About';
import PageMeta from '../components/PageMeta';

export default function AboutPage() {
    return (
      <div className="bg-white">
        <PageMeta path="/about" />
        <About />
      </div>
    );
}
