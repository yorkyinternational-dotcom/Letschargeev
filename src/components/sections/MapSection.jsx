import React from 'react';
import ChargerMap from '../maps/ChargerMap';

const MapSection = () => {
    return (
        <section id="locate" className="py-16 md:py-24 lg:py-16 md:py-32 bg-primary-surface dark:bg-primary transition-colors duration-300 relative overflow-hidden">
            {/* Tech Background */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 md:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                    <div>
                        <span className="label-caps !text-accent-green !mb-6">Global Network Locator</span>
                        <h2 className="text-primary-light dark:text-white font-bold text-5xl md:text-8xl tracking-tight leading-[1]">
                            MISSION <br />
                            <span className="text-accent-green">READY GRID.</span>
                        </h2>
                    </div>
                    <div className="lg:max-w-sm">
                        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed uppercase tracking-tight">
                            Live Status Tracking. Integrated Cloud Sync.
                            India's most technically advanced charging locator with <span className="text-primary-light dark:text-white font-bold">real-time availability metrics.</span>
                        </p>
                    </div>
                </div>

                {/* Professional Mapbox Container */}
                <div className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/5 shadow-2xl relative group bg-black">
                    <ChargerMap />

                    {/* Integrated Network Statistics Overlay */}
                    <div className="absolute top-10 right-10 z-20 hidden lg:block pointer-events-none">
                        <div className="glass-panel p-6 rounded-2xl border-white/10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-2 bg-accent-green/20 rounded-lg">
                                    <div className="w-2 h-2 rounded-full bg-accent-green animate-ping"></div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-white uppercase tracking-widest">Network Logic</p>
                                    <p className="text-xs font-bold text-slate-400">Delhi-NCR Cluster</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center gap-12">
                                    <span className="text-[9px] font-bold text-slate-500 uppercase">Active Nodes</span>
                                    <span className="text-xs font-black text-white">124</span>
                                </div>
                                <div className="flex justify-between items-center gap-12">
                                    <span className="text-[9px] font-bold text-slate-500 uppercase">Avg Uptime</span>
                                    <span className="text-xs font-black text-accent-green">99.98%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
