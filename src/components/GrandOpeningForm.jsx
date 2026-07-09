import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Check, CheckCircle2, User, Phone, MapPin } from 'lucide-react';

const GrandOpeningForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        whatsapp: '',
        area: ''
    });

    const [formErrors, setFormErrors] = useState({
        fullName: '',
        mobile: '',
        area: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error as user types
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { fullName: '', mobile: '', area: '' };

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'कृपया अपना पूरा नाम दर्ज करें';
            isValid = false;
        }

        const mobileRegex = /^[0-9]{10}$/;
        if (!formData.mobile.trim()) {
            newErrors.mobile = 'कृपया अपना मोबाइल नंबर दर्ज करें';
            isValid = false;
        } else if (!mobileRegex.test(formData.mobile.trim())) {
            newErrors.mobile = 'मोबाइल नंबर बिल्कुल 10 अंकों का होना चाहिए';
            isValid = false;
        }

        if (!formData.area.trim()) {
            newErrors.area = 'कृपया अपना क्षेत्र या इलाका दर्ज करें';
            isValid = false;
        }

        setFormErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        const targetUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

        const payload = {
            action: 'grandOpeningLead',
            name: formData.fullName.trim(),
            mobile: formData.mobile.trim(),
            whatsapp: formData.whatsapp.trim() || formData.mobile.trim(),
            area: formData.area.trim(),
            source: 'Meta Ads',
            createdAt: new Date().toISOString()
        };

        try {
            const response = await fetch(targetUrl, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const resData = await response.text();
                setIsSuccess(true);
            } else {
                throw new Error('Server responded with an error status: ' + response.status);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setErrorMsg('कुछ गलत हो गया। कृपया पुनः प्रयास करें।');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="grand-opening" className="py-24 relative overflow-hidden bg-ivory">
            {/* Elegant Background Accents */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-12 -translate-y-12 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-maroon/5 rounded-full translate-x-12 translate-y-12 blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Heading & Promotional Info */}
                        <div className="lg:col-span-5 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="space-y-4"
                            >
                                <span className="inline-flex items-center px-4 py-2 bg-maroon/10 text-maroon rounded-full text-xs font-bold tracking-widest uppercase">
                                    ग्रैंड ओपनिंग ऑफ़र 🎉
                                </span>

                                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-maroon leading-tight">
                                    भव्य शुभारंभ <br />
                                    <span className="text-gold italic">सेलिब्रेशन</span>
                                </h2>

                                <h3 className="text-xl md:text-2xl font-playfair font-bold text-gold-dark">
                                    पहले 100 ग्राहकों के लिए विशेष उपहार!
                                </h3>

                                <p className="text-charcoal-light text-base leading-relaxed">
                                    आज ही पंजीकरण करें और हमारे ग्रैंड ओपनिंग गिफ्ट के लिए पात्र बनें।
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="space-y-4 pt-4 border-t border-gold/20"
                            >
                                {[
                                    "मुफ़्त पंजीकरण",
                                    "व्हाट्सएप पर शुभारंभ दिवस का आमंत्रण",
                                    "खरीदारी पर मानार्थ उपहार (नियम व शर्तें लागू)"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-3 text-sm">
                                        <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center text-gold-dark border border-gold/30">
                                            <Check className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-charcoal-light font-medium">{item}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Interactive Form Panel */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-white border border-gold/20 p-8 md:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden"
                            >
                                {/* Subtle Decorative Stripe */}
                                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-maroon via-gold to-maroon" />

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {errorMsg && (
                                        <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-medium">
                                            {errorMsg}
                                        </div>
                                    )}

                                    {/* Full Name */}
                                    <div className="space-y-2">
                                        <label className="block text-maroon text-xs uppercase tracking-wider font-semibold ml-1">
                                            पूरा नाम *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gold">
                                                <User className="w-4 h-4" />
                                            </div>
                                            <input
                                                type="text"
                                                name="fullName"
                                                placeholder="अपना पूरा नाम दर्ज करें"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className={`w-full bg-ivory/30 border ${formErrors.fullName ? 'border-red-500' : 'border-gold/20'} rounded-xl pl-11 pr-4 py-3.5 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/60 focus:bg-white transition-all`}
                                            />
                                        </div>
                                        {formErrors.fullName && (
                                            <p className="text-red-500 text-xs mt-1 ml-1">{formErrors.fullName}</p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Mobile Number */}
                                        <div className="space-y-2">
                                            <label className="block text-maroon text-xs uppercase tracking-wider font-semibold ml-1">
                                                मोबाइल नंबर *
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gold">
                                                    <Phone className="w-4 h-4" />
                                                </div>
                                                <input
                                                    type="tel"
                                                    name="mobile"
                                                    placeholder="10 अंकों का मोबाइल नंबर"
                                                    value={formData.mobile}
                                                    onChange={(e) => {
                                                        const val = e.target.value.replace(/[^0-9]/g, '');
                                                        if (val.length <= 10) {
                                                            handleChange({ target: { name: 'mobile', value: val } });
                                                        }
                                                    }}
                                                    className={`w-full bg-ivory/30 border ${formErrors.mobile ? 'border-red-500' : 'border-gold/20'} rounded-xl pl-11 pr-4 py-3.5 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/60 focus:bg-white transition-all`}
                                                />
                                            </div>
                                            {formErrors.mobile && (
                                                <p className="text-red-500 text-xs mt-1 ml-1">{formErrors.mobile}</p>
                                            )}
                                        </div>

                                        {/* WhatsApp Number (Optional) */}
                                        <div className="space-y-2">
                                            <label className="block text-maroon text-xs uppercase tracking-wider font-semibold ml-1">
                                                व्हाट्सएप नंबर <span className="text-charcoal/40 font-normal lowercase">(वैकल्पिक)</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gold">
                                                    <Phone className="w-4 h-4" />
                                                </div>
                                                <input
                                                    type="tel"
                                                    name="whatsapp"
                                                    placeholder="खाली छोड़ने पर मोबाइल के समान"
                                                    value={formData.whatsapp}
                                                    onChange={(e) => {
                                                        const val = e.target.value.replace(/[^0-9]/g, '');
                                                        if (val.length <= 10) {
                                                            handleChange({ target: { name: 'whatsapp', value: val } });
                                                        }
                                                    }}
                                                    className="w-full bg-ivory/30 border border-gold/20 rounded-xl pl-11 pr-4 py-3.5 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/60 focus:bg-white transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Area / Locality */}
                                    <div className="space-y-2">
                                        <label className="block text-maroon text-xs uppercase tracking-wider font-semibold ml-1">
                                            क्षेत्र / इलाका *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gold">
                                                <MapPin className="w-4 h-4" />
                                            </div>
                                            <input
                                                type="text"
                                                name="area"
                                                placeholder="अपना क्षेत्र या इलाका दर्ज करें"
                                                value={formData.area}
                                                onChange={handleChange}
                                                className={`w-full bg-ivory/30 border ${formErrors.area ? 'border-red-500' : 'border-gold/20'} rounded-xl pl-11 pr-4 py-3.5 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/60 focus:bg-white transition-all`}
                                            />
                                        </div>
                                        {formErrors.area && (
                                            <p className="text-red-500 text-xs mt-1 ml-1">{formErrors.area}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="w-full bg-maroon text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-3 text-lg font-playfair hover:bg-maroon-light transition-all duration-300 shadow-xl disabled:opacity-75 disabled:cursor-not-allowed hover:-translate-y-0.5"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-6 h-6 animate-spin" />
                                                <span>सुरक्षित किया जा रहा है...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>अपना उपहार सुरक्षित करें 🎁</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Success Modal */}
            <AnimatePresence>
                {isSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="bg-white border-2 border-gold max-w-lg w-full rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden text-center"
                        >
                            {/* Decorative gold arcs */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full blur-xl" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-maroon/5 rounded-full blur-xl" />

                            <CheckCircle2 className="w-20 h-20 text-gold mx-auto mb-6" />

                            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-4">
                                🎉 पंजीकरण सफल रहा!
                            </h2>

                            <p className="text-charcoal-light text-base leading-relaxed mb-8">
                                पंजीकरण करने के लिए धन्यवाद।
                                <br /><br />
                                यदि आप पहले 100 पात्र ग्राहकों में से हैं, तो आपको हमारे भव्य उद्घाटन (Grand Opening) के दौरान खरीदारी करने पर एक मानार्थ (मुफ़्त) उपहार मिलेगा।
                                <br /><br />
                                हम शुभारंभ की तारीख और ऑफ़र विवरण के साथ व्हाट्सएप पर आपसे संपर्क करेंगे।
                            </p>

                            <button
                                onClick={() => {
                                    setIsSuccess(false);
                                    setFormData({ fullName: '', mobile: '', whatsapp: '', area: '' });
                                }}
                                className="w-full bg-maroon text-white font-bold py-4 rounded-xl font-playfair text-lg hover:bg-maroon-light transition-all shadow-md hover:-translate-y-0.5"
                            >
                                ब्राउज़ करना जारी रखें
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GrandOpeningForm;
