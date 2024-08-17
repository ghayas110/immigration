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
            <figure className="image-box"><img src="assets/images/resource/about-8.jpg" alt="" /></figure>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                    <h3>Enforcement of Proper Uniform for Immigration Officers</h3>
                    <p>In a recent directive, Commissioner Morente emphasized the importance of proper uniform compliance among immigration officers. The initiative is a response to complaints received about officers not adhering to uniform standards during their duty hours.</p>
                    <p>“Our immigration officers must always be in complete uniform, with nameplates and IDs visible at all times,” Morente stated. “This is part of our ongoing commitment to public service excellence through the BI CARES project,” he added.</p>
                    <p>The BI CARES project focuses on enhancing the quality of public service through the core values of courtesy, accountability, responsibility, efficiency, and service. Morente added, “As law enforcers, professionalism is key. While we uphold the law, we must also exemplify courteous and responsible behavior.”</p>
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
                                <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="Student Visa Icon" /></div>
                                <h3><Link href="visa-details-4">Student Visa</Link></h3>
                                <p>Get your student visa to pursue higher education abroad. Our services assist you in preparing the necessary documents and application.</p>
                                <div className="link-box">
                                    <Link href="visa-details-4">Read More</Link>
                                </div>
                            </div>
                            <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="Student Visa" /></figure>
                        </div>
                        <div className="overlay-content">
                            <div className="content-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="Student Visa Icon" /></div>
                                <h3><Link href="visa-details-4">Student Visa</Link></h3>
                                <div className="link-box">
                                    <Link href="visa-details-4">Read More</Link>
                                </div>
                            </div>
                            <figure className="image-box"><img src="assets/images/resource/visa-8.jpg" alt="Student Visa Overlay" /></figure>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slide-item p_relative">
                <div className="visa-block-two">
                    <div className="inner-box">
                        <div className="static-content">
                            <div className="content-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-6.png" alt="Residence Visa Icon" /></div>
                                <h3><Link href="visa-details-3">Residence Visa</Link></h3>
                                <p>Secure your residence visa to live abroad long-term. We help with application processing, paperwork, and other legal requirements.</p>
                                <div className="link-box">
                                    <Link href="visa-details-3">Read More</Link>
                                </div>
                            </div>
                            <figure className="image-box"><img src="assets/images/resource/visa-5.jpg" alt="Residence Visa" /></figure>
                        </div>
                        <div className="overlay-content">
                            <div className="content-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-6.png" alt="Residence Visa Icon" /></div>
                                <h3><Link href="visa-details-3">Residence Visa</Link></h3>
                                <div className="link-box">
                                    <Link href="visa-details-3">Read More</Link>
                                </div>
                            </div>
                            <figure className="image-box"><img src="assets/images/resource/visa-9.jpg" alt="Residence Visa Overlay" /></figure>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slide-item p_relative">
                <div className="visa-block-two">
                    <div className="inner-box">
                        <div className="static-content">
                            <div className="content-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt="Business Visa Icon" /></div>
                                <h3><Link href="visa-details">Business Visa</Link></h3>
                                <p>Expand your business internationally with a business visa. We assist in navigating the application process for business travelers.</p>
                                <div className="link-box">
                                    <Link href="visa-details">Read More</Link>
                                </div>
                            </div>
                            <figure className="image-box"><img src="assets/images/resource/visa-6.jpg" alt="Business Visa" /></figure>
                        </div>
                        <div className="overlay-content">
                            <div className="content-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt="Business Visa Icon" /></div>
                                <h3><Link href="visa-details">Business Visa</Link></h3>
                                <div className="link-box">
                                    <Link href="visa-details">Read More</Link>
                                </div>
                            </div>
                            <figure className="image-box"><img src="assets/images/resource/visa-10.jpg" alt="Business Visa Overlay" /></figure>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slide-item p_relative">
                <div className="visa-block-two">
                    <div className="inner-box">
                        <div className="static-content">
                            <div className="content-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="Tourist Visa Icon" /></div>
                                <h3><Link href="visa-details-6">Tourist Visa</Link></h3>
                                <p>Explore new countries with a tourist visa. Our experts guide you through the application process for a stress-free experience.</p>
                                <div className="link-box">
                                    <Link href="visa-details-6">Read More</Link>
                                </div>
                            </div>
                            <figure className="image-box"><img src="assets/images/resource/visa-7.jpg" alt="Tourist Visa" /></figure>
                        </div>
                        <div className="overlay-content">
                            <div className="content-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="Tourist Visa Icon" /></div>
                                <h3><Link href="visa-details-6">Tourist Visa</Link></h3>
                                <div className="link-box">
                                    <Link href="visa-details-6">Read More</Link>
                                </div>
                            </div>
                            <figure className="image-box"><img src="assets/images/resource/visa-11.jpg" alt="Tourist Visa Overlay" /></figure>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</section>

                 {/*visa   end*/}
                 <section className="testimonial-style-two pb_150">
                    <div className="auto-container">
                        <div className="sec-title centred mb_60">
                        <span className="sub-title">Testimonial</span>
                        <h2>What people say <br />about us</h2>
                        </div>
                        <div className="content-box">
                        {/*Theme Carousel*/}
                        <TestmonialSlider1 />                        
                    </div>
                        </div>
                    </section>
                                                

                            </Layout>
        </>
    )
}


