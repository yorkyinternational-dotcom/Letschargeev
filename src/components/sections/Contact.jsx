import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-40 bg-primary-surface dark:bg-primary transition-colors duration-300 relative overflow-hidden">
            {/* Tech Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div>
                        <span className="label-caps !text-accent-green !mb-6">Join the Shift</span>
                        <h2 className="text-primary-light dark:text-white font-black text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9] mb-16">
                            INITIATE <br />
                            <span className="text-accent-green">PARTNERSHIP.</span>
                        </h2>

                        <div className="space-y-12">
                            {[
                                { label: "Operations", value: "+91 96509 79197", href: "https://wa.me/919650979197?text=Hello%20I%20am%20interested%20in%20your%20services" },
                                { label: "Global Support", value: "support@lcev.in" },
                                { label: "Innovation Hub", value: "Noida Sector 63" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">/ {item.label}</p>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-3xl font-black text-primary-light dark:text-white uppercase tracking-tighter leading-none hover:text-accent-green transition-colors cursor-pointer"
                                    >
                                        {item.value}
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-white dark:bg-white/5 p-12 md:p-16 rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                            <form className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-4">YOUR NAME</label>
                                        <input type="text" placeholder="REQUIRED" className="w-full min-w-0 overflow-hidden text-ellipsis bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-2xl font-bold text-xs tracking-widest outline-none focus:border-accent-green transition-all dark:text-white uppercase" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-4">YOUR EMAIL</label>
                                        <input type="email" placeholder="ACTIVE_ONLY" className="w-full min-w-0 overflow-hidden text-ellipsis bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-2xl font-bold text-xs tracking-widest outline-none focus:border-accent-green transition-all dark:text-white uppercase" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-4">SELECT TRACK</label>
                                    <select className="w-full min-w-0 overflow-hidden text-ellipsis bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-2xl font-bold text-xs tracking-widest outline-none focus:border-accent-green appearance-none transition-all dark:text-white uppercase cursor-pointer">
                                        <option>HARDWARE INQUIRY</option>
                                        <option>NETWORK PARTNER</option>
                                        <option>FLEET SOLUTIONS</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-4">MESSAGE_CONTENT</label>
                                    <textarea rows="4" placeholder="HOW CAN WE ACCELERATE YOU?" className="w-full min-w-0 overflow-hidden bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-2xl font-bold text-xs tracking-widest outline-none focus:border-accent-green resize-none transition-all dark:text-white uppercase"></textarea>
                                </div>
                                <button className="btn-professional-primary w-full !py-6 font-black tracking-widest text-xs uppercase shadow-xl transition-all">
                                    Initiate Contact
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
