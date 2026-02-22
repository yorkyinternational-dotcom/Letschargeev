import { useState, useEffect } from 'react';
import { Menu, X, Home, Zap, Calculator, Smartphone, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSpecialPage = location.pathname === '/our-app' || location.pathname === '/partner-with-us';

  const allLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Hardware', path: '/#products' },
    { name: 'Solutions', path: '/#solutions' },
    { name: 'Savings', path: '/#calculator' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Our App', path: '/our-app' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo className={scrolled ? "h-8 md:h-10" : "h-10 md:h-12"} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {allLinks.filter(l => l.name !== 'Home').map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[11px] font-black uppercase tracking-[0.4em] transition-colors ${isSpecialPage ? 'text-accent' : 'text-primary hover:text-accent'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/partner-with-us"
            className={`${isSpecialPage && location.pathname === '/partner-with-us' ? 'bg-accent text-white' : 'btn-primary'} !px-8 !py-3 !text-[10px] !tracking-[0.4em] rounded-[1rem] font-black transition-all`}
          >
            PARTNER
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-primary"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden bg-white px-6 pt-32"
          >
            <div className="flex flex-col gap-8">
              {allLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl font-black uppercase tracking-tighter ${isSpecialPage ? 'text-accent' : 'text-primary hover:text-accent'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/partner-with-us"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full py-6 text-sm"
              >
                PARTNER WITH US
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;