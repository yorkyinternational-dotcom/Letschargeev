import { useParams } from 'react-router-dom';

const LegalPage = () => {
    const { type } = useParams();
    const titles = {
        'terms': 'Terms & Conditions',
        'privacy': 'Privacy Policy',
        'refund': 'Refund Policy',
        'cancellation': 'Cancellation Policy',
        'shipping': 'Shipping & Return Policy'
    };

    const content = {
        'terms': [
            { h2: "1. Acceptance of Terms", p: "By accessing and interfacing with the LCEV Systems infrastructure, you agree to be bound by these industrial-grade Terms and Conditions. If you do not agree, please refrain from engaging with our network." },
            { h2: "2. Use of Services", p: "Our charging network and software are provided for lawful purposes. Any misuse of hardware or unauthorized access to software is strictly prohibited." },
            { h2: "3. Intellectual Property", p: "All content, branding, and technology are the exclusive property of LCEV and its parent company. Unauthorized reproduction is prohibited." }
        ],
        'privacy': [
            { h2: "1. Data Collection", p: "We collect information necessary to provide charging services, including location data, payment information, and vehicle details." },
            { h2: "2. Data Usage", p: "Your data is used to optimize network performance, process payments, and provide personalized support. We do not sell your personal data." },
            { h2: "3. Security", p: "We implement industry-standard security measures to protect your information from unauthorized access or disclosure." }
        ],
        'refund': [
            { h2: "1. Refund Eligibility", p: "Refunds may be issued for failed charging sessions or billing errors. Claims must be submitted within 48 hours of the transaction." },
            { h2: "2. Processing Time", p: "Approved refunds will be processed within 5-7 business days via the original payment method." }
        ],
        'cancellation': [
            { h2: "1. Subscription Cancellation", p: "Users may cancel their membership at any time via the mobile app. Benefits will continue until the end of the current billing cycle." },
            { h2: "2. Single Session", p: "Once a charging session has started, it cannot be cancelled for a refund unless a technical failure occurs." }
        ],
        'shipping': [
            { h2: "1. Delivery Timeline", p: "Hardware orders are typically processed within 3-5 business days. Delivery times vary based on location but usually range from 7-14 days." },
            { h2: "2. Installation", p: "Professional installation services are scheduled separately after hardware delivery is confirmed." }
        ]
    };

    const title = titles[type] || 'Legal Information';
    const sections = content[type] || [{ h2: "Information", p: "Detailed information for this section will be available soon." }];

    return (
        <div className="pt-32 md:pt-48 pb-16 md:pb-32 min-h-screen bg-primary-surface dark:bg-primary transition-colors duration-300 relative overflow-hidden">
            {/* Tech Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-10 md:mb-12">
                    <h1 className="text-5xl md:text-7xl font-black text-primary-light dark:text-white mb-6 uppercase tracking-tighter leading-none">{title}</h1>
                    <div className="h-1.5 w-24 bg-accent-green rounded-full shadow-[0_0_10px_rgba(0,230,150,0.3)]"></div>
                </div>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-16">
                        / LAST UPDATED: FEBRUARY 24, 2026
                    </p>

                    <div className="space-y-16">
                        {sections.map((section, index) => (
                            <section key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                                <h2 className="text-2xl font-black text-primary-light dark:text-white mb-6 flex items-center gap-4 uppercase tracking-tight">
                                    <span className="text-accent-green">/</span>
                                    {section.h2}
                                </h2>
                                <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                    {section.p}
                                </p>
                            </section>
                        ))}
                    </div>
                </div>

                <div className="mt-16 md:mt-32 p-10 bg-white dark:bg-white/5 rounded-[2rem] border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
                    For further inquiries regarding our technical and legal policies, please contact our strategic compliance team at <span className="text-primary-light dark:text-white font-bold">support@lcev.in</span>
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
