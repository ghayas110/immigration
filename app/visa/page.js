'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from 'react'
import TestmonialSlider1 from "@/components/slider/TestmonialSlider1";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
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



}
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(4)
  const handleOnClick = (index) => {
      setActiveIndex(index)
  }
    const [isOpen, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Visa Overview">
                {/* about section */}
                <section className="about-style-five p_relative">
                <div className="auto-container">
    <div className="row clearfix">
        <div className="col-lg-7 col-md-12 col-sm-12 image-column">
            <figure className="image-box"><img src="assets/images/EB-2NIW/EB-2.png" alt="Visa Consultants" /></figure>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 content-column">
            <div className="content-box">
                <h3>Comprehensive Visa Consultation Services</h3>
                <p>At Visa Consultants, we specialize in providing expert guidance for individuals and businesses navigating the complexities of visa applications. Whether you're seeking a tourist visa, work permit, or permanent residency, our experienced team is here to assist you every step of the way.</p>
                <p>We ensure that all your documentation is accurate and submitted on time, significantly improving your chances of success. Our services cover a wide range of visa types, including family reunification, business visas, student visas, and more.</p>
                <p>With our commitment to transparency and efficiency, we aim to make the visa process as smooth and stress-free as possible. Let us help you achieve your travel and immigration goals with personalized solutions tailored to your unique situation.</p>
            </div>
        </div>
    </div>
</div>

</section>

                 {/*about details end*/}
              
                {/* visa section */}
                <section className="visa-style-two pb_130">
    <div className="auto-container">
        <div className="sec-title centred mb_50">
            <span className="sub-title">Visa Categories</span>
            <h2>Translation Services Inc. offers comprehensive <br /> immigration services.</h2>
        </div>
        <Swiper {...swiperOptions} className="three-item-carousel owl-carousel owl-theme owl-nav-none">
    <SwiperSlide className="slide-item p_relative">
        <div className="visa-block-two">
            <div className="inner-box">
                <div className="static-content">
                    <div className="content-box">
                        <div className="icon-box"><img src="assets/images/USAE-2TreatyVisa/000.png" alt="EB2 Treaty Visa Icon" /></div>
                        <h3><Link href="visa-details-3">EB2 Treaty Visa</Link></h3>
                        <p>The EB2 Treaty Visa provides a pathway to residence abroad. Our team assists with processing, paperwork, and legal requirements to secure your long-term stay.</p>
                        <div className="link-box">
                        </div>
                    </div>
                    <figure className="image-box"><img src="assets/images/EB-2NIW/EB-2.png" alt="EB2 Treaty Visa" /></figure>
                </div>
                <div className="overlay-content">
                    <div className="content-box">
                        <div className="icon-box"><img src="assets/images/EB-2NIW/Eb2.jpg" alt="EB2 Treaty Visa Icon" /></div>
                        <h3><Link href="visa-details-3">EB2 Treaty Visa</Link></h3>
                        <div className="link-box">
                        </div>
                    </div>
                    <figure className="image-box"><img src="assets/images/EB-2NIW/Eb--2.jpg" alt="EB2 Treaty Visa Overlay" /></figure>
                </div>
            </div>
        </div>
    </SwiperSlide>
    
    <SwiperSlide className="slide-item p_relative">
        <div className="visa-block-two">
            <div className="inner-box">
                <div className="static-content">
                    <div className="content-box">
                        <div className="icon-box"><img src="assets/images/EB-1A/Picture3.png" alt="EB1A Visa Icon" /></div>
                        <h3><Link href="visa-details">EB1A Visa</Link></h3>
                        <p>The EB1A Visa is designed for individuals seeking to expand their business internationally. We assist with all necessary documentation and visa application steps.</p>
                        <div className="link-box">
                        </div>
                    </div>
                    <figure className="image-box"><img src="assets/images/EB-1A/Picture4.png" alt="EB1A Visa" /></figure>
                </div>
                <div className="overlay-content">
                    <div className="content-box">
                        <div className="icon-box"><img src="assets/images/EB-1A/Capture.png" alt="EB1A Visa Icon" /></div>
                        <h3><Link href="visa-details">EB1A Visa</Link></h3>
                        <div className="link-box">
                        </div>
                    </div>
                    <figure className="image-box"><img src="assets/images/EB-2NIW/Eb2.jpg" alt="EB1A Visa Overlay" /></figure>
                </div>
            </div>
        </div>
    </SwiperSlide>
    
    <SwiperSlide className="slide-item p_relative">
        <div className="visa-block-two">
            <div className="inner-box">
                <div className="static-content">
                    <div className="content-box">
                        <div className="icon-box"><img src="assets/images/EB-2NIW/Eb-2.png" alt="EB2-NIW Visa Icon" /></div>
                        <h3><Link href="visa-details-6">EB2 NIW Visa</Link></h3>
                        <p>The EB2-NIW Visa offers a path to permanent residency for professionals with advanced degrees. Our experts guide you through every step of the application process.</p>
                        <div className="link-box">
                        </div>
                    </div>
                    <figure className="image-box"><img src="assets/images/EB-2NIW/fy.png" alt="EB2-NIW Visa" /></figure>
                </div>
                <div className="overlay-content">
                    <div className="content-box">
                        <div className="icon-box"><img src="assets/images/EB-2NIW/EB--2.jpg" alt="EB2-NIW Visa Icon" /></div>
                        <h3><Link href="visa-details-6">EB2-NIW Visa</Link></h3>
                        <div className="link-box">
                        </div>
                    </div>
                    <figure className="image-box"><img src="assets/images/EB-2NIW/Eb2.png" alt="EB2-NIW Visa Overlay" /></figure>
                </div>
            </div>
        </div>
    </SwiperSlide>
</Swiper>

    </div>
</section>

                 {/*visa   end*/}
               
                                                

                            </Layout>
        </>
    )
}


