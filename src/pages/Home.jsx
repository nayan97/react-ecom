import React from 'react';
import Header from '../components/layouts/Header';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import LatestProducts from '../components/LatestProducts';
import Footer from '../components/layouts/Footer';
const Home = () => {
    return (
        <>
            <header>
                <Header></Header>
            </header>
            <Hero></Hero>
            <FeaturedProducts></FeaturedProducts>
            <LatestProducts></LatestProducts>
            <Footer></Footer>
        </>
    );
};

export default Home;