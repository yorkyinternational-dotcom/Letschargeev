import React from 'react';
import logoVibrant from '../../assets/images/logo_vibrant.png';

const Logo = ({ className = "h-10 md:h-12", withText = true }) => {
    return (
        <div className="flex items-center gap-3">
            <img
                src={logoVibrant}
                alt="LCEv"
                className={`${className} w-auto object-contain`}
            />
            {withText && (
                <div className="flex flex-col leading-none">
                    <span className="text-primary font-black tracking-tighter text-xl md:text-2xl uppercase italic">
                        LETS<span className="text-eco">CHARGE</span>
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow glow-yellow">
                        Electric Revolution
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;
