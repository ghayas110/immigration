'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from 'react'

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
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Australia">
                {/* countries section */}
                <section className="countries-details p_relative">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="countries-sidebar default-sidebar">
                                    <div className="sidebar-widget category-widget">
                                        <ul className="category-list clearfix">
                                            <li><Link href="countries-details">United States</Link></li>
                                            <li><Link href="countries-details-2">Germany</Link></li>
                                            <li><Link href="countries-details-3">Canada</Link></li>
                                     
                                            <li><Link href="countries-details-6" className="current">Australia</Link></li>
                                        </ul>
                                    </div>
                                    <div className="sidebar-widget travel-widget">
                                        <div className="widget-content p_relative">
                                            <figure className="image-box"><img src="/assets/images/resource/travel-australia.jpeg" alt="Travel Australia" /></figure>
                                            <div className="content-box">
                                                <h3>Travel Pass</h3>
                                                <ul className="list-item clearfix">
                                                    <li>Application Form</li>
                                                    <li>Checklist</li>
                                                    <li>Guidelines</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget download-widget">
                                        <div className="widget-content">
                                            <div className="icon-shape"><img src="/assets/images/icons/icon-15.png" alt="Download Icon" /></div>
                                            <h3>Annual Report / <br />Online Appointment</h3>
                                            <ul className="download-list clearfix">
                                                <li>
                                                    <Link href="coaching-details">
                                                        <i className="icon-50"></i>
                                                        <p>Application Form</p>
                                                        <span>450kb</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="coaching-details">
                                                        <i className="icon-50"></i>
                                                        <p>Guidelines</p>
                                                        <span>350kb</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                <div className="countries-details-content">
                                    <div className="tabs-box">
                                        <div className="tab-btn-box pb_60">
                                            <ul className="tab-btns tab-buttons clearfix" role="tablist">
                                                <li className="nav-link" onClick={() => handleOnClick(1)}>
                                                    <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}><h5><i className="icon-52"></i>Immigration</h5></a>
                                                </li>
                                                <li className="nav-item" onClick={() => handleOnClick(2)}>
                                                    <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}><h5><i className="icon-53"></i>Visitor visas</h5></a>
                                                </li>
                                                <li className="nav-item" onClick={() => handleOnClick(3)}>
                                                    <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}><h5><i className="icon-54"></i>Education</h5></a>
                                                </li>
                                                <li className="nav-item" onClick={() => handleOnClick(4)}>
                                                    <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}><h5><i className="icon-55"></i>Tourist</h5></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                            {/* Immigration Tab */}
                                            <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                                <div className="content-box">
                                                    <div className="content-one mb_30">
                                                        <div className="upper-text mb_30">
                                                            <h2>Immigrate to Australia</h2>
                                                            <p>Australia welcomes thousands of immigrants every year through skilled migration programs, family sponsorships, and other pathways. We provide guidance to ensure a successful immigration process.</p>
                                                        </div>
                                                        <div className="two-column mb_30">
                                                            <div className="row clearfix">
                                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                                    <figure className="image-box"><img src="/assets/images/resource/australia-immigration.jpeg" alt="Australia Immigration" /></figure>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                                    <div className="text">
                                                                        <h3>Permanent Residency in Australia</h3>
                                                                        <p>Australia offers numerous immigration programs like the Skilled Migration Program, the Family Visa Program, and more. Our expert team will help you navigate the process effectively.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Visitor Visa Tab */}
                                            <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                                <div className="content-box">
                                                    <div className="content-one mb_30">
                                                        <div className="upper-text mb_30">
                                                            <h2>Visitor Visas for Australia</h2>
                                                            <p>Australia is known for its iconic landmarks like the Sydney Opera House and the Great Barrier Reef. Whether you're visiting for tourism or to visit family, we make sure your visa process is seamless.</p>
                                                        </div>
                                                        <div className="two-column mb_30">
                                                            <div className="row clearfix">
                                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                                    <figure className="image-box"><img src="/assets/images/resource/australia-visitor.jpeg" alt="Australia Visitor Visa" /></figure>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                                    <div className="text">
                                                                        <h3>Visit Australia</h3>
                                                                        <p>Explore Australia's diverse landscapes or spend time with family. We assist you with all necessary paperwork for a smooth visa application process.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Education Tab */}
                                            <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                                <div className="content-box">
                                                    <div className="content-one mb_30">
                                                        <div className="upper-text mb_30">
                                                            <h2>Study in Australia</h2>
                                                            <p>Australia is home to world-renowned universities and colleges. With a strong focus on research and education, Australia attracts students from around the world.</p>
                                                        </div>
                                                        <div className="two-column mb_30">
                                                            <div className="row clearfix">
                                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                                    <figure className="image-box"><img src="/assets/images/resource/australia-education.jpeg" alt="Study in Australia" /></figure>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                                    <div className="text">
                                                                        <h3>Australia’s Education System</h3>
                                                                        <p>We assist students in applying to Australian institutions, securing student visas, and ensuring a smooth transition to their academic journey in Australia.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Tourist Visa Tab */}
                                            <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                                <div className="content-box">
                                                    <div className="content-one mb_30">
                                                        <div className="upper-text mb_30">
                                                            <h2>Tourism in Australia</h2>
                                                            <p>Australia offers unique wildlife, beautiful beaches, and bustling cities. Whether you're visiting the outback or diving in the Great Barrier Reef, we help you with your tourist visa needs.</p>
                                                        </div>
                                                        <div className="two-column mb_30">
                                                            <div className="row clearfix">
                                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                                    <figure className="image-box"><img src="/assets/images/resource/australia-tourism.jpeg" alt="Australia Tourism" /></figure>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                                    <div className="text">
                                                                        <h3>Explore Australia's Natural Wonders</h3>
                                                                        <p>From Uluru to the Great Ocean Road, Australia offers unforgettable experiences. Let us assist you in getting your tourist visa so you can enjoy everything Australia has to offer.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Swiper Component */}
                                            <Swiper {...swiperOptions} className="three-item-carousel-two owl-carousel owl-theme owl-nav-none">
                                                <SwiperSlide className="slide-item p_relative">
                                                    <div className="visa-block-two">
                                                        <div className="inner-box">
                                                            <div className="static-content">
                                                                <div className="content-box">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-5.png" alt="Student Visa Icon" /></div>
                                                                    <h3><Link href="visa-details-4">Student Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="/assets/images/resource/visa-4.jpeg" alt="Visa" /></figure>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide className="slide-item p_relative">
                                                    <div className="visa-block-two">
                                                        <div className="inner-box">
                                                            <div className="static-content">
                                                                <div className="content-box">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-6.png" alt="Residence Visa Icon" /></div>
                                                                    <h3><Link href="visa-details-4">Residence Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="/assets/images/resource/visa-5.jpeg" alt="Visa" /></figure>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide className="slide-item p_relative">
                                                    <div className="visa-block-two">
                                                        <div className="inner-box">
                                                            <div className="static-content">
                                                                <div className="content-box">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-8.png" alt="Tourist Visa Icon" /></div>
                                                                    <h3><Link href="visa-details-4">Tourist Visa</Link></h3>
                                                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam</p>
                                                                    <div className="link-box">
                                                                        <Link href="visa-details-4">Read More</Link>
                                                                    </div>
                                                                </div>
                                                                <figure className="image-box"><img src="/assets/images/resource/visa-6.jpeg" alt="Visa" /></figure>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* countries details end */}
            </Layout>
        </>
    )
}
