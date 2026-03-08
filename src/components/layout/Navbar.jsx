import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sun, Moon, Cpu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Determine if we are on a page with a strictly dark hero that requires a dark navbar before scrolling.
  const isDarkHeroPage = location.pathname === '/partner-with-us' || location.pathname === '/game';
  const effectiveTheme = (isDarkHeroPage && !scrolled) ? 'dark' : theme;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const allLinks = [
    { name: 'Products', path: '/#hardware' },
    { name: 'Solutions', path: '/#solutions' },
    { name: 'Software', path: '/our-app' },
    { name: 'Locations', path: '/#locate' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full transition-all duration-500 ${isOpen ? 'z-[110]' : 'z-50'} ${scrolled ? 'py-4' : 'py-5'}`}>
      {/* Dynamic Background */}
      <div className={`absolute inset-0 transition-all duration-700 ${scrolled && !isOpen
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 shadow-2xl'
        : 'bg-transparent'
        }`}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center relative z-[120]">
        <Link to="/" className="flex items-center group shrink-0" aria-label="LCEv Home">
          <Logo className="h-10 md:h-12 lg:h-16" withText={false} theme={isOpen ? 'dark' : effectiveTheme} />
        </Link>

        {/* Desktop Navigation - Hidden on Mobile */}
        <div className="hidden lg:flex items-center gap-0">
          {allLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-4 py-1 group overflow-hidden`}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-[7px] font-mono text-accent-green opacity-40 group-hover:opacity-100 transition-opacity">
                  {link.id}
                </span>
                <span className={`text-[9px] font-black uppercase tracking-[0.3em] transition-all duration-300 ${effectiveTheme === 'dark' ? 'text-white/60 group-hover:text-white' : 'text-slate-900/60 group-hover:text-slate-900'
                  }`}>
                  {link.name}
                </span>
              </div>
              <motion.div
                className="absolute bottom-0 left-4 right-4 h-[1px] bg-accent-green origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </Link>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Logic Controller */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${effectiveTheme === 'dark' ? 'light' : 'dark'} mode`}
            className={`group relative p-2.5 rounded-full border transition-all duration-500 overflow-hidden ${effectiveTheme === 'dark'
              ? 'bg-white/5 border-white/10 text-accent-yellow shadow-[0_0_20px_rgba(255,200,0,0.1)]'
              : 'bg-slate-50 border-slate-200 text-slate-900 shadow-sm'
              }`}
          >
            <div className="relative z-10 flex items-center justify-center">
              {effectiveTheme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </div>
            <div className="absolute inset-0 bg-accent-green/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>

          <Link
            to="/partner-with-us"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-accent-green text-black text-[9px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all duration-500 shadow-lg shadow-accent-green/20"
          >
            <Cpu size={12} />
            PARTNER WITH US
          </Link>

          {/* Mobile System Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className={`lg:hidden p-3 rounded-full border transition-all ${isOpen || effectiveTheme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* System Overlay Menu (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] lg:hidden bg-black flex flex-col justify-center px-10 h-screen w-screen overflow-hidden"
          >
            {/* Engineering Grid Background */}
            <div className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: 'radial-gradient(#00E696 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>



            <div className="flex flex-col gap-8 relative z-10">
              {allLinks.map((link, i) => (
                <motion.div
                  key={link.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-baseline gap-6"
                  >
                    <span className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white group-hover:text-accent-green transition-all">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-16 pt-16 border-t border-white/10"
              >
                <Link
                  to="/partner-with-us"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3 text-white group-hover:text-accent-green transition-all">
                    <span className="text-xl font-bold uppercase tracking-widest">PARTNER WITH US</span>
                    <ChevronRight size={24} />
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;