import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
    const stats = [
        { label: "Active Hubs", value: "1,200+", suffix: "UNITS" },
        { label: "Cities Covered", value: "240+", suffix: "INDIA" },
        { label: "Reliability", value: "99.9%", suffix: "UPTIME" },
        { label: "User Base", value: "10K+", suffix: "PIONEERS" }
    ];

    return (
        <section className="py-24 md:py-32 bg-primary dark:bg-black transition-colors duration-300 relative overflow-hidden border-y border-white/5">
            {/* Minimalist Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="flex flex-col group relative"
                        >
                            <p className="text-[10px] font-black text-accent-green uppercase tracking-[0.3em] mb-4">
                                / {stat.label}
                            </p>
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 group-hover:text-accent-green transition-colors duration-500">
                                {stat.value}
                            </h2>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-px bg-white/10 group-hover:bg-accent-green/50 transition-all"></div>
                                <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
                                    {stat.suffix}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
