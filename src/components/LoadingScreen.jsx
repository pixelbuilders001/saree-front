import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-[100] bg-maroon flex flex-col items-center justify-center"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl text-gold font-playfair font-bold tracking-[0.2em] mb-4">
                            MAHALAKSHMI
                        </h1>
                        <div className="w-24 h-[2px] bg-gold mx-auto mb-4" />
                        <p className="text-ivory/60 tracking-[0.4em] uppercase text-sm">Timeless Elegance Since 2024</p>
                    </motion.div>

                    <motion.div
                        className="absolute bottom-20 w-48 h-[1px] bg-white/10 overflow-hidden"
                    >
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full bg-gold"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
