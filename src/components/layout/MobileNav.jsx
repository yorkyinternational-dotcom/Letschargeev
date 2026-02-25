import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, Zap, Calculator, Smartphone, MapPin } from 'lucide-react';

const MobileNav = () => {
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Grid', path: '/#locate', icon: MapPin },
        { name: 'X-1', path: '/#products', icon: Zap },
        { name: 'Savings', path: '/#calculator', icon: Calculator },
        { name: 'App', path: '/our-app', icon: Smartphone },
    ];

    return (
        <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] z-[60]">
            <div className="bg-primary/95 dark:bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 flex justify-between items-center shadow-2xl relative overflow-hidden transition-colors duration-300">
                {/* Minimalist Tech Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-green/10 blur-2xl pointer-events-none"></div>

                {navItems.map((item) => {
                    const isActive = location.pathname === item.path || (item.path.startsWith('/#') && location.hash === item.path.substring(1));

                    return (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="relative px-3 py-2 flex flex-col items-center gap-1 group"
                        >
                            <motion.div
                                animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                                className={`${isActive ? 'text-accent-green' : 'text-white/30'} transition-colors duration-300`}
                            >
                                <item.icon size={20} />
                            </motion.div>

                            <span className={`text-[8px] font-bold uppercase tracking-widest ${isActive ? 'text-accent-green' : 'text-white/20'}`}>
                                {item.name}
                            </span>

                            {isActive && (
                                <motion.div
                                    layoutId="mobileNavActive"
                                    className="absolute -bottom-1 w-1 h-1 bg-accent-green rounded-full shadow-[0_0_8px_rgba(0,230,150,0.5)]"
                                />
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default MobileNav;
