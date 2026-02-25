import { useState, useEffect } from 'react';
import { Menu, X, Home, Zap, Calculator, Smartphone, ChevronRight, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = ({ theme, toggleTheme }) => {
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
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className={`w-full h-full absolute inset-0 -z-10 rounded-2xl border transition-all duration-500 ${scrolled
        ? 'bg-primary/95 backdrop-blur-md shadow-xl border-accent-green/20'
        : 'bg-white/5 dark:bg-white/5 backdrop-blur-md border-white/10'
        }`}></div>

      <div className="px-6 sm:px-10 flex justify-between items-center relative">
        {/* Logo Section */}
        <Link to="/" className="flex items-center shrink-0">
          <Logo className={scrolled ? "h-8 md:h-10" : "h-10 md:h-14"} withText={true} theme={theme} />
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-12">
          {allLinks.filter(l => l.name !== 'Home').map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-accent-green ${theme === 'dark' ? 'text-white/70' : 'text-slate-800/70'
                }`}
            >
              / {link.name}
            </Link>
          ))}
        </div>

        {/* Actions - Right Aligned */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl border transition-all hover:scale-110 active:scale-90 ${theme === 'dark'
              ? 'bg-white/5 border-white/10 text-accent-yellow shadow-[0_0_15px_rgba(255,200,0,0.1)]'
              : 'bg-slate-50 border-slate-200 text-slate-800'
              }`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            to="/partner-with-us"
            className={`hidden lg:flex items-center gap-2 btn-professional-primary !px-7 !py-3 !text-[11px] font-black !rounded-xl uppercase tracking-widest`}
          >
            GET STARTED
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl border transition-all ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden bg-primary px-6 pt-32 h-screen w-screen overflow-hidden"
          >
            {/* Mobile mesh background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute top-1/4 -right-1/4 w-80 h-80 bg-accent-green/10 rounded-full blur-[80px]"></div>
              <div className="absolute bottom-1/4 -left-1/4 w-80 h-80 bg-accent-yellow/5 rounded-full blur-[80px]"></div>
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="flex flex-col gap-6 relative z-10 max-w-lg mx-auto">
              {allLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-black uppercase tracking-tighter text-white hover:text-accent-green transition-all flex items-center justify-between group"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-white/20 text-sm font-mono group-hover:text-accent-green">/</span>
                    {link.name}
                  </span>
                  <ChevronRight className="w-8 h-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-accent-green" />
                </Link>
              ))}
              <div className="mt-12">
                <Link
                  to="/partner-with-us"
                  onClick={() => setIsOpen(false)}
                  className="btn-professional-primary w-full py-8 text-sm font-black tracking-widest uppercase"
                >
                  PARTNER_WITH_US
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