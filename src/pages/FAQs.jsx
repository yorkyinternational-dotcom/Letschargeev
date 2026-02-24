const FAQs = () => {
    return (
        <div className="pt-48 pb-32 min-h-screen bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <span className="label-caps !text-accent !mb-10 text-center block">Technical_FAQ</span>
                <h1 className="text-6xl md:text-8xl font-black text-primary mb-20 text-center uppercase italic tracking-tighter leading-[0.8]">
                    FREQUENTLY <br />
                    ASKED <span className="text-gradient">QUESTIONS.</span>
                </h1>

                <div className="space-y-8">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="card-modern !p-10 border-4 border-slate-50 group hover:!border-eco/40 cursor-pointer">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-3xl font-black text-primary leading-none group-hover:text-eco transition-colors italic tracking-tighter uppercase">
                                    WHAT IS <br />LCEV_SYSTEMS?
                                </h3>
                                <span className="text-slate-200 font-black italic text-4xl">0{i}</span>
                            </div>
                            <p className="text-slate-400 font-bold uppercase tracking-tight text-lg leading-tight">
                                LCEv provides integrated EV charging solutions including hardware and management software across India. Built for speed and reliability.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQs;
