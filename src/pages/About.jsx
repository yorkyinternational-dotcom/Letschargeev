import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-eco/5 rounded-full blur-3xl -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-black text-primary mb-8 animate-fade-in italic">
                    ABOUT LETS <span className="text-gradient">CHARGE EV</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                    We are architecting India's most high-performance and vibrant EV charging ecosystem.
                    Built for the future, fueled by the <span className="text-eco font-bold glow-green">Electric Revolution</span>.
                </p>
            </div>
        </div>
    );
};

export default About;
