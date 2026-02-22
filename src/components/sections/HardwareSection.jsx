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
        <section id="products" className="py-40 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-24">
                    <span className="label-caps !mb-4">Hardware Portfolio</span>
                    <h2 className="max-w-3xl">BUILT FOR <span className="text-accent italic">ENDURANCE.</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {products.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group border-t border-slate-200 pt-10"
                        >
                            <div className="aspect-[4/3] bg-slate-50 mb-8 overflow-hidden rounded-2xl">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <div className="space-y-4">
                                <p className="text-[10px] font-black text-accent uppercase tracking-widest">{product.category}</p>
                                <h3 className="text-3xl font-black">{product.name}</h3>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    {product.specs.map(spec => (
                                        <span key={spec} className="text-[9px] font-black bg-slate-50 px-4 py-2 rounded-full uppercase tracking-widest text-primary/40">
                                            {spec}
                                        </span>
                                    ))}
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
