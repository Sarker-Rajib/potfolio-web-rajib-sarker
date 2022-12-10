import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
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

const Technologies = () => {
    return (
        <div className='py-5'>
            <div className="container">
                <Swiper
                    slidesPerView={6}
                    centeredSlides={false}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
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
        </div>
    );
};

export default Technologies;