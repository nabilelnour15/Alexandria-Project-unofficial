import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Visit', href: '/visit' },
  { name: 'Living in Alexandria', href: '/live' },
  { name: 'City briefing', href: '/news' },
  { name: 'City projects', href: '/projects' },
];

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-limestone-wash px-4 pb-20 pt-28 text-center">
      <PageMeta
        robots="noindex"
        title="Page not found"
        description="The page you are looking for doesn't exist or may have moved."
      />
      <h1 className="mb-4 text-ink">Page not found</h1>
      <p className="mb-8 max-w-md text-pretty text-ink-soft">
        The page you are looking for doesn&rsquo;t exist or may have moved. Try one of these, or press Ctrl+K to
        search the site.
      </p>
      <nav aria-label="Suggested pages">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="inline-flex min-h-10 items-center rounded-sm border-b-2 border-gold font-semibold text-sea transition-colors hover:text-ink"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
