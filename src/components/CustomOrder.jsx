import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PenTool, Palette, Scissors, MessageCircle } from 'lucide-react';

const CustomOrder = () => {
    const steps = [
        {
            icon: <Palette className="w-6 h-6" />,
            title: "Concept & Palette",
            desc: "Choose from 500+ silk blends and any shade from the heritage palette."
        },
        {
            icon: <PenTool className="w-6 h-6" />,
            title: "Motif Design",
            desc: "Work with our designers to create unique border motifs and pallu patterns."
        },
        {
            icon: <Scissors className="w-6 h-6" />,
            title: "Master Weaving",
            desc: "Your vision is brought to life on traditional handlooms by master artisans."
        }
    ];

    return (
        <section id="custom" className="py-24 bg-charcoal relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/showroom_luxury_jpg_1782486864588.png"
                    alt="Custom Weaving"
                    className="w-full h-full object-cover opacity-20 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-maroon/20" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h5 className="text-gold font-medium tracking-[0.3em] uppercase mb-4">BOUTIQUE SERVICES</h5>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-playfair leading-tight">
                                Your Vision, <br />
                                <span className="text-gold italic">Our Craftsmanship</span>
                            </h2>
                            <p className="text-ivory/60 text-lg mb-10 max-w-xl leading-relaxed">
                                Experience the luxury of bespoke heritage. At our boutique,
                                we allow you to become a designer. Customize every thread,
                                from the base fabric to the intricate zari motifs.
                            </p>

                            <div className="space-y-8 mb-12">
                                {steps.map((step, i) => (
                                    <div key={i} className="flex items-start space-x-6">
                                        <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0">
                                            {step.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">{step.title}</h4>
                                            <p className="text-ivory/40 text-sm">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link to="/customize">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center space-x-3 bg-gold text-maroon font-bold px-10 py-5 rounded-full shadow-2xl shadow-gold/20 transition-all duration-300 cursor-pointer"
                                >
                                    <MessageCircle size={20} />
                                    <span className="tracking-widest uppercase">DESIGN YOUR SAREE</span>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Visual Accent */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-3xl">
                                <img
                                    src="/assets/cat_banarasi.png"
                                    alt="Designer Sketch"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-maroon/20 mix-blend-overlay" />
                            </div>

                            {/* Decorative Gold Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 border border-gold/10 rounded-full animate-pulse" />
                            <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-2xl shadow-2xl z-20">
                                <p className="text-maroon font-black text-2xl">BESPOKE</p>
                                <p className="text-maroon/60 text-[10px] uppercase tracking-widest font-bold">Limitless Design</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomOrder;
