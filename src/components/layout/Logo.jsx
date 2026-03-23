import React from 'react';
import { motion } from 'framer-motion';
import logoLight from '../../assets/images/logo_light.png';
import logoBlue from '../../assets/images/logo_blue.png';

const Logo = ({ className = "h-8 md:h-12 lg:h-16", withText = true, theme = 'dark' }) => {
    return (
        <div className="flex items-center gap-2 md:gap-4 bg-transparent py-1 group/logo">
            <img
                src={theme === 'dark' ? logoBlue : logoLight}
                alt="LetsChargeEV"
                className={`${className} max-h-[50px] md:max-h-none w-auto object-contain transition-all duration-500 group-hover/logo:scale-105`}
            />
            {withText && (
                <div className={`flex flex-col leading-none border-l pl-2 md:border-l-2 md:pl-4 transition-all duration-300 ${theme === 'dark' ? 'border-accent-green/30' : 'border-slate-800/10'}`}>
                    <span className={`text-[8px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.5em] transition-colors duration-300 ${theme === 'dark' ? 'text-white/60' : 'text-slate-500'}`}>
                        RELIABLE MOBILITY
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;
