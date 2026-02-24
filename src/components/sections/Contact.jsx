import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-40 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div>
                        <span className="label-caps !text-eco glow-green !mb-6">Join the Shift</span>
                        <h2 className="text-primary font-black text-6xl md:text-8xl uppercase italic tracking-tighter leading-[0.8] mb-16">
                            LET'S CHARGE <br />
                            <span className="text-gradient">THE FUTURE.</span>
                        </h2>

                        <div className="space-y-12">
                            {[
                                { label: "Operations", value: "+91-99992 65790" },
                                { label: "Global Support", value: "hello@lcev.in" },
                                { label: "Innovation Hub", value: "Noida Sector 63" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 mb-4 italic">/ {item.label}</p>
                                    <p className="text-3xl font-black text-primary italic uppercase tracking-tighter leading-none hover:text-eco transition-colors cursor-pointer">{item.value}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        {/* Decorative background for form */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl -z-10"></div>

                        <div className="bg-white p-14 lg:p-16 rounded-[4rem] border-4 border-slate-50 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8">
                                <Send className="text-eco/20 w-12 h-12 rotate-12" />
                            </div>

                            <form className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic ml-4">YOUR NAME</label>
                                        <input type="text" placeholder="REQUIRED" className="w-full bg-slate-50/50 border-2 border-transparent p-7 rounded-[2rem] font-black text-xs tracking-widest outline-none focus:border-eco focus:bg-white transition-all uppercase" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic ml-4">YOUR EMAIL</label>
                                        <input type="email" placeholder="ACTIVE_ONLY" className="w-full bg-slate-50/50 border-2 border-transparent p-7 rounded-[2rem] font-black text-xs tracking-widest outline-none focus:border-eco focus:bg-white transition-all uppercase" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic ml-4">SELECT TRACK</label>
                                    <select className="w-full bg-slate-50/50 border-2 border-transparent p-7 rounded-[2rem] font-black text-xs tracking-widest outline-none focus:border-eco focus:bg-white appearance-none transition-all uppercase cursor-pointer">
                                        <option>HARDWARE INQUIRY</option>
                                        <option>NETWORK PARTNER</option>
                                        <option>FLEET SOLUTIONS</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic ml-4">MESSAGE_CONTENT</label>
                                    <textarea rows="4" placeholder="HOW CAN WE ACCELERATE YOU?" className="w-full bg-slate-50/50 border-2 border-transparent p-7 rounded-[2rem] font-black text-xs tracking-widest outline-none focus:border-eco focus:bg-white resize-none transition-all uppercase"></textarea>
                                </div>
                                <button className="btn-primary w-full !rounded-[2.5rem] !py-8 font-black tracking-[0.3em] text-sm shadow-xl shadow-primary/20">
                                    INITIATE_CONTACT
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
