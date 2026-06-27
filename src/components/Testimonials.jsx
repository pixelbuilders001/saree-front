import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Ananya Sharma",
            role: "Fashion Designer",
            content: "The collection at Mahalakshmi is truly breathtaking. I've never seen such intricate Banarasi work at such reasonable prices. A must-visit!",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
        },
        {
            name: "Meera Reddy",
            role: "Premium Customer",
            content: "Registering for the VIP launch was the best decision. I love the personalized WhatsApp catalog and the attention to detail in their service.",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
        },
        {
            name: "Priya Varma",
            role: "Blogger",
            content: "The shopping experience here is pure luxury. It feels like shopping at a high-end boutique in Milan but with the soul of Indian traditions.",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-maroon mb-6"
                    >
                        What Our <span className="text-gold">Early Members</span> Say
                    </motion.h2>
                    <p className="text-charcoal/60 max-w-2xl mx-auto">
                        Join hundreds of women who have already registered for our grand VIP launch.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {testimonials.map((testi, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] p-8 rounded-3xl bg-ivory/20 border border-gold/10 relative shadow-lg"
                        >
                            <Quote className="absolute top-6 right-8 text-gold/20 w-12 h-12" />

                            <div className="flex items-center space-x-1 mb-6 text-gold">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>

                            <p className="text-charcoal/80 mb-8 italic leading-relaxed">
                                "{testi.content}"
                            </p>

                            <div className="flex items-center space-x-4">
                                <img
                                    src={testi.img}
                                    alt={testi.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                                />
                                <div>
                                    <h4 className="font-bold text-charcoal">{testi.name}</h4>
                                    <p className="text-gold text-sm font-medium">{testi.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
