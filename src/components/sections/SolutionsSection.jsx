import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Activity, Truck, Network, ShieldCheck, Cpu, BarChart3, X } from 'lucide-react';

const SolutionModal = ({ solution, isOpen, onClose }) => {
    if (!solution) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-primary/95 dark:bg-black/95 backdrop-blur-2xl"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl z-10 border border-slate-200 dark:border-white/10"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 p-3 rounded-xl bg-slate-100 dark:bg-white/5 text-primary-light dark:text-white hover:bg-accent-green hover:text-primary transition-all z-20"
                        >
                            <X size={20} />
                        </button>

                        <div className="grid lg:grid-cols-2">
                            <div className="p-12 lg:p-16 bg-slate-50 dark:bg-black/20">
                                <span className="text-slate-400 dark:text-slate-500 font-black tracking-widest text-[10px] uppercase mb-6 block">Solution Profile</span>
                                <h2 className="text-3xl md:text-5xl font-black text-primary-light dark:text-white mb-8 leading-tight uppercase tracking-tighter">{solution.title}</h2>
                                <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-12 font-medium">{solution.fullDescription}</p>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-primary-light dark:text-white font-black uppercase tracking-widest text-[10px]">
                                        <div className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center">
                                            <Cpu className="text-accent-green w-4 h-4" />
                                        </div>
                                        <span>OCPP 2.0.1 COMPLIANT</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-primary-light dark:text-white font-black uppercase tracking-widest text-[10px]">
                                        <div className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center">
                                            <ShieldCheck className="text-accent-green w-4 h-4" />
                                        </div>
                                        <span>99.99% SYSTEM UPTIME</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-12 lg:p-16 flex flex-col justify-center">
                                <div className="space-y-12">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">Technical Metrics</p>
                                        <div className="grid grid-cols-2 gap-8">
                                            {solution.metrics.map((metric, i) => (
                                                <div key={i}>
                                                    <p className="text-3xl font-black text-primary-light dark:text-white mb-1 tracking-tighter uppercase">{metric.value}</p>
                                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">{metric.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-12 border-t border-slate-100 dark:border-white/5">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">Industry Application</p>
                                        <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">{solution.caseStudy}</p>
                                    </div>

                                    <button className="btn-professional-primary w-full !py-5 font-black uppercase tracking-widest text-xs">
                                        Request Blueprint
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const SolutionsSection = () => {
    const [selectedSolution, setSelectedSolution] = useState(null);

    const solutions = [
        {
            id: '01',
            title: "Residential Charging",
            description: "Smart home charging systems with AI-driven load management and mobile control.",
            fullDescription: "Safe, intelligent charging for your home. Our residential systems integrate with solar panels and adjust charging speeds based on household demand to prevent grid overload.",
            icon: Cpu,
            metrics: [
                { label: "Efficiency", value: "98.5%" },
                { label: "Solar Link", value: "Ready" }
            ],
            caseStudy: "Deployed in 5000+ homes across India, providing seamless overnight charging with zero carbon footprint."
        },
        {
            id: '02',
            title: "Commercial Hubs",
            description: "High-uptime public charging infrastructure with automated billing and network management.",
            fullDescription: "Monetizable charging solutions for malls, hospitals, and parking lots. Scalable infrastructure with OCPP 2.0.1 compliance and multi-layered security.",
            icon: Network,
            metrics: [
                { label: "Uptime", value: "99.9%" },
                { label: "Price/kWh", value: "Dynamic" }
            ],
            caseStudy: "Infrastructure partner for major retail chains, supporting 24/7 high-traffic public charging cycles."
        },
        {
            id: '03',
            title: "Fleet Operations",
            description: "Custom management dashboards for logistics fleets to maximize uptime and minimize TCO.",
            fullDescription: "Military-grade fleet management. Monitor battery health, schedule charging sessions, and optimize energy procurement in real-time.",
            icon: Truck,
            metrics: [
                { label: "Ops Save", value: "22%" },
                { label: "Active EVs", value: "1000+" }
            ],
            caseStudy: "Providing full-stack fleet electrification support for India's leading e-logistics companies."
        }
    ];

    return (
        <section id="solutions" className="py-16 md:py-24 lg:py-16 md:py-32 bg-primary-surface dark:bg-primary transition-colors duration-300 relative overflow-hidden">
            {/* Tech Background */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-12 md:mb-16">
                    <span className="label-caps !text-slate-400 dark:!text-slate-500 !mb-8">Technical Ecosystem</span>
                    <h2 className="max-w-5xl text-primary-light dark:text-white font-black text-6xl md:text-9xl uppercase tracking-[1] leading-[0.8]">
                        MODULAR <br />
                        <span className="text-accent-green">SOLUTIONS.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {solutions.map((solution, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -20 }}
                            onClick={() => setSelectedSolution(solution)}
                            className="group p-12 glass-panel rounded-[3rem] hover:border-accent-green/40 transition-all duration-700 cursor-pointer relative overflow-hidden h-full flex flex-col justify-between shadow-2xl tech-glow"
                        >
                            <div className="relative z-10">
                                <div className="w-20 h-20 rounded-2xl bg-white/5 text-primary-light dark:text-white flex items-center justify-center mb-12 group-hover:bg-accent-green group-hover:text-primary transition-all duration-500 border border-white/10 relative overflow-hidden">
                                    {/* Radar Sweep Animation */}
                                    <div className="absolute inset-0 bg-accent-green/20 scale-0 group-hover:scale-150 rounded-full transition-transform duration-1000 opacity-0 group-hover:opacity-100 animate-ping"></div>
                                    <solution.icon size={32} strokeWidth={1.5} className="relative z-10" />
                                </div>
                                <span className="text-slate-400 dark:text-slate-500 font-black mb-8 block tracking-[0.4em] text-[10px]">NETWORK_NODE / {solution.id}</span>
                                <h3 className="text-4xl md:text-5xl font-black mb-8 leading-none uppercase text-primary-light dark:text-white group-hover:text-accent-green transition-colors tracking-tighter italic">
                                    {solution.title}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed uppercase tracking-tight text-xs border-l-2 border-accent-green/20 pl-6">{solution.description}</p>
                            </div>

                            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-accent-green transition-all pt-12">
                                <span className="opacity-40">RETRIEVE_ENGINEERING_DATA</span>
                                <div className="w-12 h-px bg-slate-300 dark:bg-white/20 group-hover:bg-accent-green group-hover:w-20 transition-all duration-500"></div>
                            </div>

                            {/* Architectural Grid Watermark */}
                            <div className="absolute -bottom-10 -right-10 text-[10rem] font-black opacity-[0.02] dark:opacity-[0.03] text-primary dark:text-white select-none italic">
                                {solution.id}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <SolutionModal
                solution={selectedSolution}
                isOpen={!!selectedSolution}
                onClose={() => setSelectedSolution(null)}
            />
        </section>
    );
};

export default SolutionsSection;
