import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Zap, Star, MessageSquare } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        {
            icon: <Gift className="w-8 h-8" />,
            title: '₹500 Opening Day Benefits',
            desc: 'Register now and get exclusive credit for your first purchase on our grand opening day.'
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: 'Exclusive Launch Offers',
            desc: 'Be the first to receive special launch invites and limited-time discounts.'
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: 'Early Access',
            desc: 'Premium VIP access to our latest collections 48 hours before the public launch.'
        },
        {
            icon: <MessageSquare className="w-8 h-8" />,
            title: 'WhatsApp Catalogue',
            desc: 'Receive digital catalogues and personalized styling tips directly on WhatsApp.'
        }
    ];

    return (
        <section id="why-us" className="py-24 bg-ivory relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-maroon/5 rounded-full -ml-32 -mb-32 blur-3xl" />

            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <div className="flex items-center space-x-6 mb-4">
                            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-gold" />
                            <Star size={16} className="text-gold" />
                            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-gold" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-maroon mb-6 font-playfair">
                            Be Among The First To <span className="text-gold">Experience Luxury</span>
                        </h2>
                        <p className="text-charcoal/60 text-lg">
                            Join our VIP list and get early access, special discounts and updates on our grand opening.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-2xl bg-ivory/30 border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gold mb-6 shadow-sm group-hover:bg-maroon group-hover:text-gold transition-colors duration-500">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-maroon transition-colors">
                                {benefit.title}
                            </h3>
                            <p className="text-charcoal/60 leading-relaxed text-sm">
                                {benefit.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
