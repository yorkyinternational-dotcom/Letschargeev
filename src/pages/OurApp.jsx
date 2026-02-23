import { motion } from 'framer-motion';
import { Smartphone, Zap, Map, ShieldCheck, Download } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="p-8 bg-primary-light/50 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-accent/50 transition-all group"
    >
        <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
            <Icon className="text-accent" size={28} />
        </div>
        <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-white/40 leading-relaxed font-medium">{description}</p>
    </motion.div>
);

const featureCardStyles = "p-8 bg-primary-light/50 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-accent/50 transition-all group";

const OurApp = () => {
    return (
        <div className="bg-primary text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-bold uppercase tracking-widest mb-6 inline-block">
                                Mobile Experience
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
                                <span className="text-white"> Power in Your Pocket.</span>
                            </h1>
                            <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-lg">
                                Experience the future of EV charging with the Lets charge EV mobile app. Manage your charging sessions, find stations, and pay seamlessly.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button className="flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-2xl font-bold hover:bg-slate-100 transition-all">
                                    <Download size={20} />
                                    App Store
                                </button>
                                <button className="flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-2xl font-bold hover:bg-accent/90 transition-all">
                                    <Download size={20} />
                                    Play Store
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="absolute -inset-20 bg-accent/20 blur-[100px] rounded-full"></div>
                            {/* App Mockup Placeholder */}
                            <div className="relative z-10 mx-auto w-full max-w-[340px] aspect-[9/19] bg-primary rounded-[3.5rem] border-[10px] border-primary-light shadow-2xl overflow-hidden p-2">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-primary-light rounded-b-2xl z-20"></div>
                                <div className="w-full h-full bg-primary rounded-[2.5rem] overflow-hidden relative flex flex-col items-center justify-center p-8">
                                    {/* Dynamic Coming Soon Content */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className="relative z-10 flex flex-col items-center"
                                    >
                                        <motion.div
                                            animate={{
                                                rotate: [0, 360],
                                            }}
                                            transition={{
                                                duration: 20,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                            className="w-32 h-32 border-2 border-accent/20 rounded-full absolute -top-8 -left-8"
                                        />

                                        <div className="text-center space-y-4">
                                            <motion.p
                                                animate={{ opacity: [0.4, 1, 0.4] }}
                                                transition={{ duration: 3, repeat: Infinity }}
                                                className="text-[10px] font-black text-accent uppercase tracking-[0.5em]"
                                            >
                                                LCEv APP
                                            </motion.p>

                                            <h3 className="text-5xl font-black text-white italic tracking-tighter leading-none">
                                                COMING <br />
                                                <span className="text-accent">SOON.</span>
                                            </h3>

                                            <div className="pt-8 space-y-3">
                                                {[1, 2, 3].map(i => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ width: 0 }}
                                                        animate={{ width: "100%" }}
                                                        transition={{ delay: 1 + (i * 0.2), duration: 1 }}
                                                        className="h-[1px] bg-white/10 w-40"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Background Glows for App */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent/20 rounded-full blur-[60px]"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-primary/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">Smart Features</h2>
                        <p className="text-white/40 max-w-2xl mx-auto italic font-medium">Built for the modern EV driver.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={Map}
                            title="Live Map"
                            description="Real-time availability of charging stations across India with precise location routing."
                        />
                        <FeatureCard
                            icon={Zap}
                            title="Instant Start"
                            description="Scan a QR code and start your charging session instantly. No complicated setup required."
                        />
                        <FeatureCard
                            icon={ShieldCheck}
                            title="Secure Payments"
                            description="integrated wallet and multiple payment options including UPI, Cards, and FASTag."
                        />
                        <FeatureCard
                            icon={Smartphone}
                            title="Live Status"
                            description="Monitor your charging progress, battery level, and cost in real-time from anywhere."
                        />
                    </div>
                </div>
            </section>

            {/* Coming Soon Callout */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="p-12 bg-gradient-to-br from-accent to-accent/60 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl shadow-accent/20">
                        <div className="relative z-10">
                            <h2 className="text-4xl font-black mb-6">Something Big is Coming</h2>
                            <p className="text-xl mb-10 opacity-90 leading-relaxed font-semibold">
                                We're putting the finishing touches on our flagship experience. Be among the first to experience the revolution.
                            </p>
                            <div className="flex justify-center gap-4">
                                <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "100%" }}
                                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                        className="h-full bg-white w-1/2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurApp;
