import React from 'react';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div style={{ paddingTop: "100px" }}>
            <div className='container'>
                <div className="about-me p-2 p-md-4" style={{ boxShadow: "0px 5px 15px 2px #764cd866", borderRadius: "15px" }}>
                    <h2 className='text-center'>About me</h2>
                    <>
                        <h6>Hello there! , I'm Rajib Sarker <br /></h6>
                        <p>I'm very much passionate about computer science, so that here I,m as a developer.<br /><br />
                            I explored how to code myself, fast-forward to today. It was html with what I started my journey
                            like many others and now I'm doing coding with JavaScript and various technologies. Recently I have completed
                            "complete web development course with jhankar mahbub" on Programming Hero. I feel very very much happy and excited when i can make better codes
                            that give a nice output. Currently i'm focused on MERN stack development.
                            <br /><br />
                            I like to explore new technologies, play games, reading books and hangouts with my friends for my free times.
                        </p>
                    </>
                    <div className="row pt-3 pt-md-5">
                        <div className="col-md-6">
                            <h5>Education :</h5>
                            <p>Bachelor in Arts, <br />
                                Govt. Titumir College (Dhaka University) <br />
                                Dhaka, Bangladesh.
                            </p>
                        </div>

                        <div className="col-md-6">
                            <p className='m-0'>Address: Dhaka, Bangladesh</p>
                            <p>Email: rajib.sarker111@gmail.com</p>
                            <a href='https://github.com/Sarker-Rajib' className='btn border me-2'>Github</a>
                            <Link to='/contact' className='btn border'>Contact me</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;