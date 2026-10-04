import About from '../sections/About';
import PageMeta from '../components/PageMeta';

export default function AboutPage() {
    return (
      <div className="bg-white">
        <PageMeta
          title="About Alexandria"
          description="The history, landmarks, museums, culture and food of Alexandria, from its founding by Alexander the Great to the modern Mediterranean city."
        />
        <About />
      </div>
    );
}
