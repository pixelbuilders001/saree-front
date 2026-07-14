import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { categories } from '../data/products';

const CategoryCircles = () => {
    const scrollContainerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const categoryImages = {
        'bridal': '/assets/cat_bridal.png',
        'silk': '/assets/cat_silk.png',
        'banarasi': '/assets/cat_banarasi.png',
        'sico': '/assets/showroom_luxury_jpg_1782486864588.png',
        'cotton': '/assets/cat_cotton.png',
        'party-wear': '/assets/cat_party_wear.png',
        'kurtis': '/assets/cat_kurtis.png',
        'handloom': '/assets/cat_handloom.png'
    };

    // Helper to generate the scallops mathematically for the mask & borders
    const generateScallopPath = (cx, cy, r, numScallops, depth) => {
        let path = "";
        const angleStep = (2 * Math.PI) / numScallops;

        for (let i = 0; i < numScallops; i++) {
            const theta1 = i * angleStep;
            const theta2 = (i + 1) * angleStep;
            const thetaMid = (i + 0.5) * angleStep;

            const x1 = cx + r * Math.cos(theta1);
            const y1 = cy + r * Math.sin(theta1);

            const x2 = cx + r * Math.cos(theta2);
            const y2 = cy + r * Math.sin(theta2);

            const controlR = r + depth;
            const xc = cx + controlR * Math.cos(thetaMid);
            const yc = cy + controlR * Math.sin(thetaMid);

            if (i === 0) {
                path += `M ${x1} ${y1}`;
            }

            path += ` Q ${xc} ${yc}, ${x2} ${y2}`;
        }

        path += " Z";
        return path;
    };

    const outerScallop = generateScallopPath(100, 100, 78, 32, 4);
    const innerScallop = generateScallopPath(100, 100, 72, 32, 3.5);
    const clipScallop = generateScallopPath(100, 100, 68, 32, 3.2);

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftArrow(scrollLeft > 5);
            // Allow a small tolerance for rounding issues
            setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 5);
        }
    };

    useEffect(() => {
        const currentRef = scrollContainerRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', checkScrollButtons);
            // Run initial check
            checkScrollButtons();
            // Handle window resize
            window.addEventListener('resize', checkScrollButtons);
        }
        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', checkScrollButtons);
            }
            window.removeEventListener('resize', checkScrollButtons);
        };
    }, []);

    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-12 bg-ivory overflow-hidden relative border-b border-gold/10">
            <div className="container mx-auto px-6 relative group/slider">

                {/* Horizontal scroll container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto scrollbar-none space-x-6 md:space-x-8 py-4 px-4 items-center justify-start md:justify-center scroll-smooth snap-x"
                >
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                            className="flex-shrink-0 flex flex-col items-center snap-center w-[130px] md:w-[150px]"
                        >
                            <Link
                                to={`/collection/${cat.id}`}
                                className="relative w-[125px] h-[125px] md:w-[145px] md:h-[145px] group cursor-pointer block transition-transform duration-300 hover:scale-105"
                            >
                                <svg
                                    viewBox="0 0 200 200"
                                    className="w-full h-full drop-shadow-md overflow-visible"
                                >
                                    <defs>
                                        <clipPath id={`scallop-clip-${cat.id}`}>
                                            <path d={clipScallop} />
                                        </clipPath>
                                    </defs>

                                    {/* Outer Gold Scalloped Border Layer */}
                                    <path
                                        d={outerScallop}
                                        fill="none"
                                        stroke="#D4AF37"
                                        strokeWidth="1.5"
                                        className="transition-all duration-300 group-hover:stroke-gold-light group-hover:scale-[1.02] origin-center"
                                    />

                                    {/* Inner Gold Scalloped Border Layer */}
                                    <path
                                        d={innerScallop}
                                        fill="none"
                                        stroke="#D4AF37"
                                        strokeWidth="0.8"
                                        strokeDasharray="2,2"
                                        className="opacity-80 transition-all duration-300 group-hover:scale-[1.01] origin-center"
                                    />

                                    {/* Clipped Saree/Model Image */}
                                    <g clipPath={`url(#scallop-clip-${cat.id})`}>
                                        <rect width="200" height="200" fill="#F5E6D3" />
                                        <image
                                            href={categoryImages[cat.id]}
                                            x="15"
                                            y="15"
                                            width="170"
                                            height="170"
                                            preserveAspectRatio="xMidYMid slice"
                                            className="transition-transform duration-700 ease-out group-hover:scale-110 origin-center"
                                        />

                                        {/* Golden Hover overlay glow */}
                                        <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    </g>

                                    {/* Inner-most border outline (soft) */}
                                    <path
                                        d={clipScallop}
                                        fill="none"
                                        stroke="#D4AF37"
                                        strokeWidth="1.2"
                                        className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </svg>
                            </Link>

                            {/* Label text under circle */}
                            <Link
                                to={`/collection/${cat.id}`}
                                className="mt-3 text-center group block cursor-pointer"
                            >
                                <span className="text-sm md:text-base font-medium font-poppins text-charcoal hover:text-maroon transition-colors duration-300 tracking-wide block">
                                    {cat.name}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Left navigation arrow */}
                {showLeftArrow && (
                    <button
                        onClick={() => handleScroll('left')}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/95 border border-gold/20 shadow-md flex items-center justify-center text-charcoal hover:bg-gold hover:text-white transition-all duration-300 opacity-0 group-hover/slider:opacity-100"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={20} />
                    </button>
                )}

                {/* Right navigation arrow */}
                {showRightArrow && (
                    <button
                        onClick={() => handleScroll('right')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/95 border border-gold/20 shadow-md flex items-center justify-center text-charcoal hover:bg-gold hover:text-white transition-all duration-300 opacity-0 group-hover/slider:opacity-100"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={20} />
                    </button>
                )}

            </div>
        </section>
    );
};

export default CategoryCircles;
