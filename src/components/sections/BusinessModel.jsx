import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Cpu, Settings } from 'lucide-react';

const BusinessModel = () => {
    const features = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-accent-green" />,
            title: "Full Asset Ownership",
            description: "You own the hardware outright. No hidden lease terms or long-term liability beyond the equipment life cycle."
        },
        {
            icon: <Settings className="w-8 h-8 text-accent-green" />,
            title: "Complete Control",
            description: "Define your own charging tariffs, access rules, and operating hours via our intuitive CMS dashboard."
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-accent-green" />,
            title: "100% Revenue Retention",
            description: "Keep every rupee generated from charging sessions. We take zero commission on your energy sales."
        },
        {
            icon: <Cpu className="w-8 h-8 text-accent-green" />,
            title: "Direct Servicing",
            description: "Priority technical support and maintenance directly from the provider, ensuring 99.9% hardware uptime."
        }
    ];

    return (
        <section className="py-24 md:py-40 bg-white dark:bg-[#0A0A0A] transition-colors duration-500 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/10 border border-accent-green/20 mb-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-green">Business Strategy</span>
                        </div>
                        <h2 className="text-primary-light dark:text-white font-bold text-5xl md:text-7xl tracking-tight leading-[1] mb-8">
                            The <span className="text-accent-green">Direct Acquisition</span> Model.
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                            We empower businesses to lead the energy transition with a transparent,
                            ownership-first approach. Unlike traditional revenue-sharing models,
                            we provide the tools and hardware for you to own the infrastructure.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {features.map((feature, idx) => (
                                <div key={idx} className="group">
                                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-primary-light dark:text-white mb-2 uppercase tracking-tight">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-green/20 via-transparent to-accent-yellow/10"></div>

                            <div className="absolute inset-0 flex items-center justify-center p-12 lg:p-20">
                                <div className="text-center">
                                    <div className="text-9xl font-black text-primary-light dark:text-white opacity-10 absolute inset-0 flex items-center justify-center pointer-events-none">
                                        100%
                                    </div>
                                    <div className="relative z-10">
                                        <span className="text-8xl md:text-[12rem] font-bold text-accent-green leading-none">100</span>
                                        <span className="text-4xl md:text-6xl font-bold text-accent-green opacity-50">%</span>
                                        <p className="text-xl md:text-2xl font-bold text-primary-light dark:text-white uppercase tracking-[0.3em] mt-2">
                                            Revenue Retention
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-10 right-10 w-24 h-24 border-t-2 border-r-2 border-accent-green/30 rounded-tr-3xl"></div>
                            <div className="absolute bottom-10 left-10 w-24 h-24 border-b-2 border-l-2 border-accent-green/30 rounded-bl-3xl"></div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default BusinessModel;
