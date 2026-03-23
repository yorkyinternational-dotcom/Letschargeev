import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Zap, Clock, IndianRupee, XOctagon, BatteryCharging,
    TrendingUp, ShieldCheck, ArrowLeft
} from 'lucide-react';

const SessionPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const session = location.state?.session;

    const [soc, setSoc] = useState(24);
    const [energy, setEnergy] = useState(0.0);
    const [cost, setCost] = useState(0.0);
    const [elapsed, setElapsed] = useState(0);

    useEffect(() => {
        if (!session) {
            navigate('/');
            return;
        }

        const interval = setInterval(() => {
            setSoc(prev => Math.min(prev + 0.08, 100)); 
            setEnergy(prev => prev + 0.04);
            setCost(prev => prev + (0.04 * 18.5));
            setElapsed(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [session, navigate]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleStop = () => {
        if (confirm("Stop charging and release the connector?")) {
            navigate('/dashboard/analytics'); // Mock post-session redirect
        }
    };

    if (!session) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-[#0a0f0d] flex flex-col lg:flex-row overflow-hidden relative selection:bg-accent-green selection:text-black"
        >
            {/* Dynamic Backgrounds */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-[-20%] left-[-20%] lg:left-0 w-[100%] lg:w-[60%] h-[60%] lg:h-[100%] bg-accent-green/10 blur-[150px] rounded-full"
                />
            </div>

            {/* Left Column: Visual Command Center */}
            <div className="flex-1 flex flex-col justify-between p-4 lg:p-6 relative z-10 lg:border-r border-white/5">
                <div className="flex items-center justify-between">
                    <button onClick={() => navigate('/')} className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft size={18} />
                    </button>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-accent-green/10 border border-accent-green/20 rounded-full">
                        <ShieldCheck size={12} className="text-accent-green" />
                        <span className="text-[9px] font-black text-white uppercase tracking-widest">Secure Link Active</span>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center py-4 lg:py-0">
                    <div className="relative group">
                        <div className="absolute inset-[-60px] bg-accent-green/10 blur-[50px] rounded-full animate-pulse" />

                        <svg className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px] -rotate-90 transform relative z-10 transition-all duration-500">
                            <defs>
                                <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#00E696" />
                                    <stop offset="100%" stopColor="#00c983" />
                                </linearGradient>
                            </defs>
                            <circle cx="50%" cy="50%" r="44%" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-white/5" />
                            <motion.circle
                                cx="50%" cy="50%" r="44%" stroke="url(#ringGradient)" strokeWidth="12" fill="transparent"
                                strokeDasharray="276%" animate={{ strokeDashoffset: `${276 * (1 - soc / 100)}%` }}
                                className="drop-shadow-[0_0_15px_rgba(0,230,150,0.5)]" strokeLinecap="round"
                            />
                        </svg>

                        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                            <div className="flex items-end gap-1 mb-1">
                                <motion.span key={Math.floor(soc)} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-6xl sm:text-8xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter tabular-nums leading-none">
                                    {Math.floor(soc)}
                                </motion.span>
                                <span className="text-2xl lg:text-3xl font-black text-accent-green pb-1">%</span>
                            </div>
                            <p className="text-[11px] lg:text-xs font-black text-slate-400 uppercase tracking-[0.4em]">State of Charge</p>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block text-center">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Session ID: LCEV-{Math.floor(Math.random() * 90000 + 10000)}</p>
                </div>
            </div>

            {/* Right Column: Metrics & Controls */}
            <div className="w-full lg:w-[420px] xl:w-[480px] flex flex-col relative z-10 bg-white/5 backdrop-blur-xl lg:bg-transparent">
                <div className="p-4 lg:p-6 lg:px-8 xl:p-8 flex-1 flex flex-col justify-center">
                    
                    <div className="mb-4 lg:mb-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/5 rounded-[12px] flex items-center justify-center text-accent-green ring-1 ring-white/10 shadow-lg">
                                <Zap size={16} fill="currentColor" className="animate-pulse" />
                            </div>
                            <div>
                                <p className="text-[9px] lg:text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-0.5">Charging at</p>
                                <p className="text-lg lg:text-xl font-black text-white uppercase tracking-tight leading-none">{session.station?.name || 'Network Hub'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Live Output Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4 lg:mb-6">
                        {[ 
                            { label: 'Power', val: '58.4', unit: 'kW', icon: Zap },
                            { label: 'Energy', val: energy.toFixed(2), unit: 'kWh', icon: BatteryCharging },
                            { label: 'Cost', val: `₹${cost.toFixed(1)}`, unit: '', icon: IndianRupee }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group p-2 lg:p-3 bg-white/5 rounded-[16px] lg:rounded-[20px] border border-white/5 hover:border-accent-green/30 transition-colors">
                                <div className="flex items-center justify-center gap-1 text-slate-400 mb-1 lg:mb-2 group-hover:text-accent-green transition-colors">
                                    <stat.icon size={12} />
                                </div>
                                <p className="text-lg lg:text-xl font-black text-white tabular-nums tracking-tighter leading-none">
                                    {stat.val}<span className="text-[8px] lg:text-[9px] ml-0.5 text-accent-green opacity-80 uppercase">{stat.unit}</span>
                                </p>
                                <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-1 block leading-none">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
                        <div className="grid grid-cols-2 gap-2 md:gap-3">
                            <div className="p-3 lg:p-4 bg-white/5 rounded-[16px] lg:rounded-[20px] border border-white/5 flex items-center justify-between group hover:bg-white/10 transition-all">
                                <div>
                                    <p className="text-[8px] lg:text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1 lg:mb-1.5">Elapsed</p>
                                    <p className="text-base lg:text-lg font-black text-white font-mono tracking-tighter tabular-nums leading-none">{formatTime(elapsed)}</p>
                                </div>
                                <Clock size={16} className="text-slate-600 group-hover:text-accent-green transition-colors" />
                            </div>
                            <div className="p-3 lg:p-4 bg-white/5 rounded-[16px] lg:rounded-[20px] border border-white/5 flex items-center justify-between group hover:bg-white/10 transition-all">
                                <div>
                                    <p className="text-[8px] lg:text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1 lg:mb-1.5">Plug ID</p>
                                    <p className="text-base lg:text-lg font-black text-white tracking-tighter uppercase leading-none">{session.connector?.type || 'CCS2'}</p>
                                </div>
                                <Zap size={16} className="text-accent-green" />
                            </div>
                        </div>

                        {/* Target Progress Card */}
                        <div className="p-4 lg:p-5 bg-gradient-to-br from-white/10 to-transparent rounded-[20px] lg:rounded-[24px] border border-white/10">
                            <div className="flex justify-between items-center mb-5">
                                <div className="flex items-center gap-2">
                                    <TrendingUp size={16} className="text-accent-green" />
                                    <p className="text-[10px] lg:text-[11px] font-black text-white uppercase tracking-widest">Progress to Limit</p>
                                </div>
                                <span className="text-xs font-black text-accent-green bg-accent-green/10 px-3 py-1 rounded-full uppercase tabular-nums">
                                    {Math.floor((energy / 40) * 100)}%
                                </span>
                            </div>
                            <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                                <motion.div className="h-full bg-accent-green rounded-full shadow-[0_0_20px_#00E696]" animate={{ width: `${Math.min((energy / 40) * 100, 100)}%` }} />
                            </div>
                            <div className="flex justify-between mt-2 lg:mt-3 text-[7px] lg:text-[8px] font-black text-slate-500 uppercase tracking-widest">
                                <span>Initiated</span>
                                <span className="text-slate-300">Target: 40 kWh</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleStop}
                        className="w-full h-12 lg:h-14 bg-red-500/10 text-red-500 border-2 border-red-500/20 font-black uppercase tracking-[0.3em] text-[10px] lg:text-xs rounded-[16px] lg:rounded-[20px] flex items-center justify-center gap-2 lg:gap-3 hover:bg-red-500/20 active:scale-[0.98] transition-all group shadow-2xl mt-auto shrink-0"
                    >
                        <XOctagon size={16} className="group-hover:rotate-90 transition-transform" />
                        Stop Session
                    </button>
                    
                    <div className="lg:hidden text-center mt-8">
                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.5em]">Session ID: LCEV-{Math.floor(Math.random() * 90000 + 10000)}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SessionPage;
