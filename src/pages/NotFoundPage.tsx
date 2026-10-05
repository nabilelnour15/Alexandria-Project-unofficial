import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

const links = [
    { name: 'Visit', href: '/visit' },
    { name: 'Projects', href: '/projects' },
];

export default function NotFoundPage() {
    return (
        <div className="min-h-[70vh] bg-limestone-wash flex flex-col items-center justify-center pt-28 pb-20 px-4 text-center">
            <PageMeta
                title="Page not found"
                description="The page you are looking for doesn't exist or may have moved."
            />
            <p className="text-sm font-bold text-sea mb-3">404</p>
            <h1 className="text-ink mb-4">Page not found</h1>
            <p className="text-ink-soft max-w-md mb-8">
                The page you are looking for doesn't exist or may have moved.
            </p>
            <Link to="/" className="text-sea underline-offset-4 hover:underline font-semibold mb-6">
                Back to the home page
            </Link>
            <nav aria-label="Suggested pages" className="flex flex-wrap justify-center gap-3">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        to={link.href}
                        className="px-4 py-2 bg-sea-mist text-sea rounded-lg text-sm font-medium hover:bg-sea hover:text-white transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
