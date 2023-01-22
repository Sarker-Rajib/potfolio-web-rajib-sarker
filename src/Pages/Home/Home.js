import React, { useEffect } from 'react';
import MyProjects from '../../Components/MyProjects/MyProjects';
import Banner from './Banner/Banner';
import Technologies from './Technologies/Technologies';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Banner></Banner>
            <Technologies></Technologies>
            <MyProjects></MyProjects>
        </>
    );
};

export default Home;