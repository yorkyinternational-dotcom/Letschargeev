import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sun, Zap, ShieldCheck, Globe, Award } from 'lucide-react';
import heroVideo from '../../assets/videos/hero_video.mp4';

const SustainabilitySection = () => {
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
            title: "Eco-Hardware",
            icon: <ShieldCheck size={20} />,
            metric: "95% RECYCLABLE",
            desc: "Sustainable components used in our flagship charging station designs."
        }
    ];

    return (
        <section id="sustainability" className="relative min-h-screen flex items-center bg-white overflow-hidden py-40">
            {/* Vibrant Mesh Background Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 w-[800px] h-[800px] bg-eco/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"
                />
                <motion.div
                    animate={{ scale: [1.3, 1, 1.3], x: [0, 50, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end">
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-center gap-4 mb-12">
                                <div className="h-2 w-2 rounded-full bg-eco shadow-[0_0_15px_rgba(0,230,150,0.8)] animate-pulse"></div>
                                <span className="label-caps !text-slate-400 !mb-0 tracking-[0.4em]">Environmental Impact Audit</span>
                            </div>

                            <h2 className="text-[10vw] lg:text-[9rem] font-black text-primary mb-16 tracking-tighter uppercase leading-[0.75] relative italic">
                                ECO <br />
                                <span className="text-gradient ml-[5%]">ENERGY.</span>
                                <div className="absolute -top-10 left-0 text-[10px] font-black text-eco/40 tracking-[0.8em] uppercase hidden md:block">The Sustainable Shift</div>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-5xl">
                                <p className="text-2xl md:text-3xl text-primary font-black leading-none tracking-tighter italic">
                                    DESIGNING THE FUTURE <br />
                                    <span className="text-slate-400">OF CLEAN MOBILITY.</span>
                                </p>

                                <div className="flex flex-wrap gap-12 border-l-2 border-primary/5 pl-12">
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Net Zero Target</p>
                                        <p className="text-5xl font-black text-primary italic tracking-tighter glow-primary">2030</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Status</p>
                                        <p className="text-5xl font-black text-eco italic tracking-tighter glow-green">ACTIVE</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-32">
                            {initiatives.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.8 }}
                                    className="group"
                                >
                                    <div className="card-modern !p-10 aspect-square flex flex-col justify-between overflow-hidden relative">
                                        <div className="relative z-10 text-primary group-hover:text-eco transition-colors scale-125 origin-left">{item.icon}</div>
                                        <div className="relative z-10">
                                            <p className="text-[10px] font-black text-eco mb-2 tracking-[0.2em] uppercase italic">{item.metric}</p>
                                            <h4 className="text-xl font-black text-primary mb-3 tracking-tighter leading-none uppercase italic">{item.title}</h4>
                                            <p className="text-[10px] text-slate-500 leading-tight uppercase tracking-widest font-bold">{item.desc}</p>
                                        </div>
                                        {/* Background Neon Index */}
                                        <div className="absolute top-4 right-6 opacity-5 focus:opacity-10 group-hover:opacity-20 transition-opacity text-6xl font-black italic">
                                            {i + 1}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Dashboard Metric Widget - High Impact GenZ Style */}
                    <div className="lg:col-span-4">
                        <div className="relative group">
                            <motion.div
                                animate={{
                                    boxShadow: ["0 0 50px rgba(0,230,150,0.1)", "0 0 100px rgba(0,230,150,0.3)", "0 0 50px rgba(0,230,150,0.1)"]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="relative bg-primary p-1 rounded-[3.5rem] shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-all duration-700">

                                {/* Inner Mesh Glow */}
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-eco/20 via-transparent to-accent/20"></div>

                                <div className="bg-primary rounded-[3.3rem] p-14 relative overflow-hidden h-full border border-white/5">
                                    <div className="absolute top-0 right-0 p-10 opacity-20 rotate-12">
                                        <Globe className="w-24 h-24 text-white" />
                                    </div>

                                    <div className="flex items-center gap-4 mb-14 border-b border-white/10 pb-8">
                                        <div className="w-3 h-3 rounded-full bg-eco shadow-[0_0_15px_rgba(0,230,150,1)]"></div>
                                        <span className="text-[12px] font-black uppercase text-white/60 italic tracking-[0.2em]">Live Pulse Metrics</span>
                                    </div>

                                    <div className="relative mb-16 px-4">
                                        <motion.h3
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="text-[10rem] md:text-[12rem] font-black text-white leading-[0.7] italic tracking-tighter flex items-start"
                                        >
                                            9.9
                                            <span className="text-4xl font-black text-eco mt-4 ml-2 glow-green">/10</span>
                                        </motion.h3>
                                    </div>

                                    <div className="space-y-12 pt-14 border-t border-white/10">
                                        <div className="grid grid-cols-2 gap-8">
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-black uppercase text-white/40 tracking-[0.3em]">Precision</p>
                                                <p className="text-3xl font-black text-white tracking-tighter italic glow-white">S-TIER</p>
                                            </div>
                                            <div className="space-y-1 text-right">
                                                <p className="text-[10px] font-black uppercase text-white/40 tracking-[0.3em]">Stability</p>
                                                <p className="text-3xl font-black text-eco tracking-tighter italic glow-green">99.9%</p>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="h-4 bg-white/5 rounded-full overflow-hidden p-[2px] border border-white/5">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "95%" }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 2.5, delay: 0.5, ease: "circOut" }}
                                                    className="h-full bg-gradient-to-r from-eco to-accent rounded-full relative"
                                                />
                                            </div>
                                            <div className="flex justify-between items-center text-[10px] font-black uppercase text-white/40 tracking-[0.5em]">
                                                <span>Low</span>
                                                <span className="text-eco">Optimal Pulse</span>
                                            </div>
                                        </div>

                                        <p className="text-[12px] text-white/80 font-black leading-tight uppercase tracking-tighter border-l-4 border-eco pl-6 py-3">
                                            LCEv is the pulse <br /> of NEW era mobility.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SustainabilitySection;
