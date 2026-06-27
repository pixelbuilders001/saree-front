import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';

const ProductShowcase = ({ title, subtitle, products, viewAllLink }) => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-maroon mb-4 font-playfair">
                            {title.split(' ')[0]} <span className="text-gold italic">{title.split(' ').slice(1).join(' ')}</span>
                        </h2>
                        <p className="text-charcoal/60 max-w-xl">
                            {subtitle}
                        </p>
                    </motion.div>

                    <Link
                        to={viewAllLink}
                        className="inline-flex items-center text-maroon font-bold group"
                    >
                        <span className="mr-2 text-sm tracking-widest uppercase">Explore All</span>
                        <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                            <ArrowRight size={18} className="text-gold group-hover:text-maroon transition-colors" />
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.slice(0, 4).map((product, i) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
