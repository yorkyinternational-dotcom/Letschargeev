import React from 'react';
import { motion } from 'framer-motion';
import logoLight from '../../assets/images/logo_light.png';
import logoBlue from '../../assets/images/logo_blue.png';

const Logo = ({ className = "h-7 md:h-10 lg:h-14", withText = false, theme = 'dark' }) => {
    return (
        <div className="flex items-center gap-4 bg-transparent py-1">
            <motion.div
                animate={{
                    scale: [1, 1.01, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <img
                    src={theme === 'dark' ? logoBlue : logoLight}
                    alt="LetsChargeEV"
                    className={`${className} max-h-[40px] md:max-h-none max-w-[180px] md:max-w-none w-auto object-contain transition-all duration-500`}
                />
            </motion.div>
            {withText && (
                <div className={`flex flex-col leading-none border-l pl-4 transition-colors duration-300 ${theme === 'dark' ? 'border-white/20' : 'border-slate-800/10'}`}>
                    <span className={`text-[10px] font-bold uppercase tracking-[0.4em] transition-colors duration-300 ${theme === 'dark' ? 'text-white/40' : 'text-slate-500'}`}>
                        Reliable Mobility
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;
