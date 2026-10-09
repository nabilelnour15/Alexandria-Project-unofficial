import { lazy } from 'react';

const loaders = {
  '/': () => import('../pages/HomePage'),
  '/visit': () => import('../pages/VisitPage'),
  '/live': () => import('../pages/LivePage'),
  '/news': () => import('../pages/NewsPage'),
  '/news/:id': () => import('../pages/NewsPostPage'),
  '/invest': () => import('../pages/InvestPage'),
  '/about': () => import('../pages/AboutPage'),
  '/governor': () => import('../pages/GovernorPage'),
  '/projects': () => import('../pages/ProjectsPage'),
  '/experience': () => import('../pages/ExperiencePage'),
  '*': () => import('../pages/NotFoundPage'),
};

export const HomePage = lazy(loaders['/']);
export const VisitPage = lazy(loaders['/visit']);
export const LivePage = lazy(loaders['/live']);
export const NewsPage = lazy(loaders['/news']);
export const NewsPostPage = lazy(loaders['/news/:id']);
export const InvestPage = lazy(loaders['/invest']);
export const AboutPage = lazy(loaders['/about']);
export const GovernorPage = lazy(loaders['/governor']);
export const ProjectsPage = lazy(loaders['/projects']);
export const ExperiencePage = lazy(loaders['/experience']);
export const NotFoundPage = lazy(loaders['*']);

/** Warm a route's chunk. Errors are swallowed; the real navigation will retry. */
export function prefetch(path: string): void {
  const clean = path.split(/[?#]/)[0] || '/';
  const load = (loaders as Record<string, (() => Promise<unknown>) | undefined>)[clean];
  if (load) load().catch(() => {});
}

/** Idle-time warm-up of likely next pages. Never includes /experience. */
export function prefetchLikelyRoutes(): void {
  const run = () => ['/visit', '/news', '/about'].forEach(prefetch);
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(run, { timeout: 4000 });
  } else {
    window.setTimeout(run, 2000);
  }
}
