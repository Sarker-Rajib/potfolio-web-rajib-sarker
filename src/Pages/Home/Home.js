import React from 'react';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe/ContactMe';
import Technologies from './Technologies/Technologies';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Technologies></Technologies>
            <ContactMe></ContactMe>
        </>
    );
};

export default Home;