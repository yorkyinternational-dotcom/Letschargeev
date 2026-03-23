import { useState } from 'react';

const FloatingInput = ({
    label,
    type = 'text',
    value,
    onChange,
    icon: Icon,
    error,
    required = false,
    maxLength
}) => {
    const [isFocused, setIsFocused] = useState(false);

    // The label floats up when focused OR when there is already content
    const isActive = isFocused || (value && value.toString().length > 0);

    return (
        <div className="relative w-full group mb-1">
            {/* Container Background & Border */}
            <div
                className={`relative flex items-center pr-4 transition-all duration-300 rounded-xl border ${error
                        ? 'border-red-400 dark:border-red-500/50 bg-red-50/50 dark:bg-red-900/10'
                        : isFocused
                            ? 'border-accent-green bg-white dark:bg-[#0f1412] shadow-[0_4px_20px_-4px_rgba(0,230,150,0.15)]'
                            : 'border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
            >

                {/* Optional Icon Grid Area */}
                {Icon && (
                    <div className="pl-4 pr-3 flex items-center justify-center shrink-0">
                        <Icon
                            size={18}
                            className={`transition-colors duration-300 ${error
                                    ? 'text-red-400'
                                    : isFocused ? 'text-accent-green' : 'text-slate-400'
                                }`}
                        />
                    </div>
                )}

                {/* Input Wrapper */}
                <div className={`relative flex-grow flex flex-col justify-center h-[56px] ${!Icon && 'pl-4'}`}>
                    {/* Floating Label (Hick's Law: Reduces pre-focus cognitive load) */}
                    <label
                        className={`absolute left-0 transition-all duration-200 pointer-events-none font-medium z-10 ${isActive
                                ? 'top-1 text-[9px] sm:text-[10px] tracking-wider uppercase text-slate-500 dark:text-slate-400'
                                : 'top-1/2 -translate-y-1/2 text-sm text-slate-400 dark:text-slate-500'
                            }`}
                    >
                        {label} {required && <span className="text-red-400 ml-0.5">*</span>}
                    </label>

                    <input
                        type={type}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        maxLength={maxLength}
                        className={`w-full bg-transparent border-none outline-none text-slate-900 dark:text-white pb-1 transition-all relative z-20 ${isActive ? 'pt-[18px] opacity-100' : 'pt-0 opacity-0'
                            }`}
                    />
                </div>
            </div>

            {/* Error Message Space (Ensures layout doesn't jump) */}
            <div className="h-5 mt-1 px-1">
                {error && (
                    <p className="text-[11px] text-red-500 dark:text-red-400 font-medium tracking-wide flex items-center gap-1 animate-fade-in">
                        {error}
                    </p>
                )}
            </div>
        </div>
    );
};

export default FloatingInput;
