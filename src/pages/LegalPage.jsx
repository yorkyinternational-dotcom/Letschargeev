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
            { h2: "1. Acceptance of Terms", p: "By accessing and using Lets charge EV services, you agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using our platform." },
            { h2: "2. Use of Services", p: "Our charging network and software are provided for lawful purposes. Any misuse of hardware or unauthorized access to software is strictly prohibited." },
            { h2: "3. Intellectual Property", p: "All content, branding, and technology are the exclusive property of Lets charge EV and its parent company. Unauthorized reproduction is prohibited." }
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
        <div className="pt-32 pb-24 min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-black text-primary mb-4 italic uppercase tracking-tighter">{title}</h1>
                    <div className="h-1.5 w-24 bg-eco rounded-full"></div>
                </div>

                <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-slate-500 mb-12 font-bold italic uppercase tracking-widest text-[10px]">
                        Last updated: February 24, 2026
                    </p>

                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <section key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                                <h2 className="text-xl font-extrabold text-primary mb-4 flex items-center gap-3 italic uppercase tracking-tight">
                                    <span className="text-eco">#</span>
                                    {section.h2}
                                </h2>
                                <p className="text-lg text-slate-500 leading-relaxed font-medium">
                                    {section.p}
                                </p>
                            </section>
                        ))}
                    </div>
                </div>

                <div className="mt-20 p-8 bg-slate-50 rounded-3xl border border-slate-100 italic text-slate-500 text-sm">
                    For further inquiries regarding our legal policies, please contact our support team at support@lcev.in
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
