import { motion } from 'framer-motion';
import { Smartphone, Zap, Map, ShieldCheck, Download } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        className="card-modern !p-10 relative overflow-hidden group"
    >
        <div className="w-16 h-16 bg-primary text-white rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-eco group-hover:scale-110 transition-all duration-500">
            <Icon size={32} />
        </div>
        <h3 className="text-2xl font-black mb-6 text-primary uppercase italic tracking-tighter leading-none group-hover:text-eco transition-colors">{title}</h3>
        <p className="text-slate-400 font-bold leading-tight uppercase tracking-tight text-lg">{description}</p>

        {/* Kinetic Accent */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-eco/5 rounded-full blur-2xl group-hover:bg-eco/20 transition-all"></div>
    </motion.div>
);

const OurApp = () => {
    return (
        <div className="bg-primary-surface dark:bg-primary text-primary-light dark:text-white min-h-screen relative transition-colors duration-300 overflow-hidden">
            {/* Minimalist Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-accent-green/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-accent-yellow/5 blur-[100px] rounded-full"></div>
                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-48 pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="label-caps !text-accent-green !mb-8">Mobile Experience</span>
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 leading-[0.9] tracking-tighter uppercase">
                                INTELLIGENT <br />
                                <span className="text-accent-green">ECOSYSTEM.</span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-lg leading-relaxed font-medium">
                                India's most reliable charging network in your palm.
                                Real-time precision, AI-driven insights, and seamless control for the modern EV driver.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button className="btn-professional-primary !px-12 !py-5">
                                    <Download size={20} className="mr-3" />
                                    Download App
                                </button>
                                <button className="btn-professional border-slate-200 dark:border-white/10 border text-slate-800 dark:text-white !px-12 !py-5 hover:bg-slate-50 dark:hover:bg-white/5">
                                    Learn More
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            {/* Premium Smartphone Mockup */}
                            <div className="relative z-10 mx-auto w-full max-w-[340px] aspect-[9/19] bg-white dark:bg-slate-900 rounded-[3.5rem] border-[10px] border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden p-2 group">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-200 dark:bg-slate-800 rounded-b-2xl z-30"></div>

                                <div className="w-full h-full bg-primary-surface dark:bg-primary rounded-[2.8rem] overflow-hidden relative flex flex-col p-8">
                                    <div className="relative z-10 space-y-8 mt-10">
                                        <div className="space-y-2">
                                            <p className="text-[10px] font-black text-accent-green uppercase tracking-widest">LCEV OS CORE</p>
                                            <h3 className="text-4xl font-black text-primary-light dark:text-white tracking-tighter uppercase leading-none">
                                                FAST <br />
                                                <span className="text-accent-green">SYNC.</span>
                                            </h3>
                                        </div>

                                        <div className="space-y-4">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="p-4 bg-white dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
                                                    <div className="w-full h-1 bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                                                        <motion.div
                                                            animate={{ width: ["0%", "100%"] }}
                                                            transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                                                            className="h-full bg-accent-green"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-8">
                                            <div className="w-full aspect-square rounded-full border border-dashed border-accent-green/30 flex items-center justify-center">
                                                <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center animate-pulse">
                                                    <Zap className="text-accent-green w-10 h-10" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tech Decals */}
                                    <div className="absolute bottom-10 left-8">
                                        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">v4.0.2 Stable</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Decorative Elements */}
                            <div className="absolute -top-10 -left-10 w-24 h-24 bg-accent-yellow rounded-full blur-3xl opacity-30"></div>
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent-green rounded-full blur-3xl opacity-20"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 md:py-32 bg-slate-50 dark:bg-black/20 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <span className="label-caps !text-accent-green !mb-6">System Features</span>
                            <h2 className="text-primary-light dark:text-white font-black text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9]">
                                ENGINEERED FOR <br />
                                <span className="text-accent-green">PRECISION.</span>
                            </h2>
                        </div>
                        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium md:max-w-xs leading-relaxed">
                            Zero lag. One tap interaction.
                            Built for technical authority.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={Map}
                            title="Live Grid"
                            description="Real-time precision across 500+ smart points."
                        />
                        <FeatureCard
                            icon={Zap}
                            title="Flash Start"
                            description="Instant handshake via QR or biometric sync."
                        />
                        <FeatureCard
                            icon={ShieldCheck}
                            title="Safe Vault"
                            description="Military grade encryption for all transactions."
                        />
                        <FeatureCard
                            icon={Smartphone}
                            title="Smart Sync"
                            description="Live telemetry direct to your interface."
                        />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 md:py-40">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="p-16 md:p-24 bg-primary dark:bg-black rounded-[2rem] text-white relative overflow-hidden shadow-2xl border border-white/5 transition-colors duration-300">
                        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-accent-green/10 blur-[100px] rounded-full"></div>

                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <h2 className="text-5xl md:text-7xl font-black mb-10 uppercase tracking-tighter leading-[0.9]">
                                THE FUTURE IS <br />
                                <span className="text-accent-green">DOWNLOADABLE.</span>
                            </h2>
                            <p className="text-xl text-white/60 mb-16 leading-relaxed font-medium">
                                Join India's most intelligent charging network.
                                Be the first to experience the technical shift in mobility.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <button className="btn-professional-primary !px-16 !py-5">
                                    Notify Me
                                </button>
                                <button className="btn-professional border-white/20 border text-white !px-16 !py-5 hover:bg-white/5 transition-all">
                                    View Roadmap
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurApp;
