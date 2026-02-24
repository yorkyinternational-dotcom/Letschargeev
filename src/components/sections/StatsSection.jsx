import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
    const stats = [
        { label: "Active Hubs", value: "1,200+", suffix: "Units" },
        { label: "Cities Covered", value: "240+", suffix: "India" },
        { label: "Reliability", value: "99.9%", suffix: "Uptime" },
        { label: "Pioneers", value: "10k+", suffix: "Users" }
    ];

    return (
        <section className="py-40 bg-primary relative overflow-hidden">
            {/* Background Mesh Glow for Stats */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-eco/5 via-accent/5 to-yellow/5 skew-y-6"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-16 lg:gap-32">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col"
                        >
                            <p className="text-[10px] font-black text-eco uppercase tracking-[0.6em] mb-6 italic glow-green">
                                {stat.label}
                            </p>
                            <motion.h2
                                whileInView={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, delay: 1 }}
                                className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 italic"
                            >
                                {stat.value}
                            </motion.h2>
                            <p className="text-[11px] font-black text-white/30 uppercase tracking-[0.4em] italic border-l-2 border-eco pl-4">
                                {stat.suffix}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
