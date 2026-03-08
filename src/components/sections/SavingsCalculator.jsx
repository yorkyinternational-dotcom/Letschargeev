import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Zap } from 'lucide-react';

const SavingsCalculator = () => {
    const [mode, setMode] = useState('consumer'); // 'consumer' or 'business'
    const [km, setKm] = useState(50);
    const [fleetSize, setFleetSize] = useState(10);
    const [fuelPrice, setFuelPrice] = useState(100);

    const calculateSavings = () => {
        if (mode === 'consumer') {
            const monthlyFuelCost = (km * 30 * fuelPrice) / 15;
            const monthlyEvCost = (km * 30 * 8) / 7;
            return monthlyFuelCost - monthlyEvCost;
        } else {
            // Business ROI: Fleet Revenue Retention
            // 10 cars * 150km/day * 22 days * 2 INR profit per km
            return fleetSize * 150 * 22 * 5;
        }
    };

    const monthlySavings = calculateSavings();

    return (
        <section id="calculator" className="py-24 md:py-40 bg-primary-surface dark:bg-primary transition-colors duration-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div>
                        <span className="label-caps !text-accent-green !mb-6 italic">Financial Intelligence</span>
                        <h2 className="text-primary-light dark:text-white font-black text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9]">
                            {mode === 'consumer' ? 'SAVINGS' : 'REVENUE'} <br />
                            <span className="text-accent-green">RETENTION.</span>
                        </h2>
                    </div>

                    <div className="flex glass-morphic p-2 rounded-2xl">
                        <button
                            onClick={() => setMode('consumer')}
                            className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'consumer' ? 'bg-accent-green text-primary' : 'text-slate-400 hover:text-white'}`}
                        >
                            Consumer
                        </button>
                        <button
                            onClick={() => setMode('business')}
                            className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'business' ? 'bg-accent-green text-primary' : 'text-slate-400 hover:text-white'}`}
                        >
                            Enterprise
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                    <div className="glass-panel p-12 rounded-[2.5rem] flex flex-col justify-center">
                        <div className="space-y-12">
                            {mode === 'consumer' ? (
                                <>
                                    <div className="space-y-8">
                                        <div className="flex justify-between items-end">
                                            <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 tracking-widest uppercase">Daily Distance</label>
                                            <span className="text-4xl font-black text-primary-light dark:text-white tracking-tighter italic">{km}<span className="text-sm ml-2">KM</span></span>
                                        </div>
                                        <input
                                            type="range" min="10" max="250" step="10"
                                            value={km} onChange={(e) => setKm(parseInt(e.target.value))}
                                            className="w-full h-1 bg-slate-200 dark:bg-white/10 rounded-full appearance-none cursor-pointer accent-accent-green"
                                        />
                                    </div>
                                    <div className="space-y-8">
                                        <div className="flex justify-between items-end">
                                            <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 tracking-widest uppercase">Fuel Price (INR/L)</label>
                                            <span className="text-4xl font-black text-primary-light dark:text-white tracking-tighter italic">₹{fuelPrice}</span>
                                        </div>
                                        <input
                                            type="range" min="90" max="150" step="1"
                                            value={fuelPrice} onChange={(e) => setFuelPrice(parseInt(e.target.value))}
                                            className="w-full h-1 bg-slate-200 dark:bg-white/10 rounded-full appearance-none cursor-pointer accent-accent-green"
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="space-y-8">
                                        <div className="flex justify-between items-end">
                                            <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 tracking-widest uppercase">Fleet Size (Vehicles)</label>
                                            <span className="text-4xl font-black text-primary-light dark:text-white tracking-tighter italic">{fleetSize}<span className="text-sm ml-2">EVs</span></span>
                                        </div>
                                        <input
                                            type="range" min="5" max="200" step="5"
                                            value={fleetSize} onChange={(e) => setFleetSize(parseInt(e.target.value))}
                                            className="w-full h-1 bg-slate-200 dark:bg-white/10 rounded-full appearance-none cursor-pointer accent-accent-green"
                                        />
                                    </div>
                                    <div className="p-8 bg-accent-green/5 rounded-2xl border border-accent-green/10">
                                        <div className="flex gap-4">
                                            <TrendingUp className="text-accent-green" />
                                            <p className="text-[10px] font-bold text-slate-400 uppercase leading-relaxed tracking-widest">
                                                Business ROI assumes enterprise-grade charging infrastructure with 100% revenue retention architecture.
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <motion.div
                        layout
                        className="bg-primary dark:bg-black p-16 md:p-24 rounded-[3rem] text-white overflow-hidden relative border border-white/5 shadow-2xl flex flex-col justify-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-green/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10 space-y-16 text-center lg:text-left">
                            <div className="space-y-12">
                                <motion.div
                                    key={mode + monthlySavings}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">Estimated Monthly {mode === 'consumer' ? 'Savings' : 'Profit'}</p>
                                    <h3 className="text-7xl md:text-9xl font-black text-accent-green tracking-tighter leading-none italic">
                                        ₹{Math.round(monthlySavings).toLocaleString()}
                                    </h3>
                                </motion.div>

                                <motion.div
                                    key={mode + monthlySavings * 12}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">Projected Annual {mode === 'consumer' ? 'Savings' : 'Profit'}</p>
                                    <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none italic">
                                        ₹{Math.round(monthlySavings * 12).toLocaleString()}
                                    </h3>
                                </motion.div>
                            </div>

                            <button className="btn-professional-primary w-full !py-6 !text-xs font-black uppercase tracking-widest tech-glow">
                                Download Financial Blueprint
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SavingsCalculator;
