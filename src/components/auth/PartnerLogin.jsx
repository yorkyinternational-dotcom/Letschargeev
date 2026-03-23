import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, KeyRound, AlertCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const PartnerLogin = () => {
    const [step, setStep] = useState('credentials'); // 'credentials' | '2fa'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [twoFactor, setTwoFactor] = useState('');
    const [error, setError] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleCredentialsSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!email.includes('@')) {
            setError('Please enter a valid business email');
            return;
        }
        if (password.length < 8) {
            setError('Password must be at least 8 characters');
            return;
        }

        setIsProcessing(true);
        // Mimic credentials check
        setTimeout(() => {
            setIsProcessing(false);
            setStep('2fa');
        }, 800);
    };

    const handle2FASubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (twoFactor.length < 6) {
            setError('Enter the 6-digit authenticator code');
            return;
        }

        setIsProcessing(true);
        try {
            await login('partner', { email });
            // Role based router sends partner to dashboard/analytics based on task B
            navigate('/dashboard/analytics', { replace: true });
        } catch (err) {
            setError('2FA verification failed');
            setIsProcessing(false);
        }
    };

    return (
        <div className="w-full">
            <AnimatePresence mode="wait">
                {step === 'credentials' ? (
                    <motion.form
                        key="credentials"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        onSubmit={handleCredentialsSubmit}
                        className="space-y-4"
                    >
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Business Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                                    <Mail size={16} />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="contact@company.com"
                                    className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition-all dark:text-white"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Secure Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                                    <Lock size={16} />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition-all dark:text-white font-mono"
                                />
                            </div>
                            {error && (
                                <p className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle size={12} /> {error}</p>
                            )}
                        </div>

                        <div className="flex justify-end pt-1">
                            <a href="#" className="text-xs text-accent-green hover:underline">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            disabled={isProcessing}
                            className="w-full relative flex items-center justify-center gap-2 py-3.5 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-sm rounded-xl hover:opacity-90 transition-all group overflow-hidden mt-4"
                        >
                            {isProcessing ? (
                                <div className="w-5 h-5 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    <span>Sign In Securely</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>

                        <div className="text-center mt-6">
                            <span className="text-sm text-slate-500 dark:text-slate-400">New partner? </span>
                            <a href="/partner-kyc" className="text-sm font-bold text-accent-green hover:underline">Apply for an account</a>
                        </div>
                    </motion.form>
                ) : (
                    <motion.form
                        key="2fa"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        onSubmit={handle2FASubmit}
                        className="space-y-6"
                    >
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-white rounded-full mb-3">
                                <KeyRound size={24} />
                            </div>
                            <h3 className="text-lg font-bold dark:text-white mb-1">Mandatory 2FA</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Enter the 6-digit code from your Authenticator App
                            </p>
                        </div>

                        <div className="space-y-1">
                            <input
                                type="text"
                                maxLength="6"
                                value={twoFactor}
                                onChange={(e) => setTwoFactor(e.target.value.replace(/\D/g, ''))}
                                placeholder="000000"
                                className="w-full text-center tracking-[0.5em] text-2xl py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition-all dark:text-white font-mono"
                            />
                            {error && (
                                <p className="text-xs text-red-500 flex items-center justify-center gap-1 mt-2"><AlertCircle size={12} /> {error}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isProcessing || twoFactor.length < 6}
                            className="w-full flex items-center justify-center gap-2 py-3.5 bg-accent-green text-black font-bold uppercase disabled:opacity-70 tracking-widest text-sm rounded-xl hover:bg-white hover:text-black transition-all"
                        >
                            {isProcessing ? (
                                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <span>Verify Identity</span>
                            )}
                        </button>

                        <div className="text-center">
                            <button
                                type="button"
                                onClick={() => setStep('credentials')}
                                className="text-xs text-slate-500 hover:text-accent-green transition-colors uppercase tracking-widest font-bold"
                            >
                                Back to Login
                            </button>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PartnerLogin;
