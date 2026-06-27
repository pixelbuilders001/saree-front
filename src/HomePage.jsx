import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Categories from './components/Categories';
import About from './components/About';
import RegistrationForm from './components/RegistrationForm';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import ProductShowcase from './components/ProductShowcase';
import CustomOrder from './components/CustomOrder';
import { products } from './data/products';

const HomePage = () => {
    const newArrivals = products.filter(p => p.isNew);
    const bestSellers = products.filter(p => p.isBestSeller);

    return (
        <main>
            <Hero />

            {/* Featured Sections */}
            <ProductShowcase
                title="New Arrivals"
                subtitle="The latest heritage-inspired masterpieces, fresh from our master weavers."
                products={newArrivals}
                viewAllLink="/collection/banarasi"
            />

            <Categories />

            <ProductShowcase
                title="Best Sellers"
                subtitle="Our most loved drapes, trusted by thousands of women for their special moments."
                products={bestSellers}
                viewAllLink="/collection/silk"
            />

            <CustomOrder />

            <Benefits />
            <About />
            <Features />
            <Testimonials />
            <FAQ />
            <RegistrationForm />
            <CTA />
        </main>
    );
};

export default HomePage;
