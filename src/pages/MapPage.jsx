import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
    LogOut, Zap, Search, Menu, X, Filter, 
    Navigation, Settings, Bell, User
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../components/layout/Logo';
import ChargerMap from '../components/maps/ChargerMap';

const MapPage = ({ theme, toggleTheme }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [activeFilter, setActiveFilter] = useState('All');

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const filters = ['All', 'Fast DC', 'AC Type 2', 'Available'];

    return (
        <div className="flex flex-col h-screen bg-white dark:bg-[#050807] overflow-hidden selection:bg-accent-green/30 selection:text-accent-green font-sans transition-colors duration-500">
            {/* --- DRIVER HUD HEADER --- */}
            <header className="h-16 px-4 md:px-8 flex items-center justify-between border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-black/40 backdrop-blur-xl z-[1001] w-full shrink-0 transition-colors duration-500">
                <div className="flex items-center gap-6 lg:gap-12">
                    <div className="flex items-center gap-4">
                        <Logo className="h-8 md:h-10" withText={true} theme={theme} />
                    </div>
                    
                    <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white/5 rounded-2xl border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse shadow-[0_0_10px_#00E696]"></div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Network Live</span>
                    </div>
                </div>

                <div className="flex-1 max-w-xl mx-8 hidden md:block">
                    <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-[1.02]' : ''}`}>
                        <Search className={`absolute left-4 top-1/2 -translate-y-1/2 size={18} ${isSearchFocused ? 'text-accent-green' : 'text-slate-500'}`} />
                        <input 
                            type="text" 
                            placeholder="Find a station or enter city..."
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setIsSearchFocused(false)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm font-medium text-white placeholder:text-slate-600 focus:outline-none focus:border-accent-green/50 focus:bg-white/[0.08] transition-all"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-accent-yellow hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Zap size={18} /> : <Zap size={18} fill="currentColor" />}
                    </button>

                    <div className="hidden sm:flex flex-col items-end mr-2">
                        <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Ready to charge</p>
                        <p className="text-sm font-black text-slate-900 dark:text-white italic tracking-tight">{user?.name || 'Driver'}</p>
                    </div>
                    
                    <div className="relative group">
                        <button className="w-10 h-10 md:w-12 md:h-12 rounded-[20px] bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent-green hover:bg-white/10 transition-all shadow-xl group-active:scale-95">
                            <User size={20} />
                        </button>
                        
                        {/* Dropdown Menu */}
                        <div className="absolute right-0 mt-3 w-56 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-[1002]">
                            <div className="p-2">
                                <button className="w-full flex items-center gap-3 px-4 py-3 text-[11px] font-bold text-slate-400 hover:text-white uppercase tracking-widest transition-colors">
                                    <Settings size={14} /> Account Settings
                                </button>
                                <button className="w-full flex items-center gap-3 px-4 py-3 text-[11px] font-bold text-slate-400 hover:text-white uppercase tracking-widest transition-colors border-b border-white/5">
                                    <Bell size={14} /> Notifications
                                </button>
                                <button 
                                    onClick={handleLogout}
                                    className="w-full flex items-center gap-3 px-4 py-3 text-[11px] font-bold text-rose-500 hover:bg-rose-500/10 rounded-xl uppercase tracking-widest transition-all mt-1"
                                >
                                    <LogOut size={14} /> Terminate Session
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- FILTER BAR --- */}
            <div className="fixed top-20 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-auto z-[1000] flex gap-2 p-1 bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-x-auto no-scrollbar scroll-smooth">
                {filters.map(f => (
                    <button
                        key={f}
                        onClick={() => setActiveFilter(f)}
                        className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap flex-shrink-0 ${
                            activeFilter === f 
                            ? 'bg-accent-green text-black shadow-[0_0_15px_rgba(0,230,150,0.4)]' 
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
                        }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* --- MAP CONTAINER --- */}
            <main className="flex-1 relative overflow-hidden">
                <ChargerMap />
                
                {/* Floating Map Actions */}
                <div className="absolute right-6 top-28 z-[999] flex flex-col gap-3">
                    <button className="w-12 h-12 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-accent-green hover:text-black hover:border-accent-green transition-all shadow-2xl group">
                        <Navigation size={20} className="group-hover:rotate-45 transition-transform" />
                    </button>
                    <button className="w-12 h-12 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-accent-green hover:text-black hover:border-accent-green transition-all shadow-2xl">
                        <Filter size={20} />
                    </button>
                </div>

                {/* Cyber Status Indicator (Bottom Left) */}
                <div className="absolute bottom-6 left-6 z-[999] hidden md:flex items-center gap-4 px-5 py-3 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-[24px]">
                    <div className="relative">
                        <Zap size={20} className="text-accent-green fill-accent-green drop-shadow-[0_0_8px_#00E696]" />
                        <div className="absolute top-0 right-0 w-2 h-2 bg-accent-green rounded-full animate-ping opacity-50"></div>
                    </div>
                    <div>
                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Hardware Link</p>
                        <p className="text-[11px] font-black text-white italic tracking-tight">Encryption: RSA-4096 Active</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MapPage;
