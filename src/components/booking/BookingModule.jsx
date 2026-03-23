import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X,
    Zap,
    IndianRupee,
    ChevronRight,
    ArrowRight,
    AlertCircle,
    ShieldCheck,
    CheckCircle2
} from 'lucide-react';

const BookingModule = ({ station, connector, onClose, onConfirm }) => {
    const [bookingType, setBookingType] = useState('Amount'); // 'Amount', 'Energy', 'Full'
    const [value, setValue] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);

    const quickValues = bookingType === 'Amount'
        ? [100, 200, 500, 1000]
        : [10, 20, 50, 80];

    const handleSliderChange = (e) => {
        const val = parseInt(e.target.value);
        if (isConfirmed) return;
        setSliderValue(val);
        if (val > 95) {
            handleConfirm();
        }
    };

    const handleConfirm = () => {
        setIsConfirmed(true);
        setSliderValue(100);
        setTimeout(() => {
            onConfirm({
                station,
                connector,
                bookingType,
                value: bookingType === 'Full' ? '100' : value,
                timestamp: new Date()
            });
        }, 1500);
    };

    const isInputValid = bookingType === 'Full' || (value && parseFloat(value) > 0);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
        >
            <motion.div
                initial={{ y: '100%', scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: '100%', scale: 0.95 }}
                className="w-full max-w-lg bg-white dark:bg-[#0a0f0d] rounded-t-[40px] sm:rounded-[40px] shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-white/10"
            >
                {/* Header Section */}
                <div className="p-8 pb-4 relative">
                    {!isConfirmed && (
                        <button
                            onClick={onClose}
                            className="absolute right-6 top-6 w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-white/5 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
                        >
                            <X size={20} />
                        </button>
                    )}

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-accent-green/10 rounded-3xl flex items-center justify-center text-accent-green ring-1 ring-accent-green/20">
                            <Zap size={32} fill="currentColor" className={isConfirmed ? "animate-ping" : "animate-pulse"} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Set Your Limit</p>
                            <p className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                                Start Charging
                            </p>
                        </div>
                    </div>

                    {/* Booking Type Selector */}
                    {!isConfirmed && (
                        <div className="flex p-1.5 bg-slate-100 dark:bg-white/5 rounded-2xl gap-1">
                            {['Amount', 'Energy', 'Full'].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => {
                                        setBookingType(type);
                                        setValue('');
                                        setSliderValue(0);
                                    }}
                                    className={`flex-1 py-3 px-4 rounded-[14px] text-xs font-black uppercase tracking-widest transition-all ${bookingType === type
                                        ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-md'
                                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="p-8 pt-4 flex-1">
                    <AnimatePresence mode="wait">
                        {isConfirmed ? (
                            <motion.div
                                key="success-internal"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-6"
                            >
                                <div className="w-20 h-20 bg-accent-green/20 text-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 size={48} fill="currentColor" />
                                </div>
                                <p className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-2">
                                    Initializing...
                                </p>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Waking up the charger at {station.name}</p>
                            </motion.div>
                        ) : bookingType !== 'Full' ? (
                            <motion.div
                                key="input"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="relative group">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center transition-colors group-focus-within:text-accent-green text-slate-400">
                                        {bookingType === 'Amount' ? <IndianRupee size={28} /> : <Zap size={28} />}
                                    </div>
                                    <input
                                        type="number"
                                        value={value}
                                        onChange={(e) => {
                                            setValue(e.target.value);
                                            setSliderValue(0);
                                        }}
                                        placeholder={bookingType === 'Amount' ? '0.00' : '0.0'}
                                        className="w-full bg-slate-50 dark:bg-white/5 border-2 border-slate-100 dark:border-white/5 focus:border-accent-green rounded-3xl py-6 sm:py-8 pl-12 sm:pl-16 pr-6 sm:pr-8 text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tighter focus:outline-none transition-all placeholder:text-slate-200 dark:placeholder:text-white/5 tabular-nums"
                                    />
                                    <div className="absolute right-8 top-1/2 -translate-y-1/2">
                                        <span className="text-sm font-black text-slate-300 uppercase tracking-widest">
                                            {bookingType === 'Amount' ? 'INR' : 'kWh'}
                                        </span>
                                    </div>
                                </div>

                                {/* Quick Selection */}
                                <div className="grid grid-cols-4 gap-3">
                                    {quickValues.map((val) => (
                                        <button
                                            key={val}
                                            onClick={() => {
                                                setValue(val.toString());
                                                setSliderValue(0);
                                            }}
                                            className="py-4 rounded-2xl bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-all text-sm shadow-sm ring-1 ring-inset ring-slate-100 dark:ring-white/5"
                                        >
                                            {bookingType === 'Amount' ? '₹' : ''}{val}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="full"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-10 bg-accent-green/5 rounded-[40px] border-2 border-accent-green/20 flex flex-col items-center justify-center text-center space-y-4"
                            >
                                <div className="w-20 h-20 rounded-full bg-accent-green/10 flex items-center justify-center text-accent-green">
                                    <ShieldCheck size={40} />
                                </div>
                                <div>
                                    <p className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Full Charge Mode</p>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Charging will stop at 100% SoC</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Fees & Wallet Info */}
                    {!isConfirmed && (
                        <div className="mt-8 p-6 bg-amber-50 dark:bg-amber-500/5 rounded-3xl border border-amber-100 dark:border-amber-500/10 flex gap-4">
                            <AlertCircle size={24} className="text-amber-500 shrink-0" />
                            <div>
                                <p className="text-[10px] font-black text-amber-600 dark:text-amber-500/60 uppercase tracking-widest mb-1">Pre-authorization</p>
                                <p className="text-xs text-amber-700 dark:text-amber-200/80 font-semibold leading-relaxed">
                                    A minimum wallet balance of ₹200 is required. Actual amount will be deducted post-session.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* SLIDE TO START */}
                <div className="p-8 pt-0 pb-12">
                    <div className={`relative h-20 bg-slate-100 dark:bg-white/5 rounded-[32px] overflow-hidden group transition-opacity ${!isInputValid ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        {/* Background Text */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="text-[11px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.4em] translate-x-4">
                                {isConfirmed ? 'Starting session...' : 'Slide to Start Charge'}
                            </span>
                        </div>

                        {/* Progress Glow */}
                        <div
                            className="absolute inset-y-0 left-0 bg-accent-green transition-all duration-75"
                            style={{ width: `${sliderValue}%` }}
                        />

                        {/* The Slider Input */}
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderValue}
                            onChange={handleSliderChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 disabled:cursor-not-allowed"
                            disabled={isConfirmed || !isInputValid}
                        />

                        {/* The Draggable Knob (Visual) */}
                        <div
                            className="absolute top-2 bottom-2 bg-white dark:bg-accent-green rounded-[24px] shadow-xl flex items-center justify-center transition-all duration-75 pointer-events-none"
                            style={{
                                left: `calc(${sliderValue}% * 0.8 + 8px)`,
                                width: '64px'
                            }}
                        >
                            {isConfirmed ? (
                                <div className="animate-spin text-black">
                                    <Zap size={24} fill="currentColor" />
                                </div>
                            ) : (
                                <ArrowRight size={24} className="text-black group-hover:translate-x-1 transition-transform" />
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default BookingModule;
