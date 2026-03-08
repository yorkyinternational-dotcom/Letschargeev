import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Sun, Zap, ShieldCheck, Globe, Award, Activity } from 'lucide-react';
import heroVideo from '../../assets/videos/hero_video1.mp4';

const SustainabilitySection = () => {
    const [co2Saved, setCo2Saved] = useState(1240580);
    const [energyDelivered, setEnergyDelivered] = useState(890450);

    useEffect(() => {
        const interval = setInterval(() => {
            setCo2Saved(prev => prev + Math.floor(Math.random() * 5));
            setEnergyDelivered(prev => prev + Math.floor(Math.random() * 3));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const initiatives = [
        {
            title: "Renewable Sync",
            icon: <Sun size={20} />,
            metric: "100%",
            desc: "Dynamic shifting to solar and wind sources during peak generation cycles."
        },
        {
            title: "Smart Grid Tech",
            icon: <Zap size={20} />,
            metric: "AI-DRIVEN",
            desc: "Load balancing to reduce stress on local municipal power grids."
        },
        {
            title: "Zero Emission",
            icon: <Leaf size={20} />,
            metric: "OFFSET",
            desc: "Each station offsets construction footprint within 14 operational months."
        },
        {
            title: "Technical Quality",
            icon: <ShieldCheck size={20} />,
            metric: "95% RECYCLABLE",
            desc: "Sustainable components used in our flagship charging station designs."
        }
    ];

    return (
        <section id="sustainability" className="relative min-h-screen flex items-center bg-primary-surface dark:bg-primary transition-colors duration-300 overflow-hidden py-16 md:py-24 lg:py-32">
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-green/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>

            <div className="absolute inset-0 -z-10 overflow-hidden opacity-50">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale opacity-30">
                    <source src={heroVideo} type="video/mp4" />
                </video>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                    <div className="lg:col-span-12 mb-16">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <span className="label-caps !text-accent-green !mb-8 italic">Environmental Proof-of-Work</span>
                            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-primary-light dark:text-white mb-12 tracking-tighter uppercase leading-[0.9]">
                                SUSTAINABLE <br />
                                <span className="text-accent-green">PRECISION.</span>
                            </h2>
                        </motion.div>

                        {/* Live Impact Dashboard */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-20">
                            <div className="glass-panel p-10 rounded-3xl relative overflow-hidden group tech-glow">
                                <div className="absolute top-4 right-8 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                                    <span className="text-[10px] font-black text-accent-green uppercase tracking-widest leading-none">Live Data Feed</span>
                                </div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Total CO2 Offset (KG)</p>
                                <motion.h3
                                    key={co2Saved}
                                    initial={{ opacity: 0.8 }}
                                    animate={{ opacity: 1 }}
                                    className="text-6xl md:text-8xl font-black text-white tracking-tighter italic"
                                >
                                    {co2Saved.toLocaleString()}
                                </motion.h3>
                                <div className="mt-8 flex items-center gap-2 text-accent-green">
                                    <Activity size={14} />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Active Carbon Sequestration</span>
                                </div>
                            </div>

                            <div className="glass-panel p-10 rounded-3xl relative overflow-hidden group tech-glow">
                                <div className="absolute top-4 right-8 flex items-center gap-2 text-white/40">
                                    <Zap size={14} className="animate-pulse text-accent-green" />
                                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Grid Sync Active</span>
                                </div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Clean Energy Delivered (kWh)</p>
                                <motion.h3
                                    key={energyDelivered}
                                    initial={{ opacity: 0.8 }}
                                    animate={{ opacity: 1 }}
                                    className="text-6xl md:text-8xl font-black text-white tracking-tighter italic"
                                >
                                    {energyDelivered.toLocaleString()}
                                </motion.h3>
                                <div className="mt-8 flex items-center gap-2 text-accent-green">
                                    <Globe size={14} />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Global Energy Transition Progress</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {initiatives.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8 }}
                                    className="group"
                                >
                                    <div className="glass-panel !p-12 h-full hover:border-accent-green/40 transition-all tech-glow">
                                        <div className="text-accent-green mb-8">{item.icon}</div>
                                        <div>
                                            <p className="text-[10px] font-black text-accent-green/60 mb-2 tracking-widest uppercase">{item.metric}</p>
                                            <h4 className="text-2xl font-black text-primary-light dark:text-white mb-4 uppercase">{item.title}</h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed italic">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="glass-panel bg-primary/40 dark:bg-black/40 p-12 border-none shadow-2xl relative overflow-hidden">
                            <div className="relative z-10 text-center lg:text-left">
                                <span className="text-[10px] font-black uppercase text-accent-green tracking-widest block mb-12 italic border-l-2 border-accent-green pl-4">System Efficiency Index</span>
                                <h3 className="text-8xl font-black text-white leading-none tracking-tighter mb-4 italic">
                                    9.9<span className="text-2xl text-accent-green opacity-50">/10</span>
                                </h3>
                                <p className="text-white/40 font-bold uppercase tracking-widest text-[9px] mb-12">Architecture Optimized for 2026 Grid Dynamics</p>

                                <div className="space-y-10">
                                    <div className="h-1.5 glass-morphic rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "95%" }}
                                            transition={{ duration: 2, ease: "circOut" }}
                                            className="h-full bg-accent-green shadow-[0_0_20px_rgba(0,230,150,0.5)]"
                                        />
                                    </div>
                                    <p className="text-xs text-white/60 font-medium leading-relaxed uppercase tracking-tight">
                                        LCEv infrastructure is engineered for maximum uptime and minimum environmental overhead. Verified by industrial audit protocols.
                                    </p>
                                    <button className="w-full btn-professional-primary !py-4 tech-glow">
                                        Request Impact Report
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SustainabilitySection;
