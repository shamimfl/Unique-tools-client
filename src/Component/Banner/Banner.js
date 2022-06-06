import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function Banner() {
    const pagination = {
        clickable: true,
        renderBullet: function ( className) {
            return '<span class="' + className + '">'  + "</span>";
        },
    };

    return (
        <div className="z-20">
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                 <SwiperSlide>
                    <img className="w-full h-60 lg:h-[80vh]" src="https://www.twi-global.com/image-library/hero/manufacturing-istock-973143870.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-60 lg:h-[80vh]" src="https://www.ericsson.com/4aaaa2/assets/global/qbank/2020/11/03/industry-robots-automation-automotive-manufacturing-2-1186911b8faadcc7ac9e267ec1c5fc18e06807.jpg" alt="" />
                </SwiperSlide>
               
                <SwiperSlide>
                    <img className="w-full h-60 lg:h-[80vh]" src="https://media.istockphoto.com/photos/smart-industry-robot-arms-for-digital-factory-production-technology-picture-id1275786906?k=20&m=1275786906&s=612x612&w=0&h=KhwKGbSIuqXUV-kkvrTejNeVvc9T0bKmlKJWQBZsRMc=" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
