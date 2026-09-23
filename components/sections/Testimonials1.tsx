"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials1Data } from "../../data/sections/testimonials1";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    breakpoints: {
        1200: { slidesPerView: 2 },
        992: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        576: { slidesPerView: 1 },
        0: { slidesPerView: 1 },
    },
    pagination: {
        el: ".swiper-pagination",
    },
};

export default function Testimonials1() {
    return (
        <>
            <section className="section-testimonials-1 position-relative pt-120 pb-120 bg-900 overflow-hidden">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Cambiamos a col-lg-10 y lo centramos para que las tarjetas respiren */}
                        <div className="col-lg-10 text-center">
                            <h3 className="ds-3 mt-3 mb-3 text-primary-1">{testimonials1Data.title}</h3>
                            <span className="fs-5 fw-medium text-200">
                                {testimonials1Data.subtitle}
                            </span>
                            
                            <div className="row mt-8 text-start">
                                <Swiper {...swiperOptions} className="swiper slider-2 pt-2 pb-3">
                                    <div className="swiper-wrapper">
                                        {testimonials1Data.testimonials.map((testimonial) => (
                                            <SwiperSlide key={testimonial.id}>
                                                <div className="bg-white card-testimonial-1 p-lg-7 p-md-5 mx-3 mx-md-0 p-4 border-2 rounded-4 position-relative">
                                                    
                                                    {/* Logo de la empresa */}
                                                    <div className="mb-6 logo" style={{ height: '40px' }}>
                                                        <img src={testimonial.companyLogo} alt="company logo" style={{ maxHeight: '100%', objectFit: 'contain' }} />
                                                    </div>
                                                    
                                                    {/* Sistema de estrellas dinámico */}
                                                    <div className="d-flex mb-5">
                                                        {[...Array(5)].map((_, index) => (
                                                            <i 
                                                                key={index} 
                                                                className={`ri-star-fill fs-7 ${index < testimonial.stars ? 'text-primary-1' : 'text-500'}`} 
                                                            />
                                                        ))}
                                                    </div>
                                                    
                                                    {/* Reseña */}
                                                    <h6 className="mb-7">{testimonial.review}</h6>
                                                    
                                                    {/* Autor */}
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="ms-2 mb-0">
                                                            {testimonial.authorName} <span className="fs-6 fw-regular"> - {testimonial.authorRole}</span>
                                                        </h6>
                                                    </div>

                                                    {/* Ícono de comillas decorativas */}
                                                    <div className="position-absolute top-0 end-0 m-5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                                                            <g clipPath="url(#clip0_551_13914)">
                                                                <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                                                                <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                                                            </g>
                                                            <defs>
                                                                <clipPath>
                                                                    <rect width={52} height={52} fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </div>
                                    <div className="swiper-pagination" />
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}