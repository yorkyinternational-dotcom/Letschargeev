import { motion } from 'framer-motion';
import { Smartphone, Zap, Map, ShieldCheck, Download } from 'lucide-react';
import cmsDashboard from '../assets/images/cms_dashboard.png';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/5 transition-all duration-500 hover:border-accent-green/30 shadow-xl group"
    >
        <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-surface dark:bg-primary text-primary-light dark:text-white rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-10 group-hover:bg-accent-green group-hover:text-primary transition-all duration-500">
            <Icon size={24} className="md:w-7 md:h-7" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary-light dark:text-white tracking-tight">{title}</h3>
        <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed uppercase tracking-widest text-[9px] md:text-[11px]">{description}</p>
    </motion.div>
);

const OurApp = () => {
    return (
        <div className="bg-primary-surface dark:bg-primary text-primary-light dark:text-white min-h-screen relative transition-colors duration-500 overflow-hidden">
            {/* Precision Grid Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1]"
                    style={{
                        backgroundImage: `linear-gradient(#2D2D2D 1px, transparent 1px), linear-gradient(90deg, #2D2D2D 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 md:pt-48 pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/10 border border-accent-green/20 mb-6 md:mb-8">
                                <span className="w-2 h-2 rounded-full bg-accent-green"></span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-green">Software Ecosystem</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold mb-8 md:mb-10 leading-[1.1] md:leading-[1] tracking-tight">
                                Integrated <br className="hidden md:block" />
                                <span className="text-accent-green">Management.</span>
                            </h1>
                            <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 mb-10 md:mb-12 max-w-xl leading-relaxed">
                                A unified OS for India's evolving grid.
                                Our CMS isn't just a dashboard—it's the mission control for your entire charging infrastructure.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                                <button className="btn-professional-primary !px-8 md:!px-12 !py-4 md:!py-6 !text-[10px] md:!text-[12px] shadow-2xl shadow-accent-green/40">
                                    REQUEST CMS DEMO
                                </button>
                                <button className="btn-professional border-slate-300 dark:border-white/10 !px-8 md:!px-12 !py-4 md:!py-6 !text-[10px] md:!text-[12px] hover:bg-slate-50 dark:hover:bg-white/5">
                                    READ DOCUMENTATION
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)]">
                                <img
                                    src={cmsDashboard}
                                    alt="LCEV CMS Interface"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sub-sections Grid */}
            <section className="py-16 md:py-24 border-t border-slate-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="mb-12 md:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                        <div className="max-w-3xl">
                            <span className="label-caps !text-accent-green !mb-6">System Architecture</span>
                            <h2 className="text-primary-light dark:text-white font-bold text-5xl md:text-7xl tracking-tight leading-[1]">
                                BUILT FOR <br />
                                <span className="text-accent-green">MISSION-CRITICAL OPS.</span>
                            </h2>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={Zap}
                            title="Flash Start"
                            description="Instant handshake protocols for zero-wait charging sessions."
                        />
                        <FeatureCard
                            icon={ShieldCheck}
                            title="Safe Vault"
                            description="Financial-grade encryption for all tariff and billing data."
                        />
                        <FeatureCard
                            icon={Smartphone}
                            title="Remote Ops"
                            description="OTA updates and remote diagnostics for 99.9% uptime."
                        />
                        <FeatureCard
                            icon={Download}
                            title="Open Access"
                            description="Full API integration for custom enterprise ERP solutions."
                        />
                    </div>
                </div>
            </section>

            {/* Mobile App Teaser */}
            <section className="py-16 md:py-24 lg:py-16 md:py-32 bg-white dark:bg-[#0A0A0A] border-y border-slate-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            <div className="relative z-10 mx-auto w-full max-w-[320px] aspect-[9/19] bg-white dark:bg-black rounded-[3.5rem] border-[10px] border-slate-200 dark:border-white/5 shadow-2xl overflow-hidden p-2">
                                <div className="w-full h-full bg-primary-surface dark:bg-primary rounded-[2.8rem] flex flex-col items-center justify-center p-8">
                                    <p className="text-[10px] font-black text-accent-green uppercase tracking-widest mb-6">Mobile Interface</p>
                                    <Zap className="text-accent-green w-12 h-12 mb-8 animate-pulse" />
                                    <div className="w-full h-1 bg-white/10 rounded-full mb-4">
                                        <div className="h-full w-2/3 bg-accent-green"></div>
                                    </div>
                                    <p className="text-white font-bold tracking-widest text-xs">V4.0.2 SYNC</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="order-1 lg:order-2">
                            <span className="label-caps !text-accent-green !mb-8">User Experience</span>
                            <h2 className="text-6xl md:text-8xl font-bold mb-10 leading-[1] tracking-tight">
                                SCAN. <br />
                                CHARGE. <br />
                                <span className="text-accent-green">PROFIT.</span>
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-lg leading-relaxed font-medium">
                                High-fidelity mockups of the 'LetsChargeEV' app showing 'Scan to Charge'
                                and 'Remote Monitoring' features for end-users.
                            </p>
                            <div className="flex gap-4">
                                <div className="w-40 h-14 bg-black rounded-xl border border-white/10 flex items-center justify-center text-white text-xs font-bold uppercase tracking-widest">App Store</div>
                                <div className="w-40 h-14 bg-black rounded-xl border border-white/10 flex items-center justify-center text-white text-xs font-bold uppercase tracking-widest">Play Store</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurApp;
