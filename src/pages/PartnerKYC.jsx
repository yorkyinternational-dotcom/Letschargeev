import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, FileText, Landmark, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import Logo from '../components/layout/Logo';
import { useAuth } from '../context/AuthContext';

const PartnerKYC = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        businessName: '',
        gstNumber: '',
        accountNumber: '',
        ifscCode: '',
        address: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
            return;
        }

        setIsSubmitting(true);
        // Simulate KYC Submission
        setTimeout(() => {
            setIsSubmitting(false);
            navigate('/dashboard/analytics');
        }, 1500);
    };

    const handleSkip = () => {
        navigate('/dashboard/analytics');
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-primary flex flex-col items-center py-12 px-4 transition-colors duration-500">
            <div className="w-full max-w-2xl">
                <div className="flex justify-between items-center mb-12">
                    <Logo className="h-12" withText={true} theme="dark" />
                    <button onClick={handleSkip} className="text-sm font-bold tracking-widest uppercase text-slate-500 hover:text-accent-green transition-colors">
                        Skip for Now
                    </button>
                </div>

                <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">

                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-accent-green/20 text-accent-green flex items-center justify-center flex-shrink-0">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-black dark:text-white tracking-tight">Partner Verification</h1>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Complete your profile to receive payouts.</p>
                        </div>
                    </div>

                    <div className="flex gap-2 mb-10">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? 'bg-accent-green' : 'bg-slate-200 dark:bg-white/10'}`}></div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 min-h-[250px] flex flex-col justify-between">
                        {step === 1 && (
                            <div className="space-y-6 animation-fade-in">
                                <h2 className="font-bold text-lg dark:text-white border-b border-slate-200 dark:border-white/10 pb-2">Business Details</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">Business/Company Name</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 pointer-events-none"><Building2 size={16} /></div>
                                            <input
                                                required
                                                type="text"
                                                value={formData.businessName}
                                                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                                className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none dark:text-white"
                                                placeholder="Lets Charge EV Pvt Ltd"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">GST / Tax ID</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 pointer-events-none"><FileText size={16} /></div>
                                            <input
                                                required
                                                type="text"
                                                value={formData.gstNumber}
                                                onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value })}
                                                className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none dark:text-white uppercase font-mono"
                                                placeholder="22AAAAA0000A1Z5"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6 animation-fade-in">
                                <h2 className="font-bold text-lg dark:text-white border-b border-slate-200 dark:border-white/10 pb-2">Payout Bank Details</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">Account Number</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 pointer-events-none"><Landmark size={16} /></div>
                                            <input
                                                required
                                                type="text"
                                                value={formData.accountNumber}
                                                onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                                                className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none dark:text-white font-mono tracking-widest"
                                                placeholder="0000 0000 0000"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">IFSC Code</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 pointer-events-none"><FileText size={16} /></div>
                                            <input
                                                required
                                                type="text"
                                                value={formData.ifscCode}
                                                onChange={(e) => setFormData({ ...formData, ifscCode: e.target.value })}
                                                className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none dark:text-white uppercase font-mono"
                                                placeholder="HDFC0001234"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-6 animation-fade-in">
                                <h2 className="font-bold text-lg dark:text-white border-b border-slate-200 dark:border-white/10 pb-2">Primary Station Address</h2>
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">Full Address</label>
                                    <div className="relative">
                                        <div className="absolute top-3 left-0 flex items-start pl-4 text-slate-400 pointer-events-none"><MapPin size={16} /></div>
                                        <textarea
                                            required
                                            rows="4"
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                            className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none dark:text-white"
                                            placeholder="123 Tech Park, Phase 1..."
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex gap-4 pt-4 mt-auto">
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="px-6 py-3.5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all w-1/3"
                                >
                                    Back
                                </button>
                            )}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`flex items-center justify-center gap-2 py-3.5 bg-accent-green text-black font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-white hover:text-black transition-all ${step === 1 ? 'w-full' : 'flex-1'}`}
                            >
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <span>{step === 3 ? 'Submit & Verify' : 'Continue'}</span>
                                        <ArrowRight size={16} />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default PartnerKYC;
