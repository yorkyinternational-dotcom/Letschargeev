import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import MobileNav from '../components/layout/MobileNav'
import Home from '../pages/Home'
import About from '../pages/About'
import FAQs from '../pages/FAQs'
import PartnerWithUsPage from '../pages/PartnerWithUsPage'
import LegalPage from '../pages/LegalPage'
import OurApp from '../pages/OurApp'
import Game from '../pages/Game'
import ScrollToTop from '../components/layout/ScrollToTop'
import WhatsAppFAB from '../components/common/WhatsAppFAB'

// Auth Imports
import { AuthProvider } from '../context/AuthContext';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import Login from '../pages/Login';
import PartnerKYC from '../pages/PartnerKYC';
import DashboardAnalytics from '../pages/DashboardAnalytics';
import MapPage from '../pages/MapPage';
import SessionPage from '../pages/SessionPage';

const AppContent = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const hiddenNavRoutes = ['/login', '/dashboard', '/dashboard/analytics', '/partner-kyc', '/session', '/map'];
  const hideLayout = hiddenNavRoutes.some(route => location.pathname === route || location.pathname.startsWith(route + '/'));

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark bg-primary text-white' : 'bg-primary-surface text-primary-light'}`}>
      {!hideLayout && <Navbar theme={theme} toggleTheme={toggleTheme} />}
      <main className={`flex-grow ${hideLayout ? '' : 'pb-32 lg:pb-0'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/partner-with-us" element={<PartnerWithUsPage />} />
          <Route path="/our-app" element={<OurApp />} />
          <Route path="/game" element={<Game />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<MapPage theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/partner-kyc" element={<ProtectedRoute requiredRole="partner"><PartnerKYC theme={theme} toggleTheme={toggleTheme} /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute requiredRole="partner"><DashboardAnalytics theme={theme} toggleTheme={toggleTheme} /></ProtectedRoute>} />
          <Route path="/dashboard/analytics" element={<ProtectedRoute requiredRole="partner"><DashboardAnalytics theme={theme} toggleTheme={toggleTheme} /></ProtectedRoute>} />
          <Route path="/session" element={<SessionPage />} />
          <Route path="/:type" element={<LegalPage />} />
        </Routes>
      </main>
      {!hideLayout && (
        <>
          <WhatsAppFAB />
          <MobileNav />
          <Footer />
        </>
      )}
    </div>
  );
};

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <AppContent theme={theme} toggleTheme={toggleTheme} />
      </Router>
    </AuthProvider>
  );
}

export default App;
