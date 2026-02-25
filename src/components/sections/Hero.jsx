import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-primary-surface dark:bg-primary transition-colors duration-300">
      {/* Minimalist Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-accent-green/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-accent-yellow/5 blur-[100px] rounded-full"></div>
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-caps !text-accent-green">Charging the Future, Today</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-light dark:text-white mb-8 leading-[1.1] tracking-tight">
              Smart EV <br />
              Charging <br />
              <span className="text-accent-green">Ecosystem.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-lg leading-relaxed font-medium">
              Join India's most reliable and intelligent charging network.
              Seamless integration for residential, commercial, and fleet management.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-center">
              <a href="#quote" className="btn-professional-primary w-full sm:w-auto">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="#products" className="btn-professional border-slate-200 dark:border-white/10 border text-slate-800 dark:text-white w-full sm:w-auto hover:bg-slate-50 dark:hover:bg-white/5">
                View Hardware
              </a>
            </div>

            {/* Social Proof / Stats Minor */}
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 flex items-center gap-10">
              <div>
                <p className="text-2xl font-black text-primary-light dark:text-white leading-none mb-1">500+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Live points</p>
              </div>
              <div className="w-px h-8 bg-slate-200 dark:border-white/10"></div>
              <div>
                <p className="text-2xl font-black text-primary-light dark:text-white leading-none mb-1">99.9%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Uptime</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Hardware Showcase Placeholder (Statiq/Exicom style) */}
            <div className="relative aspect-square w-full max-w-xl mx-auto rounded-3xl overflow-hidden bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-green/10 via-transparent to-accent-yellow/10"></div>

              {/* Visual Placeholder for 3D Render */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 w-48 h-80 bg-slate-800 rounded-2xl border-4 border-slate-700 shadow-[0_0_50px_rgba(0,230,150,0.2)] flex flex-col items-center justify-between p-6 overflow-hidden"
                  >
                    <div className="w-full h-1 bg-accent-green animate-pulse rounded-full"></div>
                    <div className="w-20 h-20 rounded-full border-4 border-accent-green flex items-center justify-center">
                      <div className="w-12 h-12 bg-accent-green/20 rounded-full animate-ping"></div>
                      <Zap className="w-8 h-8 text-accent-green absolute" />
                    </div>
                    <div className="w-full space-y-2">
                      <div className="w-full h-2 bg-slate-700 rounded"></div>
                      <div className="w-2/3 h-2 bg-slate-700 rounded"></div>
                    </div>
                  </motion.div>

                  {/* Orbiting Elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-dashed border-slate-200 dark:border-white/10 m-10"
                  ></motion.div>
                  <div className="absolute top-0 right-1/4 w-12 h-12 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-white/10 shadow-lg flex items-center justify-center">
                    <Smartphone size={20} className="text-accent-green" />
                  </div>
                </div>
              </div>

              {/* Technical Specs Overlay */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="bg-primary/90 dark:bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <p className="text-[10px] font-bold text-accent-green uppercase mb-1">Model: LCEV-X1</p>
                  <p className="text-white font-black text-sm uppercase">22KW FAST CHARGER</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-green"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-accent-yellow rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent-green rounded-full blur-3xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default Hero;