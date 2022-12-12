import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import html from '../../../images/tech/html.png';
import css from '../../../images/tech/css.png';
import js from '../../../images/tech/js.png';
import react from '../../../images/tech/react.png';
import boot from '../../../images/tech/B.png';
import tail from '../../../images/tech/tail.png';
import express from '../../../images/tech/ex.png';
import node from '../../../images/tech/node.png';
import vercel from '../../../images/tech/vercel.png';
import git from '../../../images/tech/github.png';
import mdb from '../../../images/tech/mdb.png';
import '../Technologies/Technologies.css';

const Technologies = () => {
    SwiperCore.use([Autoplay]);
    return (
        <div className='py-5 overflow-hidden'>
            <div className="container pt-0 pt-lg-5">
                <h2 className='text-center pb-4'>My Skills on Technologies & Tools</h2>

                <Swiper
                    // slidesPerView={5}
                    loop={true}
                    centeredSlides={false}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        // when window width is >= 640px
                        320: {
                            width: 320,
                            slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 4,
                        },
                        992: {
                            width: 992,
                            slidesPerView: 5,
                        },
                        1200: {
                            width: 1200,
                            slidesPerView: 6,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            <img className='img-fluid' src={html} alt='imageCarouseer' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            <img className='img-fluid' src={css} alt='imageCarouseer' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            <img className='img-fluid' src={js} alt='imageCarouseer' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            <img className='img-fluid' src={react} alt='imageCarouseer' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            <img className='img-fluid' src={boot} alt='imageCarouseer' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            <img className='img-fluid' src={tail} alt='imageCarouseer' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            <img className='img-fluid' src={express} alt='imageCarouseer' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            <img className='img-fluid' src={node} alt='imageCarouseer' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            <img className='img-fluid' src={vercel} alt='imageCarouseer' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            <img className='img-fluid' src={git} alt='imageCarouseer' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            <img className='img-fluid' src={mdb} alt='imageCarouseer' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};

export default Technologies;