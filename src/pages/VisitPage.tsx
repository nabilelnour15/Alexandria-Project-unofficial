import Visit from '../sections/Visit';
import CTA from '../sections/CTA';
import PageMeta from '../components/PageMeta';

export default function VisitPage() {
    return (
        <div className="bg-white pt-20">
            <PageMeta path="/visit" />
            <Visit />
            <CTA />
        </div>
    );
}
