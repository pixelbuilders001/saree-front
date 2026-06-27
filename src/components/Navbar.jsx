import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown, Star } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Collections', href: '/#collections' },
        { name: 'Why Us', href: '/#why-us' },
        { name: 'Register', href: '/#register' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || !isHomePage
                ? 'bg-ivory/90 backdrop-blur-lg py-3 shadow-lg border-b border-gold/10'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link
                    to="/"
                    className="flex items-center space-x-3 group cursor-pointer"
                >
                    <div className="w-10 h-10 flex items-center justify-center border border-gold/30 rounded-full group-hover:border-gold transition-colors duration-300">
                        <Star className="text-gold" size={24} />
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-xl font-playfair font-bold tracking-wider leading-none ${isScrolled || !isHomePage ? 'text-maroon' : 'text-white'}`}>
                            Mahalakshmi
                        </span>
                        <span className="text-[10px] font-poppins tracking-[0.3em] font-medium text-gold uppercase">
                            Sarees
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10">
                    <div className="flex items-center space-x-8 mr-6">
                        {navLinks.map((link, i) => {
                            const isAnchor = link.href.includes('#');
                            const Content = (
                                <>
                                    {link.name}
                                    {link.name === 'Home' && isHomePage && (
                                        <motion.span
                                            layoutId="nav-underline"
                                            className="absolute -bottom-1 left-0 w-full h-[2px] bg-gold"
                                        />
                                    )}
                                </>
                            );

                            return isAnchor ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-medium hover:text-gold transition-colors duration-300 relative group ${isScrolled || !isHomePage ? 'text-charcoal' : 'text-white'}`}
                                >
                                    {Content}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`text-sm font-medium hover:text-gold transition-colors duration-300 relative group ${isScrolled || !isHomePage ? 'text-charcoal' : 'text-white'}`}
                                >
                                    {Content}
                                </Link>
                            );
                        })}
                    </div>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center space-x-2 bg-gold text-maroon hover:bg-gold-light px-6 py-2 rounded-lg text-xs font-bold tracking-wider transition-all duration-300 shadow-lg"
                    >
                        <Crown size={14} fill="currentColor" />
                        <span>JOIN VIP</span>
                    </motion.button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={isScrolled || !isHomePage ? 'text-charcoal' : 'text-white'}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-ivory border-b border-gold/10 overflow-hidden shadow-2xl"
                    >
                        <div className="flex flex-col space-y-4 p-6">
                            {navLinks.map((link) => {
                                const isAnchor = link.href.includes('#');
                                const classes = "text-charcoal font-medium text-lg hover:text-gold flex items-center justify-between";
                                return isAnchor ? (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={classes}
                                    >
                                        {link.name}
                                        <span className="w-2 h-2 rounded-full bg-gold/30"></span>
                                    </a>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={classes}
                                    >
                                        {link.name}
                                        <span className="w-2 h-2 rounded-full bg-gold/30"></span>
                                    </Link>
                                );
                            })}
                            <button className="bg-gold text-maroon font-bold py-4 rounded-xl flex items-center justify-center space-x-2">
                                <Crown size={18} fill="currentColor" />
                                <span>JOIN VIP</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
