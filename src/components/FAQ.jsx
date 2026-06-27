import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            q: "When is the grand showroom opening?",
            a: "Our grand opening is scheduled for next month. By registering as a VIP member, you'll be the first to know the exact date and location."
        },
        {
            q: "Where will the showroom be located?",
            a: "We are opening in the heart of the city's fashion district. The exact address will be shared exclusively with our registered VIP members via WhatsApp."
        },
        {
            q: "Will there be special opening day discounts?",
            a: "Yes! All registered members will receive a ₹500 discount voucher and early access to several launch offers."
        },
        {
            q: "Do you specialize in bridal sarees?",
            a: "Absolutely. We pride ourselves on our curated Bridal collection, featuring handpicked masterpieces from weavers across India."
        },
        {
            q: "How can I receive updates on WhatsApp?",
            a: "Simply fill out the registration form below and select 'Receive catalog on WhatsApp'. We'll keep you updated with the latest trends and launch news."
        }
    ];

    return (
        <section className="py-24 bg-ivory">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-maroon mb-6"
                    >
                        Frequently Asked <span className="text-gold">Questions</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-gold mx-auto" />
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-2xl border border-gold/10 overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                className="w-full p-6 text-left flex justify-between items-center group transition-colors hover:bg-gold/5"
                            >
                                <span className={`text-lg font-bold transition-colors ${activeIndex === i ? 'text-maroon' : 'text-charcoal'}`}>
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    size={24}
                                    className={`text-gold transition-transform duration-500 ${activeIndex === i ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-charcoal/70 leading-relaxed border-t border-gold/5 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
