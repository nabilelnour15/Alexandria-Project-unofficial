import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import ServicesPage from './pages/ServicesPage';
import VisitPage from './pages/VisitPage';
import InvestPage from './pages/InvestPage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import NewsArticlePage from './pages/NewsArticlePage';
import GovernorPage from './pages/GovernorPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/services" element={<ServicesPage />} /> */}
        <Route path="/visit" element={<VisitPage />} />
        <Route path="/invest" element={<InvestPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsArticlePage />} />
        <Route path="/governor" element={<GovernorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
