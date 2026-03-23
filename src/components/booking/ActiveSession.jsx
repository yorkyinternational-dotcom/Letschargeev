import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Zap,
    Clock,
    IndianRupee,
    ArrowLeft,
    XOctagon,
    BatteryCharging,
    TrendingUp,
    ShieldCheck
} from 'lucide-react';

const ActiveSession = ({ session, onStop }) => {
    const [soc, setSoc] = useState(24);
    const [energy, setEnergy] = useState(0.0);
    const [cost, setCost] = useState(0.0);
    const [elapsed, setElapsed] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSoc(prev => Math.min(prev + 0.08, 100)); // Realistically slow
            setEnergy(prev => prev + 0.04);
            setCost(prev => prev + (0.04 * 18.5));
            setElapsed(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed md:absolute inset-0 md:top-6 md:right-6 md:bottom-auto md:left-auto z-[3000] bg-[#0a0f0d] md:bg-[#0a0f0d]/95 md:backdrop-blur-3xl w-full md:w-[380px] md:h-auto md:max-h-[calc(100%-3rem)] md:rounded-[32px] shadow-none md:shadow-2xl border-none md:border border-white/10 flex flex-col overflow-y-auto custom-scrollbar"
        >
            {/* Dynamic Background - Deep Glows */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-accent-green/10 blur-[150px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent-green/5 blur-[120px] rounded-full"
                />
            </div>

            {/* Header */}
            <div className="relative z-10 p-8 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-accent-green ring-1 ring-white/10 shadow-2xl">
                        <Zap size={24} fill="currentColor" className="animate-pulse" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-0.5">Live Session</p>
                        <p className="text-sm font-black text-white uppercase tracking-tight">{session?.station?.name || 'Network Hub'}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-accent-green/10 border border-accent-green/20 rounded-full">
                    <ShieldCheck size={14} className="text-accent-green" />
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Secure Link</span>
                </div>
            </div>

            {/* Main Circle SoC Display */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">
                <div className="relative group">
                    {/* Glowing Aura behind Ring */}
                    <div className="absolute inset-[-40px] bg-accent-green/5 blur-[40px] rounded-full animate-pulse" />

                    {/* SVG Progress Ring */}
                    <svg className="w-64 h-64 sm:w-[280px] sm:h-[280px] -rotate-90 transform relative z-10 transition-all duration-500">
                        <defs>
                            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#00E696" />
                                <stop offset="100%" stopColor="#00c983" />
                            </linearGradient>
                        </defs>
                        <circle
                            cx="50%"
                            cy="50%"
                            r="44%"
                            stroke="currentColor"
                            strokeWidth="12"
                            fill="transparent"
                            className="text-white/5"
                        />
                        <motion.circle
                            cx="50%"
                            cy="50%"
                            r="44%"
                            stroke="url(#ringGradient)"
                            strokeWidth="16"
                            fill="transparent"
                            strokeDasharray="276%"
                            animate={{ strokeDashoffset: `${276 * (1 - soc / 100)}%` }}
                            className="drop-shadow-[0_0_15px_rgba(0,230,150,0.4)]"
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* Content inside ring */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                        <div className="flex items-end gap-1 mb-2">
                            <motion.span
                                key={Math.floor(soc)}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-6xl sm:text-8xl font-black text-white tracking-tighter tabular-nums"
                            >
                                {Math.floor(soc)}
                            </motion.span>
                            <span className="text-xl sm:text-3xl font-black text-accent-green pb-2 sm:pb-3">%</span>
                        </div>
                        <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em]">Charging Level</p>
                    </div>

                    {/* Orbital Particles */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-accent-green rounded-full blur-[2px] z-10"
                            animate={{
                                x: [
                                    Math.cos(i * 60 * Math.PI / 180) * 110,
                                    Math.cos((i * 60 + 360) * Math.PI / 180) * 110
                                ],
                                y: [
                                    Math.sin(i * 60 * Math.PI / 180) * 110,
                                    Math.sin((i * 60 + 360) * Math.PI / 180) * 110
                                ],
                                opacity: [0.2, 1, 0.2]
                            }}
                            transition={{ duration: 4 + i, repeat: Infinity, ease: "linear" }}
                        />
                    ))}
                </div>

                {/* Live Output Stats Grid */}
                <div className="w-full max-w-sm mt-16 grid grid-cols-3 gap-6">
                    {[
                        { label: 'Power', val: '58.4', unit: 'kW', icon: Zap },
                        { label: 'Energy', val: energy.toFixed(2), unit: 'kWh', icon: BatteryCharging },
                        { label: 'Cost', val: `₹${cost.toFixed(1)}`, unit: '', icon: IndianRupee }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className="flex items-center justify-center gap-1.5 text-slate-500 mb-2 group-hover:text-accent-green transition-colors">
                                <stat.icon size={12} />
                                <span className="text-[9px] font-black uppercase tracking-widest">{stat.label}</span>
                            </div>
                            <p className="text-xl font-black text-white tabular-nums tracking-tighter">
                                {stat.val}<span className="text-[10px] ml-1 text-accent-green opacity-80 uppercase">{stat.unit}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Session Detail Drawer (Mobile optimized) */}
            <div className="relative z-10 p-8 pt-0 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-white/5 backdrop-blur-md rounded-[32px] border border-white/5 flex items-center justify-between group hover:bg-white/10 transition-all">
                        <div>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Elapsed</p>
                            <p className="text-2xl font-black text-white font-mono tracking-tighter tabular-nums">{formatTime(elapsed)}</p>
                        </div>
                        <Clock size={24} className="text-slate-600 group-hover:text-accent-green transition-colors" />
                    </div>
                    <div className="p-6 bg-white/5 backdrop-blur-md rounded-[32px] border border-white/5 flex items-center justify-between group hover:bg-white/10 transition-all">
                        <div>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Plug ID</p>
                            <p className="text-2xl font-black text-white tracking-tighter uppercase">{session?.connector?.type || 'CCS2'}</p>
                        </div>
                        <Zap size={24} className="text-accent-green" />
                    </div>
                </div>

                {/* Target Progress Card */}
                <div className="p-8 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl rounded-[40px] border border-white/10">
                    <div className="flex justify-between items-center mb-5">
                        <div className="flex items-center gap-2">
                            <TrendingUp size={16} className="text-accent-green" />
                            <p className="text-[11px] font-black text-white uppercase tracking-widest">Progress to Limit</p>
                        </div>
                        <span className="text-xs font-black text-accent-green bg-accent-green/10 px-3 py-1 rounded-full uppercase tabular-nums">
                            {Math.floor((energy / 40) * 100)}%
                        </span>
                    </div>
                    <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                        <motion.div
                            className="h-full bg-accent-green rounded-full shadow-[0_0_20px_#00E696]"
                            animate={{ width: `${Math.min((energy / 40) * 100, 100)}%` }}
                        />
                    </div>
                    <div className="flex justify-between mt-3 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                        <span>Initiated</span>
                        <span className="text-slate-300">Target: 40 kWh</span>
                    </div>
                </div>
            </div>

            {/* Action Footer */}
            <div className="relative z-10 p-8 pb-10 flex flex-col gap-6">
                <button
                    onClick={() => {
                        if (confirm("Stop charging and release the connector?")) {
                            onStop();
                        }
                    }}
                    className="w-full h-20 bg-red-500/10 text-red-500 border-2 border-red-500/20 font-black uppercase tracking-[0.3em] text-sm rounded-[32px] flex items-center justify-center gap-4 hover:bg-red-500/20 active:scale-[0.98] transition-all group shadow-2xl"
                >
                    <XOctagon size={24} className="group-hover:rotate-90 transition-transform" />
                    Stop Session
                </button>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.5em]">
                        Session ID: LCEV-{Math.floor(Math.random() * 90000 + 10000)}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default ActiveSession;
