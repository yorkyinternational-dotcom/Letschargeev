import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-48 pb-32 min-h-screen bg-white relative overflow-hidden">
            {/* Global Mesh Accent */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none -z-10 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#00E696 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <span className="label-caps !text-eco glow-green !mb-10 block">Mission_Protocol</span>
                <h1 className="text-7xl md:text-9xl font-black text-primary mb-16 italic uppercase tracking-tighter leading-[0.8]">
                    ABOUT <br />
                    <span className="text-gradient">LCEV_SYSTEMS.</span>
                </h1>
                <p className="text-2xl md:text-4xl text-slate-400 max-w-5xl mx-auto leading-none font-black italic uppercase tracking-tighter">
                    Architecting India's most <span className="text-primary italic">high-performance</span> <br />
                    and reliable EV charging <span className="text-eco">ecosystem.</span>
                </p>

                <div className="mt-32 grid md:grid-cols-3 gap-10">
                    {[
                        { label: 'GENESIS', value: '2024_Q1' },
                        { label: 'NETWORK', value: 'LIVE_SYNC' },
                        { label: 'PRECISION', value: '99.9%' }
                    ].map(stat => (
                        <div key={stat.label} className="card-modern !p-12 border-4 border-slate-50 group">
                            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-6 italic group-hover:text-eco transition-colors">/ {stat.label}</p>
                            <p className="text-5xl font-black text-primary italic uppercase tracking-tighter leading-none group-hover:scale-110 transition-transform">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
