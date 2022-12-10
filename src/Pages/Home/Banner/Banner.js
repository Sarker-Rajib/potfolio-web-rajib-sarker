import React from 'react';
import '../Banner/Banner.css';
import photo from '../../../images/image-2.png';

const Banner = () => {
    return (
        <div className='banner d-flex align-items-center'>
           <div className="container">
            <div className="row">
                <div className="col-lg-6 d-flex align-items-center">
                    <div className="text text-light">
                        <h3>Hello ! I am</h3>
                        <h1>Rajib Sarker</h1>
                        <h2>Web Developer</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="image">
                        <img className='img-fluid' src={photo} alt="Rajib Sarker" />
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Banner;