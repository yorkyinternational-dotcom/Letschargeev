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
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Dynamic Mesh Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-white">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-eco/15 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[5%] w-[60%] h-[60%] bg-accent/15 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-yellow/10 rounded-full blur-[80px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="label-caps !text-eco !mb-0 glow-green">THE ELECTRIC NEW ERA</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-7xl md:text-9xl font-black text-primary mb-10 leading-[0.8] tracking-tighter"
            >
              FAST. <br />
              VIBRANT. <br />
              <span className="text-gradient italic">UNSTOPPABLE.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-500 mb-16 max-w-xl font-bold leading-tight"
            >
              Join India's most high-energy EV ecosystem. <br className="hidden md:block" />
              Built for the bold, power for the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 items-center"
            >
              <a href="#products" className="btn-primary w-full sm:w-auto flex items-center justify-center">
                START CHARGING
                <Zap className="w-5 h-5 ml-2 fill-primary" />
              </a>
              <a href="#solutions" className="btn-accent w-full sm:w-auto flex items-center justify-center">
                VIEW SOLUTIONS
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            {/* Phone Frame - High Impact GenZ Style */}
            <div className="relative mx-auto w-[340px] h-[680px] bg-primary rounded-[3.5rem] p-4 shadow-[0_0_100px_rgba(0,230,150,0.2)] border-4 border-slate-900/50">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-3xl z-20"></div>
              <div className="w-full h-full bg-[#050B18] rounded-[3rem] overflow-hidden relative flex flex-col items-center justify-center p-8 border border-white/5">

                {/* Floating Glow Inside Phone */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-40 h-40 bg-eco/20 rounded-full blur-[50px] animate-pulse"></div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative z-10 text-center"
                >
                  <div className="w-20 h-20 bg-eco rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-eco/50 rotate-12">
                    <Zap className="w-10 h-10 text-primary fill-primary" />
                  </div>

                  <h3 className="text-4xl font-black text-white italic tracking-tighter mb-4 leading-none">
                    LCEv <br />
                    <span className="text-eco glow-green">APP</span>
                  </h3>

                  <div className="mt-12 space-y-4">
                    <div className="h-12 w-48 bg-white/5 rounded-2xl border border-white/10 flex items-center px-4 gap-3">
                      <div className="w-2 h-2 rounded-full bg-eco animate-ping"></div>
                      <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="h-12 w-48 bg-white/5 rounded-2xl border border-white/10 flex items-center px-4 gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow animate-ping"></div>
                      <div className="h-2 w-20 bg-white/20 rounded-full"></div>
                    </div>
                  </div>

                  <p className="mt-10 text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">
                    GEN-Z READY
                  </p>
                </motion.div>
              </div>

              {/* Decorative Floating Symbols around the phone */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-24 h-24 bg-yellow rounded-full flex items-center justify-center shadow-2xl shadow-yellow/40 z-30"
              >
                <Zap className="w-12 h-12 text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-40 -left-12 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-2xl shadow-accent/40 z-30 -rotate-12"
              >
                <Smartphone className="w-8 h-8 text-white" />
              </motion.div>
            </div>
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