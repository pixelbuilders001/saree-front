import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';
import { ArrowLeft, Filter, SlidersHorizontal } from 'lucide-react';

const CategoryListing = () => {
    const { categoryId } = useParams();

    // Find the current category name and info
    const category = categories.find(c => c.id === categoryId) || categories[0];
    const filteredProducts = products.filter(p => p.category === (categoryId || categories[0].id));

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [categoryId]);

    return (
        <div className="min-h-screen bg-ivory pt-32 pb-24">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <Link
                            to="/"
                            className="inline-flex items-center text-maroon/60 hover:text-maroon transition-colors mb-6 group"
                        >
                            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-bold tracking-wider">BACK TO COLLECTIONS</span>
                        </Link>
                        <h1 className="text-5xl md:text-6xl font-playfair font-bold text-maroon flex items-center">
                            <span className="mr-4">{category.icon}</span>
                            {category.name} <span className="text-gold italic ml-4">Exclusives</span>
                        </h1>
                        <p className="text-charcoal/60 mt-4 max-w-xl">
                            Discover our handpicked {category.name} collection. Each piece tells a story of heritage,
                            craftsmanship, and timeless Indian elegance.
                        </p>
                    </div>

                    {/* Toolbar */}
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 border border-gold/30 px-6 py-3 rounded-xl bg-white text-charcoal text-sm font-bold hover:border-gold transition-colors shadow-sm">
                            <SlidersHorizontal size={16} />
                            <span>FILTER</span>
                        </button>
                        <div className="text-sm text-charcoal/40 font-medium">
                            Showing <span className="text-maroon font-bold">{filteredProducts.length}</span> Masterpieces
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-32">
                        <h3 className="text-2xl font-bold text-maroon/40 font-playfair">
                            New collection arriving soon...
                        </h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryListing;
