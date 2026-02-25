import React from 'react';
import { motion } from 'framer-motion';

const HardwareSection = () => {
    const products = [
        {
            name: "LCEv DC Fast 60kW",
            category: "Commercial",
            specs: ["Dual Gun", "OCPP 1.6J", "98% Efficiency"],
            image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "LCEv AC Wallbox 7.4kW",
            category: "Residential",
            specs: ["Type 2 Plug", "Wi-Fi Enabled", "IP65 Rated"],
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "LCEv Hub 360kW",
            category: "Industrial",
            specs: ["Ultra-Fast", "Smart Grid Sync", "Multi-Vehicle"],
            image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section id="products" className="py-24 md:py-40 bg-primary-surface dark:bg-primary transition-colors duration-300 relative overflow-hidden">
            {/* Minimalist Tech Background */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-green/5 rounded-full blur-[100px] -translate-x-1/2 -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <span className="label-caps !text-accent-green !mb-6">Technical Infrastructure</span>
                        <h2 className="max-w-3xl text-primary-light dark:text-white font-black text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9]">
                            HARDWARE <br />
                            <span className="text-accent-green">EXCELLENCE.</span>
                        </h2>
                    </div>
                    <p className="text-xl text-slate-500 dark:text-slate-400 font-bold tracking-tight uppercase md:max-w-xs leading-none">
                        Industrial grade. <br />
                        IP65 Rated. <br />
                        <span className="text-accent-green">OCPP Compliant.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {products.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="group"
                        >
                            <div className="card-professional !p-0 overflow-hidden relative border-slate-200 dark:border-white/10 bg-white dark:bg-white/5">
                                <div className="aspect-[4/3] bg-slate-900 overflow-hidden relative">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.8 }}
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>

                                    {/* Tech Badge */}
                                    <div className="absolute top-6 left-6 px-4 py-2 bg-accent-green text-primary-light font-black text-[9px] rounded-lg tracking-widest uppercase">
                                        CERTIFIED
                                    </div>
                                </div>

                                <div className="p-10 relative">
                                    <div className="flex justify-between items-start mb-6">
                                        <p className="text-[10px] font-black text-accent-green uppercase tracking-[0.3em]">{product.category}</p>
                                        <div className="flex gap-1">
                                            {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-slate-300 dark:bg-white/20"></div>)}
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-black text-primary-light dark:text-white uppercase tracking-tighter leading-none mb-8 group-hover:text-accent-green transition-colors">
                                        {product.name.split(' ').slice(1).join(' ')}
                                    </h3>

                                    <div className="flex flex-col gap-3">
                                        {product.specs.map(spec => (
                                            <div key={spec} className="flex items-center gap-2 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-green/40"></div>
                                                {spec}
                                            </div>
                                        ))}
                                    </div>

                                    <button className="mt-10 w-full btn-professional border border-slate-200 dark:border-white/10 text-primary-light dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 !text-[10px]">
                                        DOWNLOAD DATASHEET
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
