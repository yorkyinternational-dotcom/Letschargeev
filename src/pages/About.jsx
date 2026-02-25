const About = () => {
    return (
        <div className="pt-48 pb-32 min-h-screen bg-primary-surface dark:bg-primary transition-colors duration-300 relative overflow-hidden">
            {/* Tech Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-green/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <span className="label-caps !text-accent-green !mb-10 block">Mission_Protocol</span>
                <h1 className="text-7xl md:text-9xl font-black text-primary-light dark:text-white mb-16 uppercase tracking-tighter leading-[0.9]">
                    ABOUT <br />
                    <span className="text-accent-green">LCEV_SYSTEMS.</span>
                </h1>
                <p className="text-2xl md:text-4xl text-slate-500 dark:text-slate-400 max-w-5xl mx-auto leading-tight font-bold uppercase tracking-tighter">
                    Architecting India's most <span className="text-primary-light dark:text-white">resilient infrastructure</span> <br />
                    and technically advanced <span className="text-accent-green">ecosystem.</span>
                </p>

                <div className="mt-32 grid md:grid-cols-3 gap-10">
                    {[
                        { label: 'GENESIS', value: '2024_Q1' },
                        { label: 'NETWORK', value: 'LIVE_SYNC' },
                        { label: 'PRECISION', value: '99.9%' }
                    ].map(stat => (
                        <div key={stat.label} className="card-professional !p-12 bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 group">
                            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] mb-6 group-hover:text-accent-green transition-colors">/ {stat.label}</p>
                            <p className="text-5xl font-black text-primary-light dark:text-white uppercase tracking-tighter leading-none group-hover:text-accent-green transition-all">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
