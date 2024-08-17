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
  const [activeIndex, setActiveIndex] = useState(4)
  const handleOnClick = (index) => {
      setActiveIndex(index)
  }

  return (
      <>
          <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Canada">
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
                                          <li><Link href="countries-details-3" className="current">Canada</Link></li>
                                          <li><Link href="countries-details-6">Australia</Link></li>
                                      </ul>
                                  </div>
                                  <div className="sidebar-widget travel-widget">
                                      <div className="widget-content p_relative">
                                          <figure className="image-box"><img src="assets/images/resource/travel-canada.jpg" alt="Travel Pass Canada" /></figure>
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
                                          <div className="icon-shape"><img src="assets/images/icons/icon-15.png" alt="Download Icon" /></div>
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
                                                          <h2>Immigrate to Canada</h2>
                                                          <p>Canada welcomes thousands of immigrants every year through family sponsorships, skilled worker programs, and other immigration pathways. We are here to guide you through the process.</p>
                                                      </div>
                                                      <div className="two-column mb_30">
                                                          <div className="row clearfix">
                                                              <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                                  <figure className="image-box"><img src="assets/images/resource/canada-immigration.jpeg" alt="Canada Immigration" /></figure>
                                                              </div>
                                                              <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                                  <div className="text">
                                                                      <h3>Permanent Residency in Canada</h3>
                                                                      <p>Canada offers various immigration programs like Express Entry, Provincial Nominee Program (PNP), and more. We help you navigate the system and increase your chances of success.</p>
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
                                                          <h2>Visitor Visas for Canada</h2>
                                                          <p>Canada is known for its natural beauty and vibrant cities. Whether you are visiting for tourism or to visit family, our team will assist you with all the paperwork and application processes.</p>
                                                      </div>
                                                      <div className="two-column mb_30">
                                                          <div className="row clearfix">
                                                              <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                                  <figure className="image-box"><img src="assets/images/resource/canada-visitor.jpeg" alt="Canada Visitor Visa" /></figure>
                                                              </div>
                                                              <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                                  <div className="text">
                                                                      <h3>Visit Canada</h3>
                                                                      <p>With a visitor visa, you can explore Canada's beautiful landscapes or spend time with family. We ensure you have all the necessary documents for a smooth entry.</p>
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
                                                          <h2>Study in Canada</h2>
                                                          <p>Canada is home to some of the world’s top universities and colleges. With affordable tuition and high-quality education, Canada is a great destination for international students.</p>
                                                      </div>
                                                      <div className="two-column mb_30">
                                                          <div className="row clearfix">
                                                              <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                                  <figure className="image-box"><img src="assets/images/resource/canada-education.jpeg" alt="Study in Canada" /></figure>
                                                              </div>
                                                              <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                                  <div className="text">
                                                                      <h3>Canada’s World-Class Education</h3>
                                                                      <p>We assist students in applying to Canadian institutions, securing student visas, and ensuring a successful transition into Canadian academic life.</p>
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
                                                          <h2>Tourism in Canada</h2>
                                                          <p>Canada offers vast wilderness, stunning national parks, and modern cities. Whether you're hiking the Rocky Mountains or visiting Niagara Falls, we help you secure your tourist visa.</p>
                                                      </div>
                                                      <div className="two-column mb_30">
                                                          <div className="row clearfix">
                                                              <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                                  <figure className="image-box"><img src="assets/images/resource/canada-tourist.png" alt="Tourist Visa Canada" /></figure>
                                                              </div>
                                                              <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                                  <div className="text">
                                                                      <h3>Explore Canada’s Beauty</h3>
                                                                      <p>From coast to coast, Canada offers diverse travel experiences. Let us help you with the visa process so you can enjoy all that Canada has to offer.</p>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              {/*countries details end*/}
          </Layout>
      </>
  )
}
