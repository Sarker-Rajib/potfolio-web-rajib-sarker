import React from 'react';
import MyProjects from '../../Components/MyProjects/MyProjects';
import Banner from './Banner/Banner';
import Technologies from './Technologies/Technologies';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Technologies></Technologies>
            <MyProjects></MyProjects>
        </>
    );
};

export default Home;