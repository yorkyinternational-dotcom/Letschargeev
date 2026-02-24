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
                        className="absolute inset-0 bg-primary/95 backdrop-blur-2xl"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl z-10"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 p-3 rounded-full bg-slate-100 text-primary hover:bg-accent hover:text-white transition-all z-20"
                        >
                            <X size={24} />
                        </button>

                        <div className="grid lg:grid-cols-2">
                            <div className="p-12 lg:p-20 bg-slate-50">
                                <span className="text-eco font-bold tracking-widest text-[10px] uppercase mb-6 block italic">Solution Profile</span>
                                <h2 className="text-3xl md:text-5xl font-black text-primary mb-8 leading-tight uppercase italic">{solution.title}</h2>
                                <p className="text-xl text-slate-500 leading-relaxed mb-12 font-medium">{solution.fullDescription}</p>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-primary font-black uppercase tracking-widest text-xs">
                                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                            <Cpu className="text-accent w-4 h-4" />
                                        </div>
                                        <span>OCPP 2.0.1 COMPLIANT</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-primary font-black uppercase tracking-widest text-xs">
                                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                            <ShieldCheck className="text-accent w-4 h-4" />
                                        </div>
                                        <span>99.99% SYSTEM UPTIME</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-12 lg:p-20 flex flex-col justify-center">
                                <div className="space-y-12">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-eco mb-6 italic">Technical Metrics</p>
                                        <div className="grid grid-cols-2 gap-8">
                                            {solution.metrics.map((metric, i) => (
                                                <div key={i}>
                                                    <p className="text-3xl font-black text-primary mb-1 tracking-tighter">{metric.value}</p>
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{metric.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-12 border-t border-slate-100">
                                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-eco mb-6 italic">Industry Application</p>
                                        <p className="text-sm font-bold text-primary leading-loose">{solution.caseStudy}</p>
                                    </div>

                                    <button className="btn-primary w-full !py-6 !rounded-[1.5rem]">
                                        REQUEST DEPLOYMENT BLUEPRINT
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
            title: "Charging Management",
            description: "Full-stack IoT solution for network operators to monitor, manage, and monetize infrastructure.",
            fullDescription: "A sophisticated CMS platform designed for mission-critical EV networks. Real-time load management, automated billing, and prognostic maintenance integration.",
            icon: Activity,
            metrics: [
                { label: "Throughput", value: "2.5M+" },
                { label: "Sync Latency", value: "<100ms" }
            ],
            caseStudy: "Successfully deployed across 500+ semi-public charging clusters, reducing operational overhead by 40%."
        },
        {
            id: '02',
            title: "Fleet Operations",
            description: "Custom dashboards for logistics companies to optimize energy consumption and vehicle uptime.",
            fullDescription: "Precision-engineered for heavy-duty electric fleets. Dynamic charging scheduling based on route data and TCO-optimized energy procurement.",
            icon: Truck,
            metrics: [
                { label: "Optimization", value: "32%" },
                { label: "Active Fleets", value: "120+" }
            ],
            caseStudy: "Primary infrastructure partner for India's largest e-commerce delivery fleet across 15 Tier-1 cities."
        },
        {
            id: '03',
            title: "Smart Grid Integration",
            description: "Cloud-based load balancing and energy management for sustainable urban infrastructure.",
            fullDescription: "V2G-ready infrastructure facilitating seamless energy exchange between vehicles and the grid. Predictive load balancing for zero-stress city grids.",
            icon: Network,
            metrics: [
                { label: "Grid Stability", value: "99.8%" },
                { label: "Renewable Mix", value: "65%" }
            ],
            caseStudy: "Integrated with municipal utility grids to support dynamic demand-response during peak evening cycles."
        }
    ];

    return (
        <section id="solutions" className="py-24 md:py-40 bg-[#FAFAFA] relative overflow-hidden">
            {/* Subtle mesh background for solutions */}
            <div className="absolute inset-0 -z-10 bg-white">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00E696 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-24">
                    <span className="label-caps !text-accent !mb-6">Integrated Solutions</span>
                    <h2 className="max-w-4xl text-primary font-black text-6xl md:text-8xl uppercase italic tracking-tighter leading-[0.8]">
                        SCALABLE <br />
                        <span className="text-gradient">ECOSYSTEM.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {solutions.map((solution, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -15, scale: 1.02 }}
                            onClick={() => setSelectedSolution(solution)}
                            className="group p-14 bg-white rounded-[3.5rem] border border-slate-100 hover:border-eco/40 hover:shadow-2xl hover:shadow-eco/10 transition-all cursor-pointer relative overflow-hidden min-h-[550px] flex flex-col justify-between"
                        >
                            <div className="relative z-10">
                                <div className="w-20 h-20 rounded-3xl bg-primary text-white shadow-xl flex items-center justify-center mb-12 group-hover:bg-eco group-hover:scale-110 transition-all duration-500">
                                    <solution.icon size={36} />
                                </div>
                                <span className="text-eco font-black italic mb-8 block tracking-[0.4em] text-xs">ID_{solution.id}</span>
                                <h3 className="text-4xl font-black mb-8 leading-none uppercase italic text-primary group-hover:text-eco transition-colors">
                                    {solution.title.split(' ').map((word, i) => (
                                        <span key={i}>{word} <br /></span>
                                    ))}
                                </h3>
                                <p className="text-slate-400 font-bold leading-tight text-lg uppercase tracking-tight">{solution.description}</p>
                            </div>

                            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] group-hover:text-eco transition-all">
                                VIEW TECHNICAL SPEC
                                <div className="w-12 h-1 bg-slate-100 group-hover:bg-eco group-hover:w-20 transition-all"></div>
                            </div>

                            {/* Decorative Background Symbol */}
                            <div className="absolute -bottom-10 -right-10 text-[12rem] font-black italic opacity-[0.02] text-primary rotate-12 group-hover:opacity-[0.05] transition-opacity">
                                SYST
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
