import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import {
  HomePage,
  VisitPage,
  InvestPage,
  AboutPage,
  GovernorPage,
  ProjectsPage,
  LivePage,
  NewsPage,
  NewsPostPage,
  ExperiencePage,
  NotFoundPage,
} from './lib/routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/visit" element={<VisitPage />} />
          <Route path="/live" element={<LivePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsPostPage />} />
          <Route path="/invest" element={<InvestPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/governor" element={<GovernorPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
