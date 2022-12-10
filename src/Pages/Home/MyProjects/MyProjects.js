import React from 'react';
import image1 from '../../../images/project/10.png';
import image2 from '../../../images/project/11.png';
import image3 from '../../../images/project/12.png';

const MyProjects = () => {
    return (
        <div className='py-5'>
            <div className="container">
                <h2 className="text-center pb-3">My Projects</h2>
                <div className="row g-3 g-lg-5">
                    <div className="col-md-6">
                        <div className="item-card h-100 p-3 p-lg-5" style={{ boxShadow: "0px 5px 15px 2px #764cd866", borderRadius: "15px" }}>
                            <h5>01. Book Bearer</h5>
                            <div className="text py-2">
                                <a className='btn border' href='https://bookbearer-5bfd0.web.app/'>Live Link</a>
                                <a className='btn border' href='https://github.com/Sarker-Rajib/bookbearer-resale-12'>github client site</a>
                                <a className='btn border' href='https://github.com/Sarker-Rajib/bookbearer-server'>github server site</a>

                                <h6 className='pt-3'>About the Project</h6>
                                <ul>
                                    <li>This is a project based on the online resale market. You can get Buy and Sell option here.</li>
                                    <li>You have to log (email and google login available) in to see all products.</li>
                                    <li>You can see your booking product as a buyer. As a Seller you can add and see your products. If there is any advertised product you can see then on homepage advertise section.</li>
                                    <li>If you want to be a seller you have to select seller option during create an account.</li>
                                    <li>You can Contact us via contact form fill up.</li>
                                    <li>You will be able to subscribe our newsletter to get our updates.</li>
                                    <li>Tech & Tools : <strong>React Js, Express Js, MongoDb, axios, vercel, firebase, node js</strong></li>
                                    <li>User Authentication</li>
                                </ul>
                            </div>
                            <img className='img-fluid' src={image3} alt="ban" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="item-card h-100 p-3 p-lg-5" style={{ boxShadow: "0px 5px 15px 2px #764cd866", borderRadius: "15px" }}>
                            <h5>02. Fast Express</h5>
                            <div className="text py-2">
                                <a className='btn border' href='https://assignment-11-82529.web.app/'>Live Link</a>
                                <a className='btn border' href='https://github.com/Sarker-Rajib/service-review-11-client'>github client site</a>
                                <a className='btn border' href='https://github.com/Sarker-Rajib/serviceReview-11-server'>github server site</a>

                                <h6 className='pt-3'>About the Project</h6>
                                <ul>
                                    <li>Home page : you will find a navbar, some display services, benner, about us,
                                        contact us, footer sections. Below the display services you will find a see all button. you can see all the services when you click on that button.</li>
                                    <li>On navbar you will find Home , blog , and login button. If you log in you will find more two buttons - 1. Add services and My reviews.</li>
                                    <li>Blog page will show you some learning contents.</li>
                                    <li>If you go to the add services page you will be able to add new services.</li>
                                    <li>In the my review page you will see your reviews and you can edit them here. if you don't have any comments you will see a message.</li>
                                    <li>You can see description about service by clicking "view details" button on service card.</li>
                                    <li>In the details page you can add reviews.</li>
                                    <li>Tech & Tools : <strong>React Js, Express Js, MongoDb, axios, vercel, firebase, node js</strong></li>
                                    <li>User Authentication</li>
                                </ul>
                            </div>
                            <img className='img-fluid' src={image2} alt="ban" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="item-card h-100 p-3 p-lg-5" style={{ boxShadow: "0px 5px 15px 2px #764cd866", borderRadius: "15px" }}>
                            <h5>03. IT Pro Edu</h5>
                            <div className="text py-2">
                                <a className='btn border' href='https://assignment-10-bfb97.web.app/'>Live Link</a>
                                <a className='btn border' href='https://github.com/Sarker-Rajib/It-pro-edu-10'>github client site</a>
                                <a className='btn border' href='https://github.com/Sarker-Rajib/it-pro-edu-server'>github server site</a>

                                <h6 className='pt-3'>About the Project</h6>
                                <ul>
                                    <li>IT ProEdu is professional learning website. Here information technology courses are provided. At home page you will find a banner and courses bellow banner</li>
                                    <li>Dark and light mode are available</li>
                                    <li>You click on "more info about course you can see full details of course"</li>
                                    <li>You can get the premium access to the courses. To access the courses you have to login first</li>
                                    <li>Tech & Tools : <strong>React Js, Express Js, MongoDb, vercel, firebase, node js</strong></li>
                                    <li>User Authentication</li>
                                </ul>
                            </div>
                            <img className='img-fluid' src={image1} alt="ban" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;