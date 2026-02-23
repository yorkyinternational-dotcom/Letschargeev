import React from 'react';
import logoBlue from '../../assets/images/logo_blue.png';

const Logo = ({ className = "h-10 md:h-12", withText = true }) => {
    return (
        <div className="flex items-center gap-3">
            <img
                src={logoBlue}
                alt="LCEv"
                className={`${className} w-auto object-contain`}
            />
            {withText && (
                <div className="flex flex-col leading-none">
                    <span className="text-primary font-black tracking-tighter text-xl md:text-2xl uppercase">
                        LETS<span className="text-eco"></span>
                    </span>
                    <span className="text-[8px] font-black uppercase tracking-[0.5em] text-primary/40">
                        Smart Mobility
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;
