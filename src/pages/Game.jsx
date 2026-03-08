import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';

const Game = () => {
    return (
        <div className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen bg-primary dark:bg-black text-white flex items-center justify-center relative overflow-hidden">
            {/* Tech Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="text-center px-4 relative z-10">
                <motion.div
                    animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="inline-block p-10 bg-accent-green/10 rounded-3xl border border-accent-green/20 mb-10 backdrop-blur-xl"
                >
                    <Gamepad2 size={60} className="text-accent-green" />
                </motion.div>
                <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">
                    CHARGE <br />
                    <span className="text-accent-green">AHEAD.</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/40 mb-16 font-medium uppercase tracking-tight max-w-lg mx-auto leading-tight">
                    Our flagship intelligent mobile ecosystem is currently in final synchronization.
                </p>
                <div className="flex justify-center gap-4">
                    <div className="w-48 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="h-full bg-accent-green w-1/2 shadow-[0_0_15px_rgba(0,230,150,0.5)]"
                        />
                    </div>
                </div>
                <p className="mt-12 text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">SYNCING_FUTURE_NODES...</p>
            </div>
        </div>
    );
};

export default Game;
