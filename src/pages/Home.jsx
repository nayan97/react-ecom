import React from 'react';
import Header from '../components/layouts/Header';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
const Home = () => {
    return (
        <>
            <header>
                <Header></Header>
            </header>
            <Hero></Hero>
            <FeaturedProducts></FeaturedProducts>
        </>
    );
};

export default Home;