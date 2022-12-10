import React from 'react';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe/ContactMe';
import MyProjects from './MyProjects/MyProjects';
import Technologies from './Technologies/Technologies';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Technologies></Technologies>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>
        </>
    );
};

export default Home;