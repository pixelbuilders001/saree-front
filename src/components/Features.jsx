import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Truck, Heart, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: 'Premium Quality',
            desc: 'Each thread is inspected for perfection. We only source authentic handloom and luxury fabrics.'
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: 'Affordable Luxury',
            desc: 'Direct sourcing ensures you get the most competitive pricing without compromising on quality.'
        },
        {
            icon: <CheckCircle className="w-8 h-8" />,
            title: 'Latest Designs',
            desc: 'Stay ahead of the curve with our weekly updated catalog of trending fashion and classic patterns.'
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: 'Festive Collections',
            desc: 'Specialized wedding and festive wear designed to make you stand out on your special occasions.'
        },
        {
            icon: <UserCheck className="w-8 h-8" />,
            title: 'Expert Assistance',
            desc: 'Our in-house stylists help you find the perfect drape, color, and fabric according to your needs.'
        },
        {
            icon: <Truck className="w-8 h-8" />,
            title: 'Comfort Shopping',
            desc: 'A premium, air-conditioned showroom designed for a relaxed and personalized browsing experience.'
        }
    ];

    return (
        <section className="py-24 bg-maroon text-ivory/80 relative overflow-hidden">
            {/* Decorative Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Why Women <span className="text-gold">Love</span> Us
                    </motion.h2>
                    <p className="text-ivory/60 max-w-2xl mx-auto italic font-light text-lg">
                        "Combining tradition with a modern shopping experience designed for the
                        contemporary Indian woman."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-maroon transition-all duration-500 shadow-lg shadow-gold/5">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-white mb-4 group-hover:text-gold transition-colors">
                                {feature.title}
                            </h3>
                            <p className="font-light leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
