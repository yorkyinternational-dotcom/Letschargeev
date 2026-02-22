import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, ExternalLink, ArrowRight, MousePointer2, Smartphone } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="label-caps tracking-[0.6em]">Smart . Tech . <span className="text-eco">Sustainable</span></span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-primary mb-10 leading-[0.85] tracking-tighter"
            >
              POWER THAT <br />
              <span className="text-accent italic">MOVES WITH YOU.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-500 mb-16 max-w-xl font-medium leading-relaxed"
            >
              India's most reliable and intelligent EV charging network. Designed for performance, built for the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 items-center"
            >
              <a href="#products" className="btn-primary w-full sm:w-auto !px-12 flex items-center justify-center">
                EXPLORE CHARGERS
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="#solutions" className="btn-accent w-full sm:w-auto !px-12 flex items-center justify-center">
                DISCOVER SOLUTIONS
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            {/* Phone Frame */}
            <div className="relative mx-auto w-[320px] h-[650px] bg-black rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden p-2">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
              <div className="w-full h-full bg-primary rounded-[2rem] overflow-hidden relative flex flex-col items-center justify-center p-8">
                {/* Dynamic Coming Soon Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="w-32 h-32 border-2 border-accent/20 rounded-full absolute -top-8 -left-8"
                  />

                  <div className="text-center space-y-4">
                    <motion.p
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-[10px] font-black text-accent uppercase tracking-[0.5em]"
                    >
                      LCEv APP
                    </motion.p>

                    <h3 className="text-5xl font-black text-white italic tracking-tighter leading-none">
                      COMING <br />
                      <span className="text-accent">SOON.</span>
                    </h3>

                    <div className="pt-8 space-y-3">
                      {[1, 2, 3].map(i => (
                        <motion.div
                          key={i}
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: 1 + (i * 0.2), duration: 1 }}
                          className="h-[1px] bg-white/10 w-40"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Background Glows for App */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent/20 rounded-full blur-[60px]"></div>
              </div>
            </div>

            {/* Decorative background circles */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/5 rounded-full -z-10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-eco/5 rounded-full -z-10 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Internal missing component
const ChevronRight = ({ size, className }) => (
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
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default Hero;