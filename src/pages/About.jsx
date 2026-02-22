import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-6xl font-black text-primary mb-8 animate-fade-in">About Lets charge EV</h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    We are dedicated to building India's most reliable and sustainable EV charging ecosystem.
                    Designed and manufactured in India, for India.
                </p>
            </div>
        </div>
    );
};

export default About;
