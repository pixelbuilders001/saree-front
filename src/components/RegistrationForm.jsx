import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

const RegistrationForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        whatsapp: '',
        area: '',
        frequency: '',
        budget: '',
        sareeTypes: [],
        expectations: '',
        receiveUpdates: true
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const toggleSareeType = (type) => {
        setFormData(prev => ({
            ...prev,
            sareeTypes: prev.sareeTypes.includes(type)
                ? prev.sareeTypes.filter(t => t !== type)
                : [...prev.sareeTypes, type]
        }));
    };

    if (isSuccess) {
        return (
            <section id="register" className="py-24 bg-maroon relative min-h-[600px] flex items-center">
                <div className="container mx-auto px-6 max-w-2xl text-center">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white/10 backdrop-blur-xl border border-gold/20 p-12 rounded-[2rem] shadow-2xl"
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <CheckCircle2 className="w-20 h-20 text-gold mx-auto mb-8 animate-bounce" />
                            <h2 className="text-4xl font-playfair font-bold text-white mb-4">You're on the List!</h2>
                            <p className="text-ivory/80 text-lg mb-8">
                                Thank you for joining our VIP community. We've sent a confirmation message
                                to your mobile. Expect something beautiful soon!
                            </p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="btn-gold"
                            >
                                BACK TO HOME
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="register" className="py-24 relative overflow-hidden">
            {/* Background with luxury pattern/gradient */}
            <div className="absolute inset-0 bg-maroon z-0">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 text-white">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8 leading-tight">
                                Become a <br />
                                <span className="text-gradient-gold">VIP Member</span> Today
                            </h2>
                            <p className="text-ivory/70 text-lg mb-12 font-light leading-relaxed">
                                Join our exclusive launch and be among the first to experience
                                luxury saree shopping in your city. Early members get priority
                                billing, exclusive discounts, and personalized styling services.
                            </p>

                            <div className="space-y-6">
                                {[
                                    "Early Access to Bridal Collections",
                                    "Personalized Style Consultation",
                                    "Exclusive Launch Day Invitations",
                                    "₹500 Opening Day Credit"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center space-x-3">
                                        <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center border border-gold/40">
                                            <div className="w-2 h-2 rounded-full bg-gold" />
                                        </div>
                                        <span className="text-ivory/90">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="glass-dark p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/10 relative overflow-hidden group">
                            {/* Decorative Glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-colors" />

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label className="text-ivory/60 text-xs uppercase tracking-widest ml-1">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Jane Doe"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-all"
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        />
                                    </div>
                                    {/* Mobile */}
                                    <div className="space-y-2">
                                        <label className="text-ivory/60 text-xs uppercase tracking-widest ml-1">Mobile Number</label>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="+91 00000 00000"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-all"
                                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* WhatsApp */}
                                    <div className="space-y-2">
                                        <label className="text-ivory/60 text-xs uppercase tracking-widest ml-1">WhatsApp Number</label>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="Same as above"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-all"
                                            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                        />
                                    </div>
                                    {/* Area */}
                                    <div className="space-y-2">
                                        <label className="text-ivory/60 text-xs uppercase tracking-widest ml-1">Locality / Area</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="E.g. Banjara Hills"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-all"
                                            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Buying Frequency */}
                                    <div className="space-y-2">
                                        <label className="text-ivory/60 text-xs uppercase tracking-widest ml-1">Shopping Frequency</label>
                                        <select
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-all"
                                            onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                                            defaultValue=""
                                        >
                                            <option value="" disabled className="bg-charcoal">Select Frequency</option>
                                            <option value="monthly" className="bg-charcoal">Monthly</option>
                                            <option value="festive" className="bg-charcoal">During Festivals</option>
                                            <option value="occasion" className="bg-charcoal">Special Occasions</option>
                                        </select>
                                    </div>
                                    {/* Budget */}
                                    <div className="space-y-2">
                                        <label className="text-ivory/60 text-xs uppercase tracking-widest ml-1">Budget Range (₹)</label>
                                        <select
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-all"
                                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                            defaultValue=""
                                        >
                                            <option value="" disabled className="bg-charcoal">Select Budget</option>
                                            <option value="5k-15k" className="bg-charcoal">₹5,000 - ₹15,000</option>
                                            <option value="15k-50k" className="bg-charcoal">₹15,000 - ₹50,000</option>
                                            <option value="50k+" className="bg-charcoal">₹50,000+</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Saree Types */}
                                <div className="space-y-4">
                                    <label className="text-ivory/60 text-xs uppercase tracking-widest ml-1">Favourite Sarees</label>
                                    <div className="flex flex-wrap gap-3">
                                        {['Cotton', 'Silk', 'Banarasi', 'Organza', 'Bridal', 'Party Wear'].map(type => (
                                            <button
                                                type="button"
                                                key={type}
                                                onClick={() => toggleSareeType(type)}
                                                className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${formData.sareeTypes.includes(type)
                                                        ? 'bg-gold border-gold text-maroon shadow-lg shadow-gold/20'
                                                        : 'bg-white/5 border-white/10 text-white hover:border-gold/30'
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Expectations */}
                                <div className="space-y-2">
                                    <label className="text-ivory/60 text-xs uppercase tracking-widest ml-1">What do you expect from us?</label>
                                    <textarea
                                        rows="3"
                                        placeholder="Tell us your preferences..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-all resize-none"
                                        onChange={(e) => setFormData({ ...formData, expectations: e.target.value })}
                                    />
                                </div>

                                {/* WhatsApp Checkbox */}
                                <label className="flex items-center space-x-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={formData.receiveUpdates}
                                        onChange={(e) => setFormData({ ...formData, receiveUpdates: e.target.checked })}
                                        className="w-5 h-5 rounded border-white/10 bg-white/5 text-gold focus:ring-gold transition-all"
                                    />
                                    <span className="text-ivory/60 text-sm group-hover:text-ivory/90 transition-colors">Receive catalogue & updates on WhatsApp</span>
                                </label>

                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="w-full btn-gold !py-4 flex items-center justify-center space-x-3 text-lg relative overflow-hidden group"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="w-6 h-6 animate-spin" />
                                    ) : (
                                        <>
                                            <span>BECOME A VIP CUSTOMER</span>
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationForm;
