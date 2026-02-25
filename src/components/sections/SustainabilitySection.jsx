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
            title: "Technical Quality",
            icon: <ShieldCheck size={20} />,
            metric: "95% RECYCLABLE",
            desc: "Sustainable components used in our flagship charging station designs."
        }
    ];

    return (
        <section id="sustainability" className="relative min-h-screen flex items-center bg-primary-surface dark:bg-primary transition-colors duration-300 overflow-hidden py-24 md:py-40">
            {/* Technical Background */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-green/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                    <div className="lg:col-span-12 mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <span className="label-caps !text-accent-green !mb-8">Environmental Performance</span>
                            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-primary-light dark:text-white mb-12 tracking-tighter uppercase leading-[0.9]">
                                SUSTAINABLE <br />
                                <span className="text-accent-green">PRECISION.</span>
                            </h2>
                        </motion.div>
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
                                    <div className="card-professional !p-12 h-full bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-accent-green/40 transition-all">
                                        <div className="text-accent-green mb-8">{item.icon}</div>
                                        <div>
                                            <p className="text-[10px] font-black text-accent-green/60 mb-2 tracking-widest uppercase">{item.metric}</p>
                                            <h4 className="text-2xl font-black text-primary-light dark:text-white mb-4 uppercase">{item.title}</h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="card-professional bg-primary dark:bg-black p-12 border-none shadow-2xl relative overflow-hidden">
                            {/* Dashboard Feel */}
                            <div className="absolute top-0 right-0 p-8 opacity-[0.05]">
                                <Globe className="w-32 h-32 text-white" />
                            </div>

                            <div className="relative z-10">
                                <span className="text-[10px] font-black uppercase text-accent-green tracking-widest block mb-12">System Efficiency Index</span>
                                <h3 className="text-8xl font-black text-white leading-none tracking-tighter mb-4 italic">
                                    9.9<span className="text-2xl text-accent-green opacity-50">/10</span>
                                </h3>
                                <p className="text-white/40 font-bold uppercase tracking-widest text-xs mb-12 border-l border-accent-green pl-4">Optimal Performance</p>

                                <div className="space-y-10">
                                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "95%" }}
                                            transition={{ duration: 2, ease: "circOut" }}
                                            className="h-full bg-accent-green"
                                        />
                                    </div>
                                    <p className="text-sm text-white/80 font-medium leading-relaxed">
                                        Our infrastructure is engineered for maximum uptime and minimum environmental overhead.
                                    </p>
                                    <button className="w-full btn-professional-primary !py-4">
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
