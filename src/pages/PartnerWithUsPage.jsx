import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Globe, Truck, CheckCircle2, ArrowRight, MessageSquare, Send } from 'lucide-react';

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
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-40 pb-24 overflow-hidden bg-primary overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="label-caps !text-accent opacity-60">Strategic Alliances</span>
                        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.85]">
                            BUILD THE INFRASTRUCTURE <br />
                            <span className="text-eco">OF TOMORROW.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-medium leading-relaxed">
                            Lets charge EV is seeking visionary partners across India to accelerate the transition to sustainable mobility.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Partnership Categories */}
            <section className="py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {partnershipTypes.map((type, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 transition-all group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-eco text-white flex items-center justify-center mb-8 transition-colors">
                                    <type.icon size={32} />
                                </div>
                                <h3 className="text-4xl font-black text-primary mb-6 uppercase italic tracking-tighter leading-none">{type.title}</h3>
                                <p className="text-slate-500 mb-10 font-medium leading-relaxed">{type.description}</p>
                                <ul className="space-y-4">
                                    {type.benefits.map((benefit, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm font-black text-primary uppercase tracking-widest">
                                            <CheckCircle2 size={16} className="text-eco" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-32 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24">
                        <div>
                            <span className="label-caps">Get in Touch</span>
                            <h2 className="text-5xl font-black text-primary mb-10 leading-tight">BECOME A <br /><span className="text-accent italic">PARTNER.</span></h2>
                            <p className="text-xl text-slate-500 mb-12 font-medium leading-relaxed">
                                Share your details and our strategic partnerships team will reach out within 24 hours with a custom proposal.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <div className="p-4 bg-slate-100 rounded-2xl text-primary">
                                        <MessageSquare size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-1">Direct Line</p>
                                        <p className="text-lg font-black text-primary">+91-9999265790</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="p-4 bg-slate-100 rounded-2xl text-primary">
                                        <Send size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-1">Inquiry Email</p>
                                        <p className="text-lg font-black text-primary">support@lcev.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-12 lg:p-16 rounded-[4rem] border border-slate-100 relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                {formState === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-20"
                                    >
                                        <div className="w-20 h-20 bg-eco rounded-full flex items-center justify-center mx-auto mb-8 text-white">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h3 className="text-3xl font-black text-primary mb-4">INQUIRY RECEIVED</h3>
                                        <p className="text-slate-500 font-medium">Our team is already reviewing your profile.</p>
                                        <button
                                            onClick={() => setFormState('idle')}
                                            className="mt-10 text-accent font-black text-xs uppercase tracking-widest border-b-2 border-accent pb-1"
                                        >
                                            Send another inquiry
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                                                <input required type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:border-accent outline-none font-bold text-primary transition-all" placeholder="Arjun Sharma" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Organization</label>
                                                <input required type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:border-accent outline-none font-bold text-primary transition-all" placeholder="Company Name" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Professional Email</label>
                                            <input required type="email" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:border-accent outline-none font-bold text-primary transition-all" placeholder="arjun@enterprise.in" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Partnership Interest</label>
                                            <select required className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:border-accent outline-none font-bold text-primary transition-all appearance-none cursor-pointer">
                                                <option>Real Estate / Site Host</option>
                                                <option>Fleet Transition</option>
                                                <option>Network CPO Franchise</option>
                                                <option>Equipment Supply</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Project Brief</label>
                                            <textarea required rows="4" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:border-accent outline-none font-bold text-primary transition-all resize-none" placeholder="Tell us about your mission..."></textarea>
                                        </div>
                                        <button
                                            disabled={formState === 'sending'}
                                            type="submit"
                                            className="btn-primary w-full !py-6 !rounded-2xl flex items-center justify-center gap-4 group"
                                        >
                                            {formState === 'sending' ? (
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                />
                                            ) : (
                                                <>
                                                    SUBMIT PARTNERSHIP INQUIRY
                                                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
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
