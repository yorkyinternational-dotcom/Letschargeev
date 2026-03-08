import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, Zap, Calculator, Smartphone, MapPin } from 'lucide-react';

const MobileNav = () => {
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Grid', path: '/#locate', icon: MapPin },
        { name: 'Chargers', path: '/#products', icon: Zap },
        { name: 'Savings', path: '/#calculator', icon: Calculator },
        { name: 'App', path: '/our-app', icon: Smartphone },
    ];

    return (
        <div className="lg:hidden fixed bottom-0 left-0 w-full z-[100] select-none pb-safe">
            <div className="bg-white/90 dark:bg-[#050505]/95 backdrop-blur-3xl border-t border-slate-200 dark:border-white/10 px-6 py-2 pb-5 flex justify-between items-center shadow-[0_-15px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_-15px_40px_rgba(0,0,0,0.5)] relative">
                {/* Embedded Tab Bar Glow */}
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-48 h-24 bg-accent-green/5 blur-2xl pointer-events-none"></div>

                {navItems.map((item) => {
                    const isActive = location.pathname === item.path || (item.path.startsWith('/#') && location.hash === item.path.substring(1));

                    return (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="relative px-3 py-2 flex flex-col items-center gap-1 group"
                        >
                            <motion.div
                                animate={isActive ? { scale: 1.15, y: -2 } : { scale: 1, y: 0 }}
                                className={`${isActive ? 'text-accent-green drop-shadow-[0_0_8px_rgba(0,230,150,0.8)]' : 'text-slate-400 dark:text-white/40'} transition-all duration-300`}
                            >
                                <item.icon strokeWidth={isActive ? 2.5 : 2} size={22} className={isActive ? "animate-pulse" : ""} />
                            </motion.div>

                            <span className={`text-[9px] font-black uppercase tracking-widest ${isActive ? 'text-accent-green opacity-100' : 'text-slate-500 dark:text-white/30'} transition-colors duration-300`}>
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default MobileNav;
