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
        <section id="products" className="py-24 md:py-40 bg-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-eco/5 rounded-full blur-[100px] -translate-x-1/2 -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <span className="label-caps !text-eco glow-green !mb-6">Hardware Portfolio</span>
                        <h2 className="max-w-3xl text-primary font-black text-6xl md:text-8xl uppercase italic tracking-tighter leading-[0.8]">
                            BUILT FOR <br />
                            <span className="text-gradient">ENDURANCE.</span>
                        </h2>
                    </div>
                    <p className="text-xl text-slate-400 font-black tracking-tighter uppercase italic md:max-w-xs leading-none">
                        Industrial grade. <br />
                        Future proof. <br />
                        <span className="text-primary">Neon ready.</span>
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
                            <div className="card-modern !p-0 overflow-hidden relative border-white/10">
                                <div className="aspect-[4/3] bg-slate-900 overflow-hidden">
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.8 }}
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                    />
                                    {/* Neon Layer Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
                                </div>

                                <div className="p-10 relative">
                                    <div className="flex justify-between items-start mb-6">
                                        <p className="text-[10px] font-black text-eco uppercase tracking-[0.3em] italic glow-green">{product.category}</p>
                                        <div className="w-8 h-1 bg-eco rounded-full opacity-20 group-hover:opacity-100 transition-all"></div>
                                    </div>

                                    <h3 className="text-3xl font-black text-primary uppercase italic tracking-tighter leading-none mb-8 group-hover:text-eco transition-colors">
                                        {product.name.split(' ').map((word, i) => (
                                            <span key={i}>{word} <br className={i === 1 ? "block" : "hidden"} /></span>
                                        ))}
                                    </h3>

                                    <div className="flex flex-wrap gap-3">
                                        {product.specs.map(spec => (
                                            <span key={spec} className="text-[9px] font-black bg-primary/5 px-4 py-2 rounded-xl uppercase tracking-widest text-primary/40 border border-transparent group-hover:border-eco/20 group-hover:text-eco transition-all">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Abstract background element */}
                                    <div className="absolute -bottom-10 -right-10 text-[10rem] font-black italic opacity-[0.03] text-primary rotate-12 select-none pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                                        0{idx + 1}
                                    </div>
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
