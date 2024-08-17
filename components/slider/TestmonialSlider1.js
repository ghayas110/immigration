'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnMaven_Proaction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
    }
}
export default function TestmonialSlider1() {
    return (
        <>
          <Swiper {...swiperOptions} className="two-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
    <SwiperSlide className="slide-item p_relative">
        <div className="testimonial-block-one">
            <div className="inner-box">
                <figure className="image-box"><img src="assets/images/resource/testimonial-2.jpg" alt="Testimonial 1" /></figure>
                <div className="content-box">
                    <ul className="rating mb_15 clearfix">
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                    </ul>
                    <h3>Great Immigration Support!</h3>
                    <p>Translation Services Inc. made the immigration process so smooth. I never felt lost at any step. Their support is truly commendable!</p>
                    <h5>Jemmy Catter / <span>CEO Founder</span></h5>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide className="slide-item p_relative">
        <div className="testimonial-block-one">
            <div className="inner-box">
                <figure className="image-box"><img src="assets/images/resource/testimonial-3.jpg" alt="Testimonial 2" /></figure>
                <div className="content-box">
                    <ul className="rating mb_15 clearfix">
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                    </ul>
                    <h3>Highly Professional Team</h3>
                    <p>The team at Translation Services Inc. is top-notch. They handled everything with professionalism and clarity, ensuring my business visa was secured without a hitch.</p>
                    <h5>Carwl William / <span>CTO</span></h5>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide className="slide-item p_relative">
        <div className="testimonial-block-one">
            <div className="inner-box">
                <figure className="image-box"><img src="assets/images/resource/testimonial-2.jpg" alt="Testimonial 3" /></figure>
                <div className="content-box">
                    <ul className="rating mb_15 clearfix">
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                    </ul>
                    <h3>Seamless Process!</h3>
                    <p>I was so stressed about my visa application, but Translation Services Inc. took care of everything. I’m truly grateful for their service.</p>
                    <h5>Jemmy Catter / <span>CEO Founder</span></h5>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide className="slide-item p_relative">
        <div className="testimonial-block-one">
            <div className="inner-box">
                <figure className="image-box"><img src="assets/images/resource/testimonial-3.jpg" alt="Testimonial 4" /></figure>
                <div className="content-box">
                    <ul className="rating mb_15 clearfix">
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                    </ul>
                    <h3>Exceptional Service!</h3>
                    <p>From start to finish, the process was handled with care and efficiency. I’m so glad I chose Translation Services Inc. for my visa needs!</p>
                    <h5>Carwl William / <span>CTO</span></h5>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide className="slide-item p_relative">
        <div className="testimonial-block-one">
            <div className="inner-box">
                <figure className="image-box"><img src="assets/images/resource/testimonial-2.jpg" alt="Testimonial 5" /></figure>
                <div className="content-box">
                    <ul className="rating mb_15 clearfix">
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                    </ul>
                    <h3>Great Guidance and Support!</h3>
                    <p>They helped me with all the paperwork and guided me step by step through the visa process. I couldn’t have asked for better support!</p>
                    <h5>Jemmy Catter / <span>CEO Founder</span></h5>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide className="slide-item p_relative">
        <div className="testimonial-block-one">
            <div className="inner-box">
                <figure className="image-box"><img src="assets/images/resource/testimonial-3.jpg" alt="Testimonial 6" /></figure>
                <div className="content-box">
                    <ul className="rating mb_15 clearfix">
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                        <li><i className="icon-15"></i></li>
                    </ul>
                    <h3>Professional and Reliable!</h3>
                    <p>The team’s professionalism and attention to detail ensured that my visa application was approved without any issues. I highly recommend them!</p>
                    <h5>Carwl William / <span>CTO</span></h5>
                </div>
            </div>
        </div>
    </SwiperSlide>
</Swiper>

        </>
    )
}
