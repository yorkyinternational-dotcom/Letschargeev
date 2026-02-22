import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-40 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div>
                        <span className="label-caps">Get in Touch</span>
                        <h2 className="mb-12">LET'S CHARGE <br /><span className="text-accent italic">THE FUTURE.</span></h2>
                        <p className="text-xl mb-16 max-w-md">Questions about infrastructure or partnerships? Our technical team is ready to assist.</p>

                        <div className="space-y-10">
                            {[
                                { label: "Operations", value: "+91-9999265790" },
                                { label: "Support", value: "support@lcev.in" },
                                { label: "Location", value: "Noida, India" }
                            ].map((item, i) => (
                                <div key={i}>
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/30 mb-2">{item.label}</p>
                                    <p className="text-2xl font-black">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-50 p-12 lg:p-16 rounded-[3rem] border border-slate-200">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <input type="text" placeholder="NAME" className="w-full bg-white border border-slate-200 p-6 rounded-2xl font-black text-[10px] tracking-widest outline-none focus:border-accent" />
                                <input type="email" placeholder="EMAIL" className="w-full bg-white border border-slate-200 p-6 rounded-2xl font-black text-[10px] tracking-widest outline-none focus:border-accent" />
                            </div>
                            <select className="w-full bg-white border border-slate-200 p-6 rounded-2xl font-black text-[10px] tracking-widest outline-none focus:border-accent appearance-none">
                                <option>HARDWARE INQUIRY</option>
                                <option>NETWORK PARTNER</option>
                                <option>FLEET SOLUTIONS</option>
                            </select>
                            <textarea rows="4" placeholder="MESSAGE" className="w-full bg-white border border-slate-200 p-6 rounded-2xl font-black text-[10px] tracking-widest outline-none focus:border-accent resize-none"></textarea>
                            <button className="btn-primary w-full !rounded-2xl">
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
