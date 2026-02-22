import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';

const Game = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-900 text-white flex items-center justify-center">
            <div className="text-center px-4">
                <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="inline-block p-8 bg-accent/20 rounded-full mb-8"
                >
                    <Gamepad2 size={80} className="text-accent" />
                </motion.div>
                <h1 className="text-6xl font-black mb-6">Charge Ahead</h1>
                <p className="text-2xl text-slate-400 mb-12">Our flagship mobile experience is coming soon.</p>
                <div className="flex justify-center gap-4">
                    <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            className="h-full bg-accent w-1/2"
                        />
                    </div>
                </div>
                <p className="mt-8 text-sm font-mono text-slate-500 uppercase tracking-widest">Loading future...</p>
            </div>
        </div>
    );
};

export default Game;
