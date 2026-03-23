import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Zap, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const DriverLogin = () => {
    const [step, setStep] = useState('phone'); // 'phone' | 'otp'
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        setError('');
        const cleanPhone = phone.replace(/\D/g, '');
        if (cleanPhone.length !== 10) {
            setError('Enter a valid 10-digit mobile number');
            return;
        }
        setIsProcessing(true);
        // Mimic sending OTP
        setTimeout(() => {
            setIsProcessing(false);
            setStep('otp');
        }, 800);
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (otp.length < 4) {
            setError('Enter a valid OTP');
            return;
        }

        setIsProcessing(true);
        try {
            await login('customer', { phone });
            navigate('/map', { replace: true });
        } catch (err) {
            setError('Failed to verify OTP');
            setIsProcessing(false);
        }
    };

    return (
        <div className="w-full">
            <AnimatePresence mode="wait">
                {step === 'phone' ? (
                    <motion.form
                        key="phone"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        onSubmit={handlePhoneSubmit}
                        className="space-y-4"
                    >
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Mobile Number</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                                    <span className="text-sm font-medium">+91</span>
                                </div>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="98765 43210"
                                    className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition-all dark:text-white"
                                />
                            </div>
                            {error && (
                                <p className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle size={12} /> {error}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isProcessing}
                            className="w-full relative flex items-center justify-center gap-2 py-3.5 bg-accent-green text-black font-bold uppercase disabled:opacity-70 tracking-widest text-sm rounded-xl hover:bg-white hover:text-black transition-all group overflow-hidden"
                        >
                            {isProcessing ? (
                                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    <span>Send OTP</span>
                                    <Zap size={16} className="group-hover:text-accent-green transition-colors" />
                                </>
                            )}
                        </button>

                        <div className="relative flex items-center py-4">
                            <div className="flex-grow border-t border-slate-200 dark:border-white/10"></div>
                            <span className="flex-shrink-0 mx-4 text-xs text-slate-400 uppercase tracking-widest">Or</span>
                            <div className="flex-grow border-t border-slate-200 dark:border-white/10"></div>
                        </div>

                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-3 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white font-medium rounded-xl hover:bg-slate-50 dark:hover:bg-white/10 transition-all text-sm"
                        >
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                            Continue with Google
                        </button>
                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-3 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-xl hover:opacity-90 transition-all text-sm"
                        >
                            <img src="https://www.svgrepo.com/show/511330/apple-173.svg" alt="Apple" className="w-5 h-5 dark:invert" />
                            Continue with Apple
                        </button>
                    </motion.form>
                ) : (
                    <motion.form
                        key="otp"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        onSubmit={handleOtpSubmit}
                        className="space-y-6"
                    >
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-green/20 text-accent-green rounded-full mb-3">
                                <Smartphone size={24} />
                            </div>
                            <h3 className="text-lg font-bold dark:text-white mb-1">Verify your number</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Enter the 6-digit code sent to +91 {phone.replace(/(\d{5})(\d{5})/, '$1 $2')}
                            </p>
                        </div>

                        <div className="space-y-1">
                            <input
                                type="text"
                                maxLength="6"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                                placeholder="000000"
                                className="w-full text-center tracking-[0.5em] text-2xl py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition-all dark:text-white font-mono"
                            />
                            {error && (
                                <p className="text-xs text-red-500 flex items-center justify-center gap-1 mt-2"><AlertCircle size={12} /> {error}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isProcessing || otp.length < 4}
                            className="w-full flex items-center justify-center gap-2 py-3.5 bg-accent-green text-black font-bold uppercase disabled:opacity-70 tracking-widest text-sm rounded-xl hover:bg-white hover:text-black transition-all group overflow-hidden"
                        >
                            {isProcessing ? (
                                <>
                                    <div className="w-5 h-5 flex items-center justify-center">
                                        <Zap size={20} className="animate-pulse text-black" fill="currentColor" />
                                    </div>
                                    <span>Charging...</span>
                                </>
                            ) : (
                                <>
                                    <span>Verify & Charge</span>
                                    <CheckCircle2 size={18} />
                                </>
                            )}
                        </button>
                        <div className="text-center">
                            <button
                                type="button"
                                onClick={() => setStep('phone')}
                                className="text-xs text-slate-500 hover:text-accent-green transition-colors uppercase tracking-widest font-bold"
                            >
                                Change Number
                            </button>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DriverLogin;
