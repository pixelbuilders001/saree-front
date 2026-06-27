import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gift, Compass, Trophy, Medal, Award } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full flex items-center overflow-hidden bg-charcoal">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/hero_multi.png"
                    alt="Mahalakshmi Sarees Collection"
                    className="w-full h-full object-cover opacity-60 md:opacity-60 opacity-40"
                />
                {/* Responsive Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-charcoal via-charcoal/60 md:via-charcoal/40 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20 md:pt-16">
                <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Heading */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-4 md:mb-6 leading-[1.2] md:leading-[1.1] font-playfair tracking-tight">
                            Discover <br className="hidden md:block" />
                            <span className="text-gold italic font-medium">Timeless</span>
                            {" "}Elegance
                        </h1>

                        {/* Ornament Separator */}
                        <div className="flex items-center justify-center md:justify-start space-x-4 mb-6 opacity-60">
                            <div className="h-[1px] w-8 md:w-10 bg-gradient-to-r from-transparent to-gold" />
                            <div className="w-1.5 h-1.5 rotate-45 border border-gold" />
                            <div className="h-[1px] w-8 md:w-10 bg-gradient-to-l from-transparent to-gold" />
                        </div>

                        {/* Description */}
                        <p className="text-sm md:text-lg text-ivory/80 mb-8 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
                            Handpicked Banarasi, Silk, Cotton, and Designer Sarees.
                            <span className="hidden md:inline"> Premium quality at affordable prices for every occasion.</span>
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-12">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-center space-x-3 bg-gold text-maroon font-bold px-8 py-3 md:py-3.5 rounded-lg shadow-xl shadow-gold/10 transition-all duration-300 text-xs md:text-sm"
                            >
                                <Gift size={16} className="md:w-4.5 md:h-4.5" />
                                <span className="tracking-widest uppercase">JOIN VIP LAUNCH</span>
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-center space-x-3 border border-gold/50 text-gold font-bold px-8 py-3 md:py-3.5 rounded-lg hover:bg-gold/5 transition-all duration-300 text-xs md:text-sm"
                            >
                                <Compass size={16} className="md:w-4.5 md:h-4.5" />
                                <span className="tracking-widest uppercase">EXPLORE COLLECTIONS</span>
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="grid grid-cols-3 md:grid-cols-3 gap-0 border border-white/10 bg-black/40 backdrop-blur-xl rounded-xl overflow-hidden max-w-2xl mx-auto md:mx-0"
                    >
                        <div className="p-3 md:p-4 flex flex-col md:flex-row items-center md:items-center text-center md:text-left space-y-2 md:space-y-0 md:space-x-3 border-r border-white/10 hover:bg-white/5 transition-colors group">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                                <Award className="text-gold" size={16} />
                            </div>
                            <div className="hidden md:block">
                                <h4 className="text-white text-[10px] md:text-xs font-bold opacity-90">Premium Quality</h4>
                                <p className="text-ivory/40 text-[8px] uppercase tracking-wider mt-0.5">Handpicked</p>
                            </div>
                            <div className="md:hidden">
                                <h4 className="text-white text-[9px] font-bold opacity-90 leading-tight">Premium</h4>
                            </div>
                        </div>
                        <div className="p-3 md:p-4 flex flex-col md:flex-row items-center md:items-center text-center md:text-left space-y-2 md:space-y-0 md:space-x-3 border-r border-white/10 hover:bg-white/5 transition-colors group">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                                <Trophy className="text-gold" size={16} />
                            </div>
                            <div className="hidden md:block">
                                <h4 className="text-white text-[10px] md:text-xs font-bold opacity-90">Affordable</h4>
                                <p className="text-ivory/40 text-[8px] uppercase tracking-wider mt-0.5">Best Value</p>
                            </div>
                            <div className="md:hidden">
                                <h4 className="text-white text-[9px] font-bold opacity-90 leading-tight">Value</h4>
                            </div>
                        </div>
                        <div className="p-3 md:p-4 flex flex-col md:flex-row items-center md:items-center text-center md:text-left space-y-2 md:space-y-0 md:space-x-3 hover:bg-white/5 transition-colors group">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                                <Medal className="text-gold" size={16} />
                            </div>
                            <div className="hidden md:block">
                                <h4 className="text-white text-[10px] md:text-xs font-bold opacity-90">VIP Offers</h4>
                                <p className="text-ivory/40 text-[8px] uppercase tracking-wider mt-0.5">Exclusive</p>
                            </div>
                            <div className="md:hidden">
                                <h4 className="text-white text-[9px] font-bold opacity-90 leading-tight">Offers</h4>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
