import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Hero = () => {
    const slides = [
        {
            image: '/assets/hero_banarasi_slide.png',
            title: 'Heritage Craftsmanship',
            subtitle: 'Handpicked masterpieces directly from India\'s finest master weavers.',
            cta: 'Explore Banarasi',
            link: '/collection/banarasi'
        },
        {
            image: '/assets/hero_silk_slide.png',
            title: 'Pure Kanchipuram Silk',
            subtitle: 'Experience the luxurious luster of authentic handwoven silk sarees.',
            cta: 'Explore Pure Silk',
            link: '/collection/silk'
        },
        {
            image: '/assets/hero_bridal_slide.png',
            title: 'The Bridal Trousseau',
            subtitle: 'Meticulously designed gold and silver zari drapes for your special moments.',
            cta: 'Explore Bridal Pattu',
            link: '/collection/bridal'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Fade and slide variants for the carousel transitions
    const slideVariants = {
        enter: (dir) => ({
            opacity: 0,
            scale: 1.02
        }),
        center: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: 'easeOut' }
        },
        exit: (dir) => ({
            opacity: 0,
            scale: 0.98,
            transition: { duration: 0.8, ease: 'easeIn' }
        })
    };

    return (
        <section id="home" className="relative h-[80vh] md:h-[85vh] min-h-[550px] w-full bg-charcoal overflow-hidden group/hero">

            {/* Carousel Slides */}
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Background Saree Model Image */}
                    <img
                        src={slides[currentIndex].image}
                        alt={slides[currentIndex].title}
                        className="w-full h-full object-cover opacity-60 transition-transform duration-700 ease-out scale-102"
                    />

                    {/* Minimalist Premium Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/50" />

                    {/* Slide Text Content */}
                    <div className="absolute inset-0 flex items-center justify-start">
                        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center md:text-left max-w-3xl flex flex-col items-center md:items-start md:max-w-lg lg:max-w-xl">

                            {/* Slide Label (Small) */}
                            <motion.span
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-[10px] md:text-xs font-poppins font-medium uppercase tracking-[0.3em] text-gold mb-3 md:mb-4"
                            >
                                Royal Heritage Collection
                            </motion.span>

                            {/* Main Slide Title */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.7 }}
                                className="text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-4 md:mb-6 font-playfair leading-tight tracking-wide"
                            >
                                {slides[currentIndex].title}
                            </motion.h1>

                            {/* Ornament line */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 0.5, scale: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="flex items-center space-x-3 mb-4 md:mb-6 justify-center md:justify-start"
                            >
                                <div className="h-[0.5px] w-6 bg-gold" />
                                <div className="w-1 h-1 rotate-45 border border-gold" />
                                <div className="h-[0.5px] w-6 bg-gold" />
                            </motion.div>

                            {/* Minimalist Subtitle */}
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45, duration: 0.6 }}
                                className="text-xs md:text-base text-ivory/80 mb-6 md:mb-8 font-light font-poppins leading-relaxed max-w-lg"
                            >
                                {slides[currentIndex].subtitle}
                            </motion.p>

                            {/* CTA Link Button - Minimalist design */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.55, duration: 0.6 }}
                            >
                                <Link
                                    to={slides[currentIndex].link}
                                    className="inline-flex items-center space-x-2 bg-gold/90 text-maroon hover:bg-gold px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-103"
                                >
                                    <span>{slides[currentIndex].cta}</span>
                                    <ArrowRight size={14} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Slider Dots indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setDirection(i > currentIndex ? 1 : -1);
                            setCurrentIndex(i);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-gold w-6' : 'bg-white/40 hover:bg-white/80'}`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Carousel Navigation Arrows */}
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 bg-charcoal/30 text-white flex items-center justify-center hover:bg-gold hover:text-maroon hover:border-gold transition-all duration-300 opacity-0 group-hover/hero:opacity-100"
                aria-label="Previous slide"
            >
                <ChevronLeft size={20} />
            </button>

            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 bg-charcoal/30 text-white flex items-center justify-center hover:bg-gold hover:text-maroon hover:border-gold transition-all duration-300 opacity-0 group-hover/hero:opacity-100"
                aria-label="Next slide"
            >
                <ChevronRight size={20} />
            </button>

        </section>
    );
};

export default Hero;
