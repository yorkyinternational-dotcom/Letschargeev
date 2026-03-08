import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Globe, Truck, CheckCircle2, MessageSquare, Send, ArrowRight } from 'lucide-react';
import heroVideo from '../assets/videos/hero_video1.mp4';

const PartnerWithUsPage = () => {
    const [formState, setFormState] = useState('idle'); // idle, sending, success

    const partnershipTypes = [
        {
            icon: Building2,
            title: "Real Estate Partners",
            description: "Monetize your parking assets. Transform your commercial, residential, or retail space into a high-yield charging hub.",
            benefits: ["Revenue Sharing", "Property Value Appreciation", "Green Certification"]
        },
        {
            icon: Globe,
            title: "CPO / Franchise",
            description: "Become a Network Operator. Leverage our technical stack to start and scale your own regional charging business.",
            benefits: ["Full IoT Stack Access", "Brand Support", "Unified Billing System"]
        },
        {
            icon: Truck,
            title: "Fleet Operators",
            description: "Future-proof your logistics. Transition to electric with dedicated captive charging solutions and uptime guarantees.",
            benefits: ["Special Energy Rates", "Uptime Monitoring", "TCO Optimization"]
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('sending');
        setTimeout(() => setFormState('success'), 1500);
    };

    return (
        <div className="bg-primary-surface dark:bg-primary min-h-screen transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center pt-32 pb-16 overflow-hidden bg-black border-b border-white/5">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-30 grayscale"
                    >
                        <source src={heroVideo} type="video/mp4" />
                    </video>
                    {/* Premium Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black z-10"></div>
                </div>

                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-20" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="label-caps !mb-8 block">Strategic Alliances</span>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter uppercase leading-[1.1] md:leading-[0.9] w-full">
                            BUILD THE <br className="block md:hidden" />
                            <span className="Tracking-tight">INFRASTRUCTURE</span> <br className="hidden md:block" />
                            <span className="text-accent-green block mt-2 md:inline md:mt-0"> OF TOMORROW.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/40 max-w-3xl mx-auto font-medium leading-relaxed uppercase tracking-tight">
                            LCEv is seeking visionary partners to accelerate the transition to sustainable mobility through technical authority.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Partnership Categories */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-10">
                        {partnershipTypes.map((type, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="card-professional !p-12 bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 group hover:border-accent-green/40 transition-all h-full"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-accent-green/10 text-accent-green flex items-center justify-center mb-10 group-hover:bg-accent-green group-hover:text-primary transition-all duration-500">
                                    <type.icon size={28} />
                                </div>
                                <h3 className="text-3xl font-black text-primary-light dark:text-white mb-6 uppercase tracking-tighter leading-none group-hover:text-accent-green transition-colors">{type.title}</h3>
                                <div className="flex-1 mt-auto">
                                    <ul className="space-y-4">
                                        {type.benefits.map((benefit, j) => (
                                            <li key={j} className="flex items-center gap-3 text-[10px] font-black text-primary-light dark:text-white uppercase tracking-widest">
                                                <CheckCircle2 size={14} className="text-accent-green" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 md:py-24 border-t border-slate-200 dark:border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24">
                        <div>
                            <span className="label-caps !mb-8">Get in Touch</span>
                            <h2 className="text-6xl md:text-7xl font-black text-primary-light dark:text-white mb-12 tracking-tighter uppercase leading-[0.9]">
                                BECOME A <br />
                                <span className="text-accent-green">PARTNER.</span>
                            </h2>
                            <p className="text-xl text-slate-500 dark:text-slate-400 mb-16 font-medium leading-relaxed">
                                Share your details and our strategic partnerships team will reach out with a technical deployment blueprint.
                            </p>

                            <div className="space-y-10">
                                <div className="flex gap-6 items-start group">
                                    <div className="p-5 bg-slate-100 dark:bg-white/5 rounded-2xl text-primary-light dark:text-white group-hover:bg-accent-green group-hover:text-primary transition-all">
                                        <MessageSquare size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Direct Line</p>
                                        <a
                                            href="https://wa.me/919650979197?text=Hello%20I%20am%20interested%20in%20your%20services"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl font-black text-primary-light dark:text-white uppercase tracking-tight hover:text-accent-green transition-colors"
                                        >
                                            +91 96509 79197
                                        </a>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start group">
                                    <div className="p-5 bg-slate-100 dark:bg-white/5 rounded-2xl text-primary-light dark:text-white group-hover:bg-accent-green group-hover:text-primary transition-all">
                                        <Send size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Inquiry Email</p>
                                        <p className="text-xl font-black text-primary-light dark:text-white uppercase tracking-tight">support@lcev.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-white/5 p-12 md:p-16 rounded-[2.5rem] border border-slate-200 dark:border-white/10 relative overflow-hidden shadow-2xl backdrop-blur-xl">
                            <AnimatePresence mode="wait">
                                {formState === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-20"
                                    >
                                        <div className="w-20 h-20 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h3 className="text-3xl font-black text-primary-light dark:text-white mb-4 uppercase tracking-tighter">INQUIRY RECEIVED</h3>
                                        <p className="text-slate-500 dark:text-slate-400 font-medium">Our team is already reviewing your profile.</p>
                                        <button
                                            onClick={() => setFormState('idle')}
                                            className="mt-10 btn-professional border border-slate-200 dark:border-white/10 text-primary-light dark:text-white"
                                        >
                                            Send another inquiry
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className="space-y-8"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-4">Full Name</label>
                                                <input required type="text" className="w-full min-w-0 overflow-hidden text-ellipsis bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:border-accent-green outline-none font-bold text-primary-light dark:text-white transition-all" placeholder="ARJUN SHARMA" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-4">Organization</label>
                                                <input required type="text" className="w-full min-w-0 overflow-hidden text-ellipsis bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:border-accent-green outline-none font-bold text-primary-light dark:text-white transition-all" placeholder="COMPANY NAME" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-4">Professional Email</label>
                                            <input required type="email" className="w-full min-w-0 overflow-hidden text-ellipsis bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:border-accent-green outline-none font-bold text-primary-light dark:text-white transition-all" placeholder="BUSINESS_ONLY" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-4">Partnership Interest</label>
                                            <select required className="w-full min-w-0 overflow-hidden text-ellipsis bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:border-accent-green outline-none font-bold text-primary-light dark:text-white transition-all appearance-none cursor-pointer">
                                                <option>Real Estate / Site Host</option>
                                                <option>Fleet Transition</option>
                                                <option>Network CPO Franchise</option>
                                                <option>Equipment Supply</option>
                                            </select>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-4">Project Brief</label>
                                            <textarea required rows="4" className="w-full min-w-0 overflow-hidden bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:border-accent-green outline-none font-bold text-primary-light dark:text-white transition-all resize-none" placeholder="How can we accelerate your mission?"></textarea>
                                        </div>
                                        <button
                                            disabled={formState === 'sending'}
                                            type="submit"
                                            className="btn-professional-primary w-full !py-6 flex items-center justify-center gap-4 group uppercase tracking-widest font-black text-xs"
                                        >
                                            {formState === 'sending' ? (
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                                    className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full"
                                                />
                                            ) : (
                                                <>
                                                    Submit inquiry
                                                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PartnerWithUsPage;
