import React from 'react';

const StatsSection = () => {
    const stats = [
        { label: "Active Hubs", value: "1,200+", suffix: "Units" },
        { label: "Cities Covered", value: "240+", suffix: "India" },
        { label: "Reliability", value: "99.9%", suffix: "Uptime" },
        { label: "Pioneers", value: "10k+", suffix: "Users" }
    ];

    return (
        <section className="py-32 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col">
                            <p className="text-[10px] font-black text-eco uppercase tracking-[0.5em] mb-4">
                                {stat.label}
                            </p>
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-2">
                                {stat.value}
                            </h2>
                            <p className="text-[9px] font-black text-white/30 uppercase tracking-widest">
                                {stat.suffix}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
