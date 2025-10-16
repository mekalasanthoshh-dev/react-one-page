import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import client_1 from '../assets/Images/testimonials-1.jpg'
import client_2 from '../assets/Images/testimonials-2.jpg'
import client_3 from '../assets/Images/testimonials-3.jpg'
import client_4 from '../assets/Images/testimonials-4.jpg'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Testimonials() {
    return (
        <>
        <div className='testimonials tb-space'>
        <div className="container">
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h1 className="text-center pagetitle py-2">Testimonials</h1>
        <p className="text-center mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        
        
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        breakpoints={{
            350: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        > 
        <SwiperSlide>
        <div className='testimonials-card'>
        <p>
        <i className="bi bi-quote quote-icon-left"></i> 
        <i>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim.</i>
        <i className="bi bi-quote quote-icon-right"></i>
        </p>
        <h3><img src={client_1}/></h3>
        <h2>Jena Karlis</h2>
        <h4>Store Owners</h4>
        </div>
        </SwiperSlide>
         <SwiperSlide>
        <div className='testimonials-card'>
        <p>
        <i className="bi bi-quote quote-icon-left"></i> 
        <i>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim.</i>
        <i className="bi bi-quote quote-icon-right"></i>
        </p>
        <h3><img src={client_2}/></h3>
        <h2>Matt Brandon</h2>
        <h4>Freelancer</h4>
        </div>
        </SwiperSlide>
         <SwiperSlide>
        <div className='testimonials-card'>
        <p>
        <i className="bi bi-quote quote-icon-left"></i> 
        <i>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim.</i>
        <i className="bi bi-quote quote-icon-right"></i>
        </p>
        <h3><img src={client_3}/></h3>
        <h2>Saul Goodman</h2>
        <h4>Ceo & Founder</h4>
        </div>
        </SwiperSlide>
         <SwiperSlide>
        <div className='testimonials-card'>
        <p>
        <i className="bi bi-quote quote-icon-left"></i> 
        <i>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim.</i>
        <i className="bi bi-quote quote-icon-right"></i>
        </p>
        <h3><img src={client_4}/></h3>
        <h2>John Larson</h2>
        <h4>Entrepreneur</h4>
        </div>
        </SwiperSlide>
        </Swiper>
        
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Testimonials
