import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/assets/showroom_luxury_jpg_1782486864588.png"
                                alt="Mahalakshmi Showroom"
                                className="w-full h-auto hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Decorative Gold Frame */}
                        <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold/20 rounded-3xl -z-10 translate-x-3 translate-y-3" />

                        <div className="absolute -bottom-10 -right-10 bg-maroon p-8 rounded-2xl shadow-2xl hidden md:block">
                            <p className="text-gold text-4xl font-bold mb-1">25+</p>
                            <p className="text-ivory/60 text-xs uppercase tracking-widest">Years of Craftsmanship</p>
                        </div>
                    </motion.div>

                    {/* Right: Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <h5 className="text-gold font-medium tracking-[0.3em] uppercase mb-4">OUR STORY</h5>
                        <h2 className="text-4xl md:text-5xl font-bold text-maroon mb-8 leading-tight">
                            A Legacy of <br />
                            <span className="text-gradient-gold italic">Indian Heritage</span>
                        </h2>
                        <div className="space-y-6 text-charcoal/70 text-lg leading-relaxed font-light">
                            <p>
                                Mahalakshmi Sarees is more than just a showroom; it's a celebration
                                of India's rich textile heritage. We believe that every saree tells
                                a story of craftsmanship, tradition, and timeless beauty.
                            </p>
                            <p>
                                Our mission is to bring carefully curated collections from the
                                heart of India directly to you. From the intricate weaves of
                                Banaras to the vibrant silks of the South, we ensure premium quality
                                with an affordable shopping experience.
                            </p>
                            <p className="font-medium text-maroon italic p-4 border-l-4 border-gold bg-ivory/50">
                                "We don't just sell sarees; we preserve stories of elegance for
                                generations to come."
                            </p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-gold mt-10"
                        >
                            READ OUR JOURNEY
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
