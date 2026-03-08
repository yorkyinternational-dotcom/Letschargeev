import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className={`flex flex-col min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark bg-primary text-white' : 'bg-primary-surface text-primary-light'}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow pb-32 lg:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/partner-with-us" element={<PartnerWithUsPage />} />
            <Route path="/our-app" element={<OurApp />} />
            <Route path="/game" element={<Game />} />
            <Route path="/:type" element={<LegalPage />} />
          </Routes>
        </main>
        <WhatsAppFAB />
        <MobileNav />
        <Footer />
      </div>
    </Router>
  )
}

export default App
