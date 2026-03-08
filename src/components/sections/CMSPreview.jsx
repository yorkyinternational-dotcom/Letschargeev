import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Activity, PieChart, Shield } from 'lucide-react';
import cmsDashboard from '../../assets/images/cms_dashboard.png';

const CMSPreview = () => {
    const stats = [
        { label: "Real-time Monitoring", icon: <Activity className="w-4 h-4" /> },
        { label: "Billing Analytics", icon: <PieChart className="w-4 h-4" /> },
        { label: "Network Health", icon: <Shield className="w-4 h-4" /> },
        { label: "Energy Logs", icon: <BarChart3 className="w-4 h-4" /> }
    ];

    return (
        <section className="py-16 md:py-24 lg:py-16 md:py-32 bg-primary dark:bg-primary transition-colors duration-500 overflow-hidden relative">
            {/* Dynamic Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,230,150,0.05)_0%,transparent_70%)]"></div>
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-12 md:mb-16">
                    <span className="label-caps !text-accent-green !mb-6 mx-auto">Smart Management Ecosystem</span>
                    <h2 className="text-white font-bold text-5xl md:text-8xl tracking-tight leading-[1] mb-8 max-w-5xl mx-auto">
                        The <span className="text-accent-green">Intelligence</span> Behind the Power.
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Our Central Management System (CMS) provides total visibility
                        into your energy infrastructure, from single units to national fleets.
                    </p>
                </div>

                <div className="relative group perspective-1000">
                    <motion.div
                        initial={{ opacity: 0, y: 50, rotateX: 10 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 mx-auto max-w-6xl"
                    >
                        {/* Main Mockup Container */}
                        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] bg-black/40 backdrop-blur-3xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

                            <img
                                src={cmsDashboard}
                                alt="LetsChargeEV CMS Dashboard"
                                className="w-full h-auto opacity-90"
                            />

                            {/* Functional Overlays (Floaters) */}
                            <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                                <div className="w-full h-full relative">
                                    {/* Floating Stat 1 */}
                                    <motion.div
                                        animate={{ y: [0, -20, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-1/4 -right-12 z-20 hidden lg:block bg-accent-green p-6 rounded-2xl shadow-2xl text-primary"
                                    >
                                        <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-80">Network Status</p>
                                        <p className="text-2xl font-bold">100% ONLINE</p>
                                    </motion.div>

                                    {/* Floating Stat 2 */}
                                    <motion.div
                                        animate={{ y: [0, 20, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                        className="absolute bottom-1/4 -left-12 z-20 hidden lg:block bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl"
                                    >
                                        <p className="text-[10px] font-black uppercase tracking-widest mb-1 text-accent-green">Real-time Load</p>
                                        <p className="text-2xl font-bold text-white">420.5 kW</p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Controls Mock */}
                        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {stats.map((s, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center gap-4 group hover:bg-white/10 transition-all cursor-pointer">
                                    <div className="w-10 h-10 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green group-hover:scale-110 transition-transform">
                                        {s.icon}
                                    </div>
                                    <span className="text-[11px] font-bold text-white uppercase tracking-widest">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Decorative Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-green/10 blur-[150px] -z-10 rounded-full opacity-50"></div>
                </div>
            </div>
        </section>
    );
};

export default CMSPreview;
