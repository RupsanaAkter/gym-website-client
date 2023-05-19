import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Sevice/Services';
import Offer from '../Offer/Offer';
import About from '../About/About';

const Home = () => {
    return (
        <div className='mx-20'>
            <Banner></Banner>
            <Services></Services>
            <Offer></Offer>
            <About></About>
        </div>
    );
};

export default Home;