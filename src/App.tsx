import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
// import ServicesPage from './pages/ServicesPage';
import VisitPage from './pages/VisitPage';
import InvestPage from './pages/InvestPage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import NewsArticlePage from './pages/NewsArticlePage';
import GovernorPage from './pages/GovernorPage';
import ProjectsPage from './pages/ProjectsPage';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';
import DisclaimerPopup from './components/DisclaimerPopup';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading && <Loading key="loading" />}
      </AnimatePresence>

      {!loading && (
        <>
          <DisclaimerPopup />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/services" element={<ServicesPage />} /> */}
            <Route path="/visit" element={<VisitPage />} />
            <Route path="/invest" element={<InvestPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsArticlePage />} />
            <Route path="/governor" element={<GovernorPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;

