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
        <div className="bg-white text-slate-900 min-h-screen relative overflow-hidden">
            {/* Global Mesh Accent */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none -z-10 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#00E696 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="label-caps !text-eco glow-green !mb-10 block">Mobile Experience</span>
                            <h1 className="text-7xl lg:text-9xl font-black mb-12 leading-[0.8] italic text-primary uppercase tracking-tighter">
                                POWER IN <br />
                                YOUR <span className="text-gradient">POCKET.</span>
                            </h1>
                            <p className="text-xl text-slate-400 mb-12 leading-none max-w-lg font-black uppercase tracking-tighter italic">
                                India's most <span className="text-primary italic">intelligent</span> charging <br />
                                ecosystem on your screen.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button className="btn-primary !px-12 !py-6 !rounded-[2rem] shadow-2xl">
                                    <Download size={24} className="glow-green" />
                                    APP STORE
                                </button>
                                <button className="btn-accent !px-12 !py-6 !rounded-[2rem] !border-4 !border-primary/10">
                                    <Download size={24} />
                                    PLAY STORE
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="absolute -inset-40 bg-eco/5 blur-[120px] rounded-full"></div>

                            {/* App Mockup with GenZ Polish */}
                            <div className="relative z-10 mx-auto w-full max-w-[360px] aspect-[9/19] bg-white rounded-[4.5rem] border-[12px] border-primary shadow-[0_0_100px_rgba(0,230,150,0.15)] overflow-hidden p-3 group">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-primary rounded-b-3xl z-30"></div>

                                <div className="w-full h-full bg-primary rounded-[3.5rem] overflow-hidden relative flex flex-col items-center justify-center p-12">
                                    {/* Glassmorphic Layer */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-eco/20 via-transparent to-accent/20 opacity-30"></div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="relative z-10 flex flex-col items-center"
                                    >
                                        <div className="text-center space-y-6">
                                            <motion.p
                                                animate={{ opacity: [0.4, 1, 0.4] }}
                                                transition={{ duration: 3, repeat: Infinity }}
                                                className="text-[12px] font-black text-eco uppercase tracking-[0.5em] italic glow-green"
                                            >
                                                LCEV_OS_CORE
                                            </motion.p>

                                            <h3 className="text-6xl font-black text-white italic tracking-tighter leading-[0.8]">
                                                COMING <br />
                                                <span className="text-eco">NEXT.</span>
                                            </h3>

                                            <div className="pt-10 flex flex-col items-center gap-4">
                                                {[1, 2, 3].map(i => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ width: 0 }}
                                                        animate={{ width: i === 1 ? "100%" : i === 2 ? "70%" : "40%" }}
                                                        transition={{ delay: 1 + (i * 0.2), duration: 1 }}
                                                        className="h-1 bg-white/20 rounded-full"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Mesh Glow Internal */}
                                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-eco/20 rounded-full blur-[60px]"></div>
                                </div>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-40 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <span className="label-caps !text-accent !mb-6">System Features</span>
                            <h2 className="text-primary font-black text-6xl md:text-8xl uppercase italic tracking-tighter leading-[0.8]">
                                BUILT FOR <br />
                                <span className="text-gradient">THE MODERN.</span>
                            </h2>
                        </div>
                        <p className="text-xl text-slate-400 font-black tracking-tighter uppercase italic md:max-w-xs leading-none">
                            Zero lag. <br />
                            One tap. <br />
                            <span className="text-primary">Neon simple.</span>
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
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

            {/* Coming Soon Callout */}
            <section className="py-40">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="p-20 bg-primary rounded-[5rem] text-white relative overflow-hidden shadow-2xl shadow-primary/40 border-4 border-white/5">
                        {/* Mesh overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-eco/20 via-transparent to-accent/20 opacity-40"></div>

                        <div className="relative z-10 text-center">
                            <h2 className="text-6xl md:text-8xl font-black mb-12 italic uppercase tracking-tighter leading-none">
                                JOIN THE <span className="text-eco">WAITLIST.</span>
                            </h2>
                            <p className="text-2xl mb-16 text-white/40 max-w-2xl mx-auto font-black italic uppercase tracking-tighter leading-none">
                                Finishing the <span className="text-white">flagship</span> experience. <br />
                                Be first to experience the <span className="text-eco">shift.</span>
                            </p>

                            <div className="flex justify-center flex-wrap gap-8 items-center">
                                <div className="w-64 h-2 bg-white/5 rounded-full overflow-hidden relative">
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "100%" }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                        className="h-full bg-eco w-1/2 glow-green shadow-[0_0_15px_#00E696]"
                                    />
                                </div>
                                <button className="btn-primary !bg-white !text-primary hover:!bg-eco hover:!text-white !rounded-2xl !py-6 !px-16 !text-sm">
                                    NOTIFY ME
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
