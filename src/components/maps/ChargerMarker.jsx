import React from 'react';
import { Zap } from 'lucide-react';

const ChargerMarker = ({ status, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`relative cursor-pointer group transition-all duration-300 transform hover:scale-110`}
        >
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-md border-2 
        ${status === 'Available'
                    ? 'bg-accent-green/20 border-accent-green text-accent-green'
                    : 'bg-accent-yellow/20 border-accent-yellow text-accent-yellow'}`}
            >
                <Zap size={20} fill="currentColor" className={status === 'Available' ? 'animate-pulse' : ''} />
            </div>

            {/* Decorative Bezel */}
            <div className="absolute -inset-1 bg-white/5 rounded-2xl -z-10 group-hover:bg-white/10 transition-colors"></div>
        </div>
    );
};

export default ChargerMarker;
