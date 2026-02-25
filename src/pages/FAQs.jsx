const FAQs = () => {
    return (
        <div className="pt-48 pb-32 min-h-screen bg-primary-surface dark:bg-primary transition-colors duration-300 relative overflow-hidden">
            {/* Tech Background Overlay */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-accent-green/5 rounded-full blur-[120px]"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <span className="label-caps !text-accent-green !mb-10 text-center block">Technical_FAQ</span>
                <h1 className="text-6xl md:text-8xl font-black text-primary-light dark:text-white mb-20 text-center uppercase tracking-tighter leading-[0.9]">
                    FREQUENTLY <br />
                    ASKED <span className="text-accent-green">GRID_INTEL.</span>
                </h1>

                <div className="space-y-8">
                    {[
                        { q: "What is LCEv Infrastructure?", a: "LCEv provides integrated EV charging solutions including hardware and management software across India, specializing in high-uptime commercial and residential hubs." },
                        { q: "Is the hardware OCPP compliant?", a: "Yes, all LCEv hardware supports OCPP 1.6J and 2.0.1 protocols for seamless backend integration and remote management." },
                        { q: "How do I locate a station?", a: "Use our real-time ubiquitous grid locator available on the mobile app and website for live tracking of station availability." },
                        { q: "Do you offer fleet solutions?", a: "We provide military-grade fleet management dashboards that monitor battery health and optimize energy procurement in real-time." }
                    ].map((item, i) => (
                        <div key={i} className="card-professional !p-10 bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 group hover:border-accent-green/40 cursor-pointer">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-black text-primary-light dark:text-white leading-tight group-hover:text-accent-green transition-colors uppercase tracking-tight">
                                    {item.q}
                                </h3>
                                <span className="text-slate-200 dark:text-white/5 font-black text-4xl">/0{i + 1}</span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 font-medium tracking-tight text-lg leading-relaxed">
                                {item.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQs;
