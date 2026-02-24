import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sun, Zap, ShieldCheck, Globe, Award } from 'lucide-react';
import heroVideo from '../../assets/videos/hero_video.mp4';

const SustainabilitySection = () => {
    const initiatives = [
        {
            title: "Renewable Sync",
            icon: <Sun size={20} />,
            metric: "100%",
            desc: "Dynamic shifting to solar and wind sources during peak generation cycles."
        },
        {
            title: "Smart Grid Tech",
            icon: <Zap size={20} />,
            metric: "AI-DRIVEN",
            desc: "Load balancing to reduce stress on local municipal power grids."
        },
        {
            title: "Zero Emission",
            icon: <Leaf size={20} />,
            metric: "OFFSET",
            desc: "Each station offsets construction footprint within 14 operational months."
        },
        {
            title: "Eco-Hardware",
            icon: <ShieldCheck size={20} />,
            metric: "95% RECYCLABLE",
            desc: "Sustainable components used in our flagship charging station designs."
        }
    ];

    return (
        <section id="sustainability" className="relative min-h-screen flex items-center bg-black overflow-hidden py-40">
            {/* Local Video Background with Tech Overlays */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-30 grayscale-[0.9]"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>

                {/* Tech Overlays */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-95"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute inset-0 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end">
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-center gap-4 mb-12">
                                <div className="h-[1px] w-12 bg-eco shadow-[0_0_10px_#2ed573]"></div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.5em] text-eco drop-shadow-[0_0_8px_rgba(46,213,115,0.4)]">Sustainability Infrastructure</span>
                            </div>

                            <h2 className="text-[12vw] lg:text-[10rem] font-black text-white mb-16 tracking-tighter uppercase leading-[0.8] relative drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                NET <br />
                                <span className="text-eco italic ml-[5%] glow-green">ZERO.</span>
                                <div className="absolute -top-10 left-0 text-[10px] font-black text-white/20 tracking-[1em] uppercase hidden md:block">Corporate Initiative 2026-30</div>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-5xl">
                                <p className="text-xl md:text-2xl text-white/80 font-medium leading-snug tracking-tight">
                                    We are architecting the infrastructure for a carbon-neutral future. Our commitment to sustainability is woven into every charger, code, and connection we build.
                                </p>

                                <div className="flex flex-wrap gap-12">
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-eco drop-shadow-[0_0_5px_rgba(46,213,115,0.3)]">Target Year</p>
                                        <p className="text-4xl font-black text-white italic drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">2030</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-eco drop-shadow-[0_0_5px_rgba(46,213,115,0.3)]">Current Status</p>
                                        <p className="text-4xl font-black text-white italic drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">ON TRACK</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-32">
                            {initiatives.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.8 }}
                                    className="group relative"
                                >
                                    <div className="absolute -inset-[1px] bg-gradient-to-b from-eco/40 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]"></div>
                                    <div className="relative glass-tile !bg-white/[0.05] !border-white/10 !p-10 !rounded-[2rem] hover:!bg-white/[0.08] transition-all aspect-square flex flex-col justify-between overflow-hidden group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(46,213,115,0.2)]">

                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full transform skew-x-[-20deg]"></div>

                                        <div className="relative z-10 text-eco drop-shadow-[0_0_10px_rgba(46,213,115,0.5)] group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                                        <div className="relative z-10">
                                            <p className="text-[9px] font-black text-eco mb-3 tracking-[0.2em] uppercase">{item.metric}</p>
                                            <h4 className="text-lg font-black text-white mb-4 tracking-tight leading-none uppercase drop-shadow-sm">{item.title}</h4>
                                            <p className="text-[11px] text-white/70 leading-relaxed uppercase tracking-tight font-medium">{item.desc}</p>
                                        </div>

                                        {/* Background Decor */}
                                        <div className="absolute top-0 right-0 p-8 opacity-[0.05] text-white text-6xl font-black italic select-none">
                                            0{i + 1}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Dashboard Metric Widget */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-4"
                    >
                        <div className="relative group">
                            {/* Pulsing Neon Aura */}
                            <motion.div
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -inset-6 bg-eco rounded-[4rem] blur-[60px] pointer-events-none"
                            />

                            <div className="relative bg-eco p-[2px] bg-gradient-to-br from-eco via-yellow to-eco/20 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(123,255,0,0.4)] group-hover:scale-[1.02] transition-transform duration-700">
                                <div className="bg-black/15 backdrop-blur-2xl rounded-[2.8rem] p-14 relative overflow-hidden h-full">

                                    {/* Tech Scanline Effect */}
                                    <motion.div
                                        animate={{ y: ["-100%", "1000%"] }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent h-[10%] w-full pointer-events-none"
                                    />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)]"></div>

                                    <div className="absolute top-0 right-0 p-10">
                                        <Globe className="w-16 h-16 text-black/10 transition-transform group-hover:rotate-[25deg] duration-1000" />
                                    </div>

                                    <div className="flex items-center gap-4 mb-14">
                                        <div className="w-2.5 h-2.5 rounded-full bg-eco animate-pulse shadow-[0_0_12px_#2ed573]"></div>
                                        <span className="text-[12px] font-black uppercase text-white italic tracking-[0.2em] drop-shadow-[0_0_8px_rgba(46,213,115,0.4)]">Operational Excellence</span>
                                    </div>

                                    <div className="relative mb-16">
                                        <h3 className="text-[8rem] md:text-[11rem] font-black text-white leading-[0.75] italic tracking-tighter drop-shadow-[0_0_40px_rgba(46,213,115,0.3)] flex items-start">
                                            9.8
                                            <span className="text-3xl font-black text-white/40 mt-4 ml-2">/10</span>
                                        </h3>
                                    </div>

                                    <div className="space-y-10 pt-14 border-t-2 border-white/10">
                                        <div className="grid grid-cols-2 gap-8">
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-black uppercase text-white/40 tracking-widest">Efficiency</p>
                                                <p className="text-2xl font-black text-eco tracking-tight glow-green">AAA+</p>
                                            </div>
                                            <div className="space-y-1 text-right">
                                                <p className="text-[10px] font-black uppercase text-white/40 tracking-widest">Reliability</p>
                                                <p className="text-2xl font-black text-yellow tracking-tight glow-yellow">99.99%</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="h-3 bg-white/10 rounded-full overflow-hidden p-[2px]">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "98%" }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 2.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                                    className="h-full bg-eco rounded-full relative shadow-[0_0_15px_#2ed573]"
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                                                </motion.div>
                                            </div>
                                            <div className="flex justify-between items-center text-[10px] font-black uppercase text-white/20 tracking-[0.3em]">
                                                <span>Baseload</span>
                                                <span>Optimal</span>
                                            </div>
                                        </div>

                                        <p className="text-[11px] text-white/80 font-black leading-relaxed uppercase tracking-tight border-l-4 border-eco pl-5 py-2 drop-shadow-sm">
                                            LCEv leads the industry in infrastructure-to-emission ratios across India tier-1 clusters.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SustainabilitySection;
