import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Zap,
    Navigation,
    Wifi,
    Coffee,
    Clock,
    ShieldCheck,
    Info,
    X,
    ChevronRight,
    ArrowRight,
    IndianRupee,
    ZapOff
} from 'lucide-react';

const StationDetails = ({ station, onClose, onBook }) => {
    if (!station) return null;

    const connectors = station.connectors || [
        { id: 1, type: 'CCS2', power: '60kW', status: 'Available', price: '₹18.5/unit' },
        { id: 2, type: 'CCS2', power: '120kW', status: 'In Use', price: '₹22.0/unit' },
        { id: 3, type: 'Type 2', power: '22kW', status: 'Available', price: '₹12.0/unit' },
    ];

    const amenities = [
        { icon: Wifi, label: 'High Speed Wifi' },
        { icon: Coffee, label: 'Lounge/Cafe' },
        { icon: Clock, label: 'Open 24/7' },
        { icon: ShieldCheck, label: 'Safe & Secure' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed md:absolute bottom-0 md:top-4 md:bottom-auto left-0 right-0 md:right-4 md:left-auto z-[1100] bg-white/95 dark:bg-[#020605]/95 backdrop-blur-3xl rounded-t-[40px] md:rounded-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.15)] md:shadow-2xl border-t md:border border-slate-200/50 dark:border-white/10 max-h-[85vh] md:max-h-[calc(100%-2rem)] h-auto w-full md:w-[360px] overflow-hidden flex flex-col"
        >
            {/* Handle Bar Area */}
            <div className="flex justify-center p-4 cursor-grab active:cursor-grabbing group md:hidden">
                <div className="w-16 h-2 bg-slate-200 dark:bg-white/20 rounded-full group-hover:bg-slate-300 dark:group-hover:bg-white/30 transition-colors" />
            </div>

            {/* Header Content */}
            <div className="px-5 md:px-6 pb-3 md:pb-4 pt-2 md:pt-6 flex justify-between items-start border-b border-slate-100 dark:border-white/5">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1.5 bg-accent-green/10 text-accent-green border border-accent-green/20 text-[10px] md:text-[11px] font-black uppercase tracking-widest rounded-full">
                            Verified Hub
                        </span>
                        <div className="flex items-center gap-1.5 text-slate-400">
                            <Navigation size={14} className="text-accent-green" />
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wide">1.2 KM</span>
                        </div>
                    </div>
                    <p className="text-xl md:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none mb-1">
                        {station.name}
                    </p>
                    <p className="text-[10px] md:text-xs text-slate-500 font-medium tracking-tight">Main Sector Road, Sector 44, Gurgaon</p>
                </div>
                <button
                    onClick={onClose}
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-slate-100/50 dark:bg-white/5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200 dark:hover:bg-white/10 dark:hover:text-white transition-all shadow-sm"
                >
                    <X size={18} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 md:px-6 py-4 space-y-6 custom-scrollbar">
                {/* Stats Grid - High Contrast */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-[24px] border border-slate-100 dark:border-white/5 shadow-inner">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 rounded-full bg-accent-green/20 flex items-center justify-center text-accent-green">
                                <Zap size={12} fill="currentColor" />
                            </div>
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Availability</span>
                        </div>
                        <p className="text-xl font-black text-slate-900 dark:text-white tabular-nums">02<span className="text-slate-300 dark:text-slate-600 mx-1">/</span>03</p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-[32px] border border-slate-100 dark:border-white/5 shadow-inner">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-accent-green/20 flex items-center justify-center text-accent-green">
                                <IndianRupee size={16} />
                            </div>
                            <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Fastest Rate</span>
                        </div>
                        <p className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">₹12.0<span className="text-[10px] ml-1 text-slate-400 uppercase">/kw</span></p>
                    </div>
                </div>

                {/* Connector Selection - Interactive & Large Targets */}
                <div>
                    <div className="flex justify-between items-center mb-5 px-1">
                        <p className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 m-0 leading-normal">Select Charging Point</p>
                        <span className="text-[10px] font-bold text-accent-green px-2 py-0.5 bg-accent-green/10 rounded-md">Live Status</span>
                    </div>
                    <div className="space-y-4">
                        {connectors.map((conn) => (
                            <button
                                key={conn.id}
                                onClick={() => onBook(conn)}
                                disabled={conn.status !== 'Available'}
                                className={`w-full flex items-center justify-between p-4 rounded-[24px] border-2 transition-all group scale-100 active:scale-[0.98] ${conn.status === 'Available'
                                    ? 'bg-white dark:bg-white/5 border-slate-100 dark:border-white/10 hover:border-accent-green hover:shadow-xl hover:shadow-accent-green/5'
                                    : 'bg-slate-50 dark:bg-black/20 border-transparent opacity-50 grayscale cursor-not-allowed'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${conn.status === 'Available' ? 'bg-accent-green/10 text-accent-green ring-1 ring-accent-green/20' : 'bg-slate-200 dark:bg-white/5 text-slate-400'
                                        }`}>
                                        <Zap size={22} fill={conn.status === 'Available' ? 'currentColor' : 'none'} className={conn.status === 'Available' ? 'animate-pulse' : ''} />
                                    </div>
                                    <div className="text-left">
                                        <div className="flex items-center gap-2 mb-0.5">
                                            <p className="text-lg font-black text-slate-900 dark:text-white tracking-tight">{conn.type}</p>
                                            <span className="px-1.5 py-0.5 bg-slate-100 dark:bg-white/10 rounded-md text-[8px] font-black text-slate-500 uppercase tracking-widest">{conn.power}</span>
                                        </div>
                                        <p className="text-[10px] font-bold text-accent-green uppercase tracking-wide">{conn.price}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={`text-[11px] font-black uppercase tracking-widest ${conn.status === 'Available' ? 'text-accent-green' : 'text-slate-400'
                                        }`}>
                                        {conn.status}
                                    </span>
                                    {conn.status === 'Available' ? (
                                        <ChevronRight size={20} className="text-slate-300 group-hover:text-accent-green group-hover:translate-x-1 transition-all" />
                                    ) : (
                                        <ZapOff size={18} className="text-slate-300" />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Amenities - More Interactive */}
                <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-4 px-1 m-0 leading-normal">Host Amenities</p>
                    <div className="grid grid-cols-4 gap-3">
                        {amenities.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-accent-green/5 group-hover:text-accent-green transition-all shadow-sm">
                                    <item.icon size={18} />
                                </div>
                                <span className="text-[8px] font-black text-slate-500 uppercase tracking-tight text-center leading-tight group-hover:text-slate-800 dark:group-hover:text-white transition-colors">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Premium Action Footer */}
            <div className="p-5 md:p-6 bg-white/80 dark:bg-[#020605]/80 backdrop-blur-xl border-t border-slate-100/50 dark:border-white/5">
                <div className="flex items-center justify-between mb-4 px-1">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-ping" />
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Queue Status</p>
                            <p className="text-sm font-black text-slate-900 dark:text-white">No wait time</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Estimated Full</p>
                        <p className="text-sm font-black text-accent-green">~42 mins</p>
                    </div>
                </div>
                <button
                    onClick={() => connectors[0].status === 'Available' && onBook(connectors[0])}
                    className="w-full h-14 bg-accent-green hover:bg-accent-yellow text-slate-900 font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs rounded-2xl md:rounded-[20px] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg shadow-accent-green/20"
                >
                    Reserve Selected Slot
                    <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center">
                        <ArrowRight size={14} />
                    </div>
                </button>
            </div>
        </motion.div>
    );
};

export default StationDetails;
