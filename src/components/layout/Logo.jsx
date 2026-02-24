import React from 'react';
import { motion } from 'framer-motion';
import logoProfessional from '../../assets/images/logo_professional.png';

const Logo = ({ className = "h-10 md:h-16", withText = true }) => {
    return (
        <div className="flex items-center gap-4 bg-transparent py-1">
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                    filter: ["drop-shadow(0 0 0px transparent)", "drop-shadow(0 0 10px rgba(0, 230, 150, 0.4))", "drop-shadow(0 0 0px transparent)"]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <img
                    src={logoProfessional}
                    alt="LCEv"
                    className={`${className} w-auto object-contain`}
                />
            </motion.div>
            {withText && (
                <div className="flex flex-col leading-none border-l border-white/20 pl-4">
                    <span className="text-primary font-black tracking-tighter text-lg md:text-xl uppercase italic">
                        Lets Charge <span className="text-eco glow-green">EV</span>
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">
                        Reliable Mobility
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;
