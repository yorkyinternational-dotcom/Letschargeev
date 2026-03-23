import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft,
    ArrowRight,
    Smartphone,
    Mail,
    Lock,
    Zap,
    Building2,
    CheckCircle2,
    ShieldCheck,
    User
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/layout/Logo';
import FloatingInput from '../components/ui/FloatingInput';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [role, setRole] = useState('driver'); // 'driver' or 'partner'
    const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [step, setStep] = useState('credentials'); // 'credentials' | 'otp' | '2fa'

    // Form State
    const [fullName, setFullName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [twoFactor, setTwoFactor] = useState('');

    const [error, setError] = useState({});
    const [isProcessing, setIsProcessing] = useState(false);

    const { login, redirectAfterLogin, setRedirectAfterLogin } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(isDark);
    }, []);

    const handleRoleSwitch = (newRole) => {
        setRole(newRole);
        setStep('credentials');
        setError({});
    };

    const toggleAuthMode = () => {
        setAuthMode(prev => prev === 'login' ? 'signup' : 'login');
        setStep('credentials');
        setError({});
        // reset forms
        setPhone(''); setEmail(''); setPassword('');
        setFullName(''); setCompanyName(''); setConfirmPassword('');
        setOtp(''); setTwoFactor('');
    };

    const handleDriverSubmit = (e) => {
        e.preventDefault();
        if (role !== 'driver') return;

        if (step === 'credentials') {
            const cleanPhone = phone.replace(/\D/g, '');
            if (authMode === 'signup' && fullName.trim().length < 2) {
                setError({ fullName: 'Please enter a valid name.' });
                return;
            }
            if (cleanPhone.length !== 10) {
                setError({ phone: 'Enter a valid 10-digit number.' });
                return;
            }
            setIsProcessing(true);
            setTimeout(() => {
                setIsProcessing(false);
                setStep('otp');
            }, 800);
        } else if (step === 'otp') {
            if (otp.length < 4) {
                setError({ otp: 'Code too short.' });
                return;
            }
            executeLogin('customer', { phone, fullName, isSignup: authMode === 'signup' });
        }
    };

    const handlePartnerSubmit = (e) => {
        e.preventDefault();
        if (role !== 'partner') return;

        if (step === 'credentials') {
            if (authMode === 'signup' && companyName.trim().length < 2) {
                setError({ companyName: 'Company name required.' });
                return;
            }
            if (!email.includes('@')) {
                setError({ email: 'Valid business email required.' });
                return;
            }
            if (password.length < 8) {
                setError({ password: 'Password must be 8+ characters.' });
                return;
            }
            if (authMode === 'signup' && password !== confirmPassword) {
                setError({ confirmPassword: 'Passwords do not match.' });
                return;
            }
            setIsProcessing(true);
            setTimeout(() => {
                setIsProcessing(false);
                setStep('2fa'); // Acts as Email Verification OTP during signup
            }, 800);
        } else if (step === '2fa') {
            if (twoFactor.length < 6) {
                setError({ general: 'Enter 6-digit verification code.' });
                return;
            }
            executeLogin('partner', { email, companyName, isSignup: authMode === 'signup' });
        }
    };

    const executeLogin = async (roleType, data) => {
        setIsProcessing(true);
        try {
            await login(roleType, data);
            if (redirectAfterLogin) {
                const target = redirectAfterLogin;
                setRedirectAfterLogin(null);
                navigate(target, { replace: true });
            } else {
                if (authMode === 'signup') {
                    // Slight variation on successful signup
                    navigate(roleType === 'customer' ? '/map' : '/dashboard/analytics', { replace: true });
                } else {
                    navigate(roleType === 'customer' ? '/map' : '/dashboard/analytics', { replace: true });
                }
            }
        } catch (err) {
            setError({ general: 'Authentication failed. Try again.' });
            setIsProcessing(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[#050807] transition-colors duration-500 overflow-hidden font-sans selection:bg-accent-green/30 selection:text-accent-green">

            {/* Left Panel: Branding & Dynamic Effects */}
            <div className="hidden md:flex flex-col flex-1 relative bg-black p-16 justify-between overflow-hidden">
                {/* Dynamic Atmosphere */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                            x: [0, 50, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-accent-green/20 blur-[120px] rounded-full"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.05, 0.15, 0.05],
                            x: [0, -40, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent-green/10 blur-[100px] rounded-full"
                    />
                    {/* The Grid */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black"></div>
                </div>

                <div className="relative z-10">
                    <Link to="/" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-accent-green transition-all group">
                        <ArrowLeft size={16} className="mr-3 group-hover:-translate-x-1 transition-transform" />
                        Return to Hub
                    </Link>
                </div>

                <div className="relative z-10 max-w-xl">
                    <div className="mb-12">
                        <Logo className="h-14" withText={true} theme="dark" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl lg:text-7xl font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase italic">
                            Powering <br />
                            <span className="text-accent-green">Sustainable</span><br />
                            Mobility.
                        </h1>
                        <div className="h-1 w-24 bg-accent-green mb-8 shadow-[0_0_20px_#00E696]"></div>
                        <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-sm tracking-tight opacity-80">
                            Advanced infrastructure management for the next generation of electric vehicle networks.
                        </p>
                    </motion.div>
                </div>

                <div className="relative z-10 flex items-center gap-6 md:gap-8">
                    <div className="text-[9px] md:text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">
                        LCEV Systems © 2026
                    </div>
                    <div className="flex gap-4">
                        <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-accent-green animate-pulse"></div>
                        <div className="text-[9px] md:text-[10px] font-black text-accent-green uppercase tracking-[0.2em] animate-pulse">Terminal Secure</div>
                    </div>
                </div>
            </div>

            {/* Right Panel: The Glass Gateway */}
            <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-12 relative bg-[#0a0f0d] overflow-y-auto custom-scrollbar">

                {/* Mobile Header elements */}
                <div className="absolute top-8 left-8 md:hidden z-50">
                    <Link to="/" className="w-12 h-12 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-white backdrop-blur-xl">
                        <ArrowLeft size={20} />
                    </Link>
                </div>
                <div className="absolute top-8 right-8 md:hidden z-50">
                    <Logo className="h-10" withText={false} theme="dark" />
                </div>

                <div className="w-full max-w-[440px] relative py-12 md:py-0">

                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-green/5 blur-[60px] rounded-full pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent-green/5 blur-[60px] rounded-full pointer-events-none" />

                    {/* Role Switcher */}
                    <div className="flex p-1 bg-white/5 backdrop-blur-2xl rounded-[32px] mb-8 sm:mb-12 relative border border-white/10 shadow-2xl overflow-hidden mt-12 md:mt-0">
                        <button
                            onClick={() => handleRoleSwitch('driver')}
                            className={`flex-1 flex items-center justify-center gap-2.5 py-4 rounded-[24px] text-xs font-black uppercase tracking-widest transition-all relative z-10 ${role === 'driver' ? 'text-black' : 'text-slate-500 hover:text-white'
                                }`}
                        >
                            <Zap size={16} fill={role === 'driver' ? "currentColor" : "none"} /> Driver
                        </button>
                        <button
                            onClick={() => handleRoleSwitch('partner')}
                            className={`flex-1 flex items-center justify-center gap-2.5 py-4 rounded-[24px] text-xs font-black uppercase tracking-widest transition-all relative z-10 ${role === 'partner' ? 'text-black' : 'text-slate-500 hover:text-white'
                                }`}
                        >
                            <Building2 size={16} fill={role === 'partner' ? "currentColor" : "none"} /> Partner
                        </button>

                        <motion.div
                            initial={false}
                            animate={{ x: role === 'partner' ? '100%' : '0%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute inset-y-1.5 left-1.5 w-[calc(50%-6px)] bg-accent-green rounded-[24px] shadow-[0_0_20px_rgba(0,230,150,0.4)]"
                        />
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${role}-${authMode}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                            className="w-full px-4 sm:px-0"
                        >
                            <div className="mb-10 text-center sm:text-left">
                                <motion.h2
                                    className="text-3xl sm:text-5xl font-black mb-3 text-white tracking-tighter uppercase italic leading-none"
                                >
                                    {authMode === 'login' 
                                        ? (role === 'driver' ? 'Welcome Back' : 'System Access') 
                                        : (role === 'driver' ? 'Create Account' : 'Partner Setup')}
                                </motion.h2>
                                <div className="flex items-center gap-3 justify-center sm:justify-start">
                                    <div className="w-8 h-[2px] bg-accent-green"></div>
                                    <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em]">
                                        {step === 'credentials' 
                                            ? (authMode === 'login' ? 'Authentication Gate' : 'Registration Protocol') 
                                            : 'Identity Verification'}
                                    </p>
                                </div>
                            </div>

                            <form onSubmit={role === 'driver' ? handleDriverSubmit : handlePartnerSubmit} className="space-y-4 sm:space-y-6">
                                {step === 'credentials' ? (
                                    <div className="space-y-4">
                                        {role === 'driver' ? (
                                            <>
                                                {authMode === 'signup' && (
                                                    <FloatingInput
                                                        label="Full Name"
                                                        type="text"
                                                        icon={User}
                                                        value={fullName}
                                                        onChange={(e) => {
                                                            setFullName(e.target.value);
                                                            setError({ ...error, fullName: '' });
                                                        }}
                                                        error={error.fullName}
                                                        className="bg-white/5 border-white/10 dark:bg-white/5 text-white"
                                                    />
                                                )}
                                                <FloatingInput
                                                    label="Mobile Number"
                                                    type="tel"
                                                    icon={Smartphone}
                                                    value={phone}
                                                    onChange={(e) => {
                                                        setPhone(e.target.value.replace(/\D/g, ''));
                                                        setError({ ...error, phone: '' });
                                                    }}
                                                    maxLength={10}
                                                    error={error.phone}
                                                    className="bg-white/5 border-white/10 dark:bg-white/5 text-white"
                                                />
                                                {authMode === 'signup' && (
                                                    <FloatingInput
                                                        label="Email Address (Optional)"
                                                        type="email"
                                                        icon={Mail}
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="bg-white/5 border-white/10 dark:bg-white/5 text-white"
                                                    />
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                {authMode === 'signup' && (
                                                    <FloatingInput
                                                        label="Company Name"
                                                        type="text"
                                                        icon={Building2}
                                                        value={companyName}
                                                        onChange={(e) => {
                                                            setCompanyName(e.target.value);
                                                            setError({ ...error, companyName: '' });
                                                        }}
                                                        error={error.companyName}
                                                        className="bg-white/5 border-white/10 dark:bg-white/5 text-white"
                                                    />
                                                )}
                                                <FloatingInput
                                                    label="Business Email"
                                                    type="email"
                                                    icon={Mail}
                                                    value={email}
                                                    onChange={(e) => {
                                                        setEmail(e.target.value);
                                                        setError({ ...error, email: '' });
                                                    }}
                                                    error={error.email}
                                                    className="bg-white/5 border-white/10 dark:bg-white/5 text-white"
                                                />
                                                <div className="relative">
                                                    <FloatingInput
                                                        label="Access Key (Password)"
                                                        type="password"
                                                        icon={Lock}
                                                        value={password}
                                                        onChange={(e) => {
                                                            setPassword(e.target.value);
                                                            setError({ ...error, password: '' });
                                                        }}
                                                        error={error.password}
                                                        className="bg-white/5 border-white/10 dark:bg-white/5 text-white"
                                                    />
                                                    {authMode === 'login' && (
                                                        <button type="button" className="absolute right-6 top-1/2 -translate-y-1/2 text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-accent-green transition-colors">
                                                            Reset
                                                        </button>
                                                    )}
                                                </div>
                                                {authMode === 'signup' && (
                                                    <FloatingInput
                                                        label="Confirm Access Key"
                                                        type="password"
                                                        icon={Lock}
                                                        value={confirmPassword}
                                                        onChange={(e) => {
                                                            setConfirmPassword(e.target.value);
                                                            setError({ ...error, confirmPassword: '' });
                                                        }}
                                                        error={error.confirmPassword}
                                                        className="bg-white/5 border-white/10 dark:bg-white/5 text-white"
                                                    />
                                                )}
                                            </>
                                        )}
                                    </div>
                                ) : (
                                    <>
                                        <div className="space-y-6">
                                            <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                {role === 'driver' ? 'Enter Verify Code sent to phone' : (authMode === 'login' ? 'Input Authenticator Code' : 'Enter Email Verification OTP')}
                                            </p>
                                            <div className="flex gap-4 justify-center">
                                                <input
                                                    autoFocus
                                                    type="text"
                                                    maxLength={role === 'driver' ? 6 : 6}
                                                    value={role === 'driver' ? otp : twoFactor}
                                                    onChange={(e) => {
                                                        const val = e.target.value.replace(/\D/g, '');
                                                        role === 'driver' ? setOtp(val) : setTwoFactor(val);
                                                        setError({});
                                                    }}
                                                    className="w-full text-center py-6 bg-white/5 border border-white/10 rounded-[28px] text-4xl font-black tracking-[0.5em] text-accent-green outline-none focus:border-accent-green transition-all shadow-inner placeholder:text-white/5"
                                                    placeholder="••••••"
                                                />
                                            </div>
                                            {error.otp || error.general && <p className="text-red-500 text-[10px] text-center font-bold uppercase tracking-widest">{error.otp || error.general}</p>}
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isProcessing}
                                            className="w-full h-16 md:h-[72px] relative flex items-center justify-center group overflow-hidden bg-accent-green rounded-2xl md:rounded-[28px] shadow-[0_12px_40px_-12px_rgba(0,230,150,0.5)] active:scale-[0.98] transition-all disabled:opacity-50 mt-8"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
    
                                            {isProcessing ? (
                                                <div className="w-5 h-5 md:w-6 md:h-6 border-[3px] border-black/20 border-t-black rounded-full animate-spin"></div>
                                            ) : (
                                                <div className="flex items-center justify-center gap-3 relative z-10 transition-transform group-hover:scale-105 duration-300">
                                                    <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-black">
                                                        {step === 'credentials' 
                                                            ? (authMode === 'login' ? 'Initialize Access' : 'Create Account') 
                                                            : 'Verify Identity'}
                                                    </span>
                                                    <ArrowRight size={18} className="text-black" />
                                                </div>
                                            )}
                                        </button>
                                    </>
                                )}

                                {step === 'otp' || step === '2fa' ? (
                                    <div className="text-center pt-4">
                                        <button
                                            type="button"
                                            onClick={() => setStep('credentials')}
                                            className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 hover:text-accent-green transition-all"
                                        >
                                            Return to step 01
                                        </button>
                                    </div>
                                ) : (
                                    <div className="text-center pt-6 space-y-6">
                                        <button 
                                            type="button" 
                                            onClick={toggleAuthMode}
                                            className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-accent-green transition-colors"
                                        >
                                            {authMode === 'login' 
                                                ? (role === 'driver' ? "New driver? Create an account" : "New partner? Request Integration")
                                                : "Already have access? Sign In Instead"}
                                        </button>

                                        {role === 'driver' && authMode === 'login' && (
                                            <div className="pt-2">
                                                <div className="relative flex items-center mb-6">
                                                    <div className="flex-grow border-t border-white/5"></div>
                                                    <span className="flex-shrink-0 mx-6 text-[9px] text-slate-700 font-black uppercase tracking-[0.4em]">Social Auth</span>
                                                    <div className="flex-grow border-t border-white/5"></div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <button type="button" className="flex items-center justify-center py-4 bg-white/5 border border-white/10 rounded-[20px] hover:bg-white/10 hover:border-white/20 transition-all group">
                                                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100" />
                                                    </button>
                                                    <button type="button" className="flex items-center justify-center py-4 bg-white/5 border border-white/10 rounded-[20px] hover:bg-white/10 hover:border-white/20 transition-all group">
                                                        <img src="https://www.svgrepo.com/show/511330/apple-173.svg" alt="Apple" className="w-5 h-5 invert grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100" />
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </form>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Cyber Security Badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-30 pointer-events-none pb-4 md:pb-0">
                    <ShieldCheck size={16} className="text-accent-green" />
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">RSA-4096 Encrypted</span>
                </div>
            </div>
        </div>
    );
};

export default Login;
