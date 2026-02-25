import React from 'react';
import { motion } from 'framer-motion';
import logoProfessional from '../../assets/images/logo_professional.png';

const Logo = ({ className = "h-10 md:h-16", withText = true, theme = 'dark' }) => {
    return (
        <div className="flex items-center gap-4 bg-transparent py-1">
            <motion.div
                animate={{
                    scale: [1, 1.02, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <img
                    src={logoProfessional}
                    alt="LCEv"
                    className={`${className} w-auto object-contain`}
                />
            </motion.div>
            {withText && (
                <div className={`flex flex-col leading-none border-l pl-4 transition-colors duration-300 ${theme === 'dark' ? 'border-white/20' : 'border-slate-800/10'
                    }`}>
                    <span className={`font-black tracking-tighter text-lg md:text-xl uppercase transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                        }`}>
                        Lets Charge <span className="text-accent-green">EV</span>
                    </span>
                    <span className={`text-[8px] font-bold uppercase tracking-[0.4em] transition-colors duration-300 ${theme === 'dark' ? 'text-white/40' : 'text-slate-500'
                        }`}>
                        Reliable Mobility
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;
