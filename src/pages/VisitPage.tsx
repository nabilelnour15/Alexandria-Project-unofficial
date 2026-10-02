import Visit from '../sections/Visit';
import CTA from '../sections/CTA';
import PageMeta from '../components/PageMeta';

export default function VisitPage() {
    return (
        <div className="bg-white pt-20">
            <PageMeta
                title="Visit Alexandria"
                description="Plan a trip to Alexandria: weather by month, getting there and around, attractions, museums and things to do in Egypt's Mediterranean city."
            />
            <Visit />
            <CTA />
        </div>
    );
}
