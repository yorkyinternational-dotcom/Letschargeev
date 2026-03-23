import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
    LogOut, Zap, IndianRupee, Activity, Users, MapPin, 
    LayoutDashboard, History, Settings, ChevronDown, Bell,
    Search, Menu, X, BatteryCharging, AlertTriangle, CheckCircle2,
    Calendar, ArrowUpRight, ArrowDownRight, Wallet, Moon, Sun
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../components/layout/Logo';

// --- ROBUST MOCK DATA ---
const NOTIFICATIONS = [
    { id: 1, title: 'New Payment Received', message: 'You have received ₹450 from ST-8996.', time: '2 mins ago', type: 'success' },
    { id: 2, title: 'Station Offline', message: 'Station ST-8994 is currently unreachable.', time: '1 hour ago', type: 'error' },
    { id: 3, title: 'Maintenance Alert', message: 'Scheduled maintenance for ST-8992 tomorrow.', time: '5 hours ago', type: 'warning' },
];

const REVENUE_DATA = [120, 180, 150, 250, 220, 300, 280, 350, 420, 380, 500, 480];
const ENERGY_DATA = [80, 120, 100, 180, 150, 200, 180, 250, 300, 250, 350, 320];
const SPARKLINE_DATA = {
    revenue: [30, 40, 35, 50, 49, 60, 70, 91, 125, 120, 140, 160],
    energy: [10, 20, 15, 25, 22, 30, 28, 45, 50, 55, 60, 75],
    sessions: [5, 8, 6, 12, 10, 15, 14, 20, 25, 22, 28, 32],
    uptime: [99, 99, 98, 99, 100, 100, 99, 100, 100, 99.5, 99.8, 99.9]
};

const STATIONS = [
    { id: 'ST-8992', name: 'Delhi NCR Hub - Sector 62', type: 'DC Fast 60kW', status: 'charging', connectors: '2/2 Active', revenue: '₹4,520' },
    { id: 'ST-8993', name: 'Cyber Hub Expressway', type: 'DC Fast 120kW', status: 'available', connectors: '0/4 Active', revenue: '₹1,200' },
    { id: 'ST-8994', name: 'Noida City Centre Mall', type: 'AC Type-2 22kW', status: 'faulted', connectors: 'Offline', revenue: '₹0' },
    { id: 'ST-8995', name: 'Gurugram Tech Park', type: 'DC Fast 30kW', status: 'charging', connectors: '1/1 Active', revenue: '₹2,140' },
    { id: 'ST-8996', name: 'Connaught Place Parking', type: 'AC Type-2 22kW', status: 'available', connectors: '0/2 Active', revenue: '₹450' },
    { id: 'ST-8997', name: 'Aerocity Hospitality Dist', type: 'DC Fast 60kW', status: 'available', connectors: '0/2 Active', revenue: '₹3,890' },
];

const TRANSACTIONS = [
    { id: 'TRX-8921', user: '+91 98*** **321', station: 'Delhi NCR (ST-8992)', time: '10 mins ago', energy: '14.24 kWh', cost: '₹284.80', status: 'Ongoing' },
    { id: 'TRX-8920', user: '+91 87*** **902', station: 'Gurugram (ST-8995)', time: '45 mins ago', energy: '32.50 kWh', cost: '₹650.00', status: 'Completed' },
    { id: 'TRX-8919', user: '+91 76*** **114', station: 'Cyber Hub (ST-8993)', time: '2 hours ago', energy: '45.00 kWh', cost: '₹900.00', status: 'Completed' },
    { id: 'TRX-8918', user: '+91 99*** **885', station: 'Noida City (ST-8994)', time: '3 hours ago', energy: '8.40 kWh', cost: '₹168.00', status: 'Failed' },
    { id: 'TRX-8917', user: '+91 63*** **441', station: 'Aerocity (ST-8997)', time: '5 hours ago', energy: '22.10 kWh', cost: '₹442.00', status: 'Completed' },
];

// --- SUBCOMPONENTS ---

const MiniSparkline = ({ data, color, fill }) => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const step = 100 / (data.length - 1);
    const points = data.map((val, i) => `${i * step},${30 - ((val - min) / range) * 25}`).join(' L ');
    
    return (
        <svg viewBox="0 -5 100 40" className="w-16 h-10 opacity-100" preserveAspectRatio="none">
            <path d={`M ${points}`} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d={`M 0,35 L ${points} L 100,35 Z`} fill={fill} opacity="0.3" />
        </svg>
    );
};

const StatCard = ({ title, value, prefix, suffix, trend, trendUp = true, sparklineData, colorKey }) => {
    const colors = {
        emerald: { stroke: '#10b981', fill: 'url(#gradEmerald)', text: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
        blue: { stroke: '#3b82f6', fill: 'url(#gradBlue)', text: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-500/10' },
        indigo: { stroke: '#6366f1', fill: 'url(#gradIndigo)', text: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-50 dark:bg-indigo-500/10' },
        slate: { stroke: '#64748b', fill: 'url(#gradSlate)', text: 'text-slate-600 dark:text-slate-400', bg: 'bg-slate-50 dark:bg-slate-500/10' }
    };
    const c = colors[colorKey];

    return (
        <div className="bg-white dark:bg-[#111822] border border-slate-200/60 dark:border-white/5 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:shadow-none hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 relative group flex flex-col justify-between h-full">
            
            <svg className="absolute w-0 h-0">
                <defs>
                    <linearGradient id="gradEmerald" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10b981" stopOpacity="0.4"/><stop offset="100%" stopColor="#10b981" stopOpacity="0"/></linearGradient>
                    <linearGradient id="gradBlue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4"/><stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/></linearGradient>
                    <linearGradient id="gradIndigo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6366f1" stopOpacity="0.4"/><stop offset="100%" stopColor="#6366f1" stopOpacity="0"/></linearGradient>
                    <linearGradient id="gradSlate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#64748b" stopOpacity="0.4"/><stop offset="100%" stopColor="#64748b" stopOpacity="0"/></linearGradient>
                </defs>
            </svg>

            <div className="flex justify-between items-start mb-2">
                <h3 className="text-[13px] font-medium text-slate-500 dark:text-slate-400">{title}</h3>
                <div className={`flex items-center gap-1 ${c.bg} ${c.text} px-2 py-0.5 rounded-md text-[11px] font-semibold`}>
                    {trendUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                    {trend}
                </div>
            </div>
            
            <div className="flex items-end justify-between mt-auto pt-2">
                <div className="flex items-baseline gap-1">
                    {prefix && <span className="text-xl font-medium text-slate-400">{prefix}</span>}
                    <span className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">{value}</span>
                    {suffix && <span className="text-sm font-medium text-slate-500 ml-1 mb-1">{suffix}</span>}
                </div>
                <div className="mb-0.5">
                    <MiniSparkline data={sparklineData} color={c.stroke} fill={c.fill} />
                </div>
            </div>
        </div>
    );
};

const CustomAreaChart = () => {
    const makePath = (data) => {
        const max = 600; 
        const step = 800 / (data.length - 1);
        return data.map((val, i) => `${i === 0 ? 'M' : 'L'} ${i * step},${300 - (val / max) * 250}`).join(' ');
    };

    const revPath = makePath(REVENUE_DATA);
    const engPath = makePath(ENERGY_DATA);

    return (
        <div className="w-full h-72 sm:h-80 relative bg-white dark:bg-[#111822] rounded-2xl border border-slate-200/60 dark:border-white/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="absolute inset-0 flex flex-col justify-between py-6 px-4 sm:px-8 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-full border-t border-slate-100 dark:border-white/5 relative">
                        <span className="absolute -top-2.5 -left-1 text-[10px] text-slate-400 font-medium bg-white dark:bg-[#111822] pr-2">
                            {600 - i * 150}
                        </span>
                    </div>
                ))}
            </div>

            <svg viewBox="0 0 800 300" className="absolute inset-0 w-full h-full p-6 pt-8" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="chartIndigo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6366f1" stopOpacity="0.2"/><stop offset="100%" stopColor="#6366f1" stopOpacity="0"/></linearGradient>
                    <linearGradient id="chartEmerald" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10b981" stopOpacity="0.2"/><stop offset="100%" stopColor="#10b981" stopOpacity="0"/></linearGradient>
                </defs>
                
                <path d={`${engPath} L 800,300 L 0,300 Z`} fill="url(#chartIndigo)" />
                <path d={engPath} fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                
                <path d={`${revPath} L 800,300 L 0,300 Z`} fill="url(#chartEmerald)" />
                <path d={revPath} fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};

// --- EARNINGS & PAYOUTS TAB ---
const EarningsPayoutsTab = () => {
    const [payouts, setPayouts] = useState([
        { id: 'W-00921', date: 'Oct 12, 2026', amount: '₹12,450', method: 'Bank Transfer (HDFC ***441)', status: 'Completed' },
        { id: 'W-00814', date: 'Sep 28, 2026', amount: '₹8,900', method: 'Bank Transfer (HDFC ***441)', status: 'Completed' },
        { id: 'W-00702', date: 'Aug 14, 2026', amount: '₹4,200', method: 'Bank Transfer (HDFC ***441)', status: 'Completed' },
    ]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [availableBalance, setAvailableBalance] = useState(24500.50);

    const handlePayout = () => {
        if (availableBalance <= 0) return;
        setIsGenerating(true);
        setTimeout(() => {
            const newReq = {
                id: `W-00${Math.floor(Math.random() * 1000) + 1000}`,
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric'}),
                amount: `₹${availableBalance.toLocaleString(undefined, {minimumFractionDigits: 2})}`,
                method: 'Bank Transfer (HDFC ***441)',
                status: 'Processing'
            };
            setPayouts([newReq, ...payouts]);
            setAvailableBalance(0);
            setIsGenerating(false);
        }, 1500);
    };

    return (
        <div className="space-y-6 animate-fade-in relative z-10 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-[#111822] border border-slate-200/60 dark:border-white/5 rounded-2xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-2 text-slate-500 mb-2">
                            <Wallet size={16} />
                            <h2 className="text-sm font-medium">Available for Payout</h2>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl text-slate-400 font-medium">₹</span>
                            <span className="text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
                                {availableBalance.toLocaleString(undefined, {minimumFractionDigits: 2})}
                            </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-2">Next scheduled auto-payout: Nov 1, 2026</p>
                    </div>
                    
                    <button 
                        onClick={handlePayout}
                        disabled={isGenerating || availableBalance === 0}
                        className="px-6 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all disabled:opacity-50 flex items-center justify-center gap-2 w-full md:w-auto shadow-sm"
                    >
                        {isGenerating ? (
                            <>
                                <div className="w-4 h-4 border-2 border-slate-400/30 border-t-current rounded-full animate-spin"></div>
                                Processing Request...
                            </>
                        ) : availableBalance === 0 ? (
                            'Zero Balance'
                        ) : (
                            'Request Manual Payout'
                        )}
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-[#111822] border border-slate-200/60 dark:border-white/5 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
                <div className="p-5 border-b border-slate-200/60 dark:border-white/5">
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Payout History</h3>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-white/[0.02]">
                                <th className="py-3 px-5 font-medium text-slate-500 border-b border-slate-200/60 dark:border-white/5">ID</th>
                                <th className="py-3 px-5 font-medium text-slate-500 border-b border-slate-200/60 dark:border-white/5">Date</th>
                                <th className="py-3 px-5 font-medium text-slate-500 border-b border-slate-200/60 dark:border-white/5">Destination</th>
                                <th className="py-3 px-5 font-medium text-slate-500 border-b border-slate-200/60 dark:border-white/5 text-right">Amount</th>
                                <th className="py-3 px-5 font-medium text-slate-500 border-b border-slate-200/60 dark:border-white/5 flex justify-end">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payouts.map((req, i) => (
                                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 px-5 border-b border-slate-100 dark:border-white/5">
                                        <span className="font-mono text-slate-700 dark:text-slate-300">{req.id}</span>
                                    </td>
                                    <td className="py-4 px-5 border-b border-slate-100 dark:border-white/5">
                                        <span className="text-slate-600 dark:text-slate-400">{req.date}</span>
                                    </td>
                                    <td className="py-4 px-5 border-b border-slate-100 dark:border-white/5">
                                        <span className="text-slate-500">{req.method}</span>
                                    </td>
                                    <td className="py-4 px-5 border-b border-slate-100 dark:border-white/5 text-right">
                                        <span className="font-medium text-slate-900 dark:text-white">{req.amount}</span>
                                    </td>
                                    <td className="py-4 px-5 border-b border-slate-100 dark:border-white/5 flex justify-end">
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                            req.status === 'Completed' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400' : 
                                            req.status === 'Processing' ? 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 animate-pulse' : 
                                            'bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300'
                                        }`}>
                                            {req.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};



// --- MAIN PAGE ---

const DashboardAnalytics = ({ theme, toggleTheme }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [selectedTimeRange, setSelectedTimeRange] = useState('Today');
    const [activeTab, setActiveTab] = useState('Overview');

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const StatusBadge = ({ status }) => {
        const configs = {
            available: { color: 'text-emerald-700 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-500/10', icon: CheckCircle2, text: 'Available' },
            charging: { color: 'text-blue-700 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-500/10', icon: BatteryCharging, text: 'Charging' },
            faulted: { color: 'text-red-700 dark:text-red-400', bg: 'bg-red-50 dark:bg-red-500/10', icon: AlertTriangle, text: 'Faulted' },
        };
        const c = configs[status];
        const Icon = c.icon || AlertTriangle;
        
        return (
            <div className={`inline-flex items-center gap-1.5 px-2 py-1 ${c.bg} ${c.color} rounded-md text-xs font-medium`}>
                <Icon size={12} className={status === 'charging' ? 'animate-pulse' : ''} />
                {c.text}
            </div>
        );
    };

    return (
        <div className="flex h-screen bg-[#fafafa] dark:bg-[#0a0e14] overflow-hidden">
            {/* --- SIDEBAR --- */}
            <AnimatePresence>
                {(isSidebarOpen || window.innerWidth >= 1024) && (
                    <motion.aside
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="fixed lg:sticky top-0 left-0 z-[100] h-screen w-64 bg-white dark:bg-[#111822] border-r border-slate-200/60 dark:border-white/5 shadow-2xl lg:shadow-none flex flex-col"
                    >
                        <div className="p-4 flex items-center justify-between border-b border-slate-100 dark:border-white/5">
                            <Logo className="h-8" withText={true} theme={theme} />
                            <button className="lg:hidden text-slate-500 hover:text-slate-900" onClick={() => setIsSidebarOpen(false)}>
                                <X size={20} />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto px-3 py-6 space-y-1">
                            <div className="text-xs font-semibold text-slate-400 px-3 mb-3">Menu</div>
                            {[{ n: 'Overview', i: LayoutDashboard }, { n: 'Hardware Grid', i: MapPin }, { n: 'Live Sessions', i: Activity }, { n: 'Earnings & Payouts', i: Wallet }].map(item => (
                                <button
                                    key={item.n}
                                    onClick={() => {
                                        setActiveTab(item.n);
                                        setIsSidebarOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm font-medium ${activeTab === item.n ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 font-semibold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200'}`}
                                >
                                    <item.i size={18} className={activeTab === item.n ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'} />
                                    {item.n}
                                </button>
                            ))}
                        </div>
                        <div className="p-4 border-t border-slate-100 dark:border-white/5">
                            <div className="flex items-center gap-3 mb-4 px-2">
                                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center font-semibold text-slate-700 dark:text-slate-300">
                                    {(user?.name || 'P').charAt(0).toUpperCase()}
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <h4 className="text-sm font-semibold truncate text-slate-900 dark:text-white">{user?.name || 'Partner Account'}</h4>
                                    <p className="text-xs text-slate-500">{user?.partner_id || 'P-00CA82'}</p>
                                </div>
                            </div>
                            <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white rounded-lg transition-all">
                                <LogOut size={16} /> Sign out
                            </button>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* --- MAIN CONTENT AREA --- */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                {/* Topbar Header */}
                <header className="h-16 px-4 sm:px-8 flex items-center justify-between border-b border-slate-200/60 dark:border-white/5 bg-white/80 dark:bg-[#0a0e14]/80 backdrop-blur-md z-40 sticky top-0">
                    <div className="flex items-center gap-4">
                        <button className="lg:hidden text-slate-500 hover:text-slate-900" onClick={() => setIsSidebarOpen(true)}>
                            <Menu size={20} />
                        </button>
                        <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">{activeTab}</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-white/5 text-accent-yellow border border-white/10' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <div className="hidden sm:flex items-center bg-slate-100/80 dark:bg-white/5 rounded-lg p-0.5">
                            {['Today', '7D', '30D', 'YTD'].map(d => (
                                <button 
                                    key={d} 
                                    onClick={() => setSelectedTimeRange(d)}
                                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${selectedTimeRange === d ? 'bg-white dark:bg-[#1a2332] text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'}`}
                                > 
                                    {d} 
                                </button>
                            ))}
                        </div>
                        <div className="w-px h-6 bg-slate-200 dark:bg-white/10 hidden sm:block"></div>
                        
                        {/* Notifications Bell */}
                        <div className="relative">
                            <button 
                                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                                className={`relative p-2 rounded-full transition-all duration-300 ${isNotificationsOpen ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                            >
                                <Bell size={18} />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 border border-white dark:border-[#0a0e14] rounded-full"></span>
                            </button>

                            <AnimatePresence>
                                {isNotificationsOpen && (
                                    <>
                                        {/* Click outside backdrop */}
                                        <div 
                                            className="fixed inset-0 z-[60]" 
                                            onClick={() => setIsNotificationsOpen(false)}
                                        ></div>
                                        
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute right-0 mt-2 w-80 bg-white dark:bg-[#111822] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl z-[70] overflow-hidden"
                                        >
                                            <div className="p-4 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
                                                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Notifications</h3>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded-full">3 New</span>
                                            </div>
                                            <div className="max-h-[320px] overflow-y-auto">
                                                {NOTIFICATIONS.map((n) => (
                                                    <div key={n.id} className="p-4 border-b border-slate-50 dark:border-white/5 last:border-0 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors cursor-pointer group">
                                                        <div className="flex gap-3">
                                                            <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                                                                n.type === 'success' ? 'bg-emerald-500' : 
                                                                n.type === 'error' ? 'bg-rose-500' : 'bg-amber-500'
                                                            }`}></div>
                                                            <div className="flex-1">
                                                                <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{n.title}</p>
                                                                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{n.message}</p>
                                                                <p className="text-[10px] text-slate-400 mt-2">{n.time}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="p-3 bg-slate-50 dark:bg-white/[0.02] border-t border-slate-100 dark:border-white/5">
                                                <button className="w-full py-2 text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                                                    View all notifications
                                                </button>
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-4 sm:p-8 max-w-7xl mx-auto w-full">
                    {activeTab === 'Overview' && (
                        <div className="space-y-6 animate-fade-in">
                            {/* KPI Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <StatCard title="Total Revenue" value="₹34,250" trend="+12.5%" trendUp={true} sparklineData={SPARKLINE_DATA.revenue} colorKey="emerald" />
                                <StatCard title="Energy Delivered" value="1,420" suffix="kWh" trend="+8.2%" trendUp={true} sparklineData={SPARKLINE_DATA.energy} colorKey="blue" />
                                <StatCard title="Total Sessions" value="142" trend="-2.1%" trendUp={false} sparklineData={SPARKLINE_DATA.sessions} colorKey="indigo" />
                                <StatCard title="Network Uptime" value="99.8" suffix="%" trend="+0.1%" trendUp={true} sparklineData={SPARKLINE_DATA.uptime} colorKey="slate" />
                            </div>

                            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                                {/* Chart Segment */}
                                <div className="xl:col-span-2">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Revenue vs Operations</h2>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Revenue</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Energy</span>
                                            </div>
                                        </div>
                                    </div>
                                    <CustomAreaChart />
                                </div>

                                {/* Recent Activity Feed */}
                                <div className="xl:col-span-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Recent Payouts & Activity</h2>
                                        <a href="#" className="text-xs font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">View all</a>
                                    </div>
                                    <div className="bg-white dark:bg-[#111822] border border-slate-200/60 dark:border-white/5 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex-1 overflow-hidden flex flex-col">
                                        <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                                            {TRANSACTIONS.map((trx, idx) => (
                                                <div key={idx} className="flex justify-between items-center group cursor-pointer pb-4 border-b border-slate-100 dark:border-white/5 last:border-0 last:pb-0">
                                                    <div>
                                                        <p className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{trx.user}</p>
                                                        <p className="text-xs text-slate-500 mt-0.5">{trx.station}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-sm font-medium text-slate-900 dark:text-white">{trx.cost}</p>
                                                        <p className="text-xs text-slate-500 mt-0.5">{trx.time}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hardware Status Table */}
                            <div>
                                <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Active Hardware Units</h2>
                                <div className="bg-white dark:bg-[#111822] border border-slate-200/60 dark:border-white/5 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse text-sm">
                                            <thead>
                                                <tr className="bg-slate-50 dark:bg-white/[0.02]">
                                                    <th className="py-3 px-5 font-medium text-slate-500 border-b border-slate-200/60 dark:border-white/5">Station Designation</th>
                                                    <th className="py-3 px-5 font-medium text-slate-500 border-b border-slate-200/60 dark:border-white/5">Classification</th>
                                                    <th className="py-3 px-5 font-medium text-slate-500 border-b border-slate-200/60 dark:border-white/5">Status</th>
                                                    <th className="py-3 px-5 font-medium text-slate-500 border-b border-slate-200/60 dark:border-white/5">Port Status</th>
                                                    <th className="py-3 px-5 font-medium text-slate-500 border-b border-slate-200/60 dark:border-white/5 text-right">Daily Yield</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {STATIONS.map((station, i) => (
                                                    <tr key={station.id} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                                                        <td className="py-4 px-5 border-b border-slate-100 dark:border-white/5">
                                                            <div className="flex flex-col">
                                                                <span className="font-medium text-slate-900 dark:text-white">{station.name}</span>
                                                                <span className="text-xs text-slate-500 font-mono mt-0.5">{station.id}</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-5 border-b border-slate-100 dark:border-white/5 text-slate-600 dark:text-slate-400">{station.type}</td>
                                                        <td className="py-4 px-5 border-b border-slate-100 dark:border-white/5"><StatusBadge status={station.status} /></td>
                                                        <td className="py-4 px-5 border-b border-slate-100 dark:border-white/5 text-slate-600 dark:text-slate-400 text-xs">{station.connectors}</td>
                                                        <td className="py-4 px-5 border-b border-slate-100 dark:border-white/5 text-right font-medium text-slate-900 dark:text-white">{station.revenue}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Earnings & Payouts' && (
                        <EarningsPayoutsTab />
                    )}

                    {activeTab !== 'Overview' && activeTab !== 'Earnings & Payouts' && (
                        <div className="flex flex-col items-center justify-center h-[50vh] text-slate-400 space-y-4 animate-fade-in max-w-lg mx-auto text-center">
                            <Activity size={40} className="text-slate-300 dark:text-slate-600" />
                            <h2 className="text-lg font-medium text-slate-900 dark:text-white">Module Not Yet Active</h2>
                            <p className="text-sm">This section of the platform is currently undergoing deployment. Please check back later.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default DashboardAnalytics;
