import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/videos/hero_video1.mp4';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-20 pb-12 overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      {/* Dynamic Background Video Container */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 dark:opacity-40 grayscale contrast-[1.2]"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent"></div>

        {/* Precision Grid Overlay */}
        <div className="absolute inset-0 w-full h-full opacity-[0.05] dark:opacity-[0.1]"
          style={{
            backgroundImage: `linear-gradient(#2D2D2D 1px, transparent 1px), linear-gradient(90deg, #2D2D2D 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full mt-10 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/10 border border-accent-green/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-green">Infrastructure of Modern Mobility</span>
            </div>

            <h1 className="text-4xl md:text-8xl lg:text-9xl font-black text-primary-light dark:text-white mb-8 leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
              ARCHITECTING <br className="hidden md:block" />
              <span className="text-accent-green">ZERO EMISSION.</span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 mb-10 md:mb-16 max-w-2xl font-medium leading-tight uppercase tracking-tight">
              Industrial-grade EV charging solutions for corporate headquarters and mission-critical commercial hubs.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 items-center">
              <a href="#partner-with-us" className="btn-professional-primary w-full sm:w-auto !py-4 md:!py-6 !px-8 md:!px-12 !text-[10px] md:!text-[12px] shadow-2xl shadow-accent-green/40">
                PRO VISION SOLUTIONS
                <ArrowRight size={18} className="ml-3" />
              </a>

              <a href="#hardware" className="btn-professional w-full sm:w-auto !py-4 md:!py-6 !px-8 md:!px-12 !text-[10px] md:!text-[12px] border-slate-300 dark:border-white/10">
                ENGINEERING SPECS
              </a>
            </div>

            {/* Technical Labels */}
            <div className="mt-24 flex flex-wrap gap-16 border-t border-slate-200 dark:border-white/10 pt-12">
              <div className="group/metric">
                <span className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-4 group-hover/metric:text-accent-green transition-colors">System Standard</span>
                <span className="text-2xl font-black dark:text-white tracking-tighter uppercase">OCPP 2.0.1+</span>
              </div>
              <div className="group/metric">
                <span className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-4 group-hover/metric:text-accent-green transition-colors">Protection</span>
                <span className="text-2xl font-black dark:text-white tracking-tighter uppercase">IP65 / IK10</span>
              </div>
              <div className="group/metric">
                <span className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-4 group-hover/metric:text-accent-green transition-colors">Max Output</span>
                <span className="text-2xl font-black dark:text-white tracking-tighter uppercase">180kW DC</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group">
              {/* Product Video / Visual - "The Hero Center" */}
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[3rem] overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.6)] dark:shadow-[0_60px_120px_-30px_rgba(34,197,94,0.15)] border border-white/10 bg-[#0A0A0A]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[2000ms] opacity-80"
                >
                  <source src={heroVideo} type="video/mp4" />
                </video>

                {/* Technical Overlay Graphics */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>

                <div className="absolute bottom-12 left-12 right-12">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-black text-accent-green uppercase tracking-[0.4em] mb-4 block">Fleet Standard</span>
                      <p className="text-4xl font-black text-white tracking-widest">D180X</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-xl">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>

                {/* Grid Scanline Effect */}
                <div className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100% 4px' }}></div>
              </div>

              {/* Backglow logic */}
              <div className="absolute -inset-10 bg-accent-green/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>
            </div>
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