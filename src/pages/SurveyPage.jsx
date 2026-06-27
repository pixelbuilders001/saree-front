import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Send, CheckCircle, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const SurveyPage = () => {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        style: '',
        fabric: '',
        occasion: '',
        email: ''
    });

    const handleNext = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setStep(prev => prev + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const styles = [
        { id: 'traditional', label: 'क्लासिक विरासत (Heritage)', icon: '🏛️' },
        { id: 'modern', label: 'आधुनिक और स्टाइलिश (Chic)', icon: '✨' },
        { id: 'minimalist', label: 'सादा और सुंदर (Minimal)', icon: '🌿' }
    ];

    const fabrics = [
        { id: 'silk', label: 'राजसी सिल्क (Royal Silk)', icon: '🧶' },
        { id: 'cotton', label: 'आरामदायक कॉटन (Cotton)', icon: '🍃' },
        { id: 'organza', label: 'प्योर ऑर्गेंज़ा (Organza)', icon: '🌫️' }
    ];

    return (
        <div className="min-h-screen bg-ivory font-poppins selection:bg-gold selection:text-maroon">
            {/* Minimal Header */}
            <header className="py-8 px-6 flex justify-between items-center bg-white/50 backdrop-blur-md sticky top-0 z-50">
                <Link to="/" className="flex items-center space-x-2">
                    <Star className="text-gold" size={24} />
                    <span className="text-xl font-playfair font-bold text-maroon">महालक्ष्मी (Mahalakshmi)</span>
                </Link>
                <div className="text-xs font-bold text-gold tracking-widest uppercase">
                    अर्ली एक्सेस सर्वे
                </div>
            </header>

            <main className="container mx-auto px-6 py-12 md:py-24">
                <div className="max-w-2xl mx-auto">
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Step Indicator */}
                                <div className="flex items-center space-x-2 mb-12">
                                    {[1, 2, 3, 4].map(s => (
                                        <div
                                            key={s}
                                            className={`h-1 flex-1 rounded-full transition-all duration-500 ${s <= step ? 'bg-gold' : 'bg-gold/10'}`}
                                        />
                                    ))}
                                </div>

                                {step === 1 && (
                                    <div className="space-y-8 text-center md:text-left">
                                        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-maroon leading-tight">
                                            आपकी <span className="text-gold italic">साड़ी स्टाइल</span> क्या है?
                                        </h1>
                                        <p className="text-charcoal/60">हमें अपनी पसंद बताकर अपना बेहतरीन कलेक्शन बनाने में हमारी मदद करें।</p>
                                        <div className="grid grid-cols-1 gap-4">
                                            {styles.map(s => (
                                                <button
                                                    key={s.id}
                                                    onClick={() => handleNext('style', s.id)}
                                                    className="p-6 rounded-2xl bg-white border border-gold/10 hover:border-gold hover:shadow-xl transition-all duration-300 text-left flex items-center group"
                                                >
                                                    <span className="text-3xl mr-6 group-hover:scale-125 transition-transform">{s.icon}</span>
                                                    <span className="text-lg font-bold text-charcoal">{s.label}</span>
                                                    <ChevronRight className="ml-auto text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-8 text-center md:text-left">
                                        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-maroon leading-tight">
                                            अपना पसंदीदा <span className="text-gold italic">फ़ैब्रिक</span> चुनें
                                        </h1>
                                        <div className="grid grid-cols-1 gap-4">
                                            {fabrics.map(f => (
                                                <button
                                                    key={f.id}
                                                    onClick={() => handleNext('fabric', f.id)}
                                                    className="p-6 rounded-2xl bg-white border border-gold/10 hover:border-gold hover:shadow-xl transition-all duration-300 text-left flex items-center group"
                                                >
                                                    <span className="text-3xl mr-6 group-hover:scale-125 transition-transform">{f.icon}</span>
                                                    <span className="text-lg font-bold text-charcoal">{f.label}</span>
                                                    <ChevronRight className="ml-auto text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </button>
                                            ))}
                                        </div>
                                        <button onClick={() => setStep(step - 1)} className="text-gold text-sm font-bold uppercase tracking-widest mt-4">पीछे जाएं (Back)</button>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="space-y-8 text-center md:text-left">
                                        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-maroon leading-tight">
                                            किस <span className="text-gold italic">अवसर (Occasion)</span> के लिए?
                                        </h1>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {['शादी (Wedding)', 'ऑफिस (Work)', 'त्यौहार (Festival)', 'पार्टी (Party)'].map(occ => (
                                                <button
                                                    key={occ}
                                                    onClick={() => handleNext('occasion', occ)}
                                                    className="p-6 rounded-2xl bg-white border border-gold/10 hover:border-gold hover:shadow-xl transition-all duration-300 font-bold text-maroon"
                                                >
                                                    {occ}
                                                </button>
                                            ))}
                                        </div>
                                        <button onClick={() => setStep(step - 1)} className="text-gold text-sm font-bold uppercase tracking-widest mt-4">पीछे जाएं (Back)</button>
                                    </div>
                                )}

                                {step === 4 && (
                                    <form onSubmit={handleSubmit} className="space-y-8 text-center md:text-left">
                                        <div className="inline-flex items-center px-4 py-2 bg-gold/10 text-gold rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                                            आखिरी कदम
                                        </div>
                                        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-maroon leading-tight">
                                            अपना <span className="text-gold italic">20% लॉन्च डिस्काउंट</span> पाएं
                                        </h1>
                                        <p className="text-charcoal/60 text-lg">अपना विवरण छोड़ें और हमारे ओपनिंग की जानकारी पाने वाले पहले व्यक्ति बनें।</p>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                required
                                                placeholder="अपना ईमेल पता दर्ज करें"
                                                className="w-full px-8 py-5 rounded-2xl bg-white border border-gold/20 focus:border-gold outline-none text-lg shadow-sm"
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                            <button
                                                type="submit"
                                                className="mt-6 w-full py-5 rounded-2xl bg-maroon text-white font-bold text-lg shadow-2xl shadow-maroon/20 flex items-center justify-center space-x-3 hover:bg-maroon/90 transition-all font-playfair"
                                            >
                                                <span>डिस्काउंट प्राप्त करें</span>
                                                <Send size={20} />
                                            </button>
                                        </div>
                                        <button type="button" onClick={() => setStep(step - 1)} className="text-gold text-sm font-bold uppercase tracking-widest mt-4">पीछे जाएं (Back)</button>
                                    </form>
                                )}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center bg-white p-12 md:p-20 rounded-[3rem] shadow-4xl border border-gold/10 relative overflow-hidden"
                            >
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-maroon/10 rounded-full -ml-16 -mb-16 blur-2xl" />

                                <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-10">
                                    <CheckCircle size={56} className="text-gold" />
                                </div>
                                <h2 className="text-4xl md:text-6xl font-playfair font-bold text-maroon mb-6 leading-tight">
                                    धन्यवाद <br />
                                    <span className="text-gold italic font-playfair">महारानी!</span>
                                </h2>
                                <p className="text-charcoal/60 text-xl mb-10 leading-relaxed font-light">
                                    हमने आपकी पसंद रिकॉर्ड कर ली है। आपका एक्सक्लूसिव **20% डिस्काउंट कोड**
                                    <span className="text-maroon font-bold"> {formData.email} </span>
                                    पर स्टोर खुलने के बाद भेज दिया जाएगा।
                                </p>
                                <div className="flex flex-col md:flex-row gap-4 justify-center">
                                    <Link
                                        to="/"
                                        className="px-10 py-5 bg-maroon text-white font-bold rounded-2xl shadow-xl tracking-widest uppercase hover:bg-maroon/90 transition-all font-playfair"
                                    >
                                        स्टोर पर लौटें
                                    </Link>
                                    <button className="flex items-center justify-center space-x-3 px-10 py-5 border-2 border-gold text-gold font-bold rounded-2xl hover:bg-gold/5 transition-all uppercase tracking-widest font-playfair">
                                        <Sparkles size={20} />
                                        <span>VIP समुदाय से जुड़ें</span>
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            {/* Social Proof Footer */}
            <footer className="py-20 text-center container mx-auto px-6 border-t border-gold/10">
                <div className="flex flex-center justify-center space-x-2 mb-6">
                    {[1, 2, 3, 4, 5].map(star => <Heart key={star} size={16} className="text-gold fill-gold" />)}
                </div>
                <p className="text-charcoal/40 text-sm font-medium uppercase tracking-[0.4em]">
                    अब तक 500+ अर्ली एक्सेस मेंबर्स का भरोसा
                </p>
                <div className="mt-12 opacity-30 grayscale flex justify-center items-center space-x-12">
                    <div className="w-12 h-[1px] bg-gold" />
                    <div className="w-2 h-2 rotate-45 border border-gold" />
                    <div className="w-12 h-[1px] bg-gold" />
                </div>
            </footer>
        </div>
    );
};

export default SurveyPage;
