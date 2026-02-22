import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SavingsCalculator = () => {
    const [km, setKm] = useState(50);
    const [fuelPrice, setFuelPrice] = useState(100);

    const monthlyFuelCost = (km * 30 * fuelPrice) / 15; // 15 km/l avg
    const monthlyEvCost = (km * 30 * 8) / 7; // 7 km/unit avg, 8 rs/unit
    const monthlySavings = monthlyFuelCost - monthlyEvCost;

    return (
        <section id="calculator" className="py-40 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="label-caps">Savings Simulator</span>
                        <h2 className="mb-12 uppercase">Calculate your <span className="text-eco italic">impact.</span></h2>

                        <div className="space-y-12 bg-white p-12 rounded-[2rem] border border-slate-200">
                            <div className="space-y-6">
                                <div className="flex justify-between items-center text-primary font-black uppercase tracking-widest text-[10px]">
                                    <label>Daily Distance (KM)</label>
                                    <span className="text-2xl">{km} km</span>
                                </div>
                                <input
                                    type="range" min="10" max="250" step="10"
                                    value={km} onChange={(e) => setKm(parseInt(e.target.value))}
                                    className="w-full h-1 bg-slate-100 rounded-full appearance-none cursor-pointer accent-eco"
                                />
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center text-primary font-black uppercase tracking-widest text-[10px]">
                                    <label>Fuel Price (₹/L)</label>
                                    <span className="text-2xl">₹{fuelPrice}</span>
                                </div>
                                <input
                                    type="range" min="90" max="120" step="1"
                                    value={fuelPrice} onChange={(e) => setFuelPrice(parseInt(e.target.value))}
                                    className="w-full h-1 bg-slate-100 rounded-full appearance-none cursor-pointer accent-eco"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-primary p-16 rounded-[3rem] text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-eco/10 blur-[100px] rounded-full"></div>

                        <div className="relative z-10 space-y-16">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-eco mb-8">Estimated Savings</p>
                                <div className="space-y-10">
                                    <motion.div
                                        key={monthlySavings}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        <h3 className="text-7xl font-black text-white italic mb-2 tracking-tighter">
                                            ₹{Math.round(monthlySavings).toLocaleString()}
                                        </h3>
                                        <p className="text-white/30 font-black uppercase tracking-widest text-[9px]">Monthly Profit</p>
                                    </motion.div>

                                    <div className="h-[1px] bg-white/10 w-full" />

                                    <motion.div
                                        key={monthlySavings * 12}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        <h3 className="text-7xl font-black text-white italic mb-2 tracking-tighter">
                                            ₹{Math.round(monthlySavings * 12).toLocaleString()}
                                        </h3>
                                        <p className="text-white/30 font-black uppercase tracking-widest text-[9px]">Annual Profit</p>
                                    </motion.div>
                                </div>
                            </div>

                            <button className="btn-primary w-full !bg-white !text-primary hover:!bg-eco hover:!text-white">
                                START YOUR TRANSITION
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SavingsCalculator;
