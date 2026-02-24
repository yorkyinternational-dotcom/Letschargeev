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
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className={`w-full h-full absolute inset-0 -z-10 rounded-[2rem] border border-white/20 transition-all duration-500 ${scrolled ? 'bg-primary/80 backdrop-blur-2xl shadow-2xl' : 'bg-white/10 backdrop-blur-xl'}`}></div>

      <div className="px-6 sm:px-10 flex justify-between items-center relative">
        {/* Mobile App Style - Logo Center, Left Sidebar Placeholder */}
        <div className="lg:hidden w-10">
          <div className="w-10 h-10 rounded-full bg-primary-light/10 border border-white/10 flex items-center justify-center">
            <Zap size={16} className="text-eco" />
          </div>
        </div>

        {/* Logo - Center on Mobile, Left on Desktop */}
        <Link to="/" className="flex items-center shrink-0 lg:absolute lg:left-10 lg:translate-x-0 left-1/2 -translate-x-1/2 absolute lg:static">
          <Logo className={scrolled ? "h-6 md:h-8" : "h-8 md:h-10"} withText={false} />
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
          {allLinks.filter(l => l.name !== 'Home').map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-eco hover:scale-110 active:scale-95 ${scrolled ? 'text-white' : 'text-primary'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions - Right Aligned */}
        <div className="flex items-center gap-6">
          <Link
            to="/partner-with-us"
            className={`hidden lg:block btn-primary !px-8 !py-3 !rounded-2xl !tracking-[0.2em] !text-[10px]`}
          >
            JOIN US
          </Link>

          {/* Mobile Notification Placeholder */}
          <div className="lg:hidden w-10 h-10 rounded-full bg-primary-light/10 border border-white/10 flex items-center justify-center">
            <Zap size={16} className="text-accent" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 lg:hidden bg-primary px-6 pt-32 h-screen w-screen"
          >
            {/* Mobile mesh background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute top-1/4 -right-1/4 w-80 h-80 bg-eco/20 rounded-full blur-[80px]"></div>
              <div className="absolute bottom-1/4 -left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[80px]"></div>
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              {allLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-black uppercase tracking-tighter text-white hover:text-eco transition-all flex items-center justify-between group"
                >
                  {link.name}
                  <ChevronRight className="w-8 h-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-eco" />
                </Link>
              ))}
              <div className="mt-10">
                <Link
                  to="/partner-with-us"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full py-8 text-sm"
                >
                  PARTNER WITH US
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;