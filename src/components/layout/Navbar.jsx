import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sun, Moon, Cpu, User } from 'lucide-react';
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
        ? 'bg-white/80 dark:bg-white/5 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 shadow-2xl'
        : 'bg-transparent'
        }`}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center relative z-[120]">
        <Link to="/" className="flex items-center group shrink-0" aria-label="LCEV Home">
          <Logo className="h-10 md:h-12 lg:h-14" withText={true} theme={isOpen ? 'dark' : effectiveTheme} />
        </Link>

        {/* Desktop Navigation - Hidden on Mobile */}
        <div className="hidden xl:flex items-center gap-0">
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

          {/* Login / Auth Trigger */}
          <Link
            to="/login"
            aria-label="Access Account"
            className={`hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-500 text-[9px] font-black uppercase tracking-[0.2em] shadow-sm ${effectiveTheme === 'dark'
              ? 'bg-white/5 border-white/10 text-white hover:bg-white hover:text-black'
              : 'bg-black text-white border-transparent hover:bg-slate-800'
              }`}
          >
            <User size={12} />
            LOGIN
          </Link>

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
            className={`xl:hidden p-3 rounded-full border transition-all ${isOpen || effectiveTheme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* System Overlay Menu (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[100] xl:hidden bg-black/80 backdrop-blur-md"
            />
            
            {/* Premium Aesthetic Side Drawer */}
            <motion.div
              initial={{ x: '100%', borderTopLeftRadius: '100px', borderBottomLeftRadius: '100px' }}
              animate={{ x: 0, borderTopLeftRadius: '40px', borderBottomLeftRadius: '40px' }}
              exit={{ x: '100%', borderTopLeftRadius: '100px', borderBottomLeftRadius: '100px' }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="fixed top-0 right-0 z-[101] xl:hidden bg-[#0a0f0d]/90 backdrop-blur-3xl w-[85vw] sm:w-[350px] md:w-1/3 h-[100dvh] flex flex-col pt-32 pb-12 px-8 overflow-y-auto shadow-[-30px_0_80px_rgba(0,230,150,0.05)] border-l border-white/10"
            >
              {/* Engineering Grid Background */}
              <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(#00E696 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
              </div>

              {/* Dynamic Glow Injector */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-green/5 blur-[100px] rounded-full pointer-events-none" />

              <div className="flex flex-col gap-8 relative z-10">
                {allLinks.map((link, i) => (
                  <motion.div
                    key={link.id}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 + 0.1, type: "spring", stiffness: 200 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="group flex flex-col"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-[2px] bg-accent-green/0 group-hover:bg-accent-green transition-all duration-500 -translate-x-4 group-hover:translate-x-0" />
                        <span className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-white/50 group-hover:text-white transition-all duration-500">
                          {link.name}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-8 border-t border-white/10"
                >
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between group py-5 border-b border-white/5 hover:border-accent-green/30 transition-all"
                  >
                    <span className="text-lg font-bold uppercase tracking-widest text-white/70 group-hover:text-accent-green transition-all">Account Access</span>
                    <ChevronRight size={20} className="text-white/20 group-hover:text-accent-green group-hover:translate-x-1 transition-all" />
                  </Link>

                  <Link
                    to="/partner-with-us"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between group py-5 border-b border-transparent hover:border-accent-green/30 transition-all"
                  >
                    <span className="text-lg font-bold uppercase tracking-widest text-white/70 group-hover:text-accent-green transition-all">Partner Portal</span>
                    <ChevronRight size={20} className="text-white/20 group-hover:text-accent-green group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;