import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gold/5"
        >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden">
                <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay actions */}
                <div className="absolute top-4 right-4 space-y-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                    <button className="bg-white/90 backdrop-blur-md p-2 rounded-full text-maroon hover:bg-gold hover:text-maroon transition-colors shadow-lg">
                        <Heart size={18} />
                    </button>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-gold text-maroon py-2 rounded-lg font-bold text-sm tracking-wider flex items-center justify-center space-x-2">
                        <ShoppingBag size={16} />
                        <span>PRE-BOOK NOW</span>
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-playfair font-bold text-charcoal text-lg group-hover:text-maroon transition-colors">
                        {product.name}
                    </h3>
                </div>
                <p className="text-charcoal/40 text-xs mb-4 line-clamp-1">
                    {product.desc}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-maroon font-bold text-xl">
                        ₹xxxx
                    </span>
                    <span className="text-[10px] text-gold font-bold uppercase tracking-widest border border-gold/30 px-2 py-0.5 rounded">
                        New Arrival
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
