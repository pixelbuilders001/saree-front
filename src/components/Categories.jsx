import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';

const Categories = () => {
    // Map existing category IDs to the local images
    const categoryImages = {
        'banarasi': '/assets/cat_banarasi.png',
        'silk': '/assets/cat_silk.png',
        'cotton': '/assets/cat_cotton.png',
        'organza': '/assets/cat_organza.png',
        'party-wear': '/assets/cat_party_wear.png',
        'bridal': '/assets/cat_bridal.png'
    };

    return (
        <section id="collections" className="py-24 bg-ivory">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-maroon mb-4 font-playfair"
                    >
                        Curated <span className="text-gold">Collections</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-gold mx-auto mb-6" />
                    <p className="text-charcoal/60 max-w-2xl mx-auto">
                        Explore our meticulously selected range of premium sarees, where
                        tradition meets contemporary design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="relative group h-[380px] rounded-2xl overflow-hidden cursor-pointer shadow-lg text-left"
                        >
                            <img
                                src={categoryImages[cat.id]}
                                alt={cat.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                                    {cat.name}
                                </h3>
                                <Link
                                    to={`/collection/${cat.id}`}
                                    className="inline-block bg-gold text-maroon px-8 py-3 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg tracking-widest text-center"
                                >
                                    EXPLORE COLLECTION
                                </Link>
                            </div>

                            {/* Gold border on hover */}
                            <div className="absolute inset-4 border border-gold/0 group-hover:border-gold/30 rounded-2xl transition-all duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
