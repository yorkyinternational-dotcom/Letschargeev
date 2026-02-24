import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SavingsCalculator = () => {
    const [km, setKm] = useState(50);
    const [fuelPrice, setFuelPrice] = useState(100);

    const monthlyFuelCost = (km * 30 * fuelPrice) / 15; // 15 km/l avg
    const monthlyEvCost = (km * 30 * 8) / 7; // 7 km/unit avg, 8 rs/unit
    const monthlySavings = monthlyFuelCost - monthlyEvCost;

    return (
        <section id="calculator" className="py-40 bg-white overflow-hidden relative">
            {/* Background Kinetic Glow */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-yellow/5 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-eco/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="label-caps !text-yellow glow-yellow !mb-6">Profit Simulator</span>
                        <h2 className="text-primary font-black text-6xl md:text-8xl uppercase italic tracking-tighter leading-[0.8] mb-16">
                            CALCULATE <br />
                            <span className="text-gradient">THE UPGRADE.</span>
                        </h2>

                        <div className="space-y-12 bg-white/50 backdrop-blur-xl p-14 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
                            <div className="space-y-8">
                                <div className="flex justify-between items-end text-primary font-black uppercase tracking-tighter text-[11px] italic">
                                    <label className="text-slate-400 tracking-[0.3em]">DAILY DRIVE DISTANCE</label>
                                    <span className="text-5xl font-black text-primary italic leading-none">{km}<span className="text-xl text-slate-300 ml-2">KM</span></span>
                                </div>
                                <div className="relative h-6 flex items-center">
                                    <input
                                        type="range" min="10" max="250" step="10"
                                        value={km} onChange={(e) => setKm(parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-eco transition-all hover:h-3 focus:h-3"
                                    />
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="flex justify-between items-end text-primary font-black uppercase tracking-tighter text-[11px] italic">
                                    <label className="text-slate-400 tracking-[0.3em]">FUEL COST (INR/L)</label>
                                    <span className="text-5xl font-black text-primary italic leading-none">₹{fuelPrice}</span>
                                </div>
                                <div className="relative h-6 flex items-center">
                                    <input
                                        type="range" min="90" max="150" step="1"
                                        value={fuelPrice} onChange={(e) => setFuelPrice(parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-yellow transition-all hover:h-3 focus:h-3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-primary p-20 rounded-[4rem] text-white overflow-hidden relative border-4 border-white/5 shadow-[0_0_100px_rgba(0,230,150,0.1)]">

                        {/* Mesh gradient overlay for results */}
                        <div className="absolute inset-0 bg-gradient-to-br from-eco/20 via-transparent to-accent/20 opacity-40"></div>
                        <div className="absolute top-0 right-0 w-80 h-80 bg-eco/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10 space-y-20">
                            <div>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="h-2 w-12 bg-eco rounded-full glow-green"></div>
                                    <p className="text-[11px] font-black uppercase tracking-[0.5em] text-eco italic">CASHFLOW OPTIMIZATION</p>
                                </div>

                                <div className="space-y-12">
                                    <motion.div
                                        key={`m-${monthlySavings}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        <h3 className="text-8xl font-black text-white italic mb-2 tracking-tighter leading-none">
                                            ₹{Math.round(monthlySavings).toLocaleString()}
                                        </h3>
                                        <p className="text-eco font-black uppercase tracking-[0.4em] text-[10px] italic flex items-center gap-3">
                                            MONTHLY PROFIT <span className="h-[1px] w-20 bg-eco/20"></span>
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        key={`a-${monthlySavings * 12}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <h3 className="text-8xl font-black text-white italic mb-2 tracking-tighter leading-none">
                                            ₹{Math.round(monthlySavings * 12).toLocaleString()}
                                        </h3>
                                        <p className="text-white/30 font-black uppercase tracking-[0.4em] text-[10px] italic flex items-center gap-3">
                                            ANNUAL PROFIT <span className="h-[1px] w-20 bg-white/5"></span>
                                        </p>
                                    </motion.div>
                                </div>
                            </div>

                            <button className="btn-primary w-full !py-8 !rounded-3xl !text-sm !bg-white !text-primary hover:!bg-eco hover:!text-white border-none shadow-2xl">
                                REQUEST CUSTOM ANALYSIS
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SavingsCalculator;
