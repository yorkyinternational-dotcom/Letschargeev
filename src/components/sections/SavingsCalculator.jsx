import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SavingsCalculator = () => {
    const [km, setKm] = useState(50);
    const [fuelPrice, setFuelPrice] = useState(100);

    const monthlyFuelCost = (km * 30 * fuelPrice) / 15; // 15 km/l avg
    const monthlyEvCost = (km * 30 * 8) / 7; // 7 km/unit avg, 8 rs/unit
    const monthlySavings = monthlyFuelCost - monthlyEvCost;

    return (
        <section id="calculator" className="py-24 md:py-40 bg-primary-surface dark:bg-primary transition-colors duration-300 relative overflow-hidden">
            {/* Minimalist Tech Background */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="label-caps !text-accent-green !mb-6">Profit Simulator</span>
                        <h2 className="text-primary-light dark:text-white font-black text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9] mb-16">
                            ANALYZE THE <br />
                            <span className="text-accent-green">TRANSITION.</span>
                        </h2>

                        <div className="space-y-12 bg-white/40 dark:bg-white/5 backdrop-blur-xl p-12 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-2xl">
                            <div className="space-y-8">
                                <div className="flex justify-between items-end">
                                    <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 tracking-widest uppercase">DAILY DRIVE DISTANCE</label>
                                    <span className="text-4xl font-black text-primary-light dark:text-white tracking-tighter italic">{km}<span className="text-sm ml-2">KM</span></span>
                                </div>
                                <div className="relative h-2 flex items-center">
                                    <input
                                        type="range" min="10" max="250" step="10"
                                        value={km} onChange={(e) => setKm(parseInt(e.target.value))}
                                        className="w-full h-1 bg-slate-200 dark:bg-white/10 rounded-full appearance-none cursor-pointer accent-accent-green"
                                    />
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="flex justify-between items-end">
                                    <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 tracking-widest uppercase">FUEL COST (INR/L)</label>
                                    <span className="text-4xl font-black text-primary-light dark:text-white tracking-tighter italic">₹{fuelPrice}</span>
                                </div>
                                <div className="relative h-2 flex items-center">
                                    <input
                                        type="range" min="90" max="150" step="1"
                                        value={fuelPrice} onChange={(e) => setFuelPrice(parseInt(e.target.value))}
                                        className="w-full h-1 bg-slate-200 dark:bg-white/10 rounded-full appearance-none cursor-pointer accent-accent-green"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-primary dark:bg-black p-16 md:p-24 rounded-[2.5rem] text-white overflow-hidden relative border border-white/5 shadow-2xl">

                        {/* Result Accents */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-green/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10 space-y-16">
                            <div className="flex items-center gap-4">
                                <div className="h-1 w-8 bg-accent-green"></div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-accent-green">Cashflow Optimization</p>
                            </div>

                            <div className="space-y-12">
                                <motion.div key={`m-${monthlySavings}`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">MONTHLY PROFIT</p>
                                    <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none italic">
                                        ₹{Math.round(monthlySavings).toLocaleString()}
                                    </h3>
                                </motion.div>

                                <motion.div key={`a-${monthlySavings * 12}`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">ANNUAL PROFIT</p>
                                    <h3 className="text-6xl md:text-8xl font-black text-accent-green tracking-tighter leading-none italic">
                                        ₹{Math.round(monthlySavings * 12).toLocaleString()}
                                    </h3>
                                </motion.div>
                            </div>

                            <button className="btn-professional-primary w-full !py-6 !text-xs font-black uppercase tracking-widest">
                                Request Enterprise Analysis
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SavingsCalculator;
