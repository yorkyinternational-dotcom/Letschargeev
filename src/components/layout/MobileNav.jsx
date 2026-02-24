import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, Zap, Calculator, Smartphone, MapPin } from 'lucide-react';

const MobileNav = () => {
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Grid', path: '/#locate', icon: MapPin },
        { name: 'Power', path: '/#products', icon: Zap },
        { name: 'Save', path: '/#calculator', icon: Calculator },
        { name: 'App', path: '/our-app', icon: Smartphone },
    ];

    return (
        <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] z-[60]">
            <div className="bg-primary/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-4 flex justify-between items-center shadow-2xl relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                    <div className="absolute -top-10 -left-10 w-20 h-20 bg-eco rounded-full blur-2xl"></div>
                </div>

                {navItems.map((item) => {
                    const isActive = location.pathname === item.path || (item.path.startsWith('/#') && location.hash === item.path.substring(1));

                    return (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="relative px-4 py-2 flex flex-col items-center gap-1 group"
                        >
                            <motion.div
                                animate={isActive ? { y: -5, scale: 1.1 } : { y: 0, scale: 1 }}
                                className={`${isActive ? 'text-eco' : 'text-white/40'} transition-colors duration-300`}
                            >
                                <item.icon size={22} className={isActive ? 'glow-green' : ''} />
                            </motion.div>

                            <span className={`text-[8px] font-black uppercase tracking-widest ${isActive ? 'text-eco' : 'text-white/20'}`}>
                                {item.name}
                            </span>

                            {isActive && (
                                <motion.div
                                    layoutId="mobileNavActive"
                                    className="absolute -top-1 w-1 h-1 bg-eco rounded-full glow-green"
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
