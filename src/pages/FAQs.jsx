const FAQs = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-5xl font-black text-primary mb-12 text-center">Frequently Asked Questions</h1>
                <div className="space-y-6">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-primary mb-4">What is Lets charge EV?</h3>
                            <p className="text-slate-600">Lets charge EV provides integrated EV charging solutions including hardware and management software.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQs;
