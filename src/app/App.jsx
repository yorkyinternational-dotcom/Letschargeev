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
import ScrollToTop from '../components/layout/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pb-24 lg:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/partner-with-us" element={<PartnerWithUsPage />} />
            <Route path="/our-app" element={<OurApp />} />
            <Route path="/:type" element={<LegalPage />} />
          </Routes>
        </main>
        <MobileNav />
        <Footer />
      </div>
    </Router>
  )
}

export default App
