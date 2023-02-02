import React from 'react';
import '../Banner/Banner.css';
import photo from '../../../images/image-2.png';

const Banner = () => {
    return (
        <div className='banner d-flex align-items-center'>
            <div className="container">
                <div className="row"
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                >
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="text text-light">
                            <h3>Hello ! I am</h3>
                            <h1>Rajib Sarker</h1>
                            <h2>Web Developer</h2>
                            <a className="btn btn-success mt-2" href="https://drive.google.com/file/d/1r8JK36pTPqzs12dslQKyXxrhbsruZ8Yd/view?usp=share_link" download>
                                View Resume
                            </a>
                            <a className="btn btn-success ms-2 mt-2" href="../../../files/Rajib-Sarker-Resume.pdf" download>
                                Download Resume
                            </a>
                            <br />
                            <a href='https://github.com/Sarker-Rajib' className='btn border me-2'>Github</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image"
                            data-aos="fade-left"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                        >
                            <img className='img-fluid' src={photo} alt="Rajib Sarker" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;