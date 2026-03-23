import React from 'react';
import { motion } from 'framer-motion';
import dcCharger from '../../assets/images/dc_fast_charger.png';
import acWallbox from '../../assets/images/ac_wallbox.png';
import ultraHub from '../../assets/images/ultra_fast_hub.png';

const HardwareSection = () => {
    const products = [
        {
            name: "LCEV-D180X",
            category: "DC FAST CHARGER",
            power: "60kW / 180kW",
            specs: [
                "Dual-port simultaneous distribution",
                "OCPP 2.0.1 Cloud Integrated",
                "IP65 Atmospheric Protection",
                "Autonomous Load Management"
            ],
            image: dcCharger
        },
        {
            name: "LCEV-A22H",
            category: "AC HOME & BUSINESS",
            power: "7.4kW / 22kW",
            specs: [
                "Type 2 Universal Interface",
                "Bi-directional App Integration",
                "High-Tolerance Composite Body",
                "Configurable Load Scheduling"
            ],
            image: acWallbox
        },
        {
            name: "LCEV-HUB-S3",
            category: "FLEET & INDUSTRIAL",
            power: "360kW ULTRA",
            specs: [
                "Multi-dispenser Architecture",
                "Mission-Critical Reliability",
                "Smart Grid Management",
                "Live Health Analytics"
            ],
            image: ultraHub
        }
    ];

    return (
        <section id="hardware" className="py-16 md:py-24 lg:py-16 md:py-32 bg-primary-surface dark:bg-primary transition-colors duration-500 relative overflow-hidden">
            {/* Precision Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#2D2D2D 1px, transparent 1px), linear-gradient(90deg, #2D2D2D 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-12 md:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/10 border border-accent-green/20 mb-6">
                            <span className="w-2 h-2 rounded-full bg-accent-green"></span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Engineering Precision</span>
                        </div>
                        <h2 className="text-primary-light dark:text-white font-bold text-5xl md:text-8xl tracking-tight leading-[1]">
                            HARDWARE <br />
                            <span className="text-accent-green">SPECIFICATIONS.</span>
                        </h2>
                    </div>
                    <div className="lg:max-w-sm">
                        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                            Robust infrastructure engineered for extreme thermal and atmospheric resilience.
                            Certified <span className="text-primary-light dark:text-white font-bold">IP65 Waterproof</span> and
                            <span className="text-primary-light dark:text-white font-bold"> IK10 Impact Resistant.</span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {products.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="group relative tech-glow h-full"
                        >
                            <div className="glass-panel h-full flex flex-col justify-between rounded-[3rem] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(34,197,94,0.15)]">
                                {/* Product Spotlight Container */}
                                <div className="aspect-[1/1] bg-black flex items-center justify-center p-12 relative overflow-hidden shadow-[inset_0_0_60px_rgba(0,0,0,0.8)]">
                                    {/* Geometric Background Element */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/10 rounded-bl-[4rem] group-hover:w-40 group-hover:h-40 transition-all duration-700"></div>

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain drop-shadow-2xl transform scale-90 group-hover:scale-105 transition-transform duration-1000"
                                    />

                                    <div className="absolute top-8 left-8">
                                        <div className="px-4 py-1.5 glass-morphic rounded-full text-[9px] font-black text-white uppercase tracking-[0.2em]">
                                            {product.power}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-12">
                                    <div className="mb-10">
                                        <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-4">{product.category}</p>
                                        <h3 className="text-4xl font-black text-primary-light dark:text-white tracking-tighter leading-none uppercase">
                                            {product.name}
                                        </h3>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 mb-12">
                                        {product.specs.map(spec => (
                                            <div key={spec} className="group/spec flex items-center gap-4 py-3 border-b border-slate-100 dark:border-white/5 last:border-0 relative">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-green group-hover/spec:scale-150 transition-transform"></div>
                                                <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest cursor-help">
                                                    {spec}
                                                </p>
                                                {/* Hidden Blueprint Tooltip */}
                                                <div className="absolute left-full ml-4 opacity-0 group-hover/spec:opacity-100 transition-opacity z-50 pointer-events-none">
                                                    <div className="glass-morphic p-4 rounded-xl min-w-[200px]">
                                                        <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Technical Insight</p>
                                                        <p className="text-[10px] text-white/70 leading-relaxed uppercase">Enterprise-grade {spec.toLowerCase()} integration for maximum reliability.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="btn-professional w-full !py-5 flex items-center justify-center group/btn border-slate-200 dark:border-white/10 hover:border-accent-green text-primary-light dark:text-white">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Full Technical Blueprint</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HardwareSection;
