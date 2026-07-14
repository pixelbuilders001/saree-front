import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown } from 'lucide-react';

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
                ? 'bg-ivory/95 backdrop-blur-md py-2.5 shadow-sm border-b border-gold/10'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link
                    to="/"
                    className="flex items-center group cursor-pointer"
                >
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="h-8 md:h-9 w-auto transition-all duration-300"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex items-center space-x-6 mr-4">
                        {navLinks.map((link, i) => {
                            const isAnchor = link.href.includes('#');
                            const Content = (
                                <>
                                    {link.name}
                                    {link.name === 'Home' && isHomePage && (
                                        <motion.span
                                            layoutId="nav-underline"
                                            className="absolute -bottom-1 left-0 w-full h-[1px] bg-gold"
                                        />
                                    )}
                                </>
                            );

                            const linkClass = `text-[11px] font-normal tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300 relative group ${isScrolled || !isHomePage ? 'text-charcoal/80' : 'text-white/90'
                                }`;

                            return isAnchor ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={linkClass}
                                >
                                    {Content}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={linkClass}
                                >
                                    {Content}
                                </Link>
                            );
                        })}
                    </div>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center space-x-1.5 border border-gold hover:bg-gold text-gold hover:text-maroon px-4 py-1.5 rounded-full text-[10px] font-medium tracking-[0.18em] uppercase transition-all duration-300"
                    >
                        <Crown size={11} fill="currentColor" className="shrink-0" />
                        <span>JOIN VIP</span>
                    </motion.button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={isScrolled || !isHomePage ? 'text-charcoal/80' : 'text-white/90'}
                    >
                        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
                        className="md:hidden bg-ivory border-b border-gold/10 overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col space-y-3.5 p-6">
                            {navLinks.map((link) => {
                                const isAnchor = link.href.includes('#');
                                const classes = "text-charcoal/80 font-normal text-xs uppercase tracking-widest hover:text-gold flex items-center justify-between py-1";
                                return isAnchor ? (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={classes}
                                    >
                                        {link.name}
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold/30"></span>
                                    </a>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={classes}
                                    >
                                        {link.name}
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold/30"></span>
                                    </Link>
                                );
                            })}
                            <button className="border border-gold text-gold hover:bg-gold hover:text-maroon py-3 rounded-full flex items-center justify-center space-x-2 text-[10px] font-semibold tracking-widest uppercase transition-all duration-300 mt-2">
                                <Crown size={12} fill="currentColor" />
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
