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
                                <span className="text-accent-green font-black tracking-widest text-[10px] uppercase mb-6 block">Solution Profile</span>
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
                                        <p className="text-[10px] font-black uppercase tracking-widest text-accent-green mb-6">Technical Metrics</p>
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
                                        <p className="text-[10px] font-black uppercase tracking-widest text-accent-green mb-6">Industry Application</p>
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
        <section id="solutions" className="py-24 md:py-40 bg-primary-surface dark:bg-primary transition-colors duration-300 relative overflow-hidden">
            {/* Tech Background */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-24">
                    <span className="label-caps !text-accent-green !mb-6">Integrated Solutions</span>
                    <h2 className="max-w-4xl text-primary-light dark:text-white font-black text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9]">
                        SCALABLE <br />
                        <span className="text-accent-green">ECOSYSTEM.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {solutions.map((solution, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedSolution(solution)}
                            className="group p-12 bg-white dark:bg-white/5 rounded-[2.5rem] border border-slate-200 dark:border-white/10 hover:border-accent-green transition-all cursor-pointer relative overflow-hidden min-h-[500px] flex flex-col justify-between shadow-xl"
                        >
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-primary text-white shadow-xl flex items-center justify-center mb-10 group-hover:bg-accent-green group-hover:text-primary transition-all duration-500">
                                    <solution.icon size={28} />
                                </div>
                                <span className="text-accent-green font-black mb-6 block tracking-widest text-[10px]">ID_{solution.id}</span>
                                <h3 className="text-4xl font-black mb-6 leading-none uppercase text-primary-light dark:text-white group-hover:text-accent-green transition-colors tracking-tighter">
                                    {solution.title}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed uppercase tracking-tight text-sm">{solution.description}</p>
                            </div>

                            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest group-hover:text-accent-green transition-all">
                                View Technical Spec
                                <div className="w-8 h-px bg-slate-300 dark:bg-white/20 group-hover:bg-accent-green transition-all"></div>
                            </div>

                            {/* Technical Watermark */}
                            <div className="absolute -bottom-6 -right-6 text-7xl font-black opacity-[0.02] dark:opacity-[0.05] text-primary dark:text-white select-none">
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
