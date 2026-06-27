import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/hero_saree_jpg_1782486850224.png"
                    alt="Luxury CTA Background"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 bg-maroon/60 backdrop-blur-[2px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-8 leading-tight">
                        Become One of Our First <br />
                        <span className="text-gradient-gold italic">VIP Customers</span>
                    </h2>
                    <p className="text-ivory/80 text-xl mb-12 font-light max-w-2xl mx-auto">
                        Don't miss out on our grand opening benefits. Register now and receive
                        your exclusive invitation along with a ₹500 discount voucher.
                    </p>
                    <motion.a
                        href="#register"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-gold !py-5 !px-12 text-xl inline-block shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                    >
                        REGISTER NOW
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
